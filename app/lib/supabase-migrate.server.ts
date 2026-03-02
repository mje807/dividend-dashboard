import { stockMetrics } from "~/data/metrics";
import { growthAnalyses } from "~/data/growth-analysis";
import { createSupabaseAdminClient } from "~/lib/supabase.server";
import { royaltyMetrics } from "~/data/royalty-metrics";
import { stockAnalyses } from "~/data/royalty-analysis";

export type SupabaseMigrateResult = {
  ok: boolean;
  metricsUpserted?: number;
  analysesUpserted?: number;
  royaltyMetricsUpserted?: number;
  royaltyAnalysesUpserted?: number;
  durationMs?: number;
  tables?: string[];
  error?: string;
  detail?: string;
};

export async function migrateSnapshotsToSupabase(): Promise<SupabaseMigrateResult> {
  const startedAt = Date.now();

  try {
    const supabase = createSupabaseAdminClient();

    const metricRows = stockMetrics.map((m) => ({
      ticker: m.ticker,
      yf_ticker: m.yfTicker,
      last_updated: m.lastUpdated,
      current_price: m.currentPrice,
      currency: m.currency,
      week52_high: m.week52High,
      week52_low: m.week52Low,
      beta: m.beta,
      dividend_yield: m.dividendYield,
      dividend_rate: m.dividendRate,
      ex_dividend_date: m.exDividendDate,
      payout_ratio: m.payoutRatio,
      five_year_avg_dividend_yield: m.fiveYearAvgDividendYield,
      trailing_pe: m.trailingPE,
      forward_pe: m.forwardPE,
      price_to_book: m.priceToBook,
      ev_to_ebitda: m.evToEbitda,
      roe: m.roe,
      profit_margin: m.profitMargin,
      debt_to_equity: m.debtToEquity,
      current_ratio: m.currentRatio,
      revenue_growth: m.revenueGrowth,
      target_mean_price: m.targetMeanPrice,
      recommendation_key: m.recommendationKey,
      number_of_analyst_opinions: m.numberOfAnalystOpinions,
      long_name: m.longName,
      sector: m.sector,
      industry: m.industry,
      market_cap: m.marketCap,
      long_business_summary: m.longBusinessSummary,
      source: "app/data/metrics.ts",
      ingested_at: new Date().toISOString(),
    }));

    const analysisRows = growthAnalyses.map((a) => ({
      ticker: a.ticker,
      group_name: a.group,
      analyzed_at: a.analyzedAt,
      overall_rating: a.overallRating,
      score: a.score,
      score_delta: a.scoreDelta,
      confidence: a.confidence,
      source: a.source,
      target_buy_low: a.targetBuyLow,
      target_buy_high: a.targetBuyHigh,
      summary: a.summary,
      key_drivers: a.keyDrivers,
      key_risks: a.keyRisks,
      ingested_at: new Date().toISOString(),
    }));

    const royaltyMetricRows = royaltyMetrics.map((m) => ({
      ticker: m.ticker,
      fetched_at: m.fetchedAt,
      current_price: m.currentPrice,
      week52_low: m.week52Low,
      week52_high: m.week52High,
      pct_in52_range: m.pctIn52Range,
      beta: m.beta,
      dividend_rate: m.dividendRate,
      dividend_yield: m.dividendYield,
      five_year_avg_yield: m.fiveYearAvgYield,
      yield_vs_avg: m.yieldVsAvg,
      payout_ratio: m.payoutRatio,
      dividend_cagr3yr: m.dividendCAGR3yr,
      trailing_pe: m.trailingPE,
      forward_pe: m.forwardPE,
      price_to_book: m.priceToBook,
      ev_to_ebitda: m.evToEbitda,
      peg_ratio: m.pegRatio,
      ddm_fair_value: m.ddmFairValue,
      roe: m.roe,
      profit_margin: m.profitMargin,
      debt_to_equity: m.debtToEquity,
      current_ratio: m.currentRatio,
      revenue_growth: m.revenueGrowth,
      free_cashflow: m.freeCashflow,
      target_mean_price: m.targetMeanPrice,
      analyst_upside: m.analystUpside,
      recommendation_key: m.recommendationKey,
      number_of_analysts: m.numberOfAnalysts,
      market_cap: m.marketCap,
      sector: m.sector,
      industry: m.industry,
      long_business_summary: m.longBusinessSummary,
      ingested_at: new Date().toISOString(),
    }));

    const royaltyAnalysisRows = stockAnalyses.map((a) => ({
      ticker: a.ticker,
      analyzed_at: a.analyzedAt,
      business_summary: a.businessSummary,
      core_products: a.coreProducts,
      geographic_presence: a.geographicPresence,
      dividend_streak_years: a.dividendStreakYears,
      dividend_cagr5yr: a.dividendCAGR5yr,
      dividend_cagr10yr: a.dividendCAGR10yr,
      recent_dividend_growth: a.recentDividendGrowth,
      dividend_safety: a.dividendSafety,
      dividend_safety_reason: a.dividendSafetyReason,
      moat_types: a.moatTypes,
      moat_strength: a.moatStrength,
      moat_narrative: a.moatNarrative,
      revenue_growth_trend: a.revenueGrowthTrend,
      margin_trend: a.marginTrend,
      debt_level: a.debtLevel,
      financial_summary: a.financialSummary,
      key_risks: a.keyRisks,
      bull_case: a.bullCase,
      bear_case: a.bearCase,
      valuation_comment: a.valuationComment,
      recent_developments: a.recentDevelopments,
      overall_rating: a.overallRating,
      rating_reason: a.ratingReason,
      target_buy_price: a.targetBuyPrice,
      ingested_at: new Date().toISOString(),
    }));

    const [metricsResult, analysesResult, royaltyMetricsResult, royaltyAnalysesResult] = await Promise.all([
      supabase.from("stock_metrics_latest").upsert(metricRows, { onConflict: "ticker" }),
      supabase.from("growth_analyses_latest").upsert(analysisRows, { onConflict: "ticker" }),
      supabase.from("royalty_metrics_latest").upsert(royaltyMetricRows, { onConflict: "ticker" }),
      supabase.from("royalty_analyses_latest").upsert(royaltyAnalysisRows, { onConflict: "ticker" }),
    ]);

    if (metricsResult.error) {
      return { ok: false, error: "METRICS_UPSERT_FAILED", detail: metricsResult.error.message };
    }

    if (analysesResult.error) {
      return { ok: false, error: "ANALYSES_UPSERT_FAILED", detail: analysesResult.error.message };
    }

    if (royaltyMetricsResult.error) {
      return { ok: false, error: "ROYALTY_METRICS_UPSERT_FAILED", detail: royaltyMetricsResult.error.message };
    }

    if (royaltyAnalysesResult.error) {
      return { ok: false, error: "ROYALTY_ANALYSES_UPSERT_FAILED", detail: royaltyAnalysesResult.error.message };
    }

    return {
      ok: true,
      metricsUpserted: metricRows.length,
      analysesUpserted: analysisRows.length,
      royaltyMetricsUpserted: royaltyMetricRows.length,
      royaltyAnalysesUpserted: royaltyAnalysisRows.length,
      durationMs: Date.now() - startedAt,
      tables: [
        "stock_metrics_latest",
        "growth_analyses_latest",
        "royalty_metrics_latest",
        "royalty_analyses_latest",
      ],
    };
  } catch (error: any) {
    return {
      ok: false,
      error: "MIGRATION_FAILED",
      detail: error?.message ?? String(error),
    };
  }
}
