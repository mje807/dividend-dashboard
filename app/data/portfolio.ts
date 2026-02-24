// 자동 생성 - therich.io 스크래핑
// 마지막 업데이트: 2026-02-24
// 총 자산: ₩59,214,288

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
  totalAsset: "₩59,214,288",
  annualDividend: "₩1,858,745",
  dividendYield: "1.74%",
  investDividendYield: "1.96%",
  totalReturn: "총 수익 +₩11,815,628(+13.51%)",
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
    rawGain: "+$2,271.82 (+21.37%)",
    currency: "USD",
  },
  {
    ticker: "SOL 배당다우",
    name: "SOL 미국배당다우존스",
    shares: 674,
    avgCost: 0,
    currentPrice: 13255,
    dividendYield: 3.5,
    annualDividendPerShare: 463.93,
    dividendFrequency: "monthly",
    sector: "ETF",
    color: "hsl(37, 70%, 60%)",
    rawValue: "₩8,933,870",
    rawGain: "+₩1,687,993 (+23.3%)",
    currency: "KRW",
  },
  {
    ticker: "O",
    name: "O",
    shares: 91,
    avgCost: 0,
    currentPrice: 66.51,
    dividendYield: 4.9,
    annualDividendPerShare: 3.26,
    dividendFrequency: "monthly",
    sector: "리츠",
    color: "#6366f1",
    rawValue: "$6,052.62",
    rawGain: "+$1,166.05 (+23.86%)",
    currency: "USD",
  },
  {
    ticker: "ACE 배당다우",
    name: "ACE 미국배당다우존스",
    shares: 479,
    avgCost: 0,
    currentPrice: 14670,
    dividendYield: 3.5,
    annualDividendPerShare: 513.45,
    dividendFrequency: "monthly",
    sector: "ETF",
    color: "hsl(111, 70%, 60%)",
    rawValue: "₩7,026,930",
    rawGain: "+₩1,328,887 (+23.32%)",
    currency: "KRW",
  },
  {
    ticker: "ACE 나스닥100",
    name: "ACE 미국나스닥100",
    shares: 245,
    avgCost: 0,
    currentPrice: 27225,
    dividendYield: 0.5,
    annualDividendPerShare: 136.13,
    dividendFrequency: "quarterly",
    sector: "ETF",
    color: "hsl(148, 70%, 60%)",
    rawValue: "₩6,670,125",
    rawGain: "+₩1,479,011 (+28.49%)",
    currency: "KRW",
  },
  {
    ticker: "NVDA",
    name: "NVDA",
    shares: 22.76,
    avgCost: 0,
    currentPrice: 189.9,
    dividendYield: 0.02,
    annualDividendPerShare: 0.04,
    dividendFrequency: "quarterly",
    sector: "기술주",
    color: "#f59e0b",
    rawValue: "$4,322.02",
    rawGain: "+$2,015.78 (+87.41%)",
    currency: "USD",
  },
  {
    ticker: "QQQM",
    name: "QQQM",
    shares: 14.1,
    avgCost: 0,
    currentPrice: 248.83,
    dividendYield: 0.49,
    annualDividendPerShare: 1.22,
    dividendFrequency: "quarterly",
    sector: "ETF",
    color: "#8b5cf6",
    rawValue: "$3,508.47",
    rawGain: "+$995.29 (+39.6%)",
    currency: "USD",
  },
  {
    ticker: "BTC / KRW",
    name: "BTC / KRW",
    shares: 0.0515,
    avgCost: 0,
    currentPrice: 92981941.75,
    dividendYield: 0,
    annualDividendPerShare: 0,
    dividendFrequency: "quarterly",
    sector: "가상자산",
    color: "hsl(259, 70%, 60%)",
    rawValue: "₩4,788,570",
    rawGain: "-₩1,808,549 (-27.41%)",
    currency: "KRW",
  },
  {
    ticker: "KODEX TRF3070",
    name: "KODEX TRF3070",
    shares: 309,
    avgCost: 0,
    currentPrice: 14270,
    dividendYield: 3,
    annualDividendPerShare: 428.1,
    dividendFrequency: "monthly",
    sector: "ETF",
    color: "hsl(296, 70%, 60%)",
    rawValue: "₩4,409,430",
    rawGain: "+₩451,449 (+11.41%)",
    currency: "KRW",
  },
  {
    ticker: "TIGER 테크TOP10",
    name: "TIGER 미국테크TOP10 INDXX",
    shares: 112,
    avgCost: 0,
    currentPrice: 28690,
    dividendYield: 0.5,
    annualDividendPerShare: 143.45,
    dividendFrequency: "quarterly",
    sector: "ETF",
    color: "hsl(333, 70%, 60%)",
    rawValue: "₩3,213,280",
    rawGain: "+₩415,793 (+14.86%)",
    currency: "KRW",
  },
  {
    ticker: "ACE 배당퀄리티",
    name: "ACE 미국배당퀄리티",
    shares: 251,
    avgCost: 0,
    currentPrice: 12365,
    dividendYield: 3.5,
    annualDividendPerShare: 432.78,
    dividendFrequency: "monthly",
    sector: "ETF",
    color: "hsl(10, 70%, 60%)",
    rawValue: "₩3,103,615",
    rawGain: "+₩332,457 (+12%)",
    currency: "KRW",
  },
  {
    ticker: "TLT",
    name: "TLT",
    shares: 15.69,
    avgCost: 0,
    currentPrice: 89.84,
    dividendYield: 4.43,
    annualDividendPerShare: 3.98,
    dividendFrequency: "monthly",
    sector: "채권",
    color: "#06b6d4",
    rawValue: "$1,409.53",
    rawGain: "+$27.87 (+2.017%)",
    currency: "USD",
  },
  {
    ticker: "SCHG",
    name: "SCHG",
    shares: 33,
    avgCost: 0,
    currentPrice: 30.54,
    dividendYield: 0.37,
    annualDividendPerShare: 0.11,
    dividendFrequency: "quarterly",
    sector: "ETF",
    color: "#10b981",
    rawValue: "$1,007.82",
    rawGain: "+$72.53 (+7.755%)",
    currency: "USD",
  },
  {
    ticker: "TSLA",
    name: "TSLA",
    shares: 1.09,
    avgCost: 0,
    currentPrice: 401.88,
    dividendYield: 0,
    annualDividendPerShare: 0,
    dividendFrequency: "quarterly",
    sector: "기술주",
    color: "#ef4444",
    rawValue: "$438.05",
    rawGain: "-$12.76 (-2.831%)",
    currency: "USD",
  },
  {
    ticker: "TGT",
    name: "TGT",
    shares: 3.522,
    avgCost: 0,
    currentPrice: 114.65,
    dividendYield: 3.91,
    annualDividendPerShare: 4.48,
    dividendFrequency: "quarterly",
    sector: "필수 소비재",
    color: "#84cc16",
    rawValue: "$403.78",
    rawGain: "+$78.35 (+24.07%)",
    currency: "USD",
  },
  {
    ticker: "ARKK",
    name: "ARKK",
    shares: 3.806,
    avgCost: 0,
    currentPrice: 70.48,
    dividendYield: 0,
    annualDividendPerShare: 0,
    dividendFrequency: "quarterly",
    sector: "ETF",
    color: "#f97316",
    rawValue: "$268.24",
    rawGain: "-$29.41 (-9.88%)",
    currency: "USD",
  },
  {
    ticker: "MGK",
    name: "MGK",
    shares: 0.4136,
    avgCost: 0,
    currentPrice: 384.77,
    dividendYield: 0.36,
    annualDividendPerShare: 1.39,
    dividendFrequency: "quarterly",
    sector: "ETF",
    color: "#0ea5e9",
    rawValue: "$159.14",
    rawGain: "-$2.66 (-1.645%)",
    currency: "USD",
  },
  {
    ticker: "TIGER S&P500",
    name: "TIGER 미국S&P500",
    shares: 1,
    avgCost: 0,
    currentPrice: 24515,
    dividendYield: 0.5,
    annualDividendPerShare: 122.58,
    dividendFrequency: "quarterly",
    sector: "ETF",
    color: "hsl(269, 70%, 60%)",
    rawValue: "₩24,515",
    rawGain: "+₩11,410 (+87.06%)",
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
