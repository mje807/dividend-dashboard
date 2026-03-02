create table if not exists public.royalty_universe_latest (
  ticker text primary key,
  name text,
  category text,
  level text,
  sector text,
  streak integer,
  price double precision,
  dividend_yield double precision,
  dividend_rate double precision,
  pe_ratio double precision,
  payout_ratio double precision,
  dgr_5y double precision,
  avg_yield_10y double precision,
  yf_symbol text,
  updated_at text,
  ingested_at timestamptz default now()
);

alter table public.royalty_universe_latest enable row level security;

drop policy if exists royalty_universe_latest_select_public on public.royalty_universe_latest;
create policy royalty_universe_latest_select_public
  on public.royalty_universe_latest
  for select
  to anon, authenticated
  using (true);
