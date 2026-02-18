import { FAQItem, TimelineEvent } from './types';

export const IMAGES = {
  LOGO: 'https://github.com/sangini70/wazralogo/blob/main/%EC%99%80%EC%A6%88%EB%9D%BC%EB%A1%9C%EA%B3%A0_%ED%88%AC%EB%AA%85.png?raw=true',
  FOUNDER: 'https://github.com/sangini70/wazralogo/blob/main/%EA%B9%80%EB%B6%80%EC%97%B4%EB%B0%95%EC%82%AC%EB%8B%98.png?raw=true',
  PRODUCT_PLACEHOLDER: 'https://picsum.photos/800/800', // Placeholder as per instructions
  LAB_BG: 'https://picsum.photos/1920/1080', // Placeholder for background
};

export const LINKS = {
  COUPANG: 'https://www.coupang.com', // External link placeholder
};

export const HEADLINES = {
  HERO: "물, 그 이상의 연구.",
  SUB_HERO: "40년 유체역학 연구와 75개 특허기술.\n김부열 박사가 제안하는 프리미엄 워터 루틴.",
};

export const COMPLIANCE = {
  DISCLAIMER: "본 제품은 질병의 예방 및 치료를 위한 의약품이 아닙니다. 개인의 생활습관과 상황에 따라 체감에는 차이가 있을 수 있습니다.",
  FORBIDDEN_WORDS: [
    "치료", "개선", "효과", "염증 제거", "항암", "혈압", "당뇨", "아토피", "즉효", "완치",
    "혈관 청소", "디톡스", "면역력 강화", "약효", "임상 증명", "특효", "해독", "기적", "최고", "유일"
  ],
  SAFE_ALTERNATIVES: [
    "연구", "개발", "도움이 될 수 있음", "관리", "함유", "기술 적용", "철학", "과정", "루틴", "경험"
  ]
};

export const TIMELINE_DATA: TimelineEvent[] = [
  { year: "1984", title: "유체 역학 연구 시작", description: "김부열 박사, 공기 흐름과 유체 역학에 대한 기초 연구 착수" },
  { year: "1998", title: "공기 정화 특허 취득", description: "국내외 공기 정화 기술 관련 핵심 특허 등록" },
  { year: "2010", title: "환경 기술 확장", description: "공기에서 물로, 유체의 본질에 대한 연구 영역 확장" },
  { year: "2018", title: "물에 대한 근원적 질문", description: "\"왜 좋은 물은 만들기 어려운가?\"에 대한 해답 탐구" },
  { year: "2023", title: "와즈라(WAZRA) 탄생", description: "75개 특허 기술의 철학을 담은 프리미엄 워터 브랜드 런칭" },
];

export const FAQS: FAQItem[] = [
  { category: "Brand", question: "와즈라는 왜 시중의 물보다 가격이 높은가요?", answer: "와즈라는 단순한 여과 방식이 아닌, 김부열 박사의 40년 유체 역학 특허 기술이 적용된 공정을 거칩니다. 일반적인 대량 생산 방식과 달리, 연구실 수준의 엄격한 품질 관리와 복합적인 공정을 유지하기 위한 비용이 반영되어 있습니다." },
  { category: "Product", question: "일반 생수와 맛이 다른가요?", answer: "와즈라는 부드러운 목넘김과 깔끔한 뒷맛을 지향합니다. 미세한 물 분자 구조에 대한 연구를 바탕으로 설계되어, 예민한 미각을 가진 분들은 그 차이를 느끼실 수 있습니다." },
  { category: "Product", question: "어떻게 보관하고 마시는 것이 좋나요?", answer: "직사광선을 피해 서늘한 곳에 보관해 주십시오. 기상 직후 또는 취침 1시간 전, 상온(15~20도) 상태에서 천천히 음용하는 루틴을 권장합니다." },
  { category: "Experience", question: "1+1 체험팩은 언제까지인가요?", answer: "체험팩 프로모션은 매월 한정 수량으로 진행됩니다. 재고 소진 시 조기 마감될 수 있으며, 상세 일정은 공지사항을 참고해 주시기 바랍니다." },
  { category: "Shipping", question: "배송은 얼마나 걸리나요?", answer: "평일 오후 2시 이전 주문 시 당일 출고를 원칙으로 하며, 일반적으로 출고 다음 날 수령 가능합니다. (도서 산간 제외)" },
  { category: "Policy", question: "정기 배송 신청이 가능한가요?", answer: "현재 정기 배송 시스템을 준비 중입니다. 제휴 및 대량 구매 문의는 Contact 페이지를 이용해 주시면 안내해 드리겠습니다." },
  { category: "Technology", question: "특허가 75개라고 하던데, 모두 물 관련인가요?", answer: "김부열 박사가 보유한 국내외 특허 75개는 공기 정화, 유체 역학, 환경 공학 등 다양한 분야를 포괄합니다. 와즈라에는 이 중 유체 제어와 관련된 핵심 노하우가 집약되어 있습니다." },
  { category: "Safety", question: "아이들이나 임산부가 마셔도 되나요?", answer: "와즈라는 엄격한 수질 검사를 통과한 안전한 물입니다. 다만, 특이 체질이거나 의사의 소견이 필요한 경우 전문가와 상담 후 섭취하시기를 권장합니다." },
];

export const SEO_METADATA = {
  home: { title: "WAZRA | 프리미엄 워터 연구소", description: "김부열 박사의 연구와 철학이 담긴 물. 와즈라 공식 홈페이지." },
  story: { title: "Brand Story | WAZRA", description: "유체 역학 40년 외길, 김부열 박사의 연구 여정." },
  tech: { title: "Technology | WAZRA", description: "75개 특허 기술의 배경과 와즈라의 탄생." },
};