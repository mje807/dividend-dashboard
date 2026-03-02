// 자동 생성 - therich.io 스크래핑
// 마지막 업데이트: 2026-03-02
// 총 자산: ₩107,410,747

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
  totalAsset: "₩107,410,747",
  annualDividend: "₩1,900,075",
  dividendYield: "1.77%",
  investDividendYield: "2%",
  totalReturn: "총 수익 +₩12,742,394(+14.64%)",
  lastUpdated: "2026-03-02",
};

export const holdings: Holding[] = [
  {
    ticker: "SCHD",
    name: "SCHD",
    shares: 409.26,
    avgCost: 0,
    currentPrice: 31.78,
    dividendYield: 3.51,
    annualDividendPerShare: 1.12,
    dividendFrequency: "quarterly",
    sector: "ETF",
    color: "#22c55e",
    rawValue: "$13,006.37",
    rawGain: "+$2,482.86 (+23.59%)",
    currency: "USD",
  },
  {
    ticker: "SOL 배당다우",
    name: "SOL 미국배당다우존스",
    shares: 674,
    avgCost: 0,
    currentPrice: 13085,
    dividendYield: 3.5,
    annualDividendPerShare: 457.98,
    dividendFrequency: "monthly",
    sector: "ETF",
    color: "hsl(37, 70%, 60%)",
    rawValue: "₩8,819,290",
    rawGain: "+₩1,573,413 (+21.71%)",
    currency: "KRW",
  },
  {
    ticker: "O",
    name: "O",
    shares: 91,
    avgCost: 0,
    currentPrice: 67.01,
    dividendYield: 4.9,
    annualDividendPerShare: 3.28,
    dividendFrequency: "monthly",
    sector: "리츠",
    color: "#6366f1",
    rawValue: "$6,097.66",
    rawGain: "+$1,263.02 (+26.12%)",
    currency: "USD",
  },
  {
    ticker: "ACE 배당다우",
    name: "ACE 미국배당다우존스",
    shares: 479,
    avgCost: 0,
    currentPrice: 14500,
    dividendYield: 3.5,
    annualDividendPerShare: 507.5,
    dividendFrequency: "monthly",
    sector: "ETF",
    color: "hsl(111, 70%, 60%)",
    rawValue: "₩6,945,500",
    rawGain: "+₩1,247,457 (+21.89%)",
    currency: "KRW",
  },
  {
    ticker: "ACE 나스닥100",
    name: "ACE 미국나스닥100",
    shares: 245,
    avgCost: 0,
    currentPrice: 27340,
    dividendYield: 0.5,
    annualDividendPerShare: 136.7,
    dividendFrequency: "quarterly",
    sector: "ETF",
    color: "hsl(148, 70%, 60%)",
    rawValue: "₩6,698,300",
    rawGain: "+₩1,507,186 (+29.03%)",
    currency: "KRW",
  },
  {
    ticker: "NVDA",
    name: "NVDA",
    shares: 22.76,
    avgCost: 0,
    currentPrice: 177.17,
    dividendYield: 0.02,
    annualDividendPerShare: 0.04,
    dividendFrequency: "quarterly",
    sector: "기술주",
    color: "#f59e0b",
    rawValue: "$4,032.34",
    rawGain: "+$1,745.05 (+76.29%)",
    currency: "USD",
  },
  {
    ticker: "QQQM",
    name: "QQQM",
    shares: 14.1,
    avgCost: 0,
    currentPrice: 250.01,
    dividendYield: 0.49,
    annualDividendPerShare: 1.23,
    dividendFrequency: "quarterly",
    sector: "ETF",
    color: "#8b5cf6",
    rawValue: "$3,525.1",
    rawGain: "+$1,033.65 (+41.49%)",
    currency: "USD",
  },
  {
    ticker: "BTC / KRW",
    name: "BTC / KRW",
    shares: 0.0515,
    avgCost: 0,
    currentPrice: 95858388.35,
    dividendYield: 0,
    annualDividendPerShare: 0,
    dividendFrequency: "quarterly",
    sector: "가상자산",
    color: "hsl(259, 70%, 60%)",
    rawValue: "₩4,936,707",
    rawGain: "-₩1,660,413 (-25.17%)",
    currency: "KRW",
  },
  {
    ticker: "KODEX TRF3070",
    name: "KODEX TRF3070",
    shares: 309,
    avgCost: 0,
    currentPrice: 14295,
    dividendYield: 3,
    annualDividendPerShare: 428.85,
    dividendFrequency: "monthly",
    sector: "ETF",
    color: "hsl(296, 70%, 60%)",
    rawValue: "₩4,417,155",
    rawGain: "+₩459,174 (+11.6%)",
    currency: "KRW",
  },
  {
    ticker: "TIGER 테크TOP10",
    name: "TIGER 미국테크TOP10 INDXX",
    shares: 112,
    avgCost: 0,
    currentPrice: 28640,
    dividendYield: 0.5,
    annualDividendPerShare: 143.2,
    dividendFrequency: "quarterly",
    sector: "ETF",
    color: "hsl(333, 70%, 60%)",
    rawValue: "₩3,207,680",
    rawGain: "+₩410,193 (+14.66%)",
    currency: "KRW",
  },
  {
    ticker: "ACE 배당퀄리티",
    name: "ACE 미국배당퀄리티",
    shares: 251,
    avgCost: 0,
    currentPrice: 12240,
    dividendYield: 3.5,
    annualDividendPerShare: 428.4,
    dividendFrequency: "monthly",
    sector: "ETF",
    color: "hsl(10, 70%, 60%)",
    rawValue: "₩3,072,240",
    rawGain: "+₩301,082 (+10.86%)",
    currency: "KRW",
  },
  {
    ticker: "TLT",
    name: "TLT",
    shares: 15.69,
    avgCost: 0,
    currentPrice: 90.83,
    dividendYield: 4.43,
    annualDividendPerShare: 4.02,
    dividendFrequency: "monthly",
    sector: "채권",
    color: "#06b6d4",
    rawValue: "$1,425.06",
    rawGain: "+$57.72 (+4.221%)",
    currency: "USD",
  },
  {
    ticker: "SCHG",
    name: "SCHG",
    shares: 33,
    avgCost: 0,
    currentPrice: 30.75,
    dividendYield: 0.37,
    annualDividendPerShare: 0.11,
    dividendFrequency: "quarterly",
    sector: "ETF",
    color: "#10b981",
    rawValue: "$1,014.75",
    rawGain: "+$79.46 (+8.495%)",
    currency: "USD",
  },
  {
    ticker: "TSLA",
    name: "TSLA",
    shares: 1.09,
    avgCost: 0,
    currentPrice: 402.39,
    dividendYield: 0,
    annualDividendPerShare: 0,
    dividendFrequency: "quarterly",
    sector: "기술주",
    color: "#ef4444",
    rawValue: "$438.61",
    rawGain: "-$12.77 (-2.829%)",
    currency: "USD",
  },
  {
    ticker: "TGT",
    name: "TGT",
    shares: 3.522,
    avgCost: 0,
    currentPrice: 113.8,
    dividendYield: 3.91,
    annualDividendPerShare: 4.45,
    dividendFrequency: "quarterly",
    sector: "필수 소비재",
    color: "#84cc16",
    rawValue: "$400.79",
    rawGain: "+$78.3 (+24.28%)",
    currency: "USD",
  },
  {
    ticker: "ARKK",
    name: "ARKK",
    shares: 3.806,
    avgCost: 0,
    currentPrice: 72.93,
    dividendYield: 0,
    annualDividendPerShare: 0,
    dividendFrequency: "quarterly",
    sector: "ETF",
    color: "#f97316",
    rawValue: "$277.56",
    rawGain: "-$20.46 (-6.864%)",
    currency: "USD",
  },
  {
    ticker: "MGK",
    name: "MGK",
    shares: 0.4136,
    avgCost: 0,
    currentPrice: 386.97,
    dividendYield: 0.36,
    annualDividendPerShare: 1.39,
    dividendFrequency: "quarterly",
    sector: "ETF",
    color: "#0ea5e9",
    rawValue: "$160.05",
    rawGain: "-$1.95 (-1.206%)",
    currency: "USD",
  },
  {
    ticker: "TIGER S&P500",
    name: "TIGER 미국S&P500",
    shares: 1,
    avgCost: 0,
    currentPrice: 24565,
    dividendYield: 0.5,
    annualDividendPerShare: 122.83,
    dividendFrequency: "quarterly",
    sector: "ETF",
    color: "hsl(269, 70%, 60%)",
    rawValue: "₩24,565",
    rawGain: "+₩11,460 (+87.44%)",
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
