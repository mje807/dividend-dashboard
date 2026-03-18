import { useState, useMemo } from "react";
import { Link, useLoaderData } from "react-router";
import { PageHeader } from "~/components/ui/PageHeader";
import { StatCard } from "~/components/ui/StatCard";
import { SectionCard } from "~/components/ui/SectionCard";
import { Crown, Trophy, TrendingUp, Search, ArrowUpDown, ChevronUp, ChevronDown, ExternalLink } from "lucide-react";
import { royaltyLastUpdated, type RoyaltyStock } from "~/data/royalty";
import { type RoyaltyMetrics } from "~/data/royalty-metrics";
import { calcAttractiveness } from "~/utils/attractiveness";
import { getRoyaltyMetricsLatest, getRoyaltyUniverseLatest } from "~/lib/market-data.server";

export function meta() {
  return [{ title: "배당 왕족주·귀족주·배당성장주" }];
}

export async function loader() {
  const [universe, metrics, analyses] = await Promise.all([
    getRoyaltyUniverseLatest(),
    getRoyaltyMetricsLatest(),
    getRoyaltyAnalysesLatest(),
  ]);
  return Response.json({ universe, metrics, analyses });
}

type Category = "all" | "king" | "aristocrat" | "growth";
type AttrFilter = "all" | "buy" | "neutral" | "caution";
type SortKey = "streak" | "dividendYield" | "price" | "peRatio" | "payoutRatio" | "attractiveness";

const SECTOR_COLORS: Record<string, string> = {
  "필수소비재": "bg-green-900/40 text-green-400",
  "임의소비재": "bg-emerald-900/40 text-emerald-400",
  "헬스케어":   "bg-blue-900/40 text-blue-400",
  "금융":       "bg-yellow-900/40 text-yellow-400",
  "산업재":     "bg-orange-900/40 text-orange-400",
  "유틸리티":   "bg-cyan-900/40 text-cyan-400",
  "IT":         "bg-purple-900/40 text-purple-400",
  "에너지":     "bg-red-900/40 text-red-400",
  "소재":       "bg-lime-900/40 text-lime-400",
  "리츠":       "bg-pink-900/40 text-pink-400",
};

type WatchlistLoaderData = { universe: RoyaltyStock[]; metrics: RoyaltyMetrics[]; analyses: StockAnalysis[] };

type RatingBadge = {
  label: "관심" | "보유" | "관망" | "미분석";
  cls: string;
};

function normalizeYieldPercent(raw: number | null | undefined): number {
  if (raw == null || Number.isNaN(raw)) return 0;
  if (raw >= 30 && raw <= 1000) return raw / 100; // 92 -> 0.92, 77 -> 0.77
  return raw;
}

function getRatingBadge(rating?: StockAnalysis["overallRating"] | null): RatingBadge {
  if (rating === "관심") return { label: "관심", cls: "bg-green-900/40 text-green-300 border border-green-700/40" };
  if (rating === "보유") return { label: "보유", cls: "bg-indigo-900/40 text-indigo-300 border border-indigo-700/40" };
  if (rating === "관망") return { label: "관망", cls: "bg-yellow-900/40 text-yellow-300 border border-yellow-700/40" };
  return { label: "미분석", cls: "bg-gray-800/60 text-gray-400 border border-gray-700/40" };
}

export default function Watchlist() {
  const { universe, metrics } = useLoaderData<WatchlistLoaderData>();
  const metricsMap = useMemo(() => new Map(metrics.map((m) => [m.ticker, m])), [metrics]);

  const [category, setCategory] = useState<Category>("all");
  const [attrFilter, setAttrFilter] = useState<AttrFilter>("all");
  const [search, setSearch] = useState("");
  const [sortKey, setSortKey] = useState<SortKey>("attractiveness");
  const [sortAsc, setSortAsc] = useState(false);

  const kingCount = universe.filter(s => s.category === "king").length;
  const aristoCount = universe.filter(s => s.category === "aristocrat").length;
  const growthDivCount = universe.filter(s => s.category === "growth").length;
  const maxStreak = universe.reduce((m, r) => Math.max(m, r.streak), 0);

  const enriched = useMemo(() =>
    universe.map(s => {
      const m = metricsMap.get(s.ticker);
      const analysis = analysesMap.get(s.ticker);
      const att = m ? calcAttractiveness(m, s.streak) : null;
      const normalizedYield = normalizeYieldPercent(m?.dividendYield);

      return {
        ...s,
        price: m?.currentPrice ?? null,
        dividendYield: m ? normalizedYield : null,
        dividendRate: m?.dividendRate ?? null,
        peRatio: (m?.forwardPE ?? m?.trailingPE) ?? null,
        payoutRatio: m?.payoutRatio ?? null,
        attractivenessScore: att?.score ?? null,
        attractiveness: att,
        analysis,
      };
    }), [universe, metricsMap, analysesMap]
  );

  const avgYieldBase = enriched.filter((r) => r.dividendYield != null);
  const avgYield = avgYieldBase.length
    ? (avgYieldBase.reduce((s, r) => s + (r.dividendYield || 0), 0) / avgYieldBase.length).toFixed(2)
    : "-";


  const filtered = useMemo(() => {
    let list = enriched;
    if (category !== "all") list = list.filter(s => s.category === category);
    if (attrFilter !== "all") {
      list = list.filter(s => {
        const score = s.attractivenessScore ?? 5;
        if (attrFilter === "buy")     return score >= 6.5;
        if (attrFilter === "neutral") return score > 3.5 && score < 6.5;
        if (attrFilter === "caution") return score <= 3.5;
        return true;
      });
    }
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(s =>
        s.ticker.toLowerCase().includes(q) ||
        s.name.toLowerCase().includes(q) ||
        s.sector.toLowerCase().includes(q)
      );
    }
    return [...list].sort((a, b) => {
      const av = sortKey === "attractiveness" ? (a.attractivenessScore ?? -1) : ((a[sortKey as keyof typeof a] ?? -1) as number);
      const bv = sortKey === "attractiveness" ? (b.attractivenessScore ?? -1) : ((b[sortKey as keyof typeof b] ?? -1) as number);
      return sortAsc ? av - bv : bv - av;
    });
  }, [enriched, category, attrFilter, search, sortKey, sortAsc]);

  const handleSort = (key: SortKey) => {
    if (sortKey === key) setSortAsc(!sortAsc);
    else { setSortKey(key); setSortAsc(false); }
  };

  const SortIcon = ({ k }: { k: SortKey }) => {
    if (sortKey !== k) return <ArrowUpDown size={12} className="text-gray-600" />;
    return sortAsc
      ? <ChevronUp size={12} className="text-indigo-400" />
      : <ChevronDown size={12} className="text-indigo-400" />;
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white p-6">
      <PageHeader
        motionPreset="page-soft"
        title="👑 배당 왕족주·귀족주·배당성장주"
        subtitle="연속 배당 증가 우량주"
        backHref="/"
        backLabel="대시보드"
        updatedAt={`업데이트: ${royaltyLastUpdated}`}
      />

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
        <StatCard motionPreset="surface-enter" label="배당 왕족주" value={`${kingCount}개`} sub="50년+ 연속 증가" />
        <StatCard motionPreset="surface-enter" label="배당 귀족주" value={`${aristoCount}개`} sub="25년+ 연속 증가" />
        <StatCard motionPreset="surface-enter" label="배당성장주" value={`${growthDivCount}개`} sub="10~24년 증가" />
        <StatCard motionPreset="surface-enter" label="평균 배당률" value={`${avgYield}%`} sub="전체 평균" />
        <StatCard motionPreset="surface-enter" label="최장 연속 증가" value={`${maxStreak}년`} sub="American States Water" />
      </div>

      <SectionCard className="mb-5" motionPreset="surface-enter">
      <div className="flex flex-col gap-3">
        {/* 1행: 카테고리 + 매력도 필터 + 종목수 */}
        <div className="flex flex-wrap items-center gap-2">
          {/* 카테고리 탭 */}
          <div className="flex gap-1 bg-gray-900 rounded-xl p-1">
            {(["all", "king", "aristocrat", "growth"] as Category[]).map(c => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                  category === c
                    ? "bg-indigo-600 text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {c === "all" ? "전체" : c === "king" ? "👑 왕족주" : c === "aristocrat" ? "🏆 귀족주" : "🌱 배당성장주"}
              </button>
            ))}
          </div>

          {/* 구분선 */}
          <div className="w-px h-6 bg-gray-700 hidden sm:block" />

          {/* 매력도 필터 */}
          <div className="flex gap-1 bg-gray-900 rounded-xl p-1">
            {([
              { key: "all",     label: "매력도 전체",  cls: "text-gray-400 hover:text-white" },
              { key: "buy",     label: "💚 저평가 매력", cls: attrFilter === "buy"     ? "bg-emerald-700 text-white" : "text-gray-400 hover:text-white" },
              { key: "neutral", label: "🟡 적정",       cls: attrFilter === "neutral" ? "bg-yellow-700 text-white"  : "text-gray-400 hover:text-white" },
              { key: "caution", label: "🔴 고평가 신중", cls: attrFilter === "caution" ? "bg-red-700 text-white"    : "text-gray-400 hover:text-white" },
            ] as { key: AttrFilter; label: string; cls: string }[]).map(({ key, label, cls }) => (
              <button
                key={key}
                onClick={() => setAttrFilter(key)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                  key === "all" && attrFilter === "all"
                    ? "bg-gray-700 text-white"
                    : cls
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          <div className="text-gray-500 text-xs ml-auto self-center">
            {filtered.length}개 종목
          </div>
        </div>

        {/* 2행: 검색 */}
        <div className="flex items-center gap-2 bg-gray-900 rounded-xl px-4 py-2">
          <Search size={14} className="text-gray-500" />
          <input
            className="bg-transparent text-sm text-white placeholder-gray-500 flex-1 outline-none"
            placeholder="종목명·섹터 검색..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>
      </div>
      </SectionCard>

      {/* 테이블 */}
      <div className="bg-gray-900 rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-800 text-gray-500 text-xs">
                <th className="text-left px-5 py-3">종목</th>
                <th className="text-left px-5 py-3">섹터</th>
                <th
                  className="text-right px-4 py-3 cursor-pointer hover:text-white select-none"
                  onClick={() => handleSort("attractiveness")}
                >
                  <span className="flex items-center justify-end gap-1">
                    매력도 <SortIcon k="attractiveness" />
                  </span>
                </th>
                <th className="text-center px-3 py-3">매매의견</th>
                <th
                  className="text-right px-4 py-3 cursor-pointer hover:text-white select-none"
                  onClick={() => handleSort("streak")}
                >
                  <span className="flex items-center justify-end gap-1">
                    연속증가 <SortIcon k="streak" />
                  </span>
                </th>
                <th
                  className="text-right px-4 py-3 cursor-pointer hover:text-white select-none"
                  onClick={() => handleSort("price")}
                >
                  <span className="flex items-center justify-end gap-1">
                    현재가 <SortIcon k="price" />
                  </span>
                </th>
                <th
                  className="text-right px-4 py-3 cursor-pointer hover:text-white select-none"
                  onClick={() => handleSort("dividendYield")}
                >
                  <span className="flex items-center justify-end gap-1">
                    배당률 <SortIcon k="dividendYield" />
                  </span>
                </th>
                <th className="text-right px-4 py-3">주당배당금</th>
                <th
                  className="text-right px-4 py-3 cursor-pointer hover:text-white select-none"
                  onClick={() => handleSort("peRatio")}
                >
                  <span className="flex items-center justify-end gap-1">
                    PER <SortIcon k="peRatio" />
                  </span>
                </th>
                <th
                  className="text-right px-4 py-3 cursor-pointer hover:text-white select-none"
                  onClick={() => handleSort("payoutRatio")}
                >
                  <span className="flex items-center justify-end gap-1">
                    배당성향 <SortIcon k="payoutRatio" />
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              {filtered.map(s => (
                <tr
                  key={s.ticker}
                  className="border-b border-gray-800/50 hover:bg-gray-800/30 transition-colors group cursor-pointer"
                >
                  {/* 종목 */}
                  <td className="px-5 py-3">
                    <Link to={`/watchlist/${s.ticker}`} prefetch="intent" className="flex items-center gap-2.5">
                      <span className="text-base">
                        {s.category === "king" ? "👑" : "🏆"}
                      </span>
                      <div>
                        <div className="font-bold text-white text-sm group-hover:text-indigo-300 transition-colors flex items-center gap-1.5">
                          {s.ticker}
                          <ExternalLink size={10} className="text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <div className="text-gray-500 text-xs leading-tight max-w-[140px] truncate">
                          {s.name}
                        </div>
                      </div>
                    </Link>
                  </td>

                  {/* 섹터 */}
                  <td className="px-5 py-3">
                    <span className={`text-xs px-2 py-0.5 rounded-full ${SECTOR_COLORS[s.sector] ?? "bg-gray-800 text-gray-400"}`}>
                      {s.sector}
                    </span>
                  </td>

                  {/* 매력도 */}
                  <td className="text-right px-4 py-3">
                    {s.attractiveness ? (
                      <div className="flex flex-col items-end gap-0.5">
                        <span className={`text-sm font-black ${s.attractiveness.color}`}>
                          {s.attractiveness.score.toFixed(1)}
                        </span>
                        <span className={`text-[10px] px-1.5 py-0.5 rounded border ${s.attractiveness.bgColor} ${s.attractiveness.color}`}>
                          {s.attractiveness.label}
                        </span>
                      </div>
                    ) : (
                      <span className="text-gray-600 text-xs">-</span>
                    )}
                  </td>

                  {/* 매매의견 */}
                  <td className="text-center px-3 py-3">
                    <span className={`text-[11px] font-semibold px-2 py-1 rounded-md ${getTradeOpinionByScore(s.attractivenessScore ?? 5).cls}`}>
                      {getTradeOpinionByScore(s.attractivenessScore ?? 5).label}
                    </span>
                  </td>

                  {/* 연속증가 */}
                  <td className="text-right px-4 py-3">
                    <span className="text-yellow-400 font-semibold text-sm">{s.streak}년</span>
                  </td>

                  {/* 현재가 */}
                  <td className="text-right px-4 py-3 text-white text-sm">
                    {typeof s.price === "number" && s.price > 0 ? `$${s.price.toFixed(2)}` : "-"}
                  </td>

                  {/* 배당률 */}
                  <td className="text-right px-4 py-3">
                    <span className={`font-semibold text-sm ${typeof s.dividendYield === "number" ? (s.dividendYield >= 3 ? "text-green-400" : s.dividendYield >= 2 ? "text-yellow-400" : "text-gray-400") : "text-gray-500"}`}>
                      {typeof s.dividendYield === "number" && s.dividendYield > 0 ? `${s.dividendYield.toFixed(2)}%` : "-"}
                    </span>
                  </td>

                  {/* 주당배당금 */}
                  <td className="text-right px-4 py-3 text-gray-300 text-xs">
                    {typeof s.dividendRate === "number" && s.dividendRate > 0 ? `$${s.dividendRate.toFixed(2)}` : "-"}
                  </td>

                  {/* PER */}
                  <td className="text-right px-4 py-3 text-gray-400 text-xs">
                    {typeof s.peRatio === "number" && s.peRatio > 0 ? s.peRatio.toFixed(1) : "-"}
                  </td>

                  {/* 배당성향 */}
                  <td className="text-right px-4 py-3">
                    <span className={`text-xs ${typeof s.payoutRatio === "number" ? (s.payoutRatio > 80 ? "text-red-400" : s.payoutRatio > 60 ? "text-yellow-400" : "text-gray-400") : "text-gray-500"}`}>
                      {typeof s.payoutRatio === "number" && s.payoutRatio > 0 ? `${s.payoutRatio.toFixed(0)}%` : "-"}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <p className="text-gray-600 text-xs mt-4 text-center">
        목록 지표와 상세는 모두 DB 기준으로만 표기됩니다. metric이 없으면 값은 비워지고, 의견은 analysis의 overall_rating을 그대로 사용합니다.
      </p>
    </div>
  );
}
