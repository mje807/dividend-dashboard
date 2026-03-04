import { macroData } from "../data/macro";
import { PageHeader } from "~/components/ui/PageHeader";
import { SectionCard } from "~/components/ui/SectionCard";

// ── 헬퍼 ─────────────────────────────────────────────────────────────────────
function fmt(n: number, decimals = 2) {
  return n.toLocaleString("en-US", { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
}
function pct(n: number) {
  const sign = n >= 0 ? "+" : "";
  return `${sign}${n.toFixed(2)}%`;
}
function changeColor(n: number) {
  if (n > 0) return "text-emerald-600";
  if (n < 0) return "text-red-500";
  return "text-gray-500";
}
function changeBg(n: number) {
  if (n > 0) return "bg-emerald-50 border-emerald-200";
  if (n < 0) return "bg-red-50 border-red-200";
  return "bg-gray-50 border-gray-200";
}

// ── 서브 컴포넌트 ─────────────────────────────────────────────────────────────

function MarketCard({ label, price, changePercent, prefix = "", suffix = "" }: {
  label: string; price: number; changePercent: number; prefix?: string; suffix?: string;
}) {
  return (
    <div className={`rounded-xl border p-3 flex flex-col gap-1 ${changeBg(changePercent)}`}>
      <span className="text-xs text-gray-500 font-medium">{label}</span>
      <span className="text-lg font-bold text-gray-800">
        {prefix}{fmt(price)}{suffix}
      </span>
      <span className={`text-xs font-semibold ${changeColor(changePercent)}`}>
        {pct(changePercent)}
      </span>
    </div>
  );
}

function RateCard({ label, value, sub }: { label: string; value: number; sub?: string }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-4 flex flex-col gap-1">
      <span className="text-xs text-gray-500 font-medium">{label}</span>
      <span className="text-2xl font-bold text-gray-800">{value.toFixed(2)}%</span>
      {sub && <span className="text-xs text-gray-400">{sub}</span>}
    </div>
  );
}

function SignalBadge({ label, signal }: { label: string; signal: string }) {
  const good = ["유리", "안정", "주식 매력 높음", "매우 유리", "주식 소폭 유리", "매우 안정"];
  const bad  = ["불리", "불안", "채권 유리", "매우 불리", "채권 압도적 유리", "극도 불안"];
  const color = good.includes(signal)
    ? "bg-emerald-100 text-emerald-700 border-emerald-200"
    : bad.includes(signal)
    ? "bg-red-100 text-red-700 border-red-200"
    : "bg-yellow-100 text-yellow-700 border-yellow-200";
  return (
    <div className={`rounded-lg border px-3 py-2 text-center ${color}`}>
      <div className="text-xs font-medium opacity-70">{label}</div>
      <div className="text-sm font-bold mt-0.5">{signal}</div>
    </div>
  );
}

// ── 수익률 곡선 바 ────────────────────────────────────────────────────────────
function YieldCurve({ t3m, t5, t10 }: { t3m: number; t5: number; t10: number }) {
  const max = Math.max(t3m, t5, t10) + 0.5;
  const bar = (val: number) => `${Math.max(5, (val / max) * 100).toFixed(1)}%`;
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-4">
      <div className="text-sm font-semibold text-gray-700 mb-3">수익률 곡선</div>
      <div className="flex items-end gap-3 h-20">
        {[["3M", t3m], ["5Y", t5], ["10Y", t10]].map(([label, val]) => (
          <div key={label as string} className="flex flex-col items-center gap-1 flex-1">
            <span className="text-xs font-bold text-gray-600">{(val as number).toFixed(2)}%</span>
            <div
              className="w-full rounded-t-md bg-blue-400"
              style={{ height: bar(val as number) }}
            />
            <span className="text-xs text-gray-400">{label as string}</span>
          </div>
        ))}
      </div>
      {macroData.rates.isInverted && (
        <div className="mt-2 text-xs text-red-600 font-medium flex items-center gap-1">
          ⚠️ 역수익률 곡선 (경기침체 선행 신호)
        </div>
      )}
    </div>
  );
}

// ── 메인 페이지 ───────────────────────────────────────────────────────────────
export default function MarketPage() {
  const { market, rates, dividendScore, dividends, fed } = macroData;

  const updatedAt = new Date(macroData.updatedAt).toLocaleString("ko-KR", {
    timeZone: "Asia/Seoul",
    month: "numeric", day: "numeric",
    hour: "2-digit", minute: "2-digit",
  });

  const scoreColor =
    dividendScore.score >= 7 ? "text-emerald-600" :
    dividendScore.score >= 4 ? "text-yellow-600" :
    "text-red-500";

  const scoreRingColor =
    dividendScore.score >= 7 ? "border-emerald-400" :
    dividendScore.score >= 4 ? "border-yellow-400" :
    "border-red-400";

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-6 space-y-6">
        <PageHeader
          title="🌍 시장 인사이트"
          subtitle="배당주 투자 거시환경 모니터"
          updatedAt={`${updatedAt} KST`}
        />

        {/* ① 시장 스냅샷 */}
        <section>
          <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">📈 시장 스냅샷</h2>
          <SectionCard>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            <MarketCard label="S&P 500" price={market.sp500.price} changePercent={market.sp500.changePercent} />
            <MarketCard label="NASDAQ" price={market.nasdaq.price} changePercent={market.nasdaq.changePercent} />
            <MarketCard label="DOW" price={market.dow.price} changePercent={market.dow.changePercent} />
            <div className={`rounded-xl border p-3 flex flex-col gap-1 ${changeBg(-market.vix.changePercent)}`}>
              <span className="text-xs text-gray-500 font-medium">VIX 공포지수</span>
              <span className="text-lg font-bold text-gray-800">{market.vix.value.toFixed(2)}</span>
              <span className={`text-xs font-semibold ${changeColor(market.vix.changePercent)}`}>
                {pct(market.vix.changePercent)}
              </span>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2 mt-2">
            <MarketCard label="금 (GLD)" price={market.gold.price} changePercent={market.gold.changePercent} prefix="$" />
            <MarketCard label="WTI 원유 (USO)" price={market.oil.price} changePercent={market.oil.changePercent} prefix="$" />
            <MarketCard label="달러인덱스 (UUP)" price={market.dollarIndex.price} changePercent={market.dollarIndex.changePercent} prefix="$" />
          </div>
          </SectionCard>
        </section>

        {/* ② 배당 환경 점수 */}
        <section>
          <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">🚦 배당 환경 점수</h2>
          <div className="bg-white rounded-2xl border border-gray-200 p-5">
            <div className="flex items-center gap-6">
              {/* 점수 원형 */}
              <div className={`w-24 h-24 rounded-full border-4 ${scoreRingColor} flex flex-col items-center justify-center flex-shrink-0`}>
                <span className={`text-3xl font-black ${scoreColor}`}>{dividendScore.score}</span>
                <span className="text-xs text-gray-400">/10</span>
              </div>
              <div className="flex-1">
                <div className={`text-xl font-bold mb-1 ${scoreColor}`}>{dividendScore.label}</div>
                <p className="text-xs text-gray-500 mb-3">
                  금리·시장변동성·밸류에이션을 종합한 배당주 투자 환경 점수
                </p>
                <div className="grid grid-cols-3 gap-2">
                  <SignalBadge label="금리환경" signal={dividendScore.rateSignal} />
                  <SignalBadge label="시장변동성" signal={dividendScore.marketSignal} />
                  <SignalBadge label="밸류에이션" signal={dividendScore.valuationSignal} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ③ 금리 환경 */}
        <section>
          <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">🏦 금리 환경</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-3">
            <RateCard label="연준 기준금리" value={rates.fed} sub="현재 목표 구간" />
            <RateCard label="미국채 10년" value={rates.treasury10y} sub={rates.isInverted ? "⚠️ 역전" : "정상"} />
            <RateCard label="미국채 5년" value={rates.treasury5y} />
            <RateCard label="미국채 3개월" value={rates.treasury3m} />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <YieldCurve t3m={rates.treasury3m} t5={rates.treasury5y} t10={rates.treasury10y} />
            {/* Bond vs Stock */}
            <div className="bg-white rounded-xl border border-gray-200 p-4">
              <div className="text-sm font-semibold text-gray-700 mb-3">채권 vs 주식 매력도</div>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-xs text-gray-500 mb-1">
                    <span>미국채 10년 수익률</span>
                    <span className="font-bold text-gray-700">{rates.treasury10y.toFixed(2)}%</span>
                  </div>
                  <div className="h-2 bg-blue-100 rounded-full">
                    <div className="h-2 bg-blue-500 rounded-full" style={{ width: `${Math.min(100, rates.treasury10y * 12)}%` }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs text-gray-500 mb-1">
                    <span>S&P500 평균 배당수익률</span>
                    <span className="font-bold text-gray-700">{rates.sp500DivYield.toFixed(2)}%</span>
                  </div>
                  <div className="h-2 bg-emerald-100 rounded-full">
                    <div className="h-2 bg-emerald-500 rounded-full" style={{ width: `${Math.min(100, rates.sp500DivYield * 12)}%` }} />
                  </div>
                </div>
                <div className={`text-xs font-medium mt-2 p-2 rounded-lg ${
                  rates.bondStockSpread > 1.5 ? "bg-red-50 text-red-700" :
                  rates.bondStockSpread > 0 ? "bg-yellow-50 text-yellow-700" :
                  "bg-emerald-50 text-emerald-700"
                }`}>
                  {rates.bondStockSpread > 0
                    ? `채권이 배당주보다 ${rates.bondStockSpread.toFixed(2)}%p 높음 → 채권 유리`
                    : `배당주가 채권보다 ${Math.abs(rates.bondStockSpread).toFixed(2)}%p 높음 → 주식 유리`}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ④ 연준 Watch */}
        <section>
          <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">🏛️ 연준 Watch</h2>
          <div className="bg-white rounded-2xl border border-gray-200 p-5">
            <div className="flex items-center gap-6">
              <div className="text-center">
                <div className="text-xs text-gray-400 mb-1">현재 기준금리</div>
                <div className="text-3xl font-black text-blue-600">{fed.currentRate.toFixed(2)}%</div>
              </div>
              <div className="w-px h-12 bg-gray-200" />
              <div className="text-center">
                <div className="text-xs text-gray-400 mb-1">다음 FOMC</div>
                <div className="text-xl font-bold text-gray-800">{fed.nextFomcDate}</div>
                <div className="text-xs text-gray-500 mt-0.5">{fed.daysUntilFomc}일 후</div>
              </div>
              <div className="flex-1 text-xs text-gray-400 leading-relaxed">
                FOMC에서 금리 결정이 이루어집니다. 금리 인하 시 배당주에 유리한 환경이 조성됩니다.
              </div>
            </div>
          </div>
        </section>

        {/* ⑤ 배당 ETF */}
        <section>
          <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">💰 배당 ETF 동향</h2>
          <div className="grid grid-cols-2 gap-3">
            <div className={`rounded-xl border p-4 ${changeBg(dividends.schd.changePercent)}`}>
              <div className="text-sm font-bold text-gray-700 mb-1">SCHD</div>
              <div className="text-xs text-gray-500 mb-2">Schwab US Dividend Equity ETF</div>
              <div className="text-2xl font-black text-gray-800">${fmt(dividends.schd.price)}</div>
              <div className={`text-sm font-semibold mt-1 ${changeColor(dividends.schd.changePercent)}`}>
                {pct(dividends.schd.changePercent)} ({dividends.schd.change >= 0 ? "+" : ""}{fmt(dividends.schd.change)})
              </div>
            </div>
            <div className={`rounded-xl border p-4 ${changeBg(dividends.nobl.changePercent)}`}>
              <div className="text-sm font-bold text-gray-700 mb-1">NOBL</div>
              <div className="text-xs text-gray-500 mb-2">ProShares S&P 500 Dividend Aristocrats</div>
              <div className="text-2xl font-black text-gray-800">${fmt(dividends.nobl.price)}</div>
              <div className={`text-sm font-semibold mt-1 ${changeColor(dividends.nobl.changePercent)}`}>
                {pct(dividends.nobl.changePercent)} ({dividends.nobl.change >= 0 ? "+" : ""}{fmt(dividends.nobl.change)})
              </div>
            </div>
          </div>
        </section>

        <div className="text-center text-xs text-gray-300 pb-4">
          데이터 출처: yfinance (전일 종가 기준) · FOMC 일정: 연준 공식 일정
        </div>
      </div>
    </div>
  );
}
