// 자동 생성 - 성장주 정성/정량 하이브리드 분석
// 마지막 업데이트: 2026-02-26

export interface GrowthAnalysis {
  ticker: string;
  group: "bigtech" | "hyper";
  analyzedAt: string;
  overallRating: "관심" | "관망" | "신중";
  score: number;
  targetBuyLow: number | null;
  targetBuyHigh: number | null;
  summary: string;
  keyDrivers: string[];
  keyRisks: string[];
}

export const growthAnalysisLastUpdated = "2026-02-26";

export const growthAnalyses: GrowthAnalysis[] = [
  { ticker: "NVDA", group: "bigtech", analyzedAt: "2026-02-26 08:55 KST", overallRating: "관심", score: 9.9, targetBuyLow: 181.87, targetBuyHigh: 195.56, summary: "NVIDIA Corporation는 bigtech 유니버스 내 성장 스코어 9.9점으로 평가됩니다. 성장성(10), 수익성(10), 밸류(9.6), 모멘텀(10)를 종합하면 현재 구간은 '관심' 관점이 적절합니다.", keyDrivers: ["매출 성장률이 높아 성장 프리미엄 유지 가능성이 큼", "ROE가 높아 자본 효율성이 우수함", "이익률이 높아 사이클 조정 구간에서도 방어력 기대"], keyRisks: ["거시 환경(금리/유동성) 변화에 따른 변동성 리스크"] },
  { ticker: "TSLA", group: "bigtech", analyzedAt: "2026-02-26 08:55 KST", overallRating: "신중", score: 2.2, targetBuyLow: 313.05, targetBuyHigh: 367.31, summary: "Tesla, Inc.는 bigtech 유니버스 내 성장 스코어 2.2점으로 평가됩니다. 성장성(1.4), 수익성(1.5), 밸류(0), 모멘텀(8.6)를 종합하면 현재 구간은 '신중' 관점이 적절합니다.", keyDrivers: ["핵심 사업 내 장기 구조적 성장 가능성은 유효"], keyRisks: ["밸류에이션 부담이 커 멀티플 압축 리스크 존재", "매출 성장 둔화/역성장 구간으로 기대치 하향 가능"] },
];

export function getGrowthAnalysis(ticker: string): GrowthAnalysis | undefined {
  return growthAnalyses.find(a => a.ticker === ticker);
}
