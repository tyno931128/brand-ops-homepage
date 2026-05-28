# Prelaunch UX Risk Register

기준일: 2026-05-28

이 문서는 Brand Ops 홈페이지를 공개하기 전 UX, 성능, 신뢰, 전환 리스크를 점검하기 위한 문서다.

## 기준

랜딩페이지는 멋져 보이는 것보다 다음을 빨리 달성해야 한다.

1. 방문자가 5초 안에 무엇을 해주는 서비스인지 이해한다.
2. 첫 스크롤 안에서 누가 대상인지 보인다.
3. 무료 진단을 받으면 무엇을 얻는지 보인다.
4. 문의 CTA가 하나의 행동으로 이어진다.
5. 모바일에서 느리거나 복잡하게 느껴지지 않는다.
6. 샘플과 실제 사례가 혼동되지 않는다.
7. 의료/상담 업종 문구가 과장이나 보장으로 보이지 않는다.

## 리스크 목록

| ID    | Risk                                                    | Severity | Current Signal                                                 | Mitigation                                                                                                               |
| ----- | ------------------------------------------------------- | -------- | -------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| UX-01 | 섹션이 많아 핵심 오퍼가 묻힐 수 있음                    | Medium   | 타겟, 진단, AI, Before/After, 규제, 패키지, Contact까지 길어짐 | 첫 화면 CTA와 무료 진단 섹션이 가장 강하게 보이도록 유지                                                                 |
| UX-02 | 3D/애니메이션이 모바일 성능을 방해할 수 있음            | Medium   | Three.js HeroScene, CSS 3D 패널, 움직이는 데모가 있음          | reduced motion 유지, HeroScene canvas를 장식 요소로 처리, 불필요한 drawing buffer 제거, 모바일 실기기/브라우저 성능 확인 |
| UX-03 | 샘플 진단이 실제 사례로 오해될 수 있음                  | High     | Sample Audits 섹션 존재                                        | 제목에 실제 고객 사례가 아님을 계속 명시                                                                                 |
| UX-04 | 의료/상담 업종 문구가 규제 리스크를 만들 수 있음        | High     | 병원/상담 업종 타겟 포함                                       | 효과 보장, 후기 과장, 전후 비교, 비교 우위 표현 금지                                                                     |
| UX-05 | 연락처 placeholder로 인해 실제 문의가 유실될 수 있음    | High     | `hello@example.com` 사용 중                                    | 배포 전 실제 이메일/폼/Notion DB 연결 필요                                                                               |
| UX-06 | Local SEO/검색 등록을 상위 노출 보장처럼 오해할 수 있음 | Medium   | SEO/검색 등록 문서 존재                                        | 검색 순위 보장 금지 문구 유지                                                                                            |
| UX-07 | 가격이 낮아 보이면 단순 외주 노동처럼 인식될 수 있음    | Medium   | 79만~149만 원 가격 가설                                        | 무료 진단과 브랜딩 설계 가치를 먼저 설명                                                                                 |
| UX-08 | Notion/AI 운영이 복잡하게 보일 수 있음                  | Medium   | AI 팀, Notion, CRM, 콘텐츠 운영 설명이 많음                    | 고객용 페이지에서는 결과와 진단 산출물 중심으로 유지                                                                     |
| UX-09 | GitHub/Vercel 공개 전 민감 정보 관리 필요               | High     | Notion 페이지 링크와 문서 다수 존재                            | 실제 고객 정보/API key/비공개 DB ID 커밋 금지                                                                            |
| UX-10 | 모바일에서 긴 한국어 문장이 카드 밖으로 넘칠 수 있음    | Medium   | 카드와 버튼이 많음                                             | 브라우저 모바일 폭에서 overflow와 텍스트 줄바꿈 확인                                                                     |

## 배포 전 필수 확인

- [ ] `hello@example.com`을 실제 연락처로 교체
- [ ] production URL 확정
- [ ] metadata canonical/OG URL 추가
- [ ] GitHub remote 연결 전 민감 정보 확인
- [ ] Vercel project link 생성
- [ ] Desktop/mobile 시각 QA
- [ ] No horizontal overflow
- [ ] 3D scene nonblank
- [ ] reduced motion 동작 확인
- [ ] 실제 사례가 아닌 샘플은 샘플로 표시
- [ ] 의료/상담 문구는 보장/후기/전후 비교 표현 없음
- [ ] `pnpm check` 통과

## UX 줄이기 후보

다음 중 하나라도 페이지가 길거나 산만해 보이면 줄인다.

1. AI Engine 설명을 3D 장면과 proof points 중심으로 축소한다.
2. Operating Screens는 4개에서 3개로 줄인다.
3. User Lens와 Regulated Services가 중복되면 Regulated Services를 문서 링크로 옮긴다.
4. Packages와 Launch Offer는 합칠 수 있다.
5. Footer는 지금처럼 가볍게 유지한다.

## 성능 체크 기준

- Lighthouse 또는 PageSpeed Insights에서 모바일 성능을 확인한다.
- LCP가 느리면 HeroScene 로딩 전략을 조정한다.
- 3D가 첫 화면 메시지를 가리거나 늦게 보이게 하면 HeroScene을 아래 섹션으로 내린다.
- 모바일에서 애니메이션이 과하면 CSS motion을 더 줄인다.
- 2026-05-28 09:10 기준 HeroScene canvas는 `aria-hidden="true"`와 `role="presentation"`을 부여했고, 스크린샷 보존용 drawing buffer는 제거했다.

## 참고 링크

- [Google Ads Help - Evaluate landing page performance](https://support.google.com/google-ads/answer/7543502?hl=en)
- [Chrome Developers - Speed is now a landing page factor](https://developer.chrome.com/blog/search-ads-speed)
- [web.dev - Largest Contentful Paint](https://web.dev/articles/lcp)
- [web.dev - Site speed and business metrics](https://web.dev/articles/site-speed-and-business-metrics)
- [Baymard - Product page UX and concise descriptions](https://baymard.com/blog/rei-product-page-ux)
