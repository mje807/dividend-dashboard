import { stockMetrics } from "~/data/metrics";
import { growthAnalyses } from "~/data/growth-analysis";
import { createSupabaseAdminClient } from "~/lib/supabase.server";

function j(body: unknown, status = 200) {
  return Response.json(body, { status });
}

function getBearerToken(request: Request) {
  const auth = request.headers.get("authorization") ?? "";
  if (auth.startsWith("Bearer ")) return auth.slice(7);
  return null;
}

export async function action({ request }: { request: Request }) {
  if (request.method !== "POST") return j({ ok: false, error: "METHOD_NOT_ALLOWED" }, 405);

  const expected = process.env.JOB_RUNNER_TOKEN;
  if (!expected) return j({ ok: false, error: "JOB_RUNNER_TOKEN_NOT_SET" }, 500);

  const provided = getBearerToken(request);
  if (!provided || provided !== expected) return j({ ok: false, error: "UNAUTHORIZED" }, 401);

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

    const [metricsResult, analysesResult] = await Promise.all([
      supabase.from("stock_metrics_latest").upsert(metricRows, { onConflict: "ticker" }),
      supabase.from("growth_analyses_latest").upsert(analysisRows, { onConflict: "ticker" }),
    ]);

    if (metricsResult.error) {
      return j({ ok: false, error: "METRICS_UPSERT_FAILED", detail: metricsResult.error.message }, 500);
    }

    if (analysesResult.error) {
      return j({ ok: false, error: "ANALYSES_UPSERT_FAILED", detail: analysesResult.error.message }, 500);
    }

    return j({
      ok: true,
      metricsUpserted: metricRows.length,
      analysesUpserted: analysisRows.length,
      durationMs: Date.now() - startedAt,
      tables: ["stock_metrics_latest", "growth_analyses_latest"],
    });
  } catch (error: any) {
    return j(
      {
        ok: false,
        error: "MIGRATION_FAILED",
        detail: error?.message ?? String(error),
      },
      500,
    );
  }
}
