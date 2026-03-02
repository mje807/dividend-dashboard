import { migrateSnapshotsToSupabase } from "~/lib/supabase-migrate.server";

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

  const result = await migrateSnapshotsToSupabase();
  return j(result, result.ok ? 200 : 500);
}
