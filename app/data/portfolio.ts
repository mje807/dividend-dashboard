// 자동 생성 - therich.io 스크래핑
// 마지막 업데이트: 2026-02-27
// 총 자산: ₩60,546,319

export interface Holding {
  ticker: string;
  name: string;
  shares: number;
  avgCost: number;
  currentPrice: number;
  dividendYield: number;
  annualDividendPerShare: number;
  dividendFrequency: "monthly" | "quarterly";
  sector: string;
  color: string;
  rawValue?: string;
  rawGain?: string;
  currency?: string;
}

export interface PortfolioSummary {
  totalAsset: string;
  annualDividend: string;
  dividendYield: string;
  investDividendYield: string;
  totalReturn: string;
  lastUpdated: string;
}

export const portfolioSummary: PortfolioSummary = {
  totalAsset: "₩60,546,319",
  annualDividend: "₩1,861,586",
  dividendYield: "1.73%",
  investDividendYield: "1.97%",
  totalReturn: "총 수익 +₩12,912,212(+14.79%)",
  lastUpdated: "2026-02-27",
};

export const holdings: Holding[] = [
  {
    ticker: "SCHD",
    name: "SCHD",
    shares: 409.26,
    avgCost: 0,
    currentPrice: 31.51,
    dividendYield: 3.51,
    annualDividendPerShare: 1.11,
    dividendFrequency: "quarterly",
    sector: "ETF",
    color: "#22c55e",
    rawValue: "$12,895.87",
    rawGain: "+$2,219.39 (+20.79%)",
    currency: "USD",
  },
  {
    ticker: "SOL 배당다우",
    name: "SOL 미국배당다우존스",
    shares: 674,
    avgCost: 0,
    currentPrice: 13060,
    dividendYield: 3.5,
    annualDividendPerShare: 457.1,
    dividendFrequency: "monthly",
    sector: "ETF",
    color: "hsl(37, 70%, 60%)",
    rawValue: "₩8,802,440",
    rawGain: "+₩1,556,563 (+21.48%)",
    currency: "KRW",
  },
  {
    ticker: "O",
    name: "O",
    shares: 91,
    avgCost: 0,
    currentPrice: 66.59,
    dividendYield: 4.9,
    annualDividendPerShare: 3.26,
    dividendFrequency: "monthly",
    sector: "리츠",
    color: "#6366f1",
    rawValue: "$6,059.44",
    rawGain: "+$1,153.29 (+23.51%)",
    currency: "USD",
  },
  {
    ticker: "ACE 배당다우",
    name: "ACE 미국배당다우존스",
    shares: 479,
    avgCost: 0,
    currentPrice: 14480,
    dividendYield: 3.5,
    annualDividendPerShare: 506.8,
    dividendFrequency: "monthly",
    sector: "ETF",
    color: "hsl(111, 70%, 60%)",
    rawValue: "₩6,935,920",
    rawGain: "+₩1,237,877 (+21.72%)",
    currency: "KRW",
  },
  {
    ticker: "ACE 나스닥100",
    name: "ACE 미국나스닥100",
    shares: 245,
    avgCost: 0,
    currentPrice: 27455,
    dividendYield: 0.5,
    annualDividendPerShare: 137.28,
    dividendFrequency: "quarterly",
    sector: "ETF",
    color: "hsl(148, 70%, 60%)",
    rawValue: "₩6,726,475",
    rawGain: "+₩1,535,361 (+29.58%)",
    currency: "KRW",
  },
  {
    ticker: "NVDA",
    name: "NVDA",
    shares: 22.76,
    avgCost: 0,
    currentPrice: 185.12,
    dividendYield: 0.02,
    annualDividendPerShare: 0.04,
    dividendFrequency: "quarterly",
    sector: "기술주",
    color: "#f59e0b",
    rawValue: "$4,213.25",
    rawGain: "+$1,895.62 (+81.79%)",
    currency: "USD",
  },
  {
    ticker: "QQQM",
    name: "QQQM",
    shares: 14.1,
    avgCost: 0,
    currentPrice: 249.86,
    dividendYield: 0.49,
    annualDividendPerShare: 1.22,
    dividendFrequency: "quarterly",
    sector: "ETF",
    color: "#8b5cf6",
    rawValue: "$3,522.98",
    rawGain: "+$997.82 (+39.51%)",
    currency: "USD",
  },
  {
    ticker: "BTC / KRW",
    name: "BTC / KRW",
    shares: 0.0515,
    avgCost: 0,
    currentPrice: 97431087.38,
    dividendYield: 0,
    annualDividendPerShare: 0,
    dividendFrequency: "quarterly",
    sector: "가상자산",
    color: "hsl(259, 70%, 60%)",
    rawValue: "₩5,017,701",
    rawGain: "-₩1,579,419 (-23.94%)",
    currency: "KRW",
  },
  {
    ticker: "KODEX TRF3070",
    name: "KODEX TRF3070",
    shares: 309,
    avgCost: 0,
    currentPrice: 14305,
    dividendYield: 3,
    annualDividendPerShare: 429.15,
    dividendFrequency: "monthly",
    sector: "ETF",
    color: "hsl(296, 70%, 60%)",
    rawValue: "₩4,420,245",
    rawGain: "+₩462,264 (+11.68%)",
    currency: "KRW",
  },
  {
    ticker: "TIGER 테크TOP10",
    name: "TIGER 미국테크TOP10 INDXX",
    shares: 112,
    avgCost: 0,
    currentPrice: 28895,
    dividendYield: 0.5,
    annualDividendPerShare: 144.48,
    dividendFrequency: "quarterly",
    sector: "ETF",
    color: "hsl(333, 70%, 60%)",
    rawValue: "₩3,236,240",
    rawGain: "+₩438,753 (+15.68%)",
    currency: "KRW",
  },
  {
    ticker: "ACE 배당퀄리티",
    name: "ACE 미국배당퀄리티",
    shares: 251,
    avgCost: 0,
    currentPrice: 12175,
    dividendYield: 3.5,
    annualDividendPerShare: 426.13,
    dividendFrequency: "monthly",
    sector: "ETF",
    color: "hsl(10, 70%, 60%)",
    rawValue: "₩3,055,925",
    rawGain: "+₩284,767 (+10.28%)",
    currency: "KRW",
  },
  {
    ticker: "TLT",
    name: "TLT",
    shares: 15.69,
    avgCost: 0,
    currentPrice: 90.27,
    dividendYield: 4.43,
    annualDividendPerShare: 4,
    dividendFrequency: "monthly",
    sector: "채권",
    color: "#06b6d4",
    rawValue: "$1,416.28",
    rawGain: "+$28.94 (+2.086%)",
    currency: "USD",
  },
  {
    ticker: "SCHG",
    name: "SCHG",
    shares: 33,
    avgCost: 0,
    currentPrice: 30.85,
    dividendYield: 0.37,
    annualDividendPerShare: 0.11,
    dividendFrequency: "quarterly",
    sector: "ETF",
    color: "#10b981",
    rawValue: "$1,018.05",
    rawGain: "+$82.76 (+8.848%)",
    currency: "USD",
  },
  {
    ticker: "TSLA",
    name: "TSLA",
    shares: 1.09,
    avgCost: 0,
    currentPrice: 406.53,
    dividendYield: 0,
    annualDividendPerShare: 0,
    dividendFrequency: "quarterly",
    sector: "기술주",
    color: "#ef4444",
    rawValue: "$443.12",
    rawGain: "-$11.57 (-2.544%)",
    currency: "USD",
  },
  {
    ticker: "TGT",
    name: "TGT",
    shares: 3.522,
    avgCost: 0,
    currentPrice: 114.4,
    dividendYield: 3.91,
    annualDividendPerShare: 4.47,
    dividendFrequency: "quarterly",
    sector: "필수 소비재",
    color: "#84cc16",
    rawValue: "$402.9",
    rawGain: "+$75.97 (+23.24%)",
    currency: "USD",
  },
  {
    ticker: "ARKK",
    name: "ARKK",
    shares: 3.806,
    avgCost: 0,
    currentPrice: 74.62,
    dividendYield: 0,
    annualDividendPerShare: 0,
    dividendFrequency: "quarterly",
    sector: "ETF",
    color: "#f97316",
    rawValue: "$284",
    rawGain: "-$16.21 (-5.399%)",
    currency: "USD",
  },
  {
    ticker: "MGK",
    name: "MGK",
    shares: 0.4136,
    avgCost: 0,
    currentPrice: 390.52,
    dividendYield: 0.36,
    annualDividendPerShare: 1.41,
    dividendFrequency: "quarterly",
    sector: "ETF",
    color: "#0ea5e9",
    rawValue: "$161.52",
    rawGain: "-$1.67 (-1.025%)",
    currency: "USD",
  },
  {
    ticker: "TIGER S&P500",
    name: "TIGER 미국S&P500",
    shares: 1,
    avgCost: 0,
    currentPrice: 24525,
    dividendYield: 0.5,
    annualDividendPerShare: 122.63,
    dividendFrequency: "quarterly",
    sector: "ETF",
    color: "hsl(269, 70%, 60%)",
    rawValue: "₩24,525",
    rawGain: "+₩11,420 (+87.14%)",
    currency: "KRW",
  }
];

export function calcPortfolioStats(data: Holding[]) {
  // KRW 기반 계산 (rawValue 사용)
  const parseValue = (v: string) => {
    if (!v) return 0;
    const num = v.replace(/[^0-9.]/g, '');
    return parseFloat(num) || 0;
  };

  const totalValue = data.reduce((s, h) => s + parseValue(h.rawValue || ''), 0);
  const totalAnnualDividend = parseValue(portfolioSummary.annualDividend);
  const avgYield = parseFloat(portfolioSummary.dividendYield) || 0;

  return {
    totalValue,
    totalAnnualDividend,
    avgYield,
    monthlyDividend: totalAnnualDividend / 12,
    totalGain: 0,
    totalGainPct: 0,
  };
}
