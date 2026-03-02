create table if not exists public.portfolio_latest (
  ticker text primary key,
  type text,
  shares double precision,
  value_text text,
  current_price_text text,
  gain_text text,
  div_yield_text text,
  div_month text,
  snapshot_date text,
  ingested_at timestamptz default now()
);

alter table public.portfolio_latest enable row level security;

drop policy if exists portfolio_latest_select_public on public.portfolio_latest;
create policy portfolio_latest_select_public
  on public.portfolio_latest
  for select
  to anon, authenticated
  using (true);
