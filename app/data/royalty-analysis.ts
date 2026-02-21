// 왕족주·귀족주 심층 분석 데이터
// AI 분석 (web 검색 기반) — 투자 조언 아님

export type MoatType = "brand" | "switching_costs" | "network_effect" | "cost_advantage" | "efficient_scale" | "intangible_assets";
export type MoatStrength = "wide" | "narrow" | "none";
export type DividendSafety = "strong" | "moderate" | "watch";
export type OverallRating = "관심" | "보유" | "관망";

export interface StockAnalysis {
  ticker: string;
  analyzedAt: string;          // YYYY-MM-DD HH:mm KST

  // 기업 개요
  businessSummary: string;
  coreProducts: string[];
  geographicPresence: string;

  // 배당 히스토리
  dividendStreakYears: number;
  dividendCAGR5yr: number | null;   // 5년 배당 CAGR (%)
  dividendCAGR10yr: number | null;  // 10년 배당 CAGR (%)
  recentDividendGrowth: string;     // 예: "2024년 $0.56 → $0.60 (+7.1%)"
  dividendSafety: DividendSafety;
  dividendSafetyReason: string;

  // 경제적 해자
  moatTypes: MoatType[];
  moatStrength: MoatStrength;
  moatNarrative: string;

  // 재무 건전성
  revenueGrowthTrend: string;       // 예: "3년 연평균 +4.2%"
  marginTrend: "expanding" | "stable" | "contracting";
  debtLevel: "low" | "moderate" | "high";
  financialSummary: string;

  // 리스크
  keyRisks: string[];

  // 투자 시나리오
  bullCase: string;
  bearCase: string;

  // 밸류에이션
  valuationComment: string;

  // 최근 이슈
  recentDevelopments: string[];

  // 종합 의견
  overallRating: OverallRating;
  ratingReason: string;
  targetBuyPrice: number | null;    // 관심 매수 가격대 (USD)
}

// 분석 데이터 (분석 완료 종목만 포함)
export const stockAnalyses: StockAnalysis[] = [

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // [1/58] KO — Coca-Cola (배당왕족주, 62년 연속)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    ticker: "KO",
    analyzedAt: "2026-02-21 22:30 KST",

    businessSummary:
      "세계 최대 비알코올 음료 기업. 200개 이상의 브랜드를 130개국 이상에서 판매하는 글로벌 소비재 아이콘. 핵심 사업 모델은 '농축액(concentrate) 판매' — 직접 제조·유통하지 않고 독립 보틀링 파트너에게 원액을 공급하는 자산 경량형(asset-light) 구조. 매출 약 $47.9B, 영업이익률 31%로 소비재 업계 최고 수준의 수익성을 유지.",

    coreProducts: [
      "Coca-Cola / Diet Coke",
      "Sprite / Fanta",
      "Minute Maid 주스",
      "Powerade 스포츠드링크",
      "smartwater / Dasani",
      "Fairlife 유제품",
      "Costa Coffee",
    ],

    geographicPresence:
      "북미 40% · EMEA 25% · 아시아태평양 15% · 라틴아메리카 10% · 기타(글로벌벤처, 보틀링투자) 10%",

    dividendStreakYears: 62,
    dividendCAGR5yr: 4.5,
    dividendCAGR10yr: 4.4,
    recentDividendGrowth: "2024년 분기 $0.485 → 2025년 $0.510 (+5.2%) | 연배당 $1.94 → $2.04",
    dividendSafety: "strong",
    dividendSafetyReason:
      "배당성향 67%, FCF $5.3B/yr로 배당 $8.8B 대비 커버리지 충분. 62년 연속 인상으로 불황·팬데믹도 무사히 통과.",

    moatTypes: ["brand", "cost_advantage", "intangible_assets"],
    moatStrength: "wide",
    moatNarrative:
      "130년 넘는 브랜드 역사와 전 세계 거의 모든 소매점에 깔린 유통망(냉장고까지 무상 제공)이 핵심 해자. 연간 $5.1B 광고 지출로 경쟁사의 진입을 차단. 농축액 판매 모델 덕분에 자본 집약도 낮으면서도 독점적 가격 결정권 보유. 펩시코, 몬스터가 유일한 글로벌 경쟁자지만 코카콜라 브랜드의 인지도·선호도는 넘사벽.",

    revenueGrowthTrend: "3년 연평균 +5.6% (인플레 가격 인상 효과 포함)",
    marginTrend: "expanding",
    debtLevel: "high",
    financialSummary:
      "매출총이익률 61%, 영업이익률 31%로 소비재 최고 수준. 그러나 장기부채 약 $38B, 이자비용 $1.6B/yr가 약점. 환율 헤드윈드도 상시 리스크(글로벌 매출 60%가 비달러). 순이익 $10.6B (2024), FCF $4.7B.",

    keyRisks: [
      "고부채: 장기부채 $38B, 금리 인상 시 이자부담 증가",
      "건강 트렌드: 설탕 음료 소비 장기 감소 추세",
      "환율 리스크: 매출 60%가 비달러 통화",
      "프리미엄 밸류에이션: PER 28-30x로 실수 없어야 함",
      "중국·신흥시장 성장 둔화 가능성",
    ],

    bullCase:
      "브랜드 가격 결정권 + 신제품 확장(에너지·커피·건강음료)으로 매출 성장 가속. 개도국 중산층 확대 → 장기 소비 증가. 배당은 어떤 시장 환경에서도 안정적 증가 지속 가능.",

    bearCase:
      "설탕세 확대, Z세대의 탄산음료 이탈 가속 시 핵심 매출 잠식. 고금리 장기화로 부채 리파이낸싱 비용 증가. 현재 밸류에이션은 이미 '완벽한 실행'을 가정 — 단 한 번의 실수도 주가 급락 트리거.",

    valuationComment:
      "현재가 $79.84, PER ~32x. 배당성장주 기준 '적정-약간 고평가' 구간. 고든성장모델 기준 공정가치 $65~$72 (기대수익률 7%, 배당성장 3.5% 가정). 장기 보유 시 '$70 이하'에서 분할 매수가 유리. S&P500 대비 방어적 특성으로 하락장 피난처 역할.",

    recentDevelopments: [
      "FY2025 매출 $47.9B (+1.9%), 순이익 $13.1B (+23.3%) — 비경상 항목 제외 시 안정적",
      "코카콜라 에너지·코카콜라 플러스커피 출시로 신성장 동력 모색",
      "Fairlife(유제품) 인수 후 고성장 유지 중 — 프리미엄 단백질 음료 시장 공략",
      "AI 활용 마케팅 개인화 투자 확대 (특히 디지털 광고)",
      "2024년 분기배당 $0.485 → 2025년 $0.510으로 5.2% 인상 확정",
    ],

    overallRating: "관망",
    ratingReason:
      "코카콜라는 배당 투자자의 '교과서 종목'. 62년 연속 배당 인상, 넓은 해자, 초우량 재무. 그러나 현재 PER 32x는 성장 기대 없이는 비싼 가격. $70 이하에서 매수하면 배당률 2.9%+ 달성하며 장기 보유에 적합. 지금 당장 추격 매수보다는 조정 시 관심 목록 유지 권장.",
    targetBuyPrice: 70,
  },
];

export function getAnalysis(ticker: string): StockAnalysis | undefined {
  return stockAnalyses.find(a => a.ticker === ticker);
}
