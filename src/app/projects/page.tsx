import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  GraduationCap,
  HeartPulse,
  Sparkles,
  UserRoundCheck,
} from "lucide-react";
import Link from "next/link";

const projects = [
  {
    title: "Pilates Lead Page",
    segment: "필라테스/PT",
    status: "샘플",
    icon: HeartPulse,
    problem: "인스타에는 사진이 있지만 체험수업, 가격, 후기, 예약 흐름이 흩어져 있음",
    solution: "첫 화면에 체험 CTA, 프로그램 가격대, 강사 신뢰, 후기 FAQ를 압축",
    sections: ["Hero", "체험수업", "가격표", "후기", "FAQ", "예약"],
  },
  {
    title: "Beauty Booking Page",
    segment: "피부관리/뷰티",
    status: "샘플",
    icon: Sparkles,
    problem: "관리 사진은 많지만 대표 코스, 가격, 위치, 예약 방법을 찾기 어려움",
    solution: "대표 코스 3개와 카카오 예약 CTA를 모바일 첫 흐름에 배치",
    sections: ["대표 코스", "가격대", "공간 신뢰", "위치", "예약"],
  },
  {
    title: "Class Enrollment Page",
    segment: "학원/클래스",
    status: "샘플",
    icon: GraduationCap,
    problem: "블로그와 공지는 많지만 커리큘럼, 성과, 상담 신청이 분리되어 있음",
    solution: "레벨테스트, 커리큘럼, 수강 후기, 상담 CTA를 모집 페이지로 연결",
    sections: ["대상", "커리큘럼", "강사", "수강 후기", "상담"],
  },
  {
    title: "Expert Brand Page",
    segment: "1인 전문가",
    status: "샘플",
    icon: UserRoundCheck,
    problem: "콘텐츠는 있지만 처음 보는 사람이 왜 믿어야 하는지 판단하기 어려움",
    solution: "전문성 증거, 작업 방식, 패키지, 상담 CTA를 한 페이지로 정리",
    sections: ["소개", "전문성", "작업 방식", "패키지", "상담"],
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#fbfaf7] text-[#17191f]">
      <header className="border-b border-black/8 bg-white/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-stone-600 transition hover:text-[#17191f]"
          >
            <ArrowLeft className="h-4 w-4" />
            홈으로
          </Link>
          <Link
            href="/studio"
            className="rounded-full bg-[#17191f] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#5a55ff]"
          >
            3D 데모 보기
          </Link>
        </div>
      </header>

      <section className="px-5 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-sm font-bold uppercase text-[#5a55ff]">Made Sites</p>
              <h1 className="mt-3 text-5xl font-semibold leading-tight sm:text-6xl">
                만든 사이트는
                <br />
                전환 흐름으로 보여줍니다.
              </h1>
            </div>
            <p className="max-w-3xl text-lg leading-8 text-stone-600">
              아직 실제 고객 성과가 쌓이기 전까지는 모든 예시를 샘플로 명확히 표시합니다.
              앞으로 실제 작업물이 생기면 이 페이지가 포트폴리오와 사례 연구의 중심이
              됩니다.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            {projects.map((project) => {
              const Icon = project.icon;
              return (
                <article
                  key={project.title}
                  className="rounded-[30px] border border-black/8 bg-white p-6 shadow-[0_18px_60px_rgba(20,28,44,0.08)]"
                >
                  <div className="mb-8 flex items-start justify-between gap-4">
                    <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#f0f0ff] text-[#5a55ff]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="inline-flex items-center gap-1 rounded-full bg-[#fff4ef] px-3 py-1 text-xs font-bold text-[#d8562a]">
                      <BadgeCheck className="h-3.5 w-3.5" />
                      {project.status}
                    </span>
                  </div>
                  <p className="text-sm font-bold text-[#5a55ff]">{project.segment}</p>
                  <h2 className="mt-2 text-3xl font-semibold">{project.title}</h2>
                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-2xl bg-[#f7f7fb] p-4">
                      <p className="text-xs font-bold uppercase text-stone-400">문제</p>
                      <p className="mt-2 text-sm font-semibold leading-6 text-stone-700">
                        {project.problem}
                      </p>
                    </div>
                    <div className="rounded-2xl bg-[#eefbf4] p-4">
                      <p className="text-xs font-bold uppercase text-[#138a50]">해결</p>
                      <p className="mt-2 text-sm font-semibold leading-6 text-[#17191f]">
                        {project.solution}
                      </p>
                    </div>
                  </div>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.sections.map((section) => (
                      <span
                        key={section}
                        className="rounded-full border border-black/8 px-3 py-1 text-xs font-bold text-stone-500"
                      >
                        {section}
                      </span>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-8 rounded-[30px] bg-[#17191f] p-7 text-white sm:p-9">
            <p className="text-sm font-bold uppercase text-teal-300">Next Step</p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight">
              실제 고객 작업물이 생기면 Before, 제작 과정, 결과 지표를 분리해 쌓습니다.
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-6 text-stone-300">
              지금은 샘플 구조를 먼저 공개하고, 첫 3건의 무료 진단과 제작 사례가 생기면
              업종별 상세 페이지로 확장합니다.
            </p>
            <Link
              href="/#contact"
              className="mt-6 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white px-5 text-sm font-semibold text-[#17191f] transition hover:bg-teal-100"
            >
              무료 진단 신청하기
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
