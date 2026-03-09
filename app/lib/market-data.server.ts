import { createSupabaseAdminClient } from "~/lib/supabase.server";
import { stockMetrics, type StockMetrics } from "~/data/metrics";
import { growthAnalyses, type GrowthAnalysis } from "~/data/growth-analysis";
import { royaltyMetrics, type RoyaltyMetrics } from "~/data/royalty-metrics";
import { stockAnalyses, type StockAnalysis } from "~/data/royalty-analysis";

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
  group_name: "bigtech" | "hyper" | "mega" | "innovative" | "mid" | "turnaround" | "core50";
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

const STOCK_METRIC_DETAIL_COLUMNS = [
  "ticker",
  "yf_ticker",
  "last_updated",
  "current_price",
  "week52_high",
  "week52_low",
  "revenue_growth",
  "roe",
  "profit_margin",
  "forward_pe",
  "trailing_pe",
  "target_mean_price"
].join(",");

export async function getStockMetricByTicker(ticker: string): Promise<StockMetrics | null> {
  const t = ticker.toUpperCase();
  try {
    const supabase = createSupabaseAdminClient();
    const { data, error } = await supabase
      .from("stock_metrics_latest")
      .select(STOCK_METRIC_DETAIL_COLUMNS)
      .eq("ticker", t)
      .maybeSingle();
    if (error || !data) return stockMetrics.find((m) => m.ticker === t) ?? null;
    return mapMetric(data as unknown as DbMetric);
  } catch {
    return stockMetrics.find((m) => m.ticker === t) ?? null;
  }
}

export async function getGrowthAnalysesLatest(): Promise<GrowthAnalysis[]> {
  try {
    const supabase = createSupabaseAdminClient();
    const { data, error } = await supabase
      .from("growth_analyses_latest")
      .select("*")
      .order("analyzed_at", { ascending: false });
    if (error || !data?.length) return growthAnalyses;

    const seen = new Set<string>();
    const deduped: DbGrowthAnalysis[] = [];
    for (const row of data as DbGrowthAnalysis[]) {
      const t = (row.ticker || "").toUpperCase();
      if (!t || seen.has(t)) continue;
      seen.add(t);
      deduped.push(row);
    }

    return deduped.map(mapAnalysis);
  } catch {
    return growthAnalyses;
  }
}

const GROWTH_ANALYSIS_DETAIL_COLUMNS = [
  "ticker",
  "group_name",
  "analyzed_at",
  "overall_rating",
  "score",
  "score_delta",
  "confidence",
  "source",
  "target_buy_low",
  "target_buy_high",
  "summary",
  "key_drivers",
  "key_risks"
].join(",");

export async function getGrowthAnalysisByTicker(ticker: string): Promise<GrowthAnalysis | null> {
  const t = ticker.toUpperCase();
  try {
    const supabase = createSupabaseAdminClient();
    const { data, error } = await supabase
      .from("growth_analyses_latest")
      .select(GROWTH_ANALYSIS_DETAIL_COLUMNS)
      .eq("ticker", t)
      .order("analyzed_at", { ascending: false })
      .limit(1)
      .maybeSingle();
    if (error || !data) return growthAnalyses.find((a) => a.ticker === t) ?? null;
    return mapAnalysis(data as unknown as DbGrowthAnalysis);
  } catch {
    return growthAnalyses.find((a) => a.ticker === t) ?? null;
  }
}

type DbRoyaltyMetric = {
  ticker: string;
  fetched_at: string;
  current_price: number | null;
  week52_low: number | null;
  week52_high: number | null;
  pct_in52_range: number | null;
  beta: number | null;
  dividend_rate: number | null;
  dividend_yield: number | null;
  five_year_avg_yield: number | null;
  yield_vs_avg: number | null;
  payout_ratio: number | null;
  dividend_cagr3yr: number | null;
  trailing_pe: number | null;
  forward_pe: number | null;
  price_to_book: number | null;
  ev_to_ebitda: number | null;
  peg_ratio: number | null;
  ddm_fair_value: number | null;
  roe: number | null;
  profit_margin: number | null;
  debt_to_equity: number | null;
  current_ratio: number | null;
  revenue_growth: number | null;
  free_cashflow: number | null;
  target_mean_price: number | null;
  analyst_upside: number | null;
  recommendation_key: string | null;
  number_of_analysts: number | null;
  market_cap: number | null;
  sector: string | null;
  industry: string | null;
  long_business_summary: string | null;
};

type DbRoyaltyAnalysis = {
  ticker: string;
  analyzed_at: string;
  business_summary: string;
  core_products: string[];
  geographic_presence: string;
  dividend_streak_years: number;
  dividend_cagr5yr: number | null;
  dividend_cagr10yr: number | null;
  recent_dividend_growth: string;
  dividend_safety: "strong" | "moderate" | "watch";
  dividend_safety_reason: string;
  moat_types: StockAnalysis["moatTypes"];
  moat_strength: StockAnalysis["moatStrength"];
  moat_narrative: string;
  revenue_growth_trend: string;
  margin_trend: StockAnalysis["marginTrend"];
  debt_level: StockAnalysis["debtLevel"];
  financial_summary: string;
  key_risks: string[];
  bull_case: string;
  bear_case: string;
  valuation_comment: string;
  recent_developments: string[];
  overall_rating: StockAnalysis["overallRating"];
  rating_reason: string;
  target_buy_price: number | null;
};

function mapRoyaltyMetric(row: DbRoyaltyMetric): RoyaltyMetrics {
  return {
    ticker: row.ticker,
    fetchedAt: row.fetched_at,
    currentPrice: row.current_price,
    week52Low: row.week52_low,
    week52High: row.week52_high,
    pctIn52Range: row.pct_in52_range,
    beta: row.beta,
    dividendRate: row.dividend_rate,
    dividendYield: row.dividend_yield,
    fiveYearAvgYield: row.five_year_avg_yield,
    yieldVsAvg: row.yield_vs_avg,
    payoutRatio: row.payout_ratio,
    dividendCAGR3yr: row.dividend_cagr3yr,
    trailingPE: row.trailing_pe,
    forwardPE: row.forward_pe,
    priceToBook: row.price_to_book,
    evToEbitda: row.ev_to_ebitda,
    pegRatio: row.peg_ratio,
    ddmFairValue: row.ddm_fair_value,
    roe: row.roe,
    profitMargin: row.profit_margin,
    debtToEquity: row.debt_to_equity,
    currentRatio: row.current_ratio,
    revenueGrowth: row.revenue_growth,
    freeCashflow: row.free_cashflow,
    targetMeanPrice: row.target_mean_price,
    analystUpside: row.analyst_upside,
    recommendationKey: row.recommendation_key,
    numberOfAnalysts: row.number_of_analysts,
    marketCap: row.market_cap,
    sector: row.sector,
    industry: row.industry,
    longBusinessSummary: row.long_business_summary,
  };
}

function mapRoyaltyAnalysis(row: DbRoyaltyAnalysis): StockAnalysis {
  return {
    ticker: row.ticker,
    analyzedAt: row.analyzed_at,
    businessSummary: row.business_summary,
    coreProducts: row.core_products ?? [],
    geographicPresence: row.geographic_presence,
    dividendStreakYears: row.dividend_streak_years,
    dividendCAGR5yr: row.dividend_cagr5yr,
    dividendCAGR10yr: row.dividend_cagr10yr,
    recentDividendGrowth: row.recent_dividend_growth,
    dividendSafety: row.dividend_safety,
    dividendSafetyReason: row.dividend_safety_reason,
    moatTypes: row.moat_types ?? [],
    moatStrength: row.moat_strength,
    moatNarrative: row.moat_narrative,
    revenueGrowthTrend: row.revenue_growth_trend,
    marginTrend: row.margin_trend,
    debtLevel: row.debt_level,
    financialSummary: row.financial_summary,
    keyRisks: row.key_risks ?? [],
    bullCase: row.bull_case,
    bearCase: row.bear_case,
    valuationComment: row.valuation_comment,
    recentDevelopments: row.recent_developments ?? [],
    overallRating: row.overall_rating,
    ratingReason: row.rating_reason,
    targetBuyPrice: row.target_buy_price,
  };
}

const ROYALTY_METRICS_WATCHLIST_COLUMNS = [
  "ticker",
  "fetched_at",
  "current_price",
  "week52_low",
  "week52_high",
  "pct_in52_range",
  "beta",
  "dividend_rate",
  "dividend_yield",
  "five_year_avg_yield",
  "yield_vs_avg",
  "payout_ratio",
  "dividend_cagr3yr",
  "trailing_pe",
  "forward_pe",
  "price_to_book",
  "ev_to_ebitda",
  "peg_ratio",
  "ddm_fair_value",
  "roe",
  "profit_margin",
  "debt_to_equity",
  "current_ratio",
  "revenue_growth",
  "free_cashflow",
  "target_mean_price",
  "analyst_upside",
  "recommendation_key",
  "number_of_analysts",
  "market_cap",
  "sector",
  "industry"
].join(",");

export async function getRoyaltyMetricsLatest(): Promise<RoyaltyMetrics[]> {
  try {
    const supabase = createSupabaseAdminClient();
    const { data, error } = await supabase
      .from("royalty_metrics_latest")
      .select(ROYALTY_METRICS_WATCHLIST_COLUMNS);
    if (error || !data?.length) return royaltyMetrics;
    return (data as unknown as DbRoyaltyMetric[]).map(mapRoyaltyMetric);
  } catch {
    return royaltyMetrics;
  }
}

const ROYALTY_METRIC_DETAIL_COLUMNS = [
  "ticker",
  "fetched_at",
  "current_price",
  "week52_low",
  "week52_high",
  "pct_in52_range",
  "dividend_rate",
  "dividend_yield",
  "five_year_avg_yield",
  "yield_vs_avg",
  "payout_ratio",
  "dividend_cagr3yr",
  "trailing_pe",
  "forward_pe",
  "price_to_book",
  "roe",
  "profit_margin",
  "debt_to_equity",
  "current_ratio",
  "revenue_growth",
  "target_mean_price",
  "analyst_upside",
  "recommendation_key",
  "number_of_analysts",
  "sector",
  "industry",
  "long_business_summary"
].join(",");

export async function getRoyaltyMetricByTicker(ticker: string): Promise<RoyaltyMetrics | null> {
  const t = ticker.toUpperCase();
  try {
    const supabase = createSupabaseAdminClient();
    const { data, error } = await supabase
      .from("royalty_metrics_latest")
      .select(ROYALTY_METRIC_DETAIL_COLUMNS)
      .eq("ticker", t)
      .maybeSingle();
    if (error || !data) return royaltyMetrics.find((m) => m.ticker === t) ?? null;
    return mapRoyaltyMetric(data as unknown as DbRoyaltyMetric);
  } catch {
    return royaltyMetrics.find((m) => m.ticker === t) ?? null;
  }
}

export async function getRoyaltyAnalysesLatest(): Promise<StockAnalysis[]> {
  try {
    const supabase = createSupabaseAdminClient();
    const { data, error } = await supabase.from("royalty_analyses_latest").select("*");
    if (error || !data?.length) return stockAnalyses;
    return (data as DbRoyaltyAnalysis[]).map(mapRoyaltyAnalysis);
  } catch {
    return stockAnalyses;
  }
}

const ROYALTY_ANALYSIS_DETAIL_COLUMNS = [
  "ticker",
  "analyzed_at",
  "business_summary",
  "core_products",
  "geographic_presence",
  "dividend_streak_years",
  "dividend_cagr5yr",
  "dividend_cagr10yr",
  "recent_dividend_growth",
  "dividend_safety",
  "dividend_safety_reason",
  "moat_types",
  "moat_strength",
  "moat_narrative",
  "revenue_growth_trend",
  "margin_trend",
  "debt_level",
  "financial_summary",
  "key_risks",
  "bull_case",
  "bear_case",
  "valuation_comment",
  "recent_developments",
  "overall_rating",
  "rating_reason",
  "target_buy_price"
].join(",");

export async function getRoyaltyAnalysisByTicker(ticker: string): Promise<StockAnalysis | null> {
  const t = ticker.toUpperCase();
  try {
    const supabase = createSupabaseAdminClient();
    const { data, error } = await supabase
      .from("royalty_analyses_latest")
      .select(ROYALTY_ANALYSIS_DETAIL_COLUMNS)
      .eq("ticker", t)
      .order("analyzed_at", { ascending: false })
      .limit(1)
      .maybeSingle();
    if (error || !data) return stockAnalyses.find((a) => a.ticker === t) ?? null;
    return mapRoyaltyAnalysis(data as unknown as DbRoyaltyAnalysis);
  } catch {
    return stockAnalyses.find((a) => a.ticker === t) ?? null;
  }
}
