// 자동 생성 - therich.io 스크래핑
// 마지막 업데이트: 2026-02-21
// 총 자산: ₩89,041,462

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
  totalAsset: "₩89,041,462",
  annualDividend: "₩1,863,510",
  dividendYield: "2.09%",
  investDividendYield: "2.53%",
  totalReturn: "총 수익 +₩15,314,536(+23.16%)",
  lastUpdated: "2026-02-21",
};

export const holdings: Holding[] = [
  {
    ticker: "SCHD",
    name: "SCHD",
    shares: 409.26,
    avgCost: 0,
    currentPrice: 31.61,
    dividendYield: 3.51,
    annualDividendPerShare: 1.11,
    dividendFrequency: "quarterly",
    sector: "ETF",
    color: "#22c55e",
    rawValue: "$12,936.8",
    rawGain: "+$2,337.36 (+22.05%)",
    currency: "USD",
  },
  {
    ticker: "SOL 배당다우",
    name: "SOL 미국배당다우존스",
    shares: 674,
    avgCost: 0,
    currentPrice: 13370,
    dividendYield: 3.5,
    annualDividendPerShare: 467.95,
    dividendFrequency: "monthly",
    sector: "ETF",
    color: "hsl(37, 70%, 60%)",
    rawValue: "₩9,011,380",
    rawGain: "+₩1,765,503 (+24.37%)",
    currency: "KRW",
  },
  {
    ticker: "O",
    name: "O",
    shares: 91,
    avgCost: 0,
    currentPrice: 66.14,
    dividendYield: 4.9,
    annualDividendPerShare: 3.24,
    dividendFrequency: "monthly",
    sector: "리츠",
    color: "#6366f1",
    rawValue: "$6,018.49",
    rawGain: "+$1,146.84 (+23.54%)",
    currency: "USD",
  },
  {
    ticker: "ACE 배당다우",
    name: "ACE 미국배당다우존스",
    shares: 479,
    avgCost: 0,
    currentPrice: 14765,
    dividendYield: 3.5,
    annualDividendPerShare: 516.78,
    dividendFrequency: "monthly",
    sector: "ETF",
    color: "hsl(111, 70%, 60%)",
    rawValue: "₩7,072,435",
    rawGain: "+₩1,374,392 (+24.12%)",
    currency: "KRW",
  },
  {
    ticker: "ACE 나스닥100",
    name: "ACE 미국나스닥100",
    shares: 245,
    avgCost: 0,
    currentPrice: 27425,
    dividendYield: 0.5,
    annualDividendPerShare: 137.13,
    dividendFrequency: "quarterly",
    sector: "ETF",
    color: "hsl(148, 70%, 60%)",
    rawValue: "₩6,719,125",
    rawGain: "+₩1,528,011 (+29.44%)",
    currency: "KRW",
  },
  {
    ticker: "NVDA",
    name: "NVDA",
    shares: 22.76,
    avgCost: 0,
    currentPrice: 189.79,
    dividendYield: 0.02,
    annualDividendPerShare: 0.04,
    dividendFrequency: "quarterly",
    sector: "기술주",
    color: "#f59e0b",
    rawValue: "$4,319.52",
    rawGain: "+$2,020.76 (+87.91%)",
    currency: "USD",
  },
  {
    ticker: "QQQM",
    name: "QQQM",
    shares: 14.1,
    avgCost: 0,
    currentPrice: 250.61,
    dividendYield: 0.49,
    annualDividendPerShare: 1.23,
    dividendFrequency: "quarterly",
    sector: "ETF",
    color: "#8b5cf6",
    rawValue: "$3,533.56",
    rawGain: "+$1,028.45 (+41.05%)",
    currency: "USD",
  },
  {
    ticker: "KODEX TRF3070",
    name: "KODEX TRF3070",
    shares: 309,
    avgCost: 0,
    currentPrice: 14280,
    dividendYield: 3,
    annualDividendPerShare: 428.4,
    dividendFrequency: "monthly",
    sector: "ETF",
    color: "hsl(259, 70%, 60%)",
    rawValue: "₩4,412,520",
    rawGain: "+₩454,539 (+11.48%)",
    currency: "KRW",
  },
  {
    ticker: "TIGER 테크TOP10",
    name: "TIGER 미국테크TOP10 INDXX",
    shares: 112,
    avgCost: 0,
    currentPrice: 28680,
    dividendYield: 0.5,
    annualDividendPerShare: 143.4,
    dividendFrequency: "quarterly",
    sector: "ETF",
    color: "hsl(296, 70%, 60%)",
    rawValue: "₩3,212,160",
    rawGain: "+₩414,673 (+14.82%)",
    currency: "KRW",
  },
  {
    ticker: "ACE 배당퀄리티",
    name: "ACE 미국배당퀄리티",
    shares: 251,
    avgCost: 0,
    currentPrice: 12435,
    dividendYield: 3.5,
    annualDividendPerShare: 435.23,
    dividendFrequency: "monthly",
    sector: "ETF",
    color: "hsl(333, 70%, 60%)",
    rawValue: "₩3,121,185",
    rawGain: "+₩350,027 (+12.63%)",
    currency: "KRW",
  },
  {
    ticker: "TLT",
    name: "TLT",
    shares: 15.69,
    avgCost: 0,
    currentPrice: 89.41,
    dividendYield: 4.43,
    annualDividendPerShare: 3.96,
    dividendFrequency: "monthly",
    sector: "채권",
    color: "#06b6d4",
    rawValue: "$1,402.78",
    rawGain: "+$25.37 (+1.842%)",
    currency: "USD",
  },
  {
    ticker: "SCHG",
    name: "SCHG",
    shares: 33,
    avgCost: 0,
    currentPrice: 30.91,
    dividendYield: 0.37,
    annualDividendPerShare: 0.11,
    dividendFrequency: "quarterly",
    sector: "ETF",
    color: "#10b981",
    rawValue: "$1,020.03",
    rawGain: "+$84.74 (+9.06%)",
    currency: "USD",
  },
  {
    ticker: "TSLA",
    name: "TSLA",
    shares: 1.09,
    avgCost: 0,
    currentPrice: 411.69,
    dividendYield: 0,
    annualDividendPerShare: 0,
    dividendFrequency: "quarterly",
    sector: "기술주",
    color: "#ef4444",
    rawValue: "$448.74",
    rawGain: "-$0.27 (-0.0601%)",
    currency: "USD",
  },
  {
    ticker: "TGT",
    name: "TGT",
    shares: 3.522,
    avgCost: 0,
    currentPrice: 116.68,
    dividendYield: 3.91,
    annualDividendPerShare: 4.56,
    dividendFrequency: "quarterly",
    sector: "필수 소비재",
    color: "#84cc16",
    rawValue: "$410.96",
    rawGain: "+$86.56 (+26.68%)",
    currency: "USD",
  },
  {
    ticker: "BTC / KRW",
    name: "BTC / KRW",
    shares: 0.0051,
    avgCost: 0,
    currentPrice: 100905882.35,
    dividendYield: 0,
    annualDividendPerShare: 0,
    dividendFrequency: "quarterly",
    sector: "가상자산",
    color: "hsl(158, 70%, 60%)",
    rawValue: "₩514,620",
    rawGain: "-₩145,129 (-22%)",
    currency: "KRW",
  },
  {
    ticker: "ARKK",
    name: "ARKK",
    shares: 3.806,
    avgCost: 0,
    currentPrice: 71.5,
    dividendYield: 0,
    annualDividendPerShare: 0,
    dividendFrequency: "quarterly",
    sector: "ETF",
    color: "#f97316",
    rawValue: "$272.12",
    rawGain: "-$24.34 (-8.21%)",
    currency: "USD",
  },
  {
    ticker: "MGK",
    name: "MGK",
    shares: 0.4136,
    avgCost: 0,
    currentPrice: 390.28,
    dividendYield: 0.36,
    annualDividendPerShare: 1.41,
    dividendFrequency: "quarterly",
    sector: "ETF",
    color: "#0ea5e9",
    rawValue: "$161.42",
    rawGain: "+$0.26 (+0.1641%)",
    currency: "USD",
  },
  {
    ticker: "TIGER S&P500",
    name: "TIGER 미국S&P500",
    shares: 1,
    avgCost: 0,
    currentPrice: 24700,
    dividendYield: 0.5,
    annualDividendPerShare: 123.5,
    dividendFrequency: "quarterly",
    sector: "ETF",
    color: "hsl(269, 70%, 60%)",
    rawValue: "₩24,700",
    rawGain: "+₩11,595 (+88.47%)",
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
