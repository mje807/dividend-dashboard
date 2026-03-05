import { Link, useLoaderData, useParams } from "react-router";
import { PageHeader } from "~/components/ui/PageHeader";
import { SectionCard } from "~/components/ui/SectionCard";
import {
  Shield, TrendingUp, AlertTriangle, Star, BookOpen,
  Calendar, DollarSign, BarChart2, Target, Gauge, Users,
} from "lucide-react";
import { royaltyStocks } from "~/data/royalty";
import { type MoatType, type StockAnalysis } from "~/data/royalty-analysis";
import { getRoyaltyAnalysisByTicker, getRoyaltyMetricByTicker } from "~/lib/market-data.server";
import { calcAttractiveness, getTradeOpinionByScore } from "~/utils/attractiveness";

export function meta({ params }: { params: { ticker: string } }) {
  return [{ title: `${params.ticker} 심층분석 — 배당 대시보드` }];
}

export async function loader({ params }: { params: { ticker: string } }) {
  const ticker = (params.ticker || "").toUpperCase();
  const [metric, analysis] = await Promise.all([
    getRoyaltyMetricByTicker(ticker),
    getRoyaltyAnalysisByTicker(ticker),
  ]);

  return Response.json({
    ticker,
    metric,
    analysis,
  });
}

type RoyaltyMetricItem = import("~/data/royalty-metrics").RoyaltyMetrics;

const MOAT_LABELS: Record<MoatType, string> = {
  brand: "브랜드",
  switching_costs: "전환비용",
  network_effect: "네트워크 효과",
  cost_advantage: "비용 우위",
  efficient_scale: "효율적 규모",
  intangible_assets: "무형자산",
};

const MOAT_STRENGTH_CFG = {
  wide:   { label: "넓은 해자", color: "text-green-400",  bg: "bg-green-900/30 border-green-800/50" },
  narrow: { label: "좁은 해자", color: "text-yellow-400", bg: "bg-yellow-900/30 border-yellow-800/50" },
  none:   { label: "해자 없음", color: "text-red-400",    bg: "bg-red-900/30 border-red-800/50" },
};

const SAFETY_CFG = {
  strong:   { label: "안정",  color: "text-green-400",  dot: "bg-green-400" },
  moderate: { label: "보통",  color: "text-yellow-400", dot: "bg-yellow-400" },
  watch:    { label: "주의",  color: "text-red-400",    dot: "bg-red-400" },
};

const RATING_CFG = {
  "관심": { color: "text-green-400",  bg: "bg-green-900/40 border-green-700",  emoji: "⭐" },
  "보유": { color: "text-indigo-400", bg: "bg-indigo-900/40 border-indigo-700", emoji: "💎" },
  "관망": { color: "text-gray-400",   bg: "bg-gray-800/40 border-gray-700",    emoji: "👀" },
};

// ─── 밸류에이션 판단 로직 ────────────────────────────────────────────────────
function computeValuation(m: RoyaltyMetricItem | null, streak: number) {
  if (!m) return null;

  const price = m.currentPrice;
  const yieldNow = m.dividendYield;
  const yieldAvg = m.fiveYearAvgYield;
  const trPE = m.trailingPE;
  const fwdPE = m.forwardPE;
  const ddm = m.ddmFairValue;
  const divRate = m.dividendRate;
  const yieldAvgForFallback = m.fiveYearAvgYield;
  const analystTarget = m.targetMeanPrice;
  const pct52 = m.pctIn52Range;
  const cagr3 = m.dividendCAGR3yr;

  // ① 수율 분석 (배당주 핵심 밸류에이션)
  let yieldSignal: "저평가" | "적정" | "고평가" | "N/A" = "N/A";
  let yieldDiff: number | null = null;
  if (yieldNow != null && yieldAvg != null) {
    yieldDiff = parseFloat((yieldNow - yieldAvg).toFixed(2));
    if (yieldDiff >= 0.5)       yieldSignal = "저평가";
    else if (yieldDiff <= -0.5) yieldSignal = "고평가";
    else                        yieldSignal = "적정";
  }

  // ② DDM 괴리율
  let ddmGap: number | null = null;
  let ddmSignal: "저평가" | "적정" | "고평가" | "N/A" = "N/A";
  let fairValueUsed: number | null = null;
  let fairValueMethod: "ddm" | "yield" | "analyst" | "none" = "none";
  if (ddm && price) {
    fairValueUsed = ddm;
    fairValueMethod = "ddm";
    ddmGap = parseFloat(((ddm - price) / price * 100).toFixed(1));
    if (ddmGap >= 15)       ddmSignal = "저평가";
    else if (ddmGap <= -15) ddmSignal = "고평가";
    else                    ddmSignal = "적정";
  } else if (divRate && yieldAvgForFallback && price && yieldAvgForFallback > 0) {
    const fairByYield = divRate / (yieldAvgForFallback / 100);
    fairValueUsed = parseFloat(fairByYield.toFixed(2));
    fairValueMethod = "yield";
    ddmGap = parseFloat(((fairByYield - price) / price * 100).toFixed(1));
    if (ddmGap >= 12)       ddmSignal = "저평가";
    else if (ddmGap <= -12) ddmSignal = "고평가";
    else                    ddmSignal = "적정";
  } else if (analystTarget && price) {
    fairValueUsed = analystTarget;
    fairValueMethod = "analyst";
    ddmGap = parseFloat(((analystTarget - price) / price * 100).toFixed(1));
    if (ddmGap >= 10)       ddmSignal = "저평가";
    else if (ddmGap <= -10) ddmSignal = "고평가";
    else                    ddmSignal = "적정";
  }

  // ③ PE 판단 (업종 무관 절대 기준)
  let peSignal: "저평가" | "적정" | "고평가" | "N/A" = "N/A";
  const activePE = fwdPE ?? trPE;
  if (activePE) {
    if (activePE < 18)      peSignal = "저평가";
    else if (activePE > 28) peSignal = "고평가";
    else                    peSignal = "적정";
  }

  // ④ 52주 위치
  let rangeSignal: "저점권" | "중간" | "고점권" = "중간";
  if (pct52 != null) {
    if (pct52 <= 30)      rangeSignal = "저점권";
    else if (pct52 >= 75) rangeSignal = "고점권";
    else                  rangeSignal = "중간";
  }

  // ⑤ 애널리스트 upside
  const upside = m.analystUpside;
  let analystSignal: "상승여력" | "중립" | "하락우려" = "중립";
  if (upside != null) {
    if (upside >= 10)  analystSignal = "상승여력";
    else if (upside < 0) analystSignal = "하락우려";
    else              analystSignal = "중립";
  }

  // ⑥ 종합 점수 (1~10)
  // 각 시그널에 가중치 부여: 수율 35%, DDM 25%, PE 20%, 52주 10%, 애널 10%
  let score = 5.0;

  if (yieldSignal === "저평가") score += 1.75;
  else if (yieldSignal === "고평가") score -= 1.75;

  if (ddmSignal === "저평가") score += 1.25;
  else if (ddmSignal === "고평가") score -= 1.25;

  if (peSignal === "저평가") score += 1.0;
  else if (peSignal === "고평가") score -= 1.0;

  if (rangeSignal === "저점권") score += 0.5;
  else if (rangeSignal === "고점권") score -= 0.5;

  if (analystSignal === "상승여력") score += 0.5;
  else if (analystSignal === "하락우려") score -= 0.5;

  // 연속 증가 연수 보너스 (50년+: +0.5)
  if (streak >= 50) score += 0.5;

  score = Math.max(1, Math.min(10, score));

  // 종합 판단
  let overallVerdict: "저평가 — 매력적" | "적정가 — 장기 보유" | "고평가 — 신중" = "적정가 — 장기 보유";
  if (score >= 6.5)      overallVerdict = "저평가 — 매력적";
  else if (score <= 3.5) overallVerdict = "고평가 — 신중";

  return {
    score: parseFloat(score.toFixed(1)),
    overallVerdict,
    yieldSignal, yieldDiff,
    ddmSignal, ddmGap,
    fairValueUsed, fairValueMethod,
    peSignal, activePE,
    rangeSignal, pct52,
    analystSignal, upside,
  };
}

function buildDividendAutoCommentary(val: ReturnType<typeof computeValuation> | null, m: RoyaltyMetricItem | null) {
  if (!val || !m) return ["핵심 지표 데이터가 부족해 자동 코멘트 생성이 제한됩니다."];

  const c1 = val.yieldDiff == null
    ? "현재 수율과 5년 평균 수율 비교 데이터가 부족합니다."
    : val.yieldDiff >= 0
      ? `현재 배당수율이 5년 평균 대비 +${val.yieldDiff.toFixed(2)}%p 높아 상대 저평가 신호가 유효합니다.`
      : `현재 배당수율이 5년 평균 대비 ${val.yieldDiff.toFixed(2)}%p 낮아 밸류 부담 구간일 수 있습니다.`;

  const c2 = val.ddmGap == null
    ? "내재가치 괴리율 계산 데이터가 제한적입니다."
    : `${val.fairValueMethod === "ddm" ? "DDM" : val.fairValueMethod === "yield" ? "수율기반" : "애널리스트"} 기준 괴리율은 ${val.ddmGap >= 0 ? "+" : ""}${val.ddmGap.toFixed(1)}%입니다.`;

  const c3 = val.upside == null
    ? "애널리스트 컨센서스 데이터가 제한적입니다."
    : `애널리스트 기준 목표가 대비 ${val.upside >= 0 ? "+" : ""}${val.upside.toFixed(1)}%로 시장 기대를 확인할 필요가 있습니다.`;

  return [c1, c2, c3];
}

function buildDividendCheckpoints(val: ReturnType<typeof computeValuation> | null, m: RoyaltyMetricItem | null) {
  if (!val || !m) return ["다음 분기 배당 발표에서 배당 인상 여부 확인", "실적발표 후 배당성향 변화 점검", "52주 밴드 내 가격 위치 재점검"];

  const p1 = m.payoutRatio != null && m.payoutRatio > 80
    ? "배당성향 80%+ 구간: 배당 지속가능성/증액 여력 점검"
    : "배당성향 변화(실적 대비 배당 지급 여력) 추적";

  const p2 = val.fairValueMethod === "ddm"
    ? "DDM 전제(성장률·요구수익률) 유효성 재점검"
    : val.fairValueMethod === "yield"
      ? "5년 평균 수율 회귀 가정 유지 여부 점검"
      : "애널리스트 컨센서스 리비전(상향/하향) 추적";

  const p3 = val.rangeSignal === "저점권"
    ? "저점권 이탈 여부와 거래량 동반 반등 신호 확인"
    : val.rangeSignal === "고점권"
      ? "고점권 과열 구간에서 분할 대응 기준 점검"
      : "중간 구간에서 실적 모멘텀 확인 후 비중 조절";

  return [p1, p2, p3];
}

type StockDetailLoaderData = {
  ticker: string;
  metric: RoyaltyMetricItem | null;
  analysis: StockAnalysis | null;
};

export default function StockDetail() {
  const { ticker } = useParams<{ ticker: string }>();
  const data = useLoaderData<StockDetailLoaderData>();
  const resolvedTicker = (ticker || data.ticker || "").toUpperCase();
  const stock = royaltyStocks.find(s => s.ticker === resolvedTicker);
  const analysis = data.analysis;
  const m = data.metric;
  const val = computeValuation(m, stock?.streak ?? 0);
  const listAlignedAttractiveness = calcAttractiveness(m, stock?.streak ?? 0);
  const listAlignedOpinion = getTradeOpinionByScore(listAlignedAttractiveness?.score ?? 5);
  const autoCommentary = buildDividendAutoCommentary(val, m);
  const checkpoints = buildDividendCheckpoints(val, m);

  if (!stock) {
    return (
      <div className="min-h-screen bg-gray-950 text-white p-6 flex flex-col items-center justify-center">
        <div className="text-gray-400 text-lg mb-4">종목을 찾을 수 없어요</div>
        <Link to="/watchlist" className="text-indigo-400 hover:text-indigo-300 text-sm">← 목록으로</Link>
      </div>
    );
  }

  const price = m?.currentPrice ?? stock.price;

  return (
    <div className="min-h-screen bg-gray-950 text-white p-6">
      <PageHeader
        motionPreset="page-soft"
        title={`${stock.ticker} 심층분석`}
        subtitle={stock.name}
        backHref="/watchlist"
        backLabel="왕족·귀족주 목록"
        updatedAt={`분석 ${analysis?.analyzedAt ?? "-"} · 지표 ${m?.fetchedAt ?? "-"}`}
      />

      {/* 종목 헤더 */}
      <SectionCard className="p-6 mb-6" motionPreset="surface-enter">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="text-3xl">{stock.category === "king" ? "👑" : "🏆"}</span>
              <div>
                <h1 className="text-2xl font-bold text-white">{stock.ticker}</h1>
                <p className="text-gray-400 text-sm">{stock.name}</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mt-3">
              <span className="bg-gray-800 text-gray-300 text-xs px-3 py-1 rounded-full">{m?.sector ?? stock.sector}</span>
              <span className="bg-yellow-900/40 text-yellow-400 text-xs px-3 py-1 rounded-full font-medium">
                {stock.category === "king" ? "👑 배당왕족주" : "🏆 배당귀족주"}
              </span>
              <span className="bg-indigo-900/40 text-indigo-400 text-xs px-3 py-1 rounded-full">
                {stock.streak}년 연속 배당 증가
              </span>
              {m?.industry && (
                <span className="bg-gray-800 text-gray-500 text-xs px-3 py-1 rounded-full">{m.industry}</span>
              )}
            </div>
          </div>

          {/* 핵심 지표 그리드 */}
          <div className="grid grid-cols-3 gap-2">
            <MiniStat label="현재가" value={price ? `$${price.toFixed(2)}` : "-"} color="text-white" />
            <MiniStat label="배당률" value={m?.dividendYield ? `${m.dividendYield}%` : `${stock.dividendYield}%`} color="text-green-400" />
            <MiniStat label="5년 평균 수율" value={m?.fiveYearAvgYield ? `${m.fiveYearAvgYield}%` : "-"} color="text-gray-400" />
            <MiniStat label="PER (Trailing)" value={m?.trailingPE ? `${m.trailingPE}x` : (stock.peRatio > 0 ? `${stock.peRatio}x` : "-")} color="text-yellow-400" />
            <MiniStat label="PER (Forward)" value={m?.forwardPE ? `${m.forwardPE}x` : "-"} color="text-yellow-300" />
            <MiniStat label="배당성향" value={m?.payoutRatio ? `${m.payoutRatio}%` : (stock.payoutRatio > 0 ? `${stock.payoutRatio}%` : "-")}
              color={(m?.payoutRatio ?? stock.payoutRatio) > 80 ? "text-red-400" : (m?.payoutRatio ?? stock.payoutRatio) > 60 ? "text-yellow-400" : "text-gray-300"} />
          </div>
        </div>
      </SectionCard>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          🔍 정량 밸류에이션 분석 (자동 계산 — 모든 종목 표시)
         ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      {val && (
        <SectionCard className="p-6 mb-6" motionPreset="surface-enter">
          <div className="flex items-center gap-2 mb-5">
            <Target size={18} className="text-indigo-400" />
            <h2 className="font-semibold text-white">밸류에이션 분석</h2>
            <span className="text-gray-500 text-xs ml-2">— yfinance 기준 · 자동 계산</span>
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            {val.yieldDiff != null && (
              <span className={`text-[11px] px-2 py-1 rounded-full border ${val.yieldDiff >= 0 ? "bg-emerald-900/30 text-emerald-300 border-emerald-700/40" : "bg-red-900/30 text-red-300 border-red-700/40"}`}>
                Δ수율 {val.yieldDiff >= 0 ? "+" : ""}{val.yieldDiff.toFixed(2)}%p
              </span>
            )}
            {val.ddmGap != null && (
              <span className={`text-[11px] px-2 py-1 rounded-full border ${val.ddmGap >= 0 ? "bg-emerald-900/30 text-emerald-300 border-emerald-700/40" : "bg-red-900/30 text-red-300 border-red-700/40"}`}>
                Δ내재가치 {val.ddmGap >= 0 ? "+" : ""}{val.ddmGap.toFixed(1)}%
              </span>
            )}
            {val.upside != null && (
              <span className={`text-[11px] px-2 py-1 rounded-full border ${val.upside >= 0 ? "bg-indigo-900/30 text-indigo-300 border-indigo-700/40" : "bg-red-900/30 text-red-300 border-red-700/40"}`}>
                Δ컨센서스 {val.upside >= 0 ? "+" : ""}{val.upside.toFixed(1)}%
              </span>
            )}
          </div>

          {/* 종합 판정 + 점수 */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className={`flex-1 rounded-xl p-5 border ${
              val.score >= 6.5 ? "bg-green-950/40 border-green-800/50" :
              val.score <= 3.5 ? "bg-red-950/40 border-red-800/50" :
              "bg-gray-800/50 border-gray-700/50"
            }`}>
              <div className="text-xs text-gray-500 mb-1">종합 판정</div>
              <div className={`text-xl font-bold ${
                val.score >= 6.5 ? "text-green-400" :
                val.score <= 3.5 ? "text-red-400" : "text-yellow-400"
              }`}>{val.overallVerdict}</div>
            </div>
            <div className="bg-gray-800 rounded-xl p-5 text-center w-36 flex-shrink-0">
              <div className="text-xs text-gray-500 mb-1">매수 매력도</div>
              <div className={`text-4xl font-black ${
                val.score >= 7 ? "text-green-400" :
                val.score >= 5 ? "text-yellow-400" : "text-red-400"
              }`}>{val.score}</div>
              <div className="text-gray-600 text-xs mb-2">/10</div>
              <div className={`text-[11px] font-semibold px-2 py-1 rounded-md ${listAlignedOpinion.cls}`}>
                매매의견: {listAlignedOpinion.label}
              </div>
            </div>
          </div>

          {/* 5가지 시그널 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-5">

            {/* ① 수율 시그널 */}
            <SignalCard
              title="① 배당수율 vs 5년 평균"
              signal={val.yieldSignal}
              detail={
                val.yieldDiff != null && m?.dividendYield && m?.fiveYearAvgYield
                  ? `현재 ${m.dividendYield}% / 5년 평균 ${m.fiveYearAvgYield}% / 차이 ${val.yieldDiff > 0 ? "+" : ""}${val.yieldDiff}%`
                  : "데이터 없음"
              }
              description="현재 수율이 역사적 평균보다 높으면 → 주가가 상대적으로 저평가 신호"
            />

            {/* ② DDM */}
            <SignalCard
              title="② 내재가치 추정 (DDM / 수율기반 폴백)"
              signal={val.ddmSignal}
              detail={
                val.fairValueUsed && price
                  ? `${val.fairValueMethod === "ddm" ? "DDM(A)" : val.fairValueMethod === "yield" ? "수율평균 폴백(B)" : "애널리스트 목표가 폴백(C)"} 적정가 $${val.fairValueUsed} / 현재 $${price.toFixed(2)} / 괴리율 ${val.ddmGap! > 0 ? "+" : ""}${val.ddmGap}%`
                  : "내재가치 계산 데이터 부족(D)"
              }
              description={
                val.fairValueMethod === "ddm"
                  ? `DDM = 주당배당금 ÷ (요구수익률 7% - 배당성장률 ${m?.dividendCAGR3yr ?? "?"}%)`
                  : val.fairValueMethod === "yield"
                    ? "DDM 불가 시: 배당금 ÷ 5년 평균수율(히스토리컬 수율 회귀)"
                    : "수율기반도 불가 시: 애널리스트 목표주가를 최종 폴백으로 사용"
              }
            />

            {/* ③ PE */}
            <SignalCard
              title="③ PER 분석"
              signal={val.peSignal}
              detail={
                val.activePE
                  ? `${m?.forwardPE ? "Forward" : "Trailing"} PER ${val.activePE}x (기준: <18 저평가, >28 고평가)`
                  : "PER 데이터 없음"
              }
              description="절대적 기준 적용 — 배당주는 일반적으로 15~25x가 적정"
            />

            {/* ④ 52주 위치 */}
            <SignalCard
              title="④ 52주 가격 위치"
              signal={val.rangeSignal === "저점권" ? "저평가" : val.rangeSignal === "고점권" ? "고평가" : "적정"}
              detail={
                val.pct52 != null && m?.week52Low && m?.week52High
                  ? `현재 ${val.pct52}% 위치 ($${m.week52Low} ~ $${m.week52High})`
                  : "데이터 없음"
              }
              description="52주 저점 근처(0~30%)면 상대적 매수 기회"
            />

            {/* ⑤ 애널리스트 컨센서스 */}
            <SignalCard
              title="⑤ 애널리스트 컨센서스"
              signal={val.analystSignal === "상승여력" ? "저평가" : val.analystSignal === "하락우려" ? "고평가" : "적정"}
              detail={
                m?.targetMeanPrice && price
                  ? `목표주가 $${m.targetMeanPrice} / 현재 $${price.toFixed(2)} / ${val.upside! > 0 ? "+" : ""}${val.upside}% / ${m.recommendationKey ?? "-"} (${m.numberOfAnalysts ?? "?"}명)`
                  : "데이터 없음"
              }
              description="월가 애널리스트 평균 목표주가 기준"
            />

            {/* ⑥ 재무 건전성 요약 */}
            <div className="bg-gray-800 rounded-lg p-4">
              <div className="text-xs text-gray-400 font-medium mb-2">⑥ 재무 건전성</div>
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-500">ROE</span>
                  <span className={`font-medium ${(m?.roe ?? 0) >= 15 ? "text-green-400" : "text-gray-300"}`}>
                    {m?.roe != null ? `${m.roe}%` : "-"}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">부채비율 (D/E)</span>
                  <span className={`font-medium ${(m?.debtToEquity ?? 0) > 200 ? "text-red-400" : (m?.debtToEquity ?? 0) > 100 ? "text-yellow-400" : "text-green-400"}`}>
                    {m?.debtToEquity != null ? `${m.debtToEquity}` : "-"}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">PBR</span>
                  <span className="text-gray-300 font-medium">{m?.priceToBook != null ? `${m.priceToBook}x` : "-"}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">배당 3yr CAGR</span>
                  <span className={`font-medium ${(m?.dividendCAGR3yr ?? 0) >= 5 ? "text-green-400" : "text-gray-300"}`}>
                    {m?.dividendCAGR3yr != null ? `${m.dividendCAGR3yr}%` : "-"}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* 52주 레인지 바 */}
          {m?.week52Low && m?.week52High && price && (
            <div className="bg-gray-800 rounded-lg p-4">
              <div className="flex justify-between text-xs text-gray-500 mb-2">
                <span>52주 저점 ${m.week52Low}</span>
                <span className="text-white font-medium">현재 ${price.toFixed(2)} ({val.pct52}%)</span>
                <span>52주 고점 ${m.week52High}</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2.5 relative">
                <div
                  className="h-2.5 rounded-full bg-gradient-to-r from-green-500 via-yellow-400 to-red-500"
                  style={{ width: `${val.pct52}%` }}
                />
                <div
                  className="absolute top-0 w-1 h-2.5 bg-white rounded-full transform -translate-x-0.5"
                  style={{ left: `${val.pct52}%` }}
                />
              </div>
            </div>
          )}
        </SectionCard>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-6">
        <div className="bg-gray-900 rounded-xl p-5">
          <SectionHeader icon={<Gauge size={16} className="text-cyan-400" />} title="자동 코멘트 (밸류 흐름 해석)" />
          <ul className="text-sm text-gray-300 list-disc pl-4 space-y-2">
            {autoCommentary.map((c) => <li key={c}>{c}</li>)}
          </ul>
        </div>
        <div className="bg-gray-900 rounded-xl p-5">
          <SectionHeader icon={<Target size={16} className="text-indigo-400" />} title="다음 분기 체크포인트 (3)" />
          <ul className="text-sm text-gray-300 list-disc pl-4 space-y-2">
            {checkpoints.map((c) => <li key={c}>{c}</li>)}
          </ul>
        </div>
      </div>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          📝 정성 심층 분석 (수동 작성 — 분석 완료 종목만)
         ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      {!analysis ? (
        <div className="bg-gray-900 rounded-xl p-8 text-center">
          <div className="text-4xl mb-4">🔍</div>
          <h2 className="text-lg font-semibold text-white mb-2">심층 정성 분석 준비 중</h2>
          <p className="text-gray-400 text-sm">
            {stock.ticker}의 사업 모델, 경쟁 해자, 투자 시나리오 분석을 진행 중이에요.
          </p>
          {m?.longBusinessSummary && (
            <div className="mt-4 text-left bg-gray-800 rounded-lg p-4">
              <div className="text-xs text-gray-500 mb-2">기업 개요 (yfinance)</div>
              <p className="text-gray-300 text-xs leading-relaxed line-clamp-4">{m.longBusinessSummary}</p>
            </div>
          )}
        </div>
      ) : (
        <div className="space-y-5">
          {/* 종합 의견 배너 */}
          {(() => {
            const cfg = RATING_CFG[analysis.overallRating];
            return (
              <div className={`rounded-xl p-5 border ${cfg.bg}`}>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">{cfg.emoji}</span>
                  <span className={`text-xl font-bold ${cfg.color}`}>{analysis.overallRating}</span>
                  <span className="text-gray-500 text-xs">· 분석일: {analysis.analyzedAt}</span>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">{analysis.ratingReason}</p>
                {analysis.targetBuyPrice && (
                  <div className="mt-2 text-xs text-gray-500">
                    관심 매수가: <span className="text-white font-medium">${analysis.targetBuyPrice}</span> 이하
                    {price && analysis.targetBuyPrice && (
                      <span className={`ml-2 font-medium ${price <= analysis.targetBuyPrice ? "text-green-400" : "text-yellow-400"}`}>
                        {price <= analysis.targetBuyPrice ? "✅ 현재 매수 구간!" : `(현재가 $${price.toFixed(2)} — 목표가 대비 +${((price - analysis.targetBuyPrice) / analysis.targetBuyPrice * 100).toFixed(1)}%)`}
                      </span>
                    )}
                  </div>
                )}
              </div>
            );
          })()}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {/* 사업 개요 */}
            <div className="bg-gray-900 rounded-xl p-5">
              <SectionHeader icon={<BookOpen size={16} className="text-blue-400" />} title="사업 개요" />
              <p className="text-gray-300 text-sm leading-relaxed mb-4">{analysis.businessSummary}</p>
              <div className="mb-3">
                <div className="text-gray-500 text-xs mb-2">핵심 제품/서비스</div>
                <div className="flex flex-wrap gap-1.5">
                  {analysis.coreProducts.map(p => (
                    <span key={p} className="bg-gray-800 text-gray-300 text-xs px-2 py-1 rounded">{p}</span>
                  ))}
                </div>
              </div>
              <div className="text-xs text-gray-500">
                <span className="text-gray-400">사업 지역:</span> {analysis.geographicPresence}
              </div>
            </div>

            {/* 배당 히스토리 */}
            <div className="bg-gray-900 rounded-xl p-5">
              <SectionHeader icon={<DollarSign size={16} className="text-green-400" />} title="배당 분석" />
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="bg-gray-800 rounded-lg p-3 text-center">
                  <div className="text-gray-500 text-xs mb-1">5년 배당 CAGR</div>
                  <div className="text-green-400 font-bold text-lg">
                    {analysis.dividendCAGR5yr != null ? `${analysis.dividendCAGR5yr}%` : "-"}
                  </div>
                </div>
                <div className="bg-gray-800 rounded-lg p-3 text-center">
                  <div className="text-gray-500 text-xs mb-1">10년 배당 CAGR</div>
                  <div className="text-green-400 font-bold text-lg">
                    {analysis.dividendCAGR10yr != null ? `${analysis.dividendCAGR10yr}%` : "-"}
                  </div>
                </div>
              </div>
              <div className="text-sm text-gray-300 mb-3 bg-gray-800 rounded-lg p-3">
                <span className="text-gray-500 text-xs block mb-1">최근 배당 인상</span>
                {analysis.recentDividendGrowth}
              </div>
              <div className="flex items-center gap-2 text-sm px-3 py-2 rounded-lg bg-gray-800">
                <span className={`w-2 h-2 rounded-full flex-shrink-0 ${SAFETY_CFG[analysis.dividendSafety].dot}`} />
                <span className={`font-medium text-xs ${SAFETY_CFG[analysis.dividendSafety].color}`}>
                  배당 안정성: {SAFETY_CFG[analysis.dividendSafety].label}
                </span>
                <span className="text-gray-500 text-xs">— {analysis.dividendSafetyReason}</span>
              </div>
            </div>

            {/* 경제적 해자 */}
            <div className="bg-gray-900 rounded-xl p-5">
              <SectionHeader icon={<Shield size={16} className="text-purple-400" />} title="경제적 해자 (Moat)" />
              {(() => {
                const cfg = MOAT_STRENGTH_CFG[analysis.moatStrength];
                return (
                  <div className={`rounded-lg p-3 mb-4 border ${cfg.bg}`}>
                    <span className={`font-semibold ${cfg.color}`}>{cfg.label}</span>
                  </div>
                );
              })()}
              <div className="flex flex-wrap gap-1.5 mb-3">
                {analysis.moatTypes.map(m => (
                  <span key={m} className="bg-purple-900/30 text-purple-300 text-xs px-2 py-1 rounded border border-purple-800/40">
                    {MOAT_LABELS[m]}
                  </span>
                ))}
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">{analysis.moatNarrative}</p>
            </div>

            {/* 재무 건전성 */}
            <div className="bg-gray-900 rounded-xl p-5">
              <SectionHeader icon={<BarChart2 size={16} className="text-yellow-400" />} title="재무 건전성" />
              <div className="grid grid-cols-3 gap-2 mb-4">
                <div className="bg-gray-800 rounded-lg p-2.5 text-center">
                  <div className="text-gray-500 text-xs mb-1">매출 성장</div>
                  <div className="text-white text-xs font-medium">{analysis.revenueGrowthTrend}</div>
                </div>
                <div className="bg-gray-800 rounded-lg p-2.5 text-center">
                  <div className="text-gray-500 text-xs mb-1">마진 추세</div>
                  <div className={`text-xs font-medium ${analysis.marginTrend === "expanding" ? "text-green-400" : analysis.marginTrend === "stable" ? "text-gray-300" : "text-red-400"}`}>
                    {analysis.marginTrend === "expanding" ? "개선" : analysis.marginTrend === "stable" ? "안정" : "악화"}
                  </div>
                </div>
                <div className="bg-gray-800 rounded-lg p-2.5 text-center">
                  <div className="text-gray-500 text-xs mb-1">부채 수준</div>
                  <div className={`text-xs font-medium ${analysis.debtLevel === "low" ? "text-green-400" : analysis.debtLevel === "moderate" ? "text-yellow-400" : "text-red-400"}`}>
                    {analysis.debtLevel === "low" ? "낮음" : analysis.debtLevel === "moderate" ? "보통" : "높음"}
                  </div>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">{analysis.financialSummary}</p>
            </div>
          </div>

          {/* Bull/Bear */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="bg-gray-900 rounded-xl p-5">
              <SectionHeader icon={<TrendingUp size={16} className="text-green-400" />} title="강세 시나리오 (Bull)" />
              <p className="text-gray-300 text-sm leading-relaxed">{analysis.bullCase}</p>
            </div>
            <div className="bg-gray-900 rounded-xl p-5">
              <SectionHeader icon={<AlertTriangle size={16} className="text-yellow-400" />} title="약세 시나리오 (Bear)" />
              <p className="text-gray-300 text-sm leading-relaxed mb-3">{analysis.bearCase}</p>
              <div className="space-y-1">
                {analysis.keyRisks.map((r, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-gray-400">
                    <span className="text-yellow-500 mt-0.5 flex-shrink-0">•</span>
                    <span>{r}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 밸류에이션 코멘트 + 최근 이슈 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="bg-gray-900 rounded-xl p-5">
              <SectionHeader icon={<Star size={16} className="text-yellow-400" />} title="밸류에이션 코멘트" />
              <p className="text-gray-300 text-sm leading-relaxed">{analysis.valuationComment}</p>
            </div>
            <div className="bg-gray-900 rounded-xl p-5">
              <SectionHeader icon={<Calendar size={16} className="text-indigo-400" />} title="최근 이슈" />
              <div className="space-y-2">
                {analysis.recentDevelopments.map((d, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm text-gray-300">
                    <span className="text-indigo-400 mt-0.5 flex-shrink-0">→</span>
                    <span>{d}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ─── 하위 컴포넌트 ─────────────────────────────────────────────────────────────

function SignalCard({
  title, signal, detail, description,
}: {
  title: string;
  signal: "저평가" | "적정" | "고평가" | "N/A";
  detail: string;
  description: string;
}) {
  const cfg = {
    "저평가": { bg: "bg-green-900/20 border-green-800/40", badge: "bg-green-900/60 text-green-300", dot: "bg-green-400" },
    "적정":   { bg: "bg-gray-800/50 border-gray-700/40",   badge: "bg-gray-700 text-gray-300",       dot: "bg-gray-400" },
    "고평가": { bg: "bg-red-900/20 border-red-800/40",     badge: "bg-red-900/60 text-red-300",       dot: "bg-red-400" },
    "N/A":    { bg: "bg-gray-800/30 border-gray-700/30",   badge: "bg-gray-700 text-gray-500",       dot: "bg-gray-600" },
  }[signal];

  return (
    <div className={`rounded-lg p-4 border ${cfg.bg}`}>
      <div className="flex items-center justify-between mb-2">
        <div className="text-xs text-gray-400 font-medium">{title}</div>
        <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${cfg.badge}`}>{signal}</span>
      </div>
      <div className="text-xs text-gray-300 mb-1 font-mono">{detail}</div>
      <div className="text-xs text-gray-600 leading-tight">{description}</div>
    </div>
  );
}

function MiniStat({ label, value, color }: { label: string; value: string; color: string }) {
  return (
    <div className="bg-gray-800 rounded-lg px-3 py-2">
      <div className="text-gray-500 text-xs mb-0.5">{label}</div>
      <div className={`font-bold text-sm ${color}`}>{value}</div>
    </div>
  );
}

function SectionHeader({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <div className="flex items-center gap-2 mb-3">
      {icon}
      <h3 className="font-semibold text-white text-sm">{title}</h3>
    </div>
  );
}
