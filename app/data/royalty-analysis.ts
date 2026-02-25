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

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // ABM — ABM Industries (배당왕족주, 56년 연속)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    ticker: "ABM",
    analyzedAt: "2026-02-22 19:00 KST",
    businessSummary: "ABM Industries는 미국 최대 통합 시설 서비스 기업 중 하나로, 청소·위생, 엔지니어링, 주차 운영, 항공 지원, 전기·기계 유지보수 등 B2B 서비스를 제공합니다. 상업용 부동산, 교육기관, 헬스케어, 제조업, 항공사 등 다양한 산업군을 고객으로 보유하며, 장기 서비스 계약 기반의 반복 매출 구조를 갖추고 있습니다.",
    coreProducts: [
      "통합 시설 청소·위생 서비스",
      "전기·기계·HVAC 엔지니어링 유지보수",
      "주차 운영 및 항공 지상 지원 서비스",
    ],
    geographicPresence: "미국 약 92% · 기타(영국·캐나다 등) 약 8% — 내수 중심 사업 구조",
    dividendStreakYears: 56,
    dividendCAGR5yr: null,
    dividendCAGR10yr: null,
    recentDividendGrowth: "3년 배당 CAGR 20.1%로 최근 급격히 성장했으나, 역사적으로는 연 1~3% 수준의 완만한 증가 패턴 유지",
    dividendSafety: "strong",
    dividendSafetyReason: "배당성향 40.9%로 낮고 56년 연속 증배 이력, 안정적인 장기 서비스 계약 기반 현금흐름이 배당을 뒷받침",
    moatTypes: [
      "switching_costs",
      "cost_advantage",
    ],
    moatStrength: "narrow",
    moatNarrative: "ABM의 핵심 해자는 장기 서비스 계약에서 비롯된 전환비용으로, 고객이 시설 서비스 업체를 교체하면 운영 리스크와 비용이 크게 발생해 재계약률이 높습니다. 또한 대규모 인력 풀과 전국 네트워크를 통한 규모의 경제로 중소 경쟁사 대비 비용 우위를 갖추고 있습니다. 다만 진입장벽이 낮은 노동집약적 산업 특성상 해자 폭은 좁은 수준입니다.",
    revenueGrowthTrend: "최근 3년 인수합병 및 항공·기술 부문 확대로 매출 성장세를 유지했으나, 유기적 성장은 저성장(연 2~4%) 구간에 머무는 추세",
    marginTrend: "stable",
    debtLevel: "moderate",
    financialSummary: "D/E 94.8%로 부채 부담이 있으나 시설 서비스 업종 평균 수준이며, 안정적 영업현금흐름으로 감내 가능한 구조입니다. ROE 9.1%는 자본 효율성이 다소 낮지만, 포워드 PER 10.5배는 이익 회복 가능성을 내포하며 배당성향 40.9%로 재무 여력은 충분합니다.",
    keyRisks: [
      "최저임금 인상 및 인건비 상승에 따른 마진 압박",
      "경기 침체 시 기업 고객의 아웃소싱 예산 축소 위험",
      "청소·경비 자동화(로봇·AI) 확산에 따른 장기 수요 구조 변화",
    ],
    bullCase: "포워드 PER 10.5배는 역사적 저평가 구간으로, 이익 정상화 시 밸류에이션 재평가와 함께 애널리스트 목표가($54.67) 수준으로의 20% 상승이 가능합니다. 현재 배당수익률 2.55%가 5년 평균(1.86%)을 크게 웃돌아 기술적으로도 매력적인 진입 시점입니다.",
    bearCase: "노동집약적 사업 모델은 최저임금 인상과 인플레이션에 취약하며, 마진 방어 실패 시 수익성 악화로 주가 추가 하락 및 배당 성장 둔화 가능성이 존재합니다.",
    valuationComment: "트레일링 PER 17.6배는 보통 수준이나 포워드 PER 10.5배는 이익 개선 기대를 반영한 매력적인 수준입니다. 현재 배당수익률이 5년 평균 대비 37% 높고 52주 저점 대비 37% 위치에 있어 분할 매수 시작 구간으로 적합하며, $43~46 구간이 적정 매수 범위로 판단됩니다.",
    recentDevelopments: [
      "2024년 기술 솔루션 및 전기차 충전 인프라 서비스 부문 확장 추진",
      "ABM 2030 전략 하 고마진 엔지니어링·전기 부문 비중 확대로 수익성 개선 도모",
    ],
    overallRating: "관심",
    ratingReason: "56년 배당 킹의 안전한 배당과 포워드 PER 10.5배의 저평가 매력, 20% 애널리스트 상승여력이 결합된 분할 매수 관심 종목",
    targetBuyPrice: 44.0,
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // FRT — Federal Realty REIT (배당왕족주, 56년 연속)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    ticker: "FRT",
    analyzedAt: "2026-02-22 19:30 KST",
    businessSummary: "Federal Realty Investment Trust는 미국 동북부·서해안 고소득 밀집 대도시권의 프라임 입지에 소매·주거·오피스 복합 혼합용도 부동산을 개발·운영하는 리츠다. Pike & Rose(메릴랜드), Santana Row(실리콘밸리) 등 플래그십 혼합용도 단지가 핵심 자산이며, 고소득 소비자 밀집 상권을 기반으로 안정적인 임대 수익을 창출한다. 1962년 이후 56년 연속 배당 증가를 기록하며 S&P 500 내 유일한 리츠 배당 왕(Dividend King) 지위를 보유한다.",
    coreProducts: [
      "프라임 입지 소매 부동산 임대",
      "혼합용도 복합 개발(주거+상업+오피스)",
      "도심 앵커 쇼핑센터 운영 및 자산관리",
    ],
    geographicPresence: "미국 100% (워싱턴 DC·보스턴·필라델피아·샌프란시스코·로스앤젤레스 등 고소득 밀집 대도시권 집중)",
    dividendStreakYears: 56,
    dividendCAGR5yr: 3.2,
    dividendCAGR10yr: 4.5,
    recentDividendGrowth: "3년 CAGR 8.9%로 코로나 침체 이후 배당 성장 회복세, 연배당 $4.49 유지",
    dividendSafety: "moderate",
    dividendSafetyReason: "순이익 기준 배당성향 95.3%는 높으나 REIT 특성상 FFO 기준 배당성향은 70~80% 수준으로 양호하며 56년 연속 증가 이력이 안전성을 뒷받침",
    moatTypes: [
      "efficient_scale",
      "intangible_assets",
      "brand",
    ],
    moatStrength: "narrow",
    moatNarrative: "FRT의 핵심 해자는 고소득 밀집 대도시권 프라임 입지 자산의 선점과 대체 불가능한 위치 경쟁력에 있다. 56년 배당 이력에서 비롯된 브랜드 신뢰와 혼합용도 개발 노하우가 단순 쇼핑센터 리츠 대비 차별화 요소로 작용한다. 다만 e-커머스 위협과 금리 변동성에 노출된 소매 리츠 특성상 광범위한 해자로 분류하기는 어렵다.",
    revenueGrowthTrend: "혼합용도 개발 확장으로 완만한 성장세 유지, 고금리 환경에서 신규 개발 속도 일부 둔화",
    marginTrend: "stable",
    debtLevel: "high",
    financialSummary: "D/E 143.6은 절대 수치로 높으나 레버리지를 핵심 수단으로 삼는 REIT 섹터에서는 업계 평균 수준이다. ROE 12.2%는 리츠 중 상위권으로 자본 효율성이 양호하며, FFO 기준 배당성향은 안정적 범위 내에 있다. 다만 고금리 장기화 시 이자비용 증가와 자본 조달 비용 상승이 재무 부담으로 이어질 수 있다.",
    keyRisks: [
      "고금리 지속에 따른 이자비용 증가 및 부동산 가치 하락",
      "e-커머스 확산·소매업 구조조정으로 인한 임차인 이탈 및 공실 증가",
      "높은 레버리지(D/E 143.6) 구조로 인한 금리 민감도 및 리파이낸싱 리스크",
    ],
    bullCase: "금리 인하 사이클 진입 시 리츠 섹터 전반 재평가와 함께 프라임 입지 자산 가치 상승 가속화 기대. 혼합용도 개발 완공 물량 임대 안정화로 FFO 성장 및 배당 인상 여력 확대 가능.",
    bearCase: "금리 고착화 또는 재상승 시 조달 비용 증가와 Cap Rate 상승으로 자산 가치 및 주가 동반 하락 위험. 소비 둔화로 소매 임차인 수요 감소 시 공실률 상승과 임대료 협상력 약화 우려.",
    valuationComment: "현재가 $107.45는 52주 고점 근처(96.1%)에 위치하여 단기 밸류에이션 부담이 크다. 배당수익률 4.18%는 5년 평균(4.13%)과 거의 동일한 수준으로 역사적 평균 밸류에이션에 해당하며, 할인 매수 기회로 보기 어렵다. 애널리스트 목표가 대비 상승여력도 6.1%에 불과해 추격 매수보다는 배당수익률 4.5~5.0% 수준인 $90~$100 구간 조정 시 분할 매수 전략이 적합하다.",
    recentDevelopments: [
      "2024년 Pike & Rose·Santana Row 혼합용도 단지 추가 임대면적 확장 및 주거 동 개관으로 FFO 성장 기여",
      "2024년 배당을 소폭 인상하며 56년 연속 배당 증가 기록 갱신, S&P 500 리츠 중 유일한 배당 왕 지위 유지",
    ],
    overallRating: "관망",
    ratingReason: "52주 고점 근처(96.1%)에서 상승여력 6.1%에 불과하고 역사적 평균 밸류에이션 수준으로 할인 매력이 없어, $90~$100 구간 조정 후 분할 매수 접근 권장",
    targetBuyPrice: 99.0,
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // SYY — Sysco (배당왕족주, 54년 연속)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    ticker: "SYY",
    analyzedAt: "2026-02-22 20:00 KST",
    businessSummary: "시스코(Sysco)는 북미 최대 식자재 유통 기업으로, 레스토랑·호텔·학교·병원 등 전 세계 70만 개 이상의 고객사에 식품 및 관련 용품을 공급한다. 막대한 물류 인프라와 콜드체인 네트워크를 기반으로 식자재 유통 시장에서 약 17%의 점유율을 보유한 압도적 1위 사업자다. 제품 조달·물류·영업을 통합한 엔드-투-엔드 서비스로 고객 이탈을 최소화하고 있다.",
    coreProducts: [
      "식자재 및 식품 유통 (신선·냉동·건식류)",
      "주방 용품·소모품·위생용품 공급",
      "레스토랑 경영 컨설팅 및 디지털 발주 플랫폼",
    ],
    geographicPresence: "미국 약 75% · 캐나다·유럽(영국·아일랜드·프랑스 등)·중남미 약 25%",
    dividendStreakYears: 54,
    dividendCAGR5yr: 8.5,
    dividendCAGR10yr: 6.8,
    recentDividendGrowth: "2023년 배당 소폭 인상 후 2024년에도 꾸준히 증가, 3년 CAGR 11.2%로 최근 성장세 가속",
    dividendSafety: "moderate",
    dividendSafetyReason: "배당성향 57.4%로 여유 있으나 D/E 640배의 초고레버리지 구조가 금리 상승 시 배당 여력을 제약할 수 있음",
    moatTypes: [
      "cost_advantage",
      "switching_costs",
      "efficient_scale",
    ],
    moatStrength: "wide",
    moatNarrative: "전국 규모의 콜드체인 물류망과 33만 SKU 이상의 방대한 상품 풀은 신규 진입자가 단기간에 복제하기 어려운 규모의 경제를 형성한다. 고객사(레스토랑·급식)는 발주 시스템, 영업담당자, 재고 관리 서비스에 깊이 연동되어 있어 전환 비용이 매우 높다. 이를 통해 경기 침체 시에도 가격 전가력과 고객 유지율을 동시에 방어한다.",
    revenueGrowthTrend: "코로나 이후 외식 수요 회복 + 인플레 가격 전가로 매출 고성장, 최근에는 성장률이 안정화 국면 진입",
    marginTrend: "expanding",
    debtLevel: "high",
    financialSummary: "ROE 82.3%는 인상적이나 D/E 640배의 극도로 높은 레버리지에서 기인한 수치로 액면 그대로 해석은 위험하다. 영업현금흐름은 견조하여 이자·배당 지급 능력 자체는 유지되고 있으나, 고금리 장기화 시 이자 부담 증가가 실적을 압박할 수 있다. Forward PER 17.8배는 식자재 유통 업종 특성을 감안 시 합리적 수준이다.",
    keyRisks: [
      "D/E 640배의 초고레버리지 — 금리 상승 또는 경기침체 시 재무 취약성 노출",
      "현재가 52주 고점 대비 94.8% 위치 + 애널리스트 목표가 대비 업사이드 0.6%로 가격 매력 부재",
      "외식 경기 둔화 및 소비자 절약 트렌드 확산 시 고객사 매출 감소 → 발주량 축소 연쇄 위험",
    ],
    bullCase: "외식 산업 구조적 성장과 함께 원가 효율화·디지털 플랫폼 확장으로 마진이 지속 개선될 경우, 54년 배당 성장 이력과 맞물려 안정적 복리 수익을 제공하는 핵심 배당주로 자리매김할 수 있다.",
    bearCase: "경기침체로 레스토랑 폐업이 급증하거나 금리 장기 고착 시, 높은 부채 부담과 발주 감소가 동시에 작용해 배당 증가세 둔화 또는 주가 재평가 압력이 커질 수 있다.",
    valuationComment: "현재가 $90.13은 52주 최고점 근방이며 배당수익률 2.40%도 5년 평균 2.54%를 하회해 역사적으로 소폭 고평가 구간이다. 애널리스트 컨센서스 목표가 $90.69와 거의 동일하여 단기 업사이드가 제한적이다. 배당수익률이 2.6~2.8% 수준(주가 기준 약 $77~83)으로 회귀할 때 분할 매수를 고려하는 것이 유리하다.",
    recentDevelopments: [
      "2024년 하반기 디지털 발주 플랫폼 'Sysco Shop' 기능 확장 및 중소 식당 대상 컨설팅 서비스 강화",
      "글로벌 인플레 완화에 따른 식재료 원가 하락 → 단가 조정 압력 vs. 물량 증가 효과 간 균형 주목",
    ],
    overallRating: "관망",
    ratingReason: "54년 배당 킹의 신뢰도와 넓은 해자에도 불구하고 현재가가 52주 고점권·애널리스트 목표가 수렴 상태로 가격 매력이 낮고, 초고레버리지 리스크를 감안해 $80 이하 조정 시 진입 대기가 합리적",
    targetBuyPrice: 81,
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // BKH — Black Hills Corp (배당왕족주, 54년 연속)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    ticker: "BKH",
    analyzedAt: "2026-02-22 20:30 KST",
    businessSummary: "Black Hills Corporation은 미국 서부·중서부 8개 주(콜로라도, 사우스다코타, 와이오밍, 몬태나, 네브래스카, 캔자스, 아이오와 등)에서 전력·천연가스를 공급하는 규제 유틸리티 기업이다. 약 133만 명의 고객에게 필수 에너지를 제공하며, 규제 당국의 승인된 요금 체계 내에서 안정적인 수익을 창출한다. 클린에너지 전환 투자(재생에너지·인프라 현대화)를 통해 장기 성장 기반을 구축 중이다.",
    coreProducts: [
      "규제 전력 유통 및 발전",
      "규제 천연가스 배급",
      "에너지 인프라 현대화 및 클린에너지 투자",
    ],
    geographicPresence: "미국 서부·중서부 8개 주 100% (콜로라도·사우스다코타·와이오밍 중심, 네브래스카·몬태나·캔자스·아이오와 등 분산)",
    dividendStreakYears: 54,
    dividendCAGR5yr: null,
    dividendCAGR10yr: null,
    recentDividendGrowth: "3년 배당 CAGR 3.9%로 완만한 성장세를 유지하고 있으며, 54년 연속 배당 증가로 Dividend King 지위를 지속 중",
    dividendSafety: "moderate",
    dividendSafetyReason: "배당성향 67.9%로 관리 가능한 수준이나 D/E 120.4의 높은 부채가 금리 상승기 재무 부담을 가중시켜 완전한 '안전'으로 보기 어려움",
    moatTypes: [
      "efficient_scale",
      "intangible_assets",
    ],
    moatStrength: "narrow",
    moatNarrative: "규제 독점 유틸리티 특성상 서비스 지역 내 자연독점 구조(efficient scale)와 정부 허가·규제 라이선스(intangible assets)를 핵심 해자로 보유한다. 다만, 요금 인상은 규제 당국의 승인이 필요해 수익성 개선 속도가 제한적이며, 경쟁 위협은 낮지만 ROE 8% 수준으로 광역 해자(wide moat)보다는 협소한 해자(narrow moat)에 해당한다.",
    revenueGrowthTrend: "규제 유틸리티 특성상 매출 성장은 완만하며, 인프라 투자 확대와 요금 기반(rate base) 성장에 연동된 중단기 한 자릿수 성장 기대",
    marginTrend: "stable",
    debtLevel: "high",
    financialSummary: "D/E 120.4로 유틸리티 섹터 내에서도 부채 수준이 높은 편이며, 금리 상승 환경에서 이자비용 증가가 수익성에 압박을 줄 수 있다. ROE 8.0%는 자본효율 측면에서 낮은 편으로, 규제 수익률 제한의 결과이기도 하다. 그러나 규제 사업 특성상 현금흐름 가시성이 높아 배당 지급 능력 자체는 안정적으로 유지되고 있다.",
    keyRisks: [
      "높은 부채비율(D/E 120.4)로 인한 금리 상승 민감도 및 이자비용 부담",
      "규제 당국의 요금 인상 불인가 리스크로 인한 수익성 개선 제약",
      "재생에너지 전환 투자 확대에 따른 자본지출 증가 및 배당 성장 둔화 가능성",
    ],
    bullCase: "DDM 적정가 $90.65 및 애널리스트 목표가 $80.50을 고려 시 현재가 대비 상승 여력이 존재하며, 54년 연속 배당 성장의 신뢰성과 규제 유틸리티의 안정적 현금흐름이 방어적 포트폴리오에서 가치를 발휘할 수 있다.",
    bearCase: "현재 배당수익률 3.83%가 5년 평균(3.96%)을 하회하고 52주 상단 88%에 위치해 상대적으로 저평가 매력이 낮으며, 고금리 지속 시 높은 부채 부담과 ROE 8% 저효율이 재평가 하방 압력으로 작용할 수 있다.",
    valuationComment: "Forward PER 15.9는 유틸리티 섹터 평균 대비 합리적이나, 현재 배당수익률(3.83%)이 5년 평균(3.96%)을 밑돌아 수익률 기준으로 소폭 고평가 구간에 해당한다. 매력적인 진입을 위해 배당수익률 4.0~4.2% 수준인 $67~$70 구간을 목표 매수가로 설정하는 것이 적절하다.",
    recentDevelopments: [
      "클린에너지 전환 계획 가속화 — 석탄 발전 폐지 및 재생에너지·배터리 저장장치 인프라 투자 확대 중",
      "요금 기반(rate base) 확대를 위한 규제 당국 제출 진행 중으로 향후 수익 성장의 핵심 변수로 작용 예정",
    ],
    overallRating: "관망",
    ratingReason: "52주 고점 근처(88%)에 위치하고 배당수익률이 역사적 평균을 하회해 현재 진입 매력도가 낮으며, $67~$70 수준으로 눌림 시 재검토 권장",
    targetBuyPrice: 69,
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // GWW — W.W. Grainger (배당왕족주, 53년 연속)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    ticker: "GWW",
    analyzedAt: "2026-02-22 21:00 KST",
    businessSummary: "W.W. Grainger는 MRO(유지보수·수리·운영) 산업용 자재 유통 전문기업으로, 미국 내 최대 규모의 B2B 산업재 유통망을 보유합니다. 100만 개 이상의 SKU를 오프라인·온라인·현장 배송으로 공급하며, 일본 자회사 MonotaRO를 통해 아시아 시장도 빠르게 성장 중입니다. 디지털 전환 가속으로 e-커머스 비중이 70% 이상으로 확대되며 수익성 개선이 지속되고 있습니다.",
    coreProducts: [
      "MRO 산업용 소모품 및 공구",
      "안전용품·청소용품·전기자재 유통",
      "B2B 온라인 플랫폼(Grainger.com) 및 KeepStock 재고관리 서비스",
    ],
    geographicPresence: "미국 약 75% · 일본(MonotaRO) 약 15% · 캐나다·영국·멕시코 등 기타 10%",
    dividendStreakYears: 53,
    dividendCAGR5yr: 10.5,
    dividendCAGR10yr: 8.5,
    recentDividendGrowth: "3년 CAGR 17.8%로 최근 배당 성장 가속화, 낮은 배당성향(24.9%) 대비 공격적 증배 기조 유지",
    dividendSafety: "strong",
    dividendSafetyReason: "배당성향 24.9%로 매우 낮고 ROE 46.1%의 탁월한 수익성과 안정적 현금흐름이 배당 지속성을 강하게 뒷받침",
    moatTypes: [
      "cost_advantage",
      "switching_costs",
      "intangible_assets",
    ],
    moatStrength: "wide",
    moatNarrative: "100만 개 이상의 방대한 SKU와 전국 물류망이 만들어내는 규모의 경제가 핵심 해자입니다. KeepStock 등 재고관리 솔루션이 고객사 ERP에 깊이 통합되어 교체 비용이 매우 높습니다. 53년간 쌓아온 B2B 신뢰 브랜드와 장기 계약 고객 기반이 신규 경쟁자의 진입 장벽을 높이고 있습니다.",
    revenueGrowthTrend: "최근 3년 연평균 10% 이상 매출 성장, e-커머스 전환 및 가격 전가력으로 성장세 견조 유지",
    marginTrend: "expanding",
    debtLevel: "moderate",
    financialSummary: "D/E 69.1%로 관리 가능한 부채 수준이며, ROE 46.1%의 탁월한 자본 효율성이 돋보입니다. 강한 영업현금흐름을 기반으로 자사주 매입과 배당 증가를 동시에 시행하고 있으며, 재무 구조 전반은 매우 건전합니다.",
    keyRisks: [
      "산업 경기 침체 시 MRO 수요 급감 가능성 (경기민감 특성)",
      "Amazon Business·Fastenal 등 저가 경쟁자의 시장 잠식 가속화",
      "일본 MonotaRO 성장 둔화 또는 엔화 약세로 인한 실적 희석",
    ],
    bullCase: "e-커머스 전환 가속과 공급망 내재화 수요 증가로 시장점유율이 꾸준히 확대되고, MonotaRO의 아시아 성장이 중장기 멀티플 확장 동력이 될 수 있습니다.",
    bearCase: "현재 주가가 PER 31.9배로 산업재 섹터 프리미엄이 상당히 반영되어 있어, 경기 둔화나 실적 미스 시 밸류에이션 디레이팅 리스크가 큽니다.",
    valuationComment: "현재 배당수익률 0.80%는 5년 평균(1.05%) 대비 역사적으로 고평가 영역이며, 애널리스트 목표가 대비 상승여력도 0.4%에 불과해 현 가격 매수는 매력적이지 않습니다. Forward PER 23.4배는 성장성을 감안 시 합리적이나, 배당주 관점에서 수익률 1.0% 이상(주가 약 $904 이하)이 되는 구간이 의미 있는 매수 영역으로 판단됩니다. 분할매수 시작가는 $950 전후가 적정합니다.",
    recentDevelopments: [
      "2025년 Q1 실적에서 e-커머스 매출 비중 70% 돌파, 마진 개선 지속 확인",
      "MonotaRO의 일본 내 SMB 고객 확대 전략 가속화로 아시아 매출 성장세 유지",
    ],
    overallRating: "관망",
    ratingReason: "53년 배당왕의 탁월한 품질이지만 현재 0.80% 수익률과 0.4% 상승여력은 신규 매수 매력이 낮아 조정 시 분할매수 전략 권장",
    targetBuyPrice: 950,
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // NUE — Nucor (배당왕족주, 51년 연속)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    ticker: "NUE",
    analyzedAt: "2026-02-22 21:30 KST",
    businessSummary: "Nucor는 미국 최대 철강 생산업체로, 전기로(EAF) 기반의 미니밀 방식으로 철근·형강·판재 등 다양한 철강 제품을 생산한다. 스크랩 철 재활용 방식으로 원가 경쟁력을 확보하며, 분권화된 경영 구조와 이익 연동 보상 체계로 업계 최고 수준의 생산성을 유지한다. 건설·제조·에너지 등 다양한 산업에 공급하며 다운스트림 가공사업까지 수직계열화를 확대 중이다.",
    coreProducts: [
      "철근 및 구조용 형강",
      "냉연·열연 판재류",
      "철강 제품 가공 및 유통(Steel Technologies 등)",
    ],
    geographicPresence: "미국 약 90% · 캐나다·멕시코 등 북미 기타 약 8% · 기타 국제 약 2%",
    dividendStreakYears: 51,
    dividendCAGR5yr: 3.4,
    dividendCAGR10yr: 4.1,
    recentDividendGrowth: "3년 CAGR 3.2%로 안정적 증가세 유지, 2024년 기준 분기 배당 $0.56으로 소폭 인상",
    dividendSafety: "strong",
    dividendSafetyReason: "배당성향 29.4%로 매우 낮고 D/E 32.2%로 재무 구조가 건전해 경기 침체기에도 배당 지속 가능성 높음",
    moatTypes: [
      "cost_advantage",
      "efficient_scale",
    ],
    moatStrength: "narrow",
    moatNarrative: "전기로(EAF) 기반 생산방식은 고로 대비 설비투자비와 에너지 비용이 낮아 구조적 원가 우위를 제공한다. 미국 내 최대 생산 규모와 수직계열화된 유통망으로 효율적 규모의 경제를 실현하고 있다. 다만 철강은 본질적으로 범용 상품(commodity)이어서 해자 폭은 좁으며, 경기 사이클에 따라 수익성이 크게 변동한다.",
    revenueGrowthTrend: "2021~2022년 철강 호황으로 매출 급등 후 2023~2024년 철강가 하락으로 매출 및 이익 정상화(감소) 추세",
    marginTrend: "contracting",
    debtLevel: "low",
    financialSummary: "D/E 32.2%로 업종 내 최저 수준의 부채 비율을 유지하며 재무 안정성이 탁월하다. ROE 9.4%는 역사적 평균 대비 낮은 수준으로, 이는 현재 철강 가격 사이클의 하강 국면을 반영한다. 배당성향이 30% 미만으로 현금흐름 여력이 충분하며 자사주 매입도 병행 중이다.",
    keyRisks: [
      "철강 가격 사이클 하락으로 인한 수익성 급감 위험",
      "수입산 저가 철강(특히 중국산) 및 관세 정책 변동성",
      "건설·제조업 경기 둔화 시 수요 급감 가능성",
    ],
    bullCase: "미국 인프라 투자 확대(IRA·IIJA)와 리쇼어링 수혜로 국내 철강 수요 구조적 증가가 예상되며, 저배당성향 기반 안정적 배당 성장과 자사주 매입이 주주 환원을 뒷받침한다.",
    bearCase: "글로벌 경기 침체 시 철강 가격이 2020년 수준으로 급락할 경우 EPS가 Trailing PE 기준 대비 절반 이하로 줄어들 수 있으며, Forward PE 13배도 실적 하향 수정 시 재차 고평가 구간으로 진입할 수 있다.",
    valuationComment: "현재가 $180은 52주 고점 대비 83% 수준으로 고점 근처에 위치하며, 배당수익률 1.24%는 5년 평균(1.48%) 대비 낮아 역사적으로 고평가 신호다. DDM 적정가 $58는 사이클 종목 특성상 의미가 제한적이나, 순환적 바닥 기준 적정 매수 구간은 배당수익률 1.5% 이상이 회복되는 $145~$155 수준으로 판단된다.",
    recentDevelopments: [
      "2024년 철강 가격 약세로 영업이익 전년 대비 30%+ 감소, Forward PE 13배는 바닥 사이클 기대를 반영",
      "미국 인프라법(IIJA) 및 관세 강화 정책으로 2025년 하반기 이후 수요 회복 기대감 형성 중",
    ],
    overallRating: "관망",
    ratingReason: "51년 배당 왕 타이틀의 안전성은 인정하나, 현재 주가는 52주 고점 근처이고 배당수익률이 역사적 평균 이하로 매력적인 진입 시점이 아님",
    targetBuyPrice: 152,
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // ITW — Illinois Tool Works (배당왕족주, 51년 연속)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    ticker: "ITW",
    analyzedAt: "2026-02-22 22:00 KST",
    businessSummary: "Illinois Tool Works(ITW)는 7개 사업부(용접, 자동차 OEM, 식품장비, 테스트·계측, 폴리머·유체, 건설제품, 특수제품)를 운영하는 글로벌 다각화 산업재 기업이다. 독자적인 '80/20 단순화 전략'으로 핵심 고수익 제품에 집중해 업계 최고 수준의 수익성을 유지한다. 고객 생산 공정에 깊이 통합된 산업용 부품·소모품 중심으로 높은 반복 매출 구조를 보유한다.",
    coreProducts: [
      "산업용 용접장비 및 소모품",
      "자동차 OEM 패스너·부품",
      "상업용 주방·식품서비스 장비",
    ],
    geographicPresence: "북미 약 53% · 유럽 약 27% · 아시아태평양 약 15% · 기타 약 5%",
    dividendStreakYears: 51,
    dividendCAGR5yr: 7.0,
    dividendCAGR10yr: 7.2,
    recentDividendGrowth: "2024년 배당을 연 $5.92→$6.44로 약 8.8% 인상하며 51년 연속 성장세 유지",
    dividendSafety: "strong",
    dividendSafetyReason: "배당성향 59.3%로 안정적이고 93.7%의 초고ROE 기반 현금창출력이 배당을 충분히 뒷받침함",
    moatTypes: [
      "switching_costs",
      "cost_advantage",
      "intangible_assets",
    ],
    moatStrength: "wide",
    moatNarrative: "80/20 단순화 전략을 통해 수익성 높은 핵심 제품에 집중하며 경쟁사 대비 구조적으로 높은 영업이익률을 실현한다. 고객 생산라인에 깊이 내재화된 산업용 부품·소모품은 교체 비용이 높아 강한 전환 비용 해자를 형성한다. 수천 건의 특허와 독자적 제조 노하우가 오랜 기간 축적돼 신규 진입자의 모방을 어렵게 만든다.",
    revenueGrowthTrend: "최근 2~3년 매출 성장 정체(연 1~2%)이나 80/20 전략으로 수익성은 안정적으로 유지",
    marginTrend: "stable",
    debtLevel: "high",
    financialSummary: "D/E 비율 285.5는 공격적인 자사주 매입으로 자기자본이 크게 축소된 결과로 부채 자체보다 자본구조 설계에 의한 수치다. 그러나 자유현금흐름(FCF) 대비 이자비용 커버리지는 양호하며 투자등급 신용등급을 유지하고 있다. ROE 93.7%는 뛰어난 자본효율성을 반영하나 레버리지 효과가 과장하는 측면도 있어 절대치보다 추세 모니터링이 필요하다.",
    keyRisks: [
      "경기침체 시 자동차·건설 수요 동반 감소 가능성",
      "높은 레버리지(D/E 285) 환경에서 금리 상승 시 이자비용 부담 증가",
      "52주 고점 부근에서 애널리스트 컨센서스 목표가를 상회하는 밸류에이션 부담",
    ],
    bullCase: "80/20 전략 지속 및 가격 전가력으로 영업이익률이 추가 확장되고, 자사주 매입 가속화로 EPS·배당 성장이 예상보다 빠르게 진행될 수 있다.",
    bearCase: "글로벌 제조업 경기 둔화로 매출 역성장 시 현재 PER 28배 프리미엄이 압축되며 주가 조정이 크게 나타날 수 있다.",
    valuationComment: "현재가 $294.98은 52주 고점 부근(90.8%)이며 애널리스트 컨센서스 목표가 $278.62를 6% 이상 상회하고 있어 단기 상승 여력이 제한적이다. PER 28.1배는 산업재 평균 대비 높고 배당수익률 2.18%는 5년 평균(2.23%) 소폭 하회한다. 배당수익률 2.5% 이상(주가 약 $258) 또는 PER 24~25배 수준인 $265~$270 구간 진입 시 매력도가 상승한다.",
    recentDevelopments: [
      "2024년 4분기 유기적 매출 성장 1% 수준에 그쳤으나 영업이익률 27%대 유지로 수익성 방어 확인",
      "이사회가 2025년에도 배당 인상 및 자사주 매입 프로그램 지속 의지를 재확인",
    ],
    overallRating: "관망",
    ratingReason: "배당 안전성과 해자는 탁월하나 현재가가 애널리스트 목표가를 웃돌고 52주 고점 부근에 위치해 추가 상승보다 조정 리스크가 더 큰 시점",
    targetBuyPrice: 268,
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // MSEX — Middlesex Water (배당왕족주, 51년 연속)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    ticker: "MSEX",
    analyzedAt: "2026-02-22 22:30 KST",
    businessSummary: "Middlesex Water Company는 뉴저지주와 델라웨어주를 중심으로 상·하수도 서비스를 제공하는 규제 유틸리티 기업입니다. 주거·상업·산업 고객 약 50만 명에게 수도를 공급하며, 규제 당국의 요금 승인 하에 안정적인 현금흐름을 창출합니다. 51년 연속 배당 증가로 Dividend King 지위를 보유한 미국 수도 유틸리티의 대표 종목 중 하나입니다.",
    coreProducts: [
      "수도 공급 및 배급 서비스",
      "하수도·수처리 운영 서비스",
      "지자체 위탁 운영(Contract Operations)",
    ],
    geographicPresence: "뉴저지 약 85% · 델라웨어 약 15% (미국 동부 지역 집중)",
    dividendStreakYears: 51,
    dividendCAGR5yr: 5.5,
    dividendCAGR10yr: 4.8,
    recentDividendGrowth: "3년 CAGR 5.3%로 인플레이션 이상의 안정적 배당 성장 유지 중",
    dividendSafety: "strong",
    dividendSafetyReason: "배당성향 56.9%로 규제 유틸리티 특성상 현금흐름이 매우 안정적이며 과거 51년간 단 한 차례도 배당 삭감 없음",
    moatTypes: [
      "efficient_scale",
      "intangible_assets",
      "switching_costs",
    ],
    moatStrength: "wide",
    moatNarrative: "수도 사업은 대규모 인프라 투자가 선행되어야 하는 자연독점(Natural Monopoly) 구조로, 신규 경쟁자의 시장 진입이 사실상 불가능합니다. 규제 당국의 독점 영업 면허(intangible_assets)와 교체 불가능한 고객 기반(switching_costs)이 강력한 해자를 형성합니다. 요금 인상 역시 공익위원회(BPU)를 통해 정기적으로 승인받는 구조로 수익 가시성이 매우 높습니다.",
    revenueGrowthTrend: "인프라 투자 확대 및 규제 요금 인상으로 연 3~5%의 완만하고 안정적인 매출 성장세 유지",
    marginTrend: "stable",
    debtLevel: "high",
    financialSummary: "D/E 비율 84.3으로 부채 부담이 높지만, 이는 수도 유틸리티 섹터의 구조적 특성(대규모 설비 투자)에 기인한 것으로 동종업계 평균 수준입니다. ROE 9.1%는 규제 자본수익률 범위 내에 있으며, PER(Forward) 18.4는 동종 수도 유틸리티 대비 다소 할인된 수준입니다. 규제된 현금흐름 덕분에 이자 상환 능력은 안정적입니다.",
    keyRisks: [
      "금리 상승 시 높은 부채 비용 증가 및 할인율 상승으로 밸류에이션 압박",
      "규제 당국의 요금 인상 불허 또는 지연으로 인한 수익성 훼손",
      "인프라 노후화에 따른 대규모 자본지출(CapEx) 증가로 배당 성장 둔화 가능성",
    ],
    bullCase: "DDM 적정가 $82.35는 현재가 대비 52% 이상 상승 여력을 시사하며, 금리 하락 사이클 진입 시 유틸리티 섹터 재평가로 주가 회복이 가속될 수 있습니다. 현재 배당수익률 2.59%는 5년 평균(1.80%) 대비 역사적으로 높은 수준으로, 매수 매력도가 있습니다.",
    bearCase: "애널리스트 컨센서스 목표가가 $56에 불과해 단기 주가 상승 모멘텀이 제한적이며, 고금리 환경 장기화 시 유틸리티 섹터 전반의 밸류에이션 리레이팅이 지연될 수 있습니다.",
    valuationComment: "현재가 $54.13은 DDM 적정가($82.35) 대비 34% 할인된 수준이며, 배당수익률도 5년 평균보다 약 80bp 높아 역사적 저평가 구간입니다. 다만 애널리스트 목표가($56)와의 간극이 작아 단기 상승 촉매는 부족합니다. 장기 배당 투자자라면 $50~$52 구간을 목표 매수가로 설정하고 분할 접근하는 전략이 유효합니다.",
    recentDevelopments: [
      "2024년 뉴저지 공익위원회(BPU)에 요금 인상 신청 진행 중으로 수익성 개선 기대",
      "인프라 현대화 및 PFAS(과불화화합물) 처리 설비 투자 확대로 CapEx 증가 및 장기 요금 기반 확대 전망",
    ],
    overallRating: "관심",
    ratingReason: "51년 배당 왕의 안정성과 역사적 저평가 매력은 있으나 단기 모멘텀 부재로 $50~$52 분할 매수 구간 대기 전략 추천",
    targetBuyPrice: 51.0,
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // SPGI — S&P Global (배당왕족주, 51년 연속)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    ticker: "SPGI",
    analyzedAt: "2026-02-22 23:00 KST",
    businessSummary: "S&P Global은 신용평가(S&P Ratings), 금융정보(Market Intelligence), 지수(S&P Dow Jones Indices), 상품정보(Platts) 사업을 영위하는 글로벌 금융정보 기업입니다. 2022년 IHS Markit 인수 이후 데이터·분석 플랫폼으로 사업 영역을 대폭 확장하였으며, 금융시장 인프라의 핵심 공급자로 자리매김하고 있습니다.",
    coreProducts: [
      "S&P 신용평가 (Ratings)",
      "S&P 500 등 지수 사업 (Indices)",
      "Market Intelligence 금융데이터·분석 플랫폼",
    ],
    geographicPresence: "미국 약 60% · 유럽·중동·아프리카 25% · 아시아태평양 및 기타 15%",
    dividendStreakYears: 51,
    dividendCAGR5yr: 5.0,
    dividendCAGR10yr: null,
    recentDividendGrowth: "최근 3년 배당 CAGR 5.0%로 안정적 증가세 유지, 51년 연속 배당 증가 기록 중",
    dividendSafety: "strong",
    dividendSafetyReason: "배당성향 26.2%로 매우 낮고, 독점적 사업구조에서 창출되는 높은 현금흐름이 배당을 강력히 뒷받침함",
    moatTypes: [
      "intangible_assets",
      "switching_costs",
      "network_effect",
      "efficient_scale",
    ],
    moatStrength: "wide",
    moatNarrative: "S&P의 신용등급과 지수 브랜드는 수십 년간 쌓인 신뢰와 규제적 지위로 대체 불가능한 무형자산입니다. 발행사·투자자 모두 S&P 등급 없이는 자본시장 접근이 사실상 불가능하며, 지수 추종 자산(수십조 달러)이 S&P 지수에 연동되어 강력한 네트워크 효과와 전환비용을 형성합니다.",
    revenueGrowthTrend: "IHS Markit 합병 시너지 및 데이터·분석 수요 확대로 중장기 매출 성장세 지속 예상",
    marginTrend: "expanding",
    debtLevel: "moderate",
    financialSummary: "D/E 37.9로 IHS Markit 인수 관련 부채가 남아 있으나, 높은 영업현금흐름으로 빠른 부채 상환이 가능한 수준입니다. ROE 13.1%는 IHS Markit 인수로 인한 거대 영업권 희석 효과이며, 자본효율성 자체는 업계 최상위권입니다. 배당성향 26%대의 보수적 배당 정책으로 재투자 여력도 충분합니다.",
    keyRisks: [
      "채권 발행 시장 침체 시 신용평가 부문 수익 감소",
      "반독점 규제 강화 및 경쟁사(Moody's·Fitch) 시장점유율 확대 압력",
      "고금리 장기화로 인한 자본시장 거래 위축 및 M&A 감소",
    ],
    bullCase: "금리 인하 사이클 진입 시 채권 발행 급증으로 신용평가 부문 실적이 폭발적으로 개선되고, AI·데이터 수요 확대에 따른 Market Intelligence 구독 성장이 복합적으로 주가 재평가를 이끌 수 있습니다.",
    bearCase: "고금리 장기화로 채권 발행이 억제되면 신용평가 매출이 정체되고, PER 28배 수준의 밸류에이션 부담이 주가 하방 압력으로 작용할 수 있습니다.",
    valuationComment: "Trailing PER 28.5배는 역사적 평균 대비 다소 부담스러우나 Forward PER 18.9배는 수익 회복 기대를 반영해 합리적 수준입니다. DDM 적정가 $194는 낮은 배당수익률(0.93%) 특성상 현실적이지 않으며, 애널리스트 목표가 $540(+29.5%)이 더 적합한 참고지표입니다. 52주 저점 부근(18.2%)에 위치해 기술적으로 매력적이며, $380~$400 구간 분할 매수가 유효합니다.",
    recentDevelopments: [
      "2024년 AI 기반 데이터 분석 플랫폼 강화 및 Kensho AI 서비스 확장",
      "IHS Markit 합병 시너지 가속화로 부문 간 교차 판매 성과 가시화",
    ],
    overallRating: "관심",
    ratingReason: "52주 저점 인근의 기술적 매력도와 강력한 해자, 애널리스트 strong buy 컨센서스를 고려 시 $380~$400 구간 분할 매수 관심 종목",
    targetBuyPrice: 390,
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // EMR — Emerson Electric (배당왕족주, 48년 연속)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    ticker: "EMR",
    analyzedAt: "2026-02-22 23:30 KST",
    businessSummary: "에머슨 일렉트릭은 산업 자동화 및 소프트웨어 솔루션을 제공하는 글로벌 기술 기업으로, 제조·에너지·생명과학 등 다양한 산업군에 공정 제어 및 자동화 장비를 공급합니다. 2023년 Climate Technologies 부문(코프랜드)을 분사하며 순수 산업 자동화 기업으로 체질 전환을 완료했습니다.",
    coreProducts: [
      "공정 자동화 솔루션 (DeltaV, Ovation DCS)",
      "측정 및 계측 장비 (Fisher 밸브, Rosemount 센서)",
      "산업용 소프트웨어 및 디지털 트윈 (AspenTech 지분 포함)",
    ],
    geographicPresence: "미국 약 45% · 유럽 25% · 아시아태평양 20% · 기타 신흥국 10%",
    dividendStreakYears: 48,
    dividendCAGR5yr: 1.8,
    dividendCAGR10yr: 1.5,
    recentDividendGrowth: "2024년 주당 배당금 $2.17, 최근 수년간 소폭 인상 기조 유지 (3년 CAGR 9.3%는 구조개편 이전 기준 포함)",
    dividendSafety: "strong",
    dividendSafetyReason: "배당성향 52.4%로 안정적이며, 50년 이상 연속 배당 증가 이력과 견조한 잉여현금흐름이 배당 지속성을 뒷받침함",
    moatTypes: [
      "switching_costs",
      "intangible_assets",
      "cost_advantage",
    ],
    moatStrength: "wide",
    moatNarrative: "에머슨의 DCS·공정제어 솔루션은 석유화학·LNG·원자력 등 핵심 인프라에 깊이 내재화되어 교체 비용이 매우 높습니다. Rosemount, Fisher, DeltaV 등 수십 년간 구축된 브랜드 신뢰도와 인증 데이터가 경쟁 진입장벽으로 작용합니다. AspenTech와의 소프트웨어 통합으로 하드웨어-소프트웨어 결합형 해자가 강화되고 있습니다.",
    revenueGrowthTrend: "구조개편(Climate Tech 분사) 이후 자동화 부문 집중으로 유기적 매출 성장률 mid-single digit 수준 유지",
    marginTrend: "expanding",
    debtLevel: "moderate",
    financialSummary: "D/E 69.3%로 산업재 기업 대비 무난한 부채 수준이며, 안정적인 잉여현금흐름 창출 능력을 보유합니다. 분사 및 포트폴리오 재편으로 단기 ROE(9.7%)가 다소 낮아 보이나, 자동화 집중 후 수익성 개선 궤도에 있습니다. Forward PER 20.7배는 구조개편 완료 후 실적 정상화를 반영하고 있습니다.",
    keyRisks: [
      "Trailing PER 36.3배로 고평가 구간 — 실적 미스 시 주가 조정 위험",
      "산업 자동화 투자 사이클 둔화 또는 설비투자 축소 시 수요 감소",
      "AspenTech 통합 비용 및 소프트웨어 부문 성장 기대치 미달 가능성",
    ],
    bullCase: "글로벌 산업 디지털 전환 및 에너지 전환 수혜로 공정 자동화 수요가 장기 확대되며, 소프트웨어 비중 확대에 따른 마진 구조 개선이 실현될 경우 현 목표가($166.69)를 상회하는 상승 여력 존재.",
    bearCase: "Trailing PER 36배의 부담스러운 밸류에이션 하에서 거시경제 둔화나 제조업 투자 위축이 발생하면 멀티플 리레이팅(하향) 위험이 크며, 배당수익률 1.46%는 배당 매력도 측면에서 경쟁종목 대비 현저히 낮음.",
    valuationComment: "현재가 $148.62는 52주 고점 부근(78% 위치)이며 배당수익률 1.46%로 5년 평균(2.06%) 대비 상당히 낮아 밸류에이션 부담이 큽니다. Forward PER 20.7배는 합리적이나 배당 투자 관점에서는 수익률 2.0% 회복 구간($108~$110)이 이상적 매수 구간이며, 성장주 성격 감안 시 $130~$135 내외도 관심 구간으로 고려 가능합니다.",
    recentDevelopments: [
      "2023년 Climate Technologies(코프랜드) 분사 완료 — 순수 산업 자동화 기업으로 리포지셔닝",
      "AspenTech 지분 확대 및 소프트웨어 통합 가속화로 SaaS형 반복 매출 비중 증가 중",
    ],
    overallRating: "관망",
    ratingReason: "배당수익률 1.46%로 Dividend King 프리미엄 대비 배당 매력 부족, 52주 고점 근처의 밸류에이션 부담으로 추가 하락 시 매수 전환 검토 권고",
    targetBuyPrice: 130,
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // PH — Parker Hannifin (배당왕족주, 48년 연속)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    ticker: "PH",
    analyzedAt: "2026-02-23 00:00 KST",
    businessSummary: "Parker Hannifin은 모션 및 제어 기술 분야 세계 최대 기업으로, 항공우주·산업용 유압·공압·전기 제어 시스템을 제조한다. 2022년 Meggitt 인수(약 8.8조원)를 통해 항공우주 사업을 크게 확장했으며, 제조업·에너지·방위산업 전반에 필수적인 구성 요소를 공급한다. 68개국 이상에서 약 60,000명을 고용하는 글로벌 산업 인프라 기업이다.",
    coreProducts: [
      "산업용 유압·공압 시스템",
      "항공우주 구동 및 제어 장치(Meggitt 포함)",
      "전기 모션 제어 및 필터레이션 솔루션",
    ],
    geographicPresence: "북미 약 55% · 유럽 약 25% · 아시아 및 기타 약 20%",
    dividendStreakYears: 48,
    dividendCAGR5yr: 14.2,
    dividendCAGR10yr: 11.8,
    recentDividendGrowth: "3년 배당 CAGR 20.7%로 Meggitt 인수 이후 이익 급증과 함께 배당 증가 가속화",
    dividendSafety: "strong",
    dividendSafetyReason: "배당성향 25.6%로 매우 낮고, ROE 25.8%의 높은 수익성이 배당을 안정적으로 뒷받침함",
    moatTypes: [
      "switching_costs",
      "intangible_assets",
      "cost_advantage",
    ],
    moatStrength: "wide",
    moatNarrative: "Parker의 제품은 고객 시스템 깊숙이 통합되어 교체 비용이 매우 높고, 60년 이상 축적된 엔지니어링 특허·인증·애플리케이션 노하우가 강력한 진입 장벽을 형성한다. Win Strategy 2.0을 통한 운영 효율화와 수십만 종의 부품 포트폴리오는 단일 공급사 의존도를 높여 고객 이탈을 방지한다.",
    revenueGrowthTrend: "Meggitt 인수 효과 반영으로 최근 3년간 두 자릿수 매출 성장, 유기적 성장도 고단가 항공우주·방위 비중 증가로 견조",
    marginTrend: "expanding",
    debtLevel: "moderate",
    financialSummary: "Meggitt 인수로 부채가 증가했지만 D/E 68.9% 수준은 현금흐름 대비 관리 가능한 범위다. ROE 25.8%와 낮은 배당성향(25.6%)은 재무 유연성과 지속적 배당 성장 여력을 동시에 시사한다. 잉여현금흐름의 빠른 부채 상환으로 레버리지 개선이 진행 중이다.",
    keyRisks: [
      "52주 고점(99.6%) 근처에서 밸류에이션 부담, 현재 수익률(0.70%)이 5년 평균(1.25%) 대비 현저히 낮음",
      "글로벌 제조업 경기 둔화 시 산업재 수주 감소 및 마진 압박 가능성",
      "Meggitt 인수 후 통합 리스크 및 항공우주 공급망 차질",
    ],
    bullCase: "항공우주·방위 수요 구조적 확대와 Win Strategy 마진 개선이 지속될 경우, EPS 성장으로 배당 CAGR 15%+ 유지 가능하며 프리미엄 밸류에이션 정당화 가능하다.",
    bearCase: "경기 침체로 산업재 수요가 위축되거나 금리 상승이 이어질 경우, 현 P/E 37배 수준은 빠른 멀티플 압축으로 이어질 수 있다.",
    valuationComment: "현 주가($1,022)는 52주 최고점 수준이며 애널리스트 목표가($1,027)와 거의 일치해 단기 상승여력이 제한적이다. 현재 배당수익률(0.70%)이 5년 평균(1.25%)보다 크게 낮아 역사적 기준으로 고평가 구간에 해당한다. 5년 평균 수익률(1.0~1.1%) 기준 매수 매력 구간은 $650~$720, 보수적 관점에서 $800~$880 수준에서 분할 매수를 고려할 것을 권장한다.",
    recentDevelopments: [
      "Meggitt 통합 완료 후 항공우주 부문 마진이 지속 개선되며 FY2024 조정 EPS 사상 최고치 경신",
      "Win Strategy 3.0 발표 — 2029년까지 조정 EBITDA 마진 26% 목표 제시",
    ],
    overallRating: "관망",
    ratingReason: "탁월한 사업 품질과 배당 성장력을 인정하나, 현 주가는 역사적 밸류에이션 상단으로 안전마진 확보가 어려운 구간",
    targetBuyPrice: 860,
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // CB — Chubb (배당귀족주, 30년 연속)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    ticker: "CB",
    analyzedAt: "2026-02-23 04:30 KST",
    businessSummary: "Chubb는 세계 최대 규모의 상장 손해보험사로, 기업 및 개인 대상 재산·상해·생명보험, 재보험 등 다양한 보험 상품을 제공합니다. 워런 버핏의 버크셔 해서웨이가 주요 주주로 알려진 고품질 보험사이며, 언더라이팅 규율과 높은 수익성으로 업계 내 최상위 평판을 보유하고 있습니다.",
    coreProducts: [
      "상업용 재산·상해보험(P&C)",
      "개인 고자산(HNW) 보험",
      "해외 생명·건강보험 및 재보험",
    ],
    geographicPresence: "북미 약 55% · 해외(아시아·유럽·라틴아메리카 등) 약 45% — 글로벌 54개국 이상 영업",
    dividendStreakYears: 30,
    dividendCAGR5yr: 4.2,
    dividendCAGR10yr: 5.1,
    recentDividendGrowth: "2024년 주당배당금 $3.52 → $3.88로 약 10% 인상하며 30년 연속 증가 기록 유지",
    dividendSafety: "strong",
    dividendSafetyReason: "배당성향 14.9%로 매우 낮고, ROE 14%대의 안정적 수익성과 강한 현금창출력이 배당 지속을 강력히 뒷받침",
    moatTypes: [
      "brand",
      "intangible_assets",
      "efficient_scale",
    ],
    moatStrength: "wide",
    moatNarrative: "Chubb는 수십 년간 쌓아온 언더라이팅 전문성과 리스크 선별 능력(discipline)이 핵심 해자입니다. 고자산 개인 고객 및 대형 기업 고객의 높은 충성도와 전환 비용, 글로벌 네트워크 규모를 통한 비용 효율이 경쟁사 진입을 억제합니다. 특히 HNW(고액 자산가) 개인보험 세그먼트에서 브랜드 프리미엄이 뚜렷합니다.",
    revenueGrowthTrend: "최근 3년 보험료 수입 연평균 8~10% 성장 — 가격 인상(경성 시장)과 신흥국 생명보험 확장이 견인",
    marginTrend: "expanding",
    debtLevel: "low",
    financialSummary: "D/E 25.3으로 보험사 기준 매우 낮은 레버리지를 유지하며 재무 건전성이 탁월합니다. PER 12.9배(Forward 11.4배)는 보험 업종 평균 대비 합리적 수준이며, PBR 1.76배는 ROE 14%대를 감안 시 적정합니다. 강력한 언더라이팅 이익과 투자 포트폴리오 수익이 이중으로 수익성을 지지합니다.",
    keyRisks: [
      "대형 자연재해(허리케인·지진 등) 집중 손실로 단기 실적 변동성 확대",
      "금리 하락 시 투자 포트폴리오 수익 감소 및 책임준비금 평가 압박",
      "52주 고점 근처(94.5%) 위치로 단기 밸류에이션 부담 및 조정 가능성",
    ],
    bullCase: "글로벌 보험료 가격 강세 사이클 지속과 신흥국 생명보험 성장이 맞물리면 EPS 10%+ 성장이 가능하며, 버크셔 해서웨이 지분 확대 모멘텀도 주가 지지 요소로 작용할 수 있습니다.",
    bearCase: "연속 대형 재해 발생 시 합산비율 악화로 단기 실적 쇼크가 나타날 수 있으며, 현 주가가 52주 고점 인근에 형성되어 있어 시장 조정 시 낙폭이 클 수 있습니다.",
    valuationComment: "Forward PER 11.4배는 역사적 평균(13~14배) 대비 소폭 할인이나, 52주 고점 94.5% 수준으로 단기 상승 여력(애널리스트 목표 대비 +1.4%)이 제한적입니다. DDM 적정가($16.17)는 보험사 특성상 신뢰도가 낮으므로 PER·PBR 기반 접근이 적합하며, $290~$305 구간(Forward PER 10~10.5배)에서 분할 매수를 권장합니다.",
    recentDevelopments: [
      "2024년 버크셔 해서웨이의 Chubb 지분 공개로 기관 수요 급증 및 주가 강세 지속",
      "아시아 생명·건강보험 부문(특히 한국·일본·동남아) 성장세 가속으로 지역 다각화 진전",
    ],
    overallRating: "관망",
    ratingReason: "비즈니스 품질과 배당 안전성은 최상급이나 현 주가가 52주 고점 근처로 단기 매수 매력도는 낮아 $290~$305 조정 시 매수 기회 탐색을 권장",
    targetBuyPrice: 300,
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // ABT — Abbott Laboratories (배당귀족주, 52년 연속)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    ticker: "ABT",
    analyzedAt: "2026-02-23 01:00 KST",
    businessSummary: "Abbott Laboratories는 의료기기, 진단, 영양, 제약 4개 사업부를 보유한 글로벌 헬스케어 기업입니다. 연속혈당측정기(CGM) FreeStyle Libre가 의료기기 부문의 핵심 성장 동력이며, Alinity 진단 시스템과 Ensure·Similac 등 영양 브랜드가 안정적인 수익을 창출합니다. 131년 역사를 가진 배당 귀족주로 52년 연속 배당을 증가시켜 왔습니다.",
    coreProducts: [
      "FreeStyle Libre (CGM 연속혈당측정기)",
      "Alinity 진단 플랫폼 (IVD 시스템)",
      "Ensure·Similac·Pedialyte (의료 영양제품)",
    ],
    geographicPresence: "미국 약 45% · 국제(유럽·아시아·이머징마켓 등) 약 55%",
    dividendStreakYears: 52,
    dividendCAGR5yr: 8.2,
    dividendCAGR10yr: 13.1,
    recentDividendGrowth: "3년 CAGR 16.7%의 공격적 증배 지속, 최근 분기 주당 $0.59 → $0.63 수준으로 인상",
    dividendSafety: "strong",
    dividendSafetyReason: "52년 연속 배당 증가, D/E 25.3으로 부채 극히 낮음, 배당성향 63.4%는 헬스케어 귀족주 기준 양호한 수준",
    moatTypes: [
      "brand",
      "switching_costs",
      "intangible_assets",
      "cost_advantage",
    ],
    moatStrength: "wide",
    moatNarrative: "FreeStyle Libre는 CGM 시장에서 강력한 고객 전환 비용과 브랜드 충성도를 구축하였으며, Libre 생태계(앱·클라우드 연동)로 락인 효과가 심화되고 있습니다. 의료기기·진단 부문에서 특허 및 FDA 승인 등 규제 기반 진입장벽이 높고, 영양 사업의 글로벌 브랜드 인지도(Ensure·Similac)는 수십 년에 걸쳐 형성된 무형자산입니다. 이머징마켓 기성의약품(EPD) 부문은 현지 유통망 기반의 비용 우위를 보유합니다.",
    revenueGrowthTrend: "COVID 진단 특수 기저효과 소멸 후 정상화 과정 중이나, FreeStyle Libre 및 심장전기생리학(EP) 기기 중심으로 연간 6~9%대 유기적 성장 재가속 추세",
    marginTrend: "expanding",
    debtLevel: "low",
    financialSummary: "D/E 25.3으로 동종 헬스케어 대비 재무 레버리지가 매우 낮아 금리 리스크가 제한적입니다. ROE 13.2%는 성장 투자 사이클 감안 시 양호하며, Forward PER 18.0배는 Trailing 30.1배 대비 이익 정상화 기대를 반영합니다. 프리캐시플로우 창출력이 안정적으로 배당 성장 및 R&D 투자를 동시에 뒷받침하고 있습니다.",
    keyRisks: [
      "COVID 진단 매출 정상화에 따른 전사 매출 성장률 비교 부담 지속",
      "Dexcom·Medtronic 등 CGM 경쟁 심화 및 기술 혁신 사이클 압박",
      "Similac 등 영양 부문 제품 리콜·품질 이슈 재발 가능성 및 이머징마켓 환율 역풍",
    ],
    bullCase: "FreeStyle Libre의 글로벌 시장 점유율 확대와 비당뇨 웰니스 CGM(Lingo) 신시장 개척이 성공하면 의료기기 부문 이익이 크게 레버리지될 수 있습니다. 애널리스트 목표가 $133.39 달성 시 배당수익 포함 총수익률 21% 이상 기대 가능합니다.",
    bearCase: "진단 부문 매출 회복 지연과 CGM 경쟁 격화로 Forward EPS 추정치가 하향 조정될 경우, 현재 배당수익률 수준(2.25%)도 주가 지지 근거로 부족할 수 있습니다. 글로벌 경기 침체 시 영양·이머징마켓 사업 성장 둔화가 겹칠 위험이 존재합니다.",
    valuationComment: "현재가 $112.21은 52주 범위 하위 19.3% 수준으로 역사적 저점권 근처에 위치하며, 배당수익률 2.25%가 5년 평균(1.74%)을 유의미하게 상회해 상대적 저평가 구간입니다. Forward PER 18배는 배당 귀족 헬스케어주 프리미엄 감안 시 합리적이며, 애널리스트 목표가($133.39) 기준 18.9% 업사이드가 남아 있습니다. $105~$115 구간은 매수 적합 구간으로 판단되며, $108 전후 분할 매수 전략이 유효합니다.",
    recentDevelopments: [
      "FreeStyle Libre 3 Plus 미국 FDA 승인 및 비당뇨 웰니스용 Lingo CGM 출시로 TAM 확장 본격화",
      "심장전기생리학(EP) 카테터 사업 고성장 지속 및 Volt 배터리리스 ICD 글로벌 론칭",
    ],
    overallRating: "관심",
    ratingReason: "52주 저점 인근 + 역사적 고배당수익률 구간 + 애널리스트 매수 의견 + Forward PER 18배 합리적 → 분할 매수 적합 시점",
    targetBuyPrice: 108,
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // AFL — Aflac (배당귀족주, 41년 연속)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    ticker: "AFL",
    analyzedAt: "2026-02-23 01:30 KST",
    businessSummary: "Aflac은 미국과 일본에서 보완적 건강보험(암보험, 상해보험, 단기장애보험 등)을 판매하는 글로벌 보험사입니다. 주요 수익의 약 70%가 일본 시장에서 발생하며, 엔화 환율 영향을 크게 받는 구조입니다. 간병·질병보험 틈새시장에서 강력한 브랜드 인지도를 바탕으로 안정적인 현금흐름을 창출합니다.",
    coreProducts: [
      "보완적 건강보험 (암·질병보험)",
      "단기장애·상해보험",
      "생명보험 및 치아보험",
    ],
    geographicPresence: "일본 약 68% · 미국 약 32%",
    dividendStreakYears: 41,
    dividendCAGR5yr: 13.2,
    dividendCAGR10yr: 9.5,
    recentDividendGrowth: "2024년 배당금 $0.58→$0.61/분기로 약 5% 인상, 41년 연속 배당 증가 유지",
    dividendSafety: "strong",
    dividendSafetyReason: "배당성향 34%로 매우 낮고, 보험업 특성상 안정적 보험료 수입 기반으로 배당 지속성 최상위 수준",
    moatTypes: [
      "brand",
      "switching_costs",
      "intangible_assets",
    ],
    moatStrength: "wide",
    moatNarrative: "일본 내 보완보험 시장에서 '오리 캐릭터' 브랜드로 압도적 인지도를 보유하며, 기업복지 채널을 통한 단체 유통망이 강력한 진입장벽을 형성합니다. 보험 계약 특성상 고객 이탈률이 낮고, 수십 년간 쌓인 계리 데이터와 언더라이팅 노하우는 복제하기 어려운 무형 자산입니다.",
    revenueGrowthTrend: "엔화 약세로 달러 환산 매출은 정체·소폭 감소세이나, 엔화 기준 일본 프리미엄 수입은 안정적 유지",
    marginTrend: "stable",
    debtLevel: "moderate",
    financialSummary: "D/E 28.5는 보험 업종 특성상 무의미하며 보험 레버리지와 혼동하지 않아야 합니다. ROE 13.1%는 보험업 내 양호한 수준이며, 자사주 매입을 통한 주주환원이 적극적입니다. 적립금 운용의 투자수익과 안정적 손해율 유지가 수익성의 핵심 축입니다.",
    keyRisks: [
      "엔/달러 환율 약세 지속 시 달러 환산 이익 감소",
      "일본 보완보험 시장 포화 및 신계약 성장 둔화",
      "미국 금리·신용 스프레드 변동에 따른 투자 포트폴리오 손실 위험",
    ],
    bullCase: "엔화 회복 시 달러 환산 이익이 급격히 개선되며 주가 재평가 가능성이 높고, 미국 시장 확장 및 자사주 매입 지속으로 EPS 성장 가속화 기대.",
    bearCase: "일본 저성장·엔화 약세가 장기화될 경우 매출 정체와 이익 감소가 불가피하며, 보험료 인상 한계로 수익성 개선이 제한될 수 있음.",
    valuationComment: "PER 14.7(Forward)은 보험 섹터 내 적정~소폭 할인 수준이며 애널리스트 목표가($112.31)가 현재가 대비 소폭 하향 위치. 52주 위치 76%로 단기 부담은 존재하나, 배당수익률 2.14%가 5년 평균(2.18%)에 근접해 밸류에이션 매력은 중립. 적정 매수 구간은 배당수익률 2.4% 수준인 $102~$106 구간으로 판단.",
    recentDevelopments: [
      "2024년 하반기 엔화 약세 지속으로 달러 환산 이익 압박, 환헤지 비율 조정 중",
      "자사주 매입 프로그램 지속 — 2024년 약 $1.4B 규모 바이백 실행",
    ],
    overallRating: "관망",
    ratingReason: "배당 안전성과 해자는 최상급이나 현재 주가가 목표가를 소폭 상회하고 엔화 리스크가 단기 불확실성으로 작용해 $102~106 조정 시 매수 전략 권장",
    targetBuyPrice: 104,
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // ATO — Atmos Energy (배당귀족주, 40년 연속)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    ticker: "ATO",
    analyzedAt: "2026-02-23 02:00 KST",
    businessSummary: "Atmos Energy는 미국 최대 천연가스 전용 배급·전송 유틸리티 기업으로, 텍사스·루이지애나·미시시피 등 8개 주에서 약 320만 고객에게 천연가스를 공급합니다. 규제 기반의 안정적인 요금 수익 구조를 보유하며, 주요 수익의 약 85%가 규제 영업에서 창출됩니다. 대규모 인프라 투자 프로그램(SAVE·GRIP)을 통해 파이프라인 현대화와 안전성 향상을 지속적으로 추진 중입니다.",
    coreProducts: [
      "천연가스 배급 (Distribution)",
      "파이프라인 및 저장 (Pipeline & Storage)",
      "규제 인프라 현대화 투자",
    ],
    geographicPresence: "미국 8개 주(텍사스·루이지애나·미시시피·테네시·콜로라도·캔터키·버지니아·캔자스) 운영 · 해외 사업 없음",
    dividendStreakYears: 40,
    dividendCAGR5yr: null,
    dividendCAGR10yr: null,
    recentDividendGrowth: "3년 배당 CAGR 9.1%로 유틸리티 섹터 평균을 크게 상회하며 40년 연속 배당 증가 기록 유지 중",
    dividendSafety: "strong",
    dividendSafetyReason: "배당성향 47.1%로 규제 유틸리티 대비 매우 보수적이며, 규제 수익 기반의 안정적 현금흐름이 배당을 확실히 뒷받침",
    moatTypes: [
      "efficient_scale",
      "intangible_assets",
      "cost_advantage",
    ],
    moatStrength: "wide",
    moatNarrative: "천연가스 파이프라인·배급 인프라는 물리적 자연독점 구조로 서비스 지역 내 경쟁자 진입이 사실상 불가능합니다. 주 정부 규제 허가(franchise rights)는 강력한 무형 자산으로 작용하며, 기 구축된 방대한 인프라 네트워크는 신규 진입자에게 경제적으로 재현이 불가능한 규모의 경쟁 우위를 제공합니다. 규제 당국이 투자 수익(ROE)을 보장하는 구조 덕분에 해자는 장기적으로 안정적입니다.",
    revenueGrowthTrend: "규제 인프라 투자 확대(연간 30억 달러 이상 CapEx)에 따른 요금 기반(Rate Base) 성장으로 매출·EPS 모두 연 6~8% 수준의 꾸준한 증가세 유지",
    marginTrend: "stable",
    debtLevel: "moderate",
    financialSummary: "D/E 67.4% 수준은 대규모 인프라 투자가 필수인 규제 유틸리티 특성상 용인 가능한 수준이며, 규제 수익이 부채 상환을 안정적으로 뒷받침합니다. ROE 9.2%는 규제 허용 수익률 범위 내로 양호하며, Forward PER 20.6배는 과거 평균 대비 프리미엄이나 배당 성장률(9%+)을 감안 시 정당화 가능합니다. 전반적으로 재무 구조는 견조하나 금리 상승 환경에서 이자 비용 증가 리스크는 모니터링 필요합니다.",
    keyRisks: [
      "52주 고점 99.7% 수준에서 단기 밸류에이션 부담 및 조정 가능성",
      "고금리 장기화 시 이자 비용 증가 및 배당수익률 상대 매력 감소",
      "규제 당국의 ROE 허용 폭 축소 또는 인프라 투자 승인 지연 리스크",
    ],
    bullCase: "연간 30억 달러 이상의 인프라 투자가 규제 승인을 통해 꾸준히 요금 기반 성장으로 전환되며 EPS·배당 연 8~10% 복리 성장이 지속될 경우, 배당 성장주로서 장기 총수익 매력이 부각될 수 있습니다.",
    bearCase: "현재 주가가 애널리스트 목표가($180.10)를 이미 소폭 상회한 상태에서 금리 재상승 시 유틸리티 섹터 전반의 멀티플 압축이 발생할 경우 단기 10~15% 하락 위험이 존재합니다.",
    valuationComment: "현재가 $180.97은 52주 고점(99.7%)에 위치하며 애널리스트 평균 목표가($180.10)를 이미 초과한 상태로 추가 상승 여력이 제한적입니다. Forward PER 20.6배는 역사적 평균(18~19배) 대비 프리미엄이며, 배당수익률 2.21%도 5년 평균(2.43%) 대비 낮아 상대적으로 비쌉니다. 적정 매수 구간은 배당수익률 2.5% 이상 회복 시점인 $160~$165 수준으로, 현재는 신규 진입보다 기존 보유자의 홀드가 적절합니다.",
    recentDevelopments: [
      "2026 회계연도 EPS 가이던스 $7.35~$7.55 제시, 연간 6~8% 성장 경로 유지 확인",
      "텍사스·루이지애나 등 주요 서비스 지역에서 인프라 현대화(SAVE 프로그램) 승인 순조롭게 진행 중",
    ],
    overallRating: "관망",
    ratingReason: "사업 품질과 배당 성장성은 최상급이나 현재 주가가 고점 부근·목표가 초과 상태로 매력적인 매수 가격 대비 약 10% 이상의 조정 후 진입이 바람직",
    targetBuyPrice: 162,
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // BDX — Becton Dickinson (배당귀족주, 52년 연속)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    ticker: "BDX",
    analyzedAt: "2026-02-23 02:30 KST",
    businessSummary: "Becton Dickinson은 의료기기, 진단 장비, 생명과학 솔루션을 개발·제조·판매하는 글로벌 의료기술 기업으로, BD Medical·BD Diagnostics·BD Life Sciences 세 부문으로 운영된다. 주사기·채혈관·수액 주입 시스템 등 병원 필수 소모품 시장에서 압도적 점유율을 보유하며, C.R. Bard 인수(2017)를 통해 혈관·비뇨기 분야로 포트폴리오를 확장하였다.",
    coreProducts: [
      "BD Vacutainer 채혈 시스템",
      "BD Alaris 수액 주입 펌프",
      "BD MAX 분자진단 플랫폼",
    ],
    geographicPresence: "미국 55% · 유럽·중동·아프리카 25% · 아시아태평양 13% · 기타 7%",
    dividendStreakYears: 52,
    dividendCAGR5yr: 5.5,
    dividendCAGR10yr: 5.2,
    recentDividendGrowth: "3년 CAGR 6.0%로 인플레이션 대비 실질 배당 성장 유지 중, 52년 연속 증배 기록 보유",
    dividendSafety: "moderate",
    dividendSafetyReason: "배당성향 68.1%로 다소 높고 D/E 77.3%의 부채 부담이 존재하나, 의료기기 필수소모품 특성상 현금흐름 안정성이 뒷받침",
    moatTypes: [
      "switching_costs",
      "intangible_assets",
      "cost_advantage",
    ],
    moatStrength: "wide",
    moatNarrative: "병원 시스템에 깊숙이 내재된 전자의무기록·수액관리 소프트웨어와 하드웨어 통합 솔루션은 교체 비용이 매우 높아 강력한 고객 잠금 효과를 형성한다. 50년 이상 구축한 브랜드 신뢰도와 FDA 인허가 노하우, 방대한 유통망은 신규 경쟁자의 진입을 구조적으로 차단한다.",
    revenueGrowthTrend: "핵심 사업 중심 저~중단위 성장 유지, 의료기기 수요 회복과 신흥국 확장으로 점진적 매출 개선 기대",
    marginTrend: "expanding",
    debtLevel: "moderate",
    financialSummary: "C.R. Bard 인수 이후 부채가 증가했으나 자산 매각과 FCF 창출로 디레버리징 진행 중이다. ROE 7.0%는 일시적 상각 비용 영향으로 낮게 표시되며, Forward PER 13.7은 Trailing PER 30.3 대비 대폭 개선된 이익 정상화를 반영한다. 안정적인 의료 소모품 수요 기반의 반복 수익이 재무 회복의 핵심 동력이다.",
    keyRisks: [
      "대규모 인수 후 지속되는 부채 상환 부담 및 금리 리스크",
      "의료기기 가격 규제 강화 및 병원의 비용 절감 압력",
      "C.R. Bard 텍스처드 임플란트 관련 법적 소송 불확실성",
    ],
    bullCase: "Forward PER 13.7 수준의 이익 정상화가 실현되고 디레버리징이 가속화될 경우, DDM 내재가치 $420 수준으로의 장기 재평가 가능성이 높다. 신흥국 의료인프라 투자 확대와 수술 볼륨 회복이 매출·마진 동반 개선을 이끌 수 있다.",
    bearCase: "높은 배당성향(68%)과 부채 부담이 지속될 경우 배당 성장 둔화 또는 동결 리스크가 발생할 수 있다. 의료기기 가격 규제 심화 및 소송 비용 확대 시 이익 회복 일정이 지연될 수 있다.",
    valuationComment: "현재가 $185는 52주 범위 최고 수준에 근접해 있어 단기 추가 상승 여력이 제한적이다. 애널리스트 목표가 $195(+5.4%)는 소폭 upside에 불과하지만, Forward PER 13.7과 현재 배당수익률 2.27%(5년 평균 1.57% 대비 +0.7%p)는 중장기 가치 매력을 시사한다. 적정 매수 구간은 주가 조정 시 $170~$175 내외로, 해당 구간에서 배당수익률 약 2.4~2.5% 확보 가능하다.",
    recentDevelopments: [
      "BD Alaris 수액 펌프 FDA 경고서한 해소 및 출하 재개로 의료기기 부문 회복 궤도 진입",
      "비핵심 자산 매각 및 Embecta(인슐린 디바이스) 분사를 통한 포트폴리오 집중화 및 부채 축소 진행 중",
    ],
    overallRating: "관심",
    ratingReason: "52년 연속 증배의 배당 신뢰성과 Forward 기준 저평가 매력은 있으나, 현재가가 52주 고점권에 위치해 $170~$175 조정 구간까지 기다리는 전략이 유효하다",
    targetBuyPrice: 172,
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // BRO — Brown & Brown (배당귀족주, 30년 연속)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    ticker: "BRO",
    analyzedAt: "2026-02-23 03:00 KST",
    businessSummary: "Brown & Brown은 미국 내 4대 독립 보험 중개사 중 하나로, 기업 및 개인 고객에게 보험 제품 및 리스크 관리 솔루션을 제공합니다. 보험사와 계약자 사이에서 수수료 기반으로 운영되어 경기 사이클에 비교적 방어적인 수익 구조를 보유하고 있습니다. 인수합병(M&A)을 통한 공격적 외형 성장 전략으로 지속적으로 시장 점유율을 확대해왔습니다.",
    coreProducts: [
      "보험 중개 및 리스크 관리 솔루션",
      "전문 프로그램 보험(틈새 시장 특화)",
      "보험 관련 서비스(클레임 처리·직원 복리후생 관리)",
    ],
    geographicPresence: "미국 약 85% · 영국·캐나다·기타 국제 약 15%",
    dividendStreakYears: 30,
    dividendCAGR5yr: 10.2,
    dividendCAGR10yr: 9.5,
    recentDividendGrowth: "3년 CAGR 22.5%의 가파른 배당 성장, 현재 수익률 0.91%로 5년 평균(0.63%) 대비 확연히 높아진 상태",
    dividendSafety: "strong",
    dividendSafetyReason: "배당성향 19.5%로 극히 보수적이며 30년 연속 배당 증가 이력이 배당 지속성을 강하게 뒷받침",
    moatTypes: [
      "switching_costs",
      "intangible_assets",
      "efficient_scale",
    ],
    moatStrength: "wide",
    moatNarrative: "보험 중개는 장기 고객 관계와 높은 전환 비용을 기반으로 하는 구조적 해자를 보유합니다. 수십 년간 축적된 특수 산업별 틈새 프로그램(니치 마켓) 전문성과 지역 브로커 네트워크는 신규 경쟁자가 단기간에 복제하기 어렵습니다. 꾸준한 M&A를 통한 규모의 경제 확보로 비용 효율성과 가격 협상력이 지속 강화되고 있습니다.",
    revenueGrowthTrend: "M&A와 유기적 성장을 결합해 연 10~15% 수준의 꾸준한 매출 성장 유지",
    marginTrend: "expanding",
    debtLevel: "moderate",
    financialSummary: "D/E 63%는 중개업 특성상 부채를 활용한 M&A 전략 결과로 동종업계 대비 관리 가능한 수준입니다. ROE 11.2%는 다소 평범해 보이나 무형자산 상각 부담을 고려하면 실질 수익성은 더 높으며, 영업현금흐름은 안정적으로 배당 및 M&A 재원을 충분히 커버합니다. Forward PER 14.0은 성장률 대비 매력적인 구간으로 재무 건전성은 양호합니다.",
    keyRisks: [
      "금리 하락 시 보험 프리미엄 감소로 수수료 수익 압박 가능",
      "공격적 M&A에 따른 통합 리스크 및 부채 증가 우려",
      "대형 보험사의 직접 판매 채널 확대로 중개사 입지 약화 가능성",
    ],
    bullCase: "보험 경쟁 시장에서 틈새 프로그램 전문성과 M&A 기반 외형 확장이 지속되며 Forward PER 14배는 성장주 대비 저평가 구간으로 재평가 가능합니다.",
    bearCase: "52주 고점 대비 6.5% 수준에 위치하여 이미 많이 하락했음에도 경기 침체 시 보험 시장 둔화와 M&A 통합 비용이 동시에 발생할 경우 추가 하방 압력이 불가피합니다.",
    valuationComment: "Trailing PER 22배는 부담스러우나 Forward PER 14배는 22.5%의 높은 배당 성장률을 감안할 때 매력적입니다. 애널리스트 목표가 $83.50(+20%) 및 현재 52주 저점 근접 구간을 고려하면 $65~$68 부근이 분할 매수 적정 구간으로 판단됩니다.",
    recentDevelopments: [
      "2024~2025년 지속적인 소형 보험 중개사 인수로 특수 프로그램 포트폴리오 확대",
      "미국 내 재해보험 수요 급증 수혜로 상업용 보험 중개 부문 유기적 성장 가속화",
    ],
    overallRating: "관심",
    ratingReason: "30년 연속 배당 성장 + Forward PER 14배 + 20% 상승여력으로 매력적이나 현재가 기준 추가 조정 시 적극 매수 고려 권장",
    targetBuyPrice: 66.5,
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // CAH — Cardinal Health (배당귀족주, 37년 연속)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    ticker: "CAH",
    analyzedAt: "2026-02-23 03:30 KST",
    businessSummary: "Cardinal Health는 미국 최대 의약품 및 의료기기 유통업체 중 하나로, 병원·약국·클리닉 등 전국 의료기관에 의약품과 의료 소모품을 공급한다. 제약 유통 세그먼트와 의료 세그먼트를 양축으로, 방사성의약품(Nuclear & Precision Health) 부문에서도 틈새 경쟁력을 보유하고 있다. 규모 기반의 마진 구조로 매출 대비 순마진은 낮지만 안정적인 현금흐름을 창출한다.",
    coreProducts: [
      "제약 유통 (Pharmaceutical Distribution) — 전체 매출의 약 80%+",
      "의료 소모품·수술 용품 유통 (Medical Segment)",
      "방사성의약품 솔루션 (Nuclear & Precision Health Solutions)",
    ],
    geographicPresence: "미국 약 93% · 국제(주로 캐나다·아시아) 약 7% — 사실상 북미 집중 사업 구조",
    dividendStreakYears: 37,
    dividendCAGR5yr: 7.5,
    dividendCAGR10yr: 6.3,
    recentDividendGrowth: "3년 CAGR 8.7%로 최근 배당 성장 가속화 추세; 37년 연속 증배로 Aristocrat 지위 안정적 유지",
    dividendSafety: "strong",
    dividendSafetyReason: "배당성향 29.3%로 매우 보수적이며, 안정적 현금흐름 사업 구조상 단기 배당 삭감 리스크는 낮음",
    moatTypes: [
      "switching_costs",
      "cost_advantage",
      "efficient_scale",
    ],
    moatStrength: "narrow",
    moatNarrative: "전국 배송 인프라와 병원·약국 체인과의 장기 계약 구조가 핵심 진입장벽이다. 단, 제약 유통 업계는 McKesson·Cencora(AmerisourceBergen)와의 3강 과점으로, 개별 기업의 가격 결정력은 제한적이다. 방사성의약품 세그먼트는 규제·물류 복잡성으로 차별화된 틈새 해자를 보유한다.",
    revenueGrowthTrend: "제약 유통 물량 증가 및 GLP-1(비만·당뇨약) 수요 급증에 힘입어 매출 연 10%+ 성장세 지속 중",
    marginTrend: "stable",
    debtLevel: "high",
    financialSummary: "유통업 특성상 순마진은 0.5% 내외로 얇지만, 매출 규모(약 $2,300억 달러)로 절대 이익이 크다. 부채 수준은 높은 편이나, 안정적인 영업현금흐름으로 이자 커버리지는 양호하다. 오피오이드 소송 합의금 지급이 완료 단계에 접어들어 재무 불확실성이 완화되고 있다.",
    keyRisks: [
      "대형 약국 체인(CVS·Walgreens) 및 PBM의 협상력 강화로 인한 마진 압박",
      "정부의 약가 규제 강화 시 제약 유통 수익성 직접 영향",
      "의료 세그먼트의 구조적 수익성 회복 지연 및 경쟁 심화",
    ],
    bullCase: "GLP-1 등 고가 전문의약품 유통 물량 급증이 매출·이익 동반 성장을 견인하고, 방사성의약품 부문 고성장으로 프리미엄 밸류에이션이 정당화될 수 있다.",
    bearCase: "현재 52주 최고가 부근(94.2%)에서 Forward PER 19.4배는 저마진 유통업체치고 고평가 구간으로, 약가 규제나 GLP-1 성장 둔화 시 급격한 멀티플 축소 가능성이 있다.",
    valuationComment: "현재 배당수익률 0.91%는 5년 평균(2.41%) 대비 현저히 낮아 주가가 펀더멘털 대비 선반영된 상태다. Forward PER 19.4배는 합리적으로 보이나, 순마진 0.5%대 유통업체에 적용하기에는 부담스러운 수준이다. 수익률 1.5~2% 회복 구간인 $100~$135, 또는 Forward PER 15배 수준인 $173 전후가 더 매력적인 매수 구간으로 판단된다.",
    recentDevelopments: [
      "GLP-1 계열(세마글루타이드·티르제파타이드) 처방 급증으로 제약 유통 물량 및 매출 대폭 증가 — 2025년 실적 서프라이즈 주요 원인",
      "오피오이드 소송 합의(약 $60억) 지급이 마무리 단계에 접어들며 법적 불확실성 해소 국면 진입",
    ],
    overallRating: "관망",
    ratingReason: "37년 배당 성장의 신뢰도는 높으나, 현재 주가는 52주 고점 부근·배당수익률 역대 최저 수준으로 신규 매수 매력도가 낮음 — 조정 시 분할 매수 전략 유효",
    targetBuyPrice: 178,
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // CAT — Caterpillar (배당귀족주, 30년 연속)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    ticker: "CAT",
    analyzedAt: "2026-02-23 04:00 KST",
    businessSummary: "캐터필러는 세계 최대 건설·광산 장비 제조업체로, 굴삭기·불도저·덤프트럭 등 중장비와 디젤·가스 엔진, 산업용 터빈을 생산한다. 금융 서비스 부문(Cat Financial)을 통해 장비 할부·리스 금융도 제공하며, 딜러 네트워크와 사후 서비스(부품·정비) 매출 비중이 높다.",
    coreProducts: [
      "건설 장비(굴삭기·불도저·휠로더)",
      "광산 장비(초대형 덤프트럭·드릴·스크레이퍼)",
      "에너지·운송용 디젤·가스 엔진 및 터빈",
    ],
    geographicPresence: "북미 약 47% · 아시아·태평양 20% · 유럽·중동·아프리카 22% · 중남미 11%",
    dividendStreakYears: 30,
    dividendCAGR5yr: 8.2,
    dividendCAGR10yr: 9.1,
    recentDividendGrowth: "2024년 주당 분기 배당 $1.41 → $1.51로 약 7.1% 인상, 30년 연속 증가 기록 유지",
    dividendSafety: "strong",
    dividendSafetyReason: "배당성향 31.1%로 매우 낮고 ROE 43.5%의 탄탄한 수익성이 뒷받침하여 경기 침체 시에도 배당 유지·성장 여력 충분",
    moatTypes: [
      "brand",
      "switching_costs",
      "cost_advantage",
      "intangible_assets",
    ],
    moatStrength: "wide",
    moatNarrative: "캐터필러의 노란색 장비는 150년 이상 축적된 브랜드 신뢰도와 전 세계 3,000개 이상 딜러 네트워크를 통해 강력한 진입장벽을 형성한다. 대형 광산·건설 현장은 한번 도입한 장비 브랜드를 쉽게 교체하기 어려우며, 부품·정비 생태계가 Lock-in 효과를 강화한다. 디지털 커넥티드 서비스(Cat Connect)와 자율주행 광산 솔루션으로 데이터 기반 해자도 확대 중이다.",
    revenueGrowthTrend: "2021~2023년 인프라 투자 붐과 광산 Capex 확대로 매출 고성장했으나 2024년부터 건설 업황 둔화로 증가세 완만해짐",
    marginTrend: "stable",
    debtLevel: "high",
    financialSummary: "D/E 206.7%은 외형상 높지만 상당 부분이 금융 서비스 자회사(Cat Financial) 차입으로 제조 본체 부채는 관리 가능 수준이다. ROE 43.5%와 낮은 배당성향이 결합되어 잉여현금흐름이 풍부하며, 공격적 자사주 매입(연간 수십억 달러)을 꾸준히 집행하고 있다. 신용등급은 A등급 유지로 재무 건전성에 큰 우려는 없다.",
    keyRisks: [
      "글로벌 경기 침체 시 건설·광산 Capex 급감으로 매출·이익 변동성 확대",
      "중국 경기 부양 효과 미진 및 미·중 무역 분쟁 재점화에 따른 아시아 수요 위축",
      "현재 52주 고점 근처(94.2%) 및 PER 40배 고평가 구간에서 실적 미달 시 주가 급락 가능성",
    ],
    bullCase: "AI 데이터센터 건설 붐, 미국 인프라법(IIJA) 집행 가속, 에너지 전환(광산 수요 급증)이 맞물리면 장기 실적 성장이 지속되어 현재 밸류에이션도 정당화될 수 있다.",
    bearCase: "글로벌 경기 둔화로 건설·광산 수요가 동반 위축될 경우 이익이 빠르게 꺾이고, 고평가된 PER이 수축하며 주가가 30% 이상 하락할 수 있다.",
    valuationComment: "Forward PER 27.7배는 역사적 평균(18~22배) 대비 프리미엄이 크고, 배당수익률 0.80%는 5년 평균(1.79%)의 절반에도 못 미쳐 가격 매력이 낮다. 애널리스트 컨센서스 목표가 $701.85도 현재가보다 낮아 단기 상단 부담이 존재한다. 적정 매수 구간은 Forward PER 20~22배 수준인 $550~$600, 배당수익률 1.2~1.5% 회복 구간으로 판단된다.",
    recentDevelopments: [
      "2024년 4분기 실적에서 매출 소폭 감소에도 운영 마진 개선 및 대규모 자사주 매입 지속으로 EPS 시장 예상 상회",
      "자율주행 광산 트럭(Cat 794 AC) 및 전동화 장비 라인업 확대를 통해 친환경·자동화 전환 선제 대응 중",
    ],
    overallRating: "관망",
    ratingReason: "사업 경쟁력과 배당 성장성은 최고 수준이나 현재가는 역사적 고평가 구간으로 경기 둔화 리스크 대비 안전마진 부족, $580~$620 구간 분할매수 대기 전략이 합리적",
    targetBuyPrice: 600,
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // CBSH — Commerce Bancshares (배당왕족주, 56년 연속)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    ticker: "CBSH",
    analyzedAt: "2026-02-23 05:00 KST",
    businessSummary: "Commerce Bancshares는 미주리 주 캔자스시티에 본사를 둔 지역 은행 지주회사로, 상업금융·소매금융·자산관리 서비스를 핵심 사업으로 영위합니다. 미국 중부 지역(미주리·캔자스·일리노이·오클라호마·콜로라도)에서 강고한 시장 지위를 유지하며, 56년 연속 배당 증가를 달성한 배당왕(Dividend King) 기업입니다.",
    coreProducts: [
      "상업금융 (기업대출·기업여신·트레저리 서비스)",
      "개인 소매금융 (모기지·소비자대출·예금)",
      "자산관리 및 신탁 서비스 (Wealth Management)",
    ],
    geographicPresence: "미국 중부 집중 (미주리·캔자스 중심 약 80%, 일리노이·오클라호마·콜로라도 약 20%)",
    dividendStreakYears: 56,
    dividendCAGR5yr: 5.2,
    dividendCAGR10yr: 5.0,
    recentDividendGrowth: "최근 3년 연평균 4.6% 성장, 2024년 주당 배당금 $1.10 유지·소폭 인상으로 56년 연속 배당 증가 기록 경신",
    dividendSafety: "strong",
    dividendSafetyReason: "배당성향 26.3%로 업계 최저 수준이며, ROE 16%의 높은 수익성과 반세기 이상의 배당 증가 이력이 배당 안전성을 강하게 뒷받침",
    moatTypes: [
      "switching_costs",
      "intangible_assets",
      "efficient_scale",
    ],
    moatStrength: "narrow",
    moatNarrative: "중소기업 및 중부 지역 고객의 높은 거래 전환 비용과 56년간 축적된 브랜드 신뢰도가 핵심 경쟁 우위입니다. 자산관리·신탁 부문의 전문 인력과 고객 관계망은 단기간 복제가 어려운 무형 자산입니다. 다만 디지털 금융·빅테크 경쟁 심화와 광역 영업망 부재로 해자 범위는 협소(Narrow) 수준으로 평가됩니다.",
    revenueGrowthTrend: "금리 상승기(2022~2023) 순이자마진(NIM) 확대로 수익 성장, 2024년 이후 금리 안정화 국면에서 성장세 점진적 둔화 중",
    marginTrend: "stable",
    debtLevel: "low",
    financialSummary: "ROE 16.0%는 지역 은행 평균(10~12%)을 크게 상회하는 우수한 수익성 지표입니다. 배당성향 26.3%로 잉여 이익의 대부분을 자본 재투자에 활용 가능하며, 자본 적정성 비율(CET1)도 규제 기준을 안정적으로 상회합니다. D/E 비율이 은행 구조상 일반적으로 산출되지 않으나, 예대율 및 자본비율 기준으로 재무 건전성은 양호합니다.",
    keyRisks: [
      "연준 금리 인하 사이클 가속화에 따른 순이자마진(NIM) 압박 및 이자 수익 감소",
      "중부 지역 경기 침체 시 상업용 부동산·중소기업 대출 부실화 위험 확대",
      "핀테크·대형 은행의 디지털 서비스 경쟁 심화로 고객 이탈 및 시장 점유율 잠식",
    ],
    bullCase: "금리 환경 안정화와 중부 지역 경제 성장 지속 시 대출 포트폴리오 확대 및 자산관리 부문 성장이 맞물려 애널리스트 목표가 $62 달성이 현실적입니다.",
    bearCase: "연준 금리 인하 가속화로 NIM이 급격히 축소되고, 상업용 부동산 대출 부실화가 동시에 진행될 경우 실적 하향 조정과 주가 재평가 압박이 불가피합니다.",
    valuationComment: "Forward PER 12.3배는 고품질 지역 은행 대비 합리적 수준이며, 현재 배당수익률 2.04%가 5년 평균(1.72%)을 크게 상회해 역사적 매력 구간에 진입한 상태입니다. DDM 적정가 $45.83은 보수적 성장 가정의 하단으로, 실제 펀더멘털(ROE 16%, 낮은 배당성향)을 감안하면 실질 내재가치는 이보다 높습니다. $50~52 구간 분할 매수가 적정하며, $48 이하 진입 시 밸류에이션 매력도 더욱 높아집니다.",
    recentDevelopments: [
      "2024년 배당금 소폭 인상으로 56년 연속 배당 증가 기록 경신, 배당왕 지위 공고화",
      "금리 안정화 국면 대응으로 자산관리·수수료 기반 수익 비중 확대 전략 추진 중",
    ],
    overallRating: "관심",
    ratingReason: "56년 배당왕의 탁월한 안전성에 현재 수익률이 역사적 평균 초과 — $50~52 분할 매수 시 장기 배당 성장주로 보유 적합",
    targetBuyPrice: 51.0,
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // CHD — Church & Dwight (배당귀족주, 28년 연속)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    ticker: "CHD",
    analyzedAt: "2026-02-23 05:30 KST",
    businessSummary: "Church & Dwight는 Arm & Hammer, OxiClean, Trojan, Vitafusion 등 15개 이상의 강력한 소비자 브랜드를 보유한 미국 필수소비재 기업으로, 세탁·구강위생·피임·비타민 등 생활 밀착형 카테고리에서 높은 시장 점유율을 유지하고 있다. 유기적 성장과 함께 M&A를 통한 포트폴리오 확장 전략(Waterpik, Flawless 등)으로 꾸준히 외형을 키워왔으며, 경기 방어적 사업 구조로 안정적인 현금흐름을 창출한다.",
    coreProducts: [
      "Arm & Hammer (중탄산소다·세탁세제·구강케어)",
      "OxiClean (세탁 표백·클리너)",
      "Trojan (피임·성인용품)",
      "Vitafusion / L'il Critters (비타민 젤리)",
      "Waterpik (구강 세정기·칫솔)",
    ],
    geographicPresence: "미국 약 80% · 국제(캐나다·영국·호주 등) 약 20%",
    dividendStreakYears: 28,
    dividendCAGR5yr: 6.8,
    dividendCAGR10yr: 7.5,
    recentDividendGrowth: "2024년 배당을 주당 $1.23으로 인상, 3년 CAGR 12.3%로 최근 3년 간 배당 성장 가속화",
    dividendSafety: "strong",
    dividendSafetyReason: "배당성향 39.1%로 낮고 필수소비재 특성상 안정적 FCF 창출, 28년 연속 증가 이력으로 배당 안전성 매우 높음",
    moatTypes: [
      "brand",
      "intangible_assets",
      "cost_advantage",
    ],
    moatStrength: "narrow",
    moatNarrative: "Arm & Hammer·OxiClean 등 수십 년간 쌓인 브랜드 충성도와 소매 유통 채널 내 우월한 진열 협상력이 핵심 해자다. 다만 P&G·Unilever 등 대형 CPG 경쟁사와 아마존·이마트 PB(Private Brand) 확장에 노출되어 있어 해자 폭은 'narrow' 수준으로 평가된다. 틈새 카테고리(구강 세정기, 피임 등)에서는 시장지배력이 상대적으로 강하다.",
    revenueGrowthTrend: "연 4~6% 수준의 안정적 유기 성장세 유지, 가격 인상과 볼륨 성장 혼합",
    marginTrend: "stable",
    debtLevel: "moderate",
    financialSummary: "D/E 59.5%로 부채 수준은 CPG 업계 평균 대비 무난한 편이며, 꾸준한 영업현금흐름으로 이자 커버리지에 문제가 없다. ROE 17.6%는 업종 평균을 상회하며 자본 효율성은 양호하나, 공격적 M&A 이후 무형자산·굿윌 비중이 높아 장부가 대비 프리미엄(PBR 6.09x)이 지속되고 있다.",
    keyRisks: [
      "밸류에이션 부담: PER 34.1x(Trailing)는 성장 기대치를 상당 부분 선반영, 실적 미스 시 주가 하락폭 클 수 있음",
      "원자재·물류 비용 재상승 시 마진 압박 위험",
      "아마존 PB 및 경쟁 CPG社의 틈새 카테고리 진입으로 가격 결정력 약화 가능성",
    ],
    bullCase: "필수소비재 특성과 강력한 브랜드 포트폴리오를 바탕으로 경기 침체 시에도 실적 방어력이 뛰어나며, 인수한 프리미엄 브랜드들의 시너지가 본격화되면 Forward PE 25.5x 대비 추가 Re-rating 가능.",
    bearCase: "현재 주가가 애널리스트 목표가($102.95)와 거의 동일해 단기 상승 여력이 제한적이며, 금리 고착화 환경에서 저배당(1.19%) 필수소비재주의 상대적 매력이 채권 대비 낮아질 수 있음.",
    valuationComment: "Forward PER 25.5x는 필수소비재 평균(20~22x)을 웃도는 프리미엄 수준으로, 현재가($103)는 충분히 가격이 반영된 상태다. 애널리스트 목표가도 현재가와 동일 수준이어서 추가 매수 매력은 낮다. 배당수익률이 5년 평균(1.16%)에 근접한 $90~95 구간, 또는 Forward PER 22~23x에 해당하는 $88~94 구간을 분할 매수 타깃으로 고려할 것을 권장한다.",
    recentDevelopments: [
      "2024년 Zicam(감기 브랜드) 등 포트폴리오 최적화 및 일부 비핵심 자산 정리 진행",
      "유통 채널 다변화(D2C·이커머스 강화) 및 국제 시장 점유율 확대 전략 지속 추진",
    ],
    overallRating: "관망",
    ratingReason: "현재가가 애널리스트 목표가와 거의 동일하고 프리미엄 밸류에이션이 부담스러워, $90~95 수준으로 조정 시 매수를 고려하는 관망 전략이 적절함",
    targetBuyPrice: 92,
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // CLX — Clorox (배당귀족주, 47년 연속)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    ticker: "CLX",
    analyzedAt: "2026-02-23 07:30 KST",
    businessSummary: "Clorox는 가정용 청소·위생 제품을 중심으로 한 미국 필수소비재 대표 기업으로, 블리치·소독제·세탁세제 등의 청소 브랜드와 함께 숯·드레싱·고양이 모래 등 다양한 생활용품 포트폴리오를 보유하고 있습니다. 강력한 브랜드 인지도를 바탕으로 슈퍼마켓·대형마트 등 광범위한 유통망을 통해 안정적 매출을 창출하며, 47년 연속 배당 증가라는 기록을 유지하고 있습니다.",
    coreProducts: [
      "Clorox 표백제·소독 클리너",
      "Burt's Bees 천연 뷰티·퍼스널케어",
      "Kingsford 숯·Hidden Valley 드레싱·Fresh Step 고양이 모래",
    ],
    geographicPresence: "북미(미국 중심) 약 82% · 국제(중남미·호주 등) 약 18%",
    dividendStreakYears: 47,
    dividendCAGR5yr: 4.8,
    dividendCAGR10yr: 5.6,
    recentDividendGrowth: "2023년 사이버 공격 이후 재정 압박에도 불구하고 연간 약 2~3% 소폭 인상 기조를 유지하며 귀족주 지위 수호 중",
    dividendSafety: "watch",
    dividendSafetyReason: "배당성향 80.5%로 높고 D/E 비율이 자본 잠식 수준(9191%)으로 재무 레버리지 부담이 크며, 실적 회복 속도에 따라 배당 인상 여력이 제한될 수 있음",
    moatTypes: [
      "brand",
      "intangible_assets",
      "cost_advantage",
    ],
    moatStrength: "narrow",
    moatNarrative: "Clorox는 수십 년간 구축한 강력한 브랜드 신뢰도와 '클로록스=청소'라는 카테고리 동일시 효과를 통해 프리미엄 가격 유지 능력을 보유하고 있습니다. 그러나 PB(자체 브랜드) 제품과의 가격 경쟁 심화, 소비자의 가격 민감도 상승으로 프리미엄 프라이싱 유지가 점차 어려워지고 있어 해자 강도는 '내로우' 수준으로 평가됩니다.",
    revenueGrowthTrend: "2023년 대규모 사이버 공격으로 매출이 급감한 후 회복세에 있으나, 성장률은 저한 자리 수(1~3%)의 완만한 수준에 머물고 있음",
    marginTrend: "expanding",
    debtLevel: "high",
    financialSummary: "2023년 사이버 공격으로 인한 생산 중단·재고 손실·복구 비용이 실적에 타격을 주었고, 그 여파로 자본이 마이너스 상태가 되어 ROE·D/E 지표가 극단적으로 왜곡되어 있습니다. 현재 마진 회복이 진행 중이며 원자재 비용 하락과 가격 인상 효과로 수익성은 개선 추세이나, 절대적 부채 부담은 여전히 높아 재무 안정성 모니터링이 필요합니다.",
    keyRisks: [
      "사이버 공격 이후 실적 회복 지연 및 추가 운영 리스크",
      "PB 제품·신규 경쟁사 부상으로 인한 시장점유율 잠식",
      "높은 부채 수준과 금리 환경 지속에 따른 이자 부담 증가",
    ],
    bullCase: "원자재 비용 안정화와 가격 인상 효과 지속 시 마진이 빠르게 회복되고, 47년 배당 귀족주 지위를 지키기 위한 경영진의 의지가 주주 환원을 지지할 수 있습니다.",
    bearCase: "경기 침체 또는 소비자 지출 위축 시 PB 제품으로의 대체가 가속화되고, 높은 배당성향과 부채 부담으로 인해 배당 인상 동결 또는 실적 쇼크가 발생할 수 있습니다.",
    valuationComment: "현재 배당수익률 4.01%는 5년 평균(3.25%)을 크게 상회해 역사적 기준으로 저평가 구간에 위치하나, 애널리스트 목표가($123.47)가 현재가와 거의 일치해 단기 상승 여력은 제한적입니다. Forward PER 18.1배는 소비재 섹터 대비 합리적이며, 실적 회복 궤도를 확인하는 $110~115 구간이 위험 대비 수익률이 더 매력적인 진입점으로 판단됩니다.",
    recentDevelopments: [
      "2023년 8월 사이버 공격으로 ERP 시스템 마비, 분기 매출 28% 급감 후 2024년 점진적 복구 진행 중",
      "비핵심 사업 포트폴리오 정리 및 원가 절감 프로그램 'IGNITE' 전략 재추진으로 수익성 회복에 집중 중",
    ],
    overallRating: "관망",
    ratingReason: "배당수익률은 역사적 고점 수준으로 매력적이나, 실적 회복의 가시성 부족과 극단적 레버리지 리스크를 감안하면 실적 회복 확인 후 $110~115 구간에서 분할 매수 전략이 적합함",
    targetBuyPrice: 112,
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // ECL — Ecolab (배당귀족주, 32년 연속)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    ticker: "ECL",
    analyzedAt: "2026-02-23 08:00 KST",
    businessSummary: "Ecolab은 식품·음료·병원·에너지·산업 시설에 위생·살균·수처리·방역 솔루션을 제공하는 세계 최대 규모의 청결·위생 전문기업입니다. 제품 판매와 현장 기술서비스를 결합한 독자적인 비즈니스 모델로 고객의 높은 전환 비용을 창출합니다. 170개국 이상에서 운영되며 전 세계 주요 식품·제조·의료 기관의 필수 인프라 파트너로 자리잡고 있습니다.",
    coreProducts: [
      "산업용 청소·위생 화학제품 및 기술서비스",
      "수처리·냉각탑·보일러 관리 솔루션",
      "식품안전·병원감염 예방·방역 서비스",
    ],
    geographicPresence: "미국 약 55% · 유럽 25% · 아시아/기타 20%",
    dividendStreakYears: 32,
    dividendCAGR5yr: 8.5,
    dividendCAGR10yr: 7.8,
    recentDividendGrowth: "2023년 주당 $2.52 → 2024년 $2.76으로 약 9.5% 인상, 32년 연속 배당 증가 기록 유지",
    dividendSafety: "strong",
    dividendSafetyReason: "배당성향 36.8%로 보수적이며 잉여현금흐름 대비 배당 커버리지 충분, ROE 22.5%의 높은 자본효율성이 배당 지속성 뒷받침",
    moatTypes: [
      "switching_costs",
      "intangible_assets",
      "cost_advantage",
    ],
    moatStrength: "wide",
    moatNarrative: "Ecolab의 핵심 해자는 현장 기술서비스 인력(약 2만 5천 명)과 제품을 결합한 통합 솔루션 모델로, 고객이 한번 도입하면 전환 비용이 매우 높습니다. 수십 년간 축적된 산업별 노하우·특허·데이터 자산은 경쟁사가 단기간에 복제하기 어려운 진입장벽을 형성합니다. 규모의 경제에서 비롯된 원가 우위도 중소 경쟁사 대비 가격·서비스 경쟁력을 동시에 확보하게 해줍니다.",
    revenueGrowthTrend: "2022~2024년 연평균 매출 성장률 약 9~11%, 가격 인상 효과와 글로벌 확장으로 꾸준한 성장세 유지",
    marginTrend: "expanding",
    debtLevel: "moderate",
    financialSummary: "D/E 103.9%로 부채 수준은 적정 범위이나 자본 집약적 사업 특성상 레버리지가 다소 높습니다. ROE 22.5%는 업종 평균을 상회하며 자본효율성이 우수하고, 배당성향 36.8%는 향후 배당 성장 여력을 충분히 보존하고 있습니다. 영업 현금흐름이 안정적이어서 투자·배당 동시 집행이 가능한 재무 구조를 유지하고 있습니다.",
    keyRisks: [
      "52주 고점 부근(97.2%)에서의 밸류에이션 부담 — PER 41.8배는 성장 기대가 충분히 반영된 수준",
      "원자재(계면활성제·화학원료) 가격 상승 시 마진 압박 가능성",
      "글로벌 경기 둔화 또는 제조·식품 산업 위축 시 수요 감소 리스크",
    ],
    bullCase: "수처리·식품안전 규제 강화와 신흥국 위생 인프라 투자 확대가 장기 성장 동력이 되며, 디지털 모니터링 플랫폼 전환을 통해 구독형 반복 매출 비중이 높아져 프리미엄 밸류에이션이 정당화될 수 있습니다.",
    bearCase: "현재 주가는 이미 52주 최고점 근처로 단기 성장 기대가 충분히 선반영되어 있으며, 금리 환경 변화나 성장 둔화 신호 발생 시 고 PER 종목 특성상 주가 조정 폭이 클 수 있습니다.",
    valuationComment: "PER 41.8배(Forward 31.3배)·PBR 12.97배는 우량 해자 기업 프리미엄을 감안해도 역사적 상단 수준이며, 배당수익률 0.91%는 5년 평균(1.05%) 대비 낮아 현시점은 밸류에이션 매력이 제한적입니다. 배당수익률 1.1~1.2% 수준, 즉 주가 기준 $230~$250 구간 진입 시 장기 배당 투자 관점의 매수 매력이 높아집니다.",
    recentDevelopments: [
      "2024년 수처리 사업부 확장 및 디지털 플랫폼(Ecolab Science Certified) 도입으로 서비스 부가가치 제고",
      "친환경·탄소중립 트렌드에 맞춰 저탄소 수처리·에너지 절감 솔루션 포트폴리오 확대 발표",
    ],
    overallRating: "관망",
    ratingReason: "사업 모델과 배당 품질은 최상위 수준이나, 52주 고점 근접·낮은 배당수익률·높은 PER 등 현재 밸류에이션은 신규 매수보다 조정 대기가 유리한 시점으로 판단",
    targetBuyPrice: 245,
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // ED — Consolidated Edison (배당귀족주, 49년 연속)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    ticker: "ED",
    analyzedAt: "2026-02-23 08:30 KST",
    businessSummary: "Consolidated Edison(ED)은 뉴욕시 및 웨스트체스터 카운티를 중심으로 전기·가스·증기를 공급하는 규제 유틸리티 기업입니다. 약 350만 명의 전기 고객과 110만 명의 가스 고객을 보유하며, 사업의 90% 이상이 규제 수익 기반입니다. 2023년 청정에너지 자회사 Con Edison Transmission을 매각하며 핵심 유틸리티에 집중하고 있습니다.",
    coreProducts: [
      "규제 전기 배전 서비스 (뉴욕시·웨스트체스터)",
      "규제 천연가스 배포 서비스",
      "맨해튼 지역 지역난방 증기 공급",
    ],
    geographicPresence: "미국 뉴욕시·뉴욕주 100% (지역 집중형 규제 유틸리티)",
    dividendStreakYears: 49,
    dividendCAGR5yr: 2.4,
    dividendCAGR10yr: 2.6,
    recentDividendGrowth: "2023년 주당배당금 $3.44로 전년 대비 약 2.5% 인상, 49년 연속 배당 증가 유지 중",
    dividendSafety: "strong",
    dividendSafetyReason: "배당성향 59.1%로 규제 유틸리티 평균 대비 건전하며, 규제 수익 기반의 안정적 현금흐름이 49년 연속 증가를 뒷받침",
    moatTypes: [
      "efficient_scale",
      "intangible_assets",
      "cost_advantage",
    ],
    moatStrength: "wide",
    moatNarrative: "뉴욕시 지역 독점 배전망은 사실상 복제 불가능한 자연독점 인프라로 경쟁자 진입이 구조적으로 차단됩니다. 규제 기관(NYPSC)으로부터 허가받은 운영 프레임워크와 수십 년간 축적된 지하 인프라 네트워크가 강력한 진입장벽입니다. 다만 규제 환경 변화와 허가된 ROE 수준에 따라 수익성이 제한될 수 있습니다.",
    revenueGrowthTrend: "규제 요금 조정 및 인프라 투자 확대에 따라 연 2~3%의 완만하고 안정적인 매출 성장 추세 유지",
    marginTrend: "stable",
    debtLevel: "high",
    financialSummary: "D/E 비율 117.3으로 자본 대비 부채가 상당히 높은 편이나, 규제 유틸리티 특성상 예측 가능한 현금흐름으로 원리금 상환 안정성은 유지됩니다. ROE 8.8%는 허가된 규제 ROE 범위 내로 평범한 수준이며, PBR 1.64는 자산 기반 유틸리티 대비 소폭 프리미엄입니다. 고금리 환경에서 이자비용 부담 증가가 수익성 압박 요인입니다.",
    keyRisks: [
      "고금리 지속에 따른 이자비용 증가 및 자본조달 비용 상승",
      "뉴욕주 규제위원회(NYPSC)의 허가 ROE 조정 및 요금 인상 불허 리스크",
      "기후변화 대응 인프라 현대화에 따른 대규모 자본지출(CAPEX) 부담",
    ],
    bullCase: "뉴욕시 전력 수요 증가(전기차·데이터센터)와 인프라 투자 확대로 규제 자산 기반이 성장하며 안정적 배당 인상이 지속될 수 있습니다. 금리 하락 전환 시 유틸리티 섹터 재평가로 주가 상승 여력이 존재합니다.",
    bearCase: "DDM 적정가 $76.44 대비 현재가 $109.81은 약 43% 고평가 상태로, 금리 상승 지속 시 주가 하락 압력이 상당합니다. 배당 성장률 2.5%는 인플레이션을 하회해 실질 배당가치 희석 우려가 있습니다.",
    valuationComment: "현재가 $109.81은 DDM 적정가 $76.44 대비 크게 고평가되어 있으며, 애널리스트 목표가 $106.88도 현재가를 하회합니다. 52주 위치 75.2%로 상단에 위치해 진입 매력도가 낮습니다. Forward PER 17.1은 유틸리티 섹터 평균 수준이나 배당수익률 3.13%는 5년 평균 3.54% 대비 낮아 역사적으로 저평가 구간이 아닙니다. 배당수익률이 5년 평균(3.54%)에 근접하는 $97~$100 구간을 적정 매수 목표로 설정합니다.",
    recentDevelopments: [
      "2024년 뉴욕주 규제위원회 전기·가스 요금 인상 협상 진행 중 — 허가 ROE 수준이 향후 수익성 결정의 핵심 변수",
      "청정에너지 전환 및 그리드 현대화를 위한 다년간 대규모 CAPEX 계획 발표, 2024~2026년 약 $4~5B 자본지출 예정",
    ],
    overallRating: "관망",
    ratingReason: "49년 배당 귀족 안정성은 탁월하나 현재가는 DDM·목표가 대비 고평가이며 배당수익률도 역사적 평균 이하로 진입 시점으로 부적합",
    targetBuyPrice: 98,
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // EXR — Extra Space Storage (배당귀족주, 14년 연속)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    ticker: "EXR",
    analyzedAt: "2026-02-23 09:00 KST",
    businessSummary: "EXR(Extra Space Storage)는 2023년 Life Storage 인수합병을 통해 미국 최대 자가창고(Self-Storage) 리츠로 등극한 기업이다. 전국 3,800개 이상의 시설을 운영하며 개인·기업 고객 대상 다양한 크기의 창고 공간을 임대한다. 브랜드 인지도와 규모의 경제를 바탕으로 안정적인 입주율과 임대료 인상을 이끌어왔다.",
    coreProducts: [
      "자가창고 유닛 임대 (개인·기업)",
      "제3자 창고 운영 관리 서비스",
      "창고 보험 및 부가 서비스",
    ],
    geographicPresence: "미국 전역 약 100% (40개 이상 주 분산 운영, 주요 거점: 텍사스·플로리다·캘리포니아·뉴욕)",
    dividendStreakYears: 14,
    dividendCAGR5yr: 8.5,
    dividendCAGR10yr: 14.2,
    recentDividendGrowth: "최근 3년 CAGR 2.6%로 이전 10년 대비 급격히 둔화, LSI 인수 후 재무 부담으로 배당 성장 속도 조정 국면",
    dividendSafety: "moderate",
    dividendSafetyReason: "GAAP 기준 배당성향 145%로 과도해 보이나 리츠 특성상 FFO 기준으로는 양호하며, 다만 D/E 97.7의 높은 레버리지와 금리 환경이 잠재 위험 요소",
    moatTypes: [
      "efficient_scale",
      "brand",
      "cost_advantage",
    ],
    moatStrength: "narrow",
    moatNarrative: "미국 최대 규모의 창고 운영 네트워크는 효율적 규모의 경제를 통해 신규 경쟁자의 진입을 억제한다. 그러나 자가창고 산업은 진입장벽이 낮고 Public Storage·CubeSmart 등 강력한 경쟁자가 존재해 넓은 해자로 보기는 어렵다. 브랜드 인지도와 디지털 마케팅 역량이 점유율 유지에 기여하는 수준이다.",
    revenueGrowthTrend: "LSI 인수 효과로 2023년 매출 급증, 그러나 2024년 이후 공실률 상승 및 임대료 압력으로 유기적 성장 둔화 추세",
    marginTrend: "contracting",
    debtLevel: "high",
    financialSummary: "LSI 인수로 부채가 대폭 증가해 D/E 비율이 97.7에 달하며 금리 부담이 수익성을 압박하고 있다. ROE 7.0%는 리츠 섹터 내에서 낮은 편으로 인수 후 자산 희석 효과가 반영된 결과다. 다만 창고 자산 자체는 경기 방어적 특성이 있어 현금흐름 안정성은 일정 수준 유지된다.",
    keyRisks: [
      "고금리 장기화 시 높은 부채비율로 인한 이자비용 급증 및 FFO 압박",
      "공급 과잉: 팬데믹 이후 자가창고 신규 공급 증가로 입주율 및 임대료 하락 압력",
      "경기 둔화 시 소비자 지출 감소로 창고 수요 위축 가능성",
    ],
    bullCase: "금리 인하 사이클 진입 시 부채 비용 감소와 리츠 섹터 전반 재평가로 주가 반등이 기대되며, 업계 최대 규모의 플랫폼으로 운영 효율화와 수수료 사업 확대를 통한 수익 다각화가 가능하다.",
    bearCase: "금리 고착화와 창고 공급 과잉이 겹칠 경우 임대료 성장 정체와 배당 성장 동결이 이어질 수 있으며, 과도한 부채로 인한 신용 등급 하향 리스크도 배제할 수 없다.",
    valuationComment: "현재가 $152.75는 DDM 적정가 $147.27 및 애널리스트 목표가 $149.85를 모두 상회하여 단기 고평가 구간으로 판단된다. 52주 고점 대비 76% 수준에 위치해 추가 상승 모멘텀은 제한적이며, $140~145 수준으로 조정 시 매수 매력이 높아진다.",
    recentDevelopments: [
      "2023년 Life Storage(LSI) 인수 완료로 미국 최대 자가창고 리츠 등극, 단기 부채 부담 증가",
      "2024~2025년 일부 시장의 공실률 상승 및 임대료 성장 둔화로 FFO 가이던스 보수적 유지",
    ],
    overallRating: "관망",
    ratingReason: "현재가가 DDM·애널리스트 목표가 대비 고평가 구간이며 배당 성장 모멘텀도 둔화, $140~145 수준 조정 시 재진입 검토",
    targetBuyPrice: 145,
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // GD — General Dynamics (배당귀족주, 32년 연속)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    ticker: "GD",
    analyzedAt: "2026-02-23 09:30 KST",
    businessSummary: "General Dynamics는 미국 최대 방산 기업 중 하나로, 전투함·잠수함(Gulfstream 항공기) 등 육해공 방위 시스템과 IT 서비스를 제공한다. 주요 사업부는 항공우주(Gulfstream 비즈니스젯), 해양·핵잠수함, 지상전투차량, 기술 서비스(GDIT)로 구성되며, 미 국방부와 NATO 동맹국에 장기 계약 기반으로 납품한다. 지정학적 긴장 고조와 국방예산 증가 기조 속에서 수주잔고가 꾸준히 확대되고 있다.",
    coreProducts: [
      "Virginia급·컬럼비아급 핵잠수함",
      "Gulfstream 비즈니스젯 (G700·G800)",
      "Abrams 전차 및 지상전투차량 (AJAX·Stryker)",
      "GDIT IT·사이버 서비스",
    ],
    geographicPresence: "미국 약 80% · 국제(영국·캐나다·호주·NATO 동맹국) 약 20%",
    dividendStreakYears: 32,
    dividendCAGR5yr: 8.5,
    dividendCAGR10yr: 10.2,
    recentDividendGrowth: "2024년 분기 배당 $1.42→$1.50 인상 (5.6% 증가), 32년 연속 배당 증가 유지",
    dividendSafety: "strong",
    dividendSafetyReason: "배당성향 38.8%로 여유 있고, 국방부 장기계약 기반 안정적 FCF가 배당을 견고하게 뒷받침",
    moatTypes: [
      "switching_costs",
      "intangible_assets",
      "efficient_scale",
    ],
    moatStrength: "wide",
    moatNarrative: "핵잠수함·전투함 분야에서 미 해군의 사실상 유일한 주계약자 지위(Newport News와 협력 또는 독점)를 보유하며, 수십 년간 축적된 기밀취급 인가·설계 노하우는 신규 진입을 사실상 차단한다. Gulfstream은 초대형 비즈니스젯 시장에서 Bombardier와 양강 구도를 유지하며 강력한 브랜드 프리미엄을 누린다. 정부 조달 특성상 일단 선정되면 교체 비용이 극히 높아 고착 효과(switching cost)가 매우 강하다.",
    revenueGrowthTrend: "최근 3년 연평균 매출 성장률 약 7~9%, 방산 수요 증가와 Gulfstream G700 양산 확대로 성장 가속 중",
    marginTrend: "expanding",
    debtLevel: "moderate",
    financialSummary: "D/E 38.2로 방산업종 대비 보수적인 부채 수준을 유지하고 있으며, ROE 17.7%는 자본 효율성이 양호함을 나타낸다. 수주잔고(백로그) 약 900억 달러 이상으로 향후 3~4년 매출 가시성이 높고, 안정적 FCF 창출로 배당·자사주매입을 병행할 여력이 충분하다.",
    keyRisks: [
      "미국 국방예산 삭감 또는 계속결의(CR) 지속 시 프로그램 지연 리스크",
      "컬럼비아급 잠수함 납기 지연 및 비용 초과 리스크 (조선 인력 부족)",
      "Gulfstream 비즈니스젯 경기 민감성 — 글로벌 경기침체 시 기업 수요 급감 가능",
    ],
    bullCase: "NATO·인도태평양 국방비 증가 기조로 잠수함·지상차량 수주가 지속 확대되고, Gulfstream G800 인도 본격화로 항공우주 마진이 크게 개선되어 EPS 성장이 가속화될 수 있다.",
    bearCase: "미 행정부의 국방예산 구조조정(DOGE 효과)으로 핵심 프로그램 예산이 삭감되거나, 컬럼비아급 생산 병목이 심화되어 수익성이 악화될 수 있다.",
    valuationComment: "현재 Forward PER 19.4x는 방산 피어 대비 적정 수준이나, 52주 고점 대비 86% 위치로 밸류에이션 부담이 존재한다. 배당수익률 1.71%는 5년 평균(2.10%) 대비 낮아 역사적으로 다소 고평가 구간에 속한다. 수익률이 2.0% 이상(주가 $300 전후)으로 회귀 시 매력적인 매수 구간으로, 단기 조정 시 $315~$330 구간 분할매수 전략이 합리적이다.",
    recentDevelopments: [
      "2024년 미 해군 컬럼비아급 SSBN 2번함(Wisconsin) 건조 착수 및 다년 계약 확정",
      "Gulfstream G700 FAA 인증 획득 후 양산 인도 가속화, 2025년 G800 초도 인도 예정",
    ],
    overallRating: "관망",
    ratingReason: "사업 펀더멘털과 해자는 탁월하나 현재가는 역사적 밸류에이션 상단에 위치해 있어, $315~$330 조정 시 매수 관점으로 접근하는 것이 유리",
    targetBuyPrice: 322,
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // IVZ — Invesco (배당귀족주, 13년 연속)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    ticker: "IVZ",
    analyzedAt: "2026-02-23 10:00 KST",
    businessSummary: "Invesco(IVZ)는 전통 액티브 전략과 ETF를 함께 운영하는 글로벌 자산운용사로, 개인·기관 고객의 주식/채권/대체자산 운용 수요를 다룹니다. 운용보수와 성과보수가 핵심 수익원이며, 실적은 운용자산(AUM) 규모와 시장 방향성에 크게 연동됩니다.",
    coreProducts: [
      "ETF(특히 Invesco QQQ 등 패시브/스마트베타 라인업)",
      "액티브 주식·채권·멀티에셋 펀드",
      "기관 대상 대체투자 및 솔루션 운용",
    ],
    geographicPresence: "미국 중심의 글로벌 운영(북미 비중이 크고, 유럽·아시아를 포함한 국제 사업 병행)",
    dividendStreakYears: 13,
    dividendCAGR5yr: null,
    dividendCAGR10yr: null,
    recentDividendGrowth: "최근 3년 배당 CAGR 12.5%로 배당 증가 모멘텀은 양호하나, 절대 배당수익률은 과거 평균 대비 낮은 구간입니다.",
    dividendSafety: "moderate",
    dividendSafetyReason: "배당성향 56.5%는 감내 가능한 수준이지만, 자산운용업 특성상 이익이 시장 변동에 민감해 배당 안정성은 경기·증시 사이클 영향을 받습니다.",
    moatTypes: [
      "brand",
      "switching_costs",
      "intangible_assets",
      "efficient_scale",
    ],
    moatStrength: "narrow",
    moatNarrative: "Invesco는 장기간 축적한 브랜드, 운용 트랙레코드, 유통 네트워크를 통해 일정한 진입장벽을 보유합니다. 다만 자산운용업은 상품 비교가 쉬워 가격 경쟁과 성과 경쟁이 치열해 해자가 매우 넓다고 보긴 어렵습니다. 규모의 경제는 존재하지만 수수료 압박이 이를 일부 상쇄합니다.",
    revenueGrowthTrend: "시장 상승기에는 AUM 확대와 함께 회복, 하락기에는 보수수익 둔화가 나타나는 경기민감·사이클형 추세입니다.",
    marginTrend: "contracting",
    debtLevel: "high",
    financialSummary: "Forward PER 8.7, PBR 0.96으로 밸류에이션은 역사적 평균 대비 부담이 크지 않은 편입니다. 다만 D/E 14.0은 레버리지 부담 신호로 해석될 수 있어 금리·신용환경 점검이 필요합니다. 수익구조가 시장 민감형이므로 실적 가시성은 방어주 대비 낮습니다.",
    keyRisks: [
      "주식·채권 시장 조정 시 AUM 감소로 인한 보수수익 둔화",
      "ETF/패시브 확산에 따른 수수료 경쟁 심화",
      "상대적으로 높은 레버리지와 금리 환경 변화에 따른 재무 부담",
    ],
    bullCase: "위험자산 강세와 자금 유입이 이어지면 AUM 증가로 이익 레버리지가 확대될 수 있습니다. 저평가 구간(PBR 1배 내외) 재평가와 함께 배당 성장 스토리가 부각될 가능성이 있습니다.",
    bearCase: "시장 변동성 확대로 자금 유출이 발생하면 수수료 수익과 이익이 동시에 압박받을 수 있습니다. 수수료 인하 경쟁이 지속되면 밸류에이션 할인 상태가 장기화될 수 있습니다.",
    valuationComment: "현재 배당수익률 3.17%는 5년 평균 4.13%보다 낮아 배당 관점에서는 비싸게 거래되는 구간으로 해석됩니다. 단순 배당역산 기준(연배당 0.84달러/평균수익률 4.13%) 적정 매수 구간은 약 20~22달러대로 보는 것이 보수적입니다.",
    recentDevelopments: [
      "애널리스트 컨센서스는 buy이며 목표가 30.14달러로 약 13.9% 상승여력을 반영",
      "주가가 52주 밴드 상단 근처(위치 82.6%)에 있어 단기 진입 가격 메리트는 제한적",
    ],
    overallRating: "관망",
    ratingReason: "이익·배당 체력은 무난하지만 현재 배당수익률이 과거 평균 대비 낮아 배당투자 관점의 안전마진이 부족합니다.",
    targetBuyPrice: 21.5,
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // LEG — Leggett & Platt (배당귀족주, 52년 연속)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    ticker: "LEG",
    analyzedAt: "2026-02-23 10:30 KST",
    businessSummary: "Leggett & Platt는 침구(매트리스 스프링/폼 컴포넌트), 가구·바닥재·텍스타일 관련 부품을 공급하는 산업재 성격의 소비재 밸류체인 기업입니다. 완제품 브랜드보다 B2B 부품·소재 비중이 높고, 주거/가구 수요와 경기 민감도가 실적에 크게 반영됩니다. 최근에는 수요 둔화와 포트폴리오 재편 속에서 수익성 방어와 현금흐름 안정화가 핵심 과제입니다.",
    coreProducts: [
      "매트리스용 스프링·침구 부품",
      "가구용 메커니즘·프레임·컴포넌트",
      "바닥재/텍스타일 관련 산업용 소재",
    ],
    geographicPresence: "북미 중심(미국 비중이 높은 구조) · 유럽/아시아 등 국제 매출은 보조적 비중",
    dividendStreakYears: 52,
    dividendCAGR5yr: null,
    dividendCAGR10yr: null,
    recentDividendGrowth: "최근 배당금이 과거 대비 큰 폭으로 조정(감배)되며 배당 성장 스토리가 약화되었습니다.",
    dividendSafety: "watch",
    dividendSafetyReason: "현재 배당성향 수치 자체는 낮지만 최근 감배 이력과 높은 부채 부담으로 배당 신뢰도는 경계 구간입니다.",
    moatTypes: [
      "cost_advantage",
      "efficient_scale",
    ],
    moatStrength: "narrow",
    moatNarrative: "대량 생산·공급망 운영에서 규모의 경제와 원가 경쟁력이 일부 존재합니다. 다만 제품 차별화가 제한적이고 경기 사이클 영향이 커 강한 가격결정력은 약한 편입니다. 따라서 해자는 존재하더라도 폭은 좁은 편으로 판단됩니다.",
    revenueGrowthTrend: "최근 몇 년은 최종수요 둔화 영향으로 저성장 또는 역성장 압력이 우세합니다.",
    marginTrend: "contracting",
    debtLevel: "high",
    financialSummary: "PER이 낮아 보이지만 이는 이익 변동성과 사이클 저점 효과를 함께 반영한 멀티플일 수 있습니다. ROE는 높지만 D/E 161.9 수준의 레버리지 영향이 크며, 자본구조 리스크를 동반합니다. 전반적으로 밸류는 싸 보이나 재무 체력은 방어적이라 보기 어렵습니다.",
    keyRisks: [
      "주택·가구 경기 둔화 장기화에 따른 수요 부진",
      "높은 부채비율로 인한 금리·차환 리스크",
      "추가 감배 또는 주주환원 축소 가능성",
    ],
    bullCase: "주택/가구 업황이 반등하고 원가 안정이 이어지면 이익 정상화와 밸류에이션 리레이팅이 가능할 수 있습니다. 재무개선이 동반되면 배당 정책 신뢰 회복 여지도 있습니다.",
    bearCase: "경기 둔화가 길어지면 매출·마진 압박이 지속되고, 높은 레버리지가 주주가치 훼손으로 이어질 수 있습니다. 이 경우 배당 매력 회복이 지연되며 주가 박스권 또는 추가 하락 가능성이 있습니다.",
    valuationComment: "현재 주가는 낮은 PER 대비 저평가처럼 보이지만, DDM 적정가와 최근 배당정책 변화(감배)를 고려하면 단순 저PER만으로 매수하기 어렵습니다. 업황·재무 안정 신호 확인 전에는 보수적으로 접근하고, 안전마진이 확보되는 구간에서 분할 매수가 적절합니다.",
    recentDevelopments: [
      "배당금 수준이 과거 대비 크게 낮아지며 배당주 투자 매력도가 약화",
      "애널리스트 컨센서스는 hold이며 목표가 기준 상승여력은 제한적(약 4.9%)",
    ],
    overallRating: "관망",
    ratingReason: "저평가 지표 대비 배당 신뢰도와 재무레버리지 리스크가 커 확인 후 접근이 유리합니다.",
    targetBuyPrice: 10,
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // LIN — Linde (배당귀족주, 31년 연속)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    ticker: "LIN",
    analyzedAt: "2026-02-23 11:00 KST",
    businessSummary: "Linde는 산업용 가스(산소·질소·아르곤·수소 등)와 엔지니어링 솔루션을 글로벌로 공급하는 선도 기업입니다. 헬스케어, 반도체, 화학, 에너지, 제조업 등 필수 공정에 들어가는 가스를 장기 계약 기반으로 제공해 경기 변동에도 상대적으로 방어적인 매출 구조를 갖고 있습니다.",
    coreProducts: [
      "산업용 대기·공정 가스(산소·질소·아르곤)",
      "수소 및 청정에너지 관련 가스 솔루션",
      "온사이트 플랜트/배관 공급 및 엔지니어링 서비스",
    ],
    geographicPresence: "미주 비중이 가장 크고 유럽·아시아태평양에 분산된 글로벌 매출 구조",
    dividendStreakYears: 31,
    dividendCAGR5yr: null,
    dividendCAGR10yr: null,
    recentDividendGrowth: "최근 3년 배당 CAGR 8.6%로, 성숙 대형주 대비 견조한 배당 성장세를 유지하고 있습니다.",
    dividendSafety: "strong",
    dividendSafetyReason: "배당성향 41.1%로 여력이 충분하고, 필수재 성격의 산업가스 사업에서 안정적 현금흐름이 발생합니다.",
    moatTypes: [
      "switching_costs",
      "cost_advantage",
      "efficient_scale",
      "intangible_assets",
    ],
    moatStrength: "wide",
    moatNarrative: "온사이트 공급 계약과 공정 통합 특성상 고객 전환비용이 높아 계약 유지율이 높습니다. 대규모 생산·물류 인프라와 지역 독점적 공급망은 규모의 경제를 강화하고 신규 진입을 어렵게 만듭니다. 안전·품질·규제 대응 역량도 장기적으로 무형자산형 진입장벽으로 작동합니다.",
    revenueGrowthTrend: "가격 전가력과 고부가가치 가스 수요(전자·헬스케어·청정에너지)로 중장기 완만한 성장 추세입니다.",
    marginTrend: "stable",
    debtLevel: "moderate",
    financialSummary: "ROE 17.8%로 수익성이 양호하며, 배당성향이 보수적이라 배당 지속가능성이 높습니다. D/E 67.9는 절대적으로 낮지는 않지만 안정적인 계약형 현금흐름을 감안하면 관리 가능한 수준입니다. 다만 PER(TTM) 34.0, 52주 위치 98.3%로 밸류에이션 부담은 존재합니다.",
    keyRisks: [
      "고평가 구간에서의 멀티플 디레이팅 리스크",
      "에너지·전력비 변동에 따른 마진 압박 가능성",
      "산업생산 둔화 시 대형 고객의 가스 수요 조정",
    ],
    bullCase: "AI·반도체·청정에너지 투자 확대로 고순도/고부가가스 수요가 증가하면 이익 성장과 추가 배당 인상이 이어질 수 있습니다. 높은 진입장벽 덕분에 가격 전가력이 유지되면 밸류에이션 프리미엄도 장기 지속 가능합니다.",
    bearCase: "현재 주가가 고점권에 가까워 실적이 기대에 못 미치면 PER 조정으로 주가 변동성이 커질 수 있습니다. 경기 둔화와 비용 상승이 겹치면 이익 성장률이 둔화될 수 있습니다.",
    valuationComment: "현재 수익률(1.21%)이 5년 평균(1.32%)보다 낮고 52주 고점권에 있어 신규 매수 매력은 제한적입니다. 배당수익률 평균 회귀 관점에서는 약 $450~$460 구간이 분할 매수에 더 유리한 가격대로 판단됩니다.",
    recentDevelopments: [
      "반도체·전자 소재향 고순도 가스 수요가 견조해 고부가 제품 믹스가 유지되는 흐름",
      "수소·청정에너지 관련 프로젝트 확대 기대가 중장기 성장 스토리를 뒷받침",
    ],
    overallRating: "관망",
    ratingReason: "사업 질과 배당 안전성은 매우 우수하지만, 현재 가격은 밸류에이션과 상승여력이 다소 제한적입니다.",
    targetBuyPrice: 455,
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // MDT — Medtronic (배당귀족주, 46년 연속)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    ticker: "MDT",
    analyzedAt: "2026-02-23 11:30 KST",
    businessSummary: "메드트로닉은 심장·혈관, 신경과학, 의료수술, 당뇨 관리 등 광범위한 의료기기를 개발·제조·판매하는 글로벌 헬스케어 기업입니다. 병원·의사·환자 치료 경로에 깊게 들어간 제품 포트폴리오와 임상 데이터 기반의 솔루션을 통해 반복 매출을 창출합니다. 규제 대응 역량과 글로벌 유통망을 바탕으로 성숙 시장과 신흥 시장을 동시에 공략하고 있습니다.",
    coreProducts: [
      "심장 리듬·심혈관 치료기기(페이스메이커, ICD, 구조적 심장 솔루션)",
      "수술·신경과학 장비(외과 스테이플링, 신경자극/척추 관련 기기)",
      "당뇨 관리 솔루션(인슐린 펌프 및 연속혈당관리 연계 시스템)",
    ],
    geographicPresence: "미국 약 50% 내외 · 국제 약 50% 내외의 비교적 균형된 매출 구조",
    dividendStreakYears: 46,
    dividendCAGR5yr: null,
    dividendCAGR10yr: null,
    recentDividendGrowth: "46년 연속 배당 증가를 이어가고 있으나 최근 인상 폭은 과거 대비 완만한 편입니다.",
    dividendSafety: "moderate",
    dividendSafetyReason: "배당 귀족 이력은 강점이지만 배당성향 76.4%와 부채비율(D/E 59.6)을 감안하면 안전마진은 중간 수준입니다.",
    moatTypes: [
      "switching_costs",
      "intangible_assets",
      "brand",
      "efficient_scale",
    ],
    moatStrength: "narrow",
    moatNarrative: "의료기기는 임상 데이터, 규제 인허가, 병원 내 채택 프로세스가 진입장벽으로 작용해 교체 비용이 높습니다. 메드트로닉은 다년간 축적한 브랜드 신뢰와 광범위한 제품군으로 병원 조달에서 유리한 위치를 갖습니다. 다만 일부 사업은 경쟁 심화와 가격 압력으로 해자의 폭이 매우 넓다기보다 견조한 협폭 해자에 가깝습니다.",
    revenueGrowthTrend: "최근 몇 년은 저단일 자릿수의 완만한 성장/정체 구간이 반복되는 흐름입니다.",
    marginTrend: "stable",
    debtLevel: "moderate",
    financialSummary: "Forward PER 15.9는 Trailing PER 26.2 대비 이익 정상화 기대를 반영합니다. PBR 2.55는 자본집약적 의료기기 업종 내에서 과도하게 높지는 않지만, 고성장 프리미엄 구간도 아닙니다. 전반적으로 현금창출력은 배당을 지지하나, 높은 배당성향과 중간 수준 레버리지를 함께 모니터링할 필요가 있습니다.",
    keyRisks: [
      "의료기기 규제/리콜 이슈 발생 시 실적 및 평판 훼손 위험",
      "병원 예산 압박 및 경쟁 심화에 따른 가격·마진 하락 위험",
      "신제품 출시 지연 또는 임상 성과 부진 시 성장 둔화 위험",
    ],
    bullCase: "신제품 사이클과 시술량 회복이 맞물리면 이익 개선 속도가 빨라져 Forward 멀티플 재평가가 가능할 수 있습니다. 애널리스트 목표가 기준 15%대 상승여력과 안정적 배당이 총수익률을 지지할 수 있습니다.",
    bearCase: "수요 회복이 지연되고 가격 압력이 지속되면 이익 정상화가 늦어져 밸류에이션 매력이 약화될 수 있습니다. 배당성향이 높은 상태에서 추가 투자·R&D 부담이 커지면 배당 성장률이 더 둔화될 위험이 있습니다.",
    valuationComment: "현재 주가는 52주 범위 중상단(64.6%)으로 극단적 저평가 구간은 아닙니다. DDM 값($19.72)은 저성장 가정 한계로 실무 참고도가 낮고, 상대가치 기준으로는 90달러 초반~중반 접근 시 분할매수 매력이 커지는 구간으로 판단됩니다.",
    recentDevelopments: [
      "이익 기준 밸류에이션이 Trailing 대비 Forward에서 크게 낮아져 수익성 회복 기대가 반영되는 국면",
      "애널리스트 컨센서스가 buy이며 목표가 $111.77로 제시되어 중기 업사이드 기대가 유지됨",
    ],
    overallRating: "보유",
    ratingReason: "배당 연속성·사업 방어력은 매력적이지만, 배당성향과 성장 둔화를 고려하면 공격적 신규 매수보다 보유/분할 접근이 합리적입니다.",
    targetBuyPrice: 92,
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // MKC — McCormick (배당귀족주, 37년 연속)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    ticker: "MKC",
    analyzedAt: "2026-02-23 12:00 KST",
    businessSummary: "McCormick은 향신료, 조미료, 소스 등 풍미 솔루션을 소비자용 브랜드 제품과 식품업체 대상 B2B 솔루션으로 동시에 공급하는 글로벌 식품기업입니다. 필수소비재 성격이 강해 경기 둔화 국면에서도 수요 변동이 상대적으로 작고, 브랜드 파워와 유통망을 기반으로 안정적인 현금흐름을 창출합니다.",
    coreProducts: [
      "향신료·허브·시즈닝",
      "소스·마리네이드·핫소스",
      "식품기업/외식업체용 플레이버 솔루션",
    ],
    geographicPresence: "미국 중심 + 유럽·아시아·라틴아메리카 등 글로벌 판매(북미 비중이 가장 큰 구조)",
    dividendStreakYears: 37,
    dividendCAGR5yr: null,
    dividendCAGR10yr: null,
    recentDividendGrowth: "최근 3년 배당 CAGR 6.9%로, 성숙 필수소비재 내에서는 무난한 중단기 배당 성장 흐름입니다.",
    dividendSafety: "moderate",
    dividendSafetyReason: "배당성향 61.4%는 관리 가능한 수준이지만, 높은 부채비율(D/E 73.2)과 원가 변동성은 배당 여력을 제약할 수 있습니다.",
    moatTypes: [
      "brand",
      "intangible_assets",
      "cost_advantage",
      "efficient_scale",
    ],
    moatStrength: "narrow",
    moatNarrative: "McCormick은 오랜 기간 축적한 브랜드 인지도와 레시피·조달·품질관리 역량으로 가격 전가력을 보유합니다. 대형 유통 채널과 글로벌 공급망을 갖춰 원재료 조달 및 제품 공급에서 규모의 이점을 누리지만, 완전 독점적 구조는 아니어서 해자는 넓기보다 견고한 협소 해자에 가깝습니다.",
    revenueGrowthTrend: "저성장·안정 성장 구간에서 가격/믹스 개선 중심의 완만한 매출 성장 추세입니다.",
    marginTrend: "stable",
    debtLevel: "high",
    financialSummary: "ROE 14.2%로 수익성은 양호하며, 필수소비재 특성상 실적 방어력이 비교적 좋습니다. 다만 PER 23.4(Forward 20.4)로 밸류에이션 부담이 완전히 해소된 구간은 아니고, 레버리지 수준이 높아 금리 및 이자비용 환경에 대한 민감도는 남아 있습니다.",
    keyRisks: [
      "원재료(농산물·물류·포장) 비용 재상승에 따른 마진 압박",
      "높은 부채 수준으로 인한 금리·차환 리스크",
      "소비 둔화 및 유통 채널 내 판촉 경쟁 심화",
    ],
    bullCase: "원가 안정과 가격 전가가 동시에 작동하면 이익률이 개선되고, 배당 성장의 지속 가능성이 강화될 수 있습니다. 현재 배당수익률이 과거 5년 평균 대비 높아 밸류에이션 재평가 여지도 있습니다.",
    bearCase: "원가 인플레이션 재발과 소비 위축이 겹치면 매출 성장 둔화와 마진 하락이 동반될 수 있습니다. 이 경우 높은 레버리지가 이익 및 배당 성장의 유연성을 떨어뜨릴 수 있습니다.",
    valuationComment: "현재 주가는 52주 범위 하단(33.4%)에 있고 배당수익률이 5년 평균(1.98%) 대비 높은 2.80%로 상대 매력은 개선되었습니다. 다만 절대 PER은 여전히 중립 이상이므로 분할 접근이 유효하며, 보수적으로는 중반 60달러 구간에서 매수 매력이 더 높습니다. 제시된 DDM 적정가(1920달러)는 입력 가정 왜곡 가능성이 커 실무 판단 지표로는 신뢰도가 낮습니다.",
    recentDevelopments: [
      "애널리스트 컨센서스 목표가 73.31달러로 현재가 대비 약 7.0% 상방을 반영",
      "배당 귀족주로서 37년 연속 배당 증가 트랙레코드를 유지",
    ],
    overallRating: "관심",
    ratingReason: "방어적 사업과 배당의 질은 좋지만, 레버리지와 밸류에이션을 감안하면 추격 매수보다 가격 메리트 구간 대기가 유리합니다.",
    targetBuyPrice: 64,
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // NEE — NextEra Energy (배당귀족주, 29년 연속)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    ticker: "NEE",
    analyzedAt: "2026-02-23 12:30 KST",
    businessSummary: "넥스트에라 에너지는 플로리다 전력사업(FPL) 중심의 규제형 유틸리티와 대규모 재생에너지 개발·운영 사업을 함께 보유한 미국 대표 전력 기업입니다. 안정적인 규제 자산에서 현금흐름을 확보하면서, 풍력·태양광·저장장치 확장으로 중장기 성장을 추구합니다.",
    coreProducts: [
      "규제 전력 판매(FPL)",
      "풍력·태양광 발전 및 전력계약(PPA)",
      "배터리 에너지저장장치(ESS) 개발·운영",
    ],
    geographicPresence: "미국 95%+ 중심 (플로리다 및 미국 전역 재생에너지 자산) · 국제 비중 제한적",
    dividendStreakYears: 29,
    dividendCAGR5yr: null,
    dividendCAGR10yr: null,
    recentDividendGrowth: "최근 3년 배당 CAGR 10.1%로 고배당보다는 배당성장 성격이 뚜렷합니다.",
    dividendSafety: "moderate",
    dividendSafetyReason: "배당성향 68.7%로 관리 가능한 구간이지만, 높은 부채비율(D/E 146.2)과 금리 민감도가 안전성의 상단을 제한합니다.",
    moatTypes: [
      "efficient_scale",
      "cost_advantage",
      "intangible_assets",
    ],
    moatStrength: "narrow",
    moatNarrative: "규제 유틸리티는 지역 독점적 성격과 대규모 인프라 진입장벽으로 효율적 규모의 해자를 가집니다. 재생에너지 부문에서도 프로젝트 개발·조달·운영 역량을 통한 원가 경쟁력이 강점입니다. 다만 자본집약·금리민감 산업 특성상 해자는 넓다기보다 견고한 협소 해자에 가깝습니다.",
    revenueGrowthTrend: "규제요금 기반의 안정 성장에 재생에너지 증설이 더해져 중기적으로 완만한 성장 추세입니다.",
    marginTrend: "stable",
    debtLevel: "high",
    financialSummary: "ROE 8.4%는 유틸리티 업종 특성을 감안하면 무난한 수준입니다. 다만 D/E 146.2로 레버리지가 높아 금리 환경 변화에 민감합니다. 배당성향 68.7%와 지속 배당성장 이력은 긍정적이나, 고평가 구간에서는 총수익률 여지가 제한될 수 있습니다.",
    keyRisks: [
      "고금리 장기화에 따른 자본비용 상승 및 밸류에이션 압축",
      "규제환경 변화(허용수익률·요금 승인 지연)로 인한 실적 변동",
      "재생에너지 프로젝트의 건설비·지연 리스크",
    ],
    bullCase: "금리 하향 안정과 재생에너지 수주 확대가 동시에 진행되면 이익 성장과 멀티플 재평가가 가능해집니다. 배당성장 지속 시 장기 복리 수익이 강화될 수 있습니다.",
    bearCase: "현재 주가가 52주 고점권(90%)이고 목표가 괴리가 0.6%에 불과해 단기 업사이드는 제한적입니다. 금리 재상승이나 규제·프로젝트 변수 발생 시 밸류에이션 조정 위험이 큽니다.",
    valuationComment: "Trailing PER 27.9, Forward PER 21.0은 유틸리티 대비 성장 프리미엄이 반영된 수준입니다. 현재가가 목표가에 근접해 추격매수 매력은 낮고, 밸류 부담 완화를 위해 80달러 중후반 이하에서 분할 접근이 더 합리적입니다.",
    recentDevelopments: [
      "미국 전력수요 구조 변화(데이터센터·전력망 투자)로 유틸리티 성장 기대가 유지",
      "재생에너지·저장장치 확대 기조는 유효하나 금리와 자본조달 환경이 수익성의 핵심 변수",
    ],
    overallRating: "관망",
    ratingReason: "배당성장과 사업 질은 우수하지만 현재 주가·목표가 괴리가 작고 고점권 밸류 부담이 커 신규 진입은 가격 조정 대기가 유리합니다.",
    targetBuyPrice: 86,
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // NTRS — Northern Trust (배당귀족주, 33년 연속)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    ticker: "NTRS",
    analyzedAt: "2026-02-23 13:00 KST",
    businessSummary: "Northern Trust는 기관투자자와 고액자산가를 대상으로 자산관리(Wealth Management)와 자산서비스(Asset Servicing)를 제공하는 미국계 금융회사입니다. 수탁·커스터디, 펀드관리, 운용지원, 신탁 및 프라이빗뱅킹이 핵심이며, 금리 환경과 시장 변동성에 따라 이자이익과 수수료 수익이 함께 영향을 받는 구조입니다.",
    coreProducts: [
      "자산수탁·커스터디 및 펀드 어드민",
      "기관 대상 자산운용·운용지원 서비스",
      "고액자산가 대상 웰스매니지먼트·신탁 서비스",
    ],
    geographicPresence: "미국 중심의 매출/이익 구조이며, 유럽·아시아 등 국제 비중이 보조적으로 기여하는 형태",
    dividendStreakYears: 33,
    dividendCAGR5yr: null,
    dividendCAGR10yr: null,
    recentDividendGrowth: "최근 3년 배당 CAGR이 2.2%로, 배당은 증가했지만 인상 속도는 완만한 편입니다.",
    dividendSafety: "strong",
    dividendSafetyReason: "배당성향 35.5%로 부담이 낮고 33년 연속 증배 이력이 있어 배당 지속 가능성은 높은 편입니다.",
    moatTypes: [
      "switching_costs",
      "intangible_assets",
      "efficient_scale",
    ],
    moatStrength: "narrow",
    moatNarrative: "기관 수탁·자산서비스는 운영 안정성, 규제 대응, 시스템 연동이 중요해 고객 교체비용이 높습니다. 오랜 트랙레코드와 신뢰 기반의 브랜드/무형자산이 계약 유지율에 기여합니다. 다만 초대형 글로벌 수탁은행과의 경쟁이 강해 해자는 넓다기보다 견고한 협소 해자에 가깝습니다.",
    revenueGrowthTrend: "이자이익과 수수료 수익이 혼재된 가운데 전반적으로 저성장·완만한 사이클 흐름입니다.",
    marginTrend: "stable",
    debtLevel: "moderate",
    financialSummary: "ROE 13.5%는 금융주 내에서 무난한 수익성을 시사하고, PBR 2.23은 프리미엄 밸류에이션을 반영합니다. Trailing PER 16.6 대비 Forward PER 13.0은 이익 개선 기대를 보여주지만, 현재 주가가 52주 상단(83.1%) 근처라 밸류 부담이 일부 존재합니다. 배당성향이 낮아 배당 여력은 양호하나, 배당 매력도(수익률)는 과거 평균 대비 낮습니다.",
    keyRisks: [
      "금리 하락 국면에서 순이자마진 및 이자이익 둔화 가능성",
      "시장 변동성 확대 시 AUC/AUM 기반 수수료 수익 변동",
      "규제 강화·컴플라이언스 비용 증가 및 대형사와의 가격 경쟁",
    ],
    bullCase: "이익이 예상대로 개선되어 Forward PER 기준 밸류가 정당화되고, 안정적 자본정책과 점진적 배당 인상이 이어지면 주가가 애널리스트 목표가 구간에 근접할 수 있습니다. 기관 고객 기반의 높은 유지율이 하방을 완충할 가능성도 있습니다.",
    bearCase: "배당 성장 둔화가 지속되고 금리/시장 환경이 비우호적으로 바뀌면 수익성 개선이 지연될 수 있습니다. 현재 낮은 배당수익률과 높은 52주 위치를 감안하면 멀티플 디레이팅 시 주가 조정 리스크가 있습니다.",
    valuationComment: "현재 배당수익률 2.18%는 5년 평균 2.99% 대비 낮아 배당 기준으로는 고평가 신호입니다. DDM 적정가($65.62)와의 괴리는 모델 가정 한계가 크지만, 보수적으로는 최소한 과거 평균 수익률에 가까워지는 가격대에서 분할 접근이 유리합니다.",
    recentDevelopments: [
      "Forward PER이 Trailing 대비 낮아져 이익 개선 기대가 일부 선반영된 상태",
      "애널리스트 컨센서스는 hold이며 목표가 기준 상승여력은 제한적인 한 자릿수",
    ],
    overallRating: "관망",
    ratingReason: "배당 안전성은 높지만 현재 배당 매력(수익률)과 가격 위치를 감안하면 신규 매수 메리트는 크지 않습니다.",
    targetBuyPrice: 105,
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // PPG — PPG Industries (배당귀족주, 52년 연속)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    ticker: "PPG",
    analyzedAt: "2026-02-23 13:30 KST",
    businessSummary: "PPG Industries는 도료·코팅·특수소재를 제조하는 글로벌 소재 기업으로, 건축·자동차·항공·산업용 고객에 제품을 공급합니다. 성능 코팅과 보호 코팅 중심의 포트폴리오를 통해 경기 민감 업종 전반에 노출되어 있으면서도, 보수·유지보수 수요로 일부 방어력을 확보합니다.",
    coreProducts: [
      "건축용 도료 및 코팅",
      "자동차·산업용 성능 코팅",
      "항공·해양·보호용 특수 코팅",
    ],
    geographicPresence: "미주 중심의 글로벌 사업 구조로, 미주 비중이 가장 크고 유럽·아시아가 뒤를 잇는 분산 포트폴리오",
    dividendStreakYears: 52,
    dividendCAGR5yr: null,
    dividendCAGR10yr: null,
    recentDividendGrowth: "최근 3년 배당 CAGR 13.0%로 배당 성장 모멘텀이 양호한 편입니다.",
    dividendSafety: "strong",
    dividendSafetyReason: "배당성향 40.2%로 커버 여력이 있고 52년 연속 증배 이력이 배당 정책의 일관성을 보여줍니다.",
    moatTypes: [
      "intangible_assets",
      "switching_costs",
      "cost_advantage",
    ],
    moatStrength: "narrow",
    moatNarrative: "PPG는 산업 현장 인증·품질 신뢰·고객 맞춤 기술 축적이라는 무형자산을 보유하고 있습니다. 코팅은 공정 적합성·품질 안정성이 중요해 고객 전환비용이 존재하며, 글로벌 조달·생산 네트워크로 원가 경쟁력도 일부 확보합니다. 다만 원재료와 경기 사이클 영향이 커 해자는 광범위(wide)보다는 좁은(narrow) 수준으로 보는 것이 합리적입니다.",
    revenueGrowthTrend: "중장기적으로 완만한 성장이나 단기적으로는 산업 경기와 최종 수요에 따라 변동성이 큽니다.",
    marginTrend: "stable",
    debtLevel: "high",
    financialSummary: "ROE 21.1%와 배당성향 40.2%는 수익성과 주주환원 여력이 양호함을 시사합니다. 다만 D/E 97.6으로 레버리지 부담은 낮지 않아 금리·경기 둔화 구간에서 재무 유연성이 제한될 수 있습니다. PER 18.3(선행 14.5)은 이익 개선 기대를 일부 반영한 구간으로 해석됩니다.",
    keyRisks: [
      "원재료 가격 및 에너지 비용 변동으로 인한 마진 압박",
      "자동차·건설·산업 생산 둔화에 따른 수요 감소",
      "높은 부채비율 환경에서 금리 및 환율 변동 리스크",
    ],
    bullCase: "산업 수요 회복과 원가 안정이 동시에 나타나면 이익 레버리지가 커져 선행 PER 기준 재평가 여지가 있습니다. 꾸준한 증배 정책이 총주주수익률을 지지할 가능성이 높습니다.",
    bearCase: "경기 둔화가 장기화되면 물량 감소와 가격 경쟁 심화로 이익이 둔화될 수 있습니다. 부채 부담이 높은 구간에서 금리 부담이 겹치면 밸류에이션 할인 요인이 될 수 있습니다.",
    valuationComment: "현재가는 52주 위치 84%로 상단에 가깝고 애널리스트 목표가($125.30) 대비 매력은 크지 않습니다. 배당 프리미엄을 감안해도 추격 매수보다는 조정 시 분할 접근이 유리하며, 보수적 관점의 매수 구간은 대략 $112~$118 수준으로 판단합니다.",
    recentDevelopments: [
      "선행 PER이 후행 대비 낮아 이익 정상화 기대가 시장에 반영되는 모습",
      "배당수익률 2.24%가 5년 평균 1.93%를 상회해 소득 매력은 과거 대비 개선",
    ],
    overallRating: "관망",
    ratingReason: "배당의 질은 우수하지만 주가 위치와 목표가 대비 업사이드가 제한적이라 신규 진입은 가격 조정 대기가 합리적입니다.",
    targetBuyPrice: 115,
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // ROP — Roper Technologies (배당귀족주, 31년 연속)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    ticker: "ROP",
    analyzedAt: "2026-02-23 14:00 KST",
    businessSummary: "Roper Technologies는 전통적인 하드웨어 중심 기업이 아니라 미션 크리티컬 소프트웨어와 데이터 기반 솔루션을 보유·운영하는 고부가가치 기술 기업입니다. 의료, 법률, 보험, 교육, 산업 소프트웨어 등 니치 시장에서 높은 점유율을 가진 자회사를 포트폴리오 형태로 운영하며 반복 매출 비중을 높여왔습니다. 최근에는 경기 민감도가 낮고 현금흐름이 안정적인 자산 중심으로 사업 구조를 고도화하고 있습니다.",
    coreProducts: [
      "Vertafore(보험 소프트웨어)",
      "Deltek(프로젝트·ERP 소프트웨어)",
      "의료/법률/교육 등 버티컬 SaaS 및 데이터 솔루션",
    ],
    geographicPresence: "미국 중심 매출 구조(대략 미국 비중이 높고 국제 매출은 보완적 수준)",
    dividendStreakYears: 31,
    dividendCAGR5yr: null,
    dividendCAGR10yr: null,
    recentDividendGrowth: "최근 3년 배당 CAGR 19.3%로 배당 성장 속도가 매우 빠른 편입니다.",
    dividendSafety: "strong",
    dividendSafetyReason: "배당성향 23.2%로 여유가 크고, 31년 연속 증액 이력이 배당 지속 가능성을 뒷받침합니다.",
    moatTypes: [
      "switching_costs",
      "intangible_assets",
      "efficient_scale",
    ],
    moatStrength: "wide",
    moatNarrative: "Roper의 핵심 소프트웨어는 고객 업무 프로세스에 깊게 통합되어 교체 비용이 높습니다. 버티컬 시장 특화 기능과 데이터 자산은 진입장벽을 만들고 가격 결정력을 강화합니다. 또한 작은 니치 시장에서의 높은 점유율은 규모 효율과 안정적인 반복 매출 구조로 이어집니다.",
    revenueGrowthTrend: "인수와 유기적 성장의 결합으로 중장기적으로 완만한 우상향 추세를 유지해왔습니다.",
    marginTrend: "stable",
    debtLevel: "moderate",
    financialSummary: "Forward PER 14.4는 Trailing PER 23.6 대비 이익 개선 기대가 반영된 구간으로 해석됩니다. ROE 7.9%는 과열 수준은 아니지만 안정적 수익성을 시사하며, 배당성향이 낮아 배당 재원 여력은 충분합니다. D/E 46.8은 관리 가능한 레버리지 범위로 보이나 금리 환경에 따라 이자비용 부담은 점검이 필요합니다.",
    keyRisks: [
      "인수 의존 성장 전략에서 밸류에이션 부담 및 통합 리스크",
      "고금리 장기화 시 차입 비용과 멀티플 압박",
      "특정 버티컬 소프트웨어 수요 둔화 또는 규제 변화",
    ],
    bullCase: "반복 매출 중심 포트폴리오와 높은 전환비용으로 이익 가시성이 유지되면, 낮은 배당성향 기반의 추가 증액과 멀티플 재평가가 동반될 수 있습니다. 애널리스트 목표가 기준으로 주가 정상화 여지도 큽니다.",
    bearCase: "인수 후 시너지 지연, 금리 부담, 성장 둔화가 겹치면 이익 추정치 하향과 함께 밸류에이션 디스카운트가 장기화될 수 있습니다. 이 경우 배당은 유지되더라도 주가 회복 속도는 느려질 수 있습니다.",
    valuationComment: "52주 위치 8.1%와 5년 평균 대비 높은 현재 배당수익률(1.08% vs 0.56%)은 역사적 밴드 기준 저평가 신호로 볼 수 있습니다. DDM은 부적합하므로 현금흐름/멀티플 기준 접근이 타당하며, 분할매수 관점에서 현재 구간은 관심 유효, 보수적으로는 320달러 전후가 매수 효율이 더 좋습니다.",
    recentDevelopments: [
      "포트폴리오를 미션 크리티컬 소프트웨어 중심으로 재편하며 반복 매출 비중을 강화",
      "Forward PER이 낮아진 점은 향후 이익 개선 기대가 반영된 신호",
    ],
    overallRating: "관심",
    ratingReason: "배당 안전성과 해자 품질이 높고 저점권 신호가 유의미하지만, 인수·금리 변수 확인을 위해 분할 접근이 적절합니다.",
    targetBuyPrice: 320,
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // SHW — Sherwin-Williams (배당귀족주, 45년 연속)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    ticker: "SHW",
    analyzedAt: "2026-02-23 14:30 KST",
    businessSummary: "Sherwin-Williams는 건축용·산업용 코팅(페인트/도료)과 관련 솔루션을 생산·유통하는 글로벌 소재 기업입니다. 자체 소매점 네트워크를 통해 프로 고객과 리테일 고객을 직접 커버하고, 산업·자동차·포장 등 B2B 채널에도 공급합니다. 브랜드 파워와 유통망, 기술 기반 제품 포트폴리오가 실적의 핵심 축입니다.",
    coreProducts: [
      "건축용 페인트 및 프라이머",
      "산업용 코팅(자동차·패키징·코일 등)",
      "목재 코팅·방수·실란트 등 표면보호 솔루션",
    ],
    geographicPresence: "북미 비중이 높은 구조이며, 중남미·유럽·아시아에서 산업용/전문 코팅 중심으로 사업을 전개",
    dividendStreakYears: 45,
    dividendCAGR5yr: null,
    dividendCAGR10yr: null,
    recentDividendGrowth: "최근 3년 배당 CAGR 9.6%로, 저배당이지만 배당 성장률은 견조한 편입니다.",
    dividendSafety: "strong",
    dividendSafetyReason: "배당성향 30.8%로 완충력이 충분하고 45년 연속 증배 이력이 배당 정책의 일관성을 뒷받침합니다.",
    moatTypes: [
      "brand",
      "cost_advantage",
      "intangible_assets",
      "switching_costs",
    ],
    moatStrength: "narrow",
    moatNarrative: "Sherwin-Williams는 프로 고객층에서 강한 브랜드 신뢰와 제품 성능 레퍼런스를 보유하고 있습니다. 대규모 유통·조달 체계로 원가 및 공급 안정성 측면의 우위를 확보해왔고, 고객의 색상 표준·작업 공정에 맞춘 제품 전환 비용도 존재합니다. 다만 소재 업종 특성상 완전한 독점적 지위보다는 경쟁우위의 지속성이 높은 '좁은 해자'에 가깝습니다.",
    revenueGrowthTrend: "주택 리모델링/산업 사이클 영향을 받지만 중기적으로는 가격전가력과 제품 믹스 개선으로 완만한 성장 추세입니다.",
    marginTrend: "stable",
    debtLevel: "high",
    financialSummary: "ROE 59.4%는 매우 높지만, 레버리지 영향(D/E 306.1)도 함께 반영된 수치로 해석해야 합니다. 배당성향이 낮아 배당 지속성은 양호하나, 금리 환경과 차입 부담이 밸류에이션 및 주주환원 여력에 변수입니다. 전반적으로 현금창출력은 견조하나 자본구조 리스크를 동반한 고품질 기업에 가깝습니다.",
    keyRisks: [
      "높은 밸류에이션(PER 35.1, PBR 19.31)으로 멀티플 디레이팅 가능성",
      "원재료 가격 및 경기 둔화 시 마진 압박",
      "높은 부채비율로 금리 상승/신용환경 악화에 대한 민감도",
    ],
    bullCase: "리모델링 수요 회복과 산업용 코팅 믹스 개선이 동시에 나타나면 이익 성장과 멀티플 방어가 가능할 수 있습니다. 낮은 배당성향 기반의 지속 증배가 장기 복리 수익에 기여할 여지가 있습니다.",
    bearCase: "주택·제조 경기 둔화가 길어지면 매출 성장 둔화와 원가 부담이 겹쳐 밸류에이션 조정 폭이 커질 수 있습니다. 높은 레버리지는 실적 변동 국면에서 주가 하방 압력을 키울 수 있습니다.",
    valuationComment: "현재 주가는 52주 구간 상단(73.1%)에 위치하고 트레일링 PER 기준 고평가 부담이 존재합니다. 배당 매력(0.89%) 대비 가격 민감도가 커 보여, 신규 진입은 멀티플 정상화 구간에서 분할 접근이 유리합니다.",
    recentDevelopments: [
      "애널리스트 컨센서스는 buy이며 목표가 $387.43로 현재가 대비 약 7.4% 상승여력 반영",
      "배당수익률이 5년 평균(0.86%)과 유사한 0.89%로, 배당 측면의 절대 저평가 신호는 제한적",
    ],
    overallRating: "관망",
    ratingReason: "질 좋은 배당 성장주이지만 현재 밸류에이션과 레버리지 부담을 감안하면 신규 매수는 가격 조정 구간이 더 유리합니다.",
    targetBuyPrice: 315,
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // TR — 투시 롤 인더스트리스 (배당왕족주, 58년 연속)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    ticker: "TR",
    analyzedAt: "2026-02-24 23:00 KST",
    businessSummary: "TR(투시 롤 인더스트리스)는 초콜릿·캔디 중심의 제과 브랜드를 보유한 미국 소비재 기업으로, 경기 둔화 국면에서도 상대적으로 수요 변동이 낮은 편입니다. 대형 유통 채널과 장기 거래 관계를 기반으로 안정적인 현금흐름을 창출해 왔고, 장기간 배당을 늘려온 보수적 자본배분 성향이 특징입니다.",
    coreProducts: [
      "Tootsie Roll",
      "Tootsie Pop",
      "Charms/Blow Pop",
    ],
    geographicPresence: "미국 중심 매출 구조(북미 비중 높고 해외 비중은 보조적)",
    dividendStreakYears: 58,
    dividendCAGR5yr: null,
    dividendCAGR10yr: null,
    recentDividendGrowth: "58년 연속 증배 기록은 유지되고 있으나, 최근 증액 폭은 대체로 완만한 편입니다.",
    dividendSafety: "strong",
    dividendSafetyReason: "필수소비재 성격의 비교적 방어적 수요와 보수적 재무운영 덕분에 배당 지속 가능성이 높은 편입니다.",
    moatTypes: [
      "brand",
      "cost_advantage",
      "efficient_scale",
      "intangible_assets",
    ],
    moatStrength: "narrow",
    moatNarrative: "장수 브랜드 인지도와 유통 선반 점유는 신규 경쟁자 대비 진입장벽으로 작동합니다. 또한 규모의 경제와 오랜 공급망 운영 노하우가 단가·재고 관리 측면의 경쟁력을 보완합니다. 다만 제과 산업 특성상 절대적 독점력보다는 카테고리 내 상대 우위에 가까운 해자입니다.",
    revenueGrowthTrend: "장기적으로 저성장·안정 성장에 가까운 흐름입니다.",
    marginTrend: "stable",
    debtLevel: "low",
    financialSummary: "TR은 전통적으로 보수적인 재무 기조와 안정적 현금창출력을 강점으로 평가받습니다. 경기 민감도가 낮은 제품 포트폴리오 덕분에 실적 변동성이 상대적으로 제한적입니다. 다만 원재료(설탕·코코아)와 물류비 변동은 단기 수익성에 영향을 줄 수 있습니다.",
    keyRisks: [
      "원재료 가격 급등(설탕·코코아)으로 인한 마진 압박",
      "소비자 건강 트렌드 변화로 당류 제품 수요 둔화 가능성",
      "낮은 성장성 대비 밸류에이션 프리미엄 축소 리스크",
    ],
    bullCase: "원가 상승을 가격 인상으로 무리 없이 전가하고, 안정적 수요를 유지하면 이익·배당의 완만한 우상향이 가능합니다. 방어주 선호 국면에서는 밸류에이션 프리미엄이 재확대될 여지도 있습니다.",
    bearCase: "원가 인상기에 가격 전가가 지연되면 마진이 압박되고 이익 성장 정체가 길어질 수 있습니다. 성장 둔화가 부각되면 프리미엄 멀티플이 하향되며 주가 조정 폭이 커질 수 있습니다.",
    valuationComment: "현재 제공된 핵심 밸류에이션 수치가 비어 있어 정량적 저평가 판단은 어렵습니다. TR은 일반적으로 '고품질 저성장 방어주' 성격이므로, 역사적 밴드 대비 밸류에이션 할인 구간에서 분할 접근이 유리합니다.",
    recentDevelopments: [
      "지속적 원재료·물류비 변동 환경 속에서 가격/프로모션 전략 조정",
      "장기 증배 기조 유지로 배당 신뢰도는 계속 확인되는 국면",
    ],
    overallRating: "관망",
    ratingReason: "기업 질은 우수하지만 현재 입력된 정량 지표 부재로 기대수익 대비 매수 근거를 확정하기 어렵습니다.",
    targetBuyPrice: null,
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // XOM — ExxonMobil (배당귀족주, 42년 연속)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    ticker: "XOM",
    analyzedAt: "2026-02-23 15:30 KST",
    businessSummary: "엑슨모빌은 원유·가스 탐사/생산(업스트림)과 정유·석유화학(다운스트림/케미컬)을 통합 운영하는 글로벌 에너지 기업입니다. 대형 장기 프로젝트 중심의 생산 포트폴리오와 정제·화학 밸류체인을 결합해 유가 사이클 구간에서 현금흐름 변동을 완화하는 구조를 갖고 있습니다. 최근에는 가이아나, 퍼미안 등 저원가 자산과 저탄소 솔루션 사업을 병행 확대하고 있습니다.",
    coreProducts: [
      "원유·천연가스 탐사 및 생산",
      "정유 및 연료 제품(휘발유·디젤·윤활유)",
      "석유화학 제품(올레핀·폴리머 등)",
    ],
    geographicPresence: "미국 약 45% · 국제 약 55% (생산·정제·판매 기준의 글로벌 분산 구조)",
    dividendStreakYears: 42,
    dividendCAGR5yr: null,
    dividendCAGR10yr: null,
    recentDividendGrowth: "최근 3년 배당 CAGR 12.3%로 배당 성장 모멘텀은 견조하나, 현재 수익률은 5년 평균 대비 낮은 구간입니다.",
    dividendSafety: "strong",
    dividendSafetyReason: "배당성향 59.7%와 통합 사업의 현금창출력, 42년 연속 배당 증가 이력이 배당 지속 가능성을 뒷받침합니다.",
    moatTypes: [
      "cost_advantage",
      "efficient_scale",
      "intangible_assets",
    ],
    moatStrength: "narrow",
    moatNarrative: "엑슨모빌은 초대형 자본력과 운영 노하우를 바탕으로 저원가 자산 확보 및 대규모 프로젝트 수행에서 비용 우위를 가집니다. 업스트림-다운스트림-화학의 통합 포트폴리오와 글로벌 인프라 네트워크는 진입장벽으로 작용합니다. 다만 원자재 가격 사이클 영향을 크게 받기 때문에 해자는 강하지만 절대적으로 넓은 형태로 보긴 어렵습니다.",
    revenueGrowthTrend: "유가·가스 가격 및 정제마진에 연동되는 경기순환형 매출 흐름으로, 중장기적으로는 저원가 증산 프로젝트가 하방을 지지하는 구조입니다.",
    marginTrend: "stable",
    debtLevel: "low",
    financialSummary: "D/E 18.9로 레버리지 부담은 낮은 편이며 재무 유연성이 양호합니다. ROE 11.1%는 자본집약 업종 특성을 감안하면 무난한 수준입니다. 다만 이익과 현금흐름은 에너지 가격 사이클에 따라 변동성이 존재합니다.",
    keyRisks: [
      "유가·가스 가격 하락에 따른 이익 및 배당여력 둔화",
      "정책·규제(탄소배출, 환경소송, 세제) 강화 리스크",
      "대형 프로젝트 지연·원가상승 및 M&A 통합 실행 리스크",
    ],
    bullCase: "가이아나·퍼미안 중심의 저원가 증산과 운영 효율 개선이 이어지면 사이클 둔화 구간에서도 잉여현금흐름 방어력이 강화될 수 있습니다. 이에 따라 자사주 매입·배당 성장이 동시에 지속될 가능성이 있습니다.",
    bearCase: "유가 하락과 정제마진 축소가 동시에 발생하면 이익 감소 폭이 커지며 밸류에이션 프리미엄이 빠르게 축소될 수 있습니다. 이 경우 배당 성장 속도 둔화와 주가 변동성 확대가 나타날 수 있습니다.",
    valuationComment: "현재 주가는 52주 상단(83.7%)에 가깝고 배당수익률(2.80%)이 5년 평균(3.94%)보다 낮아 배당 관점의 매력은 다소 제한적입니다. Forward PER 17.6은 과도한 고평가로 보긴 어렵지만, 애널리스트 목표가(140.92) 대비 할인 매수 여지가 크지 않아 분할 접근이 적절합니다.",
    recentDevelopments: [
      "퍼미안 자산 확대를 위한 Pioneer Natural Resources 인수 통합 진행",
      "가이아나 등 저원가 대형 프로젝트 중심의 생산 확대 전략 지속",
    ],
    overallRating: "관망",
    ratingReason: "배당 안전성은 높지만 현재 수익률이 역사 평균 대비 낮고 주가가 상단권에 근접해 신규 진입 매력은 중립적입니다.",
    targetBuyPrice: 130,
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // NWN — 노스웨스트 내추럴 홀딩 (배당왕족주, 69년 연속)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    ticker: "NWN",
    analyzedAt: "2026-02-24 22:00 KST",
    businessSummary: "노스웨스트 내추럴 홀딩(NWN)은 미국 북서부(오리건·워싱턴) 중심의 규제형 천연가스 유틸리티 사업을 영위하며, 안정적 요금기반(rate base) 수익 구조를 갖고 있습니다. 최근에는 물·폐수 등 유틸리티 인접 사업으로 포트폴리오를 확장해 장기 성장성과 현금흐름 방어력을 높이려는 전략을 병행하고 있습니다.",
    coreProducts: [
      "천연가스 유통·공급",
      "유틸리티 요금기반 인프라 운영",
      "물·폐수 유틸리티 서비스",
    ],
    geographicPresence: "미국 100% (오리건·워싱턴 중심, 일부 타 주 인접 유틸리티 자산)",
    dividendStreakYears: 69,
    dividendCAGR5yr: null,
    dividendCAGR10yr: null,
    recentDividendGrowth: "배당 증가 기조는 유지되나 최근 증액 폭은 전통적 유틸리티 특성상 완만한 수준으로 보는 것이 합리적입니다.",
    dividendSafety: "moderate",
    dividendSafetyReason: "규제형 현금흐름은 안정적이지만, 금리·CAPEX·규제 승인 속도에 따라 커버리지 변동성이 생길 수 있습니다.",
    moatTypes: [
      "efficient_scale",
      "intangible_assets",
    ],
    moatStrength: "narrow",
    moatNarrative: "지역 독점에 가까운 배관 인프라와 규제 라이선스는 신규 진입을 어렵게 만들어 효율적 규모의 해자를 형성합니다. 다만 규제기관의 허용수익률과 정책 변화에 수익성이 제약되므로 해자는 넓기보다는 좁은 편으로 평가됩니다.",
    revenueGrowthTrend: "대체로 저성장·안정형이며, 요금 인상 승인과 기온 변수에 따라 연도별 변동이 나타나는 구조입니다.",
    marginTrend: "stable",
    debtLevel: "high",
    financialSummary: "유틸리티 특성상 부채를 활용한 자본집약 구조로 운영되며, 절대 부채 수준은 높은 편으로 해석하는 것이 일반적입니다. 반면 수요 방어력과 규제형 수익모델 덕분에 현금흐름 가시성은 상대적으로 높습니다. 핵심은 금리 환경과 규제 승인 타이밍이 이익·배당 여력에 미치는 영향을 지속 점검하는 것입니다.",
    keyRisks: [
      "금리 상승으로 인한 이자비용 및 밸류에이션 압박",
      "규제기관의 요금 인상 승인 지연 또는 허용수익률 하향",
      "탈탄소 정책 가속 시 가스 인프라 수요/투자회수 리스크",
    ],
    bullCase: "규제 승인 기반의 요금기반 확대와 인접 유틸리티(물·폐수) 성장으로 이익 안정성이 강화되면, 배당 프리미엄이 재평가될 수 있습니다. 금리 안정 구간에서는 방어주 선호가 회복되며 멀티플 개선 가능성도 있습니다.",
    bearCase: "고금리 장기화와 규제 지연이 겹치면 이자부담 확대 대비 요금 전가가 늦어져 이익과 배당 커버리지에 부담이 생길 수 있습니다. 에너지 전환 정책이 예상보다 빠르면 가스 유틸리티의 구조적 할인 요인이 커질 수 있습니다.",
    valuationComment: "현재 핵심 밸류에이션 입력값이 부재해 절대 저평가/고평가 단정은 어렵습니다. 유틸리티는 통상 배당수익률이 장기 평균 대비 의미 있게 상회하고 52주 밴드 하단에 근접할 때 분할매수의 기대수익-리스크가 개선됩니다.",
    recentDevelopments: [
      "에너지 전환 대응(재생가스·탈탄소 연계 투자)과 규제 협의가 중장기 투자 포인트로 부각",
      "유틸리티 인접 사업(물·폐수) 확장을 통한 포트폴리오 다변화 시도가 진행 중",
    ],
    overallRating: "관망",
    ratingReason: "배당 연속성은 매우 우수하나, 금리·규제·밸류에이션 데이터 확인 전에는 공격적 진입보다 조건부 분할 접근이 적절합니다.",
    targetBuyPrice: null,
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // FMCB — 파머스 & 머천트 밴코프 (배당왕족주, 61년 연속)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    ticker: "FMCB",
    analyzedAt: "2026-02-24 22:30 KST",
    businessSummary: "FMCB(파머스 & 머천트 밴코프)는 지역 기반 상업은행 지주사로, 예금 수취와 대출(상업용·부동산·소비자)을 중심으로 전통적인 은행업을 영위합니다. 관계형 영업과 보수적 여신 운영을 통해 안정적인 이자이익과 수수료수익을 추구하는 구조입니다.",
    coreProducts: [
      "지역 예금(요구불·저축·정기예금)",
      "상업용/부동산/소비자 대출",
      "기초 금융서비스(결제·현금관리·온라인/모바일 뱅킹)",
    ],
    geographicPresence: "미국 내 지역은행 중심(캘리포니아 기반 비중이 높은 내수형 구조로 추정)",
    dividendStreakYears: 61,
    dividendCAGR5yr: null,
    dividendCAGR10yr: null,
    recentDividendGrowth: "61년 연속 배당 증가 이력은 강점이나, 최근 수치 데이터 부재로 증가율 정량 평가는 제한적입니다.",
    dividendSafety: "moderate",
    dividendSafetyReason: "장기 배당 이력은 긍정적이지만 현재 배당성향·수익성·자본비율 정량값 부재로 안전성을 보수적으로 판단합니다.",
    moatTypes: [
      "switching_costs",
      "efficient_scale",
      "intangible_assets",
    ],
    moatStrength: "narrow",
    moatNarrative: "지역은행은 고객 관계 기반의 전환비용과 지역 내 영업망에서 오는 효율적 규모를 가질 수 있습니다. 다만 전국 대형은행 대비 가격/상품 경쟁력이 제한될 수 있어 해자는 넓기보다 협소한 편으로 보는 것이 합리적입니다.",
    revenueGrowthTrend: "금리 사이클과 대출 성장률에 연동되는 완만한 성장/둔화 반복 가능성이 큽니다.",
    marginTrend: "stable",
    debtLevel: "moderate",
    financialSummary: "은행업 특성상 레버리지를 활용하므로 절대 부채보다 자본적정성과 대손관리의 질이 핵심입니다. 본 건은 ROE, 배당성향, 밸류에이션 지표가 비어 있어 현재 재무 체력에 대한 확정적 결론은 유보가 필요합니다.",
    keyRisks: [
      "지역 경기 둔화 시 대출자산 건전성 악화",
      "예금 조달비용 상승에 따른 순이자마진 압박",
      "규제·자본요건 강화로 주주환원 여력 축소",
    ],
    bullCase: "금리 안정과 지역 대출 수요 회복이 동시에 나타나면 순이자마진 및 이익 안정성이 개선될 수 있습니다. 장기 배당 성장 스토리가 재평가되면 밸류에이션 프리미엄이 가능해집니다.",
    bearCase: "경기 둔화와 신용비용 상승이 겹치면 이익·배당 여력이 동시에 약화될 수 있습니다. 유동성 경쟁 심화로 예금 유치 비용이 오르면 수익성이 빠르게 악화될 위험이 있습니다.",
    valuationComment: "현재가·PER·PBR·DDM·목표가가 모두 부재해 절대/상대가치 판단이 불가능합니다. 매수 검토 전 최소한 최근 3~5년 배당성향, CET1(또는 유사 자본지표), 대손비용 추세 확인이 선행되어야 합니다.",
    recentDevelopments: [
      "제공된 데이터 기준 정량 지표 공백으로 최근 실적/가이던스 반영 평가가 제한적",
      "배당왕(61년 연속 증배) 이력 자체는 장기 주주환원 신호로 유효",
    ],
    overallRating: "관망",
    ratingReason: "배당 이력은 매우 우수하지만 핵심 밸류에이션·재무지표 공백으로 현재 시점 투자판단 근거가 부족합니다.",
    targetBuyPrice: null,
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // CWT — 캘리포니아 워터 서비스 그룹 (배당왕족주, 58년 연속)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    ticker: "CWT",
    analyzedAt: "2026-02-24 23:30 KST",
    businessSummary: "캘리포니아 워터 서비스 그룹(CWT)은 미국 서부를 중심으로 상수도 및 일부 폐수 처리 서비스를 제공하는 규제형 유틸리티 기업입니다. 수익의 상당 부분은 규제기관이 승인한 요금 체계와 인프라 투자 회수 구조에서 발생하며, 물 공급 인프라의 장기 운영 역량이 핵심 경쟁력입니다.",
    coreProducts: [
      "상수도 공급 서비스",
      "폐수 처리 및 관련 유틸리티 서비스",
      "수자원 인프라 운영·유지보수",
    ],
    geographicPresence: "미국 중심(캘리포니아 비중이 매우 높고, 하와이·워싱턴·뉴멕시코·텍사스 등 일부 지역 포함)",
    dividendStreakYears: 58,
    dividendCAGR5yr: null,
    dividendCAGR10yr: null,
    recentDividendGrowth: "58년 연속 배당 증가 이력은 유지되고 있으나, 최근 구간의 증가율은 고성장주 대비 완만한 방어형 패턴으로 보는 것이 합리적입니다.",
    dividendSafety: "moderate",
    dividendSafetyReason: "규제형 현금흐름은 배당 안정성에 유리하지만, 금리·대규모 설비투자·요금 인상 승인 지연이 배당 여력을 제약할 수 있습니다.",
    moatTypes: [
      "efficient_scale",
      "switching_costs",
      "intangible_assets",
    ],
    moatStrength: "narrow",
    moatNarrative: "지역 독점에 가까운 상수도 사업 특성상 신규 경쟁 진입이 매우 어렵고, 기존 인프라 네트워크 자체가 진입장벽으로 작동합니다. 고객의 서비스 전환이 사실상 제한적이며, 규제 라이선스와 운영 노하우가 장기적 방어력을 제공합니다. 다만 요금 결정이 규제기관에 종속되어 초과수익 창출은 제한적입니다.",
    revenueGrowthTrend: "요금기반(rate base) 확대와 단계적 요금 조정에 따라 장기적으로 완만한 성장 추세가 기대됩니다.",
    marginTrend: "stable",
    debtLevel: "moderate",
    financialSummary: "유틸리티 특성상 경기 민감도는 낮고 수요 방어력이 높아 실적 변동성이 상대적으로 작습니다. 반면 설비투자 집약 산업이어서 부채와 이자비용 관리가 핵심이며, 금리 환경 변화에 밸류에이션이 민감합니다. 규제 승인 사이클이 현금흐름 타이밍에 영향을 줄 수 있습니다.",
    keyRisks: [
      "규제기관의 요금 인상 승인 지연 또는 축소",
      "금리 상승에 따른 자본비용·밸류에이션 부담",
      "가뭄·수질·기후 리스크로 인한 추가 설비투자 및 운영비 증가",
    ],
    bullCase: "요금기반 자산이 계획대로 확대되고 규제 승인 절차가 원활하면 이익과 배당의 가시성이 높아질 수 있습니다. 방어적 섹터 선호 국면에서는 프리미엄 밸류에이션이 재부여될 여지도 있습니다.",
    bearCase: "금리 고착화와 규제 지연이 동반되면 이익 성장 둔화와 멀티플 압축이 동시에 발생할 수 있습니다. 예상보다 큰 인프라 투자 부담이 누적되면 배당 성장 속도도 더 완만해질 수 있습니다.",
    valuationComment: "현재 핵심 밸류에이션 입력값이 부재해 정밀 산정은 어렵습니다. 유틸리티 특성상 금리 피크 구간 조정 시 분할매수, 그리고 역사적 배당수익률 밴드 상단 접근 구간을 우선 검토하는 보수적 접근이 적절합니다.",
    recentDevelopments: [
      "캘리포니아 중심의 노후 상수도 인프라 교체·현대화 투자 지속",
      "기후·수자원 이슈 대응을 위한 규제 협의 및 요금체계 조정 논의가 업황 전반의 핵심 변수로 부각",
    ],
    overallRating: "관망",
    ratingReason: "배당 연속성은 매우 우수하지만 현재 제공된 정량 데이터 공백이 커서, 진입 가격과 배당 커버리지 확인 전까지는 관망이 합리적입니다.",
    targetBuyPrice: null,
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // SCL — 스테판 (배당왕족주, 57년 연속)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    ticker: "SCL",
    analyzedAt: "2026-02-25 00:00 KST",
    businessSummary: "스테판(Stepan Company)은 계면활성제, 폴리올, 특수화학 제품을 생산하는 특수화학 소재 기업입니다. 생활용품·산업재·건축 단열재 등 다양한 최종 시장에 원재료를 공급하며 경기 민감성과 원재료 가격 변동의 영향을 함께 받습니다. 장기적으로는 고부가 스페셜티 제품 비중 확대와 안정적인 배당 성장 기록이 강점입니다.",
    coreProducts: [
      "계면활성제(Surfactants)",
      "폴리올(Polyols)",
      "특수화학 제품(Specialty Products)",
    ],
    geographicPresence: "북미 중심의 글로벌 사업 구조(미주 비중이 높고, 유럽·아시아·중남미로 분산)",
    dividendStreakYears: 57,
    dividendCAGR5yr: null,
    dividendCAGR10yr: null,
    recentDividendGrowth: "57년 연속 배당 인상을 이어가며 소폭이지만 배당 성장 기조를 유지하고 있습니다.",
    dividendSafety: "moderate",
    dividendSafetyReason: "장기 배당 이력은 매우 우수하지만, 화학 업종 특성상 수요 사이클과 원재료/스프레드 변동으로 이익 변동성이 존재합니다.",
    moatTypes: [
      "switching_costs",
      "cost_advantage",
      "intangible_assets",
    ],
    moatStrength: "narrow",
    moatNarrative: "고객 맞춤형 포뮬레이션과 품질 인증, 장기 거래 관계로 전환 비용이 일정 수준 존재합니다. 규모의 경제와 공정 노하우가 원가 경쟁력에 기여하지만, 업계 전반의 경쟁도 높아 절대적 지배력은 제한적입니다. 따라서 해자는 존재하되 폭은 넓지 않은 편으로 판단됩니다.",
    revenueGrowthTrend: "최근은 업황 둔화 구간을 거치며 변동성이 있었고, 중장기적으로는 완만한 회복/성장 가능성이 있습니다.",
    marginTrend: "stable",
    debtLevel: "moderate",
    financialSummary: "재무 구조는 전반적으로 관리 가능한 범위로 보이며, 배당을 지속할 수 있는 기본 체력은 갖춘 편입니다. 다만 화학 소재 특성상 마진은 원재료 가격, 가동률, 제품 믹스에 따라 분기 변동이 발생할 수 있습니다. 배당 안정성은 높지만 성장 속도는 보수적으로 보는 접근이 합리적입니다.",
    keyRisks: [
      "원재료 가격 및 에너지 비용 급등에 따른 마진 압박",
      "경기 둔화 시 산업재·건설 관련 수요 약화",
      "환경 규제 강화 및 공정/설비 투자 부담 증가",
    ],
    bullCase: "고부가 제품 비중 확대와 수요 회복이 동시에 나타나면 이익 레버리지가 커질 수 있습니다. 이 경우 배당 성장 지속성과 밸류에이션 재평가가 함께 가능해집니다.",
    bearCase: "수요 부진이 길어지고 원가 부담이 지속되면 수익성 회복이 지연될 수 있습니다. 배당은 유지하더라도 주가 모멘텀은 제한될 가능성이 큽니다.",
    valuationComment: "현재 제공된 정량 지표가 없어 절대적 저평가/고평가 단정은 어렵습니다. 화학 업종 특성상 실적 저점 구간에서 분할 접근하고, 정상화 이익 기준 밸류에이션이 보수 구간으로 내려올 때 매수하는 전략이 유효합니다.",
    recentDevelopments: [
      "배당 귀족/킹 수준의 장기 배당 인상 기록을 지속",
      "수요·마진 정상화 여부가 실적 회복의 핵심 변수로 부각",
    ],
    overallRating: "관망",
    ratingReason: "배당 이력은 탁월하지만 현재 핵심 밸류에이션/수익성 지표 공백으로 매수 확신 구간 판단이 제한적입니다.",
    targetBuyPrice: null,
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // SWK — 스탠리 블랙 & 데커 (배당왕족주, 57년 연속)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    ticker: "SWK",
    analyzedAt: "2026-02-25 00:30 KST",
    businessSummary: "스탠리 블랙 & 데커는 전동공구·핸드툴(DeWALT, Stanley, Craftsman)과 산업용 체결 솔루션을 중심으로 운영되는 글로벌 산업재 기업입니다. 주택 리모델링·건설·제조 경기와 연동되는 수요 구조를 가지며, 최근에는 재고 정상화와 비용 절감을 통해 수익성 회복에 집중하고 있습니다.",
    coreProducts: [
      "전동공구 및 핸드툴",
      "산업용 체결·엔지니어링 솔루션",
      "전문가용/소비자용 공구 플랫폼 및 액세서리",
    ],
    geographicPresence: "미국 중심 매출 구조이며 유럽·신흥국을 포함한 글로벌 판매망 보유 (대략 북미 비중이 가장 큼)",
    dividendStreakYears: 57,
    dividendCAGR5yr: null,
    dividendCAGR10yr: null,
    recentDividendGrowth: "최근 배당은 연속 증액 기조는 유지했지만 인상 폭은 매우 보수적인 수준입니다.",
    dividendSafety: "moderate",
    dividendSafetyReason: "긴 배당 역사와 브랜드 경쟁력은 강점이지만 경기민감 업황과 수익성 변동, 부채 부담이 배당 여력을 제약할 수 있습니다.",
    moatTypes: [
      "brand",
      "cost_advantage",
      "intangible_assets",
    ],
    moatStrength: "narrow",
    moatNarrative: "DeWALT·Stanley·Craftsman 등 강한 브랜드 자산은 유통 채널 협상력과 반복 구매를 지지합니다. 대규모 조달·생산·유통 네트워크는 원가 경쟁력에 기여하지만, 공구 시장은 경쟁이 치열해 초과이익의 지속성은 제한적입니다. 따라서 해자는 존재하나 폭은 넓지 않은 편으로 판단됩니다.",
    revenueGrowthTrend: "최근 몇 년은 경기 둔화와 채널 재고조정 영향으로 변동성이 컸고, 중기적으로는 완만한 회복이 핵심 변수입니다.",
    marginTrend: "contracting",
    debtLevel: "high",
    financialSummary: "현금창출력 자체는 견조한 편이지만, 최근 사이클에서 이익률 압박과 구조조정 비용이 부담으로 작용했습니다. 부채 축소(디레버리징) 진행 여부가 재무 안정성 개선의 핵심입니다. 배당 지속성은 높지만 공격적 증액 여력은 제한적일 수 있습니다.",
    keyRisks: [
      "주택·건설 경기 둔화 장기화",
      "원자재/물류/프로모션 비용 압박으로 인한 마진 훼손",
      "부채 부담 지속 시 자본배분 유연성 저하",
    ],
    bullCase: "재고 정상화와 비용절감이 예상보다 빠르게 반영되면 마진이 회복되고 이익 레버리지가 커질 수 있습니다. 이 경우 밸류에이션 리레이팅과 함께 배당 안정성 프리미엄이 재평가될 가능성이 있습니다.",
    bearCase: "수요 부진이 길어지고 가격경쟁이 심화되면 이익 회복이 지연될 수 있습니다. 부채 부담이 높은 상태에서 현금흐름이 약화되면 배당 성장 여력이 더 축소될 수 있습니다.",
    valuationComment: "사이클 저점 통과 신호(마진 반등·재고 정상화)가 확인되기 전에는 할인된 구간에서 분할 접근이 유리합니다. 배당주 관점에서는 고배당만 보기보다 잉여현금흐름 회복 속도를 함께 확인하는 보수적 매수 전략이 적절합니다.",
    recentDevelopments: [
      "원가절감·조직 슬림화 중심의 구조조정 및 운영 효율화 지속",
      "재고 조정 이후 수요 정상화와 마진 회복 여부가 실적 핵심 변수로 부각",
    ],
    overallRating: "관망",
    ratingReason: "배당 이력은 최상위지만 경기민감도와 재무 부담을 감안하면 실적 회복 확인 후 접근이 더 안전합니다.",
    targetBuyPrice: 75,
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // FUL — H.B. 풀러 컴퍼니 (배당왕족주, 56년 연속)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    ticker: "FUL",
    analyzedAt: "2026-02-25 01:00 KST",
    businessSummary: "H.B. 풀러는 산업용 접착제, 실란트, 코팅 소재를 개발·제조하는 특수화학 기업으로, 포장·위생용품·건축·전자 등 다양한 최종 시장에 공급합니다. 고객 공정에 맞춘 맞춤형 포뮬레이션과 글로벌 생산·기술 지원 네트워크를 통해 반복 매출 구조를 구축해 왔습니다. 원재료 변동성이 큰 업종이지만 제품 성능과 고객 전환비용을 바탕으로 장기 거래를 유지하는 편입니다.",
    coreProducts: [
      "산업용 접착제(포장·위생·조립)",
      "건축/엔지니어링용 실란트·코팅 솔루션",
      "자동차·전자·내구재용 기능성 접합 소재",
    ],
    geographicPresence: "북미 중심 + 유럽·아시아·라틴아메리카에 분산된 글로벌 매출 구조",
    dividendStreakYears: 56,
    dividendCAGR5yr: null,
    dividendCAGR10yr: null,
    recentDividendGrowth: "56년 연속 배당 증가 이력을 유지해 배당 의지는 매우 강한 편입니다.",
    dividendSafety: "moderate",
    dividendSafetyReason: "장기 배당 기록은 강점이지만 경기·원재료 가격·인수 관련 부담에 따라 단기 커버리지는 점검이 필요합니다.",
    moatTypes: [
      "switching_costs",
      "intangible_assets",
      "cost_advantage",
    ],
    moatStrength: "narrow",
    moatNarrative: "접착제는 고객 생산라인·원가·품질 인증과 직접 연결되어 공급사 변경 비용이 높습니다. 다만 제품 자체의 절대적 차별화보다 응용 기술·서비스·글로벌 공급 안정성이 경쟁우위의 핵심이라 해자의 폭은 제한적입니다. 규모의 구매력과 포트폴리오 폭이 수익성 방어에 기여합니다.",
    revenueGrowthTrend: "유기 성장과 인수 효과가 혼재된 완만한 성장 추세이나 경기 민감 최종시장 영향이 큽니다.",
    marginTrend: "stable",
    debtLevel: "moderate",
    financialSummary: "현금흐름 창출력은 비교적 안정적이며, 비용 전가 능력과 제품 믹스 개선이 수익성 방어에 중요합니다. 인수합병 이후 레버리지 관리와 이자비용 통제가 핵심 모니터링 포인트입니다. 경기 둔화 구간에서는 물량 둔화가 마진에 선행 반영될 수 있습니다.",
    keyRisks: [
      "원재료 가격 급등 시 스프레드 축소 위험",
      "산업 경기 둔화로 포장·건축·내구재 수요 약화",
      "인수 통합 지연 또는 부채 부담 확대",
    ],
    bullCase: "가격 전가와 고부가 제품 비중 확대로 마진이 개선되고, 인수 시너지 실현으로 이익 성장률이 회복될 수 있습니다. 안정적 배당 성장 스토리가 재평가를 이끌 가능성이 있습니다.",
    bearCase: "수요 둔화와 원가 압력이 동시에 발생하면 영업레버리지 역풍으로 이익이 빠르게 둔화될 수 있습니다. 부채 부담이 높아지면 배당 성장률도 보수적으로 낮아질 수 있습니다.",
    valuationComment: "현재 핵심 밸류에이션 수치가 공란이어서 정량 판단 신뢰도는 낮습니다. 일반적으로는 과거 평균 밸류에이션 대비 할인 구간이면서 배당수익률이 본인 장기 평균 대비 상단일 때 분할 매수가 유효합니다.",
    recentDevelopments: [
      "산업용·위생/포장 중심 포트폴리오에서 고부가 응용 분야 확장 지속",
      "원재료·물류비 변동성에 대응한 가격 정책 및 비용 효율화 추진",
    ],
    overallRating: "관망",
    ratingReason: "배당 연속성은 매우 우수하지만 현재 핵심 정량 지표 부재로 매수 타이밍 판단 근거가 부족합니다.",
    targetBuyPrice: null,
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // MO — 알트리아그룹 (배당왕족주, 56년 연속)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    ticker: "MO",
    analyzedAt: "2026-02-25 01:30 KST",
    businessSummary: "알트리아그룹(MO)은 미국 내 담배·니코틴 제품 중심의 소비재 기업으로, Marlboro를 핵심 브랜드로 보유하고 있습니다. 전통 궐련에서 발생하는 높은 현금흐름을 기반으로 배당을 지속 확대해 왔으며, 무연·전자니코틴 영역으로 포트폴리오 전환을 병행 중입니다.",
    coreProducts: [
      "Marlboro 등 궐련 제품",
      "무연니코틴(oral nicotine pouch)",
      "전자니코틴/베이프 관련 제품 및 투자자산",
    ],
    geographicPresence: "미국 중심(사실상 대부분이 미국 매출)",
    dividendStreakYears: 56,
    dividendCAGR5yr: null,
    dividendCAGR10yr: null,
    recentDividendGrowth: "최근에도 소폭 인상 기조를 유지했지만 인상 폭은 과거 대비 완만한 편입니다.",
    dividendSafety: "moderate",
    dividendSafetyReason: "방어적 수요와 강한 현금창출력은 장점이나, 높은 배당성향과 규제 리스크로 안전성은 ‘강함’보다는 ‘보통’에 가깝습니다.",
    moatTypes: [
      "brand",
      "intangible_assets",
      "efficient_scale",
    ],
    moatStrength: "narrow",
    moatNarrative: "Marlboro 중심의 브랜드 파워와 유통·판매망, 규제 산업 특성에서 오는 진입장벽이 해자의 핵심입니다. 다만 흡연율 구조적 하락과 대체 니코틴 제품 경쟁으로 해자 폭은 과거 대비 좁아진 상태로 보는 것이 합리적입니다.",
    revenueGrowthTrend: "장기적으로는 물량 감소 압력이 있으나 가격 인상과 제품 믹스로 방어하는 흐름입니다.",
    marginTrend: "stable",
    debtLevel: "high",
    financialSummary: "전통 담배 사업의 높은 영업현금흐름은 배당 재원을 뒷받침합니다. 다만 레버리지 부담과 규제·소송 관련 불확실성이 밸류에이션 할인 요인으로 작용합니다. 성장성보다는 현금수익(배당) 중심의 성격이 강한 종목입니다.",
    keyRisks: [
      "미국 규제 강화(멘솔, 니코틴 함량 규제 등)",
      "흡연 인구 감소에 따른 구조적 물량 하락",
      "전자니코틴 전환 지연 및 관련 투자 성과 부진",
    ],
    bullCase: "가격 결정력과 비용 통제로 높은 현금흐름을 유지하고, 무연 제품 전환이 점진적으로 성과를 내면 고배당+재평가가 가능할 수 있습니다.",
    bearCase: "규제 강도 상승과 물량 급감이 동시에 발생하면 이익 기반이 약화되어 배당 성장 여력이 크게 둔화될 수 있습니다.",
    valuationComment: "정량 지표 공란으로 정밀 산정은 제한적이지만, MO는 일반적으로 ‘저성장 고배당’ 할인주 프레임으로 접근하는 것이 적절합니다. 금리·규제 불확실성을 감안해 분할매수 전제의 보수적 진입 구간 설정이 유리합니다.",
    recentDevelopments: [
      "무연·전자니코틴 포트폴리오 확대를 위한 전략적 투자/인수 지속",
      "규제 이슈 및 소송·정책 변화에 따른 실적 가시성 변동",
    ],
    overallRating: "보유",
    ratingReason: "성장주는 아니지만 현금흐름 기반의 배당 매력은 유효해 기존 배당 포트폴리오 내 보유 관점이 타당합니다.",
    targetBuyPrice: 42,
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // MSA — MSA 세이프티 (배당왕족주, 55년 연속)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    ticker: "MSA",
    analyzedAt: "2026-02-25 02:00 KST",
    businessSummary: "MSA 세이프티는 산업 현장과 소방·구조 분야에서 인명 안전 장비를 설계·제조하는 전문 기업입니다. 가스·화염 감지, 호흡보호장비(SCBA), 소방 헬멧/보호구 등 고신뢰 제품을 중심으로 반복 교체 수요와 서비스 매출을 확보하는 구조입니다.",
    coreProducts: [
      "가스·화염 감지기 및 고정식 감지 시스템",
      "소방/구조용 SCBA(자급식 호흡보호장비)",
      "산업·소방용 헬멧/보호구 및 낙하방지 장비",
    ],
    geographicPresence: "북미 비중이 가장 크고, 유럽·중동·아시아 등 국제 시장으로 확장된 구조",
    dividendStreakYears: 55,
    dividendCAGR5yr: null,
    dividendCAGR10yr: null,
    recentDividendGrowth: "55년 연속 배당 증가 이력을 유지하며 방어적 배당 성장 기조를 이어가는 중",
    dividendSafety: "strong",
    dividendSafetyReason: "안전 규제 기반의 필수 수요와 제품 교체 주기 덕분에 경기 변동 대비 현금흐름 방어력이 높은 편",
    moatTypes: [
      "brand",
      "switching_costs",
      "intangible_assets",
    ],
    moatStrength: "narrow",
    moatNarrative: "안전장비 시장은 신뢰성·인증·레퍼런스가 중요해 검증된 브랜드에 수요가 집중되는 경향이 있습니다. 고객은 장비 교체 시 교육·운용 표준·유지보수 체계 때문에 동일 벤더를 선호해 전환비용이 존재합니다. 다만 산업재 특성상 절대적 독점보다는 경쟁사와의 기술·가격 경쟁이 병행됩니다.",
    revenueGrowthTrend: "중장기적으로는 규제 강화와 산업 안전 투자 확대에 연동된 완만한 성장 추세",
    marginTrend: "stable",
    debtLevel: "moderate",
    financialSummary: "MSA는 고부가 안전장비 중심 포트폴리오로 수익성 변동을 상대적으로 통제해온 편입니다. 다만 산업 경기와 공공 발주 사이클 영향으로 분기 실적의 진폭은 존재할 수 있습니다. 전반적으로 배당 지속성 측면에서는 우량하지만, 밸류에이션 구간에 따라 기대수익률 차이가 커질 수 있습니다.",
    keyRisks: [
      "산업경기 둔화 시 설비투자·발주 지연 리스크",
      "원자재·부품 비용 상승 및 공급망 차질",
      "밸류에이션 프리미엄 구간 진입 시 멀티플 조정 리스크",
    ],
    bullCase: "산업 안전 규제 강화와 소방·유틸리티 교체 수요가 동시에 확대되면 매출과 이익의 질적 성장이 가능하다. 프리미엄 제품 믹스가 유지되면 배당 성장과 주가 재평가가 함께 나타날 수 있다.",
    bearCase: "경기 둔화로 프로젝트 지연이 누적되면 주문과 마진이 압박받을 수 있다. 높은 기대가 선반영된 밸류에이션 구간에서는 실적이 양호해도 주가 조정이 발생할 수 있다.",
    valuationComment: "현재 제공된 핵심 밸류에이션 지표가 부재해 정량 판단 신뢰도가 낮습니다. 배당주 관점에서는 역사적 평균 밸류에이션 대비 할인 구간(시장 조정 시)에서 분할 접근이 유리합니다.",
    recentDevelopments: [
      "산업·소방 안전 규제 강화 흐름으로 고신뢰 감지·보호장비 수요 기대 지속",
      "포트폴리오 고도화 및 운영 효율화 중심의 수익성 방어 전략 지속",
    ],
    overallRating: "관망",
    ratingReason: "사업과 배당의 질은 우수하나 현재 수치 데이터 부재로 매수 타이밍의 정량 확신이 부족함",
    targetBuyPrice: null,
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // UVV — 유니버설 (배당왕족주, 54년 연속)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    ticker: "UVV",
    analyzedAt: "2026-02-25 02:30 KST",
    businessSummary: "유니버설(UVV)은 글로벌 담배 원료(leaf tobacco) 조달·가공·공급을 주력으로 하는 B2B 기업으로, 대형 담배 제조사에 안정적으로 원재료를 공급합니다. 최근에는 식물성 원료·성분, 과일/채소 기반 원료 등 비담배 소재 사업으로 포트폴리오를 다변화하며 현금흐름 안정성을 높이려는 전략을 병행하고 있습니다.",
    coreProducts: [
      "담배 원료(Leaf Tobacco) 조달·가공·공급",
      "식물성 원료 및 성분(Ingredient Solutions)",
      "농산물 기반 부가가치 소재",
    ],
    geographicPresence: "미국 및 주요 담배 소비/생산 국가를 포함한 글로벌 소싱·판매 네트워크 중심 (북미 비중이 높고 국제 사업이 보완)",
    dividendStreakYears: 54,
    dividendCAGR5yr: null,
    dividendCAGR10yr: null,
    recentDividendGrowth: "배당킹 이력(54년 연속 인상)을 유지하며 저성장·안정형 배당 증가 기조를 이어가는 모습입니다.",
    dividendSafety: "moderate",
    dividendSafetyReason: "오랜 배당 기록은 강점이지만, 담배 원료 업황·규제·작황 변동에 따라 이익 변동성이 존재해 절대적 안전구간으로 보긴 어렵습니다.",
    moatTypes: [
      "cost_advantage",
      "efficient_scale",
      "intangible_assets",
    ],
    moatStrength: "narrow",
    moatNarrative: "UVV는 글로벌 소싱망과 가공·품질관리 역량, 장기 고객관계에서 오는 운영 효율로 진입장벽을 형성합니다. 다만 최종 소비재 브랜드 기업이 아니라 원재료 공급사 특성상 가격결정력이 제한적이고, 구조적 수요 둔화 리스크가 있어 해자는 좁은 편으로 판단됩니다.",
    revenueGrowthTrend: "전통 담배 원료는 저성장/정체 성향이며, 비담배 소재 확장이 중장기 성장의 핵심 변수입니다.",
    marginTrend: "stable",
    debtLevel: "moderate",
    financialSummary: "현금창출력과 운전자본 관리가 중요한 사업 구조로, 전반적으로 경기방어적 성격을 보이나 농산물·원재료 사이클 영향을 받습니다. 재무는 과도한 레버리지보다는 중간 수준의 부채 운용에 가까운 프로파일로 해석됩니다.",
    keyRisks: [
      "글로벌 흡연율 하락 및 담배 산업의 구조적 수요 감소",
      "각국 규제 강화(니코틴/담배 관련 정책)로 인한 고객사 생산·구매 변동",
      "기후·작황·원재료 가격 변동에 따른 마진 압박",
    ],
    bullCase: "비담배 소재 사업이 의미 있는 이익 비중으로 성장하고, 기존 담배 원료 사업이 안정적 현금흐름을 유지하면 멀티플 재평가가 가능해집니다. 배당 성장 지속 시 방어형 소득주로 수요가 강화될 수 있습니다.",
    bearCase: "담배 원료 수요 감소가 예상보다 빠르고 비담배 사업 확장이 지연되면 이익·밸류에이션이 동반 압박받을 수 있습니다. 원가 변동과 규제 충격이 겹치면 배당 여력에 대한 시장 신뢰가 약해질 수 있습니다.",
    valuationComment: "현재 핵심 밸류에이션 수치가 부재해 정량 저평가 판단은 유보가 필요합니다. 다만 UVV는 일반적으로 고성장주가 아닌 현금흐름·배당 기반 종목이므로, 역사적 배당수익률 밴드 상단 구간과 P/E 하단 구간 동시 진입 시 분할매수가 유효한 접근입니다.",
    recentDevelopments: [
      "배당킹 타이틀(54년 연속 증배) 유지로 주주환원 신뢰를 지속",
      "비담배 원료·성분 사업 확대를 통한 사업 다각화 전략을 진행",
    ],
    overallRating: "관망",
    ratingReason: "장기 배당 이력은 매력적이지만 핵심 지표 공백 상태에서는 안전마진 확인 후 접근하는 것이 합리적입니다.",
    targetBuyPrice: null,
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // NFG — 내셔널 퓨얼 가스 (배당왕족주, 54년 연속)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    ticker: "NFG",
    analyzedAt: "2026-02-25 03:00 KST",
    businessSummary: "내셔널 퓨얼 가스(NFG)는 미국 동북부를 중심으로 천연가스 유틸리티, 파이프라인·저장(미드스트림), 탐사·생산(업스트림)을 함께 운영하는 통합 에너지 기업입니다. 규제형 유틸리티의 안정적 현금흐름과 업스트림의 원자재 가격 민감도가 결합된 구조로, 배당 성장의 기반과 실적 변동성이 동시에 존재합니다. 54년 연속 배당 증가 이력은 현금흐름 관리와 보수적 자본배분 역량을 시사합니다.",
    coreProducts: [
      "천연가스 유틸리티 공급 서비스",
      "가스 파이프라인·저장 및 운송 서비스",
      "천연가스 탐사·생산(E&P)",
    ],
    geographicPresence: "미국 중심(대부분 미국 동북부 유틸리티·아팔래치아 인근 가스 밸류체인)",
    dividendStreakYears: 54,
    dividendCAGR5yr: null,
    dividendCAGR10yr: null,
    recentDividendGrowth: "배당왕 특성상 최근에도 소폭 인상 기조를 유지한 것으로 해석되나, 정확 수치는 추가 데이터 확인이 필요합니다.",
    dividendSafety: "moderate",
    dividendSafetyReason: "규제형 유틸리티 현금흐름이 방어력을 주지만, 업스트림 이익 변동과 금리·투자비 부담이 배당 여력을 흔들 수 있습니다.",
    moatTypes: [
      "efficient_scale",
      "cost_advantage",
      "intangible_assets",
    ],
    moatStrength: "narrow",
    moatNarrative: "지역 유틸리티·인프라는 허가와 장기 투자비가 필요한 사업이라 신규 진입이 쉽지 않습니다. 파이프라인·저장 자산은 규모의 경제와 네트워크 상의 효율을 제공해 일정 수준의 경쟁우위를 형성합니다. 다만 업스트림 부문은 원자재 가격 사이클 영향이 커 해자의 질을 완전히 방어적으로 만들지는 못합니다.",
    revenueGrowthTrend: "구조적으로는 완만 성장이나, 에너지 가격·물동량 사이클에 따라 분기별 변동성이 큰 편입니다.",
    marginTrend: "stable",
    debtLevel: "moderate",
    financialSummary: "유틸리티/미드스트림의 예측 가능한 현금흐름이 재무 안정성을 지지합니다. 반면 자본집약적 사업 특성상 부채와 금리 민감도는 지속 관리가 필요합니다. 배당 이력은 우수하지만, 안전성 평가는 업황과 투자집행 국면에 따라 달라질 수 있습니다.",
    keyRisks: [
      "천연가스 가격 하락 또는 변동성 확대에 따른 업스트림 수익성 악화",
      "금리 상승 장기화로 인한 이자비용·밸류에이션 부담",
      "규제 환경 변화 및 인프라 프로젝트 인허가 지연",
    ],
    bullCase: "가스 수요와 인프라 활용률이 견조하고 규제형 수익이 안정적으로 누적되면, 배당 성장 지속과 멀티플 정상화가 동시에 가능할 수 있습니다. 업스트림 실적이 우호적 사이클을 타면 이익 레버리지도 기대됩니다.",
    bearCase: "가스 가격 약세와 고금리 환경이 겹치면 이익·현금흐름 압박으로 주가 리레이팅이 제한될 수 있습니다. 대규모 CAPEX와 규제 지연이 발생하면 배당 성장 여력도 둔화될 수 있습니다.",
    valuationComment: "현재 핵심 밸류에이션 수치가 부재해 절대 저평가/고평가 단정은 어렵습니다. 실무적으로는 5년 평균 배당수익률 대비 할인 구간(상대적으로 높은 현재 수익률)과 P/E 역사적 하단 구간이 동시에 확인될 때 분할 접근이 합리적입니다.",
    recentDevelopments: [
      "54년 연속 배당 증가 기록을 유지하는 배당 정책 일관성",
      "유틸리티·미드스트림·업스트림 통합 포트폴리오 기반의 현금흐름 방어 전략 지속",
    ],
    overallRating: "관심",
    ratingReason: "배당 성장의 질은 높지만, 정량 지표 공백으로 현재 가격 매력도를 확정하기 어려워 우선 모니터링이 적절합니다.",
    targetBuyPrice: null,
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // TNC — 테넌트 (배당왕족주, 53년 연속)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    ticker: "TNC",
    analyzedAt: "2026-02-25 03:30 KST",
    businessSummary: "테넌트(Tennant Company)는 상업·산업용 바닥 청소 장비와 청소 솔루션을 설계·제조·판매하는 기업입니다. 장비 판매뿐 아니라 소모품, 애프터서비스, 디지털 기반 관리 솔루션을 통해 반복 매출을 창출하는 구조를 갖고 있습니다. 제조·물류·리테일·공공시설 등 다양한 B2B 고객군에 공급합니다.",
    coreProducts: [
      "산업용 스크러버·스위퍼 등 바닥 청소 장비",
      "소모품·부품·유지보수 서비스",
      "자율주행/로보틱 청소 솔루션 및 관련 소프트웨어",
    ],
    geographicPresence: "북미 비중이 가장 크고, 유럽·아시아를 포함한 국제 시장으로 분산된 매출 구조",
    dividendStreakYears: 53,
    dividendCAGR5yr: null,
    dividendCAGR10yr: null,
    recentDividendGrowth: "53년 연속 배당 증가 이력이 있으나, 제공된 최신 수치 부재로 최근 인상률의 정량 확인은 필요합니다.",
    dividendSafety: "moderate",
    dividendSafetyReason: "장기 배당 성장 기록은 강점이지만 현재 배당성향·현금흐름 커버리지 데이터가 없어 안전성 판단은 중립이 적절합니다.",
    moatTypes: [
      "brand",
      "switching_costs",
      "cost_advantage",
    ],
    moatStrength: "narrow",
    moatNarrative: "전문 청소 장비 시장에서 형성된 브랜드 신뢰와 서비스 네트워크가 진입장벽으로 작동합니다. 기업 고객은 장비 운영 교육·부품 호환·유지보수 체계 때문에 공급사를 자주 바꾸기 어렵습니다. 다만 글로벌 대형 산업장비 업체와의 경쟁으로 해자는 '넓음'보다는 '좁음'에 가깝습니다.",
    revenueGrowthTrend: "산업·상업 설비 투자 사이클 영향을 받는 가운데, 서비스·자동화 솔루션 확대로 중장기 완만한 성장 추세가 기대됩니다.",
    marginTrend: "stable",
    debtLevel: "moderate",
    financialSummary: "테넌트는 장비 판매와 애프터마켓 매출이 결합된 사업 구조로 경기 민감도를 일부 완충합니다. 다만 산업 경기와 원가(부품·물류) 변동의 영향을 받기 때문에 수익성은 분기별 변동성이 존재할 수 있습니다. 현재 제공 지표가 비어 있어 레버리지·수익성의 최신 정량 점검이 선행되어야 합니다.",
    keyRisks: [
      "경기 둔화 시 기업 설비투자 축소로 장비 수요 감소",
      "원자재·부품·물류비 상승에 따른 마진 압박",
      "산업 자동화/로보틱스 경쟁 심화로 가격 및 점유율 부담",
    ],
    bullCase: "자동화 청소 수요 확대와 서비스 매출 비중 상승이 동반되면 이익 체질이 개선될 수 있습니다. 배당 성장 전통이 유지되면서 밸류에이션 재평가가 가능해집니다.",
    bearCase: "경기 하강 국면에서 장비 교체 주기가 길어지면 매출과 영업레버리지가 동시에 약화될 수 있습니다. 원가 부담이 지속되면 배당 성장 여력도 둔화될 수 있습니다.",
    valuationComment: "현재가·PER·배당수익률 등 핵심 밸류에이션 데이터가 없어 정량 저평가 판단은 어렵습니다. 최소한 배당수익률이 과거 평균 대비 매력적이고, 잉여현금흐름 기준 배당 커버리지가 확인될 때 분할 접근이 합리적입니다.",
    recentDevelopments: [
      "산업 현장 자동화 수요에 맞춘 로보틱/스마트 청소 솔루션 확대 전략",
      "글로벌 공급망·원가 환경에 대응한 운영 효율화 및 수익성 방어 노력",
    ],
    overallRating: "관망",
    ratingReason: "배당 이력은 우수하지만 현재 핵심 정량지표가 모두 결측이라 매수 판단 근거가 부족합니다.",
    targetBuyPrice: null,
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // ABBV — 애브비 (배당왕족주, 53년 연속)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    ticker: "ABBV",
    analyzedAt: "2026-02-25 04:00 KST",
    businessSummary: "애브비는 면역학, 종양학, 신경과학, 에스테틱(미용) 분야의 처방의약품을 개발·판매하는 글로벌 바이오제약 기업입니다. 휴미라 특허절벽 이후 스카이리지(Skyrizi)와 린버크(Rinvoq)를 중심으로 성장 축을 재편하며 매출 구조를 전환하고 있습니다. 알러간 인수로 보톡스 등 에스테틱 포트폴리오를 확보해 현금흐름 다변화도 진행했습니다.",
    coreProducts: [
      "스카이리지(Skyrizi)",
      "린버크(Rinvoq)",
      "보톡스(Botox)",
    ],
    geographicPresence: "미국 비중이 가장 크고, 유럽·일본·신흥국 등 국제 매출이 보완하는 글로벌 구조",
    dividendStreakYears: 53,
    dividendCAGR5yr: null,
    dividendCAGR10yr: null,
    recentDividendGrowth: "최근에도 연간 배당 인상을 이어가며 주주환원 기조를 유지하고 있습니다.",
    dividendSafety: "moderate",
    dividendSafetyReason: "강한 현금창출력이 있으나 대형 인수 이후 부채와 의약품 특허 리스크를 함께 관리해야 합니다.",
    moatTypes: [
      "intangible_assets",
      "switching_costs",
      "brand",
    ],
    moatStrength: "wide",
    moatNarrative: "신약 특허, 임상·허가 역량, 글로벌 영업망은 제약 산업에서 진입장벽이 높은 무형자산 해자를 형성합니다. 만성질환 치료제의 경우 처방 관성과 환자 전환 비용이 존재해 매출 방어력에 기여합니다. 다만 핵심 제품의 특허 만료 시점마다 해자 강도가 일시적으로 약해질 수 있습니다.",
    revenueGrowthTrend: "휴미라 감소를 신제품 성장으로 상쇄하며 중기적으로 회복 추세를 보이는 구간입니다.",
    marginTrend: "stable",
    debtLevel: "moderate",
    financialSummary: "애브비는 대형 제약사 수준의 영업현금흐름과 높은 수익성을 기반으로 배당과 R&D를 병행합니다. 알러간 인수 이후 부채 축소를 지속해 재무 레버리지를 점진적으로 개선해 왔습니다. 향후 핵심 파이프라인의 상업화 속도가 재무 탄력성의 핵심 변수입니다.",
    keyRisks: [
      "주요 블록버스터의 특허 만료 및 바이오시밀러 경쟁 심화",
      "미국 약가 규제 및 리베이트 구조 변화",
      "임상 실패·허가 지연에 따른 파이프라인 가치 훼손",
    ],
    bullCase: "스카이리지·린버크의 고성장이 휴미라 공백을 빠르게 메우고, 에스테틱 사업이 경기 회복과 함께 반등하면 이익과 배당 여력이 동반 개선될 수 있습니다. 부채 축소가 추가로 진행되면 멀티플 재평가 가능성도 있습니다.",
    bearCase: "신제품 성장률이 기대에 못 미치거나 규제·약가 압력이 확대되면 이익 회복이 지연될 수 있습니다. 이 경우 배당 성장 속도 둔화와 밸류에이션 디레이팅이 동시에 나타날 수 있습니다.",
    valuationComment: "현재 제시된 정량 지표가 없어 절대적 저평가/고평가 판단은 제한적입니다. 일반적으로는 배당수익률이 과거 평균 대비 상단에 위치하고, 신제품 매출 모멘텀이 확인되는 조정 구간에서 분할매수 접근이 유효합니다.",
    recentDevelopments: [
      "휴미라 이후 포트폴리오 전환의 핵심인 스카이리지·린버크 매출 비중 확대",
      "에스테틱 및 신경과학 포트폴리오를 통한 사업 다변화와 부채 관리 병행",
    ],
    overallRating: "관심",
    ratingReason: "고품질 파이프라인과 주주환원 매력은 유효하지만 특허·규제 변수 확인이 필요한 구간입니다.",
    targetBuyPrice: null,
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // CDUAF — 캐네디언 유틸리티 (배당왕족주, 53년 연속)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    ticker: "CDUAF",
    analyzedAt: "2026-02-25 04:30 KST",
    businessSummary: "캐네디언 유틸리티(ATCO 계열)는 전기·천연가스의 송배전 및 유통, 발전, 저장 인프라를 운영하는 규제형 유틸리티 기업입니다. 캐나다 중심의 규제자산 기반 수익 구조를 바탕으로 안정적인 현금흐름을 창출해 왔고, 50년 이상 배당을 늘린 배당 성장 이력이 핵심 투자 포인트입니다.",
    coreProducts: [
      "전력 송배전 및 유통",
      "천연가스 유통·저장·관련 인프라",
      "규제 기반 유틸리티 서비스 운영",
    ],
    geographicPresence: "캐나다 중심(알버타 비중 높음) · 일부 국제/기타 인프라 사업",
    dividendStreakYears: 53,
    dividendCAGR5yr: null,
    dividendCAGR10yr: null,
    recentDividendGrowth: "연속 증배 기조는 유지되고 있으나, 최근 증배율은 과거 대비 완만한 구간으로 평가됩니다.",
    dividendSafety: "moderate",
    dividendSafetyReason: "규제자산 기반 현금흐름은 방어적이지만, 금리·자본집약적 투자 부담이 배당 여력을 제약할 수 있습니다.",
    moatTypes: [
      "efficient_scale",
      "switching_costs",
    ],
    moatStrength: "narrow",
    moatNarrative: "유틸리티는 지역 독점에 가까운 네트워크 특성과 높은 초기 투자비로 신규 진입이 어렵습니다. 또한 규제 체계 내에서 예측 가능한 수익 회수 구조를 갖추고 있어 현금흐름 가시성이 높습니다. 다만 규제 환경과 허용수익률 변화에 따라 해자 강도는 변동될 수 있습니다.",
    revenueGrowthTrend: "저성장·안정형(규제 요금기반 확장과 투자 집행에 연동)",
    marginTrend: "stable",
    debtLevel: "high",
    financialSummary: "사업 구조상 대규모 설비투자가 필요해 레버리지 의존도가 상대적으로 높을 가능성이 큽니다. 반면 규제자산 기반 모델은 경기 민감도를 낮추고 장기 현금흐름 안정성을 제공합니다. 금리 수준과 규제기관의 허용수익률 결정이 재무 체력의 핵심 변수입니다.",
    keyRisks: [
      "금리 상승에 따른 이자비용 및 밸류에이션 압박",
      "규제기관의 허용수익률(ROE) 하향 또는 비용 전가 제한",
      "대규모 CAPEX 지연·초과로 인한 수익성/현금흐름 악화",
    ],
    bullCase: "규제자산(Rate Base) 확대와 안정적 요금 회수로 이익·배당의 장기 복리 성장이 지속될 수 있습니다. 금리 안정 또는 하락 국면에서는 배당주 재평가 가능성도 있습니다.",
    bearCase: "고금리 장기화와 규제 불확실성이 겹치면 자본비용 부담이 커져 배당 성장률이 둔화될 수 있습니다. 프로젝트 집행 리스크가 현실화되면 주가 디스카운트가 확대될 수 있습니다.",
    valuationComment: "현재 핵심 밸류에이션 지표가 부재해 정량 저평가 판단은 유보가 필요합니다. 유틸리티 특성상 금리 피크아웃 신호와 배당수익률의 역사적 밴드 상단 접근 구간에서 분할 매수가 유리합니다.",
    recentDevelopments: [
      "배당왕(50년+) 기록을 유지하며 연속 증배 트랙레코드를 지속",
      "규제자산 확대 및 인프라 투자 집행이 중장기 실적 가시성의 핵심 이슈",
    ],
    overallRating: "관망",
    ratingReason: "사업·배당의 질은 우수하나 현재 제공된 수치가 없어 가격 매력도를 확인하기 전까지는 보수적 접근이 합리적입니다.",
    targetBuyPrice: null,
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // PEP — 펩시코 (배당왕족주, 53년 연속)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    ticker: "PEP",
    analyzedAt: "2026-02-25 05:00 KST",
    businessSummary: "펩시코는 탄산음료(펩시, 마운틴듀)와 스낵(레이즈, 도리토스, 치토스)을 함께 보유한 글로벌 식음료 기업입니다. 음료보다 수익성이 높은 스낵 비중이 큰 구조 덕분에 경기 둔화 구간에서도 상대적으로 안정적인 현금흐름을 창출하는 경기방어형 사업 모델을 갖고 있습니다. 유통·마케팅·제품 포트폴리오를 결합한 규모의 경제가 강점입니다.",
    coreProducts: [
      "탄산/비탄산 음료(Pepsi, Mountain Dew, Gatorade)",
      "스낵(Frito-Lay: Lay’s, Doritos, Cheetos)",
      "간편식·시리얼·기타 식품(Quaker 등)",
    ],
    geographicPresence: "북미 비중이 가장 크고, 유럽·중남미·아시아/중동/아프리카로 분산된 글로벌 매출 구조",
    dividendStreakYears: 53,
    dividendCAGR5yr: null,
    dividendCAGR10yr: null,
    recentDividendGrowth: "53년 연속 배당 증가 이력을 유지하며 최근에도 증배 기조를 이어가는 배당 성장주 성격이 강합니다.",
    dividendSafety: "strong",
    dividendSafetyReason: "필수소비재 중심의 방어적 수요와 강한 브랜드 파워로 경기 변동기에도 배당 지속 가능성이 높은 편입니다.",
    moatTypes: [
      "brand",
      "cost_advantage",
      "intangible_assets",
      "efficient_scale",
    ],
    moatStrength: "wide",
    moatNarrative: "펩시코는 음료와 스낵 양축 브랜드 자산이 매우 강해 가격 인상 전가력이 상대적으로 높습니다. 대형 유통망과 물류·마케팅 규모의 경제로 경쟁사 대비 원가·진열·판촉 효율이 우수하며, 장기간 구축된 무형자산이 진입장벽으로 작동합니다.",
    revenueGrowthTrend: "성숙 기업 특성상 고성장보다는 가격·믹스 개선과 신제품 중심의 완만한 성장 추세입니다.",
    marginTrend: "stable",
    debtLevel: "moderate",
    financialSummary: "현금창출력이 높은 사업 구조 덕분에 배당과 자사주 환원을 병행할 수 있는 체력을 보유한 편입니다. 다만 원재료·물류·환율 변동에 따라 단기 수익성이 흔들릴 수 있어 비용 통제력이 중요합니다. 전반적으로 방어적 재무 체질로 평가됩니다.",
    keyRisks: [
      "원재료(설탕·옥수수·포장재) 및 물류비 상승에 따른 마진 압박",
      "건강/규제 트렌드 변화(당류·가공식품 규제)로 제품 믹스 전환 비용 확대",
      "신흥국 환율 및 거시 둔화로 해외 실적 변동성 확대",
    ],
    bullCase: "스낵 중심의 고마진 포트폴리오와 가격 결정력이 유지되면 이익 방어와 점진적 EPS 성장이 가능하고, 배당 증가가 장기 복리 수익을 뒷받침할 수 있습니다.",
    bearCase: "소비 둔화와 비용 인플레이션이 동반되면 가격 전가 한계로 마진이 훼손되고, 밸류에이션 부담이 있는 구간에서는 주가 조정 폭이 커질 수 있습니다.",
    valuationComment: "현재 핵심 밸류에이션 수치가 비어 있어 정밀 판단은 제한적입니다. 일반적으로 펩시코는 프리미엄이 붙는 방어주 성격이므로, 과거 평균 대비 배당수익률이 의미 있게 높아지는 조정 구간에서 분할 매수 접근이 유리합니다.",
    recentDevelopments: [
      "글로벌 인플레이션 환경에서 가격·제품믹스 중심의 수익성 방어 전략 지속",
      "건강 지향·저당 트렌드 대응을 위한 포트폴리오 리밸런싱 및 신제품 확대",
    ],
    overallRating: "관망",
    ratingReason: "사업·배당의 질은 높지만 현재 제공된 밸류에이션 데이터 부재로 매수 가격 메리트 판단이 어려워 대기 전략이 합리적입니다.",
    targetBuyPrice: null,
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // GRC — 고먼-러프 (배당왕족주, 52년 연속)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    ticker: "GRC",
    analyzedAt: "2026-02-25 05:30 KST",
    businessSummary: "GRC(고먼-러프)는 산업용 펌프와 펌핑 시스템을 설계·제조하는 기업으로, 수처리·하수·건설·석유가스·산업 공정 등 다양한 최종 시장에 제품을 공급합니다. 내구성과 유지보수 용이성에 강점을 둔 엔지니어드 제품 중심 포트폴리오를 통해 교체/보수 수요와 신규 설비 수요를 함께 흡수하는 구조입니다.",
    coreProducts: [
      "원심펌프 및 자흡식 펌프",
      "하수·슬러지·수처리용 펌핑 시스템",
      "산업/건설/공공 인프라용 맞춤형 펌프 패키지 및 애프터마켓 부품",
    ],
    geographicPresence: "북미 중심 매출 구조에 국제 매출이 보완되는 형태 (미국 비중이 높은 편으로 추정)",
    dividendStreakYears: 52,
    dividendCAGR5yr: null,
    dividendCAGR10yr: null,
    recentDividendGrowth: "52년 연속 배당 증가 이력이 배당 정책의 일관성을 보여주지만, 최근 증가율의 정량 확인은 추가 데이터가 필요합니다.",
    dividendSafety: "moderate",
    dividendSafetyReason: "장기 배당 트랙레코드는 강점이지만 현재 배당성향·이익/현금흐름 커버리지 수치 부재로 보수적 판단이 필요합니다.",
    moatTypes: [
      "intangible_assets",
      "switching_costs",
      "efficient_scale",
    ],
    moatStrength: "narrow",
    moatNarrative: "산업용 펌프 시장에서 축적된 브랜드 신뢰와 현장 적용 레퍼런스는 반복 수주와 교체 수요를 유도합니다. 설비 신뢰성과 다운타임 비용 때문에 고객의 공급사 전환이 쉽지 않아 일정 수준의 전환비용이 존재합니다. 다만 글로벌 대형 경쟁사도 많은 시장이라 해자는 넓기보다 좁고 실무형 경쟁우위에 가깝습니다.",
    revenueGrowthTrend: "경기·설비투자 사이클과 인프라/유틸리티 수요에 연동되는 완만한 순환형 성장 패턴으로 보는 것이 합리적입니다.",
    marginTrend: "stable",
    debtLevel: "moderate",
    financialSummary: "산업재 제조업 특성상 원자재·물류·수요 사이클의 영향을 받지만, 공공 인프라 및 유지보수 수요가 실적 변동성을 일부 완화합니다. 장기 배당 증가 이력은 재무 운영의 보수성을 시사하나, 현재 ROE·D/E·현금흐름 지표 확인 전까지는 중립적 재무 평가가 적절합니다.",
    keyRisks: [
      "산업 경기 둔화 및 설비투자 축소에 따른 수주 감소",
      "원자재/부품/물류 비용 상승이 마진에 미치는 압력",
      "프로젝트 지연 및 공공 인프라 예산 집행 변동",
    ],
    bullCase: "인프라 투자와 유틸리티 수요가 견조하게 이어지고 애프터마켓 매출 비중이 확대되면 이익 안정성과 배당 지속 가능성이 동반 개선될 수 있습니다. 운영 효율화가 병행되면 밸류에이션 재평가 여지도 생깁니다.",
    bearCase: "경기 둔화로 산업·건설·에너지 고객의 발주가 지연되면 매출 레버리지가 약화되고 마진이 압박될 수 있습니다. 이 경우 배당 증액 폭이 축소되거나 주가 디레이팅이 나타날 수 있습니다.",
    valuationComment: "현재가·수익성·멀티플 지표가 모두 비어 있어 정량 밸류에이션은 불가합니다. 최소한 Trailing/Forward PER, FCF 수익률, 배당수익률의 5년 밴드 대비 할인 구간 확인 후 분할 접근이 바람직합니다.",
    recentDevelopments: [
      "52년 연속 배당 증가 이력 유지(배당 정책 신뢰도 측면의 핵심 포인트)",
      "산업재 전반의 수요·원가·금리 환경 변화가 실적 민감도에 지속 영향",
    ],
    overallRating: "관망",
    ratingReason: "배당 이력은 우수하지만 핵심 밸류에이션/재무 수치 공백으로 현재 시점의 기대수익 대비 위험을 정량화하기 어렵습니다.",
    targetBuyPrice: null,
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // RPM — RPM 인터내셔널 (배당왕족주, 52년 연속)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    ticker: "RPM",
    analyzedAt: "2026-02-25 06:00 KST",
    businessSummary: "RPM 인터내셔널은 건축용 코팅, 실란트, 바닥재, 방수재 등 특수 화학제품을 제조·판매하는 산업재 기업입니다. Rust-Oleum, DAP, Tremco 등 강한 브랜드 포트폴리오를 기반으로 유지보수·보수(Repair/Maintenance) 수요에 깊게 노출되어 있으며, 경기 민감한 신축보다 상대적으로 방어적인 수요원을 함께 보유하고 있습니다.",
    coreProducts: [
      "보호 코팅·페인트(예: Rust-Oleum)",
      "실란트·접착제·건축 보수재(예: DAP)",
      "상업용 지붕·방수·바닥 시스템(예: Tremco)",
    ],
    geographicPresence: "북미 중심 매출 구조이며 유럽·기타 해외 비중이 보완하는 형태",
    dividendStreakYears: 52,
    dividendCAGR5yr: null,
    dividendCAGR10yr: null,
    recentDividendGrowth: "52년 연속 배당 증가 이력은 배당 정책의 일관성을 보여주지만, 최근 인상 폭은 업황·원가 환경에 따라 탄력적으로 결정될 가능성이 있습니다.",
    dividendSafety: "moderate",
    dividendSafetyReason: "장기 배당 트랙레코드는 강점이지만 산업재 특성상 원재료·건설 사이클 영향으로 이익 변동성이 존재합니다.",
    moatTypes: [
      "brand",
      "cost_advantage",
      "intangible_assets",
      "switching_costs",
    ],
    moatStrength: "narrow",
    moatNarrative: "소비자·전문가 시장에서 축적된 브랜드 신뢰와 유통망은 반복 구매를 유도하는 핵심 경쟁력입니다. 또한 제조·조달 규모를 통한 원가 효율과 제품 인증·규격 대응 역량이 진입장벽으로 작동합니다. 다만 화학소재 업계 특성상 절대적 독점력보다는 다수 강자의 경쟁 구도에 가깝습니다.",
    revenueGrowthTrend: "인수합병과 가격 전가, 유지보수 수요를 바탕으로 중장기 완만한 성장 기조",
    marginTrend: "stable",
    debtLevel: "moderate",
    financialSummary: "RPM은 다양한 엔드마켓과 브랜드 포트폴리오로 현금흐름 기반이 비교적 분산되어 있습니다. 수익성은 원재료 가격, 물류비, 판가 전가 능력에 따라 변동하지만 구조적으로 급격한 훼손 가능성은 제한적입니다. 레버리지는 성장 투자와 주주환원 사이 균형 관리가 필요한 수준으로 보입니다.",
    keyRisks: [
      "원재료·에너지 비용 상승 시 마진 압박",
      "건설·제조 경기 둔화로 산업재 수요 약화",
      "인수합병 통합 실패 또는 예상 시너지 미달",
    ],
    bullCase: "비주거 보수·리모델링 수요가 견조하고 원가 안정화가 동반되면 마진 개선과 이익 레버리지가 동시에 나타날 수 있습니다. 여기에 배당 성장 스토리가 재평가되면 멀티플 확장 여지도 있습니다.",
    bearCase: "경기 둔화와 원가 재상승이 겹치면 판가 전가 한계로 수익성이 후퇴할 수 있습니다. 이 경우 배당 성장률 둔화와 밸류에이션 디레이팅이 동반될 위험이 있습니다.",
    valuationComment: "현재 핵심 밸류에이션 데이터가 부재해 정밀한 적정가 산출은 어렵습니다. 일반적으로는 역사적 밴드 대비 과열 구간 추격 매수보다, 실적 모멘텀 확인 후 조정 구간 분할 접근이 보수적입니다.",
    recentDevelopments: [
      "운영 효율화와 포트폴리오 고도화를 통한 수익성 개선 노력 지속",
      "건설·유지보수 수요 및 원가 흐름에 따라 단기 실적 변동성 확대 가능성",
    ],
    overallRating: "관망",
    ratingReason: "배당 이력과 사업 안정성은 매력적이지만 현재 핵심 수치 공백으로 가격 메리트 판단 근거가 부족합니다.",
    targetBuyPrice: null,
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // RLI — RLI 코퍼레이션 (배당왕족주, 50년 연속)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    ticker: "RLI",
    analyzedAt: "2026-02-25 06:30 KST",
    businessSummary: "RLI 코퍼레이션은 미국 중심의 전문 손해보험사로, 재산보험·책임보험·보증보험 등 틈새 상업보험 라인에서 언더라이팅 수익성과 자본 효율을 중시하는 사업 모델을 운영합니다. 보험 인수이익과 투자수익을 결합해 이익을 창출하며, 장기적으로 배당 성장을 이어온 주주환원 성향이 특징입니다.",
    coreProducts: [
      "전문 상업 손해보험(재산·상해·책임)",
      "보증/신용 관련 보험",
      "보험 운용자산 투자수익 관리",
    ],
    geographicPresence: "미국 중심(매출/보험료 대부분이 미국에서 발생)",
    dividendStreakYears: 50,
    dividendCAGR5yr: null,
    dividendCAGR10yr: null,
    recentDividendGrowth: "연속 배당 증액 기조는 유지되나, 보험손해율·투자환경에 따라 증액 폭과 총주주환원 강도는 변동 가능성이 있습니다.",
    dividendSafety: "moderate",
    dividendSafetyReason: "장기 배당 이력은 우수하지만 보험업 특성상 대형 손해사건과 언더라이팅 사이클에 따라 이익 변동성이 존재합니다.",
    moatTypes: [
      "intangible_assets",
      "efficient_scale",
    ],
    moatStrength: "narrow",
    moatNarrative: "전문 보험 라인에서의 언더라이팅 데이터, 리스크 선별 역량, 오랜 시장 평판은 진입장벽으로 작동합니다. 다만 보험 산업은 가격 경쟁과 사이클 영향이 커 절대적 독점력보다는 라인별 운영 역량에 기반한 제한적 해자가 더 현실적입니다.",
    revenueGrowthTrend: "보험료 성장과 가격 인상 사이클에 연동되어 중장기 우상향하되 연도별 변동성이 있습니다.",
    marginTrend: "stable",
    debtLevel: "moderate",
    financialSummary: "보험사는 부채 구조가 일반 제조업과 달라 준비금/레버리지 해석이 중요하며, 핵심은 결합비율과 자본적정성입니다. RLI는 역사적으로 수익성 중심 인수 전략을 강조해 왔으나, 대형 재해 발생 연도에는 실적 변동이 불가피합니다. 투자자 입장에서는 손해율 추이와 운용자산 수익률을 함께 점검해야 합니다.",
    keyRisks: [
      "대형 자연재해 및 예기치 못한 클레임 급증에 따른 손해율 악화",
      "보험 가격경쟁 심화로 인한 언더라이팅 마진 축소",
      "금리·신용시장 변동에 따른 투자수익 및 자본 변동성",
    ],
    bullCase: "보험료 인상 사이클과 엄격한 언더라이팅이 동시에 작동하면 결합비율 개선과 투자수익 증가가 맞물려 이익 레벨업이 가능합니다. 이 경우 배당 성장의 질과 밸류에이션 프리미엄 유지 가능성이 높아집니다.",
    bearCase: "연속적인 대형 손해사건 또는 가격경쟁 재개 시 수익성이 빠르게 둔화될 수 있습니다. 이익 변동이 커지면 배당 증가 속도와 주가 멀티플이 동시에 압박받을 수 있습니다.",
    valuationComment: "현재 핵심 밸류 지표가 부재해 절대 저평가/고평가 단정은 어렵습니다. 매수는 P/B·ROE·결합비율의 동시 확인 후, 업계 평균 대비 프리미엄이 과도하지 않은 구간에서 분할 접근이 합리적입니다.",
    recentDevelopments: [
      "보험업 전반의 요율 환경 및 재보험 비용 변화가 수익성 전망에 중요한 변수로 부각",
      "금리 레벨 변화에 따른 보험사 운용자산 수익률 기대치 재평가 진행",
    ],
    overallRating: "관망",
    ratingReason: "배당 이력은 매우 우수하지만 현재 핵심 수치 공백이 커서 수익성·밸류에이션 확인 전까지는 보수적 접근이 적절합니다.",
    targetBuyPrice: null,
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // MGEE — MGE 에너지 (배당왕족주, 50년 연속)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    ticker: "MGEE",
    analyzedAt: "2026-02-25 07:00 KST",
    businessSummary: "MGE 에너지는 위스콘신 매디슨 지역을 중심으로 전기·가스 유틸리티 서비스를 제공하는 규제형 공익기업입니다. 안정적인 요금 기반 수익 구조를 바탕으로 송배전 인프라 투자와 청정에너지 전환을 병행하며 장기 배당 성장을 이어온 기업으로 평가됩니다.",
    coreProducts: [
      "전력 공급 및 송배전",
      "천연가스 공급",
      "재생에너지·발전 자산 운영",
    ],
    geographicPresence: "미국 위스콘신(매디슨 및 인근 서비스 권역) 중심의 지역 유틸리티",
    dividendStreakYears: 50,
    dividendCAGR5yr: null,
    dividendCAGR10yr: null,
    recentDividendGrowth: "50년 연속 배당 증가 이력을 유지해 온 점은 배당 정책의 일관성을 시사합니다.",
    dividendSafety: "moderate",
    dividendSafetyReason: "규제형 유틸리티의 현금흐름 안정성은 강점이지만, 금리·설비투자 부담에 따라 커버리지 변동 가능성이 있습니다.",
    moatTypes: [
      "efficient_scale",
      "intangible_assets",
    ],
    moatStrength: "narrow",
    moatNarrative: "지역 독점에 가까운 유틸리티 사업 구조는 신규 진입이 매우 어렵고 수요 기반이 비교적 안정적입니다. 또한 인허가·규제 체계 자체가 사업자 수를 제한해 효율적 규모의 해자를 형성합니다. 다만 요금 승인과 수익성은 규제 당국 결정에 크게 좌우됩니다.",
    revenueGrowthTrend: "완만한 성장(요금 조정과 설비투자 기반의 점진적 확대) 가능성이 높은 구조입니다.",
    marginTrend: "stable",
    debtLevel: "moderate",
    financialSummary: "유틸리티 특성상 실적 변동성은 상대적으로 낮지만, 자본집약적 산업이라 부채와 이자비용 관리가 핵심입니다. 규제자산 기반 확대는 중장기 수익 기반을 지지할 수 있으나, 금리 환경이 밸류에이션과 배당 매력도에 직접 영향을 줍니다.",
    keyRisks: [
      "금리 상승에 따른 배당주 상대 매력 하락",
      "규제 당국의 요금 인상 승인 지연 또는 축소",
      "대규모 설비투자 집행 시 비용 초과 및 수익성 압박",
    ],
    bullCase: "규제자산 투자와 요금기반 확대가 계획대로 진행되면 이익과 배당이 안정적으로 증가할 수 있습니다. 금리 하향 국면에서는 유틸리티 배당주의 멀티플 재평가 가능성도 있습니다.",
    bearCase: "금리 고착과 규제 불확실성이 동시에 이어지면 밸류에이션 부담이 커지고 총수익률이 둔화될 수 있습니다. 투자비 회수 지연 시 배당 성장 속도도 낮아질 수 있습니다.",
    valuationComment: "현재 핵심 밸류에이션 수치가 부재해 절대 저평가/고평가 판단은 제한적입니다. 유틸리티 특성상 과거 평균 배당수익률 대비 상단 구간(수익률 확대 구간)에서 분할 접근하는 전략이 유효합니다.",
    recentDevelopments: [
      "청정에너지 전환 및 전력 인프라 현대화 관련 중장기 투자 기조 지속",
      "규제 환경과 금리 변화가 유틸리티 섹터 전반의 밸류에이션에 영향",
    ],
    overallRating: "관망",
    ratingReason: "배당 이력은 우수하지만 현재 가격·수익성·밸류에이션 데이터 공백으로 매수 확신을 내리기 어렵습니다.",
    targetBuyPrice: null,
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // ADM — 아처 대니얼스 미들랜드 (배당귀족주, 50년 연속)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    ticker: "ADM",
    analyzedAt: "2026-02-25 07:30 KST",
    businessSummary: "ADM은 곡물 조달·저장·운송·가공을 기반으로 식품원료, 사료원료, 바이오연료 원료까지 공급하는 글로벌 농산물 밸류체인 기업입니다. 원재료 트레이딩과 가공 마진, 물류 인프라를 결합한 사업 구조로 경기방어적 성격을 일부 보유하지만, 원자재 사이클과 가공 스프레드 변화에 따라 이익 변동성이 존재합니다.",
    coreProducts: [
      "유지종자·곡물 가공(대두/옥수수/밀)",
      "식품·사료 원재료 및 솔루션",
      "농산물 유통·물류 및 바이오연료 관련 원료",
    ],
    geographicPresence: "북미 중심의 글로벌 운영 구조로, 남미·유럽·아시아까지 원료 조달 및 가공·판매 네트워크를 보유",
    dividendStreakYears: 50,
    dividendCAGR5yr: null,
    dividendCAGR10yr: null,
    recentDividendGrowth: "최근 3년 배당 CAGR 17%로 배당 성장 속도는 높았으나, 현재 배당성향 상승으로 지속성 점검이 필요합니다.",
    dividendSafety: "watch",
    dividendSafetyReason: "배당성향 91.5%와 낮은 ROE(4.7%) 조합은 이익 변동 구간에서 배당 여력을 압박할 수 있습니다.",
    moatTypes: [
      "cost_advantage",
      "efficient_scale",
    ],
    moatStrength: "narrow",
    moatNarrative: "ADM의 해자는 대규모 원물 조달·저장·운송·가공 인프라에서 나오는 비용 우위와 규모의 경제에 가깝습니다. 글로벌 공급망 운영 역량은 신규 진입장벽으로 작동하지만, 제품 차별화가 강한 산업은 아니어서 초과수익이 구조적으로 오래 유지되기는 어렵습니다.",
    revenueGrowthTrend: "중장기적으로 완만한 성장이나, 최근에는 농산물 가격·스프레드 영향으로 성장 탄력이 둔화된 흐름입니다.",
    marginTrend: "contracting",
    debtLevel: "moderate",
    financialSummary: "PBR 1.44와 Forward PER 14.6은 절대적으로 과열 수준은 아니지만, Trailing PER 30.5와 ROE 4.7%는 최근 수익성 저하를 시사합니다. D/E 42.4로 레버리지는 관리 가능한 범주이나, 배당성향이 높아 이익 회복 전까지 자본배분 유연성이 제한될 수 있습니다.",
    keyRisks: [
      "농산물 가격 및 가공 스프레드 변동으로 인한 이익 변동성",
      "높은 배당성향 지속 시 배당 성장 둔화 또는 재무 유연성 저하",
      "원재료·물류·규제(바이오연료/무역정책) 변화에 따른 마진 압박",
    ],
    bullCase: "가공 마진 정상화와 운영 효율화가 동반되면 Forward PER 기준 밸류에이션 매력이 부각될 수 있습니다. 배당 귀족 프리미엄과 이익 회복이 맞물리면 총주주수익률 개선 여지가 있습니다.",
    bearCase: "수익성 회복이 지연되면 높은 배당성향이 부담으로 전환되어 배당 증가율 둔화 가능성이 커집니다. 현재 주가가 52주 고점권에 가까워 밸류에이션 리레이팅보다 디레이팅 위험이 더 클 수 있습니다.",
    valuationComment: "현재 주가는 52주 위치 92.9%의 고점권이며 애널리스트 목표가($60.73) 대비 보수적 접근이 타당합니다. 이익 가시성과 배당 커버리지 개선이 확인되기 전에는 분할 접근이 유리하며, 매수는 $56~$60 구간에서 위험보상비가 개선된다고 판단합니다.",
    recentDevelopments: [
      "수익성 둔화 구간에서 Trailing 지표와 Forward 지표 괴리가 확대되어 실적 정상화 기대와 현재 체력 간 간극이 존재",
      "애널리스트 컨센서스가 hold로 형성되고 목표가가 현 주가 대비 낮아 단기 업사이드는 제한적",
    ],
    overallRating: "관망",
    ratingReason: "배당 이력은 우수하지만 고점권 주가와 높은 배당성향을 감안하면 현재는 보수적 대기 구간입니다.",
    targetBuyPrice: 58,
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // PNR — 펜테어 (배당귀족주, 48년 연속)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    ticker: "PNR",
    analyzedAt: "2026-02-25 08:00 KST",
    businessSummary: "펜테어(PNR)는 수처리, 유체 제어, 수영장·상업용 워터 솔루션을 제공하는 산업재 기업입니다. 주거·상업·산업 고객을 대상으로 물의 이동, 여과, 품질 관리에 필요한 장비와 시스템을 판매하며 교체 수요와 유지보수 수요가 반복적으로 발생하는 구조를 갖고 있습니다.",
    coreProducts: [
      "수처리·여과 시스템",
      "펌프·밸브·유체 제어 장비",
      "수영장 장비 및 워터 솔루션",
    ],
    geographicPresence: "북미 중심 매출 구조이며 유럽·기타 지역으로 분산된 글로벌 판매망을 보유",
    dividendStreakYears: 48,
    dividendCAGR5yr: null,
    dividendCAGR10yr: null,
    recentDividendGrowth: "최근 3년 배당 CAGR 14.8%로 배당 성장 속도는 견조한 편입니다.",
    dividendSafety: "strong",
    dividendSafetyReason: "배당성향 25.4%로 여유가 크고 장기 연속 증배 이력이 배당 지속 가능성을 뒷받침합니다.",
    moatTypes: [
      "intangible_assets",
      "switching_costs",
      "efficient_scale",
    ],
    moatStrength: "narrow",
    moatNarrative: "펜테어는 산업·상업용 물 관리 영역에서 브랜드 신뢰와 유통·서비스 네트워크를 기반으로 고객 락인을 형성합니다. 설치 후 교체·보수 중심의 반복 수요가 발생해 수익 안정성이 상대적으로 높습니다. 다만 완전한 독점 구조보다는 경쟁사와 기술·가격 경쟁이 공존해 해자는 좁은 편으로 판단됩니다.",
    revenueGrowthTrend: "경기와 최종시장 수요에 따라 변동은 있으나 중장기적으로는 물 인프라·수처리 수요에 연동된 완만한 성장 추세입니다.",
    marginTrend: "stable",
    debtLevel: "moderate",
    financialSummary: "ROE 17.5%로 수익성은 양호하며 자본 효율도 준수합니다. D/E 42.4는 과도하지 않은 수준으로 해석되나 금리 환경에 따라 이자비용 부담은 점검이 필요합니다. 저배당성향과 증배 여력 조합으로 재무 유연성은 비교적 탄탄한 편입니다.",
    keyRisks: [
      "산업 경기 둔화 시 설비투자 및 교체 수요 약화",
      "원자재·물류·인건비 상승에 따른 마진 압박",
      "금리·환율 변동 및 글로벌 수요 둔화로 실적 변동성 확대",
    ],
    bullCase: "물 인프라 투자와 수처리 규제 강화가 맞물리면 매출 믹스 개선과 이익률 방어가 가능해 밸류에이션 프리미엄이 유지될 수 있습니다. 낮은 배당성향을 바탕으로 증배와 자사주 매입이 병행되면 주주환원 매력도 높아질 수 있습니다.",
    bearCase: "경기 둔화가 길어지면 산업·주거 수요가 동시에 약해져 실적과 멀티플이 함께 압축될 수 있습니다. 현재 주가가 평균 배당수익률 대비 높은 구간이라 실적 미스 시 조정 폭이 커질 수 있습니다.",
    valuationComment: "현재 배당수익률(1.06%)이 5년 평균(1.25%)보다 낮아 배당 기준으로는 다소 비싼 구간입니다. Forward PER 17.7은 과열은 아니지만 Trailing PER 26.2와 52주 위치 72.2%를 감안하면 추격매수보다 조정 시 분할 접근이 유리합니다.",
    recentDevelopments: [
      "애널리스트 컨센서스는 buy이며 목표가 $113.68로 약 10.4% 상승여력을 제시",
      "48년 연속 배당 증가 기록을 유지하며 배당 성장주 성격을 지속",
    ],
    overallRating: "관망",
    ratingReason: "질적 체력은 우수하지만 현재 배당수익률이 과거 평균 대비 낮아 가격 메리트가 크지 않습니다.",
    targetBuyPrice: 86.4,
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // BEN — 프랭클린 리소시스 (배당귀족주, 44년 연속)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    ticker: "BEN",
    analyzedAt: "2026-02-25 08:30 KST",
    businessSummary: "프랭클린 리소시스(BEN)는 Franklin Templeton 브랜드로 전통 자산운용, ETF, 대체투자, 자산관리 솔루션을 제공하는 글로벌 금융회사입니다. 개인·기관 고객의 주식, 채권, 멀티에셋, 사모·대체전략 운용에서 발생하는 수수료가 핵심 수익원이며, 시장수익률과 순자금 유입/유출에 실적이 크게 연동됩니다.",
    coreProducts: [
      "뮤추얼펀드·ETF 운용",
      "기관투자자 대상 투자 솔루션",
      "대체투자·자산관리 플랫폼",
    ],
    geographicPresence: "미국 중심 수익 구조이나 유럽·아시아·신흥국 등 글로벌 고객 기반을 보유한 분산형 매출 구조",
    dividendStreakYears: 44,
    dividendCAGR5yr: null,
    dividendCAGR10yr: null,
    recentDividendGrowth: "최근 3년 배당 CAGR 3.3%로 저성장이나, 44년 연속 증배 기조는 유지 중입니다.",
    dividendSafety: "watch",
    dividendSafetyReason: "배당성향 119.4%와 ROE 4.5% 조합은 이익 대비 배당 여력이 약해 배당 안전성 점검이 필요합니다.",
    moatTypes: [
      "brand",
      "efficient_scale",
      "switching_costs",
      "intangible_assets",
    ],
    moatStrength: "narrow",
    moatNarrative: "Franklin Templeton 브랜드와 장기 운용 트랙레코드는 기관·리테일 유치에 유리한 무형자산입니다. 다만 자산운용 산업은 상품 차별화가 제한적이고 수수료 경쟁이 강해 초과수익 기반의 해자는 넓지 않습니다. 규모의 경제와 기존 고객 유지 효과는 있으나 순유입 전환 여부가 해자 강도를 좌우합니다.",
    revenueGrowthTrend: "시장환경과 자금흐름 영향으로 변동성이 크며 구조적 고성장보다는 정체·완만 회복 구간에 가깝습니다.",
    marginTrend: "contracting",
    debtLevel: "moderate",
    financialSummary: "Forward PER 9.3으로 이익 정상화 기대는 일부 반영됐지만, Trailing PER 25.1과 낮은 ROE는 최근 수익성 부담을 시사합니다. PBR 1.16은 극단적 고평가 구간은 아니나, 배당성향이 100%를 상회해 배당의 질은 보수적으로 봐야 합니다. 재무구조는 과도한 레버리지는 아니지만 이익 체력 회복이 선행되어야 밸류에이션 매력이 강화됩니다.",
    keyRisks: [
      "순자금 유출 지속 시 운용보수 기반 이익 둔화",
      "시장 하락 시 AUM 감소로 실적과 배당 커버리지 동반 악화",
      "수수료 인하 경쟁 및 패시브/저비용 상품 확대로 구조적 마진 압박",
    ],
    bullCase: "금리 안정과 위험자산 회복으로 AUM이 증가하고 순유입이 개선되면 Forward 이익 기준 저평가 매력이 부각될 수 있습니다. 이익 정상화가 확인되면 배당지속성과 밸류에이션 재평가가 동시에 가능합니다.",
    bearCase: "자금 유출과 수수료 압박이 장기화되면 배당성향이 높은 상태에서 배당 성장 둔화 또는 정책 재검토 압력이 커질 수 있습니다. 현재 주가가 52주 상단 근처라 실적 미스 시 하방 변동성이 확대될 수 있습니다.",
    valuationComment: "DDM 적정가(35.68달러) 대비 저평가 여지는 보이나, 애널리스트 목표가와의 괴리(0.9%)가 작고 주가가 52주 상단(90.1%)에 있어 단기 매력은 제한적입니다. 배당 안정성 리스크를 감안하면 분할 접근 시 더 높은 배당수익률이 확보되는 가격대가 유리합니다.",
    recentDevelopments: [
      "주가가 52주 범위 상단에 근접하며 밸류에이션 부담이 확대된 상태",
      "시장 컨센서스는 hold로, 이익 회복 확인 전까지 중립적 시각이 우세",
    ],
    overallRating: "관망",
    ratingReason: "고배당 매력은 있으나 배당성향 과다와 낮은 수익성 대비 현재 주가 메리트가 크지 않아 추격매수보다 대기 전략이 적절합니다.",
    targetBuyPrice: 24,
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // APD — 에어 프로덕츠 앤 케미컬스 (배당귀족주, 43년 연속)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    ticker: "APD",
    analyzedAt: "2026-02-25 09:00 KST",
    businessSummary: "에어 프로덕츠(APD)는 산업용 가스(수소, 헬륨, 산소, 질소 등) 생산·공급과 대형 온사이트(On-site) 설비 운영을 핵심으로 하는 글로벌 산업가스 기업입니다. 반도체, 정유·화학, 금속, 헬스케어 등 다양한 산업에 필수 공정 가스를 장기 계약 기반으로 공급하며, 최근에는 청정수소·가스화 프로젝트 비중을 확대하고 있습니다.",
    coreProducts: [
      "산업용 대기·공정가스(산소·질소·아르곤·수소)",
      "온사이트 가스 공급 설비 및 파이프라인 공급",
      "LNG·가스화·청정수소 관련 엔지니어링/프로젝트",
    ],
    geographicPresence: "미주 중심에 유럽·아시아·중동을 포함한 글로벌 분포(대략 미주 과반, 나머지 유럽·아시아·기타 지역 분산)",
    dividendStreakYears: 43,
    dividendCAGR5yr: null,
    dividendCAGR10yr: null,
    recentDividendGrowth: "최근 3년 배당 CAGR 11.3%로 배당 성장률은 견조하나, 현재 배당성향이 높아 추가 고성장 지속성은 점검이 필요합니다.",
    dividendSafety: "watch",
    dividendSafetyReason: "43년 연속 증액 이력은 강점이지만 배당성향 101%와 높은 레버리지(D/E 102%)가 단기 안전마진을 낮춥니다.",
    moatTypes: [
      "switching_costs",
      "cost_advantage",
      "efficient_scale",
      "intangible_assets",
    ],
    moatStrength: "wide",
    moatNarrative: "산업가스는 고객 공정에 깊게 통합된 장기 계약 구조라 전환비용이 높고 이탈률이 낮은 편입니다. 대규모 생산·물류 인프라와 운영 노하우는 규모의 경제를 만들며, 규제·안전·엔지니어링 역량은 신규 진입장벽으로 작동합니다. 다만 대형 신사업의 실행 리스크는 해자 체감도를 일시적으로 약화시킬 수 있습니다.",
    revenueGrowthTrend: "중장기 수요는 견조하나 최근에는 프로젝트 타이밍과 경기 민감 업종 노출로 성장률 변동성이 확대된 모습입니다.",
    marginTrend: "stable",
    debtLevel: "high",
    financialSummary: "Forward PER 19.9배는 고품질 배당주 프리미엄이 반영된 구간으로 보입니다. 다만 배당성향 101%와 D/E 102%는 금리·투자집행 환경에서 재무 유연성을 제한할 수 있습니다. 현재 배당수익률 2.56%는 5년 평균 2.40%보다 높아 밸류 부담은 일부 완화된 상태입니다.",
    keyRisks: [
      "대형 청정수소/가스화 프로젝트의 지연·초과비용 리스크",
      "원자재·에너지 가격 및 산업생산 둔화에 따른 수요 변동",
      "높은 배당성향과 부채 부담이 동시에 지속될 경우 배당 성장률 둔화 가능성",
    ],
    bullCase: "장기 계약 기반 가격 전가와 신사업 정상 가동이 맞물리면 이익 성장과 현금흐름이 개선되며, 배당 성장 지속과 멀티플 재평가가 가능합니다. 목표가(302.36달러) 수준으로의 회복 여지도 열려 있습니다.",
    bearCase: "프로젝트 수익화가 지연되고 금융비용 부담이 길어지면 잉여현금흐름이 압박받아 배당 성장 속도가 둔화될 수 있습니다. 이 경우 밸류에이션 디레이팅으로 주가가 박스권 하단으로 재하락할 수 있습니다.",
    valuationComment: "현재 수익률이 5년 평균보다 높아 과열 구간은 아니지만, 배당성향·레버리지 부담을 감안하면 공격적 추격매수보다는 분할 접근이 유리합니다. 보수적으로는 250~265달러 구간에서 기대수익 대비 리스크 균형이 개선되는 구간으로 판단합니다.",
    recentDevelopments: [
      "청정수소·에너지 전환 관련 대형 프로젝트 중심의 투자 집행 및 수익화 가시성 점검 이슈 지속",
      "배당은 연속 증액 기조를 유지하나, 시장은 배당성향과 자본배분 효율을 함께 모니터링 중",
    ],
    overallRating: "관망",
    ratingReason: "질적 해자와 배당 이력은 우수하지만, 높은 배당성향과 부채 부담이 해소되기 전까지는 보수적 진입이 적절합니다.",
    targetBuyPrice: 260,
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // CTAS — 신타스 (배당귀족주, 41년 연속)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    ticker: "CTAS",
    analyzedAt: "2026-02-26 07:30 KST",
    businessSummary: "신타스(CTAS)는 기업 고객 대상 유니폼 렌탈·세탁, 시설 서비스, 안전/응급 솔루션을 제공하는 B2B 아웃소싱 기업입니다. 반복계약 기반의 서비스 모델로 경기 변동에도 비교적 견조한 현금흐름을 창출하며, 북미 전역의 촘촘한 운영망을 바탕으로 높은 고객 유지율을 유지합니다.",
    coreProducts: [
      "유니폼 렌탈 및 세탁 서비스",
      "시설 위생·소모품 관리 서비스",
      "응급처치·안전용품 및 교육 서비스",
    ],
    geographicPresence: "미국 중심(약 95%) · 캐나다/기타 북미(약 5%)",
    dividendStreakYears: 41,
    dividendCAGR5yr: null,
    dividendCAGR10yr: null,
    recentDividendGrowth: "최근 3년 배당 CAGR 26.6%로 배당 성장 속도는 매우 높은 편입니다.",
    dividendSafety: "strong",
    dividendSafetyReason: "배당성향 36.4%로 커버리지가 양호하고, 장기 연속 증액 이력이 배당 지속 가능성을 뒷받침합니다.",
    moatTypes: [
      "switching_costs",
      "cost_advantage",
      "efficient_scale",
      "brand",
    ],
    moatStrength: "narrow",
    moatNarrative: "신타스의 해자는 전국 단위 서비스 네트워크와 운영 효율에서 나옵니다. 기업 고객 입장에서는 공급업체 변경 시 운영 중단·품질 리스크가 있어 전환비용이 존재합니다. 다만 본질적으로 독점적 기술 기반은 약해 해자 강도는 좁지만 견고한 수준으로 평가됩니다.",
    revenueGrowthTrend: "반복 매출 기반으로 중저단위 성장세를 안정적으로 이어가는 흐름입니다.",
    marginTrend: "stable",
    debtLevel: "moderate",
    financialSummary: "ROE 43.4%로 자본 효율성은 매우 높지만, PBR 17.82와 높은 멀티플은 기대치 부담을 시사합니다. D/E 72.7은 과도하진 않으나 금리 환경에 따라 부담이 커질 수 있어 점검이 필요합니다. 전반적으로 현금창출력은 양호하나 밸류에이션 민감도가 큰 구간입니다.",
    keyRisks: [
      "고PER(43배) 구간에서의 밸류에이션 디레이팅 리스크",
      "경기 둔화 시 고객 고용/가동률 하락에 따른 서비스 수요 둔화",
      "임금·물류·세탁 관련 비용 상승이 마진에 미치는 압력",
    ],
    bullCase: "고객 유지율과 교차판매가 강화되며 이익 성장세가 지속되면 프리미엄 멀티플이 유지될 수 있습니다. 배당 성장률이 높은 상태를 이어가면 총주주수익률 개선 여지도 있습니다.",
    bearCase: "성장률 둔화 또는 비용 압력이 확대되면 현재 높은 밸류에이션이 빠르게 조정될 수 있습니다. 저배당 수익률 특성상 주가 조정 시 방어력이 제한될 수 있습니다.",
    valuationComment: "현재 배당수익률(0.91%)이 5년 평균(0.92%)과 유사해 배당 기준으로는 대체로 중립 구간입니다. 다만 PER/PBR이 높아 보수적으로는 조정 시 분할 접근이 유리하며, 멀티플 부담을 감안한 적정 매수 구간은 170달러 내외 이하가 상대적으로 안전마진이 있습니다.",
    recentDevelopments: [
      "애널리스트 목표가 216.68달러로 약 9.1% 상승여력이 제시되나 투자의견은 hold로 보수적입니다.",
      "52주 밴드상 위치 37.2%로 고점 대비 부담은 일부 완화됐지만 절대 밸류에이션은 여전히 높은 편입니다.",
    ],
    overallRating: "관망",
    ratingReason: "사업 품질과 배당 안전성은 우수하지만 현재 멀티플 부담 대비 배당 메리트가 낮아 신규 진입은 가격 조정 확인이 유리합니다.",
    targetBuyPrice: 170,
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // AMCR — 앰코 (배당귀족주, 41년 연속)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    ticker: "AMCR",
    analyzedAt: "2026-02-26 07:34 KST",
    businessSummary: "앰코(AMCR)는 식음료, 헬스케어, 생활소비재 고객을 대상으로 유연 포장재와 경질 용기 솔루션을 공급하는 글로벌 패키징 기업입니다. 원가 효율형 대량생산과 고객 맞춤형 포장 설계를 결합해 대형 브랜드사의 공급망에 깊게 들어가 있으며, 재활용·경량화 중심의 지속가능 포장 전환을 핵심 성장 축으로 추진하고 있습니다.",
    coreProducts: [
      "유연 포장재(필름·파우치)",
      "경질 플라스틱 용기",
      "지속가능/재활용 포장 솔루션",
    ],
    geographicPresence: "북미 약 40% · 유럽 약 30% · 아시아/남미/기타 약 30% 수준의 글로벌 분산 매출 구조",
    dividendStreakYears: 41,
    dividendCAGR5yr: null,
    dividendCAGR10yr: null,
    recentDividendGrowth: "장기 연속 증배 이력은 강하지만, 최근 구간은 이익 대비 배당 부담이 커져 배당 성장 여력은 둔화된 상태입니다.",
    dividendSafety: "watch",
    dividendSafetyReason: "배당성향 192.7%와 높은 레버리지(D/E 138.7) 조합으로 단기 배당 유지 여력은 있어도 안전마진은 얇습니다.",
    moatTypes: [
      "cost_advantage",
      "switching_costs",
      "efficient_scale",
    ],
    moatStrength: "narrow",
    moatNarrative: "대형 생산설비와 글로벌 조달 네트워크에서 오는 원가 경쟁력이 핵심 해자입니다. 또한 식음료·생활소비재 고객과의 품질 인증·공정 연동으로 전환비용이 발생해 거래가 쉽게 바뀌지 않습니다. 다만 산업 특성상 완전한 가격결정력은 제한적이어서 해자는 중간 수준에 가깝습니다.",
    revenueGrowthTrend: "성숙 산업 특성상 고성장보다는 가격 전가와 제품 믹스 개선 중심의 완만한 성장 흐름입니다.",
    marginTrend: "stable",
    debtLevel: "high",
    financialSummary: "Forward PER 11.1은 이익 정상화 기대를 반영하면 과도하게 비싸 보이지 않지만, Trailing PER 36.7과 배당성향 192.7%는 최근 수익성 왜곡 또는 이익 변동성을 시사합니다. ROE 7.7%는 방어적 업종 평균 대비 무난하나 높은 부채비율이 재무 유연성을 제약합니다. 배당주 관점에서는 현금흐름 커버리지 개선이 확인되기 전까지 보수적 접근이 필요합니다.",
    keyRisks: [
      "원재료(수지·에너지) 가격 변동에 따른 마진 압박",
      "높은 배당성향 지속 시 배당 성장 정체 또는 정책 조정 가능성",
      "높은 레버리지 환경에서 금리·차환 비용 상승 리스크",
    ],
    bullCase: "원가 안정과 가격 전가가 동시에 작동하면 이익 회복으로 Trailing/Forward 밸류에이션 괴리가 축소될 수 있습니다. 이 경우 5%대 배당수익률과 목표주가 상향 여력이 총수익률을 지지할 가능성이 큽니다.",
    bearCase: "수요 둔화나 원가 재상승으로 이익 회복이 지연되면 높은 배당성향이 부담으로 전환될 수 있습니다. 부채 부담이 지속되면 배당 매력만으로 밸류에이션 방어가 어려워질 수 있습니다.",
    valuationComment: "현재 주가는 52주 상단(75.3%)에 위치해 단기 매수 매력은 중립입니다. DDM 기준 고평가 신호가 강하고 재무 안전마진이 얇아, 분할 접근 시에는 더 낮은 구간에서의 안전마진 확보가 바람직합니다.",
    recentDevelopments: [
      "지속가능 포장(재활용·경량화) 비중 확대를 통한 고객 포트폴리오 고도화",
      "수익성 회복 기대로 애널리스트 컨센서스는 buy 유지(목표가 기준 9.6% 업사이드)",
    ],
    overallRating: "관망",
    ratingReason: "배당수익률은 매력적이지만 배당 커버리지와 레버리지 리스크가 커 현재 구간에서는 리스크 대비 보상이 충분하지 않습니다.",
    targetBuyPrice: 42,
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // BF.B — 브라운-포맨 Class B (배당귀족주, 40년 연속)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    ticker: "BF.B",
    analyzedAt: "2026-02-26 08:00 KST",
    businessSummary: "브라운-포맨은 Jack Daniel’s를 중심으로 위스키, 테킬라, 보드카 등 프리미엄 주류 브랜드를 보유·유통하는 글로벌 주류 기업입니다. 핵심은 강한 브랜드 자산을 기반으로 한 가격 결정력과 현금창출력이며, 경기 둔화 구간에서도 상대적으로 방어적인 수요 특성을 보입니다.",
    coreProducts: [
      "Jack Daniel’s",
      "Woodford Reserve",
      "Herradura/El Jimador",
    ],
    geographicPresence: "미국 비중이 가장 크고, 유럽·신흥시장을 포함한 글로벌 판매 구조",
    dividendStreakYears: 40,
    dividendCAGR5yr: null,
    dividendCAGR10yr: null,
    recentDividendGrowth: "연속 증배 기조는 유지되고 있으나 최근 증액 폭은 과거 대비 완만한 편입니다.",
    dividendSafety: "moderate",
    dividendSafetyReason: "브랜드 기반 현금흐름은 견조하지만 수요 둔화·환율·원가 변동이 배당여력의 변동성을 키울 수 있습니다.",
    moatTypes: [
      "brand",
      "intangible_assets",
      "efficient_scale",
    ],
    moatStrength: "wide",
    moatNarrative: "주류 산업에서 장기 축적된 브랜드 파워와 유통망은 강한 진입장벽으로 작동합니다. Jack Daniel’s 같은 대표 브랜드는 소비자 충성도와 프리미엄 포지셔닝을 통해 가격 전가력을 제공하며, 글로벌 스케일은 마케팅·유통 효율을 높입니다.",
    revenueGrowthTrend: "중장기적으로 완만한 성장이나 최근에는 소비 둔화와 재고조정 영향으로 단기 변동성이 확대되는 흐름입니다.",
    marginTrend: "contracting",
    debtLevel: "moderate",
    financialSummary: "전반적으로 수익성 높은 브랜드 포트폴리오와 안정적 현금흐름이 강점입니다. 다만 최근 구간에서는 판관비·원가·환율 영향으로 마진 압력이 관찰되며, 성장률이 둔화될 때 밸류에이션 부담이 부각될 수 있습니다.",
    keyRisks: [
      "글로벌 소비 둔화 및 프리미엄 주류 수요 약화",
      "환율·원재료·유통비 상승에 따른 마진 압박",
      "규제·관세·주세 정책 변화로 인한 수익성 훼손",
    ],
    bullCase: "프리미엄 주류 수요가 회복되고 가격 전가가 원활하면 매출 성장과 마진 정상화가 동반될 수 있습니다. 이 경우 장기 증배 스토리와 함께 멀티플 재평가가 가능합니다.",
    bearCase: "소비 둔화가 장기화되고 유통 재고조정이 이어지면 매출 성장 정체와 이익률 하락이 지속될 수 있습니다. 고평가 구간에서 실적 미스가 발생하면 주가 조정 폭이 커질 수 있습니다.",
    valuationComment: "현재가·수익지표 공백으로 정량 밸류에이션 확정은 어렵습니다. 일반적으로는 역사적 밴드 대비 프리미엄이 축소되고 배당수익률이 장기 평균 상단에 근접할 때 분할매수 접근이 유리합니다.",
    recentDevelopments: [
      "일부 시장에서 소비 둔화와 유통 재고조정 영향으로 단기 실적 가시성이 낮아진 국면",
      "비용 효율화 및 포트폴리오 재정비를 통한 수익성 방어 시도",
    ],
    overallRating: "관망",
    ratingReason: "장기 경쟁력은 우수하지만 단기 실적 모멘텀과 밸류에이션 확인이 필요해 추격매수보다는 가격·지표 확인 후 접근이 바람직합니다.",
    targetBuyPrice: null,
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // TROW — 티 로웨 프라이스 그룹 (배당귀족주, 39년 연속)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    ticker: "TROW",
    analyzedAt: "2026-02-26 08:19 KST",
    businessSummary: "티 로웨 프라이스 그룹은 개인·기관 고객 대상의 액티브 자산운용, 퇴직연금, 자문 솔루션을 제공하는 글로벌 운용사입니다. 수익의 대부분은 운용자산(AUM) 기반 수수료에서 발생하며, 주식·채권·멀티에셋·타깃데이트 등 폭넓은 전략을 보유하고 있습니다. 시장 수익률과 자금 유출입이 실적에 직접적인 영향을 주는 구조입니다.",
    coreProducts: [
      "액티브 뮤추얼펀드 및 ETF",
      "퇴직연금/타깃데이트 솔루션",
      "기관·자문형 투자관리 서비스",
    ],
    geographicPresence: "미국 중심(대부분) · 국제 사업은 보완적 비중",
    dividendStreakYears: 39,
    dividendCAGR5yr: null,
    dividendCAGR10yr: null,
    recentDividendGrowth: "최근 3년 배당 CAGR이 1.9%로, 배당은 증가 중이나 속도는 둔화된 편입니다.",
    dividendSafety: "moderate",
    dividendSafetyReason: "배당성향 55%와 높은 ROE는 방어적이지만, 실적이 시장 및 AUM 변동에 민감해 경기·증시 국면에 따라 배당 여력이 흔들릴 수 있습니다.",
    moatTypes: [
      "brand",
      "switching_costs",
      "intangible_assets",
    ],
    moatStrength: "narrow",
    moatNarrative: "오랜 운용 트랙레코드와 브랜드 신뢰, 퇴직연금 채널 내 고객 관계가 진입장벽으로 작동합니다. 다만 자산운용 산업 전반의 수수료 인하 압력과 패시브 상품 확산으로 해자의 폭은 제한적입니다. 결과적으로 방어력은 있으나 구조적으로 매우 넓은 해자는 아닙니다.",
    revenueGrowthTrend: "중장기적으로 시장 방향성과 자금 유입에 연동되는 사이클형 성장 패턴입니다.",
    marginTrend: "stable",
    debtLevel: "moderate",
    financialSummary: "PER 10.3(선행 9.3)으로 밸류에이션은 역사 평균 대비 부담이 크지 않은 구간으로 보입니다. ROE 18.8%는 수익성 체력을 보여주며, 배당수익률 5.49%는 5년 평균(3.95%) 대비 매력적입니다. 다만 금융시장 변동성이 커질 경우 수수료 수익과 이익 가시성이 동시에 낮아질 수 있습니다.",
    keyRisks: [
      "패시브 ETF로의 자금 이동에 따른 수수료 압박",
      "증시 하락 시 AUM 감소로 인한 실적·배당 성장 둔화",
      "액티브 성과 부진 시 순유출 확대 및 밸류에이션 디레이팅",
    ],
    bullCase: "증시 회복과 순유입 개선이 동반되면 AUM 레버리지로 이익이 빠르게 반등할 수 있습니다. 현재 높은 배당수익률 구간에서 재평가가 붙으면 총주주수익률이 개선될 여지가 있습니다.",
    bearCase: "시장 약세와 순유출이 지속되면 수수료 매출이 압박받고 배당 성장률이 더 둔화될 수 있습니다. 구조적 수수료 인하가 이어지면 저PER 상태가 장기화될 위험이 있습니다.",
    valuationComment: "현재가는 DDM 적정가(101.96달러)와 애널리스트 목표가(102.08달러) 대비 소폭 할인으로 보이나, 성장 둔화 리스크를 감안하면 큰 폭의 저평가로 보긴 어렵습니다. 배당 투자 관점에서는 90달러 전후(안전마진+수익률 상향 구간)에서 분할 접근이 더 유리합니다.",
    recentDevelopments: [
      "배당수익률이 5년 평균 대비 높은 수준으로 올라 밸류 매력이 부각됨",
      "시장 변동성 및 자금 흐름 영향으로 애널리스트 컨센서스는 hold 유지",
    ],
    overallRating: "관망",
    ratingReason: "고배당과 낮은 PER은 매력적이지만 배당 성장 둔화와 업황 민감도를 감안하면 더 낮은 가격대에서의 진입이 유리합니다.",
    targetBuyPrice: 90,
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // WST — 웨스트 파마슈티컬 서비시즈 (배당귀족주, 32년 연속)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    ticker: "WST",
    analyzedAt: "2026-02-26 08:20 KST",
    businessSummary: "웨스트 파마슈티컬 서비시즈는 주사제 포장·약물전달에 쓰이는 고부가가치 부품(스톱퍼, 씰, 프리필드 주사기/카트리지용 시스템)과 관련 제조 솔루션을 제공하는 헬스케어 소재·부품 기업입니다. 글로벌 제약·바이오 고객의 규제 대응, 품질 안정성, 생산 효율을 지원하는 B2B 파트너로서 반복 매출 성격이 강한 사업 구조를 보유하고 있습니다.",
    coreProducts: [
      "엘라스토머 클로저(스톱퍼·씰)",
      "고부가 약물전달 시스템(프리필드 주사기/카트리지 부품)",
      "의약품 포장·제조 관련 기술 서비스",
    ],
    geographicPresence: "북미 중심의 글로벌 매출 구조로 유럽·아시아 비중도 의미 있게 분포",
    dividendStreakYears: 32,
    dividendCAGR5yr: null,
    dividendCAGR10yr: null,
    recentDividendGrowth: "최근 3년 배당 CAGR 13.6%로 배당 성장률은 높은 편이며, 32년 연속 증액 기조를 유지 중입니다.",
    dividendSafety: "strong",
    dividendSafetyReason: "배당성향 12.5%로 매우 낮아 이익 변동이 있어도 배당 여력이 큰 편입니다.",
    moatTypes: [
      "switching_costs",
      "intangible_assets",
      "efficient_scale",
    ],
    moatStrength: "wide",
    moatNarrative: "의약품 1차 포장·전달 부품은 규제 적합성, 품질 검증, 고객 공정 밸리데이션이 핵심이라 전환비용이 높습니다. 장기간 축적된 소재·공정 노하우와 품질 트랙레코드는 무형자산 성격의 진입장벽으로 작동합니다. 글로벌 제약사 대상의 신뢰 기반 공급망 지위가 규모의 경제와 결합해 경쟁 우위를 강화합니다.",
    revenueGrowthTrend: "중장기적으로 구조적 성장 산업에 노출되어 있으나 단기적으로는 수요 정상화 구간에서 변동성이 존재합니다.",
    marginTrend: "stable",
    debtLevel: "low",
    financialSummary: "ROE 16.9%로 수익성은 양호하고, D/E 10.3으로 레버리지 부담은 낮은 편입니다. 배당수익률은 0.36%로 낮지만 배당성향이 매우 낮아 증액 지속 가능성은 높습니다. 다만 PER 36.5(선행 28.0)로 멀티플 부담이 남아 있어 실적 가시성이 밸류에이션 정당화의 핵심입니다.",
    keyRisks: [
      "고밸류에이션 구간에서 실적 미스 시 멀티플 디레이팅 리스크",
      "대형 제약 고객 주문 조정 및 재고 사이클 변동",
      "원재료·품질 이슈 또는 규제 변화에 따른 마진 압박",
    ],
    bullCase: "고부가 제형·바이오의약품 확대로 프리미엄 제품 믹스가 개선되면 이익 성장 재가속과 함께 현재 밸류에이션 프리미엄이 유지될 수 있습니다. 애널리스트 목표가 기준 업사이드가 현실화되면 주가 리레이팅 여지도 있습니다.",
    bearCase: "수요 정상화가 길어지거나 고객 재고 조정이 심화되면 매출·이익 모멘텀이 둔화되어 고PER 부담이 부각될 수 있습니다. 이 경우 배당 성장 스토리에도 불구하고 주가 변동성이 확대될 가능성이 큽니다.",
    valuationComment: "질적 우수 기업이지만 현재는 저배당·고멀티플 조합이라 절대 저평가 구간으로 보긴 어렵습니다. 분할 접근 관점에서 선행 PER 부담이 완화되는 가격대(대략 $220 내외 이하)에서 위험대비 기대수익이 개선됩니다.",
    recentDevelopments: [
      "배당 32년 연속 증액 기록 유지로 주주환원 신뢰도 강화",
      "애널리스트 컨센서스 strong_buy 및 목표가 $318.36로 상향 여력 반영",
    ],
    overallRating: "관심",
    ratingReason: "해자는 강하고 배당 안정성도 높지만, 현재 밸류에이션 부담으로 매수는 가격 규율이 필요합니다.",
    targetBuyPrice: 220,
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // ES — 에버소스 에너지 (배당귀족주, 25년 연속)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    ticker: "ES",
    analyzedAt: "2026-02-26 08:23 KST",
    businessSummary: "에버소스 에너지는 미국 북동부(매사추세츠·코네티컷·뉴햄프셔)를 중심으로 전기·가스·송배전 유틸리티를 운영하는 규제형 인프라 기업입니다. 수익의 대부분이 규제 자산기반(Rate Base) 확대와 허용수익률에 연동되는 구조라 현금흐름 가시성이 비교적 높은 편입니다.",
    coreProducts: [
      "전력 송배전 서비스",
      "천연가스 유통 서비스",
      "그리드 현대화·에너지 효율 프로그램",
    ],
    geographicPresence: "미국 100% (뉴잉글랜드 지역 중심)",
    dividendStreakYears: 25,
    dividendCAGR5yr: null,
    dividendCAGR10yr: null,
    recentDividendGrowth: "25년 연속 배당을 늘려왔고, 최근 3년 배당 CAGR은 5.7%로 완만한 증가 흐름입니다.",
    dividendSafety: "moderate",
    dividendSafetyReason: "배당성향 66%는 유틸리티 기준 관리 가능한 수준이지만, 높은 레버리지(D/E 184.9)가 안전마진을 제한합니다.",
    moatTypes: [
      "efficient_scale",
      "intangible_assets",
      "switching_costs",
    ],
    moatStrength: "narrow",
    moatNarrative: "지역 독점적 성격의 규제 유틸리티는 중복 투자가 비효율적이라 효율적 규모의 해자가 작동합니다. 인허가·규제 자산 기반은 신규 진입 장벽을 높이고 고객 이탈도 낮습니다. 다만 요금 인상 승인 지연이나 정치·규제 변수로 해자 수익성이 주기적으로 흔들릴 수 있습니다.",
    revenueGrowthTrend: "규제 자산 투자에 연동된 저성장·안정 성장 패턴입니다.",
    marginTrend: "stable",
    debtLevel: "high",
    financialSummary: "ROE 10.8%로 규제 유틸리티 치고는 무난한 수익성을 보입니다. PER 16.4(선행 14.5)로 밸류에이션 부담은 과도하지 않지만, 높은 부채비율이 금리 환경에 대한 민감도를 키웁니다. 배당수익률 4.19%는 5년 평균 대비 높은 수준이라 인컴 매력은 유효합니다.",
    keyRisks: [
      "규제당국의 요금 승인 지연 및 허용수익률 하향",
      "고금리 장기화에 따른 이자비용 부담 확대",
      "대규모 설비투자 지연·초과비용 발생 리스크",
    ],
    bullCase: "금리 안정과 규제 환경 개선이 동반되면 이익 가시성과 배당 매력이 재평가될 수 있습니다. 배당수익률이 역사 평균 대비 높은 구간이라 방어적 자금 유입 가능성도 있습니다.",
    bearCase: "규제 승인 지연과 자본비용 상승이 겹치면 이익 성장 둔화와 멀티플 압박이 동시에 발생할 수 있습니다. 부채 부담이 높은 상태에서 투자비 증가가 이어지면 주주환원 여력이 약해질 수 있습니다.",
    valuationComment: "현재가는 52주 밴드 상단(98.6%)이고 애널리스트 목표가 대비 상승여력이 0%라 단기 가격 메리트는 제한적입니다. 다만 배당수익률은 과거 평균보다 높아 장기 인컴 관점에선 분할 접근이 가능하며, 보다 안전한 진입은 4.5% 내외 수익률 구간(약 70달러 전후)에서 유리합니다.",
    recentDevelopments: [
      "대규모 그리드 현대화·송배전 투자 기조를 지속하며 규제 자산 기반 성장을 추진 중",
      "규제 승인 속도와 자본비용(금리) 변화가 실적 및 밸류에이션의 핵심 변수로 부각",
    ],
    overallRating: "관망",
    ratingReason: "배당의 질은 양호하지만 주가가 고점권이고 부채 부담이 커 신규 매수는 가격 조정 구간이 더 유리합니다.",
    targetBuyPrice: 70,
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // ALB — 앨버말 (배당귀족주, 31년 연속)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    ticker: "ALB",
    analyzedAt: "2026-02-26 08:21 KST",
    businessSummary: "앨버말(ALB)은 리튬을 중심으로 브롬 특수화학과 정유 촉매 소재를 공급하는 글로벌 원자재·소재 기업입니다. 전기차 배터리 밸류체인에서 리튬 채굴·가공 역량이 핵심이며, 원자재 사이클에 따라 실적 변동성이 큰 구조를 가집니다.",
    coreProducts: [
      "리튬 화합물(배터리급 탄산리튬·수산화리튬)",
      "브롬 및 난연 화학제품",
      "정유·석유화학 촉매 소재",
    ],
    geographicPresence: "미국 본사를 기반으로 칠레·호주·중국·유럽 등에서 생산/가공/판매하는 글로벌 사업 구조",
    dividendStreakYears: 31,
    dividendCAGR5yr: null,
    dividendCAGR10yr: null,
    recentDividendGrowth: "최근 3년 배당 CAGR 0.8%로 배당 증가 속도는 매우 둔화된 상태입니다.",
    dividendSafety: "watch",
    dividendSafetyReason: "배당성향 58%는 표면상 관리 가능하지만, 리튬 가격 사이클에 따른 이익 변동성이 커 배당 여력의 안정성이 낮습니다.",
    moatTypes: [
      "cost_advantage",
      "efficient_scale",
      "intangible_assets",
    ],
    moatStrength: "narrow",
    moatNarrative: "리튬 자원 접근성과 대규모 가공 설비에서 원가 우위와 규모의 경제를 보유하고 있습니다. 다만 원자재 산업 특성상 초과이익이 가격 사이클에 의해 약화되기 쉬워 해자는 구조적으로 넓지 않습니다. 인허가·운영 노하우는 진입장벽으로 작동하지만 경기 민감도를 완전히 상쇄하진 못합니다.",
    revenueGrowthTrend: "전방 수요(전기차)는 장기 성장이나, 단기적으로는 리튬 가격 조정 영향으로 매출 모멘텀이 약화된 구간입니다.",
    marginTrend: "contracting",
    debtLevel: "moderate",
    financialSummary: "PBR 3.16, Forward PER 22.5로 경기 민감 업종 대비 밸류 부담이 남아 있습니다. D/E 34%로 레버리지는 과도하지 않지만, 사이클 하강 구간에서는 현금흐름 방어력이 핵심 변수입니다. 배당 귀족주 이력은 긍정적이나 최근 배당 성장률은 낮아 보수적 해석이 필요합니다.",
    keyRisks: [
      "리튬 가격 하락 장기화에 따른 실적·현금흐름 악화",
      "대규모 증설/프로젝트의 CAPEX 집행 부담 및 수익성 지연",
      "자원 민족주의·환경 규제·인허가 지연 등 정책 리스크",
    ],
    bullCase: "리튬 가격이 재반등하고 배터리 수요가 회복되면 이익 레버리지가 크게 작동할 수 있습니다. 생산 효율 개선과 고부가 제품 비중 확대가 동반되면 밸류에이션 재평가 여지도 있습니다.",
    bearCase: "리튬 공급 과잉이 길어지면 수익성 회복이 지연되고 배당 성장 정체가 장기화될 수 있습니다. 높은 가격대에서의 매수는 사이클 하락 시 멀티플 디레이팅과 실적 하향이 동시에 발생할 위험이 큽니다.",
    valuationComment: "현재가는 52주 고점권(93.5%)이고 애널리스트 평균 목표가(188.74달러)보다 높아 단기 기대수익 대비 리스크가 큰 구간입니다. 배당 관점의 평균수익률 회귀(5년 평균 1.19%)를 적용하면 약 136달러 수준이 상대적으로 합리적인 매수 검토 구간입니다.",
    recentDevelopments: [
      "리튬 가격 조정 국면에서 업계 전반의 증설 속도 조절 및 자본지출 재점검이 진행 중",
      "시장 컨센서스는 장기 전기차 수요는 유지하되 단기 이익 가시성은 낮게 평가하는 분위기",
    ],
    overallRating: "관망",
    ratingReason: "배당 귀족주 이력은 강점이지만 현재 주가 위치와 원자재 사이클 리스크를 감안하면 신규 진입 매력은 제한적입니다.",
    targetBuyPrice: 136,
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // AOS — A O 스미스 (배당귀족주, 30년 연속)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    ticker: "AOS",
    analyzedAt: "2026-02-26 08:21 KST",
    businessSummary: "A. O. 스미스는 가정·상업용 온수기와 보일러, 수처리 제품을 설계·제조·판매하는 산업재 기업입니다. 북미 온수기 시장에서 강한 점유율과 유통망을 보유하고 있으며, 중국·인도 등에서는 정수·수처리 수요를 기반으로 사업을 확장하고 있습니다.",
    coreProducts: [
      "가정용·상업용 온수기",
      "보일러 및 난방 관련 장비",
      "정수기·필터 등 수처리 솔루션",
    ],
    geographicPresence: "북미 중심(약 70% 내외) · 중국/인도 포함 국제 시장(약 30% 내외)",
    dividendStreakYears: 30,
    dividendCAGR5yr: null,
    dividendCAGR10yr: null,
    recentDividendGrowth: "최근 3년 배당 CAGR이 15.1%로, 낮은 배당성향을 바탕으로 배당 성장 여력이 확인됩니다.",
    dividendSafety: "strong",
    dividendSafetyReason: "배당성향 35.8%와 높은 ROE(29.2%) 조합으로 배당 커버리지가 양호합니다.",
    moatTypes: [
      "brand",
      "cost_advantage",
      "switching_costs",
      "intangible_assets",
    ],
    moatStrength: "narrow",
    moatNarrative: "북미 온수기 시장에서 오랜 브랜드 신뢰와 유통·서비스 네트워크가 진입장벽으로 작동합니다. 설치·유지보수 생태계 특성상 교체 수요에서 기존 브랜드 선호가 유지되는 경향이 있어 완만한 스위칭 비용이 존재합니다. 다만 산업재 특성상 기술 격차가 절대적이지 않아 해자는 협소한 편입니다.",
    revenueGrowthTrend: "성숙한 북미 교체수요 기반의 안정 성장에 국제 수요 변동이 더해지는 완만한 성장 추세입니다.",
    marginTrend: "stable",
    debtLevel: "low",
    financialSummary: "재무구조는 D/E 11.0으로 레버리지 부담이 낮은 편이며, ROE가 높아 자본 효율성이 우수합니다. PER(TTM) 19.8, 선행 PER 17.5는 이익 정상화 기대를 일부 반영한 구간입니다. 전반적으로 배당 지속성과 재투자 여력이 균형 잡힌 재무 상태로 판단됩니다.",
    keyRisks: [
      "주택 경기 둔화 및 리모델링 수요 약화 시 북미 교체 수요 둔화",
      "원자재·물류비 상승 시 마진 압박",
      "중국 등 해외 시장 수요 회복 지연 및 경쟁 심화",
    ],
    bullCase: "북미 교체수요의 견조함과 수처리 사업 확장으로 매출과 이익이 완만하게 개선될 경우, 배당 성장과 멀티플 재평가가 동시에 가능할 수 있습니다. 선행 PER 기준 이익 가시성이 높아지면 주가의 상단이 열릴 수 있습니다.",
    bearCase: "주택·건설 경기 둔화가 길어지고 해외 수요 부진이 지속되면 매출 정체와 마진 압박이 동반될 수 있습니다. 이 경우 현재 밸류에이션 매력이 약해져 주가 조정 위험이 커질 수 있습니다.",
    valuationComment: "현재가는 52주 범위 상단권(75.8%)이고 애널리스트 기대수익률(4.7%)이 제한적이라 신규 진입 매력은 중립 수준입니다. 배당 성장성은 좋지만 배당수익률이 절대적으로 높지 않아, 보다 보수적인 매수는 주가 조정 구간에서 접근하는 것이 유리합니다.",
    recentDevelopments: [
      "선행 PER이 후행 PER 대비 낮아져 이익 회복 기대가 일부 반영되는 구간",
      "배당 증가 기조(30년 연속 배당 증가)와 낮은 배당성향 유지로 주주환원 지속성 부각",
    ],
    overallRating: "관망",
    ratingReason: "배당 안전성과 질은 우수하지만 현재 주가 메리트와 업사이드가 제한적이어서 대기 전략이 합리적입니다.",
    targetBuyPrice: 70,
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // EXPD — 익스페디터 인터내셔널 오브 워싱턴 (배당귀족주, 29년 연속)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    ticker: "EXPD",
    analyzedAt: "2026-02-26 08:21 KST",
    businessSummary: "EXPD는 해상·항공 포워딩, 통관, 내륙운송을 통합 제공하는 자산경량형 글로벌 물류 중개 기업입니다. 자체 운송자산보다 네트워크·운영역량·IT 시스템을 기반으로 화주와 운송사를 연결해 수수료 기반 이익을 창출합니다. 경기와 교역량에 민감하지만, 강한 현금창출력과 보수적 재무 운영이 특징입니다.",
    coreProducts: [
      "항공·해상 국제 포워딩",
      "통관 및 무역 규정 대응 서비스",
      "내륙운송·창고·공급망 관리",
    ],
    geographicPresence: "미주 중심에 아시아·유럽을 포함한 글로벌 네트워크 기반 매출 구조",
    dividendStreakYears: 29,
    dividendCAGR5yr: null,
    dividendCAGR10yr: null,
    recentDividendGrowth: "최근 3년 배당 CAGR 4.7%로 배당은 완만하지만 꾸준한 증가 흐름입니다.",
    dividendSafety: "strong",
    dividendSafetyReason: "배당성향 24.4%로 여력이 크고, ROE 35.4% 및 현금창출력 대비 배당 부담이 낮습니다.",
    moatTypes: [
      "switching_costs",
      "network_effect",
      "intangible_assets",
      "cost_advantage",
    ],
    moatStrength: "narrow",
    moatNarrative: "글로벌 지점망과 화주·운송사 관계 데이터가 누적되며 운영 효율과 서비스 신뢰도가 경쟁력으로 작동합니다. 대형 화주의 경우 통관·운송 프로세스 전환 비용이 존재해 고객 이탈이 제한됩니다. 다만 산업 자체의 가격 경쟁과 경기 민감도로 해자는 넓기보다 견고한 협소 해자에 가깝습니다.",
    revenueGrowthTrend: "팬데믹 특수 이후 정상화 구간에서 변동성이 크고, 중장기적으로는 교역량과 점유율 확대로 완만한 성장 추세입니다.",
    marginTrend: "contracting",
    debtLevel: "low",
    financialSummary: "PBR 8.06으로 자본 대비 시장 프리미엄이 높지만, 높은 ROE가 이를 일부 정당화합니다. D/E 24.2로 레버리지는 통제 가능한 수준이며 재무 유연성이 양호합니다. 배당성향이 낮아 경기 둔화 구간에서도 배당 유지·증액 여력이 상대적으로 큽니다.",
    keyRisks: [
      "글로벌 교역 둔화 및 운임 하락에 따른 이익 변동성",
      "물류 중개업 내 가격 경쟁 심화",
      "강달러·지정학 리스크로 인한 국제 물동량 불확실성",
    ],
    bullCase: "글로벌 제조·유통 재고 정상화 이후 물동량이 회복되고, 고부가 통관·공급망 서비스 비중이 확대되면 수익성 반등이 가능합니다. 낮은 배당성향을 바탕으로 배당 성장의 지속 가능성도 높습니다.",
    bearCase: "교역 둔화가 장기화되면 운임·물동량 동반 약세로 이익과 멀티플이 동시에 압박받을 수 있습니다. 현재 높은 PBR 구간에서는 실적 미스 시 주가 조정 폭이 커질 위험이 있습니다.",
    valuationComment: "현재 PER 23.1(Forward 22.0), PBR 8.06은 경기민감 물류업 대비 프리미엄 구간으로 보수적으로는 비싸거나 적정 상단에 가깝습니다. 배당수익률도 1.11%로 5년 평균 1.14% 대비 큰 할인 신호가 약해, 의미 있는 안전마진은 주가 조정 시에 더 확보됩니다.",
    recentDevelopments: [
      "팬데믹 이후 운임 정상화 영향으로 실적 변동성이 확대된 구간",
      "애널리스트 컨센서스가 hold이고 목표가가 현재가 대비 보수적 수준",
    ],
    overallRating: "관망",
    ratingReason: "배당 안전성은 우수하지만 현재 밸류에이션 프리미엄과 낮은 배당 매력도를 감안하면 신규 매수는 가격 메리트 확인이 우선입니다.",
    targetBuyPrice: 120,
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // SJM — J.M.스머커 (배당귀족주, 28년 연속)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    ticker: "SJM",
    analyzedAt: "2026-02-26 08:22 KST",
    businessSummary: "J.M. 스머커는 미국 중심의 포장식품 기업으로 커피, 반려동물 식품, 스낵, 과일 스프레드 등 일상 소비재를 판매합니다. Folgers, Dunkin'(소매 커피), Milk-Bone, Meow Mix, Smucker's, Jif 같은 강한 브랜드 포트폴리오를 기반으로 경기방어적 수요를 확보해 왔습니다. 최근에는 스낵 포트폴리오 확장과 비용 효율화로 성장과 수익성 방어를 동시에 추진 중입니다.",
    coreProducts: [
      "소매 커피(Folgers, Dunkin')",
      "반려동물 식품·간식(Meow Mix, Milk-Bone 등)",
      "스프레드·땅콩버터·스낵(Smucker's, Jif, Hostess 계열)",
    ],
    geographicPresence: "미국 비중이 매우 높은 내수형 구조(미국 중심, 국제 비중 제한적)",
    dividendStreakYears: 28,
    dividendCAGR5yr: null,
    dividendCAGR10yr: null,
    recentDividendGrowth: "최근 3년 배당 CAGR 10.7%로 배당 성장 속도는 양호하나, 높은 배당성향으로 추가 가속 여력은 제한적입니다.",
    dividendSafety: "moderate",
    dividendSafetyReason: "28년 연속 증액 이력은 강점이지만 배당성향 86.1%와 높은 레버리지(D/E 131.4)로 안전마진은 크지 않습니다.",
    moatTypes: [
      "brand",
      "intangible_assets",
      "cost_advantage",
    ],
    moatStrength: "narrow",
    moatNarrative: "스머커의 핵심 해자는 오랜 기간 축적된 브랜드 신뢰와 유통 채널 내 진열/점유 경쟁력입니다. 식품 대기업 특유의 규모 기반 조달·물류 효율이 원가 방어에 기여합니다. 다만 카테고리 경쟁이 치열하고 소비 트렌드 변화가 빨라 해자 폭은 넓기보다는 중간 수준으로 판단됩니다.",
    revenueGrowthTrend: "인수 효과를 제외한 유기적 매출 성장은 전반적으로 완만하며 카테고리별 온도차가 큽니다.",
    marginTrend: "stable",
    debtLevel: "high",
    financialSummary: "Forward PER 10.8배로 밸류에이션 부담은 크지 않은 편이며 배당수익률도 5년 평균 대비 높은 구간입니다. 다만 높은 부채와 높은 배당성향이 재무 유연성을 낮춰 금리·원가 변동기에 방어력이 약해질 수 있습니다. 현금흐름 안정성은 방어적 섹터 특성상 유지되지만, 우선 과제는 레버리지 점진적 축소입니다.",
    keyRisks: [
      "높은 부채비율에 따른 이자비용 부담 및 재무 유연성 저하",
      "원재료·물류·프로모션 비용 상승 시 마진 압박",
      "브랜드 경쟁 심화 및 소비 트렌드 변화로 인한 점유율 하락 가능성",
    ],
    bullCase: "브랜드 파워와 가격 전가력이 유지되고 비용 절감 및 포트폴리오 최적화가 성과를 내면 이익 안정성과 배당 매력이 동시에 부각될 수 있습니다. 평균 배당수익률로의 회귀가 발생하면 주가 재평가 여지도 있습니다.",
    bearCase: "스낵·반려동물·커피 일부 카테고리에서 성장 둔화가 지속되고 원가 부담이 겹치면 실적 모멘텀이 약해질 수 있습니다. 높은 배당성향과 부채가 맞물릴 경우 배당 성장률 둔화 가능성이 커집니다.",
    valuationComment: "현재 배당수익률(4.02%)이 5년 평균(3.29%)보다 높아 역사적 기준으로는 할인 구간에 가깝습니다. 다만 레버리지 부담을 감안하면 공격적 추격 매수보다 분할 접근이 적절하며, 100~106달러 구간은 방어적 배당 관점에서 매수 검토 구간으로 판단됩니다.",
    recentDevelopments: [
      "포트폴리오 확장(스낵 카테고리) 이후 통합·수익성 정상화가 핵심 과제로 부각",
      "시장에서는 높은 배당수익률과 저밸류에이션 대비 부채 부담의 균형을 주요 체크포인트로 인식",
    ],
    overallRating: "관심",
    ratingReason: "배당 매력과 저평가 신호는 긍정적이지만, 높은 배당성향과 부채 수준을 확인하며 보수적으로 접근할 필요가 있습니다.",
    targetBuyPrice: 102,
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // CHRW — CH 로빈슨 월드와이드 (배당귀족주, 28년 연속)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    ticker: "CHRW",
    analyzedAt: "2026-02-26 08:22 KST",
    businessSummary: "CH 로빈슨 월드와이드는 글로벌 제3자 물류(3PL) 기업으로, 트럭·해상·항공 운송을 중개하고 공급망 운영을 최적화하는 서비스를 제공합니다. 자체 운송자산보다 광범위한 운송 파트너 네트워크와 데이터·플랫폼 역량을 활용해 화주와 운송사를 연결하는 자산경량(asset-light) 모델이 핵심입니다. 경기와 운임 사이클의 영향을 크게 받지만, 규모와 네트워크를 바탕으로 장기 고객 관계를 유지해 왔습니다.",
    coreProducts: [
      "북미 육상운송 중개(Truckload/LTL)",
      "글로벌 포워딩(해상·항공)",
      "관리형 물류 및 공급망 최적화 서비스",
    ],
    geographicPresence: "북미 중심 매출 구조이며 국제 포워딩 사업을 통해 유럽·아시아 등 글로벌 네트워크를 운영",
    dividendStreakYears: 28,
    dividendCAGR5yr: null,
    dividendCAGR10yr: null,
    recentDividendGrowth: "최근 3년 배당 CAGR 3.3%로 저성장이나, 28년 연속 배당 증가를 유지 중입니다.",
    dividendSafety: "moderate",
    dividendSafetyReason: "배당성향 51.5%와 장기 배당 이력은 안정적이지만, 실적이 운임·물동량 사이클에 민감해 방어력이 완전한 strong 단계는 아닙니다.",
    moatTypes: [
      "switching_costs",
      "network_effect",
      "cost_advantage",
      "efficient_scale",
    ],
    moatStrength: "narrow",
    moatNarrative: "대형 화주-운송사 양면 네트워크에서 발생하는 매칭 효율과 데이터 축적은 진입장벽으로 작용합니다. 고객 입장에서는 운영 프로세스 통합과 서비스 신뢰성 때문에 거래 전환 비용이 존재합니다. 다만 물류 중개 산업 특성상 가격 경쟁이 치열해 해자는 넓기보다 좁은(narrow) 수준으로 보는 것이 타당합니다.",
    revenueGrowthTrend: "운임 사이클 영향으로 변동성이 크며, 구조적 고성장보다는 경기민감형 회복 패턴에 가깝습니다.",
    marginTrend: "contracting",
    debtLevel: "high",
    financialSummary: "ROE 32.9%는 높지만 PBR 11.29와 결합해 보면 자본효율 기대가 주가에 상당 부분 반영된 상태입니다. D/E 75.6은 레버리지 부담이 낮지 않은 편이며, 사이클 하강 시 이익 변동성이 커질 수 있습니다. 배당성향은 과도하지 않지만 현재 배당수익률이 5년 평균 대비 크게 낮아 밸류에이션 부담이 두드러집니다.",
    keyRisks: [
      "운임 하락·물동량 둔화에 따른 이익 변동성 확대",
      "경쟁 심화로 인한 마진 압박",
      "높은 밸류에이션(고PER·고PBR) 정상화 리스크",
    ],
    bullCase: "운임 사이클 회복과 물동량 정상화가 동반되면 이익 레버리지로 실적 개선 폭이 커질 수 있습니다. 디지털 플랫폼 효율화와 비용 통제가 이어지면 밸류에이션 프리미엄이 유지될 여지도 있습니다.",
    bearCase: "운송 수요 약세가 길어지면 중개 스프레드와 마진이 추가로 압박받아 실적이 기대에 미달할 수 있습니다. 현재 높은 멀티플이 디레이팅되면 배당 증가에도 총수익률이 부진할 위험이 큽니다.",
    valuationComment: "현재 배당수익률 1.42%는 5년 평균 2.33% 대비 낮아 주가가 역사적 배당 기준으로 고평가 구간에 가깝습니다. DDM($68.11)과의 괴리도 커 보수적으로는 분할 접근이 필요하며, 최소한 배당수익률이 장기 평균에 근접하는 구간이 더 매력적입니다.",
    recentDevelopments: [
      "애널리스트 컨센서스는 buy이며 목표가 $193.52로 약 10% 상승여력을 제시",
      "주가가 52주 범위 상단(76.9%) 부근에 위치해 밸류에이션 부담이 부각",
    ],
    overallRating: "관망",
    ratingReason: "배당 이력은 우수하지만 현재 수익률·멀티플 기준 가격 메리트가 낮아 신규 진입은 기다리는 전략이 유리합니다.",
    targetBuyPrice: 110,
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // ESS — 에섹스 프로퍼티 트러스트 (배당귀족주, 31년 연속)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    ticker: "ESS",
    analyzedAt: "2026-02-26 08:23 KST",
    businessSummary: "에섹스 프로퍼티 트러스트(ESS)는 미국 서부 해안의 고소득·고진입장벽 지역(주로 캘리포니아/시애틀권)에 집중한 아파트 리츠입니다. 다가구 주거자산을 개발·매입·운영하며 임대수익과 자산가치 상승을 기반으로 현금흐름을 창출합니다. 장기적으로는 지역 수급 불균형과 임대료 재산정력을 통해 배당 성장을 추구합니다.",
    coreProducts: [
      "멀티패밀리(아파트) 임대 운영",
      "주거 자산 개발·재개발",
      "부동산 포트폴리오 자산관리/매각",
    ],
    geographicPresence: "미국 100% (서부 해안 대도시권 중심)",
    dividendStreakYears: 31,
    dividendCAGR5yr: null,
    dividendCAGR10yr: null,
    recentDividendGrowth: "31년 연속 배당 증가를 이어왔고, 최근 3년 배당 CAGR도 두 자릿수(13.1%)를 기록했습니다.",
    dividendSafety: "watch",
    dividendSafetyReason: "배당성향 98.8%와 높은 레버리지(D/E 119.4)로 경기·금리 충격 시 배당 여력이 빠듯합니다.",
    moatTypes: [
      "efficient_scale",
      "intangible_assets",
    ],
    moatStrength: "narrow",
    moatNarrative: "ESS의 해자는 공급 제약이 큰 서부 핵심 입지에 축적한 대규모 포트폴리오에서 나옵니다. 주거 규제·인허가 장벽과 토지 희소성은 신규 경쟁 진입을 어렵게 만듭니다. 다만 리츠 특성상 자본비용과 금리 환경에 따라 해자 체감 강도는 변동성이 있습니다.",
    revenueGrowthTrend: "임대료 정상화와 점유율 방어에 따라 완만한 성장 기조이나, 금리·지역 경기 영향에 민감합니다.",
    marginTrend: "stable",
    debtLevel: "high",
    financialSummary: "ROE 12.2%로 수익성 자체는 양호하지만, 리츠 구조상 부채 의존도가 높아 재무 탄력성은 제한적입니다. 현재 배당수익률(3.99%)이 5년 평균(3.44%)보다 높아 밸류에이션 매력은 일부 존재합니다. 다만 높은 배당성향으로 이익/FFO 둔화 시 배당 커버리지 압박이 커질 수 있습니다.",
    keyRisks: [
      "고금리 장기화에 따른 조달비용 상승 및 밸류에이션 디레이팅",
      "서부 해안 지역의 임대 규제 강화 및 공실률 상승 위험",
      "높은 배당성향으로 인한 배당 성장 둔화 또는 여력 축소",
    ],
    bullCase: "금리 하향 안정과 서부 주요 도시 임대수요 회복이 겹치면 FFO 개선과 멀티플 리레이팅이 동시에 나타날 수 있습니다. 이 경우 현재 대비 주가 상승과 배당 성장의 동시 달성이 가능합니다.",
    bearCase: "금리가 높은 수준에서 오래 유지되거나 지역 경기 둔화로 임대료 인상률이 꺾이면, 높은 배당성향이 부담으로 전환될 수 있습니다. 밸류에이션 할인과 배당 성장 둔화가 함께 나타날 가능성이 있습니다.",
    valuationComment: "현재 배당수익률이 과거 평균 대비 높아 상대적으로 저평가 구간에 가깝지만, 높은 payout과 부채를 감안하면 분할 접근이 적절합니다. 보수적으로는 3.9~4.2% 수익률 구간(대략 245~265달러)을 우선 매수 후보로 보는 전략이 유효합니다.",
    recentDevelopments: [
      "31년 연속 배당 증가 기록 유지",
      "주가가 52주 밴드 하단권(위치 22.8%)에 머물며 배당수익률 매력 확대",
    ],
    overallRating: "보유",
    ratingReason: "배당 성장 이력과 입지 경쟁력은 강점이지만, 높은 배당성향·레버리지로 신규 비중 확대는 신중함이 필요합니다.",
    targetBuyPrice: 252,
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // ERIE — 이리 인데믹니티 (배당귀족주, 25년 연속)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    ticker: "ERIE",
    analyzedAt: "2026-02-26 08:24 KST",
    businessSummary: "ERIE(Erie Indemnity)는 Erie Insurance Exchange의 매니저로서 보험 인수·관리 서비스를 제공하고 수수료 수익을 창출하는 금융/보험 회사입니다. 개인·상업용 손해보험 중심의 안정적 보험료 기반 위에서 장기적으로 배당을 늘려온 배당성장 기업입니다.",
    coreProducts: [
      "자동차 보험 관련 관리/인수 서비스",
      "주택·재산 보험 관련 관리 서비스",
      "상업용 보험(책임·재산 등) 관련 관리 서비스",
    ],
    geographicPresence: "미국 중심(사실상 대부분 미국 내 사업)",
    dividendStreakYears: 25,
    dividendCAGR5yr: null,
    dividendCAGR10yr: null,
    recentDividendGrowth: "25년 연속 배당 증가를 이어가고 있으며, 최근 3년 배당 CAGR이 16.0%로 높은 성장세를 보였습니다.",
    dividendSafety: "strong",
    dividendSafetyReason: "배당성향 44.1%로 여력이 있고 ROE 26.2%로 수익성이 높아 배당 지속 가능성이 우수합니다.",
    moatTypes: [
      "brand",
      "efficient_scale",
      "intangible_assets",
      "switching_costs",
    ],
    moatStrength: "narrow",
    moatNarrative: "보험업 특성상 신뢰 기반 브랜드와 지역 네트워크, 규제/라이선스 기반 운영역량이 진입장벽으로 작동합니다. 기존 계약자의 전환 비용과 관계 유지 성향도 유지율에 기여합니다. 다만 전국 초대형 보험사 대비 압도적 규모 우위는 제한적이어서 해자는 좁지만 유효한 편입니다.",
    revenueGrowthTrend: "보험료 인상과 계약 기반 확대로 중장기 완만한 성장 추세입니다.",
    marginTrend: "stable",
    debtLevel: "moderate",
    financialSummary: "Trailing PER 21.8, Forward PER 19.3으로 이익 성장 기대가 일부 반영된 밸류에이션입니다. PBR 6.18은 자본효율(ROE 26.2%) 프리미엄이 반영된 수준으로 해석됩니다. D/E 2.7은 금융업 특성을 감안하면 관리 가능한 레버리지로 보이나 금리·손해율 변동 모니터링이 필요합니다.",
    keyRisks: [
      "대형 자연재해 증가로 손해율이 악화될 위험",
      "금리 및 투자수익 변동에 따른 이익 변동성",
      "보험료 인상 규제/경쟁 심화로 성장 둔화 가능성",
    ],
    bullCase: "높은 ROE와 보수적 배당성향을 바탕으로 배당 성장과 이익 성장이 동반될 경우, 현재 주가 구간에서 재평가가 가능합니다. 52주 저점 부근 위치는 장기 투자자에게 리스크-리워드가 개선된 구간일 수 있습니다.",
    bearCase: "손해율 급등이나 규제 환경 악화가 발생하면 이익과 배당 성장률이 동시에 둔화될 수 있습니다. 고PBR 프리미엄이 축소될 경우 주가 변동성이 커질 수 있습니다.",
    valuationComment: "현재 배당수익률 2.16%가 5년 평균 1.76%를 상회하고 52주 위치도 낮아, 역사적 배당 관점에서는 상대적으로 매력적인 구간입니다. 다만 PBR 프리미엄이 높아 분할 매수 접근이 적절하며, 260~280달러대는 우선 매수 검토 구간으로 판단됩니다.",
    recentDevelopments: [
      "배당 25년 연속 증가 트랙레코드 유지",
      "주가가 52주 범위 하단(6.6%) 부근에서 거래되며 밸류에이션 매력도 개선",
    ],
    overallRating: "관심",
    ratingReason: "배당 안전성과 수익성은 강하지만 밸류에이션 프리미엄을 감안해 적극 매수보다 분할 접근이 유리합니다.",
    targetBuyPrice: 275,
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // FAST — 패스널 (배당귀족주, 25년 연속)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    ticker: "FAST",
    analyzedAt: "2026-02-26 08:24 KST",
    businessSummary: "패스널(FAST)은 산업·건설·유지보수(MRO) 현장에 체결부품, 안전용품, 공구 등을 공급하는 북미 중심의 산업 유통 기업입니다. 온사이트(Onsite) 재고관리와 자동판매기(FASTVend) 기반의 고정 고객 락인 모델로 반복 매출을 창출합니다. 소량·빈번 구매 수요를 빠르게 공급하는 운영 역량이 핵심 경쟁력입니다.",
    coreProducts: [
      "체결부품(패스너) 및 산업 소모품",
      "MRO 공급 및 재고관리(Onsite) 서비스",
      "산업용 자동판매기(FASTVend) 솔루션",
    ],
    geographicPresence: "미국 중심(대부분) · 캐나다/멕시코 등 북미 및 일부 해외 비중",
    dividendStreakYears: 25,
    dividendCAGR5yr: null,
    dividendCAGR10yr: null,
    recentDividendGrowth: "최근 3년 배당 CAGR 21.6%로 배당 성장 속도는 매우 높지만, 배당성향이 80%대로 올라 여력 관리는 필요합니다.",
    dividendSafety: "moderate",
    dividendSafetyReason: "장기 배당 증가 이력은 강점이나 배당성향(80.3%)과 높은 밸류에이션이 안전마진을 줄입니다.",
    moatTypes: [
      "switching_costs",
      "efficient_scale",
      "cost_advantage",
      "brand",
    ],
    moatStrength: "narrow",
    moatNarrative: "고객 현장 재고를 FAST 시스템에 맞춰 운영하면 공급사 전환 비용이 높아집니다. 촘촘한 물류망과 현장 서비스 인력은 소량 다빈도 주문에서 규모의 효율을 제공합니다. 다만 제품 자체의 절대적 차별화보다는 운영 실행력 기반 해자라 폭은 넓지 않은 편입니다.",
    revenueGrowthTrend: "경기 민감 업종 특성상 사이클 영향을 받지만, 온사이트·자동판매기 확대로 중장기 완만한 성장 기조를 유지하는 흐름입니다.",
    marginTrend: "stable",
    debtLevel: "high",
    financialSummary: "ROE 33.3%로 자본 효율성은 우수하지만, PBR 12.99와 높은 멀티플은 기대를 선반영한 상태입니다. D/E 11.2는 보수적 관점에서 레버리지 부담 요인입니다. 현금흐름 기반의 배당 지속성은 있으나 배당성향이 높아 경기 둔화 구간에서 방어력 점검이 필요합니다.",
    keyRisks: [
      "산업 경기 둔화 시 물량 감소로 매출·이익 압박",
      "고배수(PER 40.9/Forward 33.3) 구간에서 디레이팅 리스크",
      "배당성향 80%대 지속 시 배당 성장률 둔화 가능성",
    ],
    bullCase: "온사이트·자동판매기 확장이 계속되면 고객 락인이 강화되고 반복 매출 비중이 높아질 수 있습니다. 경기 회복과 함께 운영 레버리지까지 붙으면 이익 성장 재가속이 가능합니다.",
    bearCase: "제조업/건설 수요 둔화가 길어지면 고정비 부담으로 수익성이 약해질 수 있습니다. 현재 멀티플이 높아 실적 미스 시 주가 조정 폭이 커질 수 있습니다.",
    valuationComment: "현재가는 애널리스트 목표가와 거의 동일하고(상승여력 0.1%), 배당수익률도 5년 평균 대비 낮아 밸류 매력이 제한적입니다. 프리미엄을 감안하면 분할 접근은 가능하나, 의미 있는 안전마진은 더 낮은 가격대에서 확보하는 편이 유리합니다.",
    recentDevelopments: [
      "자동판매기·온사이트 중심의 고객 침투 전략이 지속되며 서비스형 유통 모델이 강화되는 흐름",
      "산업 경기 불확실성과 고평가 부담으로 시장 컨센서스가 hold에 머무는 분위기",
    ],
    overallRating: "관망",
    ratingReason: "질 좋은 배당 성장주지만 현재 밸류에이션이 높고 기대수익 대비 안전마진이 부족합니다.",
    targetBuyPrice: 37,
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // NKE — 나이키 (배당귀족주, 24년 연속)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    ticker: "NKE",
    analyzedAt: "2026-02-26 08:24 KST",
    businessSummary: "나이키는 글로벌 스포츠웨어·운동화·의류를 설계·마케팅하는 브랜드 기업으로, 직접판매(DTC)와 도매 채널을 병행합니다. 핵심 수익원은 신발 카테고리이며 조던·러닝·트레이닝 등 카테고리별 제품 라인업과 강한 브랜드 파워를 기반으로 프리미엄 가격을 유지해 왔습니다. 최근에는 재고 정상화와 채널 전략 재정비를 통해 성장 회복을 추진 중입니다.",
    coreProducts: [
      "운동화(러닝·농구·라이프스타일)",
      "스포츠 의류",
      "조던·컨버스 등 브랜드 포트폴리오",
    ],
    geographicPresence: "북미 비중이 가장 크고, EMEA·중화권·APLA(아태/중남미)로 분산된 글로벌 매출 구조",
    dividendStreakYears: 24,
    dividendCAGR5yr: null,
    dividendCAGR10yr: null,
    recentDividendGrowth: "최근에도 배당은 연속 인상 중이나, 이익 압박 구간에서 배당성향이 높아져 증액 여력은 과거 대비 둔화 가능성이 있습니다.",
    dividendSafety: "watch",
    dividendSafetyReason: "배당성향 94.2%는 완충력이 낮아 실적 회복이 지연될 경우 배당 성장 지속성이 약해질 수 있습니다.",
    moatTypes: [
      "brand",
      "intangible_assets",
      "cost_advantage",
    ],
    moatStrength: "wide",
    moatNarrative: "나이키의 핵심 해자는 전 세계적으로 축적된 브랜드 자산과 디자인·마케팅 무형자산입니다. 규모의 경제를 통한 조달·유통 효율과 선수/팀 파트너십 기반의 브랜드 선호가 경쟁사 대비 우위를 만듭니다. 다만 패션 사이클과 채널 실행력에 따라 단기 실적 변동성은 존재합니다.",
    revenueGrowthTrend: "최근은 재고 조정과 수요 둔화 영향으로 성장 정체/둔화 후 회복 구간 진입 시도",
    marginTrend: "contracting",
    debtLevel: "high",
    financialSummary: "ROE 17.9%로 수익성 체력은 여전히 양호하지만, 높은 배당성향과 밸류에이션 부담이 보수적 접근을 요구합니다. D/E 80.1 수준은 과도한 레버리지 위험까지는 아니더라도 금리·수요 둔화 국면에서 재무 유연성을 점검해야 하는 구간입니다. Forward PER 27.4는 회복 기대를 상당 부분 선반영한 가격대로 해석됩니다.",
    keyRisks: [
      "소비 둔화와 재고/프로모션 압력에 따른 마진 훼손",
      "높은 배당성향으로 인한 배당 성장 여력 제한",
      "중국·환율·공급망 변수에 따른 실적 변동성",
    ],
    bullCase: "브랜드 경쟁력과 신제품 사이클 회복으로 매출 성장과 마진 정상화가 동반되면, 현재 주가 대비 리레이팅 여지가 있습니다. 애널리스트 목표가 기준 상승여력(20.1%)이 현실화될 수 있습니다.",
    bearCase: "수요 회복이 지연되고 할인 판매가 길어지면 이익 회복 속도가 늦어져 높은 PER 정당화가 어려워질 수 있습니다. 이 경우 배당성향 부담이 커지며 주가 조정이 재차 나타날 수 있습니다.",
    valuationComment: "52주 밴드 하단(위치 36.9%)에 있어 과열 구간은 아니지만, Trailing/Forward PER이 여전히 높은 편이라 안전마진은 제한적입니다. 실적 턴어라운드 확인 전에는 분할 접근이 유효하며, 보수적 매수 구간은 대략 $55~$60으로 판단됩니다.",
    recentDevelopments: [
      "재고 정상화 및 채널 믹스 조정 과정에서 수익성 회복이 핵심 과제로 부각",
      "애널리스트 컨센서스는 buy 유지, 평균 목표가 $76.15 제시",
    ],
    overallRating: "관망",
    ratingReason: "브랜드 해자는 강하지만 높은 배당성향과 밸류에이션 부담으로 실적 회복 확인 전까지는 기다림이 유리합니다.",
    targetBuyPrice: 58,
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // TTC — 토로 컴파니 (배당귀족주, 22년 연속)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    ticker: "TTC",
    analyzedAt: "2026-02-26 08:25 KST",
    businessSummary: "토로 컴파니(TTC)는 잔디·조경 관리 장비, 관개(이리게이션) 솔루션, 제설 장비 등을 제공하는 산업재 기업입니다. 골프장·상업용 조경·지자체·주거용 시장을 모두 커버하며, 장비 판매와 애프터마켓(부품·서비스) 수요를 함께 확보하는 구조가 강점입니다. 경기 민감 업종이지만 브랜드 신뢰와 유통 네트워크를 바탕으로 장기적으로 안정적인 현금흐름을 창출해 왔습니다.",
    coreProducts: [
      "잔디/조경 관리 장비(모어·트랙터 등)",
      "관개 시스템 및 수자원 관리 솔루션",
      "제설 장비 및 상업용 유지관리 장비",
    ],
    geographicPresence: "미국 중심(약 75~80%) · 국제(약 20~25%)",
    dividendStreakYears: 22,
    dividendCAGR5yr: null,
    dividendCAGR10yr: null,
    recentDividendGrowth: "22년 연속 배당을 늘렸고, 최근 3년 배당 CAGR은 7.3%로 물가를 상회하는 증가세를 유지했습니다.",
    dividendSafety: "moderate",
    dividendSafetyReason: "배당성향 48%로 과도하지 않지만 산업 경기 민감도와 레버리지(D/E 71.6)를 감안하면 안전성은 중간 수준입니다.",
    moatTypes: [
      "brand",
      "switching_costs",
      "cost_advantage",
      "intangible_assets",
    ],
    moatStrength: "narrow",
    moatNarrative: "토로는 상업용 조경·골프장 장비 시장에서 축적된 브랜드 신뢰와 제품 내구성 평판을 보유하고 있습니다. 딜러·서비스 네트워크와 부품 공급 체계는 고객의 교체 비용을 높여 재구매를 유도합니다. 다만 산업재 특성상 절대적 독점력보다는 제품력·유통력 기반의 협소한 해자에 가깝습니다.",
    revenueGrowthTrend: "팬데믹 이후 강한 수요 구간을 지난 뒤 최근에는 정상화 국면에서 완만한 성장/변동성이 나타나는 흐름입니다.",
    marginTrend: "stable",
    debtLevel: "moderate",
    financialSummary: "ROE 21.0%로 자본효율은 우수하며 배당성향 48%도 관리 가능한 수준입니다. 다만 PBR 6.67과 높은 주가 레벨(52주 위치 93%)은 밸류에이션 부담을 키우고 있습니다. D/E 71.6은 즉각적인 위험 구간은 아니지만 금리·경기 둔화 국면에서 점검이 필요한 수준입니다.",
    keyRisks: [
      "주택·조경·골프장 CAPEX 둔화 시 장비 수요 감소",
      "원자재·물류·인건비 상승에 따른 마진 압박",
      "현재 주가가 애널리스트 목표가를 상회하는 밸류에이션 조정 리스크",
    ],
    bullCase: "상업용 조경·골프장 수요가 견조하고 관개/신제품 믹스가 개선되면 이익 회복과 함께 forward PER 기준 재평가가 가능합니다. 배당 성장 기조가 유지되면 총주주수익률이 안정적으로 개선될 수 있습니다.",
    bearCase: "경기 둔화로 장비 교체 주기가 길어지면 매출과 영업레버리지가 동시에 약화될 수 있습니다. 현재 고평가 구간에서 실적 미스가 발생하면 멀티플 디레이팅 폭이 커질 수 있습니다.",
    valuationComment: "현재가($99.01)는 애널리스트 목표가($93.25)보다 높고 52주 고점 인근이라 단기 밸류 부담이 큽니다. Trailing PER 31.2는 부담스럽고, 실적 회복을 선반영한 Forward PER 19.8도 보수적 매수 관점에서는 여유가 크지 않습니다. 분할 접근 기준으로는 90달러 전후 이하에서 리스크/보상 균형이 개선됩니다.",
    recentDevelopments: [
      "주가가 52주 범위 상단(93%)에 위치해 기대치가 높은 상태",
      "애널리스트 컨센서스는 buy이나 평균 목표가는 현재가 대비 낮아 단기 괴리가 존재",
    ],
    overallRating: "관망",
    ratingReason: "배당 성장과 사업 질은 우수하지만 현재 가격대의 밸류 부담이 커 신규 진입은 가격 조정 후가 유리합니다.",
    targetBuyPrice: 90,
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // COST — 코스트코 (배당귀족주, 21년 연속)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    ticker: "COST",
    analyzedAt: "2026-02-26 08:25 KST",
    businessSummary: "코스트코는 회원제 창고형 할인점 모델을 기반으로 식품, 생활필수품, 가전, 헬스케어 등 광범위한 카테고리를 대량·저마진으로 판매하는 유통 기업입니다. 이익의 핵심은 상품 마진보다 높은 갱신율의 연회비 수익에서 나오며, 이를 통해 가격 경쟁력을 지속 강화합니다. 북미를 중심으로 국제 시장에서도 점포 확장과 전자상거래를 병행해 규모의 경제를 확대하고 있습니다.",
    coreProducts: [
      "회원제 창고형 오프라인 리테일",
      "멤버십(연회비) 서비스",
      "Kirkland Signature 프라이빗 브랜드",
    ],
    geographicPresence: "미국 73% · 캐나다 14% · 기타 국제 13%",
    dividendStreakYears: 21,
    dividendCAGR5yr: null,
    dividendCAGR10yr: null,
    recentDividendGrowth: "최근 3년 배당 CAGR 22.1%로 고성장 구간을 보였고, 21년 연속 증배를 이어가고 있습니다.",
    dividendSafety: "strong",
    dividendSafetyReason: "배당성향 27.1%로 여력이 충분하고, 견고한 현금창출력과 경기방어적 수요 기반이 배당 지속 가능성을 뒷받침합니다.",
    moatTypes: [
      "brand",
      "cost_advantage",
      "efficient_scale",
      "switching_costs",
    ],
    moatStrength: "wide",
    moatNarrative: "코스트코는 대량 매입과 빠른 재고회전으로 경쟁사 대비 낮은 가격 구조를 유지하는 비용 우위를 보유합니다. 높은 멤버십 갱신률과 브랜드 신뢰는 고객 락인을 강화하며, 점포 밀집과 물류 효율은 규모가 커질수록 진입장벽을 높입니다. 이 조합은 장기적으로 가격 리더십과 트래픽 방어력을 동시에 제공합니다.",
    revenueGrowthTrend: "기존점 성장과 신규 출점이 결합된 완만한 우상향 성장 추세입니다.",
    marginTrend: "stable",
    debtLevel: "low",
    financialSummary: "ROE 30.3%로 자본효율이 매우 높고, 배당성향 27.1%는 이익 대비 배당 부담이 낮은 편입니다. D/E 27.0 수준으로 재무 레버리지는 과도하지 않아 방어력이 양호합니다. 다만 고밸류 구간에서는 실적이 좋아도 멀티플 조정 리스크가 수익률을 제한할 수 있습니다.",
    keyRisks: [
      "PER 53.3, PBR 14.57의 고평가 부담으로 밸류에이션 디레이팅 가능성",
      "임금·물류·원가 상승 시 박리다매 구조에서 마진 압박 발생 가능",
      "경쟁 심화 및 소비 둔화 시 트래픽/멤버십 성장률 둔화 가능성",
    ],
    bullCase: "멤버십 수익의 안정성과 글로벌 출점 확대가 지속되면 이익 성장의 가시성이 높아집니다. 프라이빗 브랜드 확장과 운영 효율 개선이 이어질 경우 프리미엄 멀티플이 장기 유지될 수 있습니다.",
    bearCase: "현재 멀티플이 높은 만큼 실적이 기대에 미달하면 주가 조정 폭이 커질 수 있습니다. 경기 둔화와 비용 인플레이션이 동시에 오면 매출 성장 둔화와 이익률 압박이 겹칠 수 있습니다.",
    valuationComment: "현재 배당수익률 0.52%는 5년 평균 0.61%보다 낮아 상대적으로 비싼 구간으로 판단됩니다. 애널리스트 업사이드가 5.2%로 제한적이어서 신규 매수는 분할 접근이 유리하며, 최소한 수익률 평균 회귀(약 0.61%)에 가까워지는 가격대에서 매수 매력이 커집니다.",
    recentDevelopments: [
      "북미 중심의 신규 점포 확장과 리모델링을 통한 트래픽·회전율 개선 지속",
      "멤버십 정책/수수료 조정과 디지털 채널 강화로 연회비 기반 수익 안정성 제고",
    ],
    overallRating: "관망",
    ratingReason: "사업·배당의 질은 매우 우수하지만 현재 밸류에이션이 높아 기대수익 대비 안전마진이 제한적입니다.",
    targetBuyPrice: 852,
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // MSFT — 마이크로소프트 (배당귀족주, 21년 연속)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    ticker: "MSFT",
    analyzedAt: "2026-02-26 08:26 KST",
    businessSummary: "마이크로소프트는 클라우드(Azure), 생산성 소프트웨어(Microsoft 365), 운영체제/개발자 생태계(Windows·GitHub)를 축으로 기업·개인 고객의 디지털 인프라를 제공하는 글로벌 플랫폼 기업입니다. 최근에는 생성형 AI를 전 제품군에 통합해 사용자당 매출(ARPU)과 기업 계약 단가를 높이는 전략을 추진하고 있습니다. 게임(Xbox, Activision Blizzard)과 보안 사업도 현금흐름 다변화에 기여하고 있습니다.",
    coreProducts: [
      "Azure 및 클라우드 서비스",
      "Microsoft 365·Copilot·Dynamics",
      "Windows·GitHub·보안/Xbox 생태계",
    ],
    geographicPresence: "미국 약 50% 내외 · 국제 약 50% 내외(유럽·아시아 중심)로 비교적 균형적인 매출 분포",
    dividendStreakYears: 21,
    dividendCAGR5yr: null,
    dividendCAGR10yr: null,
    recentDividendGrowth: "최근 21년 연속 배당 증가를 이어가며 낮은 배당성향 기반의 증액 여력이 유지되고 있습니다.",
    dividendSafety: "strong",
    dividendSafetyReason: "배당성향 21.3%와 높은 수익성(ROE 34.4%)으로 이익 변동 시에도 배당 커버력이 매우 우수합니다.",
    moatTypes: [
      "brand",
      "switching_costs",
      "network_effect",
      "intangible_assets",
      "efficient_scale",
    ],
    moatStrength: "wide",
    moatNarrative: "기업용 소프트웨어 표준 지위와 생태계 잠금효과(Office-Teams-Azure-보안)가 전환비용을 높입니다. 개발자 생태계(GitHub)와 클라우드 규모의 경제는 경쟁사 대비 제품 고도화 속도와 단가 방어력을 강화합니다. 브랜드 신뢰와 방대한 파트너 채널이 장기 계약 기반 매출을 지지합니다.",
    revenueGrowthTrend: "클라우드·AI 수요 중심의 중고성장 기조가 유지되는 추세입니다.",
    marginTrend: "expanding",
    debtLevel: "moderate",
    financialSummary: "마이크로소프트는 고마진 소프트웨어와 클라우드 구독 모델을 기반으로 안정적인 현금창출력을 보유하고 있습니다. PBR 7.61은 프리미엄 밸류에이션을 시사하지만, 높은 ROE와 낮은 배당성향이 자본 효율성과 배당 지속성을 뒷받침합니다. D/E 31.5 수준은 과도하지 않으며 재무 유연성은 양호한 편입니다.",
    keyRisks: [
      "AI 인프라 투자 확대에 따른 단기 수익성 압박",
      "규제·반독점 이슈(클라우드/게임/데이터)로 인한 사업 제약 가능성",
      "고밸류 구간에서 금리·성장 둔화 시 멀티플 디레이팅 위험",
    ],
    bullCase: "Copilot 상용화와 Azure AI 수요가 기업당 계약 단가를 끌어올리며 매출·마진 동반 성장이 가속될 수 있습니다. 이 경우 현재 밸류에이션 프리미엄이 정당화되며 배당도 고성장 기조를 유지할 가능성이 큽니다.",
    bearCase: "AI 투자 대비 수익화 속도가 기대에 못 미치면 마진이 압박받고 멀티플이 빠르게 축소될 수 있습니다. 경기 둔화로 기업 IT 지출이 지연되면 실적 모멘텀이 약화될 위험이 있습니다.",
    valuationComment: "Trailing PER 25.1, Forward PER 21.2는 품질 프리미엄을 반영한 수준입니다. 배당주 관점에서는 수익률이 낮아 분할 접근이 적절하며, 20~22배 Forward PER 구간(대략 360~390달러)을 상대적으로 매력적인 매수 구간으로 판단합니다.",
    recentDevelopments: [
      "Copilot 및 Azure AI 서비스 확대로 기업용 AI 상용화가 본격 진행",
      "클라우드·보안·생산성 제품군의 통합 판매 강화로 구독형 매출 비중 확대",
    ],
    overallRating: "관심",
    ratingReason: "배당 안전성과 질적 경쟁우위는 매우 우수하지만, 낮은 배당수익률과 프리미엄 밸류에이션을 감안해 가격 조정 시 비중 확대가 유리합니다.",
    targetBuyPrice: 380,
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // BBY — 베스트 바이 (배당귀족주, 21년 연속)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    ticker: "BBY",
    analyzedAt: "2026-02-26 08:26 KST",
    businessSummary: "베스트 바이는 북미 중심의 가전·IT 제품 전문 리테일러로, 오프라인 매장과 이커머스를 결합한 옴니채널 전략을 운영합니다. 하드웨어 판매 외에 멤버십, 설치·수리(Geek Squad), 보증/서비스 수익을 통해 반복 매출 기반을 강화하고 있습니다.",
    coreProducts: [
      "소비자 전자제품(PC·모바일·TV·가전)",
      "옴니채널 유통(매장+온라인)",
      "서비스/멤버십(설치·수리·보증)",
    ],
    geographicPresence: "미국 중심(대부분) · 캐나다 보조",
    dividendStreakYears: 21,
    dividendCAGR5yr: null,
    dividendCAGR10yr: null,
    recentDividendGrowth: "최근 3년 배당 CAGR은 2.6%로 배당 성장 속도는 완만해졌습니다.",
    dividendSafety: "watch",
    dividendSafetyReason: "배당성향 125.1%로 이익 대비 배당 부담이 높아 단기 안전성 점검이 필요합니다.",
    moatTypes: [
      "brand",
      "cost_advantage",
      "efficient_scale",
    ],
    moatStrength: "narrow",
    moatNarrative: "베스트 바이는 대형 유통망과 브랜드 인지도를 바탕으로 가전 카테고리에서 규모의 경제를 보유합니다. 다만 온라인 가격 경쟁과 제조사 직판 확대로 초과수익 지속성은 제한적이며, 서비스·멤버십의 고객 락인 효과가 해자를 보완하는 구조입니다.",
    revenueGrowthTrend: "팬데믹 특수 이후 매출은 조정 국면에서 완만한 회복을 시도하는 흐름입니다.",
    marginTrend: "stable",
    debtLevel: "high",
    financialSummary: "ROE 22.5%로 수익성 지표는 양호하지만, D/E 154.5로 레버리지는 높은 편입니다. Forward PER 9.3은 실적 반등 기대를 반영한 저평가 신호로 해석 가능하나, 높은 배당성향과 경기 민감한 수요를 함께 고려해야 합니다.",
    keyRisks: [
      "소비 경기 둔화 시 고가 전자제품 수요 위축",
      "온라인 채널과의 가격 경쟁 심화로 마진 압박",
      "높은 배당성향 지속 시 배당 성장 정체 또는 조정 가능성",
    ],
    bullCase: "현재 주가가 52주 하단(20.3%)에 위치하고 배당수익률이 5년 평균 대비 높아 밸류 매력이 큽니다. 수요 정상화와 서비스 매출 확대가 동반되면 목표가 영역으로의 리레이팅이 가능합니다.",
    bearCase: "소비 둔화가 장기화되면 매출·이익 회복이 지연되고 높은 배당성향이 재무 유연성을 약화시킬 수 있습니다. 이 경우 고배당 매력이 오히려 배당 지속 가능성 우려로 전환될 수 있습니다.",
    valuationComment: "현재가는 DDM 적정가(86.36달러)와 애널리스트 목표가(78.90달러) 대비 할인 구간으로 보입니다. 다만 배당 커버리지 리스크를 감안해 분할 접근이 유효하며, 58~62달러 구간을 우선 매수 관찰 구간으로 판단합니다.",
    recentDevelopments: [
      "Forward PER 9.3으로 Trailing PER 20.6 대비 큰 괴리(실적 회복 기대 반영)",
      "배당수익률 6.06%로 5년 평균 4.15% 대비 높은 수준 유지",
    ],
    overallRating: "관심",
    ratingReason: "밸류에이션과 배당 매력은 높지만 배당성향·부채 부담이 커 보수적 분할 매수가 적절합니다.",
    targetBuyPrice: 60,
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // WSM — 윌리엄스 소노마 (배당귀족주, 19년 연속)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    ticker: "WSM",
    analyzedAt: "2026-02-26 08:27 KST",
    businessSummary: "윌리엄스 소노마(WSM)는 프리미엄 홈 퍼니싱/주방용품을 판매하는 옴니채널 리테일 기업으로, Williams Sonoma·Pottery Barn·West Elm 등 복수의 라이프스타일 브랜드를 운영합니다. 자체 디자인 상품과 직소싱, 멀티브랜드 포트폴리오를 바탕으로 오프라인 매장과 이커머스를 결합한 판매 구조를 갖추고 있습니다.",
    coreProducts: [
      "가구·홈데코",
      "주방용품·조리도구",
      "웨딩/기프트 레지스트리 및 인테리어 서비스",
    ],
    geographicPresence: "미국 중심(대부분) · 국제(캐나다/호주/영국 등) 비중은 상대적으로 제한적",
    dividendStreakYears: 19,
    dividendCAGR5yr: null,
    dividendCAGR10yr: null,
    recentDividendGrowth: "3년 배당 CAGR 28.2%로 최근 배당 성장 속도는 매우 빠르지만, 현재 배당수익률은 역사 평균 대비 낮은 구간입니다.",
    dividendSafety: "strong",
    dividendSafetyReason: "배당성향 28.1%로 이익 대비 배당 커버력이 높아 배당 유지·증가 여력은 양호합니다.",
    moatTypes: [
      "brand",
      "intangible_assets",
      "cost_advantage",
    ],
    moatStrength: "narrow",
    moatNarrative: "프리미엄 홈퍼니싱 브랜드 포트폴리오와 디자인/머천다이징 역량은 가격 프리미엄과 반복 구매를 지원합니다. 자체 브랜드와 공급망 통제는 원가·마진 방어에 도움을 주지만, 소비 경기와 경쟁 강도가 높아 해자는 광범위(wide)보다는 제한적(narrow)으로 판단됩니다.",
    revenueGrowthTrend: "팬데믹 이후 고기저 효과와 수요 정상화로 단기 변동성이 크지만, 장기적으로는 브랜드 확장과 옴니채널 강화가 완만한 성장을 지지합니다.",
    marginTrend: "stable",
    debtLevel: "moderate",
    financialSummary: "ROE 56.9%로 자본 효율성은 매우 높고, 배당성향도 낮아 주주환원 지속 가능성은 우수합니다. 다만 PBR 12.18과 52주 고점 근처 주가는 기대가 상당 부분 반영된 상태이며, D/E 70.9는 금리·소비 둔화 구간에서 점검이 필요합니다.",
    keyRisks: [
      "주택경기·소비심리 둔화에 따른 가구/홈카테고리 수요 감소",
      "프로모션 경쟁 심화로 인한 마진 압박",
      "관세·운임·원자재 변동 등 공급망 비용 리스크",
    ],
    bullCase: "브랜드 파워와 이커머스 경쟁력을 바탕으로 매출 회복과 마진 방어가 동시에 진행되면, 이익 성장과 배당 증가가 재가속될 수 있습니다. 이 경우 현재 밸류에이션 프리미엄이 정당화될 가능성이 있습니다.",
    bearCase: "경기둔화로 고가 홈퍼니싱 수요가 약해지고 판촉 강도가 높아지면, 이익 모멘텀 둔화와 멀티플 디레이팅이 동시에 나타날 수 있습니다. 주가가 배당 매력 구간까지 조정받을 위험이 있습니다.",
    valuationComment: "현재가($209.22)는 5년 평균 배당수익률(1.72%) 대비 낮은 수익률(1.26%) 구간으로 상대적으로 비싸 보입니다. 애널리스트 목표가($204.79)도 현 주가 대비 보수적이어서, 신규 매수는 조정 시 분할 접근이 유리하며 배당수익률 1.5~1.7% 구간(대략 $155~$176)을 우선 매수 후보로 볼 수 있습니다.",
    recentDevelopments: [
      "애널리스트 컨센서스는 buy이나 목표가 기준으로는 주가 상단 부담이 존재",
      "주가가 52주 범위 상단(86.1%)에 위치해 단기 밸류에이션 부담이 확대된 상태",
    ],
    overallRating: "관망",
    ratingReason: "배당 안전성과 브랜드 경쟁력은 우수하지만, 현재 가격은 배당·밸류에이션 매력이 낮아 추격 매수보다는 조정 대기가 합리적입니다.",
    targetBuyPrice: 175,
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // KR — 크로거 (배당귀족주, 19년 연속)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    ticker: "KR",
    analyzedAt: "2026-02-26 08:27 KST",
    businessSummary: "크로거(KR)는 미국 내 대형 식료품 유통사로, 슈퍼마켓·멀티채널 유통·자체 브랜드를 결합한 생활필수 소비재 플랫폼을 운영합니다. 오프라인 점포망과 디지털 주문/배송 역량을 함께 확대하며, 식품 중심의 반복 구매 수요를 기반으로 안정적 현금흐름을 창출하는 구조입니다.",
    coreProducts: [
      "식료품 소매(신선식품·가공식품·생활필수품)",
      "자체 브랜드(Private Label) 상품",
      "디지털 주문·픽업·배송 서비스",
    ],
    geographicPresence: "미국 100% 중심(전국 점포망 기반)",
    dividendStreakYears: 19,
    dividendCAGR5yr: null,
    dividendCAGR10yr: null,
    recentDividendGrowth: "최근 3년 배당 CAGR 21.6%로 배당 성장 속도는 빠르지만, 현재 배당성향 부담이 동반됩니다.",
    dividendSafety: "watch",
    dividendSafetyReason: "배당성향 115.9%와 높은 레버리지(D/E 358.0)가 배당 지속가능성의 핵심 점검 포인트입니다.",
    moatTypes: [
      "cost_advantage",
      "efficient_scale",
      "brand",
    ],
    moatStrength: "narrow",
    moatNarrative: "식료품 유통은 규모의 경제와 물류 효율이 수익성의 핵심이어서 대형 사업자에 유리합니다. 크로거는 전국 점포망과 자체 브랜드 비중을 통해 가격 경쟁력과 고객 유지력을 확보하고 있습니다. 다만 업계 경쟁 강도가 높아 해자는 넓기보다 협소한 편으로 판단됩니다.",
    revenueGrowthTrend: "필수소비 중심의 완만한 성장 추세이나, 인플레이션·경쟁 환경에 따라 변동성이 존재합니다.",
    marginTrend: "stable",
    debtLevel: "high",
    financialSummary: "Forward PER 12.8 기준으로 이익 대비 밸류에이션은 과도하지 않지만, Trailing PER 59.8은 최근 이익 왜곡 가능성을 시사합니다. PBR 5.48과 D/E 358.0은 자본구조 측면에서 보수적 접근이 필요함을 보여줍니다. ROE 8.0%는 방어주 성격 대비 무난한 수준이나, 배당성향이 높아 재무 유연성 확인이 중요합니다.",
    keyRisks: [
      "가격 경쟁 심화로 인한 마진 압박",
      "높은 부채 레벨과 금리 부담",
      "인건비·물류비 상승에 따른 수익성 둔화",
    ],
    bullCase: "필수소비 경기방어 특성과 디지털/자체브랜드 강화가 결합되면 이익 안정성과 현금흐름이 개선될 수 있습니다. 애널리스트 목표가 기준 8.7% 상승여력이 실현될 여지도 있습니다.",
    bearCase: "경쟁 심화와 비용 상승이 겹치면 낮은 마진 구조에서 이익이 빠르게 압박될 수 있습니다. 높은 배당성향과 레버리지가 지속될 경우 배당 성장 여력이 둔화될 가능성이 있습니다.",
    valuationComment: "현재 주가는 52주 밴드 중간대(55.2%)로 극단적 저평가 구간은 아닙니다. 방어주 특성을 감안하면 안전마진 확보를 위해 추가 조정 구간에서 분할 접근이 유리합니다.",
    recentDevelopments: [
      "비핵심 자산 정리 및 포트폴리오 재편으로 본업 효율화 기조를 유지",
      "디지털 채널·로열티 기반 판매 강화로 고객 락인 및 반복구매 확대 추진",
    ],
    overallRating: "관망",
    ratingReason: "방어적 사업구조는 매력적이지만, 낮은 배당수익률 대비 높은 배당성향·부채 부담을 더 확인할 필요가 있습니다.",
    targetBuyPrice: 62,
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // MCK — 맥케슨 (배당귀족주, 18년 연속)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    ticker: "MCK",
    analyzedAt: "2026-02-26 08:27 KST",
    businessSummary: "맥케슨은 미국 최대 의약품 유통사 중 하나로, 제약사와 병원·약국·의료기관을 연결하는 헬스케어 공급망 인프라를 운영합니다. 핵심은 대형 의약품 도매 유통과 온콜로지(종양) 특화 유통, 의료기관 대상 솔루션 제공이며, 대규모 물류 네트워크와 운영 효율이 경쟁력입니다. 낮은 마진 구조지만 회전율과 규모의 경제를 통해 안정적인 현금흐름을 창출하는 사업 모델입니다.",
    coreProducts: [
      "의약품 도매 유통(브랜드/제네릭)",
      "온콜로지 전문 유통 및 진료 네트워크 지원",
      "의료·약국 공급망/IT·운영 솔루션",
    ],
    geographicPresence: "미국 중심(대부분) · 캐나다 등 해외 비중은 상대적으로 제한적",
    dividendStreakYears: 18,
    dividendCAGR5yr: null,
    dividendCAGR10yr: null,
    recentDividendGrowth: "최근 3년 배당 CAGR 14.8%로, 낮은 배당성향을 바탕으로 배당 성장률은 견조한 편입니다.",
    dividendSafety: "strong",
    dividendSafetyReason: "배당성향 8.8%로 매우 낮아 이익 변동이 있어도 배당 유지·증가 여력이 큽니다.",
    moatTypes: [
      "switching_costs",
      "cost_advantage",
      "efficient_scale",
    ],
    moatStrength: "narrow",
    moatNarrative: "의약품 유통은 규제·운영 복잡도가 높아 대형 사업자 중심의 효율적 규모가 중요합니다. 맥케슨은 대규모 물류 인프라와 구매력으로 비용 우위를 확보하고, 병원·약국과의 장기 거래 관계에서 전환비용이 발생합니다. 다만 전형적인 초과이익형 산업은 아니어서 해자는 강하지만 구조적으로 마진이 낮습니다.",
    revenueGrowthTrend: "헬스케어 수요와 전문의약품 확대를 바탕으로 중장기적으로 완만한 성장 추세입니다.",
    marginTrend: "stable",
    debtLevel: "moderate",
    financialSummary: "유통업 특성상 이익률은 낮지만 매출 규모와 현금창출력은 견조한 편입니다. 배당성향이 매우 낮아 배당 안전성은 높고, 자본배치 측면에서는 배당보다 자사주 매입 기여도가 큰 구조입니다. 다만 고평가 구간에서는 밸류에이션 민감도가 커질 수 있습니다.",
    keyRisks: [
      "약가·리베이트·규제 변화로 인한 유통 마진 압박",
      "대형 고객/공급사 협상력 강화에 따른 계약 조건 악화",
      "주가가 52주 고점 부근이라 실적 둔화 시 밸류에이션 조정 리스크",
    ],
    bullCase: "의약품 유통 수요와 전문치료제 비중 확대가 지속되면 안정적 매출 성장과 운영 레버리지 개선이 가능합니다. 낮은 배당성향과 현금흐름을 바탕으로 배당 성장 및 주주환원 확대가 이어질 수 있습니다.",
    bearCase: "규제/약가 압박과 경쟁 심화로 마진이 추가 축소되면 이익 성장률이 둔화될 수 있습니다. 현재 주가가 고점권이라 작은 실적 미스에도 멀티플 디레이팅이 발생할 가능성이 있습니다.",
    valuationComment: "현재 주가는 52주 위치 97.7%로 고점권이며, 배당수익률(0.34%)이 5년 평균(0.55%)보다 낮고 애널리스트 상승여력도 1.8%에 그쳐 밸류 매력은 제한적입니다. 추격 매수보다 조정 시 분할 접근이 합리적이며, 배당수익률이 역사적 평균에 근접하는 구간이 상대적으로 유리합니다.",
    recentDevelopments: [
      "애널리스트 컨센서스는 buy이나 목표가 기준 기대수익률은 낮은 편",
      "저배당·고성장 배당주 성격이 강화되며 배당 성장률은 견조하게 유지",
    ],
    overallRating: "관망",
    ratingReason: "사업·배당 체력은 우수하지만 현재 가격이 고점권이라 신규 진입의 기대수익 대비 위험이 더 커 보입니다.",
    targetBuyPrice: 860,
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // BLK — 블랙락 (배당귀족주, 16년 연속)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    ticker: "BLK",
    analyzedAt: "2026-02-26 08:28 KST",
    businessSummary: "블랙락은 세계 최대 자산운용사로, ETF(iShares), 기관·개인 대상 투자 솔루션, 리스크 관리 플랫폼(Aladdin)을 중심으로 수익을 창출합니다. 운용자산(AUM) 규모와 글로벌 유통망을 바탕으로 수수료 기반의 안정적 현금흐름을 확보하고 있으며, 시장 상승기에는 AUM 증가에 따른 실적 레버리지가 크게 작동합니다.",
    coreProducts: [
      "iShares ETF",
      "기관·개인 자산운용 및 자문",
      "Aladdin 리스크/포트폴리오 기술 플랫폼",
    ],
    geographicPresence: "미국 중심의 매출 구조에 유럽·아시아 등 글로벌 고객 기반이 결합된 분포",
    dividendStreakYears: 16,
    dividendCAGR5yr: null,
    dividendCAGR10yr: null,
    recentDividendGrowth: "16년 연속 증배를 이어가고 있으나 최근 3년 배당 CAGR 2.2%로 배당 성장 속도는 완만한 편입니다.",
    dividendSafety: "moderate",
    dividendSafetyReason: "배당성향 59%는 관리 가능한 수준이지만, 자산운용 업황과 시장 변동성에 따라 이익 민감도가 존재합니다.",
    moatTypes: [
      "brand",
      "switching_costs",
      "network_effect",
      "intangible_assets",
      "efficient_scale",
    ],
    moatStrength: "wide",
    moatNarrative: "블랙락은 iShares 브랜드 파워와 대규모 운용자산에서 오는 규모의 경제로 강한 진입장벽을 보유합니다. 기관 고객은 Aladdin 및 통합 운용 프로세스에 대한 전환비용이 높아 고객 락인이 발생합니다. 글로벌 유통·상품 라인업·데이터 역량의 결합이 장기 경쟁우위를 강화합니다.",
    revenueGrowthTrend: "시장 상승과 순유입 구간에서 수수료 수익이 확대되는 구조로 중기적으로 우상향 추세입니다.",
    marginTrend: "stable",
    debtLevel: "moderate",
    financialSummary: "ROE 10.7%, PBR 3.06으로 자본효율은 양호하나 밸류에이션 프리미엄이 반영된 상태입니다. Forward PER 17.7은 Trailing PER 30.9 대비 부담이 완화된 모습이며, 이익 정상화 기대가 주가에 반영되고 있습니다. 금융업 특성상 부채지표 해석은 일반 제조업과 다르지만, 시장 사이클에 따른 실적 변동성은 감안이 필요합니다.",
    keyRisks: [
      "주식·채권 시장 조정 시 AUM 감소로 수수료 매출 동반 둔화",
      "ETF 수수료 경쟁 심화에 따른 수익성 압박",
      "규제 강화 및 특정 자산군 유출에 따른 성장 둔화",
    ],
    bullCase: "글로벌 자금이 저비용 ETF와 패시브 상품으로 지속 유입되면 AUM과 수수료 수익이 동반 성장할 수 있습니다. 기술 플랫폼(Aladdin) 확장이 병행되면 멀티플 정당화가 가능해집니다.",
    bearCase: "글로벌 증시 조정과 금리/경기 불확실성이 길어지면 운용보수 기반 실적이 둔화되고 밸류에이션 디레이팅이 발생할 수 있습니다. 배당 성장률이 낮은 구간이 지속되면 배당투자 매력도도 약해질 수 있습니다.",
    valuationComment: "현재 배당수익률(2.12%)이 5년 평균(2.33%)보다 낮고 52주 위치도 71.7%로 높은 편이라 배당 관점의 신규 매수 매력은 다소 제한적입니다. 다만 애널리스트 목표가 기준 상승여력은 존재하므로, 보다 유리한 진입은 수익률이 장기 평균 이상으로 회복되는 가격대에서 분할 접근이 적절합니다.",
    recentDevelopments: [
      "AI·인덱스·ETF 중심의 장기 자금 유입 기대가 실적 추정치에 반영",
      "애널리스트 컨센서스가 buy이며 목표가가 현 주가 대비 상방을 제시",
    ],
    overallRating: "관망",
    ratingReason: "질적으로 우수한 해자와 장기 성장성은 매력적이지만, 현재 배당수익률과 가격 위치를 감안하면 배당투자 기준에서는 진입 여유가 크지 않습니다.",
    targetBuyPrice: 980,
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // HD — 홈디포 (배당귀족주, 16년 연속)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    ticker: "HD",
    analyzedAt: "2026-02-26 08:28 KST",
    businessSummary: "홈디포(HD)는 북미 최대 주택개선(Home Improvement) 유통업체로, DIY 고객과 전문 시공업자(Pro) 모두를 대상으로 건자재·공구·인테리어 제품을 판매합니다. 오프라인 대형 매장과 디지털 채널, 공급망 네트워크를 결합해 주택 수리·리모델링 수요를 흡수하는 구조가 핵심입니다. 경기순환 업종이지만 주거 유지보수의 필수성 덕분에 수요 방어력도 일정 부분 보유합니다.",
    coreProducts: [
      "건자재·목재·배관/전기 자재",
      "공구·하드웨어 및 작업용 소모품",
      "주방·욕실·바닥재 등 리모델링 제품/설치 서비스",
    ],
    geographicPresence: "미국 중심(대부분) · 캐나다/멕시코 등 북미 일부",
    dividendStreakYears: 16,
    dividendCAGR5yr: null,
    dividendCAGR10yr: null,
    recentDividendGrowth: "최근 16년 연속 배당을 증액했으며, 3년 배당 CAGR 6.6%로 중단기 배당 성장세를 유지 중입니다.",
    dividendSafety: "moderate",
    dividendSafetyReason: "배당성향 64.7%는 감내 가능한 수준이지만, 높은 레버리지(D/E 510)와 금리 민감 업황을 고려하면 절대적 안전구간은 아닙니다.",
    moatTypes: [
      "brand",
      "cost_advantage",
      "efficient_scale",
      "switching_costs",
    ],
    moatStrength: "wide",
    moatNarrative: "홈디포는 강한 브랜드 인지도와 전국 단위 매장·물류 규모를 바탕으로 조달 및 운영 효율에서 우위를 확보하고 있습니다. 전문 시공업자 대상 재구매 구조와 원스톱 조달 편의성은 실질적 전환비용을 형성합니다. 대체가 쉽지 않은 북미 내 효율적 규모의 네트워크가 장기 경쟁력을 뒷받침합니다.",
    revenueGrowthTrend: "팬데믹 특수 이후 둔화 구간을 지나, 금리 안정 및 리모델링 수요 회복 시 완만한 재가속 가능성이 있는 흐름입니다.",
    marginTrend: "stable",
    debtLevel: "high",
    financialSummary: "ROE 145.5%는 공격적 자본구조(자사주매입·높은 부채 활용)의 영향이 큰 수치로 해석이 필요합니다. PER 26.4(선행 23.0)는 경기민감 유통주 대비 다소 프리미엄 구간입니다. 현금창출력은 견조하지만 레버리지 수준이 높아 금리·수요 충격 시 변동성 확대 가능성이 있습니다.",
    keyRisks: [
      "고금리 장기화에 따른 주택 거래·리모델링 수요 둔화",
      "높은 레버리지 구조로 인한 이자비용 및 밸류에이션 부담",
      "소비 둔화/원가 상승 시 마진 압박과 실적 변동성 확대",
    ],
    bullCase: "금리 하향 사이클과 주택 노후화에 따른 유지보수·리모델링 수요 회복이 맞물리면 Pro 매출 중심으로 이익 성장 재가속이 가능합니다. 이 경우 배당 성장과 주주환원 지속성이 재평가될 여지가 큽니다.",
    bearCase: "주택경기 회복이 지연되면 동일점포 매출 부진이 장기화되고, 높은 밸류에이션이 디레이팅될 수 있습니다. 부채 부담이 큰 환경에서 배당 성장률도 추가 둔화될 가능성이 있습니다.",
    valuationComment: "현재 배당수익률 2.42%는 5년 평균(2.33%) 대비 소폭 매력적이지만, PER 기준으로는 여전히 완전한 저평가로 보긴 어렵습니다. 52주 중립 구간(49%)과 목표가 대비 8.4% 업사이드를 감안하면 분할 접근이 유효하며, 배당수익률이 2.7~3.0%대로 확대되는 가격대가 더 안전마진이 큽니다.",
    recentDevelopments: [
      "애널리스트 컨센서스는 buy로 유지되며 목표가 $407로 제시됨",
      "주택개선 수요의 단기 둔화 국면에서도 배당 증액 기조를 이어가며 주주환원 의지를 확인",
    ],
    overallRating: "보유",
    ratingReason: "질 높은 해자와 배당 성장 이력은 강점이지만, 높은 레버리지와 밸류에이션 부담을 고려하면 신규 대량 매수보다는 보유·분할매수 전략이 적절합니다.",
    targetBuyPrice: 345,
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // MCO — 무디스 (배당귀족주, 16년 연속)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    ticker: "MCO",
    analyzedAt: "2026-02-26 08:29 KST",
    businessSummary: "무디스(MCO)는 신용평가(Moody’s Ratings)와 리스크·데이터·애널리틱스(Moody’s Analytics)를 통해 금융시장 인프라 역할을 하는 기업입니다. 채권 발행 시 필수적인 신용등급 제공과 규제·리스크 관리 솔루션을 결합해 높은 반복수익 구조를 보유하고 있습니다. 금리 사이클과 발행시장 환경에 따라 단기 실적 변동은 있지만, 장기적으로는 데이터·분석 수요 확대의 수혜를 받는 구조입니다.",
    coreProducts: [
      "기업·금융·국가 신용등급 평가 서비스",
      "리스크 관리/규제 대응 소프트웨어 및 데이터 솔루션",
      "경제·신용 리서치 및 애널리틱스 구독 서비스",
    ],
    geographicPresence: "미국 중심의 글로벌 사업 구조로, 북미 비중이 가장 크고 유럽·아시아 등 국제 매출이 의미 있게 분산된 형태",
    dividendStreakYears: 16,
    dividendCAGR5yr: null,
    dividendCAGR10yr: null,
    recentDividendGrowth: "최근 3년 배당 CAGR 10.3%로, 낮은 배당성향을 기반으로 두 자릿수 배당성장을 이어가는 흐름입니다.",
    dividendSafety: "strong",
    dividendSafetyReason: "배당성향 27.5%로 커버력이 높고 현금창출력이 우수해 배당 지속·증가 여력이 충분합니다.",
    moatTypes: [
      "brand",
      "switching_costs",
      "intangible_assets",
      "efficient_scale",
    ],
    moatStrength: "wide",
    moatNarrative: "신용평가 시장은 규제·신뢰·트랙레코드가 핵심이라 신규 진입이 매우 어렵고 기존 사업자의 지위가 견고합니다. 발행자와 투자자 모두가 기존 평가체계에 깊게 연결돼 있어 전환비용이 높습니다. 무디스는 브랜드 신뢰와 데이터 자산, 규제상 지위가 결합된 강한 경제적 해자를 보유합니다.",
    revenueGrowthTrend: "경기·금리 영향으로 변동성은 있으나 중장기적으로는 데이터/애널리틱스 중심의 완만한 성장 추세입니다.",
    marginTrend: "stable",
    debtLevel: "high",
    financialSummary: "ROE 62.1%는 매우 높지만, 이는 자본효율성과 함께 높은 레버리지 영향도 반영합니다. D/E 176.8로 부채 부담은 낮지 않아 금리·크레딧 사이클 점검이 필요합니다. 다만 배당성향 27.5%와 견조한 이익창출력은 배당 안정성 측면에서 긍정적입니다.",
    keyRisks: [
      "금리 급등·발행시장 위축 시 신용평가 수수료 매출 둔화",
      "규제 강화·평가 신뢰 이슈 발생 시 평판 및 수익성 훼손",
      "높은 밸류에이션 구간에서 실적 미스 발생 시 멀티플 조정 리스크",
    ],
    bullCase: "금리 안정과 회사채 발행 회복, 구조화금융 정상화가 동반되면 이익 레버리지가 크게 나타날 수 있습니다. 애널리틱스 사업의 구독형 성장까지 더해지면 프리미엄 밸류에이션이 유지될 가능성이 높습니다.",
    bearCase: "발행시장 침체가 장기화되거나 규제·소송 리스크가 부각되면 수익 모멘텀이 약화될 수 있습니다. 현재 높은 P/E 구간에서는 작은 실적 둔화도 주가 조정 폭을 키울 수 있습니다.",
    valuationComment: "현재 주가는 Trailing PER 33.9, Forward PER 24.8로 고품질 프랜차이즈 프리미엄이 반영된 구간입니다. 배당수익률 0.91%가 5년 평균(0.79%)보다 높아 과열은 다소 완화됐지만, 배당 투자 관점의 안전마진은 충분하지 않아 분할 접근이 적절합니다.",
    recentDevelopments: [
      "금리 및 크레딧 사이클 변화에 따라 채권 발행 환경이 개선되며 등급평가 수요 정상화 기대가 커짐",
      "데이터·애널리틱스 부문의 반복매출 확대와 AI/리스크관리 수요 증가가 중장기 성장 포인트로 부각",
    ],
    overallRating: "관망",
    ratingReason: "사업 해자와 배당 안정성은 매우 우수하지만 현재 밸류에이션이 높아 배당 투자자 기준 추가 매수는 가격 조정 시점이 유리합니다.",
    targetBuyPrice: 430,
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // MKTX — 마켓엑세스 홀딩스 (배당귀족주, 16년 연속)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    ticker: "MKTX",
    analyzedAt: "2026-02-26 08:29 KST",
    businessSummary: "마켓엑세스 홀딩스(MKTX)는 기관투자자 중심의 전자채권 거래 플랫폼을 운영하며, 회사채·국채·신용상품 등의 유동성 매칭과 체결 인프라를 제공합니다. 거래 데이터, 알고리즘 도구, 사전·사후 거래 솔루션을 결합해 채권 거래의 디지털 전환 수혜를 받는 구조입니다. 핵심 수익원은 거래량 기반 수수료와 데이터/서비스 매출입니다.",
    coreProducts: [
      "전자채권 거래 플랫폼(Open Trading 포함)",
      "시장 데이터 및 분석 서비스",
      "거래 워크플로우/연결성 솔루션",
    ],
    geographicPresence: "미국 중심의 글로벌 사업 구조(북미 비중이 높고 유럽·아시아로 확장)",
    dividendStreakYears: 16,
    dividendCAGR5yr: null,
    dividendCAGR10yr: null,
    recentDividendGrowth: "최근 3년 배당 CAGR 10.9%로, 중고한 자릿수~두 자릿수 배당 성장 흐름을 유지 중입니다.",
    dividendSafety: "strong",
    dividendSafetyReason: "배당성향 45.8%와 ROE 19.4% 조합으로 이익 대비 배당 커버력이 양호합니다.",
    moatTypes: [
      "network_effect",
      "switching_costs",
      "intangible_assets",
      "efficient_scale",
    ],
    moatStrength: "wide",
    moatNarrative: "기관 채권 거래는 참여자 밀도와 호가 깊이가 핵심이라 네트워크 효과가 작동합니다. 기존 거래 워크플로우와의 통합, 데이터 축적, 규제/신뢰 기반 운영 역량이 전환비용을 높입니다. 대형 전자거래 인프라는 규모가 중요해 효율적 규모의 진입장벽도 존재합니다.",
    revenueGrowthTrend: "채권 전자화 확대의 구조적 수혜 속에 거래환경 변동을 동반한 중장기 우상향 추세입니다.",
    marginTrend: "stable",
    debtLevel: "moderate",
    financialSummary: "ROE 19.4%로 수익성 체력은 견조하며, 배당성향 45.8%는 배당과 재투자 간 균형 구간입니다. Trailing PER 27.2는 프리미엄이 남아 있으나 Forward PER 19.9로 이익 개선 기대가 반영됩니다. D/E 24.6 수준을 감안하면 과도한 재무 레버리지 부담은 제한적입니다.",
    keyRisks: [
      "채권시장 거래대금 둔화 시 수수료 매출 민감도 확대",
      "대형 거래소/플랫폼과의 경쟁 심화로 수수료 압박 가능성",
      "금리·신용스프레드 급변 시 거래 믹스 악화 및 실적 변동성",
    ],
    bullCase: "전자채권 침투율 상승과 기관 유동성 집중이 이어지면 거래량·데이터 매출이 동반 성장할 수 있습니다. Forward PER 디레이팅 없이 이익이 개선되면 배당 성장과 주가 재평가가 동시에 가능해집니다.",
    bearCase: "거래활동 둔화와 경쟁 심화가 겹치면 수수료 단가와 마진이 동시에 압박받을 수 있습니다. 이 경우 현재의 프리미엄 밸류에이션이 축소되며 주가 회복이 지연될 수 있습니다.",
    valuationComment: "현재가는 52주 밴드 하단권(31.7%)이고 배당수익률(1.72%)이 5년 평균(1.11%) 대비 높아 밸류 부담이 일부 완화됐습니다. 다만 Trailing PER 27.2는 여전히 절대적으로는 비싸 완전한 저평가 구간으로 보긴 어렵습니다. 분할 접근 기준으로는 170달러 내외 이하에서 매수 매력이 더 높습니다.",
    recentDevelopments: [
      "애널리스트 컨센서스는 buy, 목표가 192.90달러로 약 6.9% 상승여력 제시",
      "배당은 16년 연속 증액 기조를 유지하며 주주환원 신뢰를 지속",
    ],
    overallRating: "관심",
    ratingReason: "질 높은 해자와 배당 성장성은 매력적이지만, 밸류 프리미엄을 감안해 가격대별 분할 접근이 유리합니다.",
    targetBuyPrice: 170,
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // UNH — 유나이티드헬스 (배당귀족주, 16년 연속)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    ticker: "UNH",
    analyzedAt: "2026-02-26 08:30 KST",
    businessSummary: "유나이티드헬스(UNH)는 미국 최대 민간 건강보험사로, UnitedHealthcare(보험)와 Optum(약국혜택관리·의료서비스·헬스케어 IT) 양대 축으로 운영됩니다. 보험 인수와 의료서비스를 결합한 통합 모델로 가입자 기반, 진료 데이터, 비용관리 역량을 동시에 확보해 수익성과 현금흐름을 키우는 구조입니다.",
    coreProducts: [
      "상업·정부 프로그램 건강보험(UnitedHealthcare)",
      "약국혜택관리(PBM) 및 처방 연계 서비스(Optum Rx)",
      "의료 제공·헬스케어 데이터/기술 서비스(Optum Health/Insight)",
    ],
    geographicPresence: "미국 중심(대부분) · 국제 비중은 제한적",
    dividendStreakYears: 16,
    dividendCAGR5yr: null,
    dividendCAGR10yr: null,
    recentDividendGrowth: "최근 3년 배당 CAGR 10.9%로 두 자릿수 배당 성장 흐름을 유지했습니다.",
    dividendSafety: "moderate",
    dividendSafetyReason: "배당성향 66%는 감내 가능한 수준이지만 규제·의료비 추세에 따라 이익 변동성이 생길 수 있어 보수적으로 moderate가 적절합니다.",
    moatTypes: [
      "switching_costs",
      "cost_advantage",
      "efficient_scale",
      "intangible_assets",
    ],
    moatStrength: "wide",
    moatNarrative: "대규모 가입자 풀과 공급자 네트워크, 데이터 기반 언더라이팅/청구관리 역량이 결합되어 규모의 경제가 크게 작동합니다. 보험과 의료서비스(Optum) 통합 구조는 비용 통제와 교차판매에 유리해 경쟁사가 단기간에 복제하기 어렵습니다. 규제 산업 특성상 운영 노하우와 인허가·계약 관계도 진입장벽으로 작용합니다.",
    revenueGrowthTrend: "중장기적으로 보험 가입자 기반과 Optum 확장에 힘입어 우상향 추세입니다.",
    marginTrend: "stable",
    debtLevel: "high",
    financialSummary: "ROE 12.5%로 자본효율은 양호한 편이며, Forward PER 14.2는 이익 기준 밸류 부담이 완화된 구간으로 해석됩니다. 다만 D/E 77.1로 레버리지는 낮지 않아 금리·규제 환경 변화 시 재무 유연성 점검이 필요합니다. 배당수익률 3.23%가 5년 평균 1.56%를 크게 상회해 시장의 리스크 프라이싱이 반영된 상태입니다.",
    keyRisks: [
      "메디케어/메디케이드 수가 및 규제 변경 리스크",
      "의료비(메디컬 코스트) 상승으로 인한 손해율 압박",
      "정책·사법 이슈 및 대형 운영/IT 사고 재발 가능성",
    ],
    bullCase: "의료비 상승이 안정화되고 Optum의 고마진 비중 확대가 이어지면 이익 회복과 멀티플 정상화가 동시에 가능할 수 있습니다. 현재 높은 배당수익률 구간에서 배당 성장 지속 시 총주주수익률이 개선될 여지가 큽니다.",
    bearCase: "의료비 인플레이션과 규제 압력이 동반되면 마진 방어가 어려워지고 배당 성장률이 둔화될 수 있습니다. 정책/소송/운영 리스크가 장기화되면 밸류에이션 디스카운트가 지속될 가능성이 있습니다.",
    valuationComment: "현재가는 52주 하단(13.3%) 근처이고 배당수익률이 장기 평균 대비 높아 밸류에이션 매력은 있는 편입니다. 다만 규제·의료비 불확실성을 감안해 분할매수 관점이 적절하며, 300달러 이하 구간은 위험대비 보상 관점에서 상대적으로 우호적인 매수 영역으로 판단됩니다.",
    recentDevelopments: [
      "메디케어 어드밴티지 수익성에 영향을 주는 수가·리스크조정 정책 변화가 지속적으로 부각",
      "비용 추세와 규제/사법 이슈를 둘러싼 시장 경계로 주가 변동성이 확대된 상태",
    ],
    overallRating: "관심",
    ratingReason: "저점권 밸류와 높은 배당수익률은 매력적이지만 규제·의료비 변수로 단기 불확실성이 커 적극 매수보다 선별적 접근이 유리합니다.",
    targetBuyPrice: 300,
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // AVGO — 브로드컴 (배당귀족주, 15년 연속)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    ticker: "AVGO",
    analyzedAt: "2026-02-26 08:30 KST",
    businessSummary: "브로드컴은 데이터센터·클라우드·통신 인프라에 들어가는 반도체(네트워킹, 커스텀 AI 가속, 브로드밴드, 스토리지)와 엔터프라이즈 소프트웨어를 함께 운영하는 대형 기술 기업입니다. 최근에는 VMware 인수를 통해 반도체 중심 포트폴리오에 인프라 소프트웨어 구독 매출을 결합하며 현금흐름 안정성을 높이고 있습니다. AI 데이터센터 투자 확대의 직접적인 수혜 구간에 위치해 있습니다.",
    coreProducts: [
      "AI/데이터센터 네트워킹 칩 및 커스텀 가속기",
      "무선·브로드밴드·스토리지 반도체",
      "VMware 기반 인프라 소프트웨어/가상화·클라우드 솔루션",
    ],
    geographicPresence: "미국 중심의 하이퍼스케일 고객 비중이 높고, 유럽·아시아 대형 통신/엔터프라이즈 고객으로 글로벌 매출이 분산된 구조",
    dividendStreakYears: 15,
    dividendCAGR5yr: null,
    dividendCAGR10yr: null,
    recentDividendGrowth: "최근 3년 배당 CAGR 12.7%로 두 자릿수 배당 성장세를 유지했으나, 현재 배당수익률은 과거 평균 대비 크게 낮아졌습니다.",
    dividendSafety: "moderate",
    dividendSafetyReason: "배당성향 49.5%와 높은 수익성(ROE 31.1%)은 긍정적이지만, D/E 166.0의 레버리지는 금리·경기 변동 시 부담 요인입니다.",
    moatTypes: [
      "switching_costs",
      "intangible_assets",
      "cost_advantage",
      "efficient_scale",
    ],
    moatStrength: "wide",
    moatNarrative: "브로드컴은 핵심 인프라 칩에서 설계 복잡도와 고객 인증 주기가 길어 교체 비용이 높습니다. 대형 고객 맞춤형 설계 역량과 규모의 경제는 원가·공급 안정성 측면에서 경쟁우위를 강화합니다. 소프트웨어(VMware) 결합은 고객 락인과 반복 매출을 키워 해자를 더 넓히는 방향입니다.",
    revenueGrowthTrend: "AI 인프라 수요와 소프트웨어 통합 효과로 중기적으로 우상향 성장 추세입니다.",
    marginTrend: "expanding",
    debtLevel: "high",
    financialSummary: "수익성은 매우 우수하고 배당성향도 통제 가능한 범위에 있어 배당 지속 가능성 자체는 양호한 편입니다. 다만 높은 부채비율은 실적 변동이나 금리 환경 악화 시 밸류에이션 변동성을 키울 수 있습니다. 반도체+소프트웨어 결합으로 현금흐름 질을 개선하는지가 핵심 점검 포인트입니다.",
    keyRisks: [
      "AI CAPEX 사이클 둔화 시 고성장 기대치 조정 리스크",
      "대형 고객 의존도 및 주문 변동성",
      "높은 레버리지와 통합(인수) 실행 리스크",
    ],
    bullCase: "AI 네트워킹·커스텀 반도체 수요가 예상보다 강하게 지속되고 VMware 시너지로 반복 매출 비중이 확대되면 이익과 멀티플이 동반 상향될 수 있습니다. 이 경우 애널리스트 목표가 수준 이상의 재평가도 가능합니다.",
    bearCase: "AI 투자 사이클이 둔화되거나 고객 CAPEX가 지연되면 고밸류에이션 구간에서 주가 조정 폭이 커질 수 있습니다. 부채 부담이 재무 유연성을 제한하면 배당 성장률도 점진적으로 낮아질 수 있습니다.",
    valuationComment: "현재 배당수익률(0.80%)이 5년 평균(2.02%) 대비 크게 낮아 배당주 관점에서는 비싸게 거래되는 구간입니다. Forward PER 22.9는 성장 프리미엄을 반영한 수준으로, 분할매수는 가능하나 본격 매수는 수익률/밸류에이션이 더 정상화되는 가격대가 유리합니다.",
    recentDevelopments: [
      "VMware 인수 이후 포트폴리오 재편 및 소프트웨어 사업 효율화 진행",
      "AI 데이터센터 네트워킹/커스텀 반도체 수요 확대 기대가 실적 모멘텀의 핵심",
    ],
    overallRating: "관망",
    ratingReason: "사업 경쟁력은 매우 강하지만 현재 가격은 배당·밸류에이션 기준으로 매력도가 낮아 추격매수보다는 조정 대기 전략이 합리적입니다.",
    targetBuyPrice: 280,
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // HPQ — 에이치피 (배당귀족주, 15년 연속)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    ticker: "HPQ",
    analyzedAt: "2026-02-26 08:30 KST",
    businessSummary: "HP는 개인용 PC와 프린터를 중심으로 하드웨어, 소모품, 관련 솔루션을 제공하는 글로벌 기술 기업입니다. 매출은 PC 수요 사이클과 프린팅 소모품의 반복 매출 구조가 함께 작동하는 형태이며, 기업·공공·소비자 채널을 모두 보유하고 있습니다.",
    coreProducts: [
      "개인용 PC 및 워크스테이션",
      "프린터 하드웨어",
      "잉크·토너 등 프린팅 소모품 및 관리 솔루션",
    ],
    geographicPresence: "미국 중심의 선진국 비중이 크고, 유럽·아시아 등 글로벌 기업/소비자 시장에 분산된 매출 구조",
    dividendStreakYears: 15,
    dividendCAGR5yr: null,
    dividendCAGR10yr: null,
    recentDividendGrowth: "최근 3년 배당 CAGR 4.8%로 완만한 증배 기조를 유지하고 있습니다.",
    dividendSafety: "moderate",
    dividendSafetyReason: "배당성향 43.7%는 무리한 수준이 아니지만, 하드웨어 경기 민감 업종 특성상 이익 변동성은 점검이 필요합니다.",
    moatTypes: [
      "brand",
      "cost_advantage",
      "switching_costs",
      "intangible_assets",
    ],
    moatStrength: "narrow",
    moatNarrative: "HP는 오랜 브랜드 인지도와 글로벌 유통·조달 규모에서 오는 비용 우위를 보유합니다. 프린팅 부문은 설치 기반과 소모품 생태계로 인해 일정 수준의 전환비용이 존재합니다. 다만 기술 하드웨어 시장의 경쟁 강도가 높아 해자는 넓기보다 제한적인 편입니다.",
    revenueGrowthTrend: "성숙 산업 특성상 구조적 고성장보다는 경기·교체수요에 따른 박스권 흐름 가능성이 큽니다.",
    marginTrend: "stable",
    debtLevel: "moderate",
    financialSummary: "Trailing PER 6.9, Forward PER 6.0으로 밸류에이션은 역사적 평균 대비 보수적으로 보입니다. 배당수익률 6.59%가 5년 평균 3.38%를 크게 상회해 주가에 경기 둔화 우려가 반영된 상태로 해석됩니다. 52주 위치 3.7%로 가격 부담은 낮지만, 실적 민감도와 재무 레버리지 변수는 함께 확인해야 합니다.",
    keyRisks: [
      "PC·프린터 수요 둔화 시 매출 및 현금흐름 약화 가능성",
      "가격 경쟁 심화에 따른 마진 압박",
      "하드웨어 사이클과 기업 IT 지출 축소에 따른 실적 변동성",
    ],
    bullCase: "저평가 구간에서 수요 정상화와 비용 통제가 동반되면 이익 회복과 멀티플 리레이팅이 가능합니다. 높은 배당수익률이 총수익 방어에 기여할 수 있습니다.",
    bearCase: "IT 수요 부진이 장기화되면 배당 성장 여력이 둔화되고, 밸류에이션 할인 상태가 장기 고착될 수 있습니다. 경쟁 심화로 ASP와 수익성이 동시에 압박받을 위험이 있습니다.",
    valuationComment: "현재 주가는 저PER·고배당 관점에서 할인 영역으로 판단됩니다. 다만 업황 변동성을 감안해 분할 접근이 적절하며, 17달러 안팎 이하에서 위험대비 기대수익이 더 좋아지는 구간으로 봅니다.",
    recentDevelopments: [
      "주가가 52주 레인지 하단(위치 3.7%)에 근접해 가치주 성격이 강화된 상태",
      "애널리스트 컨센서스는 hold이며 목표가 20.77달러로 제한적 상방(14.1%) 제시",
    ],
    overallRating: "관심",
    ratingReason: "배당 매력과 저평가 신호는 강하지만 업황 민감도가 커서 공격적 매수보다 가격 분할 접근이 유리합니다.",
    targetBuyPrice: 17,
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // LFUS — 리틀퓨즈 (배당귀족주, 15년 연속)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    ticker: "LFUS",
    analyzedAt: "2026-02-26 08:31 KST",
    businessSummary: "리틀퓨즈(Littelfuse)는 회로 보호, 전력 제어, 센싱 솔루션을 제공하는 산업·전자 부품 기업으로 자동차, 산업장비, 전자기기 고객에 공급합니다. 핵심은 전기/전자 시스템의 안전성·신뢰성을 높이는 고신뢰 부품 포트폴리오이며, 자동차 전장화와 산업 자동화 수요의 수혜를 받는 구조입니다.",
    coreProducts: [
      "회로 보호 소자(퓨즈·TVS 다이오드 등)",
      "전력 반도체·전력 제어 모듈",
      "센서 및 스위치 솔루션",
    ],
    geographicPresence: "미국·유럽·아시아에 생산/판매 네트워크를 보유한 글로벌 매출 구조(미주 비중이 상대적으로 크고 EMEA·아시아가 분산 기여)",
    dividendStreakYears: 15,
    dividendCAGR5yr: null,
    dividendCAGR10yr: null,
    recentDividendGrowth: "최근 3년 배당 CAGR 17.3%로 배당 성장 속도는 빠르지만, 현재 배당수익률은 5년 평균(0.96%)보다 낮은 0.81%입니다.",
    dividendSafety: "moderate",
    dividendSafetyReason: "배당성향 60%는 관리 가능한 수준이지만 경기민감 업황과 낮은 현재 수익률을 감안하면 안전성은 보통 수준입니다.",
    moatTypes: [
      "switching_costs",
      "intangible_assets",
      "cost_advantage",
    ],
    moatStrength: "narrow",
    moatNarrative: "고객의 인증·설계 채택(Design-in) 이후 부품 교체가 쉽지 않아 전환비용 기반의 방어력이 있습니다. 또한 신뢰성 인증, 품질 레퍼런스, 응용 노하우가 무형자산 역할을 하며 일부 규모의 경제도 작동합니다. 다만 완전한 독점 구조는 아니어서 해자는 협소한 편입니다.",
    revenueGrowthTrend: "중장기적으로 전장화·산업 자동화 수혜가 있으나 단기 실적은 경기와 고객 재고조정 영향으로 변동성이 존재합니다.",
    marginTrend: "stable",
    debtLevel: "moderate",
    financialSummary: "PBR 3.87, Forward PER 25.1로 밸류에이션 부담이 있는 구간입니다. D/E 36.5는 과도하지 않지만 완전히 보수적인 재무구조로 보기도 어렵습니다. 배당은 성장성이 좋으나 현재 주가가 52주 고점권(99.4%)이라 기대수익률 관리가 중요합니다.",
    keyRisks: [
      "자동차·산업 경기 둔화 시 수요 및 가동률 하락",
      "고점권 밸류에이션 부담에 따른 멀티플 조정 리스크",
      "원가·공급망·환율 변동으로 인한 수익성 압박",
    ],
    bullCase: "전장화, 전력전자 고도화, 산업 자동화 확대로 고부가 제품 비중이 높아지면 이익 성장과 배당 증가가 동시에 가능해집니다. 이 경우 프리미엄 밸류에이션이 정당화될 수 있습니다.",
    bearCase: "경기 둔화와 고객 재고조정이 길어지면 매출·마진이 동반 둔화되고 고PER 구간에서 주가 조정이 확대될 수 있습니다. 배당 성장률도 과거 대비 둔화될 가능성이 있습니다.",
    valuationComment: "현재 주가는 52주 고점권이며 애널리스트 목표가($353.60)보다 높은 수준으로 단기 기대수익률은 제한적입니다. 배당수익률도 5년 평균 대비 낮아, 보수적으로는 320~340달러 구간 분할 접근이 유리합니다.",
    recentDevelopments: [
      "자동차 전장·산업 전력전자 중심의 제품 믹스 고도화 지속",
      "주가가 고점권에 근접하며 밸류에이션 부담 논리 확대",
    ],
    overallRating: "관망",
    ratingReason: "사업 경쟁력과 배당 성장성은 긍정적이지만 현재 가격이 고점권·저수익률 구간이라 신규 진입 매력은 낮습니다.",
    targetBuyPrice: 330,
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // POOL — POOL CORP (배당귀족주, 15년 연속)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    ticker: "POOL",
    analyzedAt: "2026-02-26 08:31 KST",
    businessSummary: "POOL CORP는 수영장 관련 자재·장비·화학제품을 유통하는 북미 최대 전문 디스트리뷰터로, 건설·리모델링·유지보수 수요를 모두 커버합니다. 자체 유통망과 광범위한 고객 접점을 기반으로 전문 시공업체와 서비스 업체에 빠른 공급과 재고 가용성을 제공하는 것이 핵심 경쟁력입니다.",
    coreProducts: [
      "수영장 유지보수 화학제품",
      "수영장 장비(펌프·필터·히터 등)",
      "야외생활/관개 관련 제품 유통",
    ],
    geographicPresence: "미국 중심(대부분) · 일부 국제(유럽/호주 등)로 구성된 북미 편중 구조",
    dividendStreakYears: 15,
    dividendCAGR5yr: null,
    dividendCAGR10yr: null,
    recentDividendGrowth: "최근 3년 배당 CAGR 9.2%로 한 자릿수 후반~두 자릿수에 가까운 배당 성장 흐름을 유지 중입니다.",
    dividendSafety: "moderate",
    dividendSafetyReason: "배당성향 44.7%와 높은 ROE는 우호적이지만, 경기민감 업종 특성과 높은 레버리지(D/E 129.5)로 안전성은 중간 수준입니다.",
    moatTypes: [
      "cost_advantage",
      "efficient_scale",
      "switching_costs",
    ],
    moatStrength: "narrow",
    moatNarrative: "전국 단위 유통 인프라와 구매 규모를 통한 원가 경쟁력이 존재합니다. 전문 고객 입장에서는 납기·재고 신뢰성이 중요해 거래처 전환 비용이 발생합니다. 다만 제품 자체 차별화보다 유통 실행력이 중심이라 해자는 넓기보다 좁은 편입니다.",
    revenueGrowthTrend: "팬데믹 이후 고성장 구간을 지나 현재는 주택·리모델링 경기 영향으로 둔화된 성장/조정 국면입니다.",
    marginTrend: "contracting",
    debtLevel: "high",
    financialSummary: "ROE 33.1%로 자본효율은 매우 우수하지만 PBR 6.66이 이를 일부 선반영하고 있습니다. 배당수익률 2.30%는 5년 평균 1.14% 대비 높아져 밸류에이션 부담이 완화된 신호입니다. 다만 높은 부채비율과 경기순환 민감도는 실적 변동성을 키울 수 있습니다.",
    keyRisks: [
      "주택 경기 둔화 및 고금리로 인한 신규 설치·리모델링 수요 감소",
      "높은 레버리지로 인한 금리/신용환경 변화 민감도 확대",
      "기상 요인·계절성 및 소비 둔화에 따른 재고/마진 압박",
    ],
    bullCase: "현재 주가가 52주 하단권(2.5%)에 위치하고 배당수익률이 과거 평균 대비 높아 리레이팅 여지가 있습니다. 수요 정상화 시 유통 레버리지로 이익 회복 속도가 빨라질 수 있습니다.",
    bearCase: "고금리 장기화와 소비 둔화가 겹치면 수영장 관련 지출이 더 위축되어 매출·마진이 동반 압박될 수 있습니다. 부채 부담이 높은 상태에서 실적 회복이 지연되면 밸류에이션 매력도 제한될 수 있습니다.",
    valuationComment: "Trailing PER 19.6, Forward PER 18.1은 과열 구간은 아니며, 고점 대비 조정과 높은 배당수익률을 감안하면 중기 분할매수 관점이 유효합니다. 다만 경기민감·부채 리스크를 반영해 보수적으로 접근하면 200~215달러 구간이 상대적으로 매력적인 매수 범위입니다.",
    recentDevelopments: [
      "주가가 52주 밴드 하단권에 머물며 업황 둔화 우려를 상당 부분 반영",
      "애널리스트 평균 목표가 263.70달러로 약 22.8% 상승여력이 제시되고 투자의견은 buy 우위",
    ],
    overallRating: "관심",
    ratingReason: "밸류에이션과 배당 매력은 개선됐지만 경기순환·레버리지 리스크가 남아 있어 관찰과 분할 접근이 적절합니다.",
    targetBuyPrice: 210,
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // SBUX — 스타벅스 (배당귀족주, 15년 연속)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    ticker: "SBUX",
    analyzedAt: "2026-02-26 08:32 KST",
    businessSummary: "스타벅스는 글로벌 프리미엄 커피 체인으로, 직영점과 라이선스 매장을 통해 음료·푸드·원두를 판매합니다. 핵심 수익원은 매장 판매와 로열티 기반 라이선스 모델이며, 디지털 멤버십과 모바일 주문 생태계를 통해 재구매율을 높이고 있습니다.",
    coreProducts: [
      "커피·에스프레소 음료",
      "푸드/베이커리",
      "스타벅스 리워드·모바일 주문",
    ],
    geographicPresence: "북미 중심(미국 비중이 가장 큼) · 중국 포함 국제 시장 확장",
    dividendStreakYears: 15,
    dividendCAGR5yr: null,
    dividendCAGR10yr: null,
    recentDividendGrowth: "최근 15년 연속 증배를 이어가고 있으나, 높은 배당성향으로 추가 고성장 여력은 둔화 가능성이 있습니다.",
    dividendSafety: "watch",
    dividendSafetyReason: "배당성향 204.2%는 이익 대비 배당 부담이 높다는 신호로, 실적 회복 없이는 배당 안전마진이 얇습니다.",
    moatTypes: [
      "brand",
      "network_effect",
      "intangible_assets",
      "efficient_scale",
    ],
    moatStrength: "narrow",
    moatNarrative: "스타벅스는 강력한 글로벌 브랜드와 프리미엄 포지셔닝으로 가격 결정력을 일부 확보하고 있습니다. 리워드 회원·모바일 주문·선불 충전 기반의 디지털 생태계가 반복 구매를 유도해 운영 효율을 높입니다. 다만 외식/음료 업계 경쟁이 치열해 해자는 견고하지만 절대적이지는 않습니다.",
    revenueGrowthTrend: "중장기적으로 완만한 성장 기조이나, 중국 경기·소비 둔화와 미국 트래픽 변동에 민감합니다.",
    marginTrend: "stable",
    debtLevel: "high",
    financialSummary: "현재 PER(TTM) 81.6, Forward PER 33.1로 이익 대비 밸류 부담이 존재합니다. 배당수익률은 5년 평균 대비 높은 2.57%로 소폭 저평가 신호가 있으나, 배당성향이 매우 높아 배당의 질은 점검이 필요합니다. 밸런스시트 지표(PBR/ROE/D/E) 공란을 감안하면 보수적 접근이 적절합니다.",
    keyRisks: [
      "고배당성향 지속에 따른 배당/자사주 정책 조정 리스크",
      "미국·중국 소비 둔화 및 객수 감소",
      "원재료·인건비 상승에 따른 마진 압박",
    ],
    bullCase: "디지털 주문·리워드 락인 효과와 운영 효율화가 재가속되면 이익 회복과 밸류 정상화가 가능합니다. 글로벌 점포 확장과 메뉴 믹스 개선이 동반되면 배당 성장도 재안정화될 수 있습니다.",
    bearCase: "트래픽 둔화와 비용 인플레이션이 겹치면 이익 개선이 지연되어 높은 멀티플이 추가로 압축될 수 있습니다. 배당성향 부담이 지속되면 증배 속도 둔화 또는 주주환원 정책 조정 가능성이 커집니다.",
    valuationComment: "현재가는 애널리스트 목표가 대비 상승여력이 2.3%에 불과해 단기 기대수익은 제한적입니다. 배당 기준으로는 5년 평균 수익률 대비 소폭 매력적이지만, 이익 대비 배당 부담을 감안하면 분할 접근이 유효하며 보다 안전한 매수 구간은 90달러 전후로 판단됩니다.",
    recentDevelopments: [
      "애널리스트 컨센서스는 buy이나 목표가 괴리가 작아 모멘텀은 제한적",
      "배당수익률이 5년 평균(2.23%)을 상회해 상대가치 매력은 일부 개선",
    ],
    overallRating: "관망",
    ratingReason: "브랜드 해자와 장기 증배 이력은 긍정적이지만, 높은 배당성향과 밸류 부담으로 신규 비중 확대는 가격 조정 확인 후가 유리합니다.",
    targetBuyPrice: 90,
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // TSCO — 트랙터 서플라이 (배당귀족주, 15년 연속)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    ticker: "TSCO",
    analyzedAt: "2026-02-26 08:32 KST",
    businessSummary: "트랙터 서플라이는 미국 농촌·준도시 지역을 중심으로 농장용품, 반려동물 사료, 가정·정원·작업복 등 생활 밀착형 상품을 판매하는 전문 리테일 기업입니다. 대형 도시보다는 로컬 수요가 강한 상권에서 소형 박스형 매장과 옴니채널 운영을 결합해 안정적인 반복 구매를 유도합니다. 경기순환 섹터에 속하지만 필수 소모품 비중이 높아 완전한 경기민감주보다는 방어적 성격도 일부 갖습니다.",
    coreProducts: [
      "동물 사료·반려동물 용품",
      "농장·목장 운영용 소모품 및 장비",
      "정원·계절·작업복/공구 중심의 라이프스타일 상품",
    ],
    geographicPresence: "미국 중심 내수 사업(사실상 미국 비중 절대적, 국제 비중 미미)",
    dividendStreakYears: 15,
    dividendCAGR5yr: null,
    dividendCAGR10yr: null,
    recentDividendGrowth: "최근 3년 배당 CAGR 7.7%로 중한 자릿수의 배당 성장세를 유지 중입니다.",
    dividendSafety: "moderate",
    dividendSafetyReason: "배당성향 44.7%는 관리 가능한 수준이지만, 높은 부채비율(D/E 230.2)과 경기민감 노출을 감안하면 최상급 안전성으로 보긴 어렵습니다.",
    moatTypes: [
      "brand",
      "cost_advantage",
      "efficient_scale",
    ],
    moatStrength: "narrow",
    moatNarrative: "TSCO는 농촌 상권 특화 MD와 브랜드 인지도로 반복 방문을 유도하는 유통 해자를 보유합니다. 지역 단위 물류·소싱 효율과 규모의 경제가 비용 경쟁력에 기여하지만, 대형 유통/이커머스와의 가격 경쟁이 상시 존재해 해자는 협소한 편입니다. 즉, 완전 독점형이 아니라 실행력에 따라 유지되는 운영형 해자에 가깝습니다.",
    revenueGrowthTrend: "중장기적으로 완만한 성장 기조이나 소비 둔화 구간에서는 성장률 변동성이 나타나는 흐름입니다.",
    marginTrend: "stable",
    debtLevel: "high",
    financialSummary: "ROE 45.2%로 자본 효율성은 매우 높지만, PBR 10.57과 높은 레버리지가 수익성 지표를 증폭시킨 측면을 함께 봐야 합니다. Trailing PER 25.1, Forward PER 21.5로 이익 성장 기대가 일부 반영되어 있으며 절대적으로는 저평가 구간이라 보기 어렵습니다. 다만 배당수익률 1.80%가 5년 평균 1.51%를 상회해 배당 관점의 진입 매력은 과거 대비 개선되었습니다.",
    keyRisks: [
      "소비 경기 둔화 시 동일점포 매출 압박",
      "높은 부채비율에 따른 금리·재무 유연성 리스크",
      "원가·물류·재고 변동으로 마진 훼손 가능성",
    ],
    bullCase: "농촌/준도시 핵심 고객층의 반복 구매와 반려동물·소모품 수요가 견조하게 유지되면 이익 성장과 배당 증가가 동시에 이어질 수 있습니다. Forward PER 기준 이익 개선이 현실화되면 목표주가(57.59달러) 방향의 리레이팅 여지도 있습니다.",
    bearCase: "경기 둔화와 경쟁 심화가 겹치면 매출 성장 정체와 판관비 부담으로 이익이 압박될 수 있습니다. 레버리지 부담이 큰 환경에서는 밸류에이션 프리미엄 축소와 주가 조정이 확대될 수 있습니다.",
    valuationComment: "현재 주가는 52주 밴드 하단부(위치 28.7%)에 있고 배당수익률도 5년 평균 대비 높아 역사적 체감 밸류는 나쁘지 않습니다. 다만 PER/PBR 절대 수준과 높은 부채를 감안하면 공격적 추격 매수보다는 분할 접근이 유효하며, 약 48달러 전후 이하에서 기대수익 대비 안전마진이 더 좋아집니다.",
    recentDevelopments: [
      "배당은 15년 연속 인상 기조를 유지하며 주주환원 신뢰를 이어가는 중",
      "애널리스트 컨센서스는 buy이며 평균 목표가 기준 약 11.2% 상승여력이 제시됨",
    ],
    overallRating: "관심",
    ratingReason: "배당 성장 품질은 양호하지만 밸류에이션 부담과 높은 레버리지 리스크를 함께 고려해 가격 메리트 확인 후 접근이 적절합니다.",
    targetBuyPrice: 48,
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // JPM — JP모건 (배당귀족주, 15년 연속)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    ticker: "JPM",
    analyzedAt: "2026-02-26 08:33 KST",
    businessSummary: "JP모건체이스는 미국 최대 상업은행으로 소비자금융, 기업금융, 투자은행, 자산·자산운용을 아우르는 종합 금융 플랫폼을 운영합니다. 예금 기반의 안정적 이자이익과 투자은행·자산운용 수수료 수익을 결합해 경기 국면별로 수익원을 분산하는 구조가 강점입니다.",
    coreProducts: [
      "소비자·상업은행(예금·대출·카드)",
      "투자은행(IB·트레이딩·자본시장)",
      "자산·자산운용(Wealth & Asset Management)",
    ],
    geographicPresence: "미국 중심(대부분) · 글로벌 기업금융/투자은행 네트워크를 통한 국제 매출 보완",
    dividendStreakYears: 15,
    dividendCAGR5yr: null,
    dividendCAGR10yr: null,
    recentDividendGrowth: "15년 연속 배당 증가를 이어가고 있으며 최근 3년 배당 CAGR은 20.8%로 매우 높은 편입니다.",
    dividendSafety: "strong",
    dividendSafetyReason: "배당성향 29.0%와 높은 수익성(ROE 16.1%)을 감안하면 현재 배당 여력은 충분한 편입니다.",
    moatTypes: [
      "brand",
      "switching_costs",
      "network_effect",
      "efficient_scale",
      "intangible_assets",
    ],
    moatStrength: "wide",
    moatNarrative: "JP모건은 신뢰도 높은 브랜드와 광범위한 예금·결제·기업금융 관계를 기반으로 고객 이탈 비용이 큽니다. 대형 은행으로서 규제·자본·인프라 측면의 진입장벽과 스케일 효율이 크고, 글로벌 딜 소싱·유통 네트워크가 경쟁우위를 강화합니다.",
    revenueGrowthTrend: "금리 사이클과 자본시장 환경 변동에도 다각화된 사업 포트폴리오로 중기 우상향 성장을 유지하는 흐름입니다.",
    marginTrend: "stable",
    debtLevel: "high",
    financialSummary: "은행업 특성상 레버리지는 높게 보이지만, 핵심은 자본적정성과 이익창출력이며 JP모건은 업계 상위권 수익성과 규모의 경제를 보유합니다. PER 15.2(Forward 12.9)는 초고평가 구간은 아니나, PBR 2.39와 주가 위치를 보면 밸류 부담은 일부 존재합니다.",
    keyRisks: [
      "금리 인하 국면에서 순이자마진(NIM) 둔화 가능성",
      "신용비용 증가(경기 둔화·상업용 부동산 등)로 충당금 부담 확대",
      "강화되는 금융규제(자본규제·스트레스테스트)로 주주환원 여력 제약",
    ],
    bullCase: "미국 경기 연착륙과 기업금융·투자은행 회복이 동반되면 이익 추정치 상향과 밸류 재평가가 가능합니다. 이 경우 애널리스트 목표가(상승여력 13.5%)에 근접하는 주가 레벨이 현실화될 수 있습니다.",
    bearCase: "경기 둔화로 대손비용이 예상보다 크게 늘고 금리 하락으로 NIM이 압박받으면 이익 모멘텀이 약해질 수 있습니다. 규제 강화가 겹치면 배당 성장 속도와 자사주 매입이 둔화될 수 있습니다.",
    valuationComment: "Forward PER 12.9는 절대적으로 과도하진 않지만, 현재 배당수익률(2.02%)이 5년 평균(2.41%)보다 낮고 52주 위치도 높은 편이라 배당투자 관점의 매력은 다소 떨어집니다. 수익률 평균 회귀를 고려하면 보다 유리한 매수 구간은 현 주가 대비 하단에서 분할 접근이 적절합니다.",
    recentDevelopments: [
      "애널리스트 컨센서스는 buy이며 평균 목표가 $344.35로 제시됨",
      "주가가 52주 범위 상단권(74.9%)에 위치해 밸류·수익률 매력은 중립 수준",
    ],
    overallRating: "관망",
    ratingReason: "펀더멘털과 배당 안전성은 우수하지만 현재 배당수익률이 역사 평균 대비 낮아 배당투자 관점의 신규 진입 매력은 제한적입니다.",
    targetBuyPrice: 260,
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // INTU — 인튜이트 (배당귀족주, 14년 연속)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    ticker: "INTU",
    analyzedAt: "2026-02-26 08:33 KST",
    businessSummary: "인튜이트는 개인·소상공인·회계사를 위한 재무 소프트웨어를 제공하는 플랫폼 기업으로, 세무 신고·회계·급여·개인재무 관리를 핵심으로 합니다. TurboTax, QuickBooks, Credit Karma, Mailchimp를 중심으로 고객의 금융 데이터와 업무 흐름을 통합해 반복 사용을 유도하는 구조를 갖고 있습니다. 최근에는 AI 기반 자동화 기능을 강화해 생산성 소프트웨어 성격을 더욱 확대하고 있습니다.",
    coreProducts: [
      "TurboTax",
      "QuickBooks",
      "Credit Karma",
      "Mailchimp",
    ],
    geographicPresence: "미국 중심 매출 구조(미국 비중이 매우 높고 국제 비중은 상대적으로 제한적)",
    dividendStreakYears: 14,
    dividendCAGR5yr: null,
    dividendCAGR10yr: null,
    recentDividendGrowth: "최근 3년 배당 CAGR이 25.1%로 매우 높고, 14년 연속 배당 증가를 이어가고 있습니다.",
    dividendSafety: "strong",
    dividendSafetyReason: "배당성향 29.7%와 ROE 22.0%를 감안하면 이익 대비 배당 부담이 낮아 배당 지속 여력이 높습니다.",
    moatTypes: [
      "brand",
      "switching_costs",
      "network_effect",
      "intangible_assets",
    ],
    moatStrength: "wide",
    moatNarrative: "TurboTax·QuickBooks는 강한 브랜드 인지도와 세무/회계 업무의 높은 전환비용을 기반으로 고객 락인을 형성합니다. 회계사·소상공인·개인 사용자가 축적한 데이터와 생태계 연동은 경쟁사 대비 진입장벽을 높입니다. 세무 규정 대응 노하우와 제품 신뢰성 같은 무형자산도 장기 경쟁우위에 기여합니다.",
    revenueGrowthTrend: "핵심 플랫폼 중심으로 중장기 매출 성장 기조가 유지되는 흐름입니다.",
    marginTrend: "stable",
    debtLevel: "moderate",
    financialSummary: "PER(TTM) 26.2 대비 Forward PER 14.4는 향후 이익 성장 기대를 반영합니다. ROE 22.0%로 수익성이 우수하고 배당성향 29.7%로 자본 배분의 균형도 양호합니다. D/E 지표 공백은 보수적으로 해석할 필요가 있으나, 전반적 체력은 견조한 편입니다.",
    keyRisks: [
      "중소기업 경기 둔화 시 QuickBooks 생태계 성장률 저하 가능성",
      "세무/핀테크 규제 변화 및 데이터 프라이버시 리스크",
      "AI 경쟁 심화에 따른 제품 차별화 약화 및 마진 압박",
    ],
    bullCase: "AI 기반 자동화 기능 확산으로 ARPU와 고객 유지율이 동시에 개선되면 이익 성장률이 시장 기대를 상회할 수 있습니다. 현재 주가가 52주 저점권에 가까워 밸류에이션 리레이팅 여지도 큽니다.",
    bearCase: "경기 둔화와 경쟁 심화가 겹치면 신규 고객 유입이 둔화되고 마케팅·R&D 비용 부담으로 이익 레버리지가 약화될 수 있습니다. 이 경우 고성장 프리미엄이 축소되며 주가 변동성이 확대될 수 있습니다.",
    valuationComment: "현재가가 52주 범위 하단(위치 6.0%)에 있고 배당수익률이 5년 평균 대비 높아(1.25% vs 0.59%) 상대적으로 저평가 신호가 관찰됩니다. Forward PER 14.4 기준으로는 성장주 대비 부담이 낮아 분할매수 관점이 유효하며, 변동성 감안 시 350~420달러 구간을 우선 매수 고려 구간으로 볼 수 있습니다.",
    recentDevelopments: [
      "애널리스트 컨센서스가 buy이며 목표가 729.26달러로 상향 여력이 크게 제시됨",
      "배당 성장률이 높은 수준을 유지하며 주주환원 신뢰도가 강화됨",
    ],
    overallRating: "보유",
    ratingReason: "견조한 수익성·낮은 배당성향·강한 해자 대비 현재 주가가 하단권에 있어 중장기 보유 매력이 높습니다.",
    targetBuyPrice: 420,
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // AMGN — 암젠 (배당귀족주, 14년 연속)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    ticker: "AMGN",
    analyzedAt: "2026-02-26 08:33 KST",
    businessSummary: "암젠은 종양학, 염증, 심혈관·대사, 희귀질환 분야의 바이오의약품을 개발·판매하는 글로벌 바이오제약사입니다. 블록버스터 생물의약품 포트폴리오와 바이오시밀러 사업을 함께 운영하며, 최근에는 Horizon 인수로 희귀질환 비중을 확대했습니다.",
    coreProducts: [
      "Prolia/XGEVA(골질환)",
      "Enbrel/Otezla(염증·면역)",
      "TEPEZZA·KRYSTEXXA(희귀질환)",
    ],
    geographicPresence: "미국 약 75% · 국제 약 25%",
    dividendStreakYears: 14,
    dividendCAGR5yr: null,
    dividendCAGR10yr: null,
    recentDividendGrowth: "최근 3년 배당 CAGR 15.8%로 두 자릿수 배당 성장세를 유지했으나, 절대 배당수익률은 역사 평균 대비 낮은 구간입니다.",
    dividendSafety: "moderate",
    dividendSafetyReason: "배당성향 66.9%는 감내 가능하나 D/E 640.3과 높은 밸류에이션·주가 고점 부담으로 안전마진은 중간 수준입니다.",
    moatTypes: [
      "intangible_assets",
      "switching_costs",
      "cost_advantage",
    ],
    moatStrength: "wide",
    moatNarrative: "암젠은 특허·규제 허가·생산공정 노하우 등 무형자산 기반 진입장벽이 높은 편입니다. 생물의약품은 처방 전환 비용과 임상 관성으로 고객 이탈이 제한적이며, 대규모 생산 역량은 원가경쟁력에도 기여합니다.",
    revenueGrowthTrend: "기존 품목 성숙화와 신제품·희귀질환 매출 기여가 맞물리는 완만한 성장 국면입니다.",
    marginTrend: "stable",
    debtLevel: "high",
    financialSummary: "ROE 106.1%는 매우 높지만 높은 레버리지의 영향이 큽니다. Forward PER 16.5로 이익 기준 부담은 완화되나, 현재 주가가 52주 고점권(97.5%)에 있어 밸류에이션 여유는 제한적입니다. 배당은 유지 가능하나 재무 유연성은 부채 관리에 좌우됩니다.",
    keyRisks: [
      "특허만료·바이오시밀러 경쟁에 따른 기존 제품 매출 둔화",
      "고금리 환경에서 높은 부채 구조가 현금흐름에 주는 부담",
      "신약 파이프라인 임상·허가 지연 및 약가 규제 리스크",
    ],
    bullCase: "희귀질환 포트폴리오와 후기 파이프라인이 예상보다 빠르게 성장하면 이익 레버리지가 확대될 수 있습니다. 이 경우 배당 성장과 밸류 재평가가 동시에 가능해집니다.",
    bearCase: "주요 품목 침식이 신제품 성장보다 빠르면 매출·마진이 동반 압박받을 수 있습니다. 고점권 주가와 높은 부채가 겹치면 멀티플 조정으로 하방 변동성이 커질 수 있습니다.",
    valuationComment: "현재 배당수익률 2.52%는 5년 평균 3.07%보다 낮아 배당주 관점에서는 비싼 구간입니다. 평균 수익률 회귀 기준으로는 약 315달러 내외가 더 매력적인 매수 구간이며, 보수적으로 310~325달러 분할 접근이 적정합니다.",
    recentDevelopments: [
      "Horizon 인수 이후 희귀질환 포트폴리오 통합·상업화 시너지 가시화 여부가 핵심",
      "비만 등 대형 시장 파이프라인(예: 차세대 대사질환 후보)의 임상 데이터가 중장기 밸류에이션 변수",
    ],
    overallRating: "관망",
    ratingReason: "배당 성장 품질은 우수하지만 고점권 주가·평균 대비 낮은 배당수익률·높은 레버리지로 신규 진입 매력은 제한적입니다.",
    targetBuyPrice: 320,
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // FNF — 피델리티 내셔널 파이낸셜 (배당귀족주, 14년 연속)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    ticker: "FNF",
    analyzedAt: "2026-02-26 08:34 KST",
    businessSummary: "피델리티 내셔널 파이낸셜(FNF)은 미국 최대권의 타이틀 보험 및 부동산 결제(클로징) 서비스를 제공하는 금융 인프라 기업입니다. 주택 매매·재융자 거래량에 따라 실적 변동성이 존재하지만, 높은 시장점유율과 반복적 수수료 수익 구조를 갖고 있습니다. 보험 외에도 관련 부동산·모기지 생태계 서비스로 사업을 확장해 수익원을 다변화하고 있습니다.",
    coreProducts: [
      "타이틀 보험",
      "부동산 에스크로·클로징 서비스",
      "모기지/부동산 거래 지원 솔루션",
    ],
    geographicPresence: "미국 중심(매출 대부분 미국 내 발생, 국제 비중은 제한적)",
    dividendStreakYears: 14,
    dividendCAGR5yr: null,
    dividendCAGR10yr: null,
    recentDividendGrowth: "14년 연속 배당 인상을 이어가며 최근 3년 배당 CAGR은 5.9% 수준입니다.",
    dividendSafety: "watch",
    dividendSafetyReason: "연속 증배 이력은 강점이지만 배당성향 91.4%가 높아 경기·거래량 둔화 시 배당 여력이 빠듯해질 수 있습니다.",
    moatTypes: [
      "efficient_scale",
      "switching_costs",
      "intangible_assets",
    ],
    moatStrength: "narrow",
    moatNarrative: "타이틀 보험은 네트워크 규모와 지역별 운영 인프라가 중요한 시장으로 상위 사업자에 유리한 구조를 가집니다. 거래 당사자·중개 네트워크와의 관계, 규제·라이선스 기반 운영 역량이 진입장벽으로 작동합니다. 다만 부동산 사이클 민감도가 높아 해자의 방어력은 경기 구간에 따라 체감 차이가 큽니다.",
    revenueGrowthTrend: "부동산 거래 사이클 영향으로 단기 변동성이 크며, 중기적으로는 거래 회복 시 반등하는 패턴입니다.",
    marginTrend: "stable",
    debtLevel: "moderate",
    financialSummary: "Forward PER 7.4는 이익 정상화 기대를 반영한 저평가 구간으로 해석될 수 있습니다. 반면 Trailing PER 23.3, 배당성향 91.4%, ROE 7.8%는 최근 수익성 압박과 배당 커버 여력의 제약을 시사합니다. PBR 1.88과 D/E 49.0을 감안하면 재무는 방어 가능하나 사이클 둔화 국면에서는 보수적 접근이 필요합니다.",
    keyRisks: [
      "미국 주택 거래·재융자 감소에 따른 수수료 매출 둔화",
      "높은 배당성향으로 인한 배당 성장 여력 제한",
      "금리·경기 변동에 따른 실적 및 밸류에이션 변동성 확대",
    ],
    bullCase: "금리 안정/하락으로 주택 거래가 회복되면 타이틀 보험·클로징 물량이 늘며 이익 정상화 속도가 빨라질 수 있습니다. 현재 낮은 Forward PER과 4% 배당수익률이 함께 재평가를 유도할 가능성이 있습니다.",
    bearCase: "고금리·거래 부진이 장기화되면 이익 회복이 지연되고 높은 배당성향이 부담으로 작용할 수 있습니다. 이 경우 배당 성장 둔화와 멀티플 할인 지속이 동시에 나타날 수 있습니다.",
    valuationComment: "현재 배당수익률(4.00%)이 5년 평균(3.73%)보다 높아 상대적으로 저평가 신호가 있습니다. 52주 위치 17.4%와 애널리스트 목표가 대비 상승여력을 고려하면 분할 매수 유효 구간으로 보이며, 보수적 적정 매수대는 48~51달러 수준으로 판단합니다.",
    recentDevelopments: [
      "Forward PER이 낮아지며 실적 정상화 기대가 주가에 일부 반영되는 구간입니다.",
      "주택시장 거래 둔화와 금리 경로 불확실성이 단기 실적 가시성을 제한하고 있습니다.",
    ],
    overallRating: "보유",
    ratingReason: "배당 매력과 업황 회복 시 레버리지는 긍정적이지만 높은 배당성향과 경기 민감도를 감안해 공격적 비중 확대보다 보유·분할 접근이 적절합니다.",
    targetBuyPrice: 49,
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // TSN — 타이슨푸드 (배당귀족주, 14년 연속)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    ticker: "TSN",
    analyzedAt: "2026-02-26 08:34 KST",
    businessSummary: "타이슨푸드는 닭고기·소고기·돼지고기 및 가공식품을 생산·유통하는 미국 대표 단백질 식품 기업입니다. 원재료 조달부터 가공·유통까지 통합된 밸류체인을 바탕으로 소매와 외식 채널에 동시에 공급합니다. 경기방어 성격의 식품 수요를 기반으로 하되, 축산 사이클과 원가 변동의 영향을 크게 받는 구조입니다.",
    coreProducts: [
      "닭고기(신선·냉동·가공)",
      "소고기/돼지고기",
      "브랜드 가공식품(냉동·조리식)",
    ],
    geographicPresence: "미국 중심 매출 구조(미국 비중이 절대적) · 국제 사업은 보완적 비중",
    dividendStreakYears: 14,
    dividendCAGR5yr: null,
    dividendCAGR10yr: null,
    recentDividendGrowth: "최근 3년 배당 CAGR은 2.6%로, 배당은 증가했지만 성장 속도는 완만한 편입니다.",
    dividendSafety: "watch",
    dividendSafetyReason: "배당성향 358.9%와 ROE 1.3%는 현재 이익 대비 배당 여력이 낮음을 시사합니다.",
    moatTypes: [
      "brand",
      "cost_advantage",
      "efficient_scale",
    ],
    moatStrength: "narrow",
    moatNarrative: "타이슨푸드는 대형 생산능력과 유통망에서 규모의 경제를 보유해 원가 경쟁력을 일부 확보하고 있습니다. 또한 식품 유통 채널에서의 공급 신뢰성과 브랜드 인지도가 반복 구매를 지원합니다. 다만 제품 차별화가 제한적이고 원재료·축산 사이클 영향이 커 해자는 넓기보다 좁은 편입니다.",
    revenueGrowthTrend: "최근 매출은 축산 사이클과 가격 전가력에 따라 변동성이 큰 박스권 흐름입니다.",
    marginTrend: "contracting",
    debtLevel: "moderate",
    financialSummary: "Forward PER 14.2와 PBR 1.22는 장기 평균 대비 과도한 고평가로 보긴 어렵지만, Trailing PER 111.8은 최근 수익성 저하를 반영합니다. ROE 1.3%로 자본 효율성이 낮고, 배당성향 358.9%는 단기 배당 안전성에 부담 요인입니다. D/E 46.0은 즉각적인 재무위기 수준은 아니나 이익 회복 지연 시 재무 유연성이 제한될 수 있습니다.",
    keyRisks: [
      "사료·곡물 등 원재료 가격 급등에 따른 마진 압박",
      "소고기/닭고기 사이클 악화로 실적 변동성 확대",
      "높은 배당성향 지속 시 배당 성장 둔화 또는 배당정책 보수화 가능성",
    ],
    bullCase: "단백질 수요의 방어적 특성과 원가 안정화가 맞물리면 이익 정상화로 Forward 기준 밸류에이션 매력이 부각될 수 있습니다. 이 경우 배당 지속성과 주가 리레이팅이 동시에 가능해집니다.",
    bearCase: "원가 상승과 축산 사이클 부진이 장기화되면 수익성 회복이 지연되고, 높은 배당성향이 배당 정책 부담으로 전이될 수 있습니다. 이 경우 주가는 저평가 함정 구간에 머물 가능성이 있습니다.",
    valuationComment: "현재가 62.61달러는 DDM 적정가 46.36달러를 상회해 배당할인 기준으로는 보수적 접근이 필요합니다. 애널리스트 목표가(69.08달러) 대비 상승여력은 있으나, 배당 안전성 지표가 약해 추격 매수보다는 이익 회복 확인 또는 가격 조정 시 분할 접근이 유리합니다.",
    recentDevelopments: [
      "애널리스트 컨센서스는 buy이며 목표가 기준 약 10.3% 상승여력이 제시됨",
      "Trailing PER(111.8)과 Forward PER(14.2)의 큰 격차가 최근 이익 저점 통과 기대와 실적 변동성을 동시에 시사",
    ],
    overallRating: "관망",
    ratingReason: "배당수익률은 매력적이지만 현재 배당성향과 수익성 지표가 약해 실적 회복 확인 전까지는 관망이 합리적입니다.",
    targetBuyPrice: 50,
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // AMT — 아메리칸타워 (배당귀족주, 13년 연속)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    ticker: "AMT",
    analyzedAt: "2026-02-26 08:35 KST",
    businessSummary: "아메리칸타워(AMT)는 무선통신 타워·옥상·분산안테나(DAS) 등 통신 인프라를 소유·운영하며 통신사에 장기 임대하는 글로벌 리츠입니다. 핵심 수익모델은 멀티테넌트(한 기지국에 복수 임차인) 구조로, 임차인 추가 시 수익성이 높아지는 운영 레버리지가 강점입니다. 미국과 해외 시장에서 4G/5G 데이터 트래픽 증가에 연동된 구조적 수요를 기반으로 현금흐름을 창출합니다.",
    coreProducts: [
      "무선통신 타워 임대",
      "옥상·소형셀·DAS 중립호스트 인프라",
      "통신 인프라 구축·운영 서비스",
    ],
    geographicPresence: "미국 약 55% · 국제 약 45% (라틴아메리카·유럽·아프리카·아시아 분산)",
    dividendStreakYears: 13,
    dividendCAGR5yr: null,
    dividendCAGR10yr: null,
    recentDividendGrowth: "최근 3년 배당 CAGR 5.1%로 배당은 증가세를 유지했으나 과거 고성장 구간 대비 속도는 둔화되었습니다.",
    dividendSafety: "watch",
    dividendSafetyReason: "배당성향 107.2%와 높은 레버리지(D/E 434.2)로 금리·차환 여건 악화 시 배당 여력이 압박받을 수 있습니다.",
    moatTypes: [
      "switching_costs",
      "efficient_scale",
      "intangible_assets",
    ],
    moatStrength: "wide",
    moatNarrative: "통신사는 기지국 이전 시 품질 저하·규제·재구축 비용이 커서 기존 타워를 장기 사용하는 경향이 강합니다. 타워 입지와 인허가, 구축 네트워크는 신규 진입자가 단기간 복제하기 어려운 자산 기반 진입장벽을 형성합니다. 멀티테넌트 구조로 임차인당 한계비용이 낮아질수록 규모의 경제가 강화됩니다.",
    revenueGrowthTrend: "신규 증설보다 임대료 에스컬레이터·공동임차 확대 중심의 완만한 성장 추세입니다.",
    marginTrend: "stable",
    debtLevel: "high",
    financialSummary: "ROE 26.3%는 자본 효율이 높게 보이지만, 높은 부채 활용 효과가 반영된 수치로 해석이 필요합니다. PBR 23.36과 높은 배당성향은 자산가치 대비 프리미엄 및 분배 부담을 시사합니다. 금리 하락 국면에서는 차입 부담 완화로 현금흐름 방어력이 개선될 여지가 있습니다.",
    keyRisks: [
      "고금리 장기화에 따른 이자비용·차환 리스크",
      "주요 통신사 투자 축소 또는 임대 재협상 압력",
      "해외 통화·정책·규제 변동에 따른 실적 변동성",
    ],
    bullCase: "금리 하락과 5G/데이터 트래픽 성장으로 임차 수요가 개선되면 멀티테넌트 레버리지로 AFFO와 배당 커버가 동반 개선될 수 있습니다. 현재가가 52주 하단권(23.1%)에 위치해 밸류에이션 리레이팅 여지도 존재합니다.",
    bearCase: "고금리 및 통신사 CapEx 둔화가 길어지면 성장률 둔화와 함께 배당성향 부담이 지속될 수 있습니다. 높은 부채 구조는 신용·재무 유연성을 제한해 주가 회복을 지연시킬 수 있습니다.",
    valuationComment: "현재 배당수익률 3.58%가 5년 평균 2.80%를 상회하고 애널리스트 목표가 대비 상승여력(18.9%)이 있어 상대적으로 저평가 구간으로 해석됩니다. 다만 DDM 괴리(상향)와 높은 레버리지 리스크를 감안해 분할매수 접근이 유효하며, 금리 민감도를 고려한 보수적 진입이 적절합니다.",
    recentDevelopments: [
      "시장 전반의 금리 하락 기대가 리츠 밸류에이션 회복 기대를 높이는 국면",
      "통신 인프라 수요는 5G 고도화·데이터 사용량 증가에 따라 중장기적으로 견조한 흐름",
    ],
    overallRating: "관심",
    ratingReason: "수익률 메리트와 업사이드는 매력적이지만, 높은 배당성향·부채 부담으로 리스크 관리형 접근이 필요합니다.",
    targetBuyPrice: 170,
  },
];

export function getAnalysis(ticker: string): StockAnalysis | undefined {
  return stockAnalyses.find(a => a.ticker === ticker);
}