# 프로젝트 제작 파이프라인과 MD 에이전트 운영 체계

- 문서 상태: Draft / Reference
- 기준일: 2026-07-04
- 목적: Pulda 프로젝트에서 정리한 제작 흐름, Git/Replit/Codex 역할 분담, MD 문서 축적/아카이브, 역할형 문서 에이전트 운영 방식을 다음 프로젝트에 재사용할 수 있도록 정리한다.

## 1. 기본 제작 파이프라인

현재 반복하려는 기본 프로세스는 다음 흐름을 기준으로 한다.

1. 아이디어, 요구사항 정의 초안, 클라이언트 인터뷰를 수집한다.
2. 레퍼런스, 기존 사이트 링크, 이미지, 브랜드 자료를 수집한다.
3. Google Drive에 대용량 참고 파일과 원본 자료를 보관한다.
4. NotebookLM으로 프로젝트 용도별 작업 기준과 핵심 맥락을 압축 요약한다.
5. ChatGPT로 기획 초안, 요구사항 초안, 질문 정리, 문서 구조 초안을 만든다.
6. Stitch 2.0으로 초기 시안 또는 HTML 초안 방향성을 만든다.
7. GitHub에 repository를 생성한다.
8. Replit과 연동해 빠른 구현과 배포 테스트를 진행한다.
9. GitHub Desktop으로 로컬 폴더를 생성하고 커밋/푸시 흐름을 정리한다.
10. Codex로 구조 정리, 추가 빌드, QA, 문서화, 운영 기준 고도화를 진행한다.
11. Notion에 프로젝트 히스토리, 결정 근거, 일일 업데이트를 사관처럼 기록한다.
12. 프로젝트 성격에 따라 Sanity, Make, 외부 API, Analytics, CRM 등을 추가 연동한다.
13. 장기적으로 맥미니 기반 로컬 에이전트 환경을 구축해 반복 업무와 낮은 수준의 작업을 이관한다.

## 2. 각 도구의 권장 역할

| 도구 | 권장 역할 | 주의점 |
| --- | --- | --- |
| ChatGPT | 기획 초안 관장, 요구사항 초안, 질문 정리, 문서 구조 초안 | 결과를 그대로 확정하지 말고 PM 문서가 판단한다. |
| Stitch 2.0 | 빠른 시안, 화면 방향성, HTML 초안 | 최종 구조/운영 문서와 분리해서 해석한다. |
| Gemini | 보조 아이디어, 비교 검토, 초안 보강 | 기준 원본으로 삼지 않고 교차 검토용으로 사용한다. |
| GitHub | 실시간 소스와 MD 기준 원본, 버전 관리, 배포 연동 기준 | 최종 소스와 문서의 기준 위치로 둔다. |
| Replit | 수행 담당, 빠른 구현, 실험, 간단 배포 테스트 | 장기 운영 기준 저장소로 과신하지 않고 GitHub로 되돌린다. |
| GitHub Desktop | 로컬 커밋, 푸시, 변경 이력 확인 | dist 같은 빌드 결과물 커밋 여부를 주의한다. |
| Codex | 수행 담당, 구조화, 코드 수정, 문서화, QA, 리팩터링, 배포 안정화 | 실제 기준 소스와 아카이브 파일을 먼저 구분한다. |
| Notion | 지식 기록의 원본, 프로젝트 다이어리, 히스토리, 결정 근거, 일일 업데이트 | 소스 원본이 아니라 지식 기록 원본으로 둔다. |
| Google Drive | 대용량 참고 파일, 원본 자료, 백업 | Git에 넣기 어려운 이미지/영상/문서 원본을 보관한다. |
| NotebookLM | 보관/백업, 프로젝트별 압축 요약, 작업 기준 특화 브리핑 | 긴 자료를 빠르게 재사용 가능한 기준으로 요약한다. |
| Gmail | 외부 커뮤니케이션, 요청/결정 수신 | 중요한 결정은 PM 문서 또는 Notion으로 이관한다. |
| Calendar | 일정, 마감, 리뷰 타이밍 | PM Task Queue와 배포/리뷰 일정에 연결한다. |
| Google Workspace | 협업 문서, 공유 자료, 초안 협업 | 확정 기준은 GitHub MD 또는 Notion 요약으로 연결한다. |
| Make / API | 자동화, 폼, 알림, 외부 데이터 연동 | 별도 integration 문서로 트리거와 실패 대응을 남긴다. |
| Local Agents | 반복 업무, 낮은 수준의 정리, 초벌 QA, 파일 분류 | 맥미니 도입 이후 점진 구축해 클라우드 의존도를 낮춘다. |
| Hermes Agent | 로컬 자생 에이전트 후보 | 반복 처리와 로컬 자동화부터 맡긴다. |

## 3. 기준 원본 원칙

도구가 많아질수록 기준 원본을 명확히 해야 한다.

- GitHub repository를 실시간 소스와 MD 기준 원본으로 둔다.
- Notion은 지식 기록의 원본으로 둔다.
- Google Drive와 NotebookLM은 보관과 백업 축으로 둔다.
- ChatGPT는 기획 초안을 관장한다.
- Replit은 빠른 구현과 테스트를 수행한다.
- Codex 로컬 폴더는 정교한 수행, 구조화, QA, 운영 문서화 공간으로 사용한다.
- 배포 플랫폼은 GitHub 소스를 받아 빌드하는 실행 환경으로 둔다.
- 빌드 결과물은 배포 산출물이지 작업 원본이 아니다.

권장 흐름은 다음과 같다.

GitHub 기준 저장소 → Replit 빠른 구현 → GitHub push → 로컬 Codex 정교화 → QA → GitHub push → 배포 플랫폼 자동 빌드

지식 운영까지 포함한 순환 구조는 다음과 같다.

ChatGPT 기획 초안 → Drive/NotebookLM 보관과 백업 → Stitch 시안/HTML 초안 → GitHub 실시간 기준 원본화 → Codex/Replit 수행 → QA/PM 검증 → Notion 지식 기록 원본화 → MD/Skill/Template 환류와 성장

### 3.1 Google/Notion 지식 운영 원칙

- ChatGPT는 기획 초안의 업무를 관장한다.
- Codex와 Replit은 수행 담당이다.
- GitHub는 실시간 소스와 MD 기준 원본이다.
- Notion은 조선시대 사관처럼 프로젝트의 결정, 히스토리, 일일 업데이트, 판단 근거를 기록하는 지식 기록의 원본이다.
- Google Drive와 NotebookLM은 보관과 백업 축이다. Drive는 대용량 원본을, NotebookLM은 프로젝트별 압축 요약을 담당한다.
- Stitch 2.0은 단순 시안 컨셉과 HTML 초안 생성 도구이며, 실제 기준 소스가 아니다.
- Gmail과 Calendar는 요청, 결정, 일정의 입구다. 중요한 내용은 PM Task Queue나 Notion으로 이관한다.
- Google Workspace 문서는 협업 초안으로 쓸 수 있지만, 확정 기준은 GitHub MD와 Notion 히스토리로 연결한다.

### 3.2 병목, 중복, 유실 대응

| 리스크 | 대응 |
| --- | --- |
| 병목 | PM은 현재 기준만 유지하고, 자료 보관은 Drive, 요약은 NotebookLM, 기록은 Notion, 구현은 GitHub/Codex/Replit로 분산한다. |
| 중복 | GitHub는 실시간 소스 기준 원본, Notion은 지식 기록 원본, Drive/NotebookLM은 보관과 백업으로 구분한다. |
| 유실 | Drive 원본, NotebookLM 압축 요약, GitHub 소스, Notion 히스토리, WORKLOG를 서로 다른 백업 축으로 유지한다. |
| 기준 혼선 | Stitch 결과와 Replit 실험 결과는 초안으로 표시하고, 실제 반영은 site/src/와 site/public/에 옮긴 뒤 검증한다. |
| 성장 정체 | MD를 프로젝트 규모에 맞게 배치하고, 프로젝트를 옮겨갈 때마다 Skill, Template, AGENTS.md, dev.md로 성장시킨다. |
| 클라우드 의존 | 단기에는 ChatGPT/Codex 중심으로 속도를 확보하고, 중장기에는 반복 업무부터 로컬 에이전트로 이관한다. |

### 3.3 로컬 자생 환경 로드맵

현재는 빠르게 세팅하고 빠르게 업무를 처리해야 하므로 ChatGPT와 Codex 중심 구조를 유지한다. 장기적으로는 맥미니 도입 시점에 로컬 에이전트 환경을 구축해 외부 클라우드 서비스 의존도를 낮춘다.

개념적으로는 두 가지 비유로 이해한다.

- 가족 모델: 클라우드 AI와 외부 서비스는 부모 역할을 하고, 로컬 AI와 로컬 에이전트는 점차 일을 맡기며 성장시킬 자녀 역할을 한다.
- 국가 모델: 현재는 자유무역/외부의존형 성장기로 외부 자원을 적극 활용하고, 장기적으로는 독립과 자립의 영역을 구축해 리스크에 대비한다.

| 단계 | 운영 방식 |
| --- | --- |
| 단기 | ChatGPT가 기획 초안, Codex/Replit이 수행, GitHub가 실시간 기준 원본, Notion이 지식 기록 원본을 담당한다. |
| 중기 | 맥미니에 Hermes Agent와 빠른 저비용 로컬 에이전트를 배치해 반복 업무, 파일 정리, 초벌 QA, 문서 요약을 맡긴다. |
| 장기 | 외부 클라우드 서비스 장애나 비용 변화가 있어도 일정 수준의 업무가 유지되는 자생 환경을 구축한다. |

ChatGPT와 Codex는 장기에도 완전히 대체하지 않는다. 최신 기술 대응, 급한 프로젝트, 고난도 판단, 외부 정보가 중요한 작업은 계속 클라우드 기반 고성능 도구를 활용한다.

### 3.4 기술 주권과 용어 위생

AI 관련 용어는 미디어와 마케팅을 통해 실제 개념보다 빠르게 유통될 수 있다. 이때 사람도 용어를 잘못 이해하는 개념적 할루시네이션을 겪을 수 있으므로, 새 도구나 개념은 실제 기능과 의존 구조를 분리해 해석한다.

예시:

- AI 노트북: 로컬 모델 또는 AI 연산 하드웨어 탑재 여부와 실제 사용자 경험 개선 범위를 분리해 본다.
- 소버린 AI: 특정 국가나 문화권 전용 모델이라는 이미지보다 데이터, 인프라, 모델, 정책, 운영 주권을 어디까지 확보하는지로 본다.

운영 원칙:

- 새 용어는 정의, 실제 기능, 한계, 종속 비용, 대체 가능성을 함께 기록한다.
- 외부 AI 흐름에는 올라타되, 내부 기준 원본과 로컬 백업을 함께 구축한다.
- GitHub, Notion, Drive/NotebookLM, 로컬 에이전트는 외부 서비스 장애, 가격 변화, 접근 제한, 국제 갈등에 대비하는 최소 자립 축이다.
- 기술 주권은 완전한 고립이 아니라 위기 때 최소 업무를 유지할 수 있는 선택권으로 본다.

### 3.5 AI 시대의 기초 역량

AI 도구는 초반 작업 속도를 크게 높여준다. 그러나 장기적으로는 기초 지식과 사유 경험의 차이가 더 크게 드러날 수 있다. 빠르게 많이 아는 것보다 정확히 아는 것이 중요하다.

중요한 기반:

- 인문학: 철학, 역사, 문학, 어학을 통해 개념, 맥락, 가치 판단, 언어 감각을 기른다.
- 과학: 수학, 물리, 화학, 생물을 통해 구조, 원리, 검증 감각을 기른다.
- 예체능: 감각, 표현, 몸의 경험, 미적 판단, 반복 훈련의 의미를 익힌다.
- 사유 경험: AI 결과물을 받아쓰기보다, 질문하고 검증하고 자기 언어로 다시 정리한다.

이 원칙은 프로젝트 운영에도 적용한다. 초안을 빠르게 만드는 것만으로는 충분하지 않으며, 기준 개념을 정확히 잡고 문서와 코드에 남기는 것이 장기 생산성의 핵심이다.

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
| PL-06 Development | docs/agents/pl-06-development.md | Astro 구현, CSS/JS 수정, 사이드이펙트 통제 | 코드 수정, 빌드 오류, 런타임 장애 |
| Dev Guardrail | dev.md | 기존 코드 보존, 작은 패치, 히스토리 주석 기준 | Codex/Replit/Gemini 코드 수정 전 |
| PL-07 Knowledge Ops | docs/agents/pl-07-knowledge-ops.md | Notion, Google Drive, NotebookLM, Stitch, Workspace 자료 흐름 | 자료 보관, 요약, 기록, 병목/중복/유실 점검 |

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
- docs/agents/pl-06-development.md
- docs/agents/pl-07-knowledge-ops.md
- dev.md
- docs/archive/.gitkeep

## 12. 운영 결론

이 파이프라인의 핵심은 도구를 많이 쓰는 것이 아니라, 각 도구와 문서의 역할을 분리하는 것이다.

- GitHub는 기준 원본이다.
- Replit은 빠른 구현과 배포 테스트다.
- Codex는 구조화, QA, 문서화, 고도화다.
- dev.md는 여러 AI 도구가 기존 코드를 통째로 갈아엎지 않고, 수정 사유와 이전 구현 의도를 남기도록 하는 개발 안전장치다.
- PM은 현재 판단과 우선순위의 지휘실이다.
- QA는 고객여정과 배포 안정성의 방어선이다.
- PL 문서는 필요할 때 꺼내 쓰는 전문 조력자다.
- archive는 프로젝트 기억을 잃지 않되 현재 판단을 무겁게 만들지 않기 위한 저장소다.
- Notion은 프로젝트 사관, Drive는 원본 보관소, NotebookLM은 압축 요약 엔진, Stitch는 시안 초안 도구다.
