import { useState, useMemo } from "react";
import { Link } from "react-router";
import { ArrowLeft, Target, Flame, TrendingUp } from "lucide-react";
import {
  LineChart, Line, XAxis, YAxis, Tooltip,
  Legend, ResponsiveContainer, CartesianGrid,
} from "recharts";
import { holdings } from "~/data/portfolio";

const USD_TO_KRW = 1430;

export function meta() {
  return [{ title: "배당 계산기" }];
}

function getAnnualDividendKRW(): number {
  return holdings.reduce((sum, h) => {
    const annual = h.annualDividendPerShare * h.shares;
    return sum + (h.currency === "USD" ? annual * USD_TO_KRW : annual);
  }, 0);
}

function getTotalValueKRW(): number {
  const parse = (v: string) => parseFloat(v?.replace(/[^0-9.]/g, "") || "0") || 0;
  return holdings.reduce((sum, h) => {
    const val = parse(h.rawValue || "");
    return sum + (h.currency === "USD" ? val * USD_TO_KRW : val);
  }, 0);
}

export default function Calculator() {
  const annualDivKRW = getAnnualDividendKRW();
  const monthlyDivKRW = annualDivKRW / 12;
  const totalValueKRW = getTotalValueKRW();
  const avgYield = totalValueKRW > 0 ? annualDivKRW / totalValueKRW : 0;

  const [targetMonthly, setTargetMonthly] = useState(500000);
  const [monthlyExpense, setMonthlyExpense] = useState(2000000);
  const [growthRate, setGrowthRate] = useState(5);
  const [monthlyAddInvest, setMonthlyAddInvest] = useState(500000);

  // 목표 분석
  const progress = Math.min((monthlyDivKRW / targetMonthly) * 100, 100);
  const remainingMonthly = Math.max(targetMonthly - monthlyDivKRW, 0);
  const requiredAdditional = avgYield > 0 ? (remainingMonthly * 12) / avgYield : 0;

  // FIRE 분석 (4% rule)
  const firePortfolio = monthlyExpense * 12 * 25;
  const currentFirePct = Math.min((totalValueKRW / firePortfolio) * 100, 100);
  const canRetire = monthlyDivKRW >= monthlyExpense * 0.9;
  const shortfallMonthly = Math.max(monthlyExpense - monthlyDivKRW, 0);

  // 성장 시뮬레이터
  const growthData = useMemo(() => {
    const years = [0, 1, 2, 3, 5, 7, 10, 15, 20];
    let div = annualDivKRW;

    const points: Record<number, number> = { 0: annualDivKRW };
    for (let y = 1; y <= 20; y++) {
      div = div * (1 + growthRate / 100) + monthlyAddInvest * 12 * avgYield;
      points[y] = div;
    }

    return years.map(yr => ({
      year: `${yr}년`,
      월배당: Math.round(points[yr] / 12),
      목표: targetMonthly,
    }));
  }, [growthRate, monthlyAddInvest, targetMonthly, annualDivKRW, avgYield]);

  const projected5 = growthData.find(d => d.year === "5년")?.월배당 ?? 0;
  const projected10 = growthData.find(d => d.year === "10년")?.월배당 ?? 0;
  const projected20 = growthData.find(d => d.year === "20년")?.월배당 ?? 0;

  return (
    <div className="min-h-screen bg-gray-950 text-white p-6">
      {/* 헤더 */}
      <div className="flex items-center gap-4 mb-8">
        <Link to="/" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm">
          <ArrowLeft size={16} />
          대시보드
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-white">🧮 배당 계산기</h1>
          <p className="text-gray-400 text-sm mt-1">목표 달성 분석 · FIRE 계산기 · 성장 시뮬레이터</p>
        </div>
      </div>

      {/* 현재 상태 요약 */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
        <StatCard label="현재 월 배당" value={`₩${Math.round(monthlyDivKRW).toLocaleString()}`} sub="세전 추정" color="text-green-400" />
        <StatCard label="연간 배당" value={`₩${Math.round(annualDivKRW).toLocaleString()}`} sub="세전 추정" color="text-indigo-400" />
        <StatCard label="포트폴리오 총액" value={`₩${Math.round(totalValueKRW / 100000000 * 10) / 10}억`} sub={`평균 배당률 ${(avgYield * 100).toFixed(2)}%`} color="text-yellow-400" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* 목표 계산기 */}
        <div className="bg-gray-900 rounded-xl p-6">
          <div className="flex items-center gap-2 mb-5">
            <Target size={18} className="text-indigo-400" />
            <h2 className="font-semibold text-white">월 배당 목표 계산기</h2>
          </div>

          <div className="mb-5">
            <label className="text-gray-400 text-xs mb-2 block">목표 월 배당 수령액</label>
            <div className="flex items-center gap-3 mb-2">
              <input
                type="number"
                min={100000} max={5000000} step={50000}
                value={targetMonthly}
                onChange={e => setTargetMonthly(Number(e.target.value))}
                className="bg-gray-800 text-white px-3 py-2 rounded-lg text-sm w-36 outline-none border border-gray-700 focus:border-indigo-500"
              />
              <span className="text-gray-400 text-sm">원 / 월</span>
            </div>
            <input
              type="range" min={100000} max={5000000} step={50000}
              value={targetMonthly}
              onChange={e => setTargetMonthly(Number(e.target.value))}
              className="w-full accent-indigo-500"
            />
            <div className="flex justify-between text-gray-600 text-xs mt-1">
              <span>₩10만</span><span>₩500만</span>
            </div>
          </div>

          {/* 달성률 */}
          <div className="bg-gray-800 rounded-lg p-4 mb-4">
            <div className="flex justify-between text-sm mb-2">
              <span className="text-gray-400">달성률</span>
              <span className="font-bold text-white">{progress.toFixed(1)}%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-3 mb-3 overflow-hidden">
              <div
                className="h-3 rounded-full transition-all duration-500"
                style={{
                  width: `${progress}%`,
                  background: progress >= 100 ? "#22c55e" : progress >= 50 ? "#6366f1" : "#f59e0b",
                }}
              />
            </div>
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div>
                <div className="text-gray-500">현재 월 배당</div>
                <div className="text-green-400 font-semibold text-base mt-0.5">₩{Math.round(monthlyDivKRW).toLocaleString()}</div>
              </div>
              <div>
                <div className="text-gray-500">목표까지 부족</div>
                <div className="text-yellow-400 font-semibold text-base mt-0.5">₩{Math.round(remainingMonthly).toLocaleString()}</div>
              </div>
            </div>
          </div>

          <div className="bg-indigo-950/50 border border-indigo-800/50 rounded-lg p-4">
            <div className="text-xs text-gray-400 mb-1">목표 달성에 필요한 추가 투자금 (일시불)</div>
            <div className="text-2xl font-bold text-indigo-300">
              ₩{Math.round(requiredAdditional / 10000).toLocaleString()}만원
            </div>
            <div className="text-xs text-gray-500 mt-1">현재 평균 배당률 {(avgYield * 100).toFixed(2)}% 기준</div>
          </div>
        </div>

        {/* FIRE 계산기 */}
        <div className="bg-gray-900 rounded-xl p-6">
          <div className="flex items-center gap-2 mb-5">
            <Flame size={18} className="text-orange-400" />
            <h2 className="font-semibold text-white">FIRE 계산기</h2>
          </div>

          <div className="mb-5">
            <label className="text-gray-400 text-xs mb-2 block">은퇴 후 월 생활비</label>
            <div className="flex items-center gap-3 mb-2">
              <input
                type="number"
                min={500000} max={10000000} step={100000}
                value={monthlyExpense}
                onChange={e => setMonthlyExpense(Number(e.target.value))}
                className="bg-gray-800 text-white px-3 py-2 rounded-lg text-sm w-36 outline-none border border-gray-700 focus:border-orange-500"
              />
              <span className="text-gray-400 text-sm">원 / 월</span>
            </div>
            <input
              type="range" min={500000} max={10000000} step={100000}
              value={monthlyExpense}
              onChange={e => setMonthlyExpense(Number(e.target.value))}
              className="w-full accent-orange-500"
            />
          </div>

          <div className={`rounded-lg p-4 mb-4 ${canRetire ? "bg-green-950/50 border border-green-800/50" : "bg-orange-950/50 border border-orange-800/50"}`}>
            <div className="text-base font-bold mb-1">
              {canRetire ? "🎉 지금 은퇴 가능!" : "📈 아직 더 필요해요"}
            </div>
            <div className="text-xs text-gray-400">
              {canRetire
                ? `월 배당 ₩${Math.round(monthlyDivKRW).toLocaleString()}이 생활비를 충당해요`
                : `월 ₩${Math.round(shortfallMonthly).toLocaleString()} 추가 배당 필요`}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 mb-3">
            <div className="bg-gray-800 rounded-lg p-3">
              <div className="text-xs text-gray-500 mb-1">필요 포트폴리오 (4% rule)</div>
              <div className="text-lg font-bold text-white">
                ₩{(firePortfolio / 100000000).toFixed(1)}억
              </div>
            </div>
            <div className="bg-gray-800 rounded-lg p-3">
              <div className="text-xs text-gray-500 mb-1">현재 FIRE 달성률</div>
              <div className="text-lg font-bold text-orange-400">{currentFirePct.toFixed(1)}%</div>
            </div>
          </div>

          <div className="w-full bg-gray-700 rounded-full h-2.5 overflow-hidden">
            <div
              className="h-2.5 rounded-full bg-orange-500 transition-all duration-500"
              style={{ width: `${currentFirePct}%` }}
            />
          </div>
          <div className="flex justify-between text-xs text-gray-600 mt-1">
            <span>₩0</span>
            <span>₩{(firePortfolio / 100000000).toFixed(1)}억</span>
          </div>
        </div>
      </div>

      {/* 배당 성장 시뮬레이터 */}
      <div className="bg-gray-900 rounded-xl p-6">
        <div className="flex items-center gap-2 mb-5">
          <TrendingUp size={18} className="text-green-400" />
          <h2 className="font-semibold text-white">배당 성장 시뮬레이터</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="text-gray-400 text-xs mb-2 block">
              연 배당 성장률
              <span className="text-green-400 font-bold ml-2">{growthRate}%</span>
            </label>
            <input
              type="range" min={0} max={15} step={0.5}
              value={growthRate}
              onChange={e => setGrowthRate(Number(e.target.value))}
              className="w-full accent-green-500"
            />
            <div className="flex justify-between text-gray-600 text-xs mt-1">
              <span>0%</span><span>15%</span>
            </div>
          </div>
          <div>
            <label className="text-gray-400 text-xs mb-2 block">
              월 추가 투자금
              <span className="text-blue-400 font-bold ml-2">₩{(monthlyAddInvest / 10000).toFixed(0)}만</span>
            </label>
            <input
              type="range" min={0} max={3000000} step={100000}
              value={monthlyAddInvest}
              onChange={e => setMonthlyAddInvest(Number(e.target.value))}
              className="w-full accent-blue-500"
            />
            <div className="flex justify-between text-gray-600 text-xs mt-1">
              <span>₩0</span><span>₩300만</span>
            </div>
          </div>
        </div>

        <ResponsiveContainer width="100%" height={280}>
          <LineChart data={growthData} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis dataKey="year" stroke="#6b7280" tick={{ fill: "#9ca3af", fontSize: 11 }} />
            <YAxis
              stroke="#6b7280"
              tick={{ fill: "#9ca3af", fontSize: 11 }}
              tickFormatter={v => `${(v / 10000).toFixed(0)}만`}
            />
            <Tooltip
              contentStyle={{ backgroundColor: "#1f2937", border: "none", borderRadius: "8px" }}
              labelStyle={{ color: "#fff" }}
              formatter={(v: unknown) => [`₩${(v as number).toLocaleString()}`, ""]}
            />
            <Legend wrapperStyle={{ color: "#9ca3af", fontSize: 12 }} />
            <Line type="monotone" dataKey="월배당" stroke="#22c55e" strokeWidth={2.5} dot={{ fill: "#22c55e", r: 4 }} activeDot={{ r: 6 }} />
            <Line type="monotone" dataKey="목표" stroke="#6366f1" strokeWidth={1.5} strokeDasharray="5 5" dot={false} />
          </LineChart>
        </ResponsiveContainer>

        <div className="grid grid-cols-3 gap-3 mt-5">
          {[{ yr: 5, val: projected5 }, { yr: 10, val: projected10 }, { yr: 20, val: projected20 }].map(({ yr, val }) => (
            <div key={yr} className="bg-gray-800 rounded-lg p-4 text-center">
              <div className="text-gray-500 text-xs mb-1">{yr}년 후</div>
              <div className="text-green-400 font-bold text-lg">₩{(val / 10000).toFixed(0)}만</div>
              <div className="text-gray-600 text-xs">/월</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function StatCard({
  label, value, sub, color,
}: {
  label: string; value: string; sub: string; color: string;
}) {
  return (
    <div className="bg-gray-900 rounded-xl p-5">
      <div className="text-gray-400 text-xs mb-2">{label}</div>
      <div className={`text-xl font-bold ${color}`}>{value}</div>
      <div className="text-gray-600 text-xs mt-1">{sub}</div>
    </div>
  );
}
