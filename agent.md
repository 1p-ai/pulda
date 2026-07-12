# Pulda Agent Directory

- 문서 상태: Active / Role Directory
- 기준일: 2026-07-04
- 역할: Pulda 프로젝트의 역할형 MD 문서를 목록화하고, 각 문서가 언제 어떤 책임으로 호출되는지 정의한다.

## Purpose

이 문서는 프로젝트 내 역할형 MD 문서의 인사관리자다. Codex와 사용자는 이 문서를 기준으로 PM, QA, PL 문서의 역할을 구분하고, 필요한 관점의 문서를 호출한다.

## Operating Rule

- PM은 최종 우선순위와 범위 조정 권한을 가진다.
- QA는 품질과 배포 안정성에 대해 PM에게 이슈를 보고한다.
- PL 문서는 전문 조력자로서 직접 최종 결정을 확정하지 않고, PM에게 리스크와 제안을 보고한다.
- Dev Guardrail은 코드 수정 시 전체 재생성, 기존 구현 삭제, 히스토리 없는 대규모 교체를 막는 기준으로 사용한다.
- WORKLOG는 실제 작업 이력과 검증 결과를 기록한다.
- 오래된 판단과 로그는 docs/archive/로 이관한다.

## Core Agents

| Agent | File | Role | When to Use | Reports To |
| --- | --- | --- | --- | --- |
| PM | pm.md | 전체 우선순위, 범위, 이슈 조정, 배포 판단 | 작업 순서 결정, 범위 변경, 외부 승인 필요사항, QA/PL 보고 취합 | User |
| QA | qa.md | 품질, 테스트, 고객여정, 배포 전 검수 | 빌드/라우트/사용성/운영 리스크 점검 | PM |
| Dev Guardrail | dev.md | 코드 수정 안전 기준, 기존 구현 보존, 히스토리 주석 기준 | Codex/Replit/Gemini 등 코드 수정 전 공통 확인 | PM + PL-06 |
| Worklog | WORKLOG.md | 작업 이력과 검증 기록 | 변경 이력 확인, 회고, 세션 복구 | PM |

## PL Agents

| Agent | File | Role | When to Use | Reports To |
| --- | --- | --- | --- | --- |
| PL-01 Research | docs/agents/pl-01-research.md | 인터뷰, 레퍼런스, 기존 사이트, 시장 조사 | 초기 기획, 경쟁사/레퍼런스 분석, 기존 사이트 해석 | PM |
| PL-02 Design | docs/agents/pl-02-design.md | 브랜드, UI, 시안 해석, 시각 품질 | Stitch 시안 평가, 디자인 방향, 포트폴리오 전시력 점검 | PM |
| PL-03 Content | docs/agents/pl-03-content.md | 콘텐츠, CMS, 프로젝트/스토리 운영 | Sanity, Markdown, 태그/카테고리, 원고 품질 관리 | PM |
| PL-04 DevOps | docs/agents/pl-04-devops.md | Git, Replit, 배포, 보안, 환경변수 | GitHub 연결, 배포 설정, /admin 접근 제어, 롤백 | PM |
| PL-05 Marketing | docs/agents/pl-05-marketing.md | SEO, 전환, 광고, 분석, 채널 전략 | 검색 유입, 문의 전환, GA/Search Console/Naver, 광고 판단 | PM |
| PL-06 Development | docs/agents/pl-06-development.md | Astro 구현, CSS/JS 수정, 컴포넌트 구조, 사이드이펙트 통제 | 실제 소스 수정, 빌드 오류, 라이트/다크 분기, 런타임 장애 | PM |
| PL-07 Knowledge Ops | docs/agents/pl-07-knowledge-ops.md | Notion, Google Drive, NotebookLM, Stitch, Workspace 자료 흐름과 지식 기반 관리 | 자료 보관, 요약, 시안, 히스토리, 병목/중복/유실 점검 | PM |

## Invocation Examples

- agent.md 기준으로 PM에게 현재 우선순위를 재정렬하라.
- PL-04 DevOps 관점으로 /admin 접근 제어 리스크를 검토하라.
- PL-02 Design 관점으로 프로젝트 상세가 수주 전시장 역할을 하는지 평가하라.
- QA 기준으로 배포 전 고객여정 테스트를 수행하고 PM에게 보고하라.
- dev.md 기준으로 기존 코드를 통째로 갈아엎지 않고 수정 사유와 이전 구현 의도를 남겨라.
- PL-07 Knowledge Ops 기준으로 Notion, Drive, NotebookLM, Stitch의 역할과 자료 흐름을 정리하라.

## Archive Rule

- pm.md와 qa.md는 현재판 대시보드로 유지한다.
- 완료된 장기 로그, 오래된 판단, 종료된 이슈는 docs/archive/로 이관한다.
- PL 문서가 길어지면 해당 월 또는 프로젝트 단계별로 archive 사본을 만든다.

## Skill Feedback Rule

이 역할 체계에서 반복적으로 유효했던 규칙은 docs/00-project/skill-operating-model.md와 docs/00-project/workflow-md-agent-system.md에 반영해 향후 Skill 고도화 자료로 사용한다.


## Context Transition Rule

PM은 대화가 길어져 작업 품질 저하, 지시 혼선, 할루시네이션, 반복 사이드이펙트가 우려될 때 새 채팅 전환을 제안한다.

전환 시 PM은 다음을 준비한다.

- 현재 완료 작업 요약
- 열린 이슈와 우선순위
- 다음 Task 목록
- 새 채팅에서 반드시 읽어야 할 문서
- 반복하면 안 되는 실수
- 코드 수정 시 dev.md 기준의 기존 구현 보존과 히스토리 주석 원칙

QA와 PL 문서는 PM의 전환 판단에 필요한 리스크 근거를 제공한다.

## 2026-07-11 QA Broadcast

- QA가 현재 콘텐츠 확장, 이미지 보강, 캡처 슬롯, 브랜드 표기 정리 작업을 검토했다.
- 배포 차단 이슈는 없지만, 콘텐츠 길이 경고와 실제 캡처 미반영은 열린 이슈로 관리한다.
- 역할별 공유 기준:
  - PM: 캡처 반영, 콘텐츠 보강, 도메인/SEO/GEO 게이트 순으로 우선순위 관리.
  - QA: 빌드/QA 통과와 별개로 콘텐츠 설득력, 다크모드 표기, 도메인 산출물 일치를 계속 감시.
  - Dev Guardrail: 캡처 슬롯 교체와 표기 변경은 작은 패치로만 수행하고 기존 레이아웃 규칙 유지.
  - PL 문서: 각 전문 영역에서 QA 열린 이슈를 후속 작업의 기준으로 삼는다.
