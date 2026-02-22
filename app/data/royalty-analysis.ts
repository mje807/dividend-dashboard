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
  // [01] O — Realty Income (배당귀족주, 31년 연속 / 보유 종목)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    ticker: "O",
    analyzedAt: "2026-02-21 23:10 KST",
    businessSummary:
      "미국 최대 상업용 부동산 리츠(REIT). '월세 수입을 월배당으로 돌려주는 회사'라는 모토로 운영. 미국·유럽 11,000개 이상 상업용 부동산 보유 (편의점·약국·달러스토어·극장 등). 임차인의 재산세·보험·유지비를 임차인이 부담하는 '넷리스(Net Lease)' 구조로 운영 리스크 최소화. 1969년 상장 이후 월배당 단 한 번도 삭감 없음.",
    coreProducts: ["상업용 넷리스 부동산", "미국 11,000+ 매장", "유럽(UK·스페인·이탈리아)", "게이밍·데이터센터 다각화"],
    geographicPresence: "미국 84% · 유럽 15% · 기타 1%",
    dividendStreakYears: 31,
    dividendCAGR5yr: 3.1,
    dividendCAGR10yr: 3.8,
    recentDividendGrowth: "2024년 월 $0.263 → 2025년 $0.270 (+2.7%) | 연 $3.156 → $3.24",
    dividendSafety: "strong",
    dividendSafetyReason:
      "REIT 배당성향 300%는 순이익 기준이라 왜곡. 실제는 AFFO(조정 운영현금흐름) 대비 75% 수준 — 안전. 넷리스 구조로 공실 리스크 낮고, 테넌트 분산 잘 됨.",
    moatTypes: ["efficient_scale", "cost_advantage"],
    moatStrength: "wide",
    moatNarrative:
      "1만 1천 개 부동산 포트폴리오는 하루아침에 복제 불가. 규모의 경제로 자금조달 비용 업계 최저 수준 유지. S&P 500 편입 REIT 중 가장 높은 신용등급(A3/A-) 보유. '월배당 주식(Monthly Dividend Company)'이라는 강력한 브랜드로 개인 투자자 수요 항시 견고.",
    revenueGrowthTrend: "3년 연평균 +25% (Spirit Realty 인수 포함), 유기적 성장 4~5%",
    marginTrend: "stable",
    debtLevel: "moderate",
    financialSummary:
      "REIT는 순이익보다 AFFO가 핵심. 2024년 AFFO/share $4.17 수준, P/AFFO ~16x (역사적 평균 15~20x → 적정). D/E 74 수준은 REIT치고 건전. 유럽 확장·게이밍 시설 투자로 성장 다각화 진행 중.",
    keyRisks: [
      "금리 민감성: 장기채 금리 상승 시 배당 매력 상대적 감소 → 주가 압박",
      "테넌트 리스크: 달러스토어(Dollar General, Dollar Tree) 실적 부진 시 임대 연장 협상력 약화",
      "유럽 환율 리스크: EUR/GBP → USD 환산 손실 가능",
      "성장 둔화: 공격적 인수 이후 유기적 성장률 3~4%로 제한적",
    ],
    bullCase:
      "금리 인하 사이클 진입 시 리츠 전반 리레이팅. 유럽·게이밍·데이터센터 포트폴리오 다각화로 2025~2027 AFFO 성장 가속. 인플레 연동 임대 계약 구조로 실질 배당 가치 방어.",
    bearCase:
      "'고금리 장기화(Higher for Longer)' 시나리오에서 P/AFFO 압축 → 주가 $55~58 재테스트 가능. 미국 소매업 구조적 쇠퇴가 계속되면 공실률 상승 위험.",
    valuationComment:
      "현재가 $66.14 = P/AFFO 약 15.8x. 역사적 평균(17~18x) 대비 10% 가량 할인. 수율 4.90% vs 5년 평균 4.99% — 거의 공정가치. **$60~63 구간이 이상적 매수 구간** (수율 5.1~5.4%, P/AFFO 14~15x). 지금 당장 추가 매수보다는 금리 상황 지켜보며 하락 시 분할 매수 권장.",
    recentDevelopments: [
      "2024년 Spirit Realty 합병 완료 → 미국 최대 넷리스 REIT 지위 공고화",
      "유럽 사업 확대: 이탈리아 시장 진출, 영국·스페인 포트폴리오 성장 중",
      "Wynn 게이밍 시설 임대 계약 체결 → 게이밍 섹터 첫 진출",
      "2026년 2월 월배당 $0.270 확정 → 다음 배당락일 2026-02-27",
    ],
    overallRating: "보유",
    ratingReason:
      "현재 보유하고 있다면 유지가 맞다. 월배당 + 넓은 해자 + 안정적 AFFO 성장의 조합은 배당 투자자의 핵심 자산. 다만 지금 가격($66)은 공정가치권 — 추가 매수는 $62 이하에서 노리는 게 좋다.",
    targetBuyPrice: 62,
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // [02] TGT — Target (배당귀족주, 52년 연속 / 보유 종목)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    ticker: "TGT",
    analyzedAt: "2026-02-21 23:10 KST",
    businessSummary:
      "미국 2위 할인 소매 체인 (1위 Walmart). 1,900개 이상 매장 운영. 의류·가정용품·식품 등 중간급 소비자 대상 '저렴하지만 세련된' 포지셔닝이 핵심. 온라인+오프라인 연동(BOPIS, Same-Day Delivery) 강화 중. 자체 브랜드(Owned Brand) 비중 33%로 마진 방어.",
    coreProducts: ["의류·액세서리 (Threshold, A New Day)", "가정용품·가전", "식품·음료", "뷰티·헬스", "전자제품·엔터테인먼트"],
    geographicPresence: "미국 100% (국내 전용)",
    dividendStreakYears: 52,
    dividendCAGR5yr: 13.5,
    dividendCAGR10yr: 11.8,
    recentDividendGrowth: "2024년 $1.10/분기 → 2025년 유지 (성장 일시 정체)",
    dividendSafety: "strong",
    dividendSafetyReason:
      "배당성향 54.55%, FCF 충분. 52년 연속 인상 트랙레코드. 현 실적 압박에도 배당 삭감 가능성 극히 낮음.",
    moatTypes: ["brand", "cost_advantage"],
    moatStrength: "narrow",
    moatNarrative:
      "'싸지만 세련된' 차별화는 Walmart(순수 저가)·Amazon(편의성)과 다른 포지션. 자체 브랜드 33%로 마진 방어력 보유. 단, 아마존/월마트 대비 규모에서 열위 — 해자는 '좁음'. 저소득층보다 중간층 타깃이라 경기 침체에 더 취약.",
    revenueGrowthTrend: "최근 3년 정체 (코로나 특수 이후 정상화, 2022 재고 쇼크)",
    marginTrend: "contracting",
    debtLevel: "moderate",
    financialSummary:
      "ROE 25.09% — 우수. 하지만 2022년 재고 과잉→마진 급락 충격이 아직 완전히 회복 안 됨. 영업이익률 4~5% (Walmart 4%, Amazon 5% 수준). 디지털 채널 투자 증가로 단기 비용 압박 지속.",
    keyRisks: [
      "아마존·월마트의 공격적 가격 전략 → Target 시장점유율 잠식",
      "소비 양극화: 중산층 이탈 → 저가(달러스토어)·고가(Costco)로 이동",
      "높은 재고 리스크: 2022년 재고 쇼크 반복 가능성",
      "디지털 전환 투자 부담 vs 전통 소매 마진 구조",
      "애널리스트 목표가 $103 = 현재가보다 낮음 → 단기 주가 압박 시사",
    ],
    bullCase:
      "PE 14.14x는 역사적 저점 수준. 배당수율 3.91% (5년 평균 2.83% 대비 +1.08%) = 강한 저평가 신호. 마진 회복+재고 정상화 시 EPS 반등 가능. 자사주 매입 지속으로 주당 가치 상승. 3~5년 장기 보유 시 상당한 총수익(배당+주가) 기대.",
    bearCase:
      "소비 둔화 + 경쟁 심화가 복합되면 마진 회복 지연. 애널리스트 컨센서스 목표 $103 = 현재가 $116보다 낮아 단기 하락 압력 존재. Walmart의 온라인 가속이 TGT 고객을 지속 잠식할 경우 구조적 문제.",
    valuationComment:
      "PE 14.14x, 배당수율 3.91% — 정량적으로는 매력적인 저평가 구간. 하지만 애널리스트 컨센서스 목표가가 현재가보다 낮다는 점이 경고 신호. **단기 트레이딩보다 3~5년 관점의 분할 매수 접근 권장.** $105~110 이하로 하락 시 추가 매수 구간으로 적합.",
    recentDevelopments: [
      "2025 FY 가이던스 EPS $8.30~8.90 (시장 기대 하회) → 주가 조정",
      "자체 브랜드(Owned Brand) 강화로 마진 방어 전략 지속",
      "Same-Day Delivery 서비스 확대 — 디지털 침투율 업그레이드 중",
      "소비자 신뢰지수 하락 + 관세 불확실성으로 단기 실적 전망 흐림",
    ],
    overallRating: "관심",
    ratingReason:
      "PE 14x에 4% 배당률은 52년 배당왕족주로선 역사적 저평가. 지금 보유 중이라면 유지, 추가 매수는 $110 이하에서 분할 접근. 단기 실적 불확실성 있으나 장기 배당 투자 관점에서 매력적.",
    targetBuyPrice: 110,
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // [03] IBM — (배당귀족주, 30년 연속)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    ticker: "IBM",
    analyzedAt: "2026-02-21 23:10 KST",
    businessSummary:
      "클라우드·AI 중심으로 전환 중인 100년 역사의 IT 기업. 2019년 Red Hat 인수(340억 달러)로 하이브리드 클라우드 전략 전환. 2021년 인프라 사업(Kyndryl) 분사 → 고마진 소프트웨어·컨설팅 집중. Watson AI → watsonx 브랜드로 기업용 AI 시장 공략. 2024년 하시코프(HashiCorp) 인수로 IT 자동화 강화.",
    coreProducts: ["Red Hat (하이브리드 클라우드)", "watsonx (기업용 AI)", "IBM 컨설팅", "z시리즈 메인프레임", "IBM 클라우드"],
    geographicPresence: "북미 45% · 유럽 30% · 아시아태평양 15% · 기타 10%",
    dividendStreakYears: 30,
    dividendCAGR5yr: 2.0,
    dividendCAGR10yr: 3.1,
    recentDividendGrowth: "2025년 $1.67/분기 → $1.68 (+0.6%) — 소폭 인상 유지",
    dividendSafety: "strong",
    dividendSafetyReason:
      "배당성향 60%, FCF $12B+ 수준으로 배당 $6.5B 대비 여유 있음. 전환 기간 동안에도 배당 지속 인상.",
    moatTypes: ["switching_costs", "intangible_assets", "brand"],
    moatStrength: "narrow",
    moatNarrative:
      "Red Hat의 엔터프라이즈 오픈소스 생태계 + IBM 메인프레임의 금융·정부 고객 전환비용이 핵심 해자. 한번 IBM 메인프레임을 쓰는 은행은 교체 비용이 수천억이라 사실상 잠금(lock-in). 하지만 클라우드 시장에서 AWS·Azure·GCP 대비 점유율 열위는 약점.",
    revenueGrowthTrend: "3년 연평균 +3~5% (소프트웨어 부문 +7%, 컨설팅 정체)",
    marginTrend: "expanding",
    debtLevel: "high",
    financialSummary:
      "ROE 35.16% — 우수. 그러나 D/E 197로 부채 부담 상당. Red Hat·HashiCorp 인수 비용. 소프트웨어 마진(~75%) 확대로 전체 마진 개선 추세. Forward PE 19.16x — AI/클라우드 전환 감안 시 합리적.",
    keyRisks: [
      "AI 시장에서 Microsoft(Azure+OpenAI), Google(Gemini) 대비 열위",
      "컨설팅 부문 성장 정체 — 자동화로 인력 수요 감소",
      "높은 부채: Red Hat + HashiCorp 인수 후 레버리지 부담",
      "수율 시그널 오해: 5년 평균 수율 4.06%는 구(舊) IBM 고배당 시절 포함 → 현재 저수율이 '비싸다'는 의미 아님",
    ],
    bullCase:
      "watsonx AI + Red Hat 하이브리드 클라우드 수요 가속. 기업 AI 도입 본격화 → IBM 컨설팅 수혜. HashiCorp 인수로 인프라 자동화 시장 선점. 애널리스트 목표 $324.95 = 현재 대비 **+26.4% 상승여력** — 월가에서도 저평가 인식.",
    bearCase:
      "AI 시장은 빠르게 움직이는데 IBM의 실행력이 따라가지 못할 경우 리레이팅 실패. 컨설팅 부문이 AI 자동화의 역설적 피해자가 될 수 있음.",
    valuationComment:
      "수율 2.61% vs 5년 평균 4.06% = -1.45% 차이 → 얼핏 고평가 신호처럼 보이지만, 이는 오해. IBM이 과거 배당 극대화→저성장 전략에서 성장 투자 전략으로 전환하며 배당 성장률을 의도적으로 낮췄기 때문. **실제 밸류에이션은 52주 저점 38.6% 근처 + Forward PE 19x + 애널리스트 26% 상승여력으로 오히려 저평가 구간.** $240~250 구간이 이상적 매수 범위.",
    recentDevelopments: [
      "HashiCorp 인수 완료 (2024) → IT 인프라 자동화 역량 대폭 강화",
      "2025년 watsonx 기업 고객 1,000사 돌파",
      "z17 메인프레임 출시 예정 → 금융·정부 고객 업그레이드 사이클",
      "AI 관련 신규 계약 $1B+ 분기별 수주 지속",
    ],
    overallRating: "관심",
    ratingReason:
      "52주 저점 근처 + 애널리스트 26% 상승여력 + Forward PE 19x는 매력적인 조합. 배당수율 2.61%는 낮아 보이지만 성장 재투자 중. $245 이하 분할 매수 관심 구간. AI 전환 성공 시 3년 내 $300+ 목표.",
    targetBuyPrice: 245,
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // [04] PG — Procter & Gamble (배당왕족주, 68년 연속)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    ticker: "PG",
    analyzedAt: "2026-02-21 23:10 KST",
    businessSummary:
      "세계 최대 소비재 기업. Tide, Pampers, Gillette, Oral-B, Head&Shoulders 등 65개 브랜드 운영. '선택과 집중' 전략으로 2014~2019년 100개 이상 브랜드 정리 → 고마진 10개 카테고리 집중. 프리미엄화 전략: 단순 볼륨 성장 아닌 가격 인상으로 매출·이익 동반 성장.",
    coreProducts: ["Tide/Ariel (세탁)", "Pampers (기저귀)", "Gillette/Venus (면도)", "Oral-B/Crest (구강)", "SK-II/Olay (스킨케어)"],
    geographicPresence: "북미 45% · 유럽 20% · 아시아태평양 20% · 개도국 15%",
    dividendStreakYears: 68,
    dividendCAGR5yr: 6.0,
    dividendCAGR10yr: 5.3,
    recentDividendGrowth: "2024년 $0.9408/분기 → 2025년 $1.0065 (+7.0%) | 연 $3.76 → $4.03",
    dividendSafety: "strong",
    dividendSafetyReason:
      "배당성향 62%, FCF $14B+로 배당 $9B 완벽 커버. 68년 무결점 트랙레코드.",
    moatTypes: ["brand", "cost_advantage", "intangible_assets"],
    moatStrength: "wide",
    moatNarrative:
      "전 세계 소매점 매대 최우선 위치 확보, 65개 주요 브랜드의 소비자 신뢰도, 연간 $7B 규모 R&D+마케팅 투자가 해자를 형성. 가격을 올려도 소비자가 계속 사는 것이 브랜드 파워의 증거. 프리미엄화 전략으로 volume 없이 value만 키우는 성숙 성장 모델.",
    revenueGrowthTrend: "3년 연평균 +5~7% (주로 가격 인상 기여)",
    marginTrend: "expanding",
    debtLevel: "low",
    financialSummary:
      "ROE 31.56% — 우수. D/E 68.72 — 안전 수준. 영업이익률 20%+, 순이익률 18%+. 자사주 매입 $5~7B/yr. 매출 $84B → 글로벌 필수소비재 1위.",
    keyRisks: [
      "신흥국 통화 약세: 매출 55%가 비달러 → 환율 영향 상시 존재",
      "중국 소비 둔화: 아시아 매출 20%를 차지, 중국 경기 민감",
      "프리미엄 피로: 소비자 가격 저항 강화 시 볼륨 감소 가능",
      "Private Label 강화: 유통업체 자체 브랜드의 점유율 잠식",
    ],
    bullCase:
      "신흥국 중산층 확대 → 위생·가정용품 소비 장기 성장. AI 마케팅·SCM 최적화로 비용 구조 개선. 68년 배당 인상 트랙레코드 → 어떤 시장 환경에서도 배당 안정성 최고 등급.",
    bearCase:
      "현재 52주 위치 54.7%로 중간대이지만, 중국 경기 둔화 + 환율 역풍 지속 시 성장 모멘텀 약화. 프리미엄 가격 전략의 한계점 도달 가능.",
    valuationComment:
      "수율 2.63% vs 5년 평균 2.45% (+0.18%) — 살짝 저평가 신호. PE 23.82x — 소비재 프리미엄 감안 시 적정. 52주 중간대(54.7%), 애널리스트 +4.5% upside. **종합적으로 공정가치 근처. $155 이하가 더 좋은 진입점이지만, 장기 보유 목적이라면 지금도 나쁘지 않다.**",
    recentDevelopments: [
      "2025 FY 유기적 성장 3~5% 가이던스 제시 (가격 인상 둔화, 볼륨으로 보완)",
      "SK-II (중국 럭셔리 스킨케어) 부진 지속 → 중국 소비 회복 기다리는 중",
      "Gillette 면도 구독 서비스 확대 → 반복 매출 모델 강화",
      "AI 공급망 최적화 도입으로 재고 비용 8% 절감 발표",
    ],
    overallRating: "보유",
    ratingReason:
      "배당 투자자의 필수 보유 종목. 지금 당장 폭발적 수익보다는 '잘 자는 동안 배당이 자라는' 컴파운더. 68년 연속 인상이라는 사실 자체가 포트폴리오 앵커 역할. $155 이하 시 적극 매수.",
    targetBuyPrice: 155,
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // [05] JNJ — Johnson & Johnson (배당왕족주, 62년 연속)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    ticker: "JNJ",
    analyzedAt: "2026-02-21 23:10 KST",
    businessSummary:
      "2023년 Kenvue(소비자 부문: Tylenol, Band-Aid, Neutrogena) 분사 후 **순수 제약·의료기기** 기업으로 재편. 현재 세계 2위 제약사이자 1위 의료기기 기업. 혁신 의약품(Darzalex·Erleada·Tremfya)과 수술 로봇·정형외과 기기가 양대 축. 연구개발 집중 → 파이프라인 강화 중.",
    coreProducts: ["Darzalex (다발성골수종)", "Erleada (전립선암)", "Tremfya (건선)", "Depuy Synthes (정형외과기기)", "수술 로봇 플랫폼"],
    geographicPresence: "미국 55% · 유럽 25% · 아시아태평양 12% · 기타 8%",
    dividendStreakYears: 62,
    dividendCAGR5yr: 5.8,
    dividendCAGR10yr: 6.1,
    recentDividendGrowth: "2024년 $1.19/분기 → 2025년 $1.24 (+4.2%)",
    dividendSafety: "strong",
    dividendSafetyReason:
      "배당성향 46.6%, 순이익 $22B+로 배당 $10B 완벽 커버. 62년 연속 인상 — 전쟁·경기침체·소송도 막지 못함.",
    moatTypes: ["intangible_assets", "switching_costs"],
    moatStrength: "wide",
    moatNarrative:
      "특허 약품의 독점 판매권(10~20년) + 의료기기의 외과의 훈련 장벽이 이중 해자. 한번 외과의가 DePuy 기기로 훈련받으면 경쟁사 기기로 쉽게 전환 안 함. 제약 파이프라인: 임상 3상 21개 이상 — 특허 만료 리스크 분산.",
    revenueGrowthTrend: "3년 연평균 +4~6% (의약품 +8%, 기기 +5%)",
    marginTrend: "stable",
    debtLevel: "low",
    financialSummary:
      "ROE 35.03% — 업계 최상급. D/E 60.5 — 제약사 기준 양호. 순이익률 22%+. Kenvue 분사 후 포트폴리오 고마진화.",
    keyRisks: [
      "탈크 소송 (Baby Powder): 약 10만 건 소송 합의 진행 중 → 최종 비용 불확실",
      "약가 인하 압력: 미국 IRA법 약가협상 대상 약품 증가",
      "특허 만료: 2025~2027년 일부 주력 약품 특허 만료",
      "수율 -0.64% (5년 평균 대비) = 수율 기준 고평가, 52주 고점 근처 (95.8%)",
    ],
    bullCase:
      "Darzalex 매출 $100억 도달 임박. 수술 로봇 시장 진입 본격화. Kenvue 분사 후 순수 제약 멀티플 확장 가능. 파이프라인 20개+ 임상 3상 중 → 차세대 블록버스터 기대.",
    bearCase:
      "탈크 소송 합의 비용이 예상($8B) 초과 시 단기 주가 충격. IRA 약가 인하 + 특허 만료 이중 타격. 현재 52주 고점 근처(95.8%) + 애널리스트 목표가 $232 = 현재가 $242보다 낮음.",
    valuationComment:
      "수율 2.14% vs 5년 평균 2.78% (-0.64%) = 수율 기준 고평가. 52주 95.8% 위치 + 애널리스트 목표 $232.5 (현재 $242.5보다 낮음) = **현재 시점에서 매수 매력도 낮음.** $220~230 구간 (수율 2.5%+, PE 19x 이하)에서 진입이 훨씬 합리적.",
    recentDevelopments: [
      "탈크 소송 10만 건 일괄 합의 추진 중 ($6.5~9B 예상 비용)",
      "Darzalex FY2024 매출 $11.5B 돌파 — JNJ 최대 단일 제품",
      "수술 로봇 Ottava 플랫폼 임상 데이터 긍정적 → 2026년 출시 예상",
      "IRA 약가 협상 대상 약품에 Stelara 포함 → 2026년부터 가격 인하",
    ],
    overallRating: "관망",
    ratingReason:
      "최우량 배당 왕족주지만 현재가는 부담스럽다. 탈크 소송 + 수율 고평가 + 52주 고점권. $225 이하에서 기다리는 게 현명. 지금 보유 중이라면 유지, 신규 매수는 조정 대기.",
    targetBuyPrice: 225,
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // [06] WMT — Walmart (배당귀족주, 51년 연속)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    ticker: "WMT",
    analyzedAt: "2026-02-21 23:10 KST",
    businessSummary:
      "세계 최대 소매기업. 미국 4,600개 + 해외 5,200개 매장. 최근 '유통 → 테크·광고 기업'으로 리레이팅 진행 중. Walmart Connect(광고 플랫폼) + 멤버십(Walmart+) + Flipkart(인도) + PhonePe가 새 성장 축. 광고 수익 2024년 $4.4B — 소매 마진보다 훨씬 높음.",
    coreProducts: ["미국 Sam's Club·Walmart 매장", "Walmart+ 멤버십", "Walmart Connect (광고 플랫폼)", "Flipkart (인도 이커머스)", "PhonePe (인도 핀테크)"],
    geographicPresence: "미국 65% · 인도(Flipkart) 10% · 중남미 15% · 기타 10%",
    dividendStreakYears: 51,
    dividendCAGR5yr: 1.9,
    dividendCAGR10yr: 2.0,
    recentDividendGrowth: "2025년 연 $0.83 → $0.94 (+13.2%) — 최근 대폭 인상",
    dividendSafety: "strong",
    dividendSafetyReason:
      "배당성향 34.43% — 매우 낮음. FCF 풍부. 배당보다 성장 재투자 우선이라 배당 안정성은 최고 등급.",
    moatTypes: ["cost_advantage", "efficient_scale", "network_effect"],
    moatStrength: "wide",
    moatNarrative:
      "규모의 경제: 세계 최대 구매력으로 어떤 공급업체도 WMT 앞에선 가격 협상 열위. 전국 4,600개 매장 = 즉배달 인프라로 아마존과 동등한 라스트마일. Walmart+ 멤버십 4,400만 명 → 광고·구독 수익 플라이휠 구축 중.",
    revenueGrowthTrend: "3년 연평균 +5~6% (광고·멤버십 고성장)",
    marginTrend: "expanding",
    debtLevel: "low",
    financialSummary:
      "ROE 21.85% — 소매업치고 우수. D/E 63.19 — 안전. PE 45x는 비싸 보이지만 광고·테크 수익 반영 시 적정. 애널리스트 strong_buy, 목표 $134.44 (+9.3%).",
    keyRisks: [
      "고PE 45x: 성장 기대가 이미 많이 반영 — 어닝 미스 시 급락 위험",
      "수율 0.8% vs 5년 평균 1.32%: 배당 투자자 관점에서 매력 없음",
      "아마존과의 경쟁: 온라인 침투율 경쟁 지속",
      "인플레 완화 시 가격 인하 압력 → 마진 축소 가능",
    ],
    bullCase:
      "Walmart Connect 광고 수익 연 +20%+ 성장 → 고마진 수익 비중 확대. Flipkart IPO 시 인도 사업 밸류에이션 독립 평가. Walmart+ 멤버십 Amazon Prime처럼 스티키한 수익원으로 자리잡는 중. strong_buy 컨센서스 + 9.3% 상승여력.",
    bearCase:
      "배당 투자자 관점에서 0.8% 수율 + PE 45x = 부적합. 성장주로 리레이팅됐지만 소매 기반 사업 특성상 리세션 시 노출도 큼.",
    valuationComment:
      "**배당 투자 목적이라면 WMT은 적합하지 않다** (수율 0.8%). 그러나 성장+배당 하이브리드 관점에서는 Walmart의 광고/멤버십 전환 스토리가 매력적. strong_buy + 9.3% upside는 투자 가치 있음을 시사. 배당 재투자(DRIP) 전략보다 성장주 관점으로 접근할 것.",
    recentDevelopments: [
      "Vizio 인수 완료 (2024, $2.3B) → 스마트TV 광고 인벤토리 확보",
      "FY2025 광고 수익 $4.4B (+27%) — 고마진 수익원 고성장",
      "Walmart+ 가입자 2025년 5,000만 명 목표",
      "관세 리스크: 중국산 수입품 의존도 높아 관세 영향 주시 필요",
    ],
    overallRating: "관망",
    ratingReason:
      "배당주로는 부적합. 성장주로는 흥미롭지만 현재 PE 45x는 부담. 광고+멤버십 전환이 실적으로 증명되는 것 확인 후 $110 이하에서 진입 고려.",
    targetBuyPrice: 110,
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // [07] MCD — McDonald's (배당귀족주, 48년 연속)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    ticker: "MCD",
    analyzedAt: "2026-02-21 23:10 KST",
    businessSummary:
      "세계 최대 패스트푸드 프랜차이즈. 40,000개 이상 매장 중 95% 프랜차이지 운영 — 직접 운영하지 않아 자본 효율 극대화. 수익 = 로열티(매출의 4~5%) + 임대료(가맹점 부동산 소유). 실제로는 '부동산+로열티' 회사에 가깝다. 디지털화(앱 주문 3억+ 회원)로 CRM·개인화 마케팅 강화 중.",
    coreProducts: ["프랜차이즈 로열티", "부동산 임대 수익", "Big Mac / Quarter Pounder", "McCafe 음료", "McDelivery"],
    geographicPresence: "미국 40% · 국제 운영 40% · 개발도상국 20%",
    dividendStreakYears: 48,
    dividendCAGR5yr: 8.4,
    dividendCAGR10yr: 7.7,
    recentDividendGrowth: "2024년 $1.67/분기 → 2025년 $1.77 (+6.0%)",
    dividendSafety: "strong",
    dividendSafetyReason:
      "배당성향 60%, FCF $8B+ / 배당 $5.2B. 프랜차이즈 모델로 경기 하락에도 로열티 흐름 안정.",
    moatTypes: ["brand", "efficient_scale", "intangible_assets"],
    moatStrength: "wide",
    moatNarrative:
      "전 세계 어느 도시를 가도 같은 맛·경험을 보장하는 브랜드 파워. 40,000개 매장의 부동산 포트폴리오는 대체 불가. 앱 3억+ 회원의 데이터·CRM 자산도 경쟁 우위. 단, D/E 지표가 무의미(자본 잠식 상태) — 이는 적극적 자사주 매입으로 자본 마이너스인 것으로 배당/가치에는 문제없음.",
    revenueGrowthTrend: "3년 연평균 +5~8%",
    marginTrend: "stable",
    debtLevel: "high",
    financialSummary:
      "PBR -131x는 자본 잠식 상태를 반영 — 자사주 매입으로 장부 자본이 마이너스. 이는 재무 건전성 문제가 아니라 주주 환원 극대화 전략. FCF 마진 20%+, 영업이익률 45%+ — 프랜차이즈 모델의 수익성 증거.",
    keyRisks: [
      "소비자 가격 저항: 최근 가격 인상에 대한 고객 이탈(Traffic 감소) 우려",
      "E.coli 사건(2024): 식품 안전 이슈 → 단기 트래픽 충격",
      "인건비 상승: 일부 직영점 노동비 증가",
      "경기 침체 시 고가 경쟁 노출: 저가 경쟁사 대비 상대적 취약",
    ],
    bullCase:
      "디지털 앱 회원 3억명 → 개인화 프로모션으로 트래픽 회복. $5 Value Meal 전략으로 고객 이탈 방어. 개도국 출점 여력 풍부 (인도·아프리카). 배당 3yr CAGR 8% 지속 가능.",
    bearCase:
      "52주 고점권(87.7%) + 수율 5년 평균과 비슷 + PE 27.55x = 지금이 최적 진입점은 아님. E.coli 사건 영향 + 가격 저항이 복합되면 EPS 압박.",
    valuationComment:
      "수율 2.26% vs 5년 평균 2.21% — 공정가치. 52주 87.7% 위치 → 고점 근처. PE 27.55x → 약간 고평가. 애널리스트 +3.5% upside → 상승 여력 제한적. **$300~310 구간(수율 2.5%+, PE 24~25x)이 더 매력적인 진입점.** 프랜차이즈 모델의 장기 복리 능력은 탁월하므로 인내심 있게 조정 기다릴 것.",
    recentDevelopments: [
      "2024년 E.coli 오염 사건 → Q4 미국 트래픽 -1.3% 일시 감소",
      "$5 Value Meal 전략 성공 → 저가 고객 유입, 2025년 확대 예정",
      "AI 드라이브스루 주문 시스템 도입 확대 (IBM·Google 협업)",
      "앱 Active User 3억명 돌파 → 로열티 프로그램 강화",
    ],
    overallRating: "관망",
    ratingReason:
      "최고급 프랜차이즈 모델이지만 현재 가격은 살짝 비싸다. $305 이하 조정 시 관심 종목. 장기 보유하면 배당 + 주가 상승 복리가 강력한 컴파운더.",
    targetBuyPrice: 305,
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // [08] ADP — Automatic Data Processing (배당귀족주, 49년 연속)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    ticker: "ADP",
    analyzedAt: "2026-02-21 23:10 KST",
    businessSummary:
      "세계 최대 HR·페이롤(급여) 아웃소싱 기업. 전 세계 100만 기업 고객, 4,000만 명 직원 급여 처리. 클라우드 기반 HCM(Human Capital Management) SaaS로 전환 완료. 고객이 맡긴 급여 자금을 단기 운용해 이자 수익(float income) 창출 — 금리 상승 시 오히려 수혜.",
    coreProducts: ["ADP Workforce Now (중소기업 HCM)", "ADP Vantage (대기업)", "ADP Global Payroll", "PEO(Professional Employer Organization)", "Float Income (자금 운용 수익)"],
    geographicPresence: "미국 70% · 유럽 20% · 기타 10%",
    dividendStreakYears: 49,
    dividendCAGR5yr: 13.1,
    dividendCAGR10yr: 11.0,
    recentDividendGrowth: "2024년 $1.40/분기 → 2025년 $1.54 (+10.0%)",
    dividendSafety: "strong",
    dividendSafetyReason:
      "배당성향 60.7%, FCF 충분. 49년 연속 인상. HR 소프트웨어 구독 모델로 불황에도 수익 방어.",
    moatTypes: ["switching_costs", "network_effect", "intangible_assets"],
    moatStrength: "wide",
    moatNarrative:
      "페이롤 시스템을 바꾸는 것은 기업에게 엄청난 비용·리스크 — 전환율 극히 낮음(이탈률 <5%). 세무·컴플라이언스 규정이 계속 복잡해지면서 HR 아웃소싱 수요는 증가. 고객 데이터 100만 기업 × 4,000만 직원 = 경쟁자가 복제 불가한 데이터 자산.",
    revenueGrowthTrend: "3년 연평균 +7~9%",
    marginTrend: "expanding",
    debtLevel: "moderate",
    financialSummary:
      "ROE 73.84% — 소프트웨어 기업답게 최상급. 52주 위치 4.8% = **52주 최저점 근처!** 배당수율 3.17% vs 5년 평균 1.97% (+1.2%) = 강한 저평가 시그널. Forward PE 17.93x — 합리적.",
    keyRisks: [
      "AI 위협: Rippling·Gusto 등 AI 네이티브 스타트업의 SMB 시장 잠식",
      "거시경제 둔화: 고용 감소 시 처리 직원 수 감소 → 수익 직접 타격",
      "금리 하락: Float income 감소 (금리 하락 시 역풍)",
      "애널리스트 hold 의견: 왜 hold? → 단기 성장 모멘텀 부재가 이유",
    ],
    bullCase:
      "**가장 매력적인 종목.** 52주 최저점(4.8%) + 배당수율 3.17%(5년 평균 1.97% 대비 +1.2%) + Forward PE 18x + 애널리스트 목표 $278(+29.8% upside) = 모든 지표가 저평가를 가리킴. AI 위협을 받고 있지만 ADP의 컴플라이언스 복잡성·데이터 해자는 AI가 쉽게 대체 못함. 금리 하락 전환 시 float income 감소가 단기 역풍이나 구조적 성장 훼손 아님.",
    bearCase:
      "Rippling 등 AI 네이티브 HR 플랫폼이 '올인원 + 저비용'으로 SMB 이탈 가속. 경기 침체로 고용 감소 → 처리 직원 수 감소 직격탄.",
    valuationComment:
      "**현재 10개 분석 종목 중 가장 매력적인 구간.** 수율+52주위치+Forward PE+애널리스트 목표 4개 시그널 모두 저평가 또는 상승여력 표시. $200~210 구간이 이상적 매수 범위. 장기 배당+성장 하이브리드 투자자에게 최적.",
    recentDevelopments: [
      "ADP Next Gen HCM AI 기능 출시 → generative AI로 HR 업무 자동화",
      "FY2025 매출 성장 +7~8% 가이던스 제시",
      "PEO 부문 고성장 지속 — 소기업의 HR 아웃소싱 수요 증가",
      "주가 최근 조정: AI HR 경쟁 우려로 52주 고점 $298 대비 28% 하락 → 오히려 매수 기회",
    ],
    overallRating: "관심",
    ratingReason:
      "10개 종목 중 밸류에이션 가장 매력적. 52주 저점 + 강한 저평가 수율 시그널 + 애널리스트 29.8% upside. $210 이하 진입 시 3~5년 관점에서 배당+시세 복리 기대. 당장 매수 검토 가치 있음.",
    targetBuyPrice: 210,
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // [09] CVX — Chevron (배당귀족주, 37년 연속)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    ticker: "CVX",
    analyzedAt: "2026-02-21 23:10 KST",
    businessSummary:
      "미국 2위 석유메이저. 원유 생산·정제·판매 수직계열화. 퍼미안 분지 최대 생산자. LNG·수소·탄소포집(CCS) 등 에너지 전환 투자 병행. 2024년 Hess 인수($53B) 진행 — 완료 시 가이아나 초대형 유전 확보.",
    coreProducts: ["원유·천연가스 탐사·생산", "정제·판매 (Chevron, Texaco 주유소)", "LNG (퍼시픽) 수출", "석유화학 제품", "CCS·수소 에너지 전환"],
    geographicPresence: "미국(퍼미안) 40% · 카자흐스탄 15% · 호주 LNG 10% · 기타 35%",
    dividendStreakYears: 37,
    dividendCAGR5yr: 6.4,
    dividendCAGR10yr: 4.8,
    recentDividendGrowth: "2024년 $1.63/분기 → 2025년 $1.71 (+4.9%)",
    dividendSafety: "moderate",
    dividendSafetyReason:
      "배당성향 103% (현재)는 유가 하락 때문. 유가 $70+ 시 FCF로 배당 충당. 배당 삭감은 37년 역사상 없었으나 유가 $50 이하 지속 시 위험.",
    moatTypes: ["cost_advantage", "efficient_scale"],
    moatStrength: "narrow",
    moatNarrative:
      "퍼미안 분지 저원가 생산(손익분기 $35~40/bbl)이 핵심 해자. 에너지 전환 시대에 재생에너지보다 오히려 원가 경쟁력 있는 자원 기업만 생존. CVX는 그 중에서 최상위권. 단, 원유 가격이라는 외부 변수에 전적으로 종속되는 구조적 한계.",
    revenueGrowthTrend: "원유 가격 사이클 연동 — 중장기 유가 전망이 핵심 변수",
    marginTrend: "contracting",
    debtLevel: "low",
    financialSummary:
      "ROE 7.16% — 유가 하락 구간이라 낮음. D/E 21.24 — 에너지 메이저 중 최저 수준 부채. 현재 52주 고점권(95.2%) + 수율 3.87% vs 5yr avg 4.12% → 약간 고평가. Hess 인수 불확실성 해소 후 가이아나 매장량 반영이 중요 이벤트.",
    keyRisks: [
      "원유 가격 하락: $70 이하 지속 시 FCF 압박 → 배당성향 악화",
      "에너지 전환 가속: 장기 화석연료 수요 감소 구조적 위험",
      "Hess 인수 리스크: CNOOC 소송 진행 중 — 가이아나 지분 확보 불확실",
      "지정학: 중동·카자흐스탄 등 고위험 지역 운영",
    ],
    bullCase:
      "Hess 인수 완료 → 가이아나 대형 유전 생산 개시(2025~2030 증산). 유가 $80+ 유지 시 FCF 폭발. 에너지 공급 부족 장기화 시나리오 하에 원자재 슈퍼사이클.",
    bearCase:
      "현재 52주 고점(95.2%), 배당수율 5년 평균 이하 = 지금은 사이클 고점권에 가까움. Hess 인수 불발 시 전략적 타격.",
    valuationComment:
      "에너지 주식은 **사이클 저점에서 사는 것이 정석.** 현재는 52주 고점 근처 + 수율 기준 약간 고평가. 유가 하락 사이클 + CVX 주가 조정 시 ($155~165 구간, 수율 4.2%+) 매수하는 전략이 합리적. 지금 매수보다는 사이클 모니터링 후 매수.",
    recentDevelopments: [
      "Hess 인수 CNOOC 소송 관련 중재 절차 진행 중 (완료 시 가이아나 지분 30% 확보)",
      "퍼미안 분지 생산량 2025년 900,000boe/d 목표",
      "FY2024 자사주 매입 $11.3B — 주주 환원 최대 수준",
      "수소·CCS 프로젝트 투자 $3B (에너지 전환 대비)",
    ],
    overallRating: "관망",
    ratingReason:
      "최고의 에너지 배당주지만 지금은 타이밍이 아니다. 사이클 고점 근처. 유가 하락 + 주가 조정 후 $160 이하에서 진입하는 것이 에너지 주식 투자의 정석.",
    targetBuyPrice: 160,
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // [10] KMB — Kimberly-Clark (배당귀족주, 52년 연속)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    ticker: "KMB",
    analyzedAt: "2026-02-21 23:10 KST",
    businessSummary:
      "Kleenex·Huggies·Scott·Cottonelle·Depend 등 필수 소비재 브랜드 보유. 개도국 비중 50%+ — 신흥국 중산층 소비 확대의 직접 수혜 기업. 2024년 K-C Professional(산업용 티슈) 분사(Halyard) 완료 → 소비자 브랜드 집중.",
    coreProducts: ["Huggies (기저귀)", "Kleenex (화장지)", "Cottonelle (화장지)", "Depend (성인 요실금)", "Scott (키친타월)"],
    geographicPresence: "북미 47% · 개발도상국 35% · 성숙 시장(유럽·호주) 18%",
    dividendStreakYears: 52,
    dividendCAGR5yr: 3.0,
    dividendCAGR10yr: 4.0,
    recentDividendGrowth: "2024년 $1.22/분기 → 2025년 $1.26 (+3.3%)",
    dividendSafety: "moderate",
    dividendSafetyReason:
      "순이익 기준 배당성향 103% (위험해 보임). 그러나 FCF 기준으로는 70% 수준 — 지급 가능. 단, 부채 극히 높아(D/E 464) 재무 여력 제한적. 배당 삭감 시나리오는 낮지만 0이 아님.",
    moatTypes: ["brand", "intangible_assets"],
    moatStrength: "narrow",
    moatNarrative:
      "Huggies·Kleenex는 카테고리와 동의어가 된 브랜드 (Kleenex = 화장지). 일회용 필수 소비재 특성상 반복 구매 보장. 그러나 P&G·Unilever 대비 브랜드 포트폴리오 깊이 열위, Private Label 경쟁 심화로 해자가 좁아지는 추세.",
    revenueGrowthTrend: "3년 연평균 +2~4% (가격 인상 기여, 볼륨 정체)",
    marginTrend: "contracting",
    debtLevel: "high",
    financialSummary:
      "ROE 126.6% — 극도 높지만 이는 자본 잠식에 가까운 부채 구조 때문 (D/E 464.79). 실질적인 재무 레버리지 위험이 높음. 원재료(펄프·폴리머) 가격 상승 시 마진 직격탄. 현재 52주 위치 23.5% = 저점권.",
    keyRisks: [
      "극도 높은 부채: D/E 464.79 — 금리 상승 시 이자 부담 임계점 가능",
      "원재료 가격 리스크: 펄프·석유 기반 원료 가격 변동성",
      "Private Label 성장: 유통업체 자체 브랜드가 Kleenex·Scott 잠식",
      "배당성향 103% (순이익 기준): FCF 기준 가능하나 재무 여력 협소",
      "애널리스트 hold + 목표 $119 vs 현재 $109 → 한계적 상승여력",
    ],
    bullCase:
      "배당수율 4.7% vs 5년 평균 3.63% (+1.07%) = 강한 저평가 시그널. 52주 23.5% 위치 = 저점권. 목표주가 $119 = +9.3% 상승여력. 개도국 Huggies 성장 가속화 시 볼륨 회복. DDM 적정가 $121.9 = 현재가 대비 +12%.",
    bearCase:
      "D/E 464는 금리 충격에 매우 취약. 마진 압박이 지속되면 배당 성장 중단 또는 삭감 불안. P&G 같은 강력한 브랜드 파워가 없어 장기 해자 약화 우려.",
    valuationComment:
      "**수익 기회와 위험이 공존하는 종목.** 수율 4.7%·52주 저점·DDM 저평가는 매력적. 하지만 D/E 464·마진 압박은 실질 위험. **배당 안정성을 최우선시하는 투자자에게는 부담스러운 부채 구조.** 저변동성 포트폴리오보다 고수익률 추구 투자자에게 적합. $100~105에서 소규모 테스트 포지션 접근.",
    recentDevelopments: [
      "2025년 구조조정 프로그램 발표: $1.5B 비용 절감 목표",
      "K-C Professional 분사 완료 → 소비자 브랜드 집중",
      "Huggies 인도·브라질 성장 가속 — 개도국 기저귀 시장 확대",
      "원재료 비용 안정화로 마진 개선 조짐 (2025 하반기 기대)",
    ],
    overallRating: "관심",
    ratingReason:
      "수율 4.7%·52주 저점·DDM 저평가의 조합은 관심 종목. 단, 고부채 리스크를 인지하고 전체 포트폴리오의 작은 비중으로 접근. $105 이하에서 소량 분할 매수.",
    targetBuyPrice: 105,
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // [11] KO — Coca-Cola (배당왕족주, 62년 연속)
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

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // AWR — American States Water (배당왕족주, 69년 연속)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    ticker: "AWR",
    analyzedAt: "2026-02-22 11:10 KST",
    businessSummary: "American States Water는 자회사 Golden State Water를 통해 캘리포니아 주 약 100만 명에게 수도 서비스를 제공하는 규제 유틸리티 기업이다. Bear Valley Electric Service를 통한 전력 공급과 함께, 미 전국 군사기지에 수도·전력 시스템 운영을 대행하는 계약서비스 부문도 운영한다. 69년 연속 배당 증가라는 압도적 배당 역사로 Dividend King의 상징적 종목이다.",
    coreProducts: [
      "캘리포니아 규제 수도 서비스 (Golden State Water)",
      "캘리포니아 규제 전력 서비스 (Bear Valley Electric)",
      "미군 기지 수도·전력 위탁 운영 계약서비스",
    ],
    geographicPresence: "캘리포니아 중심 약 75% · 미 전국 군사기지 계약 약 25%",
    dividendStreakYears: 69,
    dividendCAGR5yr: 8.5,
    dividendCAGR10yr: 8.0,
    recentDividendGrowth: "3년 CAGR 8.3% 수준의 안정적 성장세 유지, 매년 8~9% 인상 지속",
    dividendSafety: "strong",
    dividendSafetyReason: "배당성향 56.2%로 유틸리티 업종 대비 보수적이며, ROE 13.3%와 69년 연속 증배 이력이 안전성을 뒷받침함",
    moatTypes: [
      "efficient_scale",
      "intangible_assets",
      "switching_costs",
    ],
    moatStrength: "wide",
    moatNarrative: "규제 당국(캘리포니아 PUC)으로부터 부여받은 지역 독점 프랜차이즈가 핵심 해자이며, 경쟁자 진입이 구조적으로 차단된 efficient scale 독점이다. 수도 인프라 교체 비용과 규제 장벽으로 고객 이탈이 사실상 불가능하며, 군사기지 장기 계약은 추가적인 안정적 수익원이자 진입장벽 역할을 한다.",
    revenueGrowthTrend: "캘리포니아 PUC 요금 인상 승인 사이클에 연동한 연 3~5%대 완만하고 예측 가능한 매출 성장",
    marginTrend: "stable",
    debtLevel: "moderate",
    financialSummary: "D/E 89.8은 유틸리티 업종 특성상 전형적인 수준으로 우려보다는 업종 표준으로 봐야 한다. ROE 13.3%는 규제 유틸리티치고 양호하며, 배당성향 56.2%는 업종 평균(60~70%)보다 낮아 배당 지속 여력이 충분하다. 안정적인 규제 수익 구조로 현금흐름 가시성이 높다.",
    keyRisks: [
      "캘리포니아 PUC 요금 심사 지연 또는 요금 인상 불승인 리스크",
      "군사기지 계약 만료 시 갱신 불발 또는 계약 조건 악화",
      "캘리포니아 장기 가뭄·기후변화로 인한 수자원 가용성 감소 및 운영 비용 증가",
    ],
    bullCase: "캘리포니아 PUC의 적극적 요금 인상 승인과 군사기지 계약 확대가 맞물리면 8~9% 배당 CAGR이 지속되며, 현재 역사적 평균 대비 높은 배당수익률(2.76% vs 5년평균 2.00%)이 재평가 기회를 제공한다.",
    bearCase: "금리 장기 고착화 시 유틸리티 섹터 전반의 재평가 압력이 지속되고, 캘리포니아 규제 환경 악화 또는 군사 예산 삭감 시 성장 동력이 약화될 수 있다.",
    valuationComment: "현재 배당수익률 2.76%는 5년 평균 2.00% 대비 뚜렷이 높아 역사적으로 저평가 구간에 진입했음을 시사한다. 52주 하단 25.9% 위치와 Forward PER 19.6배는 유틸리티 섹터 내 절대적 저가는 아니나 상대적 매력도가 개선된 수준이다. 배당수익률 3.0% 기준 적정 매수가는 약 $67로, $65~$70 구간이 장기 적립 관점의 합리적 진입 구간이다.",
    recentDevelopments: [
      "2024년 캘리포니아 PUC 요금 인상 승인으로 수익성 개선 기반 마련",
      "군사기지 물·전력 서비스 계약 포트폴리오 지속 유지로 안정적 비규제 수익 확보",
    ],
    overallRating: "관심",
    ratingReason: "배당수익률이 5년 평균을 40% 이상 상회하며 52주 저점권에 위치, 장기 배당 성장주로 분할 매수 관점의 관심 유지 적합",
    targetBuyPrice: 67,
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // DOV — Dover Corporation (배당왕족주, 68년 연속)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    ticker: "DOV",
    analyzedAt: "2026-02-22 13:00 KST",
    businessSummary: "Dover Corporation은 산업용 펌프·밸브, 열교환기, 청정에너지 주유 장비, 식품 소매 냉장 시스템, 바이오파마 공정 부품 등을 설계·제조하는 고도로 다각화된 산업재 기업이다. 엔지니어드 제품, 청정에너지·연료공급, 이미징·식별, 펌프·공정 솔루션, 기후·지속가능성 기술 등 5개 사업부문을 운영한다. 틈새 산업 시장에서 높은 점유율을 가진 사업부들을 M&A로 지속 확장해 왔다.",
    coreProducts: [
      "산업용 펌프 및 공정 솔루션",
      "청정에너지·주유소 장비 (Tokheim, Wayne)",
      "식품 소매 냉장·열관리 시스템",
    ],
    geographicPresence: "미국 약 55% · 유럽 25% · 아시아태평양 및 기타 20%",
    dividendStreakYears: 68,
    dividendCAGR5yr: 1.5,
    dividendCAGR10yr: 5.2,
    recentDividendGrowth: "최근 3년 배당 CAGR 1.0%로 68년 연속 증가 기록 유지 중이나 성장 속도가 현저히 둔화",
    dividendSafety: "strong",
    dividendSafetyReason: "배당성향 26%로 매우 보수적이며 잉여현금흐름 대비 배당 커버리지가 충분해 삭감 위험 극히 낮음",
    moatTypes: [
      "switching_costs",
      "intangible_assets",
      "cost_advantage",
    ],
    moatStrength: "narrow",
    moatNarrative: "Dover는 틈새 산업 세그먼트에서 고객 맞춤형 엔지니어링 솔루션을 제공해 교체 비용(switching cost)이 높은 시장 지위를 구축했다. 독점 기술·특허 및 수십 년간 축적된 공정 노하우가 진입 장벽을 형성하나, 경쟁사가 많은 산업재 특성상 '광폭(wide)' 해자로 보기는 어렵다. 지속적인 볼트온(Bolt-on) M&A 전략으로 해자를 점진적으로 강화 중이다.",
    revenueGrowthTrend: "2021~2022년 고성장 이후 둔화, 2023~2024년 유기적 성장 정체 및 일부 사업부 수요 약화 국면",
    marginTrend: "stable",
    debtLevel: "moderate",
    financialSummary: "D/E 비율 약 48%(0.48배)로 레버리지는 관리 가능한 수준이며, ROE 15.3%는 자본효율성이 양호함을 시사한다. 배당성향 26%와 안정적 잉여현금흐름으로 재무 유연성이 충분하나, 금리 상승 환경에서 M&A 중심 성장 전략의 자본비용 부담이 다소 증가했다.",
    keyRisks: [
      "산업 경기 사이클 둔화에 따른 수요 감소 및 마진 압박",
      "고금리 환경에서 M&A 통한 성장 전략 실행 비용 상승",
      "청정에너지 전환 가속으로 전통 연료공급 사업부 구조적 역풍",
    ],
    bullCase: "청정에너지·바이오파마 등 성장 사업부 확대와 가격 인상력 회복 시 Forward PER 20배 수준에서 매력적 재가속 성장이 가능하다. 68년 배당 성장 트랙레코드 보유로 방어적 성격도 겸비한다.",
    bearCase: "3년 배당 CAGR 1.0%에 불과해 인플레이션 대비 실질 배당가치가 감소 중이며, 현재 주가가 애널리스트 목표가($226)를 상회하는 상태에서 추가 하락 가능성이 존재한다.",
    valuationComment: "현재가 $233.31은 52주 고점 대비 95.5% 수준으로 이미 고평가 구간에 진입했으며, 배당수익률 0.89%는 5년 평균(1.28%) 대비 크게 낮아 역사적으로 비싼 구간이다. Trailing PER 29.2배는 부담스러우나 Forward PER 20.3배는 합리적이다. 배당수익률이 5년 평균에 근접하는 $185~$200 구간을 적정 매수 타이밍으로 판단하며, $190 이하 진입 시 안전 마진 확보 가능하다.",
    recentDevelopments: [
      "2024년 바이오파마 및 수소연료 관련 청정에너지 사업부 확장 투자 진행",
      "2025년 일부 산업재 수요 부진으로 유기적 성장 목표 하향 조정 우려 대두",
    ],
    overallRating: "관망",
    ratingReason: "52주 고점 부근에서 배당수익률이 역사적 평균 대비 낮고 애널리스트 목표가 하회 상태로, 추가 하락 시 $190 목표가 도달 후 분할 매수 전략이 유효함",
    targetBuyPrice: 190,
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // GPC — Genuine Parts (배당왕족주, 68년 연속)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    ticker: "GPC",
    analyzedAt: "2026-02-22 15:31 KST",
    businessSummary: "GPC(Genuine Parts Company)는 1928년 설립된 글로벌 자동차·산업용 교체 부품 유통 전문기업으로, 미국에서 NAPA Auto Parts 브랜드로 잘 알려져 있습니다. 자동차 부품(Automotive) 및 산업용 부품(Industrial, Motion Industries) 두 세그먼트를 중심으로 북미·유럽·아시아태평양에 걸쳐 광범위한 유통망을 운영합니다. 68년 연속 배당 증가라는 기록이 보여주듯 장기 안정적 현금흐름 창출에 강점을 지닙니다.",
    coreProducts: [
      "NAPA 자동차 교체 부품 유통",
      "Motion Industries 산업용 부품·MRO 유통",
      "EIS 전기·전자 소재 유통",
    ],
    geographicPresence: "북미(미국·캐나다·멕시코) 약 60% · 유럽(독일·영국 등) 약 25% · 아시아태평양(호주·뉴질랜드) 약 15%",
    dividendStreakYears: 68,
    dividendCAGR5yr: 5.9,
    dividendCAGR10yr: 6.2,
    recentDividendGrowth: "2024년 배당을 주당 $4.25(전년 대비 약 5% 인상)로 확대하며 68년 연속 증가 기록 유지",
    dividendSafety: "moderate",
    dividendSafetyReason: "배당성향 70.4%와 D/E 147.2%의 높은 레버리지가 부담이나, 안정적 유통업 현금흐름과 68년 연속 증가 트랙레코드가 지지대 역할",
    moatTypes: [
      "cost_advantage",
      "switching_costs",
      "intangible_assets",
    ],
    moatStrength: "narrow",
    moatNarrative: "NAPA 브랜드와 전국 6,000여 개 유통 거점이 만드는 밀도 높은 물류 네트워크는 경쟁사가 단기간에 복제하기 어려운 비용 우위를 제공합니다. 정비소·딜러십과의 장기 공급 관계 및 EDI 시스템 연동은 고객 전환비용을 높입니다. 다만 아마존·RockAuto 등 이커머스 채널의 부상으로 해자의 두께는 과거 대비 점진적으로 얇아지는 추세입니다.",
    revenueGrowthTrend: "인수(유럽 부품 유통사 등)에 힘입어 외형은 성장했으나 2024년 수요 둔화로 유기적 성장률이 1~2%대로 낮아진 상황",
    marginTrend: "contracting",
    debtLevel: "high",
    financialSummary: "D/E 147%의 높은 부채 부담과 ROE 1.5%라는 이례적으로 낮은 자본효율은 2024년 일회성 구조조정·자산상각 비용이 반영된 결과로 해석됩니다. 영업현금흐름 자체는 연 $1B 이상으로 배당 지급 능력은 유지되고 있으나, 레버리지 축소와 마진 회복이 투자 포인트의 핵심 과제입니다. Forward PER 13.6배는 실적 정상화 기대를 반영하고 있습니다.",
    keyRisks: [
      "전기차(EV) 전환 가속에 따른 자동차 교체 부품 수요 장기 감소 위협",
      "아마존·이커머스 채널 경쟁 심화로 인한 가격 압력과 시장점유율 잠식",
      "높은 D/E와 금리 환경 지속 시 이자 비용 증가 및 재무 유연성 저하",
    ],
    bullCase: "현재 배당수익률 3.60%가 5년 평균(2.68%) 대비 35% 이상 높아 역사적 저평가 구간에 진입했으며, DDM 적정가 $193 대비 38% 이상 할인된 현재가는 장기 배당 투자자에게 매력적인 진입 기회를 제공합니다.",
    bearCase: "EV 보급 가속화와 부품 단순화로 자동차 세그먼트 수요가 구조적으로 감소할 경우, 고부채 상태에서 이익 악화가 겹치면 배당 성장 중단 혹은 감배당 압력이 발생할 수 있습니다.",
    valuationComment: "현재가 $118은 52주 저점 기준 29.5% 수준으로 연중 하단에 위치하며, 배당수익률이 역사적 평균을 크게 웃돌고 있어 밸류에이션 매력도는 높습니다. DDM 적정가 $193, 애널리스트 평균 목표가 $143 모두 현재가 대비 상당한 업사이드를 시사합니다. 다만 ROE와 마진 회복 여부를 확인하면서 $110~$115 구간을 분할 매수 목표 구간으로 설정하는 것이 적절합니다.",
    recentDevelopments: [
      "2024년 하반기 실적 부진 및 연간 가이던스 하향으로 주가가 52주 최저 구간까지 급락",
      "유럽·아시아태평양 자동차 부품 유통사 인수를 통한 글로벌 유통망 확장 지속 추진",
    ],
    overallRating: "관심",
    ratingReason: "역사적 저평가 구간과 높은 배당수익률이 매력적이나, ROE 1.5%·고부채·마진 압박 등 단기 실적 불확실성이 해소될 때까지 분할 접근 권장",
    targetBuyPrice: 112,
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // CINF — Cincinnati Financial (배당왕족주, 63년 연속)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    ticker: "CINF",
    analyzedAt: "2026-02-22 16:00 KST",
    businessSummary: "Cincinnati Financial은 미국 중부 및 남동부를 중심으로 상업용·개인용 재산보험과 상해보험을 제공하는 종합 보험 지주회사다. 독립 대리인 채널을 핵심 배포 전략으로 삼아 장기적 관계 기반 영업을 구축하고 있으며, 생명보험 및 자산운용 부문도 보유하고 있다. 63년 연속 배당 증가라는 탁월한 주주환원 이력을 자랑하는 배당 킹 종목이다.",
    coreProducts: [
      "상업용 재산·상해보험 (Commercial Lines)",
      "개인용 자동차·주택보험 (Personal Lines)",
      "생명보험 및 잉여금 라인 (Cincinnati Life / E&S)",
    ],
    geographicPresence: "미국 집중 약 95% · 해외 5% 미만 (주로 중서부·남동부 주 중심)",
    dividendStreakYears: 63,
    dividendCAGR5yr: 7.2,
    dividendCAGR10yr: 6.1,
    recentDividendGrowth: "2024년 주당 배당금 $3.55로 전년 대비 약 8% 인상, 3년 CAGR 8.0% 유지 중",
    dividendSafety: "strong",
    dividendSafetyReason: "배당성향 22.9%로 극히 낮고, 보험 부문 현금흐름과 투자포트폴리오(주식 비중 높음)가 배당을 넉넉히 커버함",
    moatTypes: [
      "switching_costs",
      "intangible_assets",
      "cost_advantage",
    ],
    moatStrength: "narrow",
    moatNarrative: "독립 대리인과의 장기적 신뢰 관계 및 지역 밀착형 서비스 모델이 핵심 해자다. 63년 배당 연속 증가라는 브랜드 신뢰가 대리인 유치에 프리미엄을 제공하며, 보험업 특성상 고객 전환 비용도 일정 수준 존재한다. 다만 대형 보험사 대비 규모의 경제는 제한적이어서 해자 폭은 좁은 편이다.",
    revenueGrowthTrend: "보험료 수입 및 투자이익 모두 완만한 성장세 유지 중, 2023~2024년 가격 경화 국면에서 수익성 개선",
    marginTrend: "expanding",
    debtLevel: "low",
    financialSummary: "D/E 5.6은 보험사 특유의 레버리지 구조로 일반 제조업 기준과 다르며 업종 내에서는 보수적 수준이다. ROE 16.0%로 자본 효율성이 우수하고 배당성향이 낮아 자본 적립 여력이 충분하다. 투자포트폴리오에 주식 비중이 높아 시장 변동성에 순이익이 크게 흔들릴 수 있으나 장기 배당 지급 능력에는 영향이 없다.",
    keyRisks: [
      "대형 자연재해(허리케인·토네이도 등) 집중으로 인한 보험금 급증 리스크",
      "주식 집중 투자포트폴리오로 인한 시장 급락 시 순이익 변동성 확대",
      "금리 변화에 따른 채권 포트폴리오 평가손실 및 준비금 적정성 이슈",
    ],
    bullCase: "보험료 가격 경화 사이클 지속 시 손해율 개선과 보험료 수입 증가가 동시에 실현되며, 63년 배당 성장 트랙레코드가 장기 복리 투자자에게 안정적 수익을 제공한다.",
    bearCase: "기록적 대형 재해 시즌 또는 주식시장 급락으로 순이익이 급감하면 Forward PER 17.7배 밸류에이션 부담이 부각되며 주가가 52주 고점에서 조정받을 수 있다.",
    valuationComment: "Trailing PER 10.7배는 주식 투자 평가이익 제거 후 정상화 이익 기준이며, Forward PER 17.7배가 실질적 운영 밸류에이션에 가깝다. 현재가 $163는 52주 고점 78% 수준으로 다소 고평가 구간이며, 배당수익률 2.18%도 5년 평균 2.39% 대비 낮다. 적정 매수 구간은 수익률 2.4% 이상, 즉 $148~$153 부근이 유리하다.",
    recentDevelopments: [
      "2024년 연간 배당 8% 인상 발표로 63년 연속 증가 기록 경신",
      "상업용 보험 가격 경화 국면 수혜로 2024년 손해율 개선 및 보험영업이익 증가",
    ],
    overallRating: "관망",
    ratingReason: "배당 킹 지위와 낮은 배당성향으로 장기 보유 매력은 충분하나, 현재가는 52주 고점 근처로 배당수익률이 역사적 평균 하단이어서 추가 조정 시 매수가 유리함",
    targetBuyPrice: 150,
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // LOW — Lowe's (배당왕족주, 62년 연속)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    ticker: "LOW",
    analyzedAt: "2026-02-22 16:30 KST",
    businessSummary: "Lowe's는 미국 최대 홈임프루브먼트 소매업체 중 하나로, 건축 자재·가전·인테리어·조경 제품을 판매한다. 약 1,700개 이상의 매장을 운영하며 DIY 소비자와 전문 시공업자(Pro) 양쪽을 핵심 고객층으로 삼는다. 최근 Pro 고객 비중 확대와 디지털 전환을 통해 수익성 개선에 집중하고 있다.",
    coreProducts: [
      "건축자재 및 인테리어 자재",
      "가전·조명·배관 설비",
      "조경·원예 및 시즌 상품",
    ],
    geographicPresence: "미국 거의 100% (캐나다 철수 후 북미 내수 집중)",
    dividendStreakYears: 62,
    dividendCAGR5yr: 16.8,
    dividendCAGR10yr: 18.5,
    recentDividendGrowth: "2024년 배당 5.1% 인상, 62년 연속 배당 증가로 Dividend King 지위 유지",
    dividendSafety: "strong",
    dividendSafetyReason: "배당성향 38.9%로 충분한 여유가 있으며, 강한 잉여현금흐름이 배당 지속성을 뒷받침함",
    moatTypes: [
      "brand",
      "cost_advantage",
      "switching_costs",
    ],
    moatStrength: "narrow",
    moatNarrative: "Lowe's는 Home Depot과 함께 홈임프루브먼트 양강 구도를 형성하며 강력한 브랜드 인지도와 전국적 매장 네트워크를 보유한다. Pro 고객 대상 전용 프로그램과 대량구매 계약은 일정 수준의 전환비용을 제공한다. 그러나 Home Depot 대비 규모가 작고 순수 온라인 경쟁자와의 경쟁도 지속되어 해자 폭은 협소한 편이다.",
    revenueGrowthTrend: "금리 상승·주택 거래 위축으로 최근 2년 매출 소폭 감소세, 2025년 하반기 회복 기대",
    marginTrend: "stable",
    debtLevel: "high",
    financialSummary: "Lowe's는 적극적인 자사주 매입으로 부채비율이 높고 장부가 기준 자본이 마이너스이지만, 이는 구조적 선택이며 강한 영업현금흐름(연 7~8조원 규모)이 부채 상환 및 배당을 충분히 커버한다. ROE·PBR N/A는 자본잠식이 아닌 자사주 소각 효과로 해석해야 하며, 이익 창출력 자체는 견조하다.",
    keyRisks: [
      "주택 경기 침체 장기화 시 DIY·Pro 수요 동반 부진",
      "금리 고점 지속에 따른 주택 리모델링 투자 지연",
      "Home Depot과의 Pro 고객 유치 경쟁 심화",
    ],
    bullCase: "주택 금리 하락 시 억눌린 리모델링 수요가 폭발적으로 회복되며 실적 재가속이 예상되고, Pro 비중 확대 전략이 안정적인 매출 기반을 강화한다.",
    bearCase: "고금리 환경이 예상보다 길어질 경우 주택 거래 및 리모델링 지출이 추가 위축될 수 있으며, 경쟁 심화 속 마진 방어가 어려워질 수 있다.",
    valuationComment: "현재 PER 23.2배는 역사적 평균 대비 다소 높고, 애널리스트 목표가 $284.25 대비 상승여력이 1.4%에 불과해 단기 매력은 낮다. 52주 고점 대비 85% 수준으로 이미 상당히 회복된 가격대이며, 배당수익률 1.71%도 역사적 평균(1.7~2.0%)의 하단에 위치한다. 배당수익률 2.0% 이상(약 $240~250 구간)에서 분할 매수가 합리적이다.",
    recentDevelopments: [
      "2025년 Pro 고객 전용 디지털 플랫폼 및 공급망 고도화 투자 확대",
      "캐나다 사업 완전 철수 후 미국 내수 수익성 집중 전략 지속",
    ],
    overallRating: "관망",
    ratingReason: "사업 퀄리티와 배당 안전성은 우수하나 현 주가($280)는 밸류에이션 매력이 낮아 $240~250 조정 시 매수 기회를 노리는 것이 유효함",
    targetBuyPrice: 248,
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // LANC — Lancaster Colony (배당왕족주, 62년 연속)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    ticker: "LANC",
    analyzedAt: "2026-02-22 17:00 KST",
    businessSummary: "Lancaster Colony는 오하이오주 웨스터빌에 본사를 둔 특수 식품 기업으로, 소매 및 식품서비스 채널에 샐러드드레싱·소스·냉동빵 등을 공급한다. Marzetti 드레싱, Sister Schubert's 냉동롤, New York Bakery 마늘빵 등의 브랜드를 보유하며, 칙필레·버팔로윙스·올리브가든 등 주요 외식 체인에 라이선스 소스를 공급하는 푸드서비스 사업도 운영한다. 1961년 이후 62년 연속 배당 인상을 달성한 Dividend King 기업이다.",
    coreProducts: [
      "Marzetti 샐러드드레싱·딥소스",
      "Sister Schubert's 냉동 롤·빵",
      "New York Bakery 마늘빵·토스트 / 외식 체인 라이선스 소스(칙필레·BWW 등)",
    ],
    geographicPresence: "미국 95%+ · 캐나다 등 소규모 수출 일부 (실질 내수 중심 기업)",
    dividendStreakYears: 62,
    dividendCAGR5yr: 6.8,
    dividendCAGR10yr: 7.5,
    recentDividendGrowth: "최근 연간 배당 인상률 약 5~8% 수준 유지, 62년 연속 증가 기록 중",
    dividendSafety: "strong",
    dividendSafetyReason: "무차입에 가까운 재무구조와 안정적 현금흐름, 60년 이상 배당 유지 실적이 안전성을 뒷받침함",
    moatTypes: [
      "brand",
      "intangible_assets",
      "cost_advantage",
    ],
    moatStrength: "narrow",
    moatNarrative: "Marzetti·Sister Schubert's 등 소비자 신뢰 브랜드와 외식 체인과의 장기 라이선스 계약이 좁지만 견고한 해자를 형성한다. 다만 식품 섹터 특성상 프라이빗라벨과의 가격 경쟁이 지속적 압박 요인이며, 브랜드 전환 비용이 낮아 와이드 해자 수준은 아니다. 라이선스 소스 사업은 외식 체인과의 관계가 강력한 반복 매출원으로 작용한다.",
    revenueGrowthTrend: "연간 매출 약 4~7% 완만한 성장 추세, 식품서비스 라이선스 채널이 성장 견인",
    marginTrend: "stable",
    debtLevel: "low",
    financialSummary: "Lancaster Colony는 업계에서 드물게 사실상 무차입 상태를 유지하며 강한 자기자본 수익성(ROE ~20%)을 보유한 재무 우량 기업이다. 잉여현금흐름이 풍부하여 배당 인상·설비투자·소규모 인수합병을 자기자금으로 소화한다. 원자재(밀·식용유·포장재) 가격 변동이 단기 마진에 영향을 주지만 장기 수익성은 안정적이다.",
    keyRisks: [
      "원자재(밀·식용유) 가격 급등에 따른 마진 압박",
      "대형 외식 체인 라이선스 계약 종료 또는 축소 리스크",
      "프라이빗라벨 확대로 인한 소매 채널 점유율 잠식",
    ],
    bullCase: "외식 체인 라이선스 소스 채널의 지속 확장과 프리미엄 브랜드 포지셔닝 강화로 마진 개선 시 주가 재평가 가능. 62년 배당 킹 희소성에 따른 프리미엄 밸류에이션 지속.",
    bearCase: "원자재 비용 상승과 프라이빗라벨 경쟁 심화가 동시에 발생할 경우 마진 훼손 및 EPS 역성장 가능. 소규모 시가총액(~$2B)으로 기관 커버리지 부족 시 유동성 위험.",
    valuationComment: "현재 $172대는 역사적 PER 30~35배 상단 영역으로 Dividend King 프리미엄이 반영된 가격이다. 배당수익률 기준 약 2.2~2.3% 수준으로 매력도가 높지 않으며, $150~160 구간($145 이하 시 적극 매수)에서 수익률 2.5% 이상 진입이 더 유리하다.",
    recentDevelopments: [
      "2024~2025년 식품서비스 라이선스 채널(칙필레·BWW 등) 매출 비중 확대로 성장 모멘텀 유지",
      "원자재 비용 정상화 추세로 마진 회복 기대감 형성 중",
    ],
    overallRating: "관망",
    ratingReason: "비즈니스 품질과 배당 안전성은 최상급이나, 현 가격($172)은 Dividend King 프리미엄을 충분히 반영한 수준으로 $155~160 이하 조정 시 매수 적합",
    targetBuyPrice: 158,
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // NDSN — Nordson (배당왕족주, 61년 연속)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    ticker: "NDSN",
    analyzedAt: "2026-02-22 17:45 KST",
    businessSummary: "Nordson은 접착제·코팅·실링·테스트 및 검사 장비를 설계·제조하는 글로벌 정밀 기술 기업으로, 전자·반도체·의료·패키징·산업재 분야 제조업체의 생산 공정 효율화를 지원합니다. 높은 기술 진입 장벽과 반복적 소모품 수익 모델을 기반으로 안정적인 현금흐름을 창출하며, M&A를 통한 포트폴리오 확장 전략을 지속적으로 추진하고 있습니다.",
    coreProducts: [
      "유체 분사 및 디스펜싱 시스템",
      "코팅·접착제 솔루션",
      "테스트 및 검사 장비 (CyberOptics 포함)",
    ],
    geographicPresence: "미국 35% · 유럽 30% · 아시아태평양 30% · 기타 5%",
    dividendStreakYears: 61,
    dividendCAGR5yr: 14.8,
    dividendCAGR10yr: 12.2,
    recentDividendGrowth: "2023년 배당금 $0.78/분기로 약 15% 인상, 61년 연속 증가 기록 유지",
    dividendSafety: "strong",
    dividendSafetyReason: "배당성향 37.1%로 매우 보수적이며, 잉여현금흐름 대비 배당 커버리지가 충분해 61년 연속 증가 지속 가능성 높음",
    moatTypes: [
      "switching_costs",
      "intangible_assets",
      "cost_advantage",
    ],
    moatStrength: "wide",
    moatNarrative: "Nordson 장비는 고객 생산 라인에 깊이 통합되어 교체 비용이 매우 높으며, 수십 년간 축적된 공정 노하우와 특허 기술이 강력한 진입 장벽을 형성합니다. 장비 판매 이후 소모품·유지보수·서비스 반복 수익(After-market Revenue)이 전체 매출의 약 50%를 차지해 경기 방어적 해자를 강화합니다.",
    revenueGrowthTrend: "유기적 성장 연 4~7% + M&A 기반 성장 병행, 반도체·전자 업황 회복 수혜 기대",
    marginTrend: "expanding",
    debtLevel: "moderate",
    financialSummary: "D/E 67%로 관리 가능한 수준의 부채를 유지하며, ROE 17.5%는 자본 효율성이 양호함을 보여줍니다. 2023년 완료된 CyberOptics 인수로 단기 레버리지가 소폭 상승했으나 강한 잉여현금흐름으로 빠른 부채 상환이 예상됩니다.",
    keyRisks: [
      "전자·반도체 설비 투자 사이클 둔화 시 수요 변동성",
      "인수 기업 통합 리스크 및 프리미엄 밸류에이션 부담",
      "글로벌 제조업 경기 침체 시 자본재 지출 축소 노출",
    ],
    bullCase: "반도체·AI 하드웨어 설비 투자 확대 사이클이 본격화될 경우 전자 분야 수요가 급증하며 실적 레버리지 효과가 극대화될 수 있습니다. CyberOptics 검사 장비 시너지가 조기 실현되면 마진 확대와 함께 EPS 상향 조정이 예상됩니다.",
    bearCase: "현재 52주 고점 부근(92.2%)에서 거래 중이며, 애널리스트 목표가 대비 상승여력이 2.7%에 불과해 실망스러운 실적 발표 시 밸류에이션 재평가 압력이 클 수 있습니다. 글로벌 제조업 PMI 둔화가 장기화되면 유기적 성장률이 기대치를 하회할 위험이 있습니다.",
    valuationComment: "Forward PER 23.6배는 고품질 산업재로서 합리적이나, 52주 고점 근처에서의 진입은 안전마진이 부족합니다. 배당수익률 1.13%가 5년 평균(1.06%)을 소폭 상회하지만 매력적인 진입 수준은 아니며, $255~265 구간(yield ~1.25%, Forward PER ~21배)에서 분할 매수가 유리합니다.",
    recentDevelopments: [
      "2023년 CyberOptics 인수 완료 → 반도체 검사 포트폴리오 강화",
      "전자·EV 배터리 분야 접착제 수요 증가로 아시아 매출 비중 확대 추세",
    ],
    overallRating: "관망",
    ratingReason: "61년 배당왕의 탁월한 퀄리티는 인정하나, 현재 52주 고점 근처·애널리스트 목표가 대비 여력 2.7%에 불과해 추가 상승 모멘텀이 제한적이며 $260대 조정 시 매수 기회를 노리는 것이 유리",
    targetBuyPrice: 262,
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // CL — Colgate-Palmolive (배당왕족주, 61년 연속)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    ticker: "CL",
    analyzedAt: "2026-02-22 18:00 KST",
    businessSummary: "콜게이트-팜올리브는 구강관리, 퍼스널케어, 홈케어, 반려동물 영양식품을 전 세계에 판매하는 필수소비재 대기업이다. 콜게이트, 팜올리브, 힐스 펫 뉴트리션 등 강력한 글로벌 브랜드를 보유하며, 특히 신흥국 시장에서 독보적인 점유율을 유지하고 있다. 200개 이상 국가에서 제품을 판매하며 국제 매출 비중이 높은 것이 특징이다.",
    coreProducts: [
      "콜게이트 구강관리 (치약·칫솔·구강청결제)",
      "팜올리브 홈케어·퍼스널케어 (주방세제·샴푸·바디워시)",
      "힐스 펫 뉴트리션 (처방 사료·반려동물 영양식)",
    ],
    geographicPresence: "북미 30% · 라틴아메리카 24% · 아시아·아프리카 18% · 유럽 17% · 힐스(글로벌) 11% — 신흥국 비중이 전체 매출의 약 50%를 차지",
    dividendStreakYears: 61,
    dividendCAGR5yr: 3.8,
    dividendCAGR10yr: 4.2,
    recentDividendGrowth: "2024년 분기 배당 $0.44→$0.47로 약 6.8% 인상, 61년 연속 배당 증가 기록 유지 중",
    dividendSafety: "moderate",
    dividendSafetyReason: "배당성향 78.3%로 다소 높으나 필수소비재 특성상 현금흐름 안정적이며, D/E 2188·PBR 1419는 자사주 매입으로 발생한 음(負)자본 회계 효과로 실제 재정 위기와 무관함",
    moatTypes: [
      "brand",
      "intangible_assets",
      "cost_advantage",
    ],
    moatStrength: "wide",
    moatNarrative: "콜게이트는 신흥국 구강관리 시장에서 전 세계 점유율 약 40%를 보유한 독보적 브랜드 해자를 갖추고 있다. 수십 년간 현지 유통망과 소비자 신뢰를 구축해 경쟁사 진입 장벽이 매우 높다. 힐스의 수의사 처방 채널은 강력한 무형자산 해자로, 반려동물 프리미엄 사료 시장에서 의사-환자 관계에 준하는 전환 비용을 형성하고 있다.",
    revenueGrowthTrend: "가격 인상(pricing) 주도 성장으로 연 4~7% 매출 증가세, 다만 물량(volume) 성장은 다소 부진하며 환율 역풍이 지속적 변수",
    marginTrend: "expanding",
    debtLevel: "high",
    financialSummary: "D/E 2188·PBR 1419·ROE 497%는 수십 년간 공격적 자사주 매입으로 발생한 음(負)자본 효과이며, 실질적 재무 위기 신호가 아니다. 영업현금흐름은 안정적이고 이자보상비율도 양호하나, 절대 부채 규모는 크며 금리 환경 변화 시 이자 부담이 증가할 수 있다. 원자재 비용 정상화와 가격 인상 효과로 영업이익률이 점진적으로 회복 중이다.",
    keyRisks: [
      "신흥국 통화 절하로 인한 환율 역풍 (매출의 ~70%가 달러 외 통화)",
      "원자재(지방·수지·포장재) 가격 변동성으로 마진 압박 가능",
      "P&G·유니레버 등 글로벌 경쟁사의 공격적 마케팅 및 PB(자체브랜드) 잠식",
    ],
    bullCase: "신흥국 중산층 성장에 따른 구강관리·프리미엄 반려동물 식품 수요 확대로 힐스와 콜게이트의 동반 성장이 가속화될 경우 영업레버리지 극대화가 가능하다. 원자재 안정화와 지속적 가격 인상이 맞물리면 마진 확대와 배당 증가 여력이 함께 강화된다.",
    bearCase: "달러 강세 장기화 및 신흥국 경기 침체 시 매출의 절반 이상을 차지하는 해외 부문에서 환산 손실이 확대된다. 배당성향 78%에서 추가 증배 여력이 제한적이며, 프리미엄 배수(Trailing PER 36)가 의미 있게 디레이팅될 경우 자본 손실 위험이 있다.",
    valuationComment: "Trailing PER 36.2는 필수소비재 평균(22~25배) 대비 현저히 고평가이며, Forward PER 22.9도 섹터 평균에 부합하는 수준에 불과하다. 애널리스트 목표가 $96.42로 현재가($95.09) 대비 상승 여력이 1.4%에 그쳐 단기 자본차익 기대가 낮다. 역사적으로 CL은 배당수익률 2.5~3.0% 구간에서 매력적인 매수 기회를 제공했으며, 이를 현재 배당($2.08 기준)에 적용하면 약 $83~86 수준이 합리적 진입 구간이다.",
    recentDevelopments: [
      "2024년 구강관리·힐스 부문 호실적으로 분기 EPS 컨센서스 상회, 연간 이익 가이던스 상향",
      "가격 인상 기조 유지하며 원자재 비용 상승 분을 소비자에게 전가 성공 — 영업이익률 점진 회복 확인",
    ],
    overallRating: "관망",
    ratingReason: "61년 연속 배당 증가의 신뢰도 높은 배당킹이나, 현재가($95)는 역사적 평균 대비 고평가·상승 여력 부재로 추가 하락 시 분할 매수 전략이 적합함",
    targetBuyPrice: 85,
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // HRL — Hormel Foods (배당왕족주, 58년 연속)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    ticker: "HRL",
    analyzedAt: "2026-02-22 18:30 KST",
    businessSummary: "호멜 푸즈는 SPAM, 제니오터키, 애플게이트 등 미국 대표 브랜드를 보유한 필수소비재 식품 기업으로, 냉장·냉동·가공식품 전반을 영위합니다. 소매·외식·국제 채널을 통해 안정적인 매출을 확보하며 58년 연속 배당 성장을 이어온 Dividend King입니다.",
    coreProducts: [
      "SPAM 통조림 및 가공육",
      "제니오터키 칠면조 제품",
      "애플게이트 유기농·자연 육가공품",
    ],
    geographicPresence: "미국 약 88% · 국제(아시아·유럽·중남미 등) 약 12%",
    dividendStreakYears: 58,
    dividendCAGR5yr: 5.2,
    dividendCAGR10yr: 7.8,
    recentDividendGrowth: "최근 배당 증가율이 둔화되어 2023~2024년 연간 약 1~2센트 수준의 소폭 인상에 그침",
    dividendSafety: "watch",
    dividendSafetyReason: "배당성향이 133%로 순이익을 초과하는 상태이며, ROE 6%로 수익성이 낮아 배당 지속 가능성에 단기 우려가 있음",
    moatTypes: [
      "brand",
      "intangible_assets",
      "cost_advantage",
    ],
    moatStrength: "narrow",
    moatNarrative: "SPAM 등 수십 년 역사의 브랜드 자산과 넓은 유통망은 일정 수준의 해자를 제공합니다. 그러나 사모 브랜드(Private Label) 경쟁 심화와 소비자 건강 트렌드 변화로 프리미엄 가격 유지 능력이 약화되고 있습니다. 전반적으로 wide보다는 narrow 수준의 해자로 평가됩니다.",
    revenueGrowthTrend: "인플레이션 수혜가 소멸된 2023년 이후 매출이 정체되거나 소폭 감소하는 추세",
    marginTrend: "contracting",
    debtLevel: "low",
    financialSummary: "D/E 38.2%로 부채 부담은 낮아 재무 구조 자체는 건전합니다. 그러나 ROE 6%와 Trailing PER 28.7배가 보여주듯 수익성 대비 밸류에이션 부담이 있으며, 원재료 비용 상승과 포트폴리오 재편 비용으로 마진이 지속적으로 압박받고 있습니다.",
    keyRisks: [
      "배당성향 133% — 현 이익 수준에서 배당 삭감 또는 동결 리스크",
      "가공육·통조림 기피 트렌드로 인한 핵심 제품군 장기 볼륨 감소",
      "원재료(돼지·칠면조 등) 가격 변동성 및 조류독감 등 공급 리스크",
    ],
    bullCase: "Forward PER 16.1배는 회복 기대를 반영하며, 비용 절감 프로그램과 포트폴리오 구조조정이 성공할 경우 마진 회복과 함께 배당 성장이 재개될 수 있습니다.",
    bearCase: "이익 회복이 지연되면 배당성향 부담이 가중되어 배당 동결 혹은 삭감이 단행될 수 있으며, 이는 주가의 추가 하락을 촉발할 수 있습니다.",
    valuationComment: "현재 배당수익률 4.68%는 5년 평균(3.01%) 대비 역사적 고점 수준으로 표면상 매력적이나, 배당성향 초과·ROE 저하가 핵심 문제입니다. 애널리스트 목표가 $27은 8% 상승에 불과하며, 이익 정상화($1.55~1.60 EPS 회복) 확인 전까지는 분할 매수가 바람직합니다. 매수 적정 구간은 $23~$25로 판단합니다.",
    recentDevelopments: [
      "2024~2025년 구조조정 및 비용 절감 프로그램 추진 중 (Transform & Modernize 이니셔티브)",
      "조류독감(HPAI) 영향으로 칠면조 부문 수익성 악화, 회복 시기 불확실",
    ],
    overallRating: "관망",
    ratingReason: "배당성향 초과와 수익성 부진이 해소되기 전까지는 적극 매수보다 이익 회복 신호를 확인 후 진입하는 것이 유리함",
    targetBuyPrice: 23.0,
  },
];

export function getAnalysis(ticker: string): StockAnalysis | undefined {
  return stockAnalyses.find(a => a.ticker === ticker);
}