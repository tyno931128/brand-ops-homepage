import {
  ArrowRight,
  BarChart3,
  Bot,
  BriefcaseBusiness,
  CheckCircle2,
  Database,
  Dumbbell,
  FileText,
  GraduationCap,
  HeartPulse,
  Layers3,
  Megaphone,
  MousePointerClick,
  Search,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";
import type { CSSProperties } from "react";
import { BrandDemo } from "@/components/brand-demo";
import { HeroScene } from "@/components/hero-scene";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "#brand-ops",
      name: "Brand Ops",
      description:
        "무료 홈페이지 진단으로 시작해 브랜딩 랜딩페이지와 콘텐츠 개선을 연결하는 AI 홈페이지 제작 스튜디오",
    },
    {
      "@type": "WebSite",
      "@id": "#website",
      name: "Brand Ops",
      inLanguage: "ko-KR",
      publisher: {
        "@id": "#brand-ops",
      },
    },
    {
      "@type": "Service",
      "@id": "#branding-landing-service",
      name: "브랜딩 랜딩페이지 제작",
      provider: {
        "@id": "#brand-ops",
      },
      areaServed: "KR",
      serviceType: "전환형 브랜딩 랜딩페이지 제작",
      audience: [
        {
          "@type": "Audience",
          audienceType: "필라테스, PT, 피부관리, 학원, 1인 전문가",
        },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Brand Ops 패키지",
        itemListElement: [
          {
            "@type": "Offer",
            name: "무료 홈페이지 진단",
            itemOffered: {
              "@type": "Service",
              name: "첫 문장, 신뢰 정보, 문의 CTA 진단",
            },
          },
          {
            "@type": "Offer",
            name: "7일 브랜딩 랜딩",
            itemOffered: {
              "@type": "Service",
              name: "1페이지 브랜딩 랜딩페이지 제작",
            },
          },
          {
            "@type": "Offer",
            name: "30일 운영 개선",
            itemOffered: {
              "@type": "Service",
              name: "콘텐츠 소재, CTA, 랜딩 문구 개선",
            },
          },
        ],
      },
    },
  ],
};

const targetChips = [
  "필라테스·PT",
  "피부관리·뷰티",
  "학원·클래스",
  "스튜디오·공방",
  "1인 전문가",
  "소규모 병원",
  "로컬 서비스",
  "상담·코칭",
];

const targetSegments = [
  {
    title: "필라테스·PT·피부관리",
    copy: "인스타 분위기는 좋은데 프로그램, 가격, 후기, 예약 방법이 흩어져 있는 사업.",
    outcome: "인스타 유입을 예약 상담으로 바꾸는 1페이지",
    icon: Dumbbell,
  },
  {
    title: "학원·클래스·공방",
    copy: "커리큘럼, 강사, 수강 후기, 체험수업 CTA를 한눈에 보여줘야 하는 교육 사업.",
    outcome: "학부모와 수강생이 바로 비교할 수 있는 모집 페이지",
    icon: GraduationCap,
  },
  {
    title: "강사·코치·1인 전문가",
    copy: "콘텐츠는 쌓였지만 처음 보는 사람이 왜 믿어야 하는지 정리되지 않은 개인 브랜드.",
    outcome: "전문성을 가격이 아니라 신뢰로 팔 수 있는 소개 페이지",
    icon: BriefcaseBusiness,
  },
  {
    title: "소규모 병원·상담센터",
    copy: "오래된 홈페이지와 약한 예약 동선을 규제 리스크가 낮은 정보 구조로 바꿔야 하는 전문 서비스.",
    outcome: "치료효과·후기 과장 없이 진료 정보와 상담 흐름을 정리한 리뉴얼",
    icon: HeartPulse,
  },
];

const proofPoints = [
  { value: "무료", label: "현재 흐름 5개 진단" },
  { value: "7일", label: "첫 브랜딩 랜딩 제작" },
  { value: "30일", label: "문구와 콘텐츠 개선" },
  { value: "Notion", label: "리드·콘텐츠·FAQ 누적" },
];

const coreSteps = [
  {
    title: "타겟을 압축",
    copy: "모든 고객을 노리지 않고 업종, 구매 상황, 고객 질문을 먼저 좁힙니다.",
    icon: Target,
  },
  {
    title: "신뢰 증거를 설계",
    copy: "후기, 가격, 과정, FAQ, 상담 동선을 방문자가 믿을 수 있는 순서로 배치합니다.",
    icon: Layers3,
  },
  {
    title: "문의가 생길 때까지 개선",
    copy: "리드 반응과 검색 키워드를 보고 홈페이지 문구와 SNS 콘텐츠를 계속 바꿉니다.",
    icon: TrendingUp,
  },
];

const diagnosisItems = [
  {
    title: "첫 화면 진단",
    copy: "처음 보는 고객이 5초 안에 누구를 위한 서비스인지 이해하는지 봅니다.",
    deliverable: "첫 문장 후보 1개",
    icon: Search,
  },
  {
    title: "신뢰 정보 진단",
    copy: "가격, 후기, 과정, 강사/전문성, FAQ가 흩어져 있지 않은지 확인합니다.",
    deliverable: "빠진 정보 5개",
    icon: ShieldCheck,
  },
  {
    title: "문의 동선 진단",
    copy: "전화, 카카오, 예약, 상담 신청 중 무엇을 눌러야 하는지 명확한지 봅니다.",
    deliverable: "CTA 구조 제안 1개",
    icon: MousePointerClick,
  },
];

const diagnosisExamples = [
  {
    target: "필라테스/PT",
    signal: "인스타 프로필에 예약 링크만 있고 가격, 체험수업, 후기 FAQ가 흩어져 있음",
    fix: "첫 화면에 체험수업 CTA, 프로그램 가격표, 강사 전문성, 수강 후기를 한 흐름으로 배치",
  },
  {
    target: "피부관리/뷰티",
    signal: "사진은 많지만 대표 코스, 가격, 위치, 예약 방법을 처음 방문자가 찾기 어려움",
    fix: "대표 관리 코스, 가격대, 후기, 위치, 카카오 예약 CTA를 모바일 기준으로 정리",
  },
  {
    target: "학원/클래스",
    signal: "블로그 글과 공지는 많지만 커리큘럼, 성과, 상담 신청이 따로 흩어져 있음",
    fix: "레벨테스트, 수업 과정, 수강 후기, 상담 신청을 한 페이지 모집 흐름으로 연결",
  },
];

const inquiryFields = [
  {
    label: "업종",
    placeholder: "예: 필라테스, 학원, 코칭",
  },
  {
    label: "현재 링크",
    placeholder: "Instagram, 블로그, 홈페이지 URL",
  },
  {
    label: "원하는 문의 방식",
    placeholder: "카카오, 전화, 예약폼, 이메일",
  },
];

const operatingScreens = [
  {
    name: "Research Radar",
    label: "리드 탐지",
    icon: Search,
    glow: "#5a55ff",
    rows: ["홈페이지 없음", "예약 링크만 있음", "후기 흩어짐"],
  },
  {
    name: "Notion Command",
    label: "자료 정리",
    icon: Database,
    glow: "#15a36d",
    rows: ["고객 질문", "거절 사유", "다음 액션"],
  },
  {
    name: "Landing Builder",
    label: "화면 제작",
    icon: MousePointerClick,
    glow: "#1974d2",
    rows: ["첫 문장", "CTA", "가격표"],
  },
  {
    name: "Content Engine",
    label: "SNS 전환",
    icon: Megaphone,
    glow: "#e55d8f",
    rows: ["Threads", "Instagram", "블로그"],
  },
];

const beforeAfter = [
  {
    before: "소개, 가격, 후기, 예약 링크가 SNS 게시물 안에 흩어져 있음",
    after: "첫 화면에서 누구를 위한 서비스인지와 상담 버튼이 바로 보임",
  },
  {
    before: "홈페이지가 있어도 오래되어 모바일에서 문의하기 어려움",
    after: "전화, 카카오, 예약, 진단 요청이 모바일 기준으로 정리됨",
  },
  {
    before: "콘텐츠는 올리지만 홈페이지와 연결되지 않아 문의 흐름이 끊김",
    after: "SNS 글이 FAQ, 사례, 랜딩 문구로 다시 쌓이는 구조가 됨",
  },
];

const sampleAudits = [
  {
    target: "필라테스/PT",
    before:
      "인스타 하이라이트에 가격, 후기, 체험 예약이 따로 있고 프로필 링크는 예약폼 하나뿐입니다.",
    fix: "첫 화면을 체험수업 CTA, 프로그램 가격표, 강사 전문성, 수강 후기 순서로 재구성합니다.",
    after:
      "처음 온 고객이 체험수업을 눌러야 하는 이유와 가격 기준을 30초 안에 확인합니다.",
  },
  {
    target: "피부관리/뷰티",
    before:
      "사진은 많지만 대표 코스, 소요 시간, 위치, 예약 방법이 게시물마다 흩어져 있습니다.",
    fix: "대표 코스 3개, 가격대, 후기, 위치, 카카오 예약 CTA를 모바일 첫 흐름에 배치합니다.",
    after: "고객이 DM으로 기본 정보를 묻기 전에 예약에 필요한 정보를 먼저 확인합니다.",
  },
  {
    target: "학원/클래스",
    before:
      "공지와 블로그는 많지만 커리큘럼, 성과, 레벨테스트 신청이 한 곳에 모여 있지 않습니다.",
    fix: "대상 학생, 커리큘럼, 수강 후기, 상담/레벨테스트 CTA를 모집 페이지로 정리합니다.",
    after: "학부모가 비교할 근거를 보고 상담 신청으로 자연스럽게 이동합니다.",
  },
];

const decisionCriteria = [
  {
    title: "내 사업을 먼저 이해하는가",
    userVoice:
      "기술 설명보다 우리 고객, 가격, 후기, 상담 흐름을 먼저 물어보는 사람에게 맡깁니다.",
    proof: "첫 화면 문구, 무료 진단, 타겟별 제안 메시지",
    icon: Target,
  },
  {
    title: "예쁜 화면보다 결과를 말하는가",
    userVoice:
      "포트폴리오만 보여주는 곳보다 문의, 예약, 검색, 신뢰가 어떻게 좋아지는지 설명하는 곳이 더 믿깁니다.",
    proof: "Before/After, CTA 흐름, 전환 개선 루프",
    icon: TrendingUp,
  },
  {
    title: "맡긴 뒤에도 통제 가능한가",
    userVoice:
      "도메인, 코드, 콘텐츠, 수정 범위가 불분명하면 불안합니다. 나중에 업데이트할 수 있어야 합니다.",
    proof: "Vercel 배포, Notion 운영판, 작업 범위 공개",
    icon: ShieldCheck,
  },
  {
    title: "과하게 만들지 않는가",
    userVoice:
      "애니메이션은 좋지만 느리거나 복잡하면 싫습니다. 내 고객이 빨리 이해하고 문의해야 합니다.",
    proof: "가벼운 데모, 모바일 CTA, 필요한 3D만 사용",
    icon: MousePointerClick,
  },
];

const guardrailItems = [
  {
    title: "효과 보장보다 정보 정리",
    copy: "치료 효과, 결과 보장, 비교 우위 표현 대신 진료 과목, 대상, 과정, 위치, 예약 방법을 명확히 정리합니다.",
    icon: FileText,
  },
  {
    title: "후기와 사례는 신중하게",
    copy: "환자 경험담, 전후 비교, 시술 장면처럼 오인 가능성이 있는 소재는 사전 검토 대상으로 분리합니다.",
    icon: ShieldCheck,
  },
  {
    title: "CTA는 상담 흐름 중심",
    copy: "자극적인 할인이나 과장 대신 전화, 카카오, 예약, 위치 안내처럼 실제 방문 전 필요한 행동을 정리합니다.",
    icon: MousePointerClick,
  },
];

const launchOfferItems = [
  "현재 링크 기준 무료 진단",
  "첫 문장·신뢰 정보·CTA 수정안",
  "7일 브랜딩 랜딩 제작 범위 제안",
  "30일 운영 개선 여부 판단",
];

const packages = [
  {
    name: "무료 진단",
    price: "0원",
    summary: "현재 흐름 점검",
    items: ["홈페이지·인스타 확인", "개선 포인트 5개", "첫 문장 제안", "CTA 진단"],
  },
  {
    name: "7일 브랜딩 랜딩",
    price: "79만~149만 원",
    summary: "예약·문의 구조",
    items: ["1페이지 랜딩", "카피라이팅", "반응형 디자인", "기본 SEO"],
  },
  {
    name: "30일 운영 개선",
    price: "월 39만~79만 원",
    summary: "콘텐츠와 전환 개선",
    items: ["리서치 리포트", "SNS 소재", "CTA 개선", "문구 업데이트"],
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fbfaf7] text-[#141414]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <header className="fixed inset-x-0 top-0 z-50 border-b border-black/6 bg-[#fbfaf7]/82 backdrop-blur-xl">
        <div className="mx-auto flex h-[68px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
          <a href="#" className="flex items-center gap-3 font-semibold">
            <span className="grid h-9 w-9 place-items-center rounded-2xl bg-[#17191f] text-white">
              <Bot className="h-5 w-5" />
            </span>
            <span>Brand Ops</span>
          </a>
          <nav className="hidden items-center gap-8 text-sm font-semibold text-stone-600 md:flex">
            <a href="#targets" className="transition hover:text-[#17191f]">
              타겟
            </a>
            <a href="#how" className="transition hover:text-[#17191f]">
              작동 방식
            </a>
            <a href="#screens" className="transition hover:text-[#17191f]">
              운영 화면
            </a>
            <Link href="/projects" className="transition hover:text-[#17191f]">
              작업물
            </Link>
            <Link href="/studio" className="transition hover:text-[#17191f]">
              3D 데모
            </Link>
            <a href="#packages" className="transition hover:text-[#17191f]">
              패키지
            </a>
          </nav>
          <a
            href="#contact"
            className="rounded-full bg-[#17191f] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#5a55ff]"
          >
            무료 진단
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden px-5 pb-20 pt-28 sm:px-8 lg:px-10 lg:pb-28 lg:pt-[136px]">
        <div className="absolute inset-x-0 top-0 -z-10 h-[720px] bg-[radial-gradient(circle_at_72%_20%,#d7e6ff_0,transparent_35%),radial-gradient(circle_at_85%_32%,#ffd5e4_0,transparent_34%),radial-gradient(circle_at_35%_12%,#dff8ee_0,transparent_28%)]" />
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.86fr_1.14fr] lg:items-center">
          <div className="max-w-2xl">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-black/8 bg-white/70 px-3 py-2 text-sm font-semibold text-stone-700 shadow-sm">
              <Sparkles className="h-4 w-4 text-[#5a55ff]" />
              프리미엄 로컬 서비스와 1인 전문가를 위한 랜딩 제작
            </div>
            <h1
              aria-label="문의로 이어지는 브랜딩 홈페이지를 만듭니다."
              className="text-5xl font-semibold leading-[1.03] tracking-normal text-[#111111] sm:text-6xl lg:text-7xl"
            >
              문의로 이어지는
              <br />
              브랜딩 홈페이지를
              <br />
              만듭니다.
            </h1>
            <p className="mt-6 max-w-xl text-xl leading-8 text-stone-700">
              필라테스, 피부관리, 학원, 1인 전문가처럼 신뢰와 예약이 중요한 사업을 위해 첫
              문장, 신뢰 증거, 문의 CTA를 한 페이지로 정리합니다.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex h-[52px] items-center justify-center gap-2 rounded-full bg-[#17191f] px-6 text-sm font-semibold text-white transition hover:bg-[#5a55ff]"
              >
                무료 홈페이지 진단 받기
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#targets"
                className="inline-flex h-[52px] items-center justify-center rounded-full border border-black/10 bg-white/70 px-6 text-sm font-semibold text-[#17191f] transition hover:border-[#5a55ff]/40"
              >
                맞는 업종 보기
              </a>
            </div>
            <ul className="mt-5 flex flex-col gap-2 text-sm font-semibold text-stone-600 sm:flex-row sm:flex-wrap">
              {["30분 무료 진단", "첫 문장 후보 1개", "CTA 구조 제안"].map((item) => (
                <li key={item} className="inline-flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#15a36d]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <BrandDemo />
        </div>

        <div className="mx-auto mt-18 max-w-7xl overflow-hidden border-y border-black/8 py-6">
          <div className="marquee-track flex min-w-max gap-4">
            {[...targetChips, ...targetChips].map((chip, index) => (
              <span
                key={`${chip}-${index}`}
                className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-stone-600 shadow-sm"
              >
                {chip}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="targets" className="px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 grid gap-5 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-sm font-bold uppercase text-[#5a55ff]">
                First Customers
              </p>
              <h2 className="mt-3 text-4xl font-semibold leading-tight sm:text-5xl">
                먼저, 홈페이지가 바로 문의로 이어지는 업종에 집중합니다.
              </h2>
            </div>
            <p className="max-w-3xl text-lg leading-8 text-stone-600">
              처음 보는 고객이 가격, 후기, 과정, 예약 방법을 빠르게 이해해야 하는 사업을
              위해 소개와 문의 흐름을 한 페이지로 정리합니다.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {targetSegments.map((segment) => {
              const Icon = segment.icon;
              return (
                <article
                  key={segment.title}
                  className="rounded-[20px] border border-black/8 bg-white p-5 shadow-[0_18px_60px_rgba(20,28,44,0.07)]"
                >
                  <div className="mb-8 flex items-center justify-between">
                    <div className="grid h-11 w-11 place-items-center rounded-2xl bg-[#f0f0ff] text-[#5a55ff]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="rounded-full bg-[#fff4ef] px-3 py-1 text-xs font-bold text-[#d8562a]">
                      우선 타겟
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold">{segment.title}</h3>
                  <p className="mt-4 text-sm leading-6 text-stone-600">{segment.copy}</p>
                  <p className="mt-5 border-t border-black/8 pt-4 text-sm font-bold leading-6 text-[#17191f]">
                    {segment.outcome}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:px-10" id="how">
        <div className="mx-auto mb-20 max-w-7xl rounded-[32px] border border-black/8 bg-[#17191f] p-6 text-white sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
            <div>
              <p className="text-sm font-bold uppercase text-[#7dd3fc]">Free Diagnosis</p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl">
                무료 진단은 “잘 만들겠습니다”가 아니라, 바로 고칠 3가지를 보여주는
                제안입니다.
              </h2>
              <p className="mt-5 text-base leading-7 text-stone-300">
                필라테스, 피부관리, 학원처럼 고객이 비교하고 예약하는 업종은 첫 문장과
                신뢰 정보, CTA만 정리해도 문의 흐름이 달라집니다.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {diagnosisItems.map((item) => {
                const Icon = item.icon;
                return (
                  <article
                    key={item.title}
                    className="rounded-[20px] border border-white/10 bg-white/[0.06] p-5"
                  >
                    <div className="mb-6 grid h-11 w-11 place-items-center rounded-2xl bg-white/10 text-[#7dd3fc]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-stone-300">{item.copy}</p>
                    <p className="mt-5 rounded-2xl bg-white px-3 py-2 text-xs font-bold text-[#17191f]">
                      {item.deliverable}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
          <div className="mt-8 border-t border-white/10 pt-8">
            <div className="mb-5 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
              <div>
                <p className="text-xs font-bold uppercase text-[#7dd3fc]">
                  Diagnosis Samples
                </p>
                <h3 className="mt-2 text-2xl font-semibold">
                  실제 진단은 이렇게 짧고 구체적으로 나갑니다.
                </h3>
              </div>
              <p className="max-w-xl text-sm leading-6 text-stone-300">
                긴 보고서보다 대표님이 바로 고칠 수 있는 신호와 수정 방향을 먼저
                보여줍니다.
              </p>
            </div>
            <div className="grid gap-4 lg:grid-cols-3">
              {diagnosisExamples.map((example) => (
                <article
                  key={example.target}
                  className="rounded-[20px] border border-white/10 bg-white/[0.055] p-5"
                >
                  <p className="text-sm font-bold text-[#7dd3fc]">{example.target}</p>
                  <div className="mt-5 space-y-4">
                    <div>
                      <p className="text-xs font-bold uppercase text-white/40">Signal</p>
                      <p className="mt-1 text-sm font-semibold leading-6 text-stone-200">
                        {example.signal}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase text-white/40">Fix</p>
                      <p className="mt-1 text-sm font-semibold leading-6 text-white">
                        {example.fix}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-bold uppercase text-[#5a55ff]">
              Conversion Branding OS
            </p>
            <h2 className="mt-3 text-4xl font-semibold leading-tight sm:text-5xl">
              예쁜 화면보다 먼저, 팔리는 이유를 정리합니다.
            </h2>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            {coreSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <article
                  key={step.title}
                  className="reveal-panel rounded-[28px] border border-black/8 bg-white p-6 shadow-[0_18px_60px_rgba(20,28,44,0.08)]"
                  style={{ animationDelay: `${index * 90}ms` }}
                >
                  <div className="mb-10 flex items-center justify-between">
                    <span className="font-mono text-sm font-semibold text-stone-400">
                      0{index + 1}
                    </span>
                    <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#f0f0ff] text-[#5a55ff]">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold">{step.title}</h3>
                  <p className="mt-4 text-base leading-7 text-stone-600">{step.copy}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-[#080a0c] px-5 py-20 text-white sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.76fr_1.24fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase text-teal-300">AI Engine</p>
            <h2 className="mt-3 text-4xl font-semibold leading-tight sm:text-5xl">
              뒤에서는 AI 팀이 계속 움직입니다.
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-stone-300">
              리서치 AI가 시장을 찾고, 문서정리 AI가 Notion에 쌓고, 마케팅 AI와 디자인
              AI가 다시 문구와 화면으로 바꿉니다.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-3">
              {proofPoints.map((point) => (
                <div
                  key={point.label}
                  className="border border-white/10 bg-white/[0.05] p-4"
                >
                  <p className="font-mono text-xl font-semibold text-teal-300">
                    {point.value}
                  </p>
                  <p className="mt-2 text-sm leading-5 text-stone-300">{point.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative min-h-[460px] overflow-hidden rounded-[32px] border border-white/10 bg-[#0f1418]">
            <HeroScene />
          </div>
        </div>
      </section>

      <section id="screens" className="px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 grid gap-5 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-sm font-bold uppercase text-[#5a55ff]">
                Operating Screens
              </p>
              <h2 className="mt-3 text-4xl font-semibold leading-tight sm:text-5xl">
                설명보다 먼저, 작동하는 화면을 보여줍니다.
              </h2>
            </div>
            <p className="max-w-3xl text-lg leading-8 text-stone-600">
              랜딩페이지는 글을 많이 읽히는 곳이 아니라, “이 사람이 이렇게 일하는구나”를
              빠르게 보여주는 곳입니다.
            </p>
          </div>
          <div className="screen-stage grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {operatingScreens.map((screen, index) => {
              const Icon = screen.icon;
              return (
                <article
                  key={screen.name}
                  className="floating-screen min-h-[300px]"
                  style={
                    {
                      "--screen-glow": screen.glow,
                      animationDelay: `${index * 120}ms`,
                    } as CSSProperties
                  }
                >
                  <div className="screen-face relative h-full rounded-[28px] p-5">
                    <div className="mb-8 flex items-center justify-between">
                      <div className="flex gap-1.5">
                        <span className="h-2 w-2 rounded-full bg-white/40" />
                        <span className="h-2 w-2 rounded-full bg-white/25" />
                        <span
                          className="h-2 w-2 rounded-full"
                          style={{ backgroundColor: screen.glow }}
                        />
                      </div>
                      <Icon className="h-5 w-5" style={{ color: screen.glow }} />
                    </div>
                    <p
                      className="text-xs font-bold uppercase"
                      style={{ color: screen.glow }}
                    >
                      {screen.label}
                    </p>
                    <h3 className="mt-2 text-2xl font-semibold text-white">
                      {screen.name}
                    </h3>
                    <div className="mt-8 space-y-3">
                      {screen.rows.map((row) => (
                        <div
                          key={row}
                          className="data-line h-10 border border-white/10 bg-white/[0.055] px-3 py-3 text-sm text-stone-200"
                        >
                          {row}
                        </div>
                      ))}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#f2efe9] px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-bold uppercase text-[#5a55ff]">Before / After</p>
            <h2 className="mt-3 text-4xl font-semibold leading-tight sm:text-5xl">
              고객이 맡기고 싶어지는 이유는, 정리된 흐름에서 나옵니다.
            </h2>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            {beforeAfter.map((item) => (
              <article
                key={item.before}
                className="rounded-[28px] bg-white p-6 shadow-sm"
              >
                <p className="text-sm font-bold text-stone-400">Before</p>
                <p className="mt-3 min-h-20 text-lg font-semibold leading-7 text-stone-500">
                  {item.before}
                </p>
                <div className="my-6 h-px bg-stone-200" />
                <p className="text-sm font-bold text-[#15a36d]">After</p>
                <p className="mt-3 text-lg font-semibold leading-7 text-[#111827]">
                  {item.after}
                </p>
              </article>
            ))}
          </div>
          <div className="mt-8 rounded-[32px] border border-black/8 bg-white p-6 shadow-sm sm:p-8">
            <div className="mb-6 flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
              <div>
                <p className="text-sm font-bold uppercase text-[#5a55ff]">
                  Sample Audits
                </p>
                <h3 className="mt-2 text-3xl font-semibold leading-tight">
                  실제 고객 사례가 아니라, 무료 진단이 이런 식으로 나간다는 샘플입니다.
                </h3>
              </div>
              <p className="max-w-2xl text-sm leading-6 text-stone-500">
                과장된 결과 수치보다 지금 보이는 문제, 고칠 순서, 바뀐 뒤의 고객 행동을
                짧게 보여주는 방식으로 제안합니다.
              </p>
            </div>
            <div className="grid gap-4 lg:grid-cols-3">
              {sampleAudits.map((audit) => (
                <article
                  key={audit.target}
                  className="rounded-[20px] border border-black/8 bg-[#fbfaf7] p-5"
                >
                  <p className="text-sm font-bold text-[#5a55ff]">{audit.target}</p>
                  <div className="mt-5 space-y-4">
                    <div>
                      <p className="text-xs font-bold uppercase text-stone-400">Before</p>
                      <p className="mt-1 text-sm font-semibold leading-6 text-stone-600">
                        {audit.before}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase text-[#d8562a]">Fix</p>
                      <p className="mt-1 text-sm font-semibold leading-6 text-[#17191f]">
                        {audit.fix}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase text-[#138a50]">After</p>
                      <p className="mt-1 text-sm font-semibold leading-6 text-[#17191f]">
                        {audit.after}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 grid gap-5 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div>
              <p className="text-sm font-bold uppercase text-[#5a55ff]">User Lens</p>
              <h2 className="mt-3 text-4xl font-semibold leading-tight sm:text-5xl">
                나라면 이런 사람에게 홈페이지를 맡깁니다.
              </h2>
            </div>
            <p className="max-w-3xl text-lg leading-8 text-stone-600">
              실제 고객은 “멋진 디자인”만 보지 않습니다. 내 사업을 이해하는지, 결과를
              설명하는지, 맡긴 뒤에도 운영 가능한지를 봅니다.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {decisionCriteria.map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  className="rounded-[28px] border border-black/8 bg-white p-6 shadow-[0_18px_60px_rgba(20,28,44,0.07)]"
                >
                  <div className="mb-6 flex items-center justify-between">
                    <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#f0f0ff] text-[#5a55ff]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="rounded-full bg-[#f7f7fb] px-3 py-1 text-xs font-bold text-stone-500">
                      고객 판단 기준
                    </span>
                  </div>
                  <h3 className="text-2xl font-semibold">{item.title}</h3>
                  <p className="mt-4 text-lg leading-8 text-stone-700">
                    “{item.userVoice}”
                  </p>
                  <div className="mt-6 rounded-2xl bg-[#f7f7fb] p-4">
                    <p className="text-xs font-bold uppercase text-[#5a55ff]">
                      우리 페이지에서 보여줄 증거
                    </p>
                    <p className="mt-2 text-sm font-semibold text-[#17191f]">
                      {item.proof}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#f7f8f5] px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 grid gap-5 lg:grid-cols-[0.86fr_1.14fr] lg:items-end">
            <div>
              <p className="text-sm font-bold uppercase text-[#5a55ff]">
                Regulated Services
              </p>
              <h2 className="mt-3 text-4xl font-semibold leading-tight sm:text-5xl">
                병원·상담 업종은 과장보다 안전한 신뢰 구조가 먼저입니다.
              </h2>
            </div>
            <p className="max-w-3xl text-lg leading-8 text-stone-600">
              의료와 상담 업종은 표현 하나가 리스크가 될 수 있습니다. 그래서 자극적인 광고
              문구보다 고객이 예약 전에 확인해야 할 정보를 정확히 정리하는 방식으로
              접근합니다.
            </p>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            {guardrailItems.map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  className="rounded-[20px] border border-black/8 bg-white p-6 shadow-sm"
                >
                  <div className="mb-6 grid h-12 w-12 place-items-center rounded-2xl bg-[#e8f8ee] text-[#138a50]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="mt-4 text-sm leading-6 text-stone-600">{item.copy}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="packages" className="px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
            <div>
              <p className="text-sm font-bold uppercase text-[#5a55ff]">Packages</p>
              <h2 className="mt-3 text-4xl font-semibold leading-tight sm:text-5xl">
                제작비가 아니라, 성장 단계로 제안합니다.
              </h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-stone-600">
              처음에는 작게 시작하고, 반응이 보이면 콘텐츠와 전환 개선으로 확장합니다.
            </p>
          </div>
          <div className="mb-6 grid gap-6 rounded-[28px] border border-[#ff6b3d]/25 bg-[#fff7f2] p-6 sm:p-7 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase text-[#d8562a]">Launch Offer</p>
              <h3 className="mt-2 text-3xl font-semibold leading-tight text-[#17191f]">
                초기 5팀은 무료 진단 후, 7일 랜딩 제작 범위까지만 제안합니다.
              </h3>
              <p className="mt-4 text-sm leading-6 text-stone-600">
                처음부터 큰 홈페이지를 팔지 않습니다. 먼저 현재 흐름에서 바로 고칠 부분을
                보여주고, 제작이 필요한 경우에만 작은 범위로 시작합니다.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {launchOfferItems.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl bg-white px-4 py-3 text-sm font-bold text-[#17191f] shadow-sm"
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-[#d8562a]" />
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            {packages.map((item) => (
              <article
                key={item.name}
                className="rounded-[28px] border border-black/8 bg-white p-6 shadow-[0_18px_60px_rgba(20,28,44,0.08)]"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm font-bold text-[#5a55ff]">{item.name}</p>
                    <h3 className="mt-2 text-2xl font-semibold">{item.summary}</h3>
                  </div>
                  <BarChart3 className="h-5 w-5 text-stone-400" />
                </div>
                <p className="mt-5 font-mono text-sm text-stone-500">{item.price}</p>
                <ul className="mt-6 space-y-3">
                  {item.items.map((feature) => (
                    <li
                      key={feature}
                      className="flex gap-3 text-sm font-semibold text-stone-700"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#15a36d]" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="px-5 pb-20 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-8 rounded-[36px] bg-[#17191f] p-7 text-white sm:p-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <div className="mb-6 grid h-[52px] w-[52px] place-items-center rounded-2xl bg-white/10">
              <FileText className="h-6 w-6 text-teal-300" />
            </div>
            <h2 className="text-4xl font-semibold leading-tight sm:text-5xl">
              먼저 현재 홈페이지와 콘텐츠 흐름을 진단합니다.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-stone-300">
              신청은 길게 받지 않습니다. 업종, 현재 링크, 원하는 문의 방식만 알면 첫
              화면과 신뢰 정보, CTA를 먼저 볼 수 있습니다.
            </p>
          </div>
          <div className="rounded-[28px] bg-white p-5 text-[#17191f] shadow-[0_28px_80px_rgba(0,0,0,0.22)] sm:p-6">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="text-xs font-bold uppercase text-[#5a55ff]">
                  Diagnosis Request
                </p>
                <h3 className="mt-1 text-2xl font-semibold">무료 진단 신청서</h3>
              </div>
              <span className="rounded-full bg-[#e8f8ee] px-3 py-1 text-xs font-bold text-[#138a50]">
                3분
              </span>
            </div>
            <div className="space-y-3">
              {inquiryFields.map((field) => (
                <label key={field.label} className="block">
                  <span className="mb-1.5 block text-xs font-bold text-stone-500">
                    {field.label}
                  </span>
                  <input
                    className="h-12 w-full rounded-xl border border-black/10 bg-[#f8fafc] px-4 text-sm font-medium outline-none transition placeholder:text-stone-400 focus:border-[#5a55ff]"
                    placeholder={field.placeholder}
                  />
                </label>
              ))}
            </div>
            <div className="mt-5 rounded-2xl bg-[#f7f7fb] p-4">
              <p className="text-xs font-bold uppercase text-[#5a55ff]">
                받을 수 있는 결과
              </p>
              <p className="mt-2 text-sm font-semibold leading-6 text-stone-700">
                첫 문장 후보 1개, 빠진 신뢰 정보 5개, 문의 CTA 구조 1개
              </p>
            </div>
            <a
              href="mailto:hello@example.com?subject=무료%20홈페이지%20진단%20요청&body=업종:%0A현재%20링크:%0A원하는%20문의%20방식:%0A"
              className="mt-5 inline-flex h-[52px] w-full items-center justify-center gap-2 rounded-full bg-[#17191f] px-6 text-sm font-semibold text-white transition hover:bg-[#5a55ff]"
            >
              진단 요청 메일 열기
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-black/8 px-5 py-8 text-sm text-stone-500 sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p>Brand Ops</p>
          <div className="flex gap-4">
            <span>Next.js</span>
            <span>Vercel</span>
            <span>Notion</span>
            <span>SEO</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
