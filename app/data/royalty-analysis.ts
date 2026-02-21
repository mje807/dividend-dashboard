// 왕족주·귀족주 심층 분석 데이터
// AI 분석 (web 검색 기반) — 투자 조언 아님

export type MoatType = "brand" | "switching_costs" | "network_effect" | "cost_advantage" | "efficient_scale" | "intangible_assets";
export type MoatStrength = "wide" | "narrow" | "none";
export type DividendSafety = "strong" | "moderate" | "watch";
export type OverallRating = "관심" | "보유" | "관망";

export interface StockAnalysis {
  ticker: string;
  analyzedAt: string;          // YYYY-MM-DD HH:mm KST

  // 기업 개요
  businessSummary: string;
  coreProducts: string[];
  geographicPresence: string;

  // 배당 히스토리
  dividendStreakYears: number;
  dividendCAGR5yr: number | null;   // 5년 배당 CAGR (%)
  dividendCAGR10yr: number | null;  // 10년 배당 CAGR (%)
  recentDividendGrowth: string;     // 예: "2024년 $0.56 → $0.60 (+7.1%)"
  dividendSafety: DividendSafety;
  dividendSafetyReason: string;

  // 경제적 해자
  moatTypes: MoatType[];
  moatStrength: MoatStrength;
  moatNarrative: string;

  // 재무 건전성
  revenueGrowthTrend: string;       // 예: "3년 연평균 +4.2%"
  marginTrend: "expanding" | "stable" | "contracting";
  debtLevel: "low" | "moderate" | "high";
  financialSummary: string;

  // 리스크
  keyRisks: string[];

  // 투자 시나리오
  bullCase: string;
  bearCase: string;

  // 밸류에이션
  valuationComment: string;

  // 최근 이슈
  recentDevelopments: string[];

  // 종합 의견
  overallRating: OverallRating;
  ratingReason: string;
  targetBuyPrice: number | null;    // 관심 매수 가격대 (USD)
}

// 분석 데이터 (분석 완료 종목만 포함)
export const stockAnalyses: StockAnalysis[] = [
  // 분석 진행 중 — 아래로 계속 추가됩니다
];

export function getAnalysis(ticker: string): StockAnalysis | undefined {
  return stockAnalyses.find(a => a.ticker === ticker);
}
