create table if not exists public.royalty_metrics_latest (
  ticker text primary key,
  fetched_at text,
  current_price double precision,
  week52_low double precision,
  week52_high double precision,
  pct_in52_range double precision,
  beta double precision,
  dividend_rate double precision,
  dividend_yield double precision,
  five_year_avg_yield double precision,
  yield_vs_avg double precision,
  payout_ratio double precision,
  dividend_cagr3yr double precision,
  trailing_pe double precision,
  forward_pe double precision,
  price_to_book double precision,
  ev_to_ebitda double precision,
  peg_ratio double precision,
  ddm_fair_value double precision,
  roe double precision,
  profit_margin double precision,
  debt_to_equity double precision,
  current_ratio double precision,
  revenue_growth double precision,
  free_cashflow double precision,
  target_mean_price double precision,
  analyst_upside double precision,
  recommendation_key text,
  number_of_analysts integer,
  market_cap bigint,
  sector text,
  industry text,
  long_business_summary text,
  ingested_at timestamptz default now()
);

create table if not exists public.royalty_analyses_latest (
  ticker text primary key,
  analyzed_at text,
  business_summary text,
  core_products jsonb,
  geographic_presence text,
  dividend_streak_years integer,
  dividend_cagr5yr double precision,
  dividend_cagr10yr double precision,
  recent_dividend_growth text,
  dividend_safety text,
  dividend_safety_reason text,
  moat_types jsonb,
  moat_strength text,
  moat_narrative text,
  revenue_growth_trend text,
  margin_trend text,
  debt_level text,
  financial_summary text,
  key_risks jsonb,
  bull_case text,
  bear_case text,
  valuation_comment text,
  recent_developments jsonb,
  overall_rating text,
  rating_reason text,
  target_buy_price double precision,
  ingested_at timestamptz default now()
);

alter table public.royalty_metrics_latest enable row level security;
alter table public.royalty_analyses_latest enable row level security;

do $$ begin
  if not exists (
    select 1 from pg_policies where schemaname='public' and tablename='royalty_metrics_latest' and policyname='royalty_metrics_latest_select_public'
  ) then
    create policy royalty_metrics_latest_select_public
      on public.royalty_metrics_latest for select
      to anon, authenticated
      using (true);
  end if;
end $$;

do $$ begin
  if not exists (
    select 1 from pg_policies where schemaname='public' and tablename='royalty_analyses_latest' and policyname='royalty_analyses_latest_select_public'
  ) then
    create policy royalty_analyses_latest_select_public
      on public.royalty_analyses_latest for select
      to anon, authenticated
      using (true);
  end if;
end $$;
