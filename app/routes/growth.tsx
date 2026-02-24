import { Link } from "react-router";
import { ArrowLeft, FlaskConical } from "lucide-react";

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

      <div className="bg-gray-900 rounded-xl p-8 border border-gray-800">
        <div className="flex items-center gap-3 mb-3">
          <FlaskConical size={20} className="text-emerald-400" />
          <h1 className="text-xl font-bold">성장주 분석 페이지 (준비중)</h1>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed">
          배당주(왕족/귀족/배당성장주)와 분리된 성장주 전용 페이지입니다.
          <br />
          성장주 평가지표(예: 매출 성장, 이익률, ROE, 밸류에이션, 모멘텀)는 기준 확정 후 반영할 예정입니다.
        </p>
      </div>
    </div>
  );
}
