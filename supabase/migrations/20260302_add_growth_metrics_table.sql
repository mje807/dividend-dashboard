create table if not exists public.growth_metrics_latest (
  ticker text not null,
  group_name text not null,
  name text,
  revenue_growth double precision,
  roe double precision,
  profit_margin double precision,
  pe double precision,
  in52 double precision,
  score double precision,
  fetched_at text,
  ingested_at timestamptz default now(),
  primary key (ticker, group_name)
);

alter table public.growth_metrics_latest enable row level security;

drop policy if exists growth_metrics_latest_select_public on public.growth_metrics_latest;
create policy growth_metrics_latest_select_public
  on public.growth_metrics_latest
  for select
  to anon, authenticated
  using (true);
