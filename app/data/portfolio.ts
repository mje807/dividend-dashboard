// 자동 생성 - therich.io 스크래핑
// 마지막 업데이트: 2026-02-24
// 총 자산: ₩40,827,118

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
  totalAsset: "₩40,827,118",
  annualDividend: "₩1,856,276",
  dividendYield: "2.10%",
  investDividendYield: "2.52%",
  totalReturn: "총 수익 +₩14,824,225(+22.42%)",
  lastUpdated: "2026-02-24",
};

export const holdings: Holding[] = [
  {
    ticker: "SCHD",
    name: "SCHD",
    shares: 409.26,
    avgCost: 0,
    currentPrice: 31.53,
    dividendYield: 3.51,
    annualDividendPerShare: 1.11,
    dividendFrequency: "quarterly",
    sector: "ETF",
    color: "#22c55e",
    rawValue: "$12,904.06",
    rawGain: "+$2,270.9 (+21.36%)",
    currency: "USD",
  },
  {
    ticker: "SOL 배당다우",
    name: "SOL 미국배당다우존스",
    shares: 674,
    avgCost: 0,
    currentPrice: 13220,
    dividendYield: 3.5,
    annualDividendPerShare: 462.7,
    dividendFrequency: "monthly",
    sector: "ETF",
    color: "hsl(37, 70%, 60%)",
    rawValue: "₩8,910,280",
    rawGain: "+₩1,664,403 (+22.97%)",
    currency: "KRW",
  },
  {
    ticker: "O",
    name: "O",
    shares: 91,
    avgCost: 0,
    currentPrice: 66.7,
    dividendYield: 4.9,
    annualDividendPerShare: 3.27,
    dividendFrequency: "monthly",
    sector: "리츠",
    color: "#6366f1",
    rawValue: "$6,069.45",
    rawGain: "+$1,182.3 (+24.19%)",
    currency: "USD",
  },
  {
    ticker: "ACE 배당다우",
    name: "ACE 미국배당다우존스",
    shares: 479,
    avgCost: 0,
    currentPrice: 14645,
    dividendYield: 3.5,
    annualDividendPerShare: 512.58,
    dividendFrequency: "monthly",
    sector: "ETF",
    color: "hsl(111, 70%, 60%)",
    rawValue: "₩7,014,955",
    rawGain: "+₩1,316,912 (+23.11%)",
    currency: "KRW",
  },
  {
    ticker: "ACE 나스닥100",
    name: "ACE 미국나스닥100",
    shares: 245,
    avgCost: 0,
    currentPrice: 27190,
    dividendYield: 0.5,
    annualDividendPerShare: 135.95,
    dividendFrequency: "quarterly",
    sector: "ETF",
    color: "hsl(148, 70%, 60%)",
    rawValue: "₩6,661,550",
    rawGain: "+₩1,470,436 (+28.33%)",
    currency: "KRW",
  },
  {
    ticker: "NVDA",
    name: "NVDA",
    shares: 22.76,
    avgCost: 0,
    currentPrice: 191.67,
    dividendYield: 0.02,
    annualDividendPerShare: 0.04,
    dividendFrequency: "quarterly",
    sector: "기술주",
    color: "#f59e0b",
    rawValue: "$4,362.3",
    rawGain: "+$2,056.23 (+89.17%)",
    currency: "USD",
  },
  {
    ticker: "QQQM",
    name: "QQQM",
    shares: 14.1,
    avgCost: 0,
    currentPrice: 247.94,
    dividendYield: 0.49,
    annualDividendPerShare: 1.21,
    dividendFrequency: "quarterly",
    sector: "ETF",
    color: "#8b5cf6",
    rawValue: "$3,495.92",
    rawGain: "+$982.84 (+39.11%)",
    currency: "USD",
  },
  {
    ticker: "KODEX TRF3070",
    name: "KODEX TRF3070",
    shares: 309,
    avgCost: 0,
    currentPrice: 14290,
    dividendYield: 3,
    annualDividendPerShare: 428.7,
    dividendFrequency: "monthly",
    sector: "ETF",
    color: "hsl(259, 70%, 60%)",
    rawValue: "₩4,415,610",
    rawGain: "+₩457,629 (+11.56%)",
    currency: "KRW",
  },
  {
    ticker: "TIGER 테크TOP10",
    name: "TIGER 미국테크TOP10 INDXX",
    shares: 112,
    avgCost: 0,
    currentPrice: 28590,
    dividendYield: 0.5,
    annualDividendPerShare: 142.95,
    dividendFrequency: "quarterly",
    sector: "ETF",
    color: "hsl(296, 70%, 60%)",
    rawValue: "₩3,202,080",
    rawGain: "+₩404,593 (+14.46%)",
    currency: "KRW",
  },
  {
    ticker: "ACE 배당퀄리티",
    name: "ACE 미국배당퀄리티",
    shares: 251,
    avgCost: 0,
    currentPrice: 12325,
    dividendYield: 3.5,
    annualDividendPerShare: 431.38,
    dividendFrequency: "monthly",
    sector: "ETF",
    color: "hsl(333, 70%, 60%)",
    rawValue: "₩3,093,575",
    rawGain: "+₩322,417 (+11.63%)",
    currency: "KRW",
  },
  {
    ticker: "TLT",
    name: "TLT",
    shares: 15.69,
    avgCost: 0,
    currentPrice: 89.74,
    dividendYield: 4.43,
    annualDividendPerShare: 3.98,
    dividendFrequency: "monthly",
    sector: "채권",
    color: "#06b6d4",
    rawValue: "$1,407.96",
    rawGain: "+$26.16 (+1.893%)",
    currency: "USD",
  },
  {
    ticker: "SCHG",
    name: "SCHG",
    shares: 33,
    avgCost: 0,
    currentPrice: 30.48,
    dividendYield: 0.37,
    annualDividendPerShare: 0.11,
    dividendFrequency: "quarterly",
    sector: "ETF",
    color: "#10b981",
    rawValue: "$1,005.84",
    rawGain: "+$70.55 (+7.543%)",
    currency: "USD",
  },
  {
    ticker: "TSLA",
    name: "TSLA",
    shares: 1.09,
    avgCost: 0,
    currentPrice: 399.17,
    dividendYield: 0,
    annualDividendPerShare: 0,
    dividendFrequency: "quarterly",
    sector: "기술주",
    color: "#ef4444",
    rawValue: "$435.1",
    rawGain: "-$15.34 (-3.406%)",
    currency: "USD",
  },
  {
    ticker: "TGT",
    name: "TGT",
    shares: 3.522,
    avgCost: 0,
    currentPrice: 113.34,
    dividendYield: 3.91,
    annualDividendPerShare: 4.43,
    dividendFrequency: "quarterly",
    sector: "필수 소비재",
    color: "#84cc16",
    rawValue: "$399.2",
    rawGain: "+$73.77 (+22.67%)",
    currency: "USD",
  },
  {
    ticker: "BTC / KRW",
    name: "BTC / KRW",
    shares: 0.0051,
    avgCost: 0,
    currentPrice: 96223137.25,
    dividendYield: 0,
    annualDividendPerShare: 0,
    dividendFrequency: "quarterly",
    sector: "가상자산",
    color: "hsl(158, 70%, 60%)",
    rawValue: "₩490,738",
    rawGain: "-₩169,011 (-25.62%)",
    currency: "KRW",
  },
  {
    ticker: "ARKK",
    name: "ARKK",
    shares: 3.806,
    avgCost: 0,
    currentPrice: 70.01,
    dividendYield: 0,
    annualDividendPerShare: 0,
    dividendFrequency: "quarterly",
    sector: "ETF",
    color: "#f97316",
    rawValue: "$266.45",
    rawGain: "-$30.95 (-10.41%)",
    currency: "USD",
  },
  {
    ticker: "MGK",
    name: "MGK",
    shares: 0.4136,
    avgCost: 0,
    currentPrice: 385.08,
    dividendYield: 0.36,
    annualDividendPerShare: 1.39,
    dividendFrequency: "quarterly",
    sector: "ETF",
    color: "#0ea5e9",
    rawValue: "$159.27",
    rawGain: "-$2.4 (-1.484%)",
    currency: "USD",
  },
  {
    ticker: "TIGER S&P500",
    name: "TIGER 미국S&P500",
    shares: 1,
    avgCost: 0,
    currentPrice: 24510,
    dividendYield: 0.5,
    annualDividendPerShare: 122.55,
    dividendFrequency: "quarterly",
    sector: "ETF",
    color: "hsl(269, 70%, 60%)",
    rawValue: "₩24,510",
    rawGain: "+₩11,405 (+87.02%)",
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
