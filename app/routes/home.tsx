import {
  BarChart, Bar, XAxis, YAxis, Tooltip,
  PieChart, Pie, Cell, ResponsiveContainer,
} from "recharts";
import { TrendingUp, DollarSign, PieChartIcon, CalendarDays, RefreshCw, Crown } from "lucide-react";
import { holdings, portfolioSummary, calcPortfolioStats } from "~/data/portfolio";
import { Link } from "react-router";

export function meta() {
  return [{ title: "배당 대시보드" }];
}

export default function Home() {
  const stats = calcPortfolioStats(holdings);

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
                formatter={(v: number) => [`₩${(v * 1000).toLocaleString()}`, "연간 배당"]}
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
                  formatter={(v: number) => [`${v}%`, "비중"]}
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

      {/* 종목 테이블 */}
      <div className="bg-gray-900 rounded-xl overflow-hidden">
        <div className="p-5 border-b border-gray-800">
          <h2 className="text-sm font-semibold text-gray-400">보유 종목 상세 ({holdings.length}개)</h2>
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
              {holdings.map((h) => (
                <tr key={h.ticker} className="border-b border-gray-800/50 hover:bg-gray-800/30 transition-colors">
                  <td className="px-5 py-3">
                    <div className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full" style={{ backgroundColor: h.color }} />
                      <div>
                        <div className="font-semibold text-white text-sm">{h.ticker}</div>
                        <div className="text-gray-500 text-xs">{h.sector}</div>
                      </div>
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
              ))}
            </tbody>
          </table>
        </div>
      </div>
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
