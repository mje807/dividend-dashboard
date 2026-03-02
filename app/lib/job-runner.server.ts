import { execFile } from "node:child_process";
import { promisify } from "node:util";

const execFileAsync = promisify(execFile);

export type JobName =
  | "analysis-worker"
  | "naver-insight-watcher"
  | "cron-health-summary"
  | "therich-scraper"
  | "dividend-royalty-scraper"
  | "portfolio-metrics-scraper"
  | "royalty-metrics-scraper"
  | "growth-metrics-scraper"
  | "growth-analysis-worker"
  | "growth-history-scraper";

type JobConfig = {
  command: string;
  args: string[];
  timeoutMs?: number;
  env?: Record<string, string>;
};

type JobRunResult = {
  ok: boolean;
  job: JobName;
  startedAt: string;
  finishedAt: string;
  durationMs: number;
  stdout?: string;
  stderr?: string;
  error?: string;
};

const DEFAULT_TIMEOUT_MS = 1000 * 60 * 15;
const SCRIPTS = "/Users/kimjonghyeon/.openclaw/workspace/scripts";

const JOB_CONFIGS: Record<JobName, JobConfig> = {
  "analysis-worker": {
    command: "/opt/homebrew/bin/python3",
    args: [`${SCRIPTS}/analysis-worker.py`],
    timeoutMs: 1000 * 60 * 20,
  },
  "naver-insight-watcher": {
    command: "/opt/homebrew/bin/python3",
    args: [`${SCRIPTS}/naver-insight-watcher.py`],
    timeoutMs: 1000 * 60 * 10,
  },
  "cron-health-summary": {
    command: "/opt/homebrew/bin/python3",
    args: [`${SCRIPTS}/cron-health-summary.py`],
    timeoutMs: 1000 * 60 * 5,
  },
  "therich-scraper": {
    command: "/opt/homebrew/bin/node",
    args: [`${SCRIPTS}/therich-scraper.mjs`],
    timeoutMs: 1000 * 60 * 10,
    env: { SKIP_SCREENSHOT: "1" },
  },
  "dividend-royalty-scraper": {
    command: "/opt/homebrew/bin/python3",
    args: [`${SCRIPTS}/dividend-royalty-scraper.py`],
    timeoutMs: 1000 * 60 * 15,
  },
  "portfolio-metrics-scraper": {
    command: "/opt/homebrew/bin/python3",
    args: [`${SCRIPTS}/portfolio-metrics-scraper.py`],
    timeoutMs: 1000 * 60 * 15,
  },
  "royalty-metrics-scraper": {
    command: "/opt/homebrew/bin/python3",
    args: [`${SCRIPTS}/royalty-metrics-scraper.py`],
    timeoutMs: 1000 * 60 * 20,
  },
  "growth-metrics-scraper": {
    command: "/opt/homebrew/bin/python3",
    args: [`${SCRIPTS}/growth-metrics-scraper.py`],
    timeoutMs: 1000 * 60 * 15,
  },
  "growth-analysis-worker": {
    command: "/opt/homebrew/bin/python3",
    args: [`${SCRIPTS}/growth-analysis-worker.py`],
    timeoutMs: 1000 * 60 * 20,
  },
  "growth-history-scraper": {
    command: "/opt/homebrew/bin/python3",
    args: [`${SCRIPTS}/growth-history-scraper.py`],
    timeoutMs: 1000 * 60 * 20,
  },
};

const runningJobs = new Set<JobName>();

function assertAllowedJob(job: string): asserts job is JobName {
  if (!(job in JOB_CONFIGS)) {
    throw new Error(`Unsupported job: ${job}`);
  }
}

export async function runJob(jobInput: string): Promise<JobRunResult> {
  assertAllowedJob(jobInput);
  const job = jobInput;

  if (runningJobs.has(job)) {
    return {
      ok: false,
      job,
      startedAt: new Date().toISOString(),
      finishedAt: new Date().toISOString(),
      durationMs: 0,
      error: "JOB_ALREADY_RUNNING",
    };
  }

  const cfg = JOB_CONFIGS[job];
  const started = Date.now();
  const startedAt = new Date(started).toISOString();

  runningJobs.add(job);
  try {
    const { stdout, stderr } = await execFileAsync(cfg.command, cfg.args, {
      timeout: cfg.timeoutMs ?? DEFAULT_TIMEOUT_MS,
      maxBuffer: 1024 * 1024 * 8,
      env: {
        ...process.env,
        HOME: "/Users/kimjonghyeon",
        ...(cfg.env ?? {}),
      },
    });

    const finished = Date.now();
    return {
      ok: true,
      job,
      startedAt,
      finishedAt: new Date(finished).toISOString(),
      durationMs: finished - started,
      stdout,
      stderr,
    };
  } catch (error: any) {
    const finished = Date.now();
    return {
      ok: false,
      job,
      startedAt,
      finishedAt: new Date(finished).toISOString(),
      durationMs: finished - started,
      stdout: error?.stdout,
      stderr: error?.stderr,
      error: error?.message ?? String(error),
    };
  } finally {
    runningJobs.delete(job);
  }
}

export function listSupportedJobs(): JobName[] {
  return Object.keys(JOB_CONFIGS) as JobName[];
}
