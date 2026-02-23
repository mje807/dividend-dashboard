export const growthTickers = [
  "NVDA",
  "TSLA",
  "QQQM",
  "SCHG",
  "ARKK",
  "MGK",
  "ACE 나스닥100",
  "TIGER 테크TOP10",
  "TIGER S&P500",
  "BTC / KRW",
] as const;

export type GrowthTicker = (typeof growthTickers)[number];
