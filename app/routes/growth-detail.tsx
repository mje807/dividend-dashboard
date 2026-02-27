import { Link, useParams } from "react-router";
import { ArrowLeft, AlertTriangle, CheckCircle2, LineChart } from "lucide-react";
import { getGrowthAnalysis } from "~/data/growth-analysis";
import { getGrowthHistory, type GrowthQuarterPoint } from "~/data/growth-history";
import { getMetrics } from "~/data/metrics";

export function meta() {
  return [{ title: "성장주 상세 분석" }];
}

function metric(v: number | null | undefined, suffix = "") {
  return v == null ? "-" : `${v.toFixed(1)}${suffix}`;
}

function qoqDelta(curr: number | null | undefined, prev: number | null | undefined): number | null {
  if (curr == null || prev == null || prev === 0) return null;
  return ((curr - prev) / Math.abs(prev)) * 100;
}

function buildAutoCommentary(history: GrowthQuarterPoint[]) {
  const latest = history[0];
  const prev = history[1];
  const revDelta = qoqDelta(latest?.revenueB, prev?.revenueB);

  let revComment = "매출 QoQ 데이터가 충분하지 않아 추세 판단 유보";
  if (revDelta != null) {
    revComment = revDelta >= 0
      ? `최근 분기 매출은 전분기 대비 +${revDelta.toFixed(1)}%로 증가 흐름을 유지` 
      : `최근 분기 매출은 전분기 대비 ${revDelta.toFixed(1)}%로 둔화 신호`;
  }

  const surprises = history.map(h => h.surprisePct).filter((v): v is number => v != null);
  const avgSurprise = surprises.length ? surprises.reduce((a, b) => a + b, 0) / surprises.length : null;
  let epsComment = "EPS 서프라이즈 데이터가 제한적";
  if (avgSurprise != null) {
    epsComment = avgSurprise >= 0
      ? `최근 EPS 서프라이즈 평균은 +${avgSurprise.toFixed(1)}%로 컨센서스 상회 경향`
      : `최근 EPS 서프라이즈 평균은 ${avgSurprise.toFixed(1)}%로 기대치 하회 경향`;
  }

  const latestSurprise = latest?.surprisePct;
  const guideComment = latestSurprise == null
    ? "가이던스 강도는 다음 분기 코멘트/컨센서스 리비전 확인 필요"
    : latestSurprise >= 0
      ? "직전 실적 서프라이즈가 양호해 가이던스 유지/상향 여부 점검이 핵심"
      : "직전 실적이 기대 하회여서 보수적 가이던스 가능성 점검 필요";

  return [revComment, epsComment, guideComment];
}

function buildNextQuarterCheckpoints(params: {
  revenueGrowth: number | null | undefined;
  forwardPE: number | null | undefined;
  targetMeanPrice: number | null | undefined;
  currentPrice: number | null | undefined;
}): string[] {
  const out: string[] = [];

  const rg = params.revenueGrowth;
  if (rg == null) out.push("매출 성장률 가이던스 제시 여부 및 YoY 회복 확인");
  else if (rg >= 20) out.push("고성장(20%+) 유지 여부: 매출 성장률 둔화 폭 점검");
  else out.push("성장 재가속 신호 확인: 신규 수요/세그먼트 확장 여부 점검");

  const pe = params.forwardPE;
  if (pe != null && pe >= 40) out.push("고밸류 부담 구간: 실적 발표 후 멀티플 압축 리스크 관리");
  else out.push("밸류에이션 방어력 확인: 실적 대비 밸류 재평가 흐름 점검");

  const tp = params.targetMeanPrice;
  const cp = params.currentPrice;
  if (tp != null && cp != null && cp > 0) {
    const upside = ((tp - cp) / cp) * 100;
    out.push(`컨센서스 목표가 대비 괴리(${upside >= 0 ? "+" : ""}${upside.toFixed(1)}%) 변화 추적`);
  } else {
    out.push("애널리스트 컨센서스 리비전(상향/하향) 추세 확인");
  }

  return out.slice(0, 3);
}

export default function GrowthDetailPage() {
  const { ticker } = useParams();
  const t = (ticker || "").toUpperCase();

  const a = getGrowthAnalysis(t);
  const m = getMetrics(t);
  const h = getGrowthHistory(t);
  const autoCommentary = buildAutoCommentary(h);
  const checkpoints = buildNextQuarterCheckpoints({
    revenueGrowth: m?.revenueGrowth,
    forwardPE: m?.forwardPE,
    targetMeanPrice: m?.targetMeanPrice,
    currentPrice: m?.currentPrice,
  });

  if (!a) {
    return (
      <div className="min-h-screen bg-gray-950 text-white p-6">
        <Link to="/growth" className="text-gray-400 hover:text-white text-sm inline-flex items-center gap-2">
          <ArrowLeft size={16} /> 성장주 목록
        </Link>
        <div className="mt-8 text-sm text-gray-400">{t} 분석 데이터가 없습니다.</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white p-6">
      <div className="flex items-center justify-between mb-6">
        <Link to="/growth" className="text-gray-400 hover:text-white text-sm inline-flex items-center gap-2">
          <ArrowLeft size={16} /> 성장주 목록
        </Link>
        <div className="text-xs text-gray-500">updated {a.analyzedAt}</div>
      </div>

      <div className="bg-gray-900 rounded-xl border border-gray-800 p-6 mb-5">
        <div className="flex items-center gap-2 mb-2">
          <LineChart size={18} className="text-cyan-400" />
          <h1 className="text-xl font-bold">{t} 상세 분석</h1>
        </div>
        <p className="text-sm text-gray-300 leading-relaxed">{a.summary}</p>
        <div className="mt-3 text-xs text-gray-400">
          그룹: {a.group} · 등급: <span className="text-white font-semibold">{a.overallRating}</span> ·
          신뢰도: <span className="text-white font-semibold">{a.confidence}</span> ({a.source})
          {a.scoreDelta != null ? ` · 점수변화 Δ ${a.scoreDelta >= 0 ? "+" : ""}${a.scoreDelta.toFixed(2)}` : ""}
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-5">
        <Card label="현재가" value={m?.currentPrice ? `$${m.currentPrice.toFixed(2)}` : "-"} />
        <Card label="종합점수" value={a.score.toFixed(1)} />
        <Card label="매수관찰 하단" value={a.targetBuyLow ? `$${a.targetBuyLow}` : "-"} />
        <Card label="매수관찰 상단" value={a.targetBuyHigh ? `$${a.targetBuyHigh}` : "-"} />
      </div>

      <div className="bg-gray-900 rounded-xl border border-gray-800 p-5 mb-5">
        <h2 className="text-sm font-semibold mb-3">핵심 지표 스냅샷</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm">
          <Mini label="매출성장률" value={metric(m?.revenueGrowth, "%")} />
          <Mini label="ROE" value={metric(m?.roe, "%")} />
          <Mini label="순이익률" value={metric(m?.profitMargin, "%")} />
          <Mini label="Forward PE" value={metric(m?.forwardPE)} />
          <Mini label="Trailing PE" value={metric(m?.trailingPE)} />
          <Mini label="52주 범위" value={`${metric(m?.week52Low)} ~ ${metric(m?.week52High)}`} />
        </div>
      </div>

      <div className="bg-gray-900 rounded-xl border border-gray-800 p-5 mb-5">
        <h2 className="text-sm font-semibold mb-3">실적/가이던스 히스토리 (최근 분기)</h2>
        {h.length === 0 ? (
          <div className="text-xs text-gray-500">히스토리 데이터 없음</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-xs">
              <thead>
                <tr className="text-gray-500 border-b border-gray-800">
                  <th className="text-left py-2">분기</th>
                  <th className="text-right py-2">매출(십억$)</th>
                  <th className="text-right py-2">매출 QoQ</th>
                  <th className="text-right py-2">EPS 실제</th>
                  <th className="text-right py-2">EPS 예상</th>
                  <th className="text-right py-2">서프라이즈%</th>
                </tr>
              </thead>
              <tbody>
                {h.map((q, i) => {
                  const prev = i + 1 < h.length ? h[i + 1] : undefined;
                  const delta = qoqDelta(q.revenueB, prev?.revenueB);
                  const deltaColor = delta == null ? "text-gray-500" : delta >= 0 ? "text-emerald-300" : "text-red-300";
                  return (
                    <tr key={q.label} className="border-b border-gray-800/50">
                      <td className="py-2 text-gray-300">{q.label}</td>
                      <td className="py-2 text-right text-gray-200">{q.revenueB == null ? "-" : q.revenueB.toFixed(2)}</td>
                      <td className={`py-2 text-right ${deltaColor}`}>{delta == null ? "-" : `${delta >= 0 ? "+" : ""}${delta.toFixed(1)}%`}</td>
                      <td className="py-2 text-right text-gray-200">{q.epsActual == null ? "-" : q.epsActual.toFixed(2)}</td>
                      <td className="py-2 text-right text-gray-200">{q.epsEstimate == null ? "-" : q.epsEstimate.toFixed(2)}</td>
                      <td className="py-2 text-right text-gray-200">{q.surprisePct == null ? "-" : `${q.surprisePct.toFixed(1)}%`}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>

      <div className="bg-gray-900 rounded-xl border border-gray-800 p-5 mb-5">
        <h2 className="text-sm font-semibold mb-3">자동 코멘트 (실적 흐름 해석)</h2>
        <ul className="text-sm text-gray-300 list-disc pl-4 space-y-2">
          {autoCommentary.map((c) => <li key={c}>{c}</li>)}
        </ul>
      </div>

      <div className="bg-gray-900 rounded-xl border border-gray-800 p-5 mb-5">
        <h2 className="text-sm font-semibold mb-3">다음 분기 체크포인트 (3)</h2>
        <ul className="text-sm text-gray-300 list-disc pl-4 space-y-2">
          {checkpoints.map((c) => <li key={c}>{c}</li>)}
        </ul>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-gray-900 rounded-xl border border-gray-800 p-5">
          <h3 className="text-sm font-semibold text-emerald-300 mb-2 inline-flex items-center gap-2"><CheckCircle2 size={14}/>상방 드라이버</h3>
          <ul className="text-sm text-gray-300 list-disc pl-4 space-y-1">
            {a.keyDrivers.map((d) => <li key={d}>{d}</li>)}
          </ul>
        </div>
        <div className="bg-gray-900 rounded-xl border border-gray-800 p-5">
          <h3 className="text-sm font-semibold text-red-300 mb-2 inline-flex items-center gap-2"><AlertTriangle size={14}/>핵심 리스크</h3>
          <ul className="text-sm text-gray-300 list-disc pl-4 space-y-1">
            {a.keyRisks.map((r) => <li key={r}>{r}</li>)}
          </ul>
        </div>
      </div>
    </div>
  );
}

function Card({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-gray-900 rounded-xl border border-gray-800 p-4">
      <div className="text-xs text-gray-500 mb-1">{label}</div>
      <div className="text-lg font-bold text-white">{value}</div>
    </div>
  );
}

function Mini({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-gray-800 rounded-lg p-3">
      <div className="text-xs text-gray-500 mb-1">{label}</div>
      <div className="text-sm text-white font-semibold">{value}</div>
    </div>
  );
}
