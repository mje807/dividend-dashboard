import { useMemo, useState } from "react";
import { Link } from "react-router";
import { ArrowLeft, LineChart, Rocket, Search, SlidersHorizontal } from "lucide-react";
import { bigTechTickers, hyperGrowthTickers } from "~/data/growth";
import { getMetrics, type StockMetrics } from "~/data/metrics";
import { getGrowthAnalysis } from "~/data/growth-analysis";

type Group = "bigtech" | "hyper";

type WeightKey = "growth" | "quality" | "valuation" | "momentum";

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

function buildRows(tickers: readonly string[], weights: Weights): Row[] {
  return tickers
    .map((ticker) => {
      const m = getMetrics(ticker);
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

export default function GrowthPage() {
  const [group, setGroup] = useState<Group>("bigtech");
  const [query, setQuery] = useState("");
  const [weights, setWeights] = useState<Weights>(DEFAULT_WEIGHTS);
  const [selectedTicker, setSelectedTicker] = useState<string | null>(null);

  const bigTechRows = useMemo(() => buildRows(bigTechTickers, weights), [weights]);
  const hyperRows = useMemo(() => buildRows(hyperGrowthTickers, weights), [weights]);

  const rows = group === "bigtech" ? bigTechRows : hyperRows;
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return rows;
    return rows.filter((r) => r.ticker.toLowerCase().includes(q) || r.name.toLowerCase().includes(q));
  }, [rows, query]);

  const top3 = filtered.slice(0, 3);
  const avgScore = filtered.length ? (filtered.reduce((acc, r) => acc + r.score.score, 0) / filtered.length).toFixed(1) : "-";
  const cautionCount = filtered.filter((r) => r.score.label === "주의").length;

  const selected = filtered.find((r) => r.ticker === selectedTicker) ?? filtered[0];
  const selectedAnalysis = selected ? getGrowthAnalysis(selected.ticker) : undefined;

  const topMovers = useMemo(() => {
    return [...(group === "bigtech" ? bigTechRows : hyperRows)]
      .map((r) => ({ row: r, delta: getGrowthAnalysis(r.ticker)?.scoreDelta ?? null }))
      .filter((x) => x.delta !== null)
      .sort((a, b) => Math.abs(b.delta as number) - Math.abs(a.delta as number))
      .slice(0, 3);
  }, [group, bigTechRows, hyperRows]);

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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-5">
        <StatCard label="평균 점수" value={String(avgScore)} sub={`${group === "bigtech" ? "Big Tech" : "Hyper Growth"} 기준`} />
        <StatCard label="주의 종목" value={`${cautionCount}개`} sub="점수 label=주의" />
        <StatCard label="스코어 가중치합" value={`${weights.growth + weights.quality + weights.valuation + weights.momentum}`} sub="자동 정규화" />
      </div>

      <div className="bg-gray-900 rounded-xl border border-gray-800 p-4 mb-5">
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

      <div className="flex flex-wrap gap-2 mb-3">
        {top3.map((g, idx) => (
          <span key={g.ticker} className="text-[11px] px-2 py-1 rounded-full bg-emerald-900/30 text-emerald-300 border border-emerald-700/40">
            TOP{idx + 1} {g.ticker} {g.score.score.toFixed(1)}
          </span>
        ))}
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {topMovers.map((m) => (
          <span key={m.row.ticker} className="text-[11px] px-2 py-1 rounded-full bg-indigo-900/30 text-indigo-300 border border-indigo-700/40">
            Δ {m.row.ticker} {m.delta! >= 0 ? "+" : ""}{m.delta!.toFixed(2)}
          </span>
        ))}
      </div>

      <div className="bg-gray-900 rounded-xl overflow-hidden mb-5">
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
                <tr
                  key={g.ticker}
                  onClick={() => setSelectedTicker(g.ticker)}
                  className={`border-b border-gray-800/50 hover:bg-gray-800/30 cursor-pointer ${selected?.ticker === g.ticker ? "bg-gray-800/40" : ""}`}
                >
                  <td className="px-5 py-3">
                    <div className="font-bold text-white text-sm">{g.ticker}</div>
                    <div className="text-gray-500 text-xs max-w-[260px] truncate">{g.name}</div>
                  </td>
                  <td className="text-right px-4 py-3 text-white text-sm">{g.price ? g.price.toLocaleString() : "-"}</td>
                  <td className="text-right px-4 py-3 text-gray-300 text-xs">{g.revenueGrowth !== null ? `${g.revenueGrowth.toFixed(1)}%` : "-"}</td>
                  <td className="text-right px-4 py-3 text-gray-300 text-xs">{g.roe !== null ? `${g.roe.toFixed(1)}%` : "-"}</td>
                  <td className="text-right px-4 py-3 text-gray-300 text-xs">{g.margin !== null ? `${g.margin.toFixed(1)}%` : "-"}</td>
                  <td className="text-right px-4 py-3 text-gray-300 text-xs">{g.pe !== null ? g.pe.toFixed(1) : "-"}</td>
                  <td className={`text-right px-4 py-3 text-sm font-bold ${g.score.color}`}>
                    <div>{g.score.score.toFixed(1)} ({g.score.label})</div>
                    <div className="text-[10px] text-gray-500">
                      신뢰도 {getGrowthAnalysis(g.ticker)?.confidence ?? "B"}
                      {getGrowthAnalysis(g.ticker)?.scoreDelta != null ? ` · Δ ${getGrowthAnalysis(g.ticker)!.scoreDelta! >= 0 ? "+" : ""}${getGrowthAnalysis(g.ticker)!.scoreDelta!.toFixed(2)}` : ""}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {selected && (
        <div className="bg-gray-900 rounded-xl border border-gray-800 p-5">
          <h3 className="text-sm font-semibold mb-3">상세 드릴다운 — {selected.ticker}</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-3">
            <MiniMetric label="성장성" value={selected.score.parts.growth.toFixed(1)} />
            <MiniMetric label="수익성" value={selected.score.parts.quality.toFixed(1)} />
            <MiniMetric label="밸류" value={selected.score.parts.valuation.toFixed(1)} />
            <MiniMetric label="모멘텀" value={selected.score.parts.momentum.toFixed(1)} />
          </div>
          <div className="text-xs text-gray-400 mb-4">
            52주: {selected.metric?.week52Low ?? "-"} ~ {selected.metric?.week52High ?? "-"} / 현재가 {selected.metric?.currentPrice ?? "-"}
          </div>

          {selectedAnalysis ? (
            <div className="rounded-lg border border-gray-800 bg-gray-800/40 p-4">
              <div className="text-xs text-gray-400 mb-1">정성/정량 하이브리드 분석</div>
              <div className="text-sm text-white mb-2">
                등급: <span className="font-semibold">{selectedAnalysis.overallRating}</span> ·
                신뢰도: <span className="font-semibold">{selectedAnalysis.confidence}</span> ·
                매수관찰 구간: {selectedAnalysis.targetBuyLow ?? "-"} ~ {selectedAnalysis.targetBuyHigh ?? "-"}
              </div>
              <p className="text-xs text-gray-300 leading-relaxed mb-3">{selectedAnalysis.summary}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <div className="text-xs text-emerald-300 mb-1">상방 드라이버</div>
                  <ul className="text-xs text-gray-300 list-disc pl-4 space-y-1">
                    {selectedAnalysis.keyDrivers.map((d: string) => <li key={d}>{d}</li>)}
                  </ul>
                </div>
                <div>
                  <div className="text-xs text-red-300 mb-1">핵심 리스크</div>
                  <ul className="text-xs text-gray-300 list-disc pl-4 space-y-1">
                    {selectedAnalysis.keyRisks.map((r: string) => <li key={r}>{r}</li>)}
                  </ul>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-xs text-gray-500">정성 분석 준비중</div>
          )}
        </div>
      )}
    </div>
  );
}

function StatCard({ label, value, sub }: { label: string; value: string; sub: string }) {
  return (
    <div className="bg-gray-900 rounded-xl p-4 border border-gray-800">
      <div className="text-xs text-gray-500 mb-1">{label}</div>
      <div className="text-xl font-bold text-white">{value}</div>
      <div className="text-xs text-gray-400 mt-1">{sub}</div>
    </div>
  );
}

function MiniMetric({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-gray-800 rounded-lg p-3 text-center">
      <div className="text-xs text-gray-500 mb-1">{label}</div>
      <div className="text-base font-bold text-white">{value}</div>
    </div>
  );
}
