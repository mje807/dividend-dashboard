// 배당 유니버스 정적 데이터 제거됨
// 앞으로 배당 관련 데이터는 DB 기반으로만 제공한다.

export type DividendCategory = "king" | "aristocrat" | "growth";

export interface RoyaltyStock {
  ticker: string;
  name: string;
  category: DividendCategory;
  level: string;
  sector: string;
  streak: number;
  price: number;
  dividendYield: number;
  dividendRate: number;
  peRatio: number;
  payoutRatio: number;
  dgr5y: number;
  avgYield10y: number;
}

export const royaltyLastUpdated = "DB-only";

export const royaltyStocks: RoyaltyStock[] = [];

export function getRoyaltyStock(ticker: string): RoyaltyStock | undefined {
  return royaltyStocks.find((s) => s.ticker === ticker);
}
