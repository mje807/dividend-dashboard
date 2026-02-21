import { X, TrendingUp, TrendingDown, Minus } from "lucide-react";
import type { StockMetrics } from "~/data/metrics";
import type { Holding } from "~/data/portfolio";

interface Props {
  holding: Holding | null;
  metrics: StockMetrics | undefined;
  onClose: () => void;
}

function fmt(v: number | null | undefined, suffix = "", prefix = "", decimals = 2) {
  if (v == null) return <span className="text-gray-600">-</span>;
  return <span>{prefix}{v.toFixed(decimals)}{suffix}</span>;
}

function fmtLarge(v: number | null | undefined) {
  if (v == null) return <span className="text-gray-600">-</span>;
  if (v >= 1_000_000_000_000) return <span>${(v / 1_000_000_000_000).toFixed(1)}T</span>;
  if (v >= 1_000_000_000) return <span>${(v / 1_000_000_000).toFixed(1)}B</span>;
  if (v >= 1_000_000) return <span>${(v / 1_000_000).toFixed(0)}M</span>;
  return <span>${v.toLocaleString()}</span>;
}

function RecommendBadge({ rec }: { rec: string | null }) {
  if (!rec) return <span className="text-gray-600">-</span>;
  const map: Record<string, { label: string; cls: string }> = {
    "strong_buy": { label: "강력 매수", cls: "bg-green-900/60 text-green-300" },
    "buy":        { label: "매수",      cls: "bg-green-900/40 text-green-400" },
    "hold":       { label: "보유",      cls: "bg-yellow-900/40 text-yellow-400" },
    "underperform":{ label: "중립이하", cls: "bg-orange-900/40 text-orange-400" },
    "sell":       { label: "매도",      cls: "bg-red-900/40 text-red-400" },
  };
  const d = map[rec] ?? { label: rec, cls: "bg-gray-800 text-gray-400" };
  return <span className={`text-xs px-2 py-0.5 rounded-full font-semibold ${d.cls}`}>{d.label}</span>;
}

function Week52Bar({ price, low, high }: { price: number | null; low: number | null; high: number | null }) {
  if (!price || !low || !high || high === low) return null;
  const pct = Math.min(100, Math.max(0, ((price - low) / (high - low)) * 100));
  return (
    <div className="mt-2">
      <div className="relative h-1.5 bg-gray-700 rounded-full">
        <div
          className="absolute h-1.5 bg-indigo-500 rounded-full"
          style={{ width: `${pct}%` }}
        />
        <div
          className="absolute w-2 h-2 bg-white rounded-full -top-0.5 -ml-1 shadow"
          style={{ left: `${pct}%` }}
        />
      </div>
      <div className="flex justify-between text-gray-500 text-xs mt-1">
        <span>52주 저: ${low}</span>
        <span>52주 고: ${high}</span>
      </div>
    </div>
  );
}

function MetricRow({ label, value, sub }: { label: string; value: React.ReactNode; sub?: string }) {
  return (
    <div className="flex items-center justify-between py-2 border-b border-gray-800/60">
      <span className="text-gray-400 text-xs">{label}</span>
      <div className="text-right">
        <span className="text-white text-sm font-medium">{value}</span>
        {sub && <span className="text-gray-500 text-xs ml-1.5">{sub}</span>}
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-5">
      <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 pb-1 border-b border-gray-800">
        {title}
      </h3>
      {children}
    </div>
  );
}

export default function StockDetailDrawer({ holding, metrics, onClose }: Props) {
  if (!holding) return null;

  const m = metrics;
  const isKRW = holding.currency === "KRW";
  const priceUnit = isKRW ? "₩" : "$";

  // 애널리스트 목표가 대비 현재가 업사이드
  const upside = m?.targetMeanPrice && m?.currentPrice
    ? ((m.targetMeanPrice - m.currentPrice) / m.currentPrice * 100)
    : null;

  return (
    <>
      {/* 딤 오버레이 */}
      <div
        className="fixed inset-0 bg-black/50 z-40 transition-opacity"
        onClick={onClose}
      />

      {/* 드로어 */}
      <div className="fixed right-0 top-0 h-full w-full sm:w-[420px] bg-gray-950 border-l border-gray-800 z-50 overflow-y-auto shadow-2xl flex flex-col">
        {/* 헤더 */}
        <div className="sticky top-0 bg-gray-950 border-b border-gray-800 px-5 py-4 flex items-start justify-between z-10">
          <div>
            <div className="flex items-center gap-2">
              <span
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: holding.color }}
              />
              <span className="text-xl font-bold text-white">{holding.ticker}</span>
              <span className={`text-xs px-2 py-0.5 rounded-full ${holding.dividendFrequency === "monthly" ? "bg-green-900/50 text-green-400" : "bg-blue-900/50 text-blue-400"}`}>
                {holding.dividendFrequency === "monthly" ? "월배당" : "분기배당"}
              </span>
            </div>
            <p className="text-gray-400 text-xs mt-0.5">{m?.longName ?? holding.name}</p>
            {m?.industry && (
              <p className="text-gray-600 text-xs">{m.sector} · {m.industry}</p>
            )}
          </div>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-white transition-colors p-1"
          >
            <X size={18} />
          </button>
        </div>

        <div className="px-5 py-4 flex-1">
          {/* 가격 + 보유 현황 */}
          <Section title="보유 현황">
            <div className="grid grid-cols-2 gap-3 mb-3">
              <div className="bg-gray-900 rounded-lg p-3">
                <div className="text-gray-500 text-xs mb-1">평가금액</div>
                <div className="text-white font-bold text-sm">{holding.rawValue}</div>
              </div>
              <div className="bg-gray-900 rounded-lg p-3">
                <div className="text-gray-500 text-xs mb-1">수익</div>
                <div className={`font-bold text-sm ${holding.rawGain?.includes('+') ? 'text-green-400' : holding.rawGain?.includes('-') ? 'text-red-400' : 'text-gray-400'}`}>
                  {holding.rawGain || '-'}
                </div>
              </div>
              <div className="bg-gray-900 rounded-lg p-3">
                <div className="text-gray-500 text-xs mb-1">보유 수량</div>
                <div className="text-white font-bold text-sm">{holding.shares}주</div>
              </div>
              <div className="bg-gray-900 rounded-lg p-3">
                <div className="text-gray-500 text-xs mb-1">섹터</div>
                <div className="text-white font-bold text-sm">{holding.sector}</div>
              </div>
            </div>

            {/* 52주 가격 범위 */}
            {!isKRW && (
              <>
                <div className="flex items-baseline gap-2 mt-2">
                  <span className="text-2xl font-bold text-white">
                    {m?.currentPrice ? `$${m.currentPrice}` : `$${holding.currentPrice}`}
                  </span>
                  {upside !== null && (
                    <span className={`text-xs flex items-center gap-0.5 ${upside >= 0 ? "text-green-400" : "text-red-400"}`}>
                      {upside >= 0 ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
                      목표가 대비 {upside >= 0 ? "+" : ""}{upside.toFixed(1)}%
                    </span>
                  )}
                </div>
                <Week52Bar price={m?.currentPrice ?? holding.currentPrice} low={m?.week52Low ?? null} high={m?.week52High ?? null} />
              </>
            )}
          </Section>

          {/* 배당 정보 */}
          <Section title="💰 배당 정보">
            <MetricRow label="시가 배당률"
              value={fmt(m?.dividendYield ?? holding.dividendYield, "%", "", 2)}
            />
            <MetricRow label="주당 연간 배당금"
              value={fmt(m?.dividendRate ?? holding.annualDividendPerShare, "", priceUnit)}
            />
            <MetricRow label="예상 연간 배당금 (보유량 기준)"
              value={
                (() => {
                  const rate = m?.dividendRate ?? holding.annualDividendPerShare;
                  const total = rate * holding.shares;
                  if (!total) return <span className="text-gray-600">-</span>;
                  return <span className="text-green-400 font-bold">{priceUnit}{total.toFixed(isKRW ? 0 : 2)}</span>;
                })()
              }
            />
            <MetricRow label="배당성향"
              value={
                (() => {
                  const pr = m?.payoutRatio;
                  if (pr == null) return <span className="text-gray-600">-</span>;
                  return (
                    <span className={pr > 80 ? "text-red-400" : pr > 60 ? "text-yellow-400" : "text-green-400"}>
                      {pr.toFixed(0)}%
                    </span>
                  );
                })()
              }
            />
            <MetricRow label="배당락일"
              value={m?.exDividendDate ? <span className="text-indigo-400">{m.exDividendDate}</span> : <span className="text-gray-600">-</span>}
            />
            <MetricRow label="5년 평균 배당률"
              value={fmt(m?.fiveYearAvgDividendYield, "%")}
            />
          </Section>

          {/* 밸류에이션 */}
          {(m?.trailingPE || m?.forwardPE || m?.priceToBook) && (
            <Section title="📊 밸류에이션">
              <MetricRow label="PER (trailing)" value={fmt(m?.trailingPE, "x", "", 1)} />
              <MetricRow label="PER (forward)"  value={fmt(m?.forwardPE,  "x", "", 1)} />
              <MetricRow label="PBR"             value={fmt(m?.priceToBook, "x", "", 2)} />
              <MetricRow label="EV/EBITDA"       value={fmt(m?.evToEbitda,  "x", "", 1)} />
              <MetricRow label="베타"             value={fmt(m?.beta, "", "", 2)} sub="시장 변동성 대비" />
            </Section>
          )}

          {/* 재무 건전성 */}
          {(m?.roe || m?.profitMargin || m?.debtToEquity) && (
            <Section title="🏦 재무 건전성">
              <MetricRow label="ROE"
                value={
                  (() => {
                    const roe = m?.roe;
                    if (roe == null) return <span className="text-gray-600">-</span>;
                    return <span className={roe >= 15 ? "text-green-400" : roe >= 10 ? "text-yellow-400" : "text-gray-400"}>{roe.toFixed(1)}%</span>;
                  })()
                }
              />
              <MetricRow label="순이익률"       value={fmt(m?.profitMargin, "%", "", 1)} />
              <MetricRow label="부채/자본 비율"  value={fmt(m?.debtToEquity, "", "", 1)} sub="낮을수록 안전" />
              <MetricRow label="유동비율"        value={fmt(m?.currentRatio, "x", "", 2)} sub="1.5+ 양호" />
              <MetricRow label="매출 성장률"     value={fmt(m?.revenueGrowth, "%", "", 1)} />
              <MetricRow label="시가총액"        value={fmtLarge(m?.marketCap)} />
            </Section>
          )}

          {/* 애널리스트 */}
          {(m?.targetMeanPrice || m?.recommendationKey) && (
            <Section title="👨‍💼 애널리스트">
              <MetricRow label="투자 의견"
                value={<RecommendBadge rec={m?.recommendationKey ?? null} />}
                sub={m?.numberOfAnalystOpinions ? `${m.numberOfAnalystOpinions}명` : undefined}
              />
              <MetricRow label="목표 주가"
                value={
                  m?.targetMeanPrice
                    ? <span className="text-indigo-400">${m.targetMeanPrice}</span>
                    : <span className="text-gray-600">-</span>
                }
              />
              {upside !== null && (
                <MetricRow label="현재가 대비 업사이드"
                  value={
                    <span className={upside >= 0 ? "text-green-400 font-bold" : "text-red-400 font-bold"}>
                      {upside >= 0 ? "+" : ""}{upside.toFixed(1)}%
                    </span>
                  }
                />
              )}
            </Section>
          )}

          {/* 기업 개요 */}
          {m?.longBusinessSummary && (
            <Section title="📋 기업 개요">
              <p className="text-gray-400 text-xs leading-relaxed">{m.longBusinessSummary}</p>
            </Section>
          )}

          {/* 데이터 없음 안내 */}
          {!m && (
            <div className="text-center py-8 text-gray-600 text-sm">
              상세 데이터가 없습니다.<br />
              <span className="text-xs">스크래퍼를 실행하면 업데이트됩니다.</span>
            </div>
          )}

          <p className="text-gray-700 text-xs text-center mt-4 pb-4">
            데이터 출처: yfinance · {m?.lastUpdated ?? "미수집"}
          </p>
        </div>
      </div>
    </>
  );
}
