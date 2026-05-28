"use client";

import { ArrowUp, CheckCircle2, Search, Sparkles, Target } from "lucide-react";
import type { ReactNode } from "react";
import { useState } from "react";

const demoProfiles = [
  {
    label: "필라테스",
    brand: "필라테스 스튜디오",
    firstLine: "체형 고민이 있는 직장인이 바로 이해할 한 줄 메시지",
    leadSignal: "인스타는 있는데 가격·후기·체험 예약이 흩어져 있음",
    nextAction: "체험수업 CTA와 가격표, 후기, FAQ를 첫 화면에 배치",
    loop: ["체험", "가격", "후기", "예약"],
  },
  {
    label: "피부관리",
    brand: "피부관리실",
    firstLine: "처음 방문하는 고객이 안심할 수 있는 시술 소개",
    leadSignal: "시술 사진은 많지만 코스·가격·주의사항이 찾기 어려움",
    nextAction: "대표 프로그램, 후기, 위치, 예약 버튼을 한 흐름으로 정리",
    loop: ["코스", "가격", "후기", "예약"],
  },
  {
    label: "학원",
    brand: "영어 학원",
    firstLine: "학부모가 비교할 커리큘럼과 상담 이유",
    leadSignal: "블로그 글은 있지만 수업 과정·성과·상담 CTA가 분리됨",
    nextAction: "레벨테스트, 커리큘럼, 후기, 상담 신청을 첫 화면에 연결",
    loop: ["과정", "성과", "후기", "상담"],
  },
  {
    label: "1인 전문가",
    brand: "브랜딩 코치",
    firstLine: "왜 이 사람에게 맡겨야 하는지 설명하는 소개 문장",
    leadSignal: "콘텐츠는 쌓였지만 서비스와 상담 방식이 명확하지 않음",
    nextAction: "전문성 증거, 패키지, 상담 CTA를 한 페이지로 압축",
    loop: ["소개", "증거", "상품", "상담"],
  },
];

export function BrandDemo() {
  const [brand, setBrand] = useState("필라테스 스튜디오");

  const normalizedBrand = brand.trim() || "내 브랜드";
  const currentProfile =
    demoProfiles.find(
      (profile) =>
        normalizedBrand.includes(profile.label) ||
        normalizedBrand.includes(profile.brand),
    ) ?? demoProfiles[0];

  return (
    <div className="demo-shell relative mx-auto w-full max-w-[680px]">
      <div className="absolute inset-0 rounded-[44px] bg-[radial-gradient(circle_at_25%_20%,#9ee7ff_0,#c7dbff_34%,transparent_58%),radial-gradient(circle_at_75%_30%,#ff8ab3_0,#ffe2a8_36%,transparent_64%)] opacity-90 blur-0" />
      <div className="relative overflow-hidden rounded-[40px] border border-black/8 bg-white/72 p-5 shadow-[0_40px_120px_rgba(21,27,38,0.16)] backdrop-blur-xl">
        <div className="mx-auto mb-5 flex h-[52px] max-w-[420px] items-center gap-3 rounded-full border border-white/70 bg-white/75 px-5 text-[#1a1d23] shadow-[0_16px_50px_rgba(20,28,44,0.12)]">
          <Search className="h-5 w-5 text-[#5a55ff]" />
          <input
            aria-label="브랜드 또는 업종 입력"
            value={brand}
            onChange={(event) => setBrand(event.target.value)}
            className="min-w-0 flex-1 bg-transparent text-sm font-medium outline-none placeholder:text-stone-400"
            placeholder="업종이나 브랜드 이름을 입력해보세요"
          />
          <button
            type="button"
            aria-label="진단 시작"
            className="grid h-9 w-9 place-items-center rounded-full bg-[#17191f] text-white transition hover:bg-[#5a55ff]"
          >
            <ArrowUp className="h-4 w-4 rotate-45" />
          </button>
        </div>

        <div className="mb-5 flex flex-wrap justify-center gap-2">
          {demoProfiles.map((profile) => (
            <button
              key={profile.label}
              type="button"
              onClick={() => setBrand(profile.brand)}
              className="rounded-full bg-white/72 px-3 py-1.5 text-xs font-semibold text-stone-600 transition hover:bg-[#17191f] hover:text-white"
            >
              {profile.label}
            </button>
          ))}
        </div>

        <div className="demo-device mx-auto max-w-[430px] rounded-t-[36px] border-[10px] border-[#111827] bg-[#f8fafc] p-4 shadow-[0_28px_70px_rgba(15,23,42,0.28)]">
          <div className="mb-4 flex items-center justify-between rounded-2xl bg-white px-4 py-3 shadow-sm">
            <div>
              <p className="text-xs font-semibold text-stone-400">AI 진단 결과</p>
              <h3 className="mt-1 text-lg font-bold text-[#111827]">{normalizedBrand}</h3>
            </div>
            <div className="grid h-11 w-11 place-items-center rounded-2xl bg-[#efeefe] text-[#5a55ff]">
              <Sparkles className="h-5 w-5" />
            </div>
          </div>

          <div className="space-y-3">
            <DemoRow
              icon={<Target className="h-4 w-4" />}
              title="첫 문장"
              copy={currentProfile.firstLine}
              tone="purple"
            />
            <DemoRow
              icon={<Search className="h-4 w-4" />}
              title="리드 신호"
              copy={currentProfile.leadSignal}
              tone="blue"
            />
            <DemoRow
              icon={<CheckCircle2 className="h-4 w-4" />}
              title="다음 액션"
              copy={currentProfile.nextAction}
              tone="green"
            />
          </div>

          <div className="mt-5 rounded-2xl bg-[#111827] p-4 text-white">
            <div className="mb-3 flex items-center justify-between">
              <p className="text-xs font-semibold text-white/60">이번 주 개선 루프</p>
              <span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_18px_#6ee7b7]" />
            </div>
            <div className="grid grid-cols-4 gap-2 text-center text-[10px] font-semibold text-white/72">
              {currentProfile.loop.map((item) => (
                <div key={item} className="rounded-xl bg-white/8 px-2 py-3">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function DemoRow({
  icon,
  title,
  copy,
  tone,
}: {
  icon: ReactNode;
  title: string;
  copy: string;
  tone: "purple" | "blue" | "green";
}) {
  const toneClass = {
    purple: "bg-[#efeefe] text-[#5a55ff]",
    blue: "bg-[#e7f4ff] text-[#1974d2]",
    green: "bg-[#e8f8ee] text-[#138a50]",
  }[tone];

  return (
    <div className="demo-row flex gap-3 rounded-2xl bg-white p-3 shadow-sm">
      <div
        className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl ${toneClass}`}
      >
        {icon}
      </div>
      <div className="min-w-0">
        <p className="text-xs font-bold text-stone-500">{title}</p>
        <p className="mt-1 text-sm font-semibold leading-5 text-[#111827]">{copy}</p>
      </div>
    </div>
  );
}
