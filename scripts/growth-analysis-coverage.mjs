import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const growthPath = path.join(root, "app/data/growth.ts");
const analysisPath = path.join(root, "app/data/growth-analysis.ts");
const outPath = path.join(root, "app/design/GROWTH_ANALYSIS_COVERAGE.md");

const growthSrc = fs.readFileSync(growthPath, "utf8");
const analysisSrc = fs.readFileSync(analysisPath, "utf8");

function parseArray(name) {
  const re = new RegExp(`export const ${name} = \\[(.*?)\\] as const;`, "s");
  const m = growthSrc.match(re);
  if (!m) return [];
  return Array.from(m[1].matchAll(/"([A-Z.]+)"/g)).map((x) => x[1]);
}

const baskets = {
  mega: parseArray("megaGrowthTickers"),
  innovative: parseArray("innovativeGrowthTickers"),
  mid: parseArray("profitableMidGrowthTickers"),
  turnaround: parseArray("turnaroundGrowthTickers"),
};

const covered = new Set(Array.from(analysisSrc.matchAll(/ticker:\s*"([A-Z.]+)"/g)).map((m) => m[1]));
const all = Array.from(new Set(Object.values(baskets).flat()));

const missingByBasket = Object.fromEntries(
  Object.entries(baskets).map(([k, arr]) => [k, arr.filter((t) => !covered.has(t))]),
);

const coveredCount = all.filter((t) => covered.has(t)).length;
const coveragePct = all.length ? ((coveredCount / all.length) * 100).toFixed(1) : "0.0";

const lines = [];
lines.push("# Growth Analysis Coverage Report");
lines.push("");
lines.push(`- Universe size: **${all.length}**`);
lines.push(`- Covered in growth-analysis.ts: **${coveredCount}**`);
lines.push(`- Missing analysis: **${all.length - coveredCount}**`);
lines.push(`- Coverage: **${coveragePct}%**`);
lines.push("");
lines.push("## Missing by basket");
lines.push("");
for (const [basket, list] of Object.entries(missingByBasket)) {
  lines.push(`### ${basket} (${list.length})`);
  if (!list.length) {
    lines.push("- none");
  } else {
    for (const t of list) lines.push(`- ${t}`);
  }
  lines.push("");
}

const priority = Object.values(missingByBasket).flat().slice(0, 12);
lines.push("## Suggested next analysis batch (Top 12)");
lines.push("");
if (!priority.length) {
  lines.push("- none");
} else {
  for (const t of priority) lines.push(`- ${t}`);
}

fs.writeFileSync(outPath, `${lines.join("\n")}\n`, "utf8");
console.log(`written: ${outPath}`);
