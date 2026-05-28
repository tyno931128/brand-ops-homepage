import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Brand Ops | 무료 진단으로 시작하는 브랜딩 랜딩페이지 제작",
  description:
    "필라테스, 피부관리, 학원, 1인 전문가를 위한 전환형 브랜딩 랜딩페이지 제작. 무료 홈페이지 진단으로 첫 문장, 신뢰 정보, 문의 버튼을 먼저 정리합니다.",
  keywords: [
    "무료 홈페이지 진단",
    "브랜딩 랜딩페이지",
    "랜딩페이지 제작",
    "필라테스 홈페이지 제작",
    "피부관리실 홈페이지 제작",
    "학원 홈페이지 제작",
    "개인 브랜딩 홈페이지",
    "소상공인 홈페이지 제작",
    "예약 홈페이지 제작",
  ],
  openGraph: {
    title: "Brand Ops | 무료 진단으로 시작하는 브랜딩 랜딩페이지 제작",
    description:
      "인스타와 검색에서 들어온 고객이 믿고 문의하도록 첫 문장, 신뢰 정보, 문의 버튼을 정리하는 브랜딩 랜딩페이지 제작 서비스.",
    type: "website",
    locale: "ko_KR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Brand Ops | 브랜딩 랜딩페이지 제작",
    description:
      "무료 홈페이지 진단으로 시작해 7일 브랜딩 랜딩과 30일 운영 개선으로 이어지는 제작 서비스.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
