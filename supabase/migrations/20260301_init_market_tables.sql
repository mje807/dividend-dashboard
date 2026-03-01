-- Supabase migration: market latest snapshots

create table if not exists public.stock_metrics_latest (
  ticker text primary key,
  yf_ticker text,
  last_updated text,
  current_price double precision,
  currency text,
  week52_high double precision,
  week52_low double precision,
  beta double precision,
  dividend_yield double precision,
  dividend_rate double precision,
  ex_dividend_date text,
  payout_ratio double precision,
  five_year_avg_dividend_yield double precision,
  trailing_pe double precision,
  forward_pe double precision,
  price_to_book double precision,
  ev_to_ebitda double precision,
  roe double precision,
  profit_margin double precision,
  debt_to_equity double precision,
  current_ratio double precision,
  revenue_growth double precision,
  target_mean_price double precision,
  recommendation_key text,
  number_of_analyst_opinions integer,
  long_name text,
  sector text,
  industry text,
  market_cap bigint,
  long_business_summary text,
  source text,
  ingested_at timestamptz default now()
);

create table if not exists public.growth_analyses_latest (
  ticker text primary key,
  group_name text not null,
  analyzed_at text,
  overall_rating text,
  score double precision,
  score_delta double precision,
  confidence text,
  source text,
  target_buy_low double precision,
  target_buy_high double precision,
  summary text,
  key_drivers jsonb,
  key_risks jsonb,
  ingested_at timestamptz default now()
);

alter table public.stock_metrics_latest enable row level security;
alter table public.growth_analyses_latest enable row level security;

-- read-only public policy (optional):
do $$ begin
  if not exists (
    select 1 from pg_policies where schemaname='public' and tablename='stock_metrics_latest' and policyname='stock_metrics_latest_select_public'
  ) then
    create policy stock_metrics_latest_select_public
      on public.stock_metrics_latest for select
      to anon, authenticated
      using (true);
  end if;
end $$;

do $$ begin
  if not exists (
    select 1 from pg_policies where schemaname='public' and tablename='growth_analyses_latest' and policyname='growth_analyses_latest_select_public'
  ) then
    create policy growth_analyses_latest_select_public
      on public.growth_analyses_latest for select
      to anon, authenticated
      using (true);
  end if;
end $$;
