import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";
import { TrendingUp, DollarSign, PieChartIcon, CalendarDays } from "lucide-react";
import { holdings, calcPortfolioStats } from "~/data/portfolio";
import { Link } from "react-router";

export function meta() {
  return [{ title: "배당 대시보드" }];
}

export default function Home() {
  const stats = calcPortfolioStats(holdings);

  const pieData = holdings.map((h) => ({
    name: h.ticker,
    value: parseFloat(((h.currentPrice * h.shares) / stats.totalValue * 100).toFixed(1)),
    color: h.color,
  }));

  const barData = holdings.map((h) => ({
    name: h.ticker,
    수익률: h.dividendYield,
    color: h.color,
  }));

  return (
    <div className="min-h-screen bg-gray-950 text-white p-6">
      {/* 헤더 */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-white">📊 배당 대시보드</h1>
          <p className="text-gray-400 text-sm mt-1">종구리의 포트폴리오</p>
        </div>
        <Link
          to="/calendar"
          className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-lg text-sm transition-colors"
        >
          <CalendarDays size={16} />
          배당 캘린더
        </Link>
      </div>

      {/* 요약 카드 */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <StatCard
          icon={<DollarSign size={20} className="text-green-400" />}
          label="총 평가금액"
          value={`$${stats.totalValue.toLocaleString("en-US", { maximumFractionDigits: 0 })}`}
          sub={
            <span className={stats.totalGain >= 0 ? "text-green-400" : "text-red-400"}>
              {stats.totalGain >= 0 ? "▲" : "▼"} {Math.abs(stats.totalGainPct).toFixed(2)}%
            </span>
          }
        />
        <StatCard
          icon={<TrendingUp size={20} className="text-indigo-400" />}
          label="연간 배당금"
          value={`$${stats.totalAnnualDividend.toFixed(0)}`}
          sub={<span className="text-gray-400">월 ${stats.monthlyDividend.toFixed(0)}</span>}
        />
        <StatCard
          icon={<PieChartIcon size={20} className="text-yellow-400" />}
          label="평균 배당수익률"
          value={`${stats.avgYield.toFixed(2)}%`}
          sub={<span className="text-gray-400">포트폴리오 기준</span>}
        />
        <StatCard
          icon={<CalendarDays size={20} className="text-pink-400" />}
          label="보유 종목"
          value={`${holdings.length}개`}
          sub={<span className="text-gray-400">ETF 포함</span>}
        />
      </div>

      {/* 테이블 + 차트 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* 배당수익률 바 차트 */}
        <div className="bg-gray-900 rounded-xl p-5">
          <h2 className="text-sm font-semibold text-gray-400 mb-4">종목별 배당수익률 (%)</h2>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={barData}>
              <XAxis dataKey="name" stroke="#6b7280" tick={{ fill: "#9ca3af" }} />
              <YAxis stroke="#6b7280" tick={{ fill: "#9ca3af" }} unit="%" />
              <Tooltip
                contentStyle={{ backgroundColor: "#1f2937", border: "none", borderRadius: "8px" }}
                labelStyle={{ color: "#fff" }}
                formatter={(v: number) => [`${v}%`, "배당수익률"]}
              />
              <Bar dataKey="수익률" radius={[4, 4, 0, 0]}>
                {barData.map((entry, i) => (
                  <Cell key={i} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* 포트폴리오 비중 파이차트 */}
        <div className="bg-gray-900 rounded-xl p-5">
          <h2 className="text-sm font-semibold text-gray-400 mb-4">포트폴리오 비중</h2>
          <div className="flex items-center gap-6">
            <ResponsiveContainer width="60%" height={200}>
              <PieChart>
                <Pie data={pieData} cx="50%" cy="50%" innerRadius={55} outerRadius={80} dataKey="value">
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
            <div className="flex flex-col gap-2">
              {pieData.map((d) => (
                <div key={d.name} className="flex items-center gap-2 text-sm">
                  <span className="w-3 h-3 rounded-full" style={{ backgroundColor: d.color }} />
                  <span className="text-gray-300">{d.name}</span>
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
          <h2 className="text-sm font-semibold text-gray-400">보유 종목 상세</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-800 text-gray-500 text-xs">
                <th className="text-left px-5 py-3">종목</th>
                <th className="text-right px-5 py-3">현재가</th>
                <th className="text-right px-5 py-3">수량</th>
                <th className="text-right px-5 py-3">평가금액</th>
                <th className="text-right px-5 py-3">수익률</th>
                <th className="text-right px-5 py-3">배당수익률</th>
                <th className="text-right px-5 py-3">연간 배당</th>
                <th className="text-right px-5 py-3">배당주기</th>
              </tr>
            </thead>
            <tbody>
              {holdings.map((h) => {
                const value = h.currentPrice * h.shares;
                const cost = h.avgCost * h.shares;
                const gain = ((value - cost) / cost) * 100;
                const annualDiv = h.annualDividendPerShare * h.shares;
                const weight = (value / stats.totalValue) * 100;
                return (
                  <tr key={h.ticker} className="border-b border-gray-800/50 hover:bg-gray-800/30 transition-colors">
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3">
                        <span className="w-2 h-2 rounded-full" style={{ backgroundColor: h.color }} />
                        <div>
                          <div className="font-semibold text-white">{h.ticker}</div>
                          <div className="text-gray-500 text-xs">{h.name}</div>
                        </div>
                      </div>
                    </td>
                    <td className="text-right px-5 py-4 text-gray-300">${h.currentPrice.toFixed(2)}</td>
                    <td className="text-right px-5 py-4 text-gray-300">{h.shares}</td>
                    <td className="text-right px-5 py-4 text-white font-medium">${value.toLocaleString("en-US", { maximumFractionDigits: 0 })}</td>
                    <td className={`text-right px-5 py-4 font-medium ${gain >= 0 ? "text-green-400" : "text-red-400"}`}>
                      {gain >= 0 ? "+" : ""}{gain.toFixed(1)}%
                    </td>
                    <td className="text-right px-5 py-4 text-indigo-400">{h.dividendYield}%</td>
                    <td className="text-right px-5 py-4 text-yellow-400">${annualDiv.toFixed(0)}</td>
                    <td className="text-right px-5 py-4">
                      <span className={`text-xs px-2 py-1 rounded-full ${h.dividendFrequency === "monthly" ? "bg-green-900/50 text-green-400" : "bg-blue-900/50 text-blue-400"}`}>
                        {h.dividendFrequency === "monthly" ? "월배당" : "분기"}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              <tr className="bg-gray-800/30 text-sm font-semibold">
                <td className="px-5 py-4 text-gray-400">합계</td>
                <td colSpan={2} />
                <td className="text-right px-5 py-4 text-white">${stats.totalValue.toLocaleString("en-US", { maximumFractionDigits: 0 })}</td>
                <td className={`text-right px-5 py-4 ${stats.totalGain >= 0 ? "text-green-400" : "text-red-400"}`}>
                  {stats.totalGain >= 0 ? "+" : ""}{stats.totalGainPct.toFixed(1)}%
                </td>
                <td className="text-right px-5 py-4 text-indigo-400">{stats.avgYield.toFixed(2)}%</td>
                <td className="text-right px-5 py-4 text-yellow-400">${stats.totalAnnualDividend.toFixed(0)}</td>
                <td />
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
}

function StatCard({
  icon,
  label,
  value,
  sub,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  sub: React.ReactNode;
}) {
  return (
    <div className="bg-gray-900 rounded-xl p-5">
      <div className="flex items-center gap-2 mb-3">
        {icon}
        <span className="text-gray-400 text-xs">{label}</span>
      </div>
      <div className="text-xl font-bold text-white">{value}</div>
      <div className="text-xs mt-1">{sub}</div>
    </div>
  );
}
