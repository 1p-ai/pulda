# 프로젝트 제작 파이프라인과 MD 에이전트 운영 체계

- 문서 상태: Draft / Reference
- 기준일: 2026-07-04
- 목적: Pulda 프로젝트에서 정리한 제작 흐름, Git/Replit/Codex 역할 분담, MD 문서 축적/아카이브, 역할형 문서 에이전트 운영 방식을 다음 프로젝트에 재사용할 수 있도록 정리한다.

## 1. 기본 제작 파이프라인

현재 반복하려는 기본 프로세스는 다음 흐름을 기준으로 한다.

1. 아이디어, 요구사항 정의 초안, 클라이언트 인터뷰를 수집한다.
2. 레퍼런스, 기존 사이트 링크, 이미지, 브랜드 자료를 수집한다.
3. Stitch 2.0으로 초기 시안 또는 방향성을 만든다.
4. Gemini, GPT, Codex를 활용해 프로젝트 관리용 MD 파일 목록을 생성하거나 기존 프로젝트 MD 파일을 재정의한다.
5. GitHub에 repository를 생성한다.
6. Replit과 연동해 빠른 구현과 배포 테스트를 진행한다.
7. GitHub Desktop으로 로컬 폴더를 생성하고 커밋/푸시 흐름을 정리한다.
8. Codex로 구조 정리, 추가 빌드, QA, 문서화, 운영 기준 고도화를 진행한다.
9. 프로젝트 성격에 따라 Sanity, Make, 외부 API, Analytics, CRM 등을 추가 연동한다.

## 2. 각 도구의 권장 역할

| 도구 | 권장 역할 | 주의점 |
| --- | --- | --- |
| Stitch 2.0 | 빠른 시안, 화면 방향성, 레퍼런스 기반 UI 감각 확인 | 최종 구조/운영 문서와 분리해서 해석한다. |
| Gemini / GPT | 초기 기획 문서, 질문 정리, 문서 목차 생성 | 결과를 그대로 확정하지 말고 PM 문서가 판단한다. |
| GitHub | 기준 원본 저장소, 버전 관리, 배포 연동 기준 | 최종 소스와 문서의 기준 위치로 둔다. |
| Replit | 빠른 구현, 실험, 간단 배포 테스트 | 장기 운영 기준 저장소로 과신하지 않는다. |
| GitHub Desktop | 로컬 커밋, 푸시, 변경 이력 확인 | dist 같은 빌드 결과물 커밋 여부를 주의한다. |
| Codex | 구조화, 문서화, QA, 리팩터링, 배포 안정화 | 실제 기준 소스와 아카이브 파일을 먼저 구분한다. |
| Make / API | 자동화, 폼, 알림, 외부 데이터 연동 | 별도 integration 문서로 트리거와 실패 대응을 남긴다. |

## 3. 기준 원본 원칙

도구가 많아질수록 기준 원본을 명확히 해야 한다.

- GitHub repository를 기준 원본으로 둔다.
- Replit은 빠른 구현과 테스트 공간으로 사용한다.
- Codex 로컬 폴더는 정교한 구조화, QA, 운영 문서화 공간으로 사용한다.
- 배포 플랫폼은 GitHub 소스를 받아 빌드하는 실행 환경으로 둔다.
- 빌드 결과물은 배포 산출물이지 작업 원본이 아니다.

권장 흐름은 다음과 같다.

GitHub 기준 저장소 → Replit 빠른 구현 → GitHub push → 로컬 Codex 정교화 → QA → GitHub push → 배포 플랫폼 자동 빌드

## 4. Astro 프로젝트의 소스와 배포 파일 관리

Astro 기준으로 작업 원본과 배포 산출물을 구분한다.

| 구분 | 위치 | 설명 |
| --- | --- | --- |
| 페이지 원본 | site/src/pages/ | 실제 라우트와 페이지 소스 |
| 레이아웃 | site/src/layouts/ | 공통 페이지 구조 |
| 콘텐츠 원고 | site/src/content/ 또는 Sanity | 프로젝트, 스토리, 블로그 원고 |
| 정적 자산 | site/public/ | 이미지, 폰트, favicon 등 |
| 빌드 산출물 | site/dist/ | 배포용 결과물. 원칙적으로 직접 수정하지 않는다. |
| 운영 문서 | pm.md, qa.md, docs/ | 프로젝트 판단과 운영 기록 |

배포 이후에도 작업 원본은 서버가 아니라 GitHub에 보관한다. 배포 플랫폼에는 보통 site/dist/ 결과물이 올라가지만, 그 결과물은 GitHub의 원본 소스에서 다시 생성할 수 있어야 한다.

## 5. MD 파일 증가에 따른 리스크

MD 문서가 많아지는 것은 사이트 방문자 성능보다 프로젝트 운영, AI 협업, 빌드 관리에 영향을 준다.

### 주요 리스크

- 빌드 시 Markdown/MDX 처리 시간이 증가할 수 있다.
- Codex/GPT가 한 번에 읽어야 할 문맥이 커져 판단 속도와 정확도가 떨어질 수 있다.
- 사람이 필요한 정보를 찾는 비용이 증가한다.
- 큰 MD 파일 하나를 계속 수정하면 Git diff와 변경 추적이 어려워진다.
- PM, QA, WORKLOG가 비대해지면 현재 이슈와 과거 기록이 섞인다.

### 대응 원칙

- 현재 판단 문서와 과거 기록 문서를 분리한다.
- 각 문서 상단에 Current Summary를 둔다.
- 오래된 이슈와 작업 로그는 docs/archive/로 이관한다.
- PM은 현재 우선순위와 열린 이슈 중심으로 유지한다.
- 상세 기록은 목적별 docs/ 또는 역할별 pl 문서로 분산한다.

## 6. PM, QA, PL 역할 분리

문서를 단순 기록 파일이 아니라 역할형 에이전트로 운영한다.

| 문서 | 역할 | 유지 기준 |
| --- | --- | --- |
| agent.md | 역할 디렉터리, 인사관리자 | 어떤 MD가 어떤 역할인지 목록화한다. |
| pm.md | 최종 판단자, 지휘실 | 현재 목표, 우선순위, 열린 이슈, 배포 판단만 유지한다. |
| qa.md | 품질 관리자 | 테스트 시나리오, QA 이슈, 고객여정 검수를 관리한다. |
| WORKLOG.md | 작업 이력 | 실제 변경 내역과 검증 결과를 기록한다. |
| pl-*.md | 전문 조력자 | 리서치, 디자인, 콘텐츠, DevOps, 마케팅 등 역할별 관점을 제공한다. |

## 7. agent.md의 역할

agent.md는 프로젝트 내 역할형 문서의 인사관리자다.

담당 범위:

- 프로젝트에 존재하는 MD 역할 문서 목록화
- 각 문서의 책임 범위 정의
- 언제 어떤 문서를 참조해야 하는지 안내
- PM, QA, PL 문서 간 보고 체계 정의
- 문서가 길어졌을 때 아카이브 기준 제시

예시 구조:

| Agent | File | Role | When to Use |
| --- | --- | --- | --- |
| PM | pm.md | 전체 우선순위, 의사결정, 이슈 조정 | 작업 순서 결정, 범위 변경, 배포 판단 |
| QA | qa.md | 품질, 테스트, 고객여정 검수 | 배포 전 검수, 오류 발견, 사용성 점검 |
| PL-01 Research | docs/agents/pl-01-research.md | 인터뷰, 레퍼런스, 시장 조사 | 초기 기획, 기존 사이트 분석 |
| PL-02 Design | docs/agents/pl-02-design.md | 브랜드, UI, 시안 해석 | 시안 평가, 디자인 방향 결정 |
| PL-03 Content | docs/agents/pl-03-content.md | 콘텐츠, CMS, 카테고리 | Sanity, 프로젝트/스토리 운영 |
| PL-04 DevOps | docs/agents/pl-04-devops.md | Git, 배포, 환경변수, 접근 제어 | GitHub, Replit, 배포, 보안 |
| PL-05 Marketing | docs/agents/pl-05-marketing.md | SEO, 전환, 광고, 채널 | 검색 유입, 문의 전환, 광고 판단 |

## 8. PL 문서 네이밍 원칙

역할형 문서는 숫자만 붙이지 않고 역할명을 함께 둔다.

권장:

- docs/agents/pl-01-research.md
- docs/agents/pl-02-design.md
- docs/agents/pl-03-content.md
- docs/agents/pl-04-devops.md
- docs/agents/pl-05-marketing.md

비권장:

- pl1.md
- pl2.md
- pl_a.md

문서 파일명은 하이픈을 사용한다. 하이픈은 사람이 읽는 문서명에 적합하고, 역할과 번호를 구분하기 쉽다.

## 9. PL 문서 기본 템플릿

각 PL 문서는 다음 구조를 기본으로 한다.

~~~md
# PL-02 Design

## Current Summary

- 현재 판단:
- 열린 이슈:
- PM에게 보고할 사항:
- 다음 검토 대상:

## Role

이 문서는 디자인/브랜드 관점의 조력자 역할을 한다.

## Responsibility

- 시안 해석
- 브랜드 일관성 검토
- 레이아웃/타이포/컬러 판단
- 사용자 경험과 시각적 완성도 점검

## Report To PM

- 중요한 리스크:
- PM 결정 필요사항:
- 후속 작업 제안:

## Notes

- 누적 기록:
~~~

## 10. 아카이브 운영 기준

PM, QA, WORKLOG, PL 문서가 길어질 경우 오래된 기록은 archive로 이관한다.

권장 구조:

- docs/archive/pm/2026-07.md
- docs/archive/qa/2026-07.md
- docs/archive/worklog/2026-07.md
- docs/archive/agents/pl-02-design-2026-07.md

이관 기준:

- 종료된 이슈
- 완료된 Task Queue
- 오래된 QA 실행 로그
- 더 이상 현재 판단에 필요하지 않은 회고
- 프로젝트 완료보고서에 반영된 내용

pm.md와 qa.md는 현재판 대시보드로 유지한다.

## 11. 다음 프로젝트 템플릿 권장 파일

새 프로젝트를 시작할 때 기본으로 생성할 파일은 다음과 같다.

- README.md
- agent.md
- pm.md
- qa.md
- WORKLOG.md
- DESIGN.md
- CONTENT_GUIDE.md
- docs/00-project/project-brief.md
- docs/01-planning/requirements.md
- docs/01-planning/functional-spec.md
- docs/01-planning/ia.md
- docs/02-development/architecture.md
- docs/02-development/integrations.md
- docs/04-quality/qa-checklist.md
- docs/agents/pl-01-research.md
- docs/agents/pl-02-design.md
- docs/agents/pl-03-content.md
- docs/agents/pl-04-devops.md
- docs/agents/pl-05-marketing.md
- docs/archive/.gitkeep

## 12. 운영 결론

이 파이프라인의 핵심은 도구를 많이 쓰는 것이 아니라, 각 도구와 문서의 역할을 분리하는 것이다.

- GitHub는 기준 원본이다.
- Replit은 빠른 구현과 배포 테스트다.
- Codex는 구조화, QA, 문서화, 고도화다.
- PM은 현재 판단과 우선순위의 지휘실이다.
- QA는 고객여정과 배포 안정성의 방어선이다.
- PL 문서는 필요할 때 꺼내 쓰는 전문 조력자다.
- archive는 프로젝트 기억을 잃지 않되 현재 판단을 무겁게 만들지 않기 위한 저장소다.
