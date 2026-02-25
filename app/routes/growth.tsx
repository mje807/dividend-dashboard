import { useMemo, useState } from "react";
import { Link } from "react-router";
import { ArrowLeft, LineChart, Rocket, Search } from "lucide-react";
import { bigTechTickers, hyperGrowthTickers } from "~/data/growth";
import { getMetrics } from "~/data/metrics";
import { calcGrowthScore } from "~/utils/growth-score";

export function meta() {
  return [{ title: "성장주 분석" }];
}

type Group = "bigtech" | "hyper";

type Row = {
  ticker: string;
  name: string;
  price: number | null;
  revenueGrowth: number | null;
  roe: number | null;
  margin: number | null;
  pe: number | null;
  score: ReturnType<typeof calcGrowthScore>;
};

function buildRows(tickers: readonly string[]): Row[] {
  return tickers.map((ticker) => {
    const m = getMetrics(ticker);
    const score = calcGrowthScore(m);
    return {
      ticker,
      name: m?.longName ?? ticker,
      price: m?.currentPrice ?? null,
      revenueGrowth: m?.revenueGrowth ?? null,
      roe: m?.roe ?? null,
      margin: m?.profitMargin ?? null,
      pe: (m?.forwardPE && m.forwardPE > 0) ? m.forwardPE : m?.trailingPE ?? null,
      score,
    };
  }).sort((a, b) => b.score.score - a.score.score);
}

export default function GrowthPage() {
  const [group, setGroup] = useState<Group>("bigtech");
  const [query, setQuery] = useState("");

  const bigTechRows = useMemo(() => buildRows(bigTechTickers), []);
  const hyperRows = useMemo(() => buildRows(hyperGrowthTickers), []);

  const rows = group === "bigtech" ? bigTechRows : hyperRows;
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return rows;
    return rows.filter((r) => r.ticker.toLowerCase().includes(q) || r.name.toLowerCase().includes(q));
  }, [rows, query]);

  const top3 = filtered.slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-950 text-white p-6">
      <div className="flex items-center gap-4 mb-8">
        <Link to="/" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm">
          <ArrowLeft size={16} />
          대시보드
        </Link>
      </div>

      <div className="bg-gray-900 rounded-xl p-6 border border-gray-800 mb-5">
        <div className="flex items-center gap-2 mb-2">
          <LineChart size={18} className="text-emerald-400" />
          <h1 className="text-xl font-bold">성장주 분석</h1>
        </div>
        <p className="text-gray-400 text-sm">Big Tech(QQQ Top10 proxy) / Hyper Growth(ARKK proxy) 분리 스코어링</p>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        <button
          onClick={() => setGroup("bigtech")}
          className={`px-4 py-2 rounded-lg text-sm font-medium ${group === "bigtech" ? "bg-indigo-600 text-white" : "bg-gray-900 text-gray-400 hover:text-white"}`}
        >
          <LineChart size={14} className="inline mr-1" /> Big Tech
        </button>
        <button
          onClick={() => setGroup("hyper")}
          className={`px-4 py-2 rounded-lg text-sm font-medium ${group === "hyper" ? "bg-emerald-600 text-white" : "bg-gray-900 text-gray-400 hover:text-white"}`}
        >
          <Rocket size={14} className="inline mr-1" /> Hyper Growth
        </button>
      </div>

      <div className="flex items-center gap-2 bg-gray-900 rounded-xl px-4 py-2 mb-4">
        <Search size={14} className="text-gray-500" />
        <input
          className="bg-transparent text-sm text-white placeholder-gray-500 flex-1 outline-none"
          placeholder="티커/종목명 검색..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {top3.map((g, idx) => (
          <span key={g.ticker} className="text-[11px] px-2 py-1 rounded-full bg-emerald-900/30 text-emerald-300 border border-emerald-700/40">
            TOP{idx + 1} {g.ticker} {g.score.score.toFixed(1)}
          </span>
        ))}
      </div>

      <div className="bg-gray-900 rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-800 text-gray-500 text-xs">
                <th className="text-left px-5 py-3">종목</th>
                <th className="text-right px-4 py-3">현재가</th>
                <th className="text-right px-4 py-3">매출성장률</th>
                <th className="text-right px-4 py-3">ROE</th>
                <th className="text-right px-4 py-3">순이익률</th>
                <th className="text-right px-4 py-3">PE</th>
                <th className="text-right px-4 py-3">점수</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((g) => (
                <tr key={g.ticker} className="border-b border-gray-800/50 hover:bg-gray-800/30">
                  <td className="px-5 py-3">
                    <div className="font-bold text-white text-sm">{g.ticker}</div>
                    <div className="text-gray-500 text-xs max-w-[260px] truncate">{g.name}</div>
                  </td>
                  <td className="text-right px-4 py-3 text-white text-sm">{g.price ? g.price.toLocaleString() : "-"}</td>
                  <td className="text-right px-4 py-3 text-gray-300 text-xs">{g.revenueGrowth !== null ? `${g.revenueGrowth.toFixed(1)}%` : "-"}</td>
                  <td className="text-right px-4 py-3 text-gray-300 text-xs">{g.roe !== null ? `${g.roe.toFixed(1)}%` : "-"}</td>
                  <td className="text-right px-4 py-3 text-gray-300 text-xs">{g.margin !== null ? `${g.margin.toFixed(1)}%` : "-"}</td>
                  <td className="text-right px-4 py-3 text-gray-300 text-xs">{g.pe !== null ? g.pe.toFixed(1) : "-"}</td>
                  <td className={`text-right px-4 py-3 text-sm font-bold ${g.score.color}`}>{g.score.score.toFixed(1)} ({g.score.label})</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
