# Supabase Migration (Phase 1)

## What was added
- `POST /api/supabase/migrate`
  - auth: `Authorization: Bearer <JOB_RUNNER_TOKEN>`
  - upserts local snapshot data into Supabase
- target tables:
  - `public.stock_metrics_latest`
  - `public.growth_analyses_latest`
- SQL migration file:
  - `supabase/migrations/20260301_init_market_tables.sql`

## Prerequisites
Set env vars:
- `SUPABASE_URL`
- `SUPABASE_SERVICE_ROLE_KEY`
- `JOB_RUNNER_TOKEN`

## 1) Run SQL migration
In Supabase SQL Editor, run:
- `supabase/migrations/20260301_init_market_tables.sql`

## 2) Run migrate endpoint
```bash
curl -X POST http://localhost:5173/api/supabase/migrate \
  -H "Authorization: Bearer $JOB_RUNNER_TOKEN"
```

Expected response:
```json
{
  "ok": true,
  "metricsUpserted": 19,
  "analysesUpserted": 20,
  "durationMs": 123,
  "tables": ["stock_metrics_latest", "growth_analyses_latest"]
}
```

## Next (Phase 2)
- make app loaders read from Supabase first and fallback to local `app/data/*.ts`
- move Python worker outputs to write directly into Supabase (remove git-data push dependency)
