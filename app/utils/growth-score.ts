import type { StockMetrics } from "~/data/metrics";

export interface GrowthScore {
  score: number;
  label: "강함" | "보통" | "주의";
  color: string;
  parts: {
    growth: number;
    quality: number;
    valuation: number;
    momentum: number;
  };
}

function clamp(v: number, min: number, max: number) {
  return Math.max(min, Math.min(max, v));
}

export function calcGrowthScore(m?: StockMetrics): GrowthScore {
  if (!m) {
    return {
      score: 5,
      label: "보통",
      color: "text-yellow-400",
      parts: { growth: 5, quality: 5, valuation: 5, momentum: 5 },
    };
  }

  const revenue = m.revenueGrowth ?? 0; // %
  const roe = m.roe ?? 0; // %
  const margin = m.profitMargin ?? 0; // %
  const pe = m.forwardPE && m.forwardPE > 0 ? m.forwardPE : (m.trailingPE && m.trailingPE > 0 ? m.trailingPE : 25);

  const growthPart = clamp((revenue + 10) / 5, 0, 10); // -10~40% => 0~10
  const qualityPart = clamp((roe / 3 + margin / 3) / 2, 0, 10);
  const valuationPart = clamp(10 - (pe - 18) / 6, 0, 10);

  let momentumPart = 5;
  if (m.currentPrice && m.week52Low && m.week52High && m.week52High > m.week52Low) {
    const pctInRange = ((m.currentPrice - m.week52Low) / (m.week52High - m.week52Low)) * 100;
    momentumPart = clamp((pctInRange - 20) / 6, 0, 10);
  }

  const total = clamp(
    growthPart * 0.35 + qualityPart * 0.3 + valuationPart * 0.2 + momentumPart * 0.15,
    1,
    10,
  );

  if (total >= 7) return { score: Number(total.toFixed(1)), label: "강함", color: "text-emerald-400", parts: { growth: growthPart, quality: qualityPart, valuation: valuationPart, momentum: momentumPart } };
  if (total >= 5) return { score: Number(total.toFixed(1)), label: "보통", color: "text-yellow-400", parts: { growth: growthPart, quality: qualityPart, valuation: valuationPart, momentum: momentumPart } };
  return { score: Number(total.toFixed(1)), label: "주의", color: "text-red-400", parts: { growth: growthPart, quality: qualityPart, valuation: valuationPart, momentum: momentumPart } };
}
