import { Link } from "react-router";
import { ArrowLeft, FlaskConical, CheckCircle2 } from "lucide-react";

export function meta() {
  return [{ title: "성장주 분석 (준비중)" }];
}

export default function GrowthPage() {
  return (
    <div className="min-h-screen bg-gray-950 text-white p-6">
      <div className="flex items-center gap-4 mb-8">
        <Link to="/" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm">
          <ArrowLeft size={16} />
          대시보드
        </Link>
      </div>

      <div className="bg-gray-900 rounded-xl p-8 border border-gray-800 mb-6">
        <div className="flex items-center gap-3 mb-3">
          <FlaskConical size={20} className="text-emerald-400" />
          <h1 className="text-xl font-bold">성장주 분석 페이지 (준비중)</h1>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed">
          배당주(왕족/귀족/배당성장주)와 분리된 성장주 전용 페이지입니다.
          <br />
          성장주 평가지표 기준 확정 후 본격 반영할 예정입니다.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ChecklistCard title="성장성" items={["매출 성장률", "EPS 성장률", "가이던스 상향 여부"]} />
        <ChecklistCard title="수익성/퀄리티" items={["ROE", "영업이익률·순이익률", "FCF 전환율"]} />
        <ChecklistCard title="밸류에이션" items={["Forward PER", "PEG", "EV/EBITDA"]} />
        <ChecklistCard title="모멘텀/리스크" items={["52주 위치", "상대강도(RS)", "변동성·드로우다운"]} />
      </div>
    </div>
  );
}

function ChecklistCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="bg-gray-900 rounded-xl border border-gray-800 p-5">
      <h2 className="text-sm font-semibold text-white mb-3">{title}</h2>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item} className="text-sm text-gray-300 flex items-center gap-2">
            <CheckCircle2 size={14} className="text-emerald-400" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
