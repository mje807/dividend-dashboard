export const megaGrowthTickers = [
  "MSFT", "AAPL", "NVDA", "AMZN", "META",
  "AVGO", "GOOGL", "GOOG", "TSLA", "COST",
  "NFLX", "AMD", "ASML", "CRM", "ORCL",
] as const;

export const innovativeGrowthTickers = [
  "PLTR", "SHOP", "SNOW", "NET", "CRWD",
  "DDOG", "MDB", "ROKU", "COIN", "PATH",
  "SQ", "ZM",
] as const;

export const profitableMidGrowthTickers = [
  "ADBE", "INTU", "NOW", "UBER", "ABNB",
  "MELI", "TTD", "PANW", "ANET", "CDNS",
  "SNPS", "KLAC", "LRCX", "FTNT", "MRVL",
] as const;

export const turnaroundGrowthTickers = [
  "PYPL", "DOCU", "ETSY", "TWLO", "CRSP",
  "TDOC", "RBLX", "BIDU",
] as const;

// Backward-compatible aliases (기존 화면/분석 호환)
export const bigTechTickers = megaGrowthTickers;
export const hyperGrowthTickers = innovativeGrowthTickers;

export const growth50Tickers = Array.from(new Set([
  ...megaGrowthTickers,
  ...innovativeGrowthTickers,
  ...profitableMidGrowthTickers,
  ...turnaroundGrowthTickers,
])) as string[];

export type MegaGrowthTicker = (typeof megaGrowthTickers)[number];
export type InnovativeGrowthTicker = (typeof innovativeGrowthTickers)[number];
export type ProfitableMidGrowthTicker = (typeof profitableMidGrowthTickers)[number];
export type TurnaroundGrowthTicker = (typeof turnaroundGrowthTickers)[number];
