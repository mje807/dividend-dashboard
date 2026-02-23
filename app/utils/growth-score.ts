import type { StockMetrics } from "~/data/metrics";

export interface GrowthScore {
  score: number;
  label: "강함" | "보통" | "주의";
  color: string;
}

function clamp(v: number, min: number, max: number) {
  return Math.max(min, Math.min(max, v));
}

export function calcGrowthScore(m?: StockMetrics): GrowthScore {
  if (!m) {
    return { score: 5, label: "보통", color: "text-yellow-400" };
  }

  const revenue = m.revenueGrowth ?? 0; // %
  const roe = m.roe ?? 0; // %
  const margin = m.profitMargin ?? 0; // %
  const pe = m.forwardPE && m.forwardPE > 0 ? m.forwardPE : (m.trailingPE && m.trailingPE > 0 ? m.trailingPE : 25);
  const beta = m.beta ?? 1.2;

  const growthPart = clamp((revenue + 10) / 5, 0, 10); // -10~40% => 0~10
  const qualityPart = clamp((roe / 4 + margin / 4) / 2, 0, 10);
  const valuationPart = clamp(10 - (pe - 15) / 5, 0, 10); // PE 15 근처 우호
  const riskPart = clamp(10 - Math.abs(beta - 1) * 4, 0, 10);

  const total = clamp(
    growthPart * 0.4 + qualityPart * 0.3 + valuationPart * 0.2 + riskPart * 0.1,
    1,
    10,
  );

  if (total >= 7) return { score: Number(total.toFixed(1)), label: "강함", color: "text-emerald-400" };
  if (total >= 5) return { score: Number(total.toFixed(1)), label: "보통", color: "text-yellow-400" };
  return { score: Number(total.toFixed(1)), label: "주의", color: "text-red-400" };
}
