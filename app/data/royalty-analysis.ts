// 배당 심층분석 정적 데이터 제거됨
// 앞으로 배당 관련 analysis 데이터는 DB 기반으로만 제공한다.

export type MoatType = "brand" | "switching_costs" | "network_effect" | "cost_advantage" | "efficient_scale" | "intangible_assets";
export type MoatStrength = "wide" | "narrow" | "none";
export type DividendSafety = "strong" | "moderate" | "watch";
export type OverallRating = "관심" | "보유" | "관망";

export interface StockAnalysis {
  ticker: string;
  analyzedAt: string;
  businessSummary: string;
  coreProducts: string[];
  geographicPresence: string;
  dividendStreakYears: number;
  dividendCAGR5yr: number | null;
  dividendCAGR10yr: number | null;
  recentDividendGrowth: string;
  dividendSafety: DividendSafety;
  dividendSafetyReason: string;
  moatTypes: MoatType[];
  moatStrength: MoatStrength;
  moatNarrative: string;
  revenueGrowthTrend: string;
  marginTrend: "expanding" | "stable" | "contracting";
  debtLevel: "low" | "moderate" | "high";
  financialSummary: string;
  keyRisks: string[];
  bullCase: string;
  bearCase: string;
  valuationComment: string;
  recentDevelopments: string[];
  overallRating: OverallRating;
  ratingReason: string;
  targetBuyPrice: number | null;
}

export const stockAnalyses: StockAnalysis[] = [];

export function getStockAnalysis(ticker: string): StockAnalysis | undefined {
  return stockAnalyses.find((a) => a.ticker === ticker);
}
