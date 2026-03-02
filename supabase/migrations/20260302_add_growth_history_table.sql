create table if not exists public.growth_history_latest (
  ticker text primary key,
  history jsonb not null,
  fetched_at text,
  ingested_at timestamptz default now()
);

alter table public.growth_history_latest enable row level security;

drop policy if exists growth_history_latest_select_public on public.growth_history_latest;
create policy growth_history_latest_select_public
  on public.growth_history_latest
  for select
  to anon, authenticated
  using (true);
