import { Link, useParams } from "react-router";
import { ArrowLeft, AlertTriangle, CheckCircle2, LineChart } from "lucide-react";
import { getGrowthAnalysis } from "~/data/growth-analysis";
import { getMetrics } from "~/data/metrics";

export function meta() {
  return [{ title: "성장주 상세 분석" }];
}

function metric(v: number | null | undefined, suffix = "") {
  return v == null ? "-" : `${v.toFixed(1)}${suffix}`;
}

export default function GrowthDetailPage() {
  const { ticker } = useParams();
  const t = (ticker || "").toUpperCase();

  const a = getGrowthAnalysis(t);
  const m = getMetrics(t);

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
