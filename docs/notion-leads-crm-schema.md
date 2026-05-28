# Notion Leads CRM Schema

기준일: 2026-05-28

이 문서는 AI 브랜딩 홈페이지 제작 사업의 리드, 무료 진단, 상담, 제안, 수주 과정을 Notion에서 관리하기 위한 CRM 설계다.

## 설계 원칙

1. 첫 버전은 단순해야 한다.
   리드를 많이 모으는 것보다 다음 후속 연락을 놓치지 않는 것이 중요하다.

2. 리드는 점수화한다.
   홈페이지 없음, 인스타 운영, 객단가, 후기 자료, 예약/상담 전환 가능성을 기준으로 우선순위를 정한다.

3. 무료 진단을 파이프라인의 첫 상품처럼 다룬다.
   무료 진단은 단순 호의가 아니라 상담과 유료 제안으로 이어지는 전환 단계다.

4. 모든 거절 사유를 기록한다.
   가격, 필요 없음, 나중에, 직접 제작, 연락 두절 같은 사유는 다음 홈페이지 문구와 DM 개선에 반영한다.

## Database: Leads

| Property        | Type   | Purpose                                                                              |
| --------------- | ------ | ------------------------------------------------------------------------------------ |
| Lead Name       | Title  | 사업명 또는 담당자명                                                                 |
| Segment         | Select | Pilates/PT, Beauty, Academy, Expert, Local Service, Clinic                           |
| Priority        | Select | High, Medium, Low                                                                    |
| Lead Score      | Number | 0~20점                                                                               |
| Status          | Select | Found, Diagnosed, Contacted, Replied, Call Booked, Proposal Sent, Won, Lost, Nurture |
| Source          | Select | Instagram, Naver Place, Blog, Referral, Search, Threads, Other                       |
| Profile URL     | URL    | 인스타/플레이스/홈페이지 등 현재 링크                                                |
| Contact         | Text   | DM, 이메일, 전화, 카카오 등                                                          |
| Pain Signal     | Text   | 발견한 문제 신호                                                                     |
| Suggested Angle | Text   | 무료 진단 제안 각도                                                                  |
| Last Touch      | Date   | 마지막 연락일                                                                        |
| Next Follow-up  | Date   | 다음 후속 연락일                                                                     |
| Lost Reason     | Select | Price, No Need, Later, DIY, No Reply, Bad Fit, Compliance Risk                       |
| Notes           | Text   | 자유 메모                                                                            |

## Database: Audit Reports

| Property            | Type          | Purpose                                          |
| ------------------- | ------------- | ------------------------------------------------ |
| Report Name         | Title         | 무료 진단 제목                                   |
| Related Lead        | Relation      | Leads와 연결                                     |
| Segment             | Rollup/Select | 타겟 업종                                        |
| First Screen Issue  | Text          | 첫 화면 문제                                     |
| Missing Trust Info  | Text          | 빠진 신뢰 정보                                   |
| CTA Issue           | Text          | 문의/예약 동선 문제                              |
| Suggested One-liner | Text          | 첫 문장 제안                                     |
| Recommended Scope   | Select        | Free Fix, 7-day Landing, Redesign, 30-day Growth |
| Status              | Select        | Draft, Sent, Discussed, Converted, Archived      |
| Sent At             | Date          | 진단 발송일                                      |

## Database: Outreach Logs

| Property     | Type     | Purpose                                                                       |
| ------------ | -------- | ----------------------------------------------------------------------------- |
| Log Name     | Title    | 로그 제목                                                                     |
| Related Lead | Relation | Leads와 연결                                                                  |
| Channel      | Select   | Instagram DM, Threads, Email, Phone, Kakao                                    |
| Message Type | Select   | First Touch, Follow-up, Audit Sent, Call Reminder, Proposal Follow-up         |
| Message      | Text     | 보낸 문구                                                                     |
| Response     | Text     | 답장 내용                                                                     |
| Outcome      | Select   | No Reply, Replied, Audit Requested, Call Booked, Proposal Requested, Rejected |
| Created At   | Date     | 발송/기록일                                                                   |

## Database: Deals

| Property            | Type     | Purpose                                                         |
| ------------------- | -------- | --------------------------------------------------------------- |
| Deal Name           | Title    | 제안명                                                          |
| Related Lead        | Relation | Leads와 연결                                                    |
| Package             | Select   | Free Audit, 7-day Landing, Redesign, 30-day Growth              |
| Amount              | Number   | 제안 금액                                                       |
| Stage               | Select   | Qualified, Scope Defined, Proposal Sent, Negotiation, Won, Lost |
| Probability         | Number   | 예상 확률                                                       |
| Proposal URL        | URL      | 제안서 링크                                                     |
| Expected Close Date | Date     | 예상 마감일                                                     |
| Close Reason        | Text     | 수주/실패 이유                                                  |

## Recommended Views

### Leads: Pipeline Board

Group by `Status`.

순서:

1. Found
2. Diagnosed
3. Contacted
4. Replied
5. Call Booked
6. Proposal Sent
7. Won
8. Lost
9. Nurture

### Leads: Today Follow-up

Filter:

- `Next Follow-up` is on or before today
- `Status` is not Won
- `Status` is not Lost

Sort:

- Priority descending
- Lead Score descending

### Leads: High Score Prospects

Filter:

- `Lead Score` >= 14
- `Status` is Found or Diagnosed

### Audit Reports: Ready To Send

Filter:

- `Status` is Draft
- `Suggested One-liner` is not empty
- `CTA Issue` is not empty

## Lead Score Formula

초기에는 수동 점수로 충분하다. 나중에 Notion formula로 바꿀 수 있다.

```text
인스타/블로그/플레이스 운영 중: +3
홈페이지 없음 또는 오래됨: +3
예약/상담/견적이 매출과 직결: +3
객단가가 낮지 않음: +2
후기/사진/성과 자료 있음: +2
가격/프로그램/FAQ가 흩어짐: +2
지역 검색 니즈 있음: +1
의료/법률/금융 표현 리스크: -2
기능 개발 요구 큼: -3
온라인 마케팅 의지 낮음: -3
```

## Follow-up Rules

| Situation             | Next Follow-up    |
| --------------------- | ----------------- |
| 첫 DM 발송, 답장 없음 | 3일 뒤            |
| 무료 진단 발송        | 2일 뒤            |
| 상담 완료             | 1일 뒤            |
| 제안서 발송           | 3일 뒤            |
| 나중에 연락 요청      | 요청 월의 첫째 주 |
| 부적합 리드           | Nurture 또는 Lost |

## Daily 10AM CRM Routine

1. Today Follow-up view를 확인한다.
2. High Score Prospects에서 오늘 연락할 5개 리드를 고른다.
3. 무료 진단 1개를 작성하거나 개선한다.
4. 답장/거절 사유를 Outreach Logs에 남긴다.
5. 홈페이지 문구에 반영할 고객 질문을 1개 뽑는다.

## 참고 링크

- [Notion Small Business CRM Template](https://www.notion.com/templates/small-business-crm)
- [Sasanova CRM Pipeline Template](https://www.sasanova.com/guides/crm-pipeline-template)
- [NoteLinker Free Notion CRM Template](https://www.notelinker.com/tools/notion-crm-template)
- [Grizzly Templates Free Notion CRM](https://www.grizzlytemplates.com/free-notion-crm-template)
