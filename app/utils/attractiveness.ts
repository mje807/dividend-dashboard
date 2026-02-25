// app/utils/attractiveness.ts
// 배당주 매력도 점수 계산 공통 유틸 (stock-detail, watchlist 공용)

import { getRoyaltyMetrics } from "~/data/royalty-metrics";

export interface AttractivenessResult {
  score: number;          // 1~10
  label: string;          // 저평가 매력적 / 적정 / 고평가 신중
  color: string;          // tailwind text color
  bgColor: string;        // tailwind bg color
  yieldSignal: "저평가" | "적정" | "고평가" | "N/A";
  ddmSignal: "저평가" | "적정" | "고평가" | "N/A";
  peSignal: "저평가" | "적정" | "고평가" | "N/A";
  rangeSignal: "저점권" | "중간" | "고점권";
  analystSignal: "상승여력" | "중립" | "하락우려";
}

export function calcAttractiveness(
  m: ReturnType<typeof getRoyaltyMetrics> | null | undefined,
  streak: number
): AttractivenessResult | null {
  if (!m) return null;

  const price     = m.currentPrice;
  const yieldNow  = m.dividendYield;
  const yieldAvg  = m.fiveYearAvgYield;
  const trPE      = m.trailingPE;
  const fwdPE     = m.forwardPE;
  const ddm       = m.ddmFairValue;
  const divRate   = m.dividendRate;
  const pct52     = m.pctIn52Range;
  const upside    = m.analystUpside;

  // ① 수율 시그널
  let yieldSignal: "저평가" | "적정" | "고평가" | "N/A" = "N/A";
  if (yieldNow != null && yieldAvg != null) {
    const diff = yieldNow - yieldAvg;
    if (diff >= 0.5)        yieldSignal = "저평가";
    else if (diff <= -0.5)  yieldSignal = "고평가";
    else                    yieldSignal = "적정";
  }

  // ② DDM 시그널 (fallback: 수율기반 적정가)
  let ddmSignal: "저평가" | "적정" | "고평가" | "N/A" = "N/A";
  if (ddm && price) {
    const gap = (ddm - price) / price * 100;
    if (gap >= 15)       ddmSignal = "저평가";
    else if (gap <= -15) ddmSignal = "고평가";
    else                 ddmSignal = "적정";
  } else if (divRate && yieldAvg && price && yieldAvg > 0) {
    const fairByYield = divRate / (yieldAvg / 100);
    const gap = (fairByYield - price) / price * 100;
    if (gap >= 12)       ddmSignal = "저평가";
    else if (gap <= -12) ddmSignal = "고평가";
    else                 ddmSignal = "적정";
  }

  // ③ PE 시그널
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
  }

  // ⑤ 애널리스트
  let analystSignal: "상승여력" | "중립" | "하락우려" = "중립";
  if (upside != null) {
    if (upside >= 10)   analystSignal = "상승여력";
    else if (upside < 0) analystSignal = "하락우려";
  }

  // ⑥ 종합 점수 (1~10)
  let score = 5.0;
  if (yieldSignal === "저평가")  score += 1.75;
  else if (yieldSignal === "고평가") score -= 1.75;
  if (ddmSignal === "저평가")    score += 1.25;
  else if (ddmSignal === "고평가") score -= 1.25;
  if (peSignal === "저평가")     score += 1.0;
  else if (peSignal === "고평가") score -= 1.0;
  if (rangeSignal === "저점권")  score += 0.5;
  else if (rangeSignal === "고점권") score -= 0.5;
  if (analystSignal === "상승여력") score += 0.5;
  else if (analystSignal === "하락우려") score -= 0.5;
  if (streak >= 50) score += 0.5;
  score = parseFloat(Math.max(1, Math.min(10, score)).toFixed(1));

  const label =
    score >= 6.5 ? "저평가 매력" :
    score <= 3.5 ? "고평가 신중" : "적정";

  const color =
    score >= 6.5 ? "text-emerald-400" :
    score <= 3.5 ? "text-red-400" : "text-yellow-400";

  const bgColor =
    score >= 6.5 ? "bg-emerald-900/30 border-emerald-700/40" :
    score <= 3.5 ? "bg-red-900/30 border-red-700/40" :
                   "bg-yellow-900/30 border-yellow-700/40";

  return { score, label, color, bgColor, yieldSignal, ddmSignal, peSignal, rangeSignal, analystSignal };
}
