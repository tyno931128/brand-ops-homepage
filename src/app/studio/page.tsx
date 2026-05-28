import { ArrowLeft, Gamepad2, Sparkles } from "lucide-react";
import Link from "next/link";
import { InteractivePortfolioWorld } from "@/components/interactive-portfolio-world";

export default function StudioPage() {
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
            href="/projects"
            className="rounded-full bg-[#17191f] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#5a55ff]"
          >
            작업물 보기
          </Link>
        </div>
      </header>

      <section className="px-5 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-black/8 bg-white px-3 py-2 text-sm font-semibold text-stone-700 shadow-sm">
              <Gamepad2 className="h-4 w-4 text-[#5a55ff]" />
              Interactive Brand Studio
            </div>
            <h1 className="text-5xl font-semibold leading-[1.03] tracking-normal sm:text-6xl">
              움직이면서 보는
              <br />
              3D 포트폴리오 월드
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-600">
              브루노 사이먼식 인터랙티브 탐색에서 아이디어를 얻되, Brand Ops에 맞게 만든
              원본 데모입니다. 캐릭터를 움직이며 작업물, 무료 진단, 제작 방식, 패키지를
              열어볼 수 있습니다.
            </p>
          </div>

          <InteractivePortfolioWorld />

          <div className="mt-8 grid gap-4 rounded-[28px] border border-black/8 bg-white p-6 shadow-sm md:grid-cols-3">
            {[
              {
                title: "귀여운 캐릭터",
                copy: "로봇형 캐릭터를 키보드와 마우스로 움직이며 브랜드 공간을 탐색합니다.",
              },
              {
                title: "작업물 게이트",
                copy: "각 패드에 접근하면 작업물, 진단, 프로세스, 패키지 정보가 열립니다.",
              },
              {
                title: "확장 가능한 구조",
                copy: "실제 고객 사례가 쌓이면 패드를 사이트별 포트폴리오 입구로 바꿀 수 있습니다.",
              },
            ].map((item) => (
              <article key={item.title}>
                <Sparkles className="mb-5 h-5 w-5 text-[#5a55ff]" />
                <h2 className="text-xl font-semibold">{item.title}</h2>
                <p className="mt-3 text-sm leading-6 text-stone-600">{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
