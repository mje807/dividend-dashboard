export const bigTechTickers = [
  'MSFT', 'AAPL', 'NVDA', 'AMZN', 'META',
  'AVGO', 'GOOGL', 'GOOG', 'TSLA', 'COST',
] as const;

export const hyperGrowthTickers = [
  'TSLA', 'ROKU', 'COIN', 'CRSP', 'SHOP',
  'PLTR', 'PATH', 'SQ', 'TDOC', 'ZM',
] as const;

export const growthTickers = Array.from(new Set([
  ...bigTechTickers,
  ...hyperGrowthTickers,
])) as string[];

export type BigTechTicker = (typeof bigTechTickers)[number];
export type HyperGrowthTicker = (typeof hyperGrowthTickers)[number];
