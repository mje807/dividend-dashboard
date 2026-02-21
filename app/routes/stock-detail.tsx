import { Link, useParams } from "react-router";
import { ArrowLeft, Shield, TrendingUp, AlertTriangle, Star, BookOpen, Calendar, DollarSign, BarChart2 } from "lucide-react";
import { royaltyStocks } from "~/data/royalty";
import { getAnalysis, type MoatType } from "~/data/royalty-analysis";
import { getMetrics } from "~/data/metrics";

export function meta({ params }: { params: { ticker: string } }) {
  return [{ title: `${params.ticker} 심층분석 — 배당 대시보드` }];
}

const MOAT_LABELS: Record<MoatType, string> = {
  brand: "브랜드",
  switching_costs: "전환비용",
  network_effect: "네트워크 효과",
  cost_advantage: "비용 우위",
  efficient_scale: "효율적 규모",
  intangible_assets: "무형자산",
};

const MOAT_STRENGTH_CONFIG = {
  wide: { label: "넓은 해자", color: "text-green-400", bg: "bg-green-900/30 border-green-800/50" },
  narrow: { label: "좁은 해자", color: "text-yellow-400", bg: "bg-yellow-900/30 border-yellow-800/50" },
  none: { label: "해자 없음", color: "text-red-400", bg: "bg-red-900/30 border-red-800/50" },
};

const SAFETY_CONFIG = {
  strong: { label: "안정", color: "text-green-400", dot: "bg-green-400" },
  moderate: { label: "보통", color: "text-yellow-400", dot: "bg-yellow-400" },
  watch: { label: "주의", color: "text-red-400", dot: "bg-red-400" },
};

const RATING_CONFIG = {
  "관심": { color: "text-green-400", bg: "bg-green-900/40 border-green-700", emoji: "⭐" },
  "보유": { color: "text-indigo-400", bg: "bg-indigo-900/40 border-indigo-700", emoji: "💎" },
  "관망": { color: "text-gray-400", bg: "bg-gray-800/40 border-gray-700", emoji: "👀" },
};

export default function StockDetail() {
  const { ticker } = useParams<{ ticker: string }>();
  const stock = royaltyStocks.find(s => s.ticker === ticker);
  const analysis = ticker ? getAnalysis(ticker) : undefined;
  const metrics = ticker ? getMetrics(ticker) : undefined;

  if (!stock) {
    return (
      <div className="min-h-screen bg-gray-950 text-white p-6 flex flex-col items-center justify-center">
        <div className="text-gray-400 text-lg mb-4">종목을 찾을 수 없어요</div>
        <Link to="/watchlist" className="text-indigo-400 hover:text-indigo-300 text-sm">← 목록으로</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white p-6">
      {/* 헤더 */}
      <div className="flex items-center gap-4 mb-8">
        <Link to="/watchlist" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm">
          <ArrowLeft size={16} />
          왕족·귀족주 목록
        </Link>
      </div>

      {/* 종목 헤더 카드 */}
      <div className="bg-gray-900 rounded-xl p-6 mb-6">
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
              <span className="bg-gray-800 text-gray-300 text-xs px-3 py-1 rounded-full">{stock.sector}</span>
              <span className="bg-yellow-900/40 text-yellow-400 text-xs px-3 py-1 rounded-full font-medium">
                {stock.category === "king" ? "👑 배당왕족주" : "🏆 배당귀족주"}
              </span>
              <span className="bg-indigo-900/40 text-indigo-400 text-xs px-3 py-1 rounded-full">
                {stock.streak}년 연속 배당 증가
              </span>
            </div>
          </div>

          {/* 핵심 지표 */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-center">
            <MiniStat label="현재가" value={stock.price > 0 ? `$${stock.price.toFixed(2)}` : "-"} color="text-white" />
            <MiniStat label="배당률" value={stock.dividendYield > 0 ? `${stock.dividendYield.toFixed(2)}%` : "-"} color="text-green-400" />
            <MiniStat label="주당배당금" value={stock.dividendRate > 0 ? `$${stock.dividendRate.toFixed(2)}` : "-"} color="text-indigo-400" />
            <MiniStat label="PER" value={stock.peRatio > 0 ? `${stock.peRatio.toFixed(1)}x` : "-"} color="text-yellow-400" />
            <MiniStat label="배당성향" value={stock.payoutRatio > 0 ? `${stock.payoutRatio.toFixed(0)}%` : "-"}
              color={stock.payoutRatio > 80 ? "text-red-400" : stock.payoutRatio > 60 ? "text-yellow-400" : "text-gray-300"} />
            {metrics?.week52High && metrics?.week52Low && (
              <MiniStat label="52주 범위" value={`$${metrics.week52Low.toFixed(0)}–${metrics.week52High.toFixed(0)}`} color="text-gray-400" />
            )}
          </div>
        </div>
      </div>

      {/* 분석 미완료 상태 */}
      {!analysis && (
        <div className="bg-gray-900 rounded-xl p-8 text-center">
          <div className="text-4xl mb-4">🔍</div>
          <h2 className="text-lg font-semibold text-white mb-2">심층 분석 준비 중</h2>
          <p className="text-gray-400 text-sm">
            AI가 {stock.ticker} 분석을 진행 중이에요.<br />
            30분 내로 업데이트될 예정입니다.
          </p>
          <div className="mt-4 flex justify-center gap-2 text-xs text-gray-600">
            <span>사업 개요</span><span>·</span>
            <span>배당 히스토리</span><span>·</span>
            <span>경제적 해자</span><span>·</span>
            <span>투자 시나리오</span>
          </div>
        </div>
      )}

      {/* 분석 완료 */}
      {analysis && (
        <div className="space-y-5">
          {/* 종합 의견 배너 */}
          {(() => {
            const cfg = RATING_CONFIG[analysis.overallRating];
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

            {/* 배당 분석 */}
            <div className="bg-gray-900 rounded-xl p-5">
              <SectionHeader icon={<DollarSign size={16} className="text-green-400" />} title="배당 분석" />
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="bg-gray-800 rounded-lg p-3 text-center">
                  <div className="text-gray-500 text-xs mb-1">5년 배당 CAGR</div>
                  <div className="text-green-400 font-bold">
                    {analysis.dividendCAGR5yr != null ? `${analysis.dividendCAGR5yr}%` : "-"}
                  </div>
                </div>
                <div className="bg-gray-800 rounded-lg p-3 text-center">
                  <div className="text-gray-500 text-xs mb-1">10년 배당 CAGR</div>
                  <div className="text-green-400 font-bold">
                    {analysis.dividendCAGR10yr != null ? `${analysis.dividendCAGR10yr}%` : "-"}
                  </div>
                </div>
              </div>
              <div className="text-sm text-gray-300 mb-3">
                <span className="text-gray-500 text-xs">최근 인상: </span>
                {analysis.recentDividendGrowth}
              </div>
              <div className={`flex items-center gap-2 text-sm px-3 py-2 rounded-lg bg-gray-800`}>
                <span className={`w-2 h-2 rounded-full ${SAFETY_CONFIG[analysis.dividendSafety].dot}`} />
                <span className={`font-medium ${SAFETY_CONFIG[analysis.dividendSafety].color}`}>
                  배당 안정성: {SAFETY_CONFIG[analysis.dividendSafety].label}
                </span>
                <span className="text-gray-500 text-xs ml-1">— {analysis.dividendSafetyReason}</span>
              </div>
            </div>

            {/* 경제적 해자 */}
            <div className="bg-gray-900 rounded-xl p-5">
              <SectionHeader icon={<Shield size={16} className="text-purple-400" />} title="경제적 해자 (Moat)" />
              {(() => {
                const cfg = MOAT_STRENGTH_CONFIG[analysis.moatStrength];
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

          {/* Bull/Bear 시나리오 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="bg-gray-900 rounded-xl p-5">
              <SectionHeader icon={<TrendingUp size={16} className="text-green-400" />} title="강세 시나리오 (Bull)" />
              <p className="text-gray-300 text-sm leading-relaxed">{analysis.bullCase}</p>
            </div>
            <div className="bg-gray-900 rounded-xl p-5">
              <SectionHeader icon={<AlertTriangle size={16} className="text-yellow-400" />} title="약세 시나리오 (Bear)" />
              <p className="text-gray-300 text-sm leading-relaxed">{analysis.bearCase}</p>
              <div className="mt-3 space-y-1">
                {analysis.keyRisks.map((r, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-gray-400">
                    <span className="text-yellow-500 mt-0.5">•</span>
                    <span>{r}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 밸류에이션 & 최근 이슈 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="bg-gray-900 rounded-xl p-5">
              <SectionHeader icon={<Star size={16} className="text-yellow-400" />} title="밸류에이션" />
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
