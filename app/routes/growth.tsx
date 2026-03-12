import { useMemo, useState } from "react";
import { Link, useLoaderData } from "react-router";
import { LineChart, Rocket, Search, SlidersHorizontal, Layers, Compass, ArrowUpDown, ChevronUp, ChevronDown } from "lucide-react";
import {
  growth50Tickers,
  megaGrowthTickers,
  innovativeGrowthTickers,
  profitableMidGrowthTickers,
  turnaroundGrowthTickers,
} from "~/data/growth";
import { PageHeader } from "~/components/ui/PageHeader";
import { SectionCard } from "~/components/ui/SectionCard";
import { StatCard } from "~/components/ui/StatCard";
import { StatusBadge } from "~/components/ui/StatusBadge";
import { type StockMetrics } from "~/data/metrics";
import { type GrowthAnalysis } from "~/data/growth-analysis";
import { getGrowthAnalysesLatest, getStockMetricsLatest } from "~/lib/market-data.server";

type Group = "core50" | "mega" | "innovative" | "mid" | "turnaround";

type WeightKey = "growth" | "quality" | "valuation" | "momentum";
type SortKey = "score" | "price" | "revenueGrowth" | "roe" | "pe";

type Weights = Record<WeightKey, number>;

const DEFAULT_WEIGHTS: Weights = {
  growth: 35,
  quality: 30,
  valuation: 20,
  momentum: 15,
};

type ScoreResult = {
  score: number;
  label: "강함" | "보통" | "주의";
  color: string;
  parts: {
    growth: number;
    quality: number;
    valuation: number;
    momentum: number;
  };
};

type Row = {
  ticker: string;
  name: string;
  price: number | null;
  revenueGrowth: number | null;
  roe: number | null;
  margin: number | null;
  pe: number | null;
  metric: StockMetrics | undefined;
  score: ScoreResult;
};

export function meta() {
  return [{ title: "성장주 분석" }];
}

export async function loader() {
  const [metrics, analyses] = await Promise.all([
    getStockMetricsLatest(),
    getGrowthAnalysesLatest(),
  ]);

  const latestAnalyzedAt = analyses
    .map((a) => a.analyzedAt)
    .filter(Boolean)
    .sort((a, b) => String(b).localeCompare(String(a)))[0] ?? null;

  return Response.json({ metrics, analyses, latestAnalyzedAt });
}

function clamp(v: number, min: number, max: number) {
  return Math.max(min, Math.min(max, v));
}

function calcGrowthScoreWithWeights(m: StockMetrics | undefined, w: Weights): ScoreResult {
  if (!m) {
    return {
      score: 5,
      label: "보통",
      color: "text-yellow-400",
      parts: { growth: 5, quality: 5, valuation: 5, momentum: 5 },
    };
  }

  const revenue = m.revenueGrowth ?? 0;
  const roe = m.roe ?? 0;
  const margin = m.profitMargin ?? 0;
  const pe = m.forwardPE && m.forwardPE > 0 ? m.forwardPE : (m.trailingPE && m.trailingPE > 0 ? m.trailingPE : 35);

  const growthPart = clamp((revenue + 10) / 5, 0, 10);
  const qualityPart = clamp((roe / 3 + margin / 3) / 2, 0, 10);
  const valuationPart = clamp(10 - (pe - 22) / 7, 0, 10);

  let momentumPart = 5;
  if (m.currentPrice && m.week52Low && m.week52High && m.week52High > m.week52Low) {
    const pctInRange = ((m.currentPrice - m.week52Low) / (m.week52High - m.week52Low)) * 100;
    momentumPart = clamp((pctInRange - 20) / 6, 0, 10);
  }

  const totalWeight = Math.max(1, w.growth + w.quality + w.valuation + w.momentum);

  const total = clamp(
    growthPart * (w.growth / totalWeight) +
      qualityPart * (w.quality / totalWeight) +
      valuationPart * (w.valuation / totalWeight) +
      momentumPart * (w.momentum / totalWeight),
    1,
    10,
  );

  const fixed = Number(total.toFixed(1));

  if (fixed >= 7) {
    return {
      score: fixed,
      label: "강함",
      color: "text-emerald-400",
      parts: { growth: growthPart, quality: qualityPart, valuation: valuationPart, momentum: momentumPart },
    };
  }
  if (fixed >= 5) {
    return {
      score: fixed,
      label: "보통",
      color: "text-yellow-400",
      parts: { growth: growthPart, quality: qualityPart, valuation: valuationPart, momentum: momentumPart },
    };
  }
  return {
    score: fixed,
    label: "주의",
    color: "text-red-400",
    parts: { growth: growthPart, quality: qualityPart, valuation: valuationPart, momentum: momentumPart },
  };
}

function buildRows(
  tickers: readonly string[],
  weights: Weights,
  metricsMap: Map<string, StockMetrics>,
): Row[] {
  return tickers
    .map((ticker) => {
      const m = metricsMap.get(ticker);
      const score = calcGrowthScoreWithWeights(m, weights);
      return {
        ticker,
        name: m?.longName ?? ticker,
        price: m?.currentPrice ?? null,
        revenueGrowth: m?.revenueGrowth ?? null,
        roe: m?.roe ?? null,
        margin: m?.profitMargin ?? null,
        pe: (m?.forwardPE && m.forwardPE > 0) ? m.forwardPE : m?.trailingPE ?? null,
        metric: m,
        score,
      };
    })
    .sort((a, b) => b.score.score - a.score.score);
}

function WeightSlider({
  label,
  value,
  onChange,
}: {
  label: string;
  value: number;
  onChange: (v: number) => void;
}) {
  return (
    <div>
      <div className="flex items-center justify-between mb-1">
        <span className="text-xs text-gray-400">{label}</span>
        <span className="text-xs text-white font-semibold">{value}</span>
      </div>
      <input
        type="range"
        min={0}
        max={60}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full accent-indigo-500"
      />
    </div>
  );
}

type GrowthLoaderData = {
  metrics: StockMetrics[];
  analyses: GrowthAnalysis[];
  latestAnalyzedAt: string | null;
};

export default function GrowthPage() {
  const { metrics, analyses, latestAnalyzedAt } = useLoaderData<GrowthLoaderData>();

  const metricsMap = useMemo(
    () => new Map<string, StockMetrics>(metrics.map((m) => [m.ticker, m])),
    [metrics],
  );
  const analysisMap = useMemo(
    () => new Map<string, GrowthAnalysis>(analyses.map((a) => [a.ticker, a])),
    [analyses],
  );

  const [group, setGroup] = useState<Group>("core50");
  const [query, setQuery] = useState("");
  const [weights, setWeights] = useState<Weights>(DEFAULT_WEIGHTS);
  const [sortKey, setSortKey] = useState<SortKey>("score");
  const [sortAsc, setSortAsc] = useState(false);

  const core50Rows = useMemo(
    () => buildRows(growth50Tickers, weights, metricsMap),
    [weights, metricsMap],
  );
  const megaRows = useMemo(
    () => buildRows(megaGrowthTickers, weights, metricsMap),
    [weights, metricsMap],
  );
  const innovativeRows = useMemo(
    () => buildRows(innovativeGrowthTickers, weights, metricsMap),
    [weights, metricsMap],
  );
  const midRows = useMemo(
    () => buildRows(profitableMidGrowthTickers, weights, metricsMap),
    [weights, metricsMap],
  );
  const turnaroundRows = useMemo(
    () => buildRows(turnaroundGrowthTickers, weights, metricsMap),
    [weights, metricsMap],
  );

  const rows =
    group === "core50" ? core50Rows :
    group === "mega" ? megaRows :
    group === "innovative" ? innovativeRows :
    group === "mid" ? midRows :
    turnaroundRows;
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    let list = !q ? rows : rows.filter((r) => r.ticker.toLowerCase().includes(q) || r.name.toLowerCase().includes(q));

    list = [...list].sort((a, b) => {
      const av = sortKey === "score" ? a.score.score : (a[sortKey] ?? -9999) as number;
      const bv = sortKey === "score" ? b.score.score : (b[sortKey] ?? -9999) as number;
      return sortAsc ? av - bv : bv - av;
    });

    return list;
  }, [rows, query, sortKey, sortAsc]);

  const handleSort = (key: SortKey) => {
    if (sortKey === key) setSortAsc(!sortAsc);
    else {
      setSortKey(key);
      setSortAsc(false);
    }
  };

  const SortIcon = ({ k }: { k: SortKey }) => {
    if (sortKey !== k) return <ArrowUpDown size={12} className="text-gray-600" />;
    return sortAsc ? <ChevronUp size={12} className="text-indigo-400" /> : <ChevronDown size={12} className="text-indigo-400" />;
  };

  const top3 = filtered.slice(0, 3);
  const avgScore = filtered.length ? (filtered.reduce((acc, r) => acc + r.score.score, 0) / filtered.length).toFixed(1) : "-";
  const cautionCount = filtered.filter((r) => r.score.label === "주의").length;

  const topMovers = useMemo(() => {
    const baseRows =
      group === "core50" ? core50Rows :
      group === "mega" ? megaRows :
      group === "innovative" ? innovativeRows :
      group === "mid" ? midRows :
      turnaroundRows;

    return [...baseRows]
      .map((r) => ({ row: r, delta: analysisMap.get(r.ticker)?.scoreDelta ?? null }))
      .filter((x) => x.delta !== null)
      .sort((a, b) => Math.abs(b.delta as number) - Math.abs(a.delta as number))
      .slice(0, 3);
  }, [group, core50Rows, megaRows, innovativeRows, midRows, turnaroundRows, analysisMap]);

  return (
    <div className="min-h-screen bg-gray-950 text-white p-6">
      <PageHeader
        title="성장주 분석"
        subtitle="Core 50 (4-basket) 성장 유니버스 스코어링"
        backHref="/"
        backLabel="대시보드"
        updatedAt={latestAnalyzedAt ? `Supabase 최신 분석시각: ${latestAnalyzedAt}` : "Supabase 최신 분석시각: -"}
        motionPreset="page-soft"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-5">
        <StatCard label="평균 점수" value={String(avgScore)} sub={`${group === "core50" ? "Core50" : group === "mega" ? "Mega Growth" : group === "innovative" ? "Innovative" : group === "mid" ? "Profitable Mid" : "Turnaround"} 기준`} />
        <StatCard label="주의 종목" value={`${cautionCount}개`} sub="점수 label=주의" />
        <StatCard label="스코어 가중치합" value={`${weights.growth + weights.quality + weights.valuation + weights.momentum}`} sub="자동 정규화" />
      </div>

      <SectionCard className="mb-5" motionPreset="surface-enter">
        <div className="flex items-center gap-2 mb-3">
          <SlidersHorizontal size={14} className="text-indigo-400" />
          <h2 className="text-sm font-semibold">가중치 조정</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
          <WeightSlider label="성장성" value={weights.growth} onChange={(v) => setWeights((w) => ({ ...w, growth: v }))} />
          <WeightSlider label="수익성" value={weights.quality} onChange={(v) => setWeights((w) => ({ ...w, quality: v }))} />
          <WeightSlider label="밸류에이션" value={weights.valuation} onChange={(v) => setWeights((w) => ({ ...w, valuation: v }))} />
          <WeightSlider label="모멘텀" value={weights.momentum} onChange={(v) => setWeights((w) => ({ ...w, momentum: v }))} />
        </div>
      </SectionCard>

      <div className="flex flex-wrap gap-2 mb-4">
        <button
          onClick={() => setGroup("core50")}
          className={`px-4 py-2 rounded-lg text-sm font-medium ${group === "core50" ? "bg-fuchsia-600 text-white" : "bg-gray-900 text-gray-400 hover:text-white"}`}
        >
          <Layers size={14} className="inline mr-1" /> Core 50
        </button>
        <button
          onClick={() => setGroup("mega")}
          className={`px-4 py-2 rounded-lg text-sm font-medium ${group === "mega" ? "bg-indigo-600 text-white" : "bg-gray-900 text-gray-400 hover:text-white"}`}
        >
          <LineChart size={14} className="inline mr-1" /> Mega Growth
        </button>
        <button
          onClick={() => setGroup("innovative")}
          className={`px-4 py-2 rounded-lg text-sm font-medium ${group === "innovative" ? "bg-emerald-600 text-white" : "bg-gray-900 text-gray-400 hover:text-white"}`}
        >
          <Rocket size={14} className="inline mr-1" /> Innovative
        </button>
        <button
          onClick={() => setGroup("mid")}
          className={`px-4 py-2 rounded-lg text-sm font-medium ${group === "mid" ? "bg-cyan-600 text-white" : "bg-gray-900 text-gray-400 hover:text-white"}`}
        >
          <Compass size={14} className="inline mr-1" /> Profitable Mid
        </button>
        <button
          onClick={() => setGroup("turnaround")}
          className={`px-4 py-2 rounded-lg text-sm font-medium ${group === "turnaround" ? "bg-amber-600 text-white" : "bg-gray-900 text-gray-400 hover:text-white"}`}
        >
          Turnaround
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

      <div className="flex flex-wrap gap-2 mb-3">
        {top3.map((g, idx) => (
          <StatusBadge key={g.ticker} tone="success" motionPreset="list-item-enter" label={`TOP${idx + 1} ${g.ticker} ${g.score.score.toFixed(1)}`} />
        ))}
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {topMovers.map((m) => (
          <StatusBadge
            key={m.row.ticker}
            tone="info"
            motionPreset="list-item-enter"
            label={`Δ ${m.row.ticker} ${m.delta! >= 0 ? "+" : ""}${m.delta!.toFixed(2)}`}
          />
        ))}
      </div>

      <div className="bg-gray-900 rounded-xl overflow-hidden mb-5">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-800 text-gray-500 text-xs">
                <th className="text-left px-5 py-3">종목</th>
                <th
                  className="text-right px-4 py-3 cursor-pointer hover:text-white select-none"
                  onClick={() => handleSort("price")}
                >
                  <span className="flex items-center justify-end gap-1">현재가 <SortIcon k="price" /></span>
                </th>
                <th
                  className="text-right px-4 py-3 cursor-pointer hover:text-white select-none"
                  onClick={() => handleSort("revenueGrowth")}
                >
                  <span className="flex items-center justify-end gap-1">매출성장률 <SortIcon k="revenueGrowth" /></span>
                </th>
                <th
                  className="text-right px-4 py-3 cursor-pointer hover:text-white select-none"
                  onClick={() => handleSort("roe")}
                >
                  <span className="flex items-center justify-end gap-1">ROE <SortIcon k="roe" /></span>
                </th>
                <th
                  className="text-right px-4 py-3 cursor-pointer hover:text-white select-none"
                  onClick={() => handleSort("pe")}
                >
                  <span className="flex items-center justify-end gap-1">Forward PE <SortIcon k="pe" /></span>
                </th>
                <th className="text-center px-3 py-3">매매의견</th>
                <th className="text-right px-4 py-3">등급/신뢰도</th>
                <th
                  className="text-right px-4 py-3 cursor-pointer hover:text-white select-none"
                  onClick={() => handleSort("score")}
                >
                  <span className="flex items-center justify-end gap-1">점수/Δ <SortIcon k="score" /></span>
                </th>
                <th className="text-right px-4 py-3">상세</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((g) => {
                const a = analysisMap.get(g.ticker);
                return (
                  <tr key={g.ticker} className="border-b border-gray-800/50 hover:bg-gray-800/20">
                    <td className="px-5 py-3">
                      <div className="font-bold text-cyan-300 text-sm">{g.ticker}</div>
                      <div className="text-gray-500 text-xs max-w-[260px] truncate">{g.name}</div>
                      <div className="text-[11px] text-gray-400 max-w-[340px] truncate">{a?.summary ?? "분석 요약 없음"}</div>
                    </td>
                    <td className="text-right px-4 py-3 text-white text-sm">{g.price ? g.price.toLocaleString() : "-"}</td>
                    <td className="text-right px-4 py-3 text-gray-300 text-xs">{g.revenueGrowth !== null ? `${g.revenueGrowth.toFixed(1)}%` : "-"}</td>
                    <td className="text-right px-4 py-3 text-gray-300 text-xs">{g.roe !== null ? `${g.roe.toFixed(1)}%` : "-"}</td>
                    <td className="text-right px-4 py-3 text-gray-300 text-xs">{g.pe !== null ? g.pe.toFixed(1) : "-"}</td>
                    <td className="text-center px-3 py-3">
                      <span className={`text-[11px] font-semibold px-2 py-1 rounded-md ${
                        (a?.overallRating ?? "관망") === "관심" ? "bg-emerald-900/40 text-emerald-300 border border-emerald-700/40" :
                        (a?.overallRating ?? "관망") === "관망" ? "bg-yellow-900/40 text-yellow-300 border border-yellow-700/40" :
                        "bg-red-900/40 text-red-300 border border-red-700/40"
                      }`}>
                        {a?.overallRating ?? "관망"}
                      </span>
                    </td>
                    <td className="text-right px-4 py-3 text-xs text-gray-200">
                      {a?.overallRating ?? g.score.label} / {a?.confidence ?? "B"}
                    </td>
                    <td className={`text-right px-4 py-3 text-sm font-bold ${g.score.color}`}>
                      <div>{g.score.score.toFixed(1)}</div>
                      <div className="text-[10px] text-gray-500">
                        {a?.scoreDelta != null ? `Δ ${a.scoreDelta >= 0 ? "+" : ""}${a.scoreDelta.toFixed(2)}` : "-"}
                      </div>
                    </td>
                    <td className="text-right px-4 py-3">
                      <Link to={`/growth/${g.ticker}`} prefetch="intent" className="text-xs px-2 py-1 rounded-md border border-cyan-700/50 text-cyan-300 hover:bg-cyan-900/20">
                        상세보기
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
