import { useState } from "react";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip,
  PieChart, Pie, Cell, ResponsiveContainer,
} from "recharts";
import { TrendingUp, DollarSign, PieChartIcon, CalendarDays, RefreshCw, Crown, Calculator } from "lucide-react";
import { holdings, portfolioSummary, calcPortfolioStats, type Holding } from "~/data/portfolio";
import { stockMetrics, getMetrics } from "~/data/metrics";
import { Link } from "react-router";
import StockDetailDrawer from "~/components/StockDetailDrawer";

export function meta() {
  return [{ title: "배당 대시보드" }];
}

export default function Home() {
  const stats = calcPortfolioStats(holdings);
  const [selectedHolding, setSelectedHolding] = useState<Holding | null>(null);

  // 보유 종목 상위 8개로 파이 차트
  const parseValue = (v: string) => parseFloat(v?.replace(/[^0-9.]/g, '') || '0') || 0;
  const totalRaw = holdings.reduce((s, h) => s + parseValue(h.rawValue || ''), 0);

  const pieData = holdings
    .filter(h => h.rawValue)
    .map(h => ({
      name: h.ticker,
      value: parseFloat(((parseValue(h.rawValue || '') / totalRaw) * 100).toFixed(1)),
      color: h.color,
    }))
    .sort((a, b) => b.value - a.value)
    .slice(0, 8);

  // 종목별 연간 배당금 (KRW 환산, 1 USD ≈ 1,430 KRW)
  const USD_TO_KRW = 1430;

  // 섹터별 배분 계산
  const SECTOR_COLORS: Record<string, string> = {
    "ETF": "#6366f1",
    "리츠": "#f59e0b",
    "기술주": "#8b5cf6",
    "채권": "#06b6d4",
    "필수 소비재": "#22c55e",
    "가상자산": "#f97316",
  };
  const sectorMap = new Map<string, { value: number; dividend: number }>();
  for (const h of holdings) {
    const val = parseValue(h.rawValue || "");
    const krwVal = h.currency === "USD" ? val * USD_TO_KRW : val;
    const annualDiv = h.annualDividendPerShare * h.shares;
    const krwDiv = h.currency === "USD" ? annualDiv * USD_TO_KRW : annualDiv;
    const prev = sectorMap.get(h.sector) ?? { value: 0, dividend: 0 };
    sectorMap.set(h.sector, { value: prev.value + krwVal, dividend: prev.dividend + krwDiv });
  }
  const totalPortValue = Array.from(sectorMap.values()).reduce((s, v) => s + v.value, 0);
  const totalDivValue = Array.from(sectorMap.values()).reduce((s, v) => s + v.dividend, 0);
  const sectorPieData = Array.from(sectorMap.entries())
    .map(([sector, data]) => ({
      name: sector,
      value: parseFloat(((data.value / totalPortValue) * 100).toFixed(1)),
      dividend: parseFloat(((data.dividend / totalDivValue) * 100).toFixed(1)),
      color: SECTOR_COLORS[sector] ?? "#9ca3af",
    }))
    .sort((a, b) => b.value - a.value);
  const barData = holdings
    .filter(h => h.annualDividendPerShare > 0)
    .map(h => {
      const annualDiv = h.annualDividendPerShare * h.shares;
      const krwValue = h.currency === "USD" ? annualDiv * USD_TO_KRW : annualDiv;
      return { name: h.ticker, 연간배당: Math.round(krwValue / 1000), color: h.color };
    })
    .sort((a, b) => b.연간배당 - a.연간배당)
    .slice(0, 8);

  return (
    <div className="min-h-screen bg-gray-950 text-white p-6">
      {/* 헤더 */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-white">📊 배당 대시보드</h1>
          <p className="text-gray-400 text-sm mt-1">종구리의 포트폴리오</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 text-gray-500 text-xs">
            <RefreshCw size={12} />
            <span>업데이트: {portfolioSummary.lastUpdated}</span>
          </div>
          <Link
            to="/calendar"
            className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-lg text-sm transition-colors"
          >
            <CalendarDays size={16} />
            배당 캘린더
          </Link>
          <Link
            to="/watchlist"
            className="flex items-center gap-2 bg-yellow-600 hover:bg-yellow-500 text-white px-4 py-2 rounded-lg text-sm transition-colors"
          >
            <Crown size={16} />
            왕족·귀족주
          </Link>
          <Link
            to="/calculator"
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg text-sm transition-colors"
          >
            <Calculator size={16} />
            계산기
          </Link>
        </div>
      </div>

      {/* 요약 카드 */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <StatCard
          icon={<DollarSign size={20} className="text-green-400" />}
          label="총 평가금액"
          value={portfolioSummary.totalAsset}
          sub={<span className="text-green-400">{portfolioSummary.totalReturn}</span>}
        />
        <StatCard
          icon={<TrendingUp size={20} className="text-indigo-400" />}
          label="연간 배당금"
          value={portfolioSummary.annualDividend}
          sub={<span className="text-gray-400">세전 기준</span>}
        />
        <StatCard
          icon={<PieChartIcon size={20} className="text-yellow-400" />}
          label="시가 배당률"
          value={portfolioSummary.dividendYield}
          sub={<span className="text-gray-400">투자: {portfolioSummary.investDividendYield}</span>}
        />
        <StatCard
          icon={<CalendarDays size={20} className="text-pink-400" />}
          label="보유 종목"
          value={`${holdings.length}개`}
          sub={<span className="text-gray-400">ETF 포함</span>}
        />
      </div>

      {/* 차트 섹션 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* 종목별 누적 배당금 바 차트 */}
        <div className="bg-gray-900 rounded-xl p-5">
          <h2 className="text-sm font-semibold text-gray-400 mb-1">종목별 연간 배당금 (상위 8)</h2>
          <p className="text-gray-600 text-xs mb-4">KRW 환산 기준 (천원) · 1 USD ≈ 1,430 KRW</p>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={barData}>
              <XAxis dataKey="name" stroke="#6b7280" tick={{ fill: "#9ca3af", fontSize: 10 }} />
              <YAxis stroke="#6b7280" tick={{ fill: "#9ca3af", fontSize: 10 }} unit="천" />
              <Tooltip
                contentStyle={{ backgroundColor: "#1f2937", border: "none", borderRadius: "8px" }}
                labelStyle={{ color: "#fff" }}
                formatter={(v: unknown) => [`₩${((v as number) * 1000).toLocaleString()}`, "연간 배당"]}
              />
              <Bar dataKey="연간배당" radius={[4, 4, 0, 0]}>
                {barData.map((entry, i) => (
                  <Cell key={i} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* 포트폴리오 비중 파이차트 */}
        <div className="bg-gray-900 rounded-xl p-5">
          <h2 className="text-sm font-semibold text-gray-400 mb-4">포트폴리오 비중 (상위 8)</h2>
          <div className="flex items-center gap-4">
            <ResponsiveContainer width="55%" height={200}>
              <PieChart>
                <Pie data={pieData} cx="50%" cy="50%" innerRadius={50} outerRadius={75} dataKey="value">
                  {pieData.map((entry, i) => (
                    <Cell key={i} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{ backgroundColor: "#1f2937", border: "none", borderRadius: "8px" }}
                  formatter={(v: unknown) => [`${v as number}%`, "비중"]}
                />
              </PieChart>
            </ResponsiveContainer>
            <div className="flex flex-col gap-1.5 overflow-y-auto max-h-48">
              {pieData.map(d => (
                <div key={d.name} className="flex items-center gap-2 text-xs">
                  <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: d.color }} />
                  <span className="text-gray-300 w-14">{d.name}</span>
                  <span className="text-white font-medium">{d.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 섹터 배분 분석 */}
      <div className="bg-gray-900 rounded-xl p-5 mb-6">
        <h2 className="text-sm font-semibold text-gray-400 mb-4">섹터 배분 분석</h2>
        <div className="flex flex-col sm:flex-row gap-6 items-center">
          <ResponsiveContainer width={180} height={180}>
            <PieChart>
              <Pie data={sectorPieData} cx="50%" cy="50%" innerRadius={45} outerRadius={75} dataKey="value">
                {sectorPieData.map((entry, i) => (
                  <Cell key={i} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{ backgroundColor: "#1f2937", border: "none", borderRadius: "8px" }}
                formatter={(v: unknown) => [`${v as number}%`, "비중"]}
              />
            </PieChart>
          </ResponsiveContainer>
          <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 gap-3">
            {sectorPieData.map(s => (
              <div key={s.name} className="bg-gray-800/60 rounded-lg px-3 py-2.5">
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: s.color }} />
                  <span className="text-gray-300 text-xs font-medium truncate">{s.name}</span>
                </div>
                <div className="text-white font-bold text-sm">{s.value}%</div>
                <div className="text-gray-500 text-xs">배당기여 {s.dividend}%</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 종목 테이블 */}
      <div className="bg-gray-900 rounded-xl overflow-hidden">
        <div className="p-5 border-b border-gray-800 flex items-center justify-between">
          <h2 className="text-sm font-semibold text-gray-400">보유 종목 상세 ({holdings.length}개)</h2>
          <span className="text-gray-600 text-xs">클릭하면 상세 지표를 확인할 수 있어요 👆</span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-800 text-gray-500 text-xs">
                <th className="text-left px-5 py-3">종목</th>
                <th className="text-right px-5 py-3">수량</th>
                <th className="text-right px-5 py-3">평가금액</th>
                <th className="text-right px-5 py-3">수익</th>
                <th className="text-right px-5 py-3">배당률</th>
                <th className="text-right px-5 py-3">현재가</th>
                <th className="text-right px-5 py-3">배당주기</th>
              </tr>
            </thead>
            <tbody>
              {holdings.map((h) => {
                const m = getMetrics(h.ticker);
                const hasMetrics = !!m?.currentPrice;
                return (
                  <tr
                    key={h.ticker}
                    className="border-b border-gray-800/50 hover:bg-gray-800/40 transition-colors cursor-pointer group"
                    onClick={() => setSelectedHolding(h)}
                  >
                    <td className="px-5 py-3">
                      <div className="flex items-center gap-3">
                        <span className="w-2 h-2 rounded-full" style={{ backgroundColor: h.color }} />
                        <div>
                          <div className="font-semibold text-white text-sm group-hover:text-indigo-300 transition-colors">{h.ticker}</div>
                          <div className="text-gray-500 text-xs">{h.sector}</div>
                        </div>
                        {hasMetrics && (
                          <span className="text-gray-600 text-xs opacity-0 group-hover:opacity-100 transition-opacity">상세보기 →</span>
                        )}
                      </div>
                    </td>
                    <td className="text-right px-5 py-3 text-gray-300 text-xs">{h.shares}</td>
                    <td className="text-right px-5 py-3 text-white font-medium text-xs">{h.rawValue}</td>
                    <td className="text-right px-5 py-3 text-xs">
                      <span className={h.rawGain?.includes('+') ? 'text-green-400' : h.rawGain?.includes('-') ? 'text-red-400' : 'text-gray-400'}>
                        {h.rawGain || '-'}
                      </span>
                    </td>
                    <td className="text-right px-5 py-3 text-indigo-400 text-xs">
                      {h.dividendYield > 0 ? `${h.dividendYield}%` : '-'}
                    </td>
                    <td className="text-right px-5 py-3 text-gray-300 text-xs">{h.currentPrice > 0 ? h.currentPrice : '-'}</td>
                    <td className="text-right px-5 py-3">
                      <span className={`text-xs px-2 py-0.5 rounded-full ${h.dividendFrequency === "monthly" ? "bg-green-900/50 text-green-400" : "bg-blue-900/50 text-blue-400"}`}>
                        {h.dividendFrequency === "monthly" ? "월배당" : "분기"}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* 종목 상세 드로어 */}
      {selectedHolding && (
        <StockDetailDrawer
          holding={selectedHolding}
          metrics={getMetrics(selectedHolding.ticker)}
          onClose={() => setSelectedHolding(null)}
        />
      )}
    </div>
  );
}

function StatCard({ icon, label, value, sub }: { icon: React.ReactNode; label: string; value: string; sub: React.ReactNode }) {
  return (
    <div className="bg-gray-900 rounded-xl p-5">
      <div className="flex items-center gap-2 mb-3">
        {icon}
        <span className="text-gray-400 text-xs">{label}</span>
      </div>
      <div className="text-lg font-bold text-white leading-tight">{value}</div>
      <div className="text-xs mt-1">{sub}</div>
    </div>
  );
}
