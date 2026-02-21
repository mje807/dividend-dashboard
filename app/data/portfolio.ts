export interface Holding {
  ticker: string;
  name: string;
  shares: number;
  avgCost: number;
  currentPrice: number;
  dividendYield: number; // %
  annualDividendPerShare: number;
  dividendFrequency: "monthly" | "quarterly";
  sector: string;
  color: string;
}

export const holdings: Holding[] = [
  {
    ticker: "O",
    name: "Realty Income",
    shares: 100,
    avgCost: 55.0,
    currentPrice: 66.14,
    dividendYield: 4.9,
    annualDividendPerShare: 3.24,
    dividendFrequency: "monthly",
    sector: "리츠",
    color: "#6366f1",
  },
  {
    ticker: "SCHD",
    name: "Schwab US Dividend ETF",
    shares: 200,
    avgCost: 25.0,
    currentPrice: 31.61,
    dividendYield: 3.51,
    annualDividendPerShare: 1.11,
    dividendFrequency: "quarterly",
    sector: "배당 ETF",
    color: "#22c55e",
  },
  {
    ticker: "QQQ",
    name: "Invesco QQQ Trust",
    shares: 50,
    avgCost: 450.0,
    currentPrice: 608.81,
    dividendYield: 0.45,
    annualDividendPerShare: 2.74,
    dividendFrequency: "quarterly",
    sector: "성장 ETF",
    color: "#f59e0b",
  },
];

export function calcPortfolioStats(data: Holding[]) {
  const totalValue = data.reduce((s, h) => s + h.currentPrice * h.shares, 0);
  const totalCost = data.reduce((s, h) => s + h.avgCost * h.shares, 0);
  const totalAnnualDividend = data.reduce(
    (s, h) => s + h.annualDividendPerShare * h.shares,
    0
  );
  const avgYield = totalAnnualDividend / totalValue * 100;
  const totalGain = totalValue - totalCost;
  const totalGainPct = (totalGain / totalCost) * 100;

  return {
    totalValue,
    totalCost,
    totalAnnualDividend,
    avgYield,
    totalGain,
    totalGainPct,
    monthlyDividend: totalAnnualDividend / 12,
  };
}
