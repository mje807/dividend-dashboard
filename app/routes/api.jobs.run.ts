import { listSupportedJobs, runJob } from "~/lib/job-runner.server";
import { migrateSnapshotsToSupabase } from "~/lib/supabase-migrate.server";

function j(body: unknown, status = 200) {
  return Response.json(body, { status });
}

function unauthorized() {
  return j({ ok: false, error: "UNAUTHORIZED" }, 401);
}

function getTokenFromRequest(request: Request) {
  const auth = request.headers.get("authorization") ?? "";
  if (auth.startsWith("Bearer ")) return auth.slice(7);
  return null;
}

export async function loader() {
  return j({ ok: true, supportedJobs: listSupportedJobs() });
}

export async function action({ request }: { request: Request }) {
  if (request.method !== "POST") {
    return j({ ok: false, error: "METHOD_NOT_ALLOWED" }, 405);
  }

  const expectedToken = process.env.JOB_RUNNER_TOKEN;
  if (!expectedToken) {
    return j({ ok: false, error: "JOB_RUNNER_TOKEN_NOT_SET" }, 500);
  }

  const provided = getTokenFromRequest(request);
  if (!provided || provided !== expectedToken) {
    return unauthorized();
  }

  const body = await request.json().catch(() => null) as { job?: string } | null;
  const job = body?.job;

  if (!job) {
    return j({ ok: false, error: "JOB_REQUIRED" }, 400);
  }

  const result = await runJob(job);

  // 분석/수집 잡 성공 시 최신 스냅샷을 Supabase에 자동 반영
  if (result.ok && (job === "analysis-worker" || job === "naver-insight-watcher")) {
    const migrate = await migrateSnapshotsToSupabase();
    return j(
      {
        ...result,
        supabaseSync: migrate,
      },
      migrate.ok ? 200 : 500,
    );
  }

  return j(result, result.ok ? 200 : 500);
}
