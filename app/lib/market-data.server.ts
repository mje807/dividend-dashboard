import { createSupabaseAdminClient } from "~/lib/supabase.server";
import { stockMetrics, type StockMetrics } from "~/data/metrics";
import { growthAnalyses, type GrowthAnalysis } from "~/data/growth-analysis";

type DbMetric = {
  ticker: string;
  yf_ticker: string | null;
  last_updated: string;
  current_price: number | null;
  currency: string | null;
  week52_high: number | null;
  week52_low: number | null;
  beta: number | null;
  dividend_yield: number | null;
  dividend_rate: number | null;
  ex_dividend_date: string | null;
  payout_ratio: number | null;
  five_year_avg_dividend_yield: number | null;
  trailing_pe: number | null;
  forward_pe: number | null;
  price_to_book: number | null;
  ev_to_ebitda: number | null;
  roe: number | null;
  profit_margin: number | null;
  debt_to_equity: number | null;
  current_ratio: number | null;
  revenue_growth: number | null;
  target_mean_price: number | null;
  recommendation_key: string | null;
  number_of_analyst_opinions: number | null;
  long_name: string | null;
  sector: string | null;
  industry: string | null;
  market_cap: number | null;
  long_business_summary: string | null;
};

type DbGrowthAnalysis = {
  ticker: string;
  group_name: "bigtech" | "hyper";
  analyzed_at: string;
  overall_rating: "관심" | "관망" | "신중";
  score: number;
  score_delta: number | null;
  confidence: "A" | "B";
  source: "metrics" | "yfinance";
  target_buy_low: number | null;
  target_buy_high: number | null;
  summary: string;
  key_drivers: string[];
  key_risks: string[];
};

function mapMetric(row: DbMetric): StockMetrics {
  return {
    ticker: row.ticker,
    yfTicker: row.yf_ticker,
    lastUpdated: row.last_updated,
    currentPrice: row.current_price,
    currency: row.currency,
    week52High: row.week52_high,
    week52Low: row.week52_low,
    beta: row.beta,
    dividendYield: row.dividend_yield,
    dividendRate: row.dividend_rate,
    exDividendDate: row.ex_dividend_date,
    payoutRatio: row.payout_ratio,
    fiveYearAvgDividendYield: row.five_year_avg_dividend_yield,
    trailingPE: row.trailing_pe,
    forwardPE: row.forward_pe,
    priceToBook: row.price_to_book,
    evToEbitda: row.ev_to_ebitda,
    roe: row.roe,
    profitMargin: row.profit_margin,
    debtToEquity: row.debt_to_equity,
    currentRatio: row.current_ratio,
    revenueGrowth: row.revenue_growth,
    targetMeanPrice: row.target_mean_price,
    recommendationKey: row.recommendation_key,
    numberOfAnalystOpinions: row.number_of_analyst_opinions,
    longName: row.long_name,
    sector: row.sector,
    industry: row.industry,
    marketCap: row.market_cap,
    longBusinessSummary: row.long_business_summary,
  };
}

function mapAnalysis(row: DbGrowthAnalysis): GrowthAnalysis {
  return {
    ticker: row.ticker,
    group: row.group_name,
    analyzedAt: row.analyzed_at,
    overallRating: row.overall_rating,
    score: row.score,
    scoreDelta: row.score_delta,
    confidence: row.confidence,
    source: row.source,
    targetBuyLow: row.target_buy_low,
    targetBuyHigh: row.target_buy_high,
    summary: row.summary,
    keyDrivers: row.key_drivers ?? [],
    keyRisks: row.key_risks ?? [],
  };
}

export async function getStockMetricsLatest(): Promise<StockMetrics[]> {
  try {
    const supabase = createSupabaseAdminClient();
    const { data, error } = await supabase.from("stock_metrics_latest").select("*");
    if (error || !data?.length) return stockMetrics;
    return (data as DbMetric[]).map(mapMetric);
  } catch {
    return stockMetrics;
  }
}

export async function getGrowthAnalysesLatest(): Promise<GrowthAnalysis[]> {
  try {
    const supabase = createSupabaseAdminClient();
    const { data, error } = await supabase.from("growth_analyses_latest").select("*");
    if (error || !data?.length) return growthAnalyses;
    return (data as DbGrowthAnalysis[]).map(mapAnalysis);
  } catch {
    return growthAnalyses;
  }
}
