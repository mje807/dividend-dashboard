// 배당 지표 정적 데이터 제거됨
// 앞으로 배당 관련 metric 데이터는 DB 기반으로만 제공한다.

export interface RoyaltyMetrics {
  ticker: string;
  fetchedAt: string;
  currentPrice: number | null;
  week52Low: number | null;
  week52High: number | null;
  pctIn52Range: number | null;
  beta: number | null;
  dividendRate: number | null;
  dividendYield: number | null;
  fiveYearAvgYield: number | null;
  yieldVsAvg: number | null;
  payoutRatio: number | null;
  dividendCAGR3yr: number | null;
  trailingPE: number | null;
  forwardPE: number | null;
  priceToBook: number | null;
  evToEbitda: number | null;
  pegRatio: number | null;
  ddmFairValue: number | null;
  roe: number | null;
  profitMargin: number | null;
  debtToEquity: number | null;
  currentRatio: number | null;
  revenueGrowth: number | null;
  freeCashflow: number | null;
  targetMeanPrice: number | null;
  analystUpside: number | null;
  recommendationKey: string | null;
  numberOfAnalysts: number | null;
  marketCap: number | null;
  sector: string | null;
  industry: string | null;
  longBusinessSummary: string | null;
}

export const royaltyMetricsLastUpdated = "DB-only";

export const royaltyMetrics: RoyaltyMetrics[] = [];

export function getRoyaltyMetrics(ticker: string): RoyaltyMetrics | undefined {
  return royaltyMetrics.find((m) => m.ticker === ticker);
}
