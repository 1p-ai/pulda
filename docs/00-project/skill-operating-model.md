# Skill 개념과 AI 작업 운영 기준

- 문서 상태: Draft / Reference
- 기준일: 2026-07-04
- 목적: Codex를 포함한 AI 도구 활용에서 Skill, AGENTS.md, agent.md, PM/QA/PL 문서, 프로젝트 템플릿의 역할을 구분하고, 여러 PC와 여러 AI 환경에서 재사용 가능한 작업 기준을 정리한다.

## 1. Skill이란 무엇인가

Skill은 반복적으로 사용하는 작업 방식, 판단 기준, 도구 사용법, 산출물 형식을 하나의 재사용 가능한 지식 패키지로 묶은 것이다.

프로젝트마다 매번 길게 설명하지 않아도, 특정 상황에서 AI가 같은 기준을 불러와 작업하도록 만드는 장치다. 예를 들어 웹사이트 프로젝트를 시작할 때마다 PM 문서, QA 문서, PL 역할 문서, Git/Replit/Codex 파이프라인을 다시 설명하지 않고 Skill로 호출할 수 있다.

간단히 말하면 다음과 같다.

- 문서: 프로젝트 안에 쌓이는 기록과 기준
- AGENTS.md: 해당 저장소에서 Codex가 반드시 따를 작업 규칙
- agent.md: 프로젝트 내부 역할형 문서의 디렉터리
- Skill: 프로젝트 밖에서도 반복 사용하는 AI 작업 방식
- Template repo: 새 프로젝트의 파일 구조와 기본 문서 세트

## 2. Skill이 필요한 이유

AI 작업은 한 번 잘 정리해도 다음 프로젝트에서 다시 설명해야 하는 일이 많다. Skill은 이 반복 비용을 줄인다.

Skill을 쓰면 좋은 경우:

- 매 프로젝트마다 같은 기획/개발/QA 문서 구조를 만든다.
- Codex에게 항상 같은 방식으로 PM, QA, DevOps 역할을 나누게 하고 싶다.
- GitHub, Replit, Codex, Sanity, Make 같은 도구 조합을 반복해서 쓴다.
- 클라이언트 인터뷰, 레퍼런스 분석, 시안 해석, 배포 체크리스트를 표준화하고 싶다.
- 여러 PC 또는 여러 AI 환경에서 같은 작업 방식을 유지하고 싶다.

## 3. Skill과 프로젝트 문서의 차이

| 구분 | 범위 | 역할 | 예시 |
| --- | --- | --- | --- |
| Skill | 여러 프로젝트 공통 | 반복 작업 방식과 판단 기준 | project-pipeline-skill |
| AGENTS.md | 특정 저장소 | Codex가 해당 프로젝트에서 따를 규칙 | 실제 소스 경로, 빌드 규칙 |
| agent.md | 특정 프로젝트 | 역할형 MD 문서 디렉터리 | PM, QA, PL 목록 |
| pm.md | 특정 프로젝트 | 현재 우선순위와 이슈 지휘 | Task Queue, QA 이슈 로그 |
| qa.md | 특정 프로젝트 | 테스트와 품질 관리 | 고객여정, 배포 전 체크 |
| PL 문서 | 특정 프로젝트 | 전문 관점별 조력자 | 리서치, 디자인, 콘텐츠, DevOps |
| Template repo | 새 프로젝트 시작점 | 파일 구조와 기본 문서 세트 | docs/, pm.md, qa.md 포함 |

Skill은 “모든 프로젝트에서 반복되는 방식”을 담고, 프로젝트 문서는 “이번 프로젝트에만 해당하는 맥락”을 담는다.

## 4. 권장 레이어 구조

AI 작업 기준은 다음 레이어로 나누는 것이 좋다.

### 4.1 Personal Skill Layer

개인 작업 방식의 최상위 기준이다.

담을 내용:

- 프로젝트 시작 파이프라인
- PM/QA/PL 역할 분리 방식
- 문서 아카이브 기준
- GitHub/Replit/Codex 협업 흐름
- 배포 전 QA 철학
- 클라이언트 인터뷰 처리 방식

이 레이어는 여러 PC와 여러 프로젝트에서 공유한다.

### 4.2 Project Template Layer

새 프로젝트를 시작할 때 복제하는 기본 파일 구조다.

담을 내용:

- AGENTS.md
- agent.md
- pm.md
- qa.md
- WORKLOG.md
- docs/ 기본 구조
- docs/agents/pl-*.md
- docs/archive/.gitkeep

### 4.3 Project Rule Layer

특정 프로젝트의 실제 규칙이다.

담을 내용:

- 실제 소스 위치
- 배포 방식
- 디자인 기준
- 콘텐츠 운영 기준
- 고객/브랜드별 예외
- 외부 API와 계정 정책

이 레이어는 AGENTS.md, README.md, DESIGN.md, pm.md, qa.md에 반영한다.

### 4.4 Runtime Work Layer

실제 작업 중 생성되는 변경과 검증이다.

담을 내용:

- 작업 이력
- QA 결과
- 빌드 결과
- 발견 이슈
- 다음 작업

WORKLOG.md, pm.md, qa.md가 담당한다.

## 5. Skill로 만들기 좋은 항목

현재 작업 방식에서 Skill 후보는 다음과 같다.

| Skill 후보 | 목적 |
| --- | --- |
| project-pipeline | 아이디어, 인터뷰, 레퍼런스, 시안, GitHub, Replit, Codex, QA, 배포까지의 전체 흐름 |
| md-agent-system | PM, QA, PL, agent.md, archive 구조 운영 |
| client-interview-to-brief | 클라이언트 인터뷰를 요구사항, IA, 기능정의서로 변환 |
| reference-research | 기존 사이트와 레퍼런스 링크를 분석해 방향성 도출 |
| portfolio-case-study | 프로젝트 상세를 수주용 케이스 스터디로 구성 |
| qa-release-gate | 배포 전 단위/통합/사용성/운영 테스트 기준 |
| devops-static-site | GitHub, Replit, Codex, 배포 플랫폼, 환경변수, 접근 제어 관리 |
| sanity-content-ops | Sanity Free 플랜 기반 콘텐츠 모델과 운영 기준 |
| marketing-channel-check | SEO, 스토리, 프로젝트, 문의 전환, 광고 판단 기준 |

처음부터 너무 많은 Skill을 만들기보다, project-pipeline과 md-agent-system을 하나로 묶어 시작하고 안정화되면 분리하는 것이 좋다.

## 6. Skill 기본 구성

Skill은 짧고 명확해야 한다. 모든 지식을 한 파일에 다 넣기보다, 자주 필요한 판단 기준과 참조 문서 위치를 알려주는 방식이 좋다.

권장 구성:

- 이름
- 언제 사용할지
- 반드시 확인할 문서
- 작업 순서
- 산출물 형식
- 주의할 점
- 사용 예시

예시:

~~~md
# Project Pipeline Skill

## When to Use

웹사이트, 브랜드 사이트, 콘텐츠 사이트, 포트폴리오 사이트를 새로 기획하거나 고도화할 때 사용한다.

## Core Rules

- GitHub를 기준 원본으로 둔다.
- Replit은 빠른 구현과 테스트 공간으로 둔다.
- Codex는 구조화, QA, 문서화, 고도화에 집중한다.
- PM은 현재 우선순위와 열린 이슈만 유지한다.
- QA가 High 이상 이슈를 발견하면 PM Task Queue보다 우선한다.

## Required Outputs

- pm.md
- qa.md
- agent.md
- docs/agents/pl-*.md
- docs/00-project/project-brief.md
- docs/04-quality/qa-checklist.md
~~~

## 7. Skill과 agent.md의 관계

Skill은 프로젝트 밖의 반복 기준이다. agent.md는 프로젝트 안의 역할 디렉터리다.

관계는 다음과 같다.

1. Skill이 새 프로젝트의 기본 운영 방식을 알려준다.
2. agent.md가 이번 프로젝트에서 실제로 사용할 역할 문서를 목록화한다.
3. PM, QA, PL 문서가 프로젝트별 맥락과 판단을 쌓는다.
4. 오래된 기록은 archive로 이관한다.

Skill이 “운영 체계의 설계도”라면, agent.md는 “이번 프로젝트의 조직도”다.

## 8. 여러 PC에서 운용하는 방법

여러 PC에서 같은 AI 작업 기준을 쓰려면 Skill과 템플릿을 Git으로 관리하는 것이 좋다.

권장 방식:

- 개인용 private repository를 만든다.
- skills/ 폴더에 개인 Skill을 보관한다.
- templates/ 폴더에 프로젝트 템플릿을 보관한다.
- docs/ 폴더에 운영 매뉴얼을 보관한다.
- 새 PC에서는 해당 repository를 clone하거나 필요한 파일을 복제한다.

예시 구조:

~~~text
ai-workflow-kit/
  skills/
    project-pipeline/
      SKILL.md
    md-agent-system/
      SKILL.md
  templates/
    astro-brand-site/
      AGENTS.md
      agent.md
      pm.md
      qa.md
      WORKLOG.md
      docs/
  docs/
    skill-operating-model.md
    workflow-md-agent-system.md
~~~

## 9. 여러 AI 도구에서 활용하는 방법

Codex가 아닌 AI 도구에서도 Skill 개념은 쓸 수 있다. 다만 이름과 실행 방식이 다를 뿐이다.

| 환경 | 활용 방식 |
| --- | --- |
| Codex | Skill, AGENTS.md, 프로젝트 문서로 운영 기준 적용 |
| GPT | Custom GPT 지침, 프로젝트 지침, 업로드 문서로 적용 |
| Gemini | Gems, 프로젝트 지침, 문서 업로드로 적용 |
| Claude | Project instructions, knowledge 문서로 적용 |
| Replit AI | 프로젝트 README, AGENTS, 작업 지시 템플릿으로 적용 |

핵심은 특정 제품 기능명이 아니라, 반복 가능한 작업 지침을 한곳에 정리하고 매번 재사용하는 것이다.

## 10. Skill 작성 시 주의사항

- 너무 길게 만들지 않는다.
- 프로젝트 고유 정보와 공통 작업 원칙을 섞지 않는다.
- API 키, 계정 정보, 고객 민감 정보는 Skill에 넣지 않는다.
- “항상 이렇게 하라”보다 “이런 상황에서는 이렇게 판단하라”로 쓴다.
- Skill이 오래되면 실제 프로젝트 경험을 반영해 업데이트한다.
- Skill은 최종 판단자가 아니라 반복 기준이다. 프로젝트별 PM 판단이 우선한다.

## 11. Skill 업데이트 기준

Skill은 다음 상황에서 업데이트한다.

- 같은 문제가 2회 이상 반복될 때
- 여러 프로젝트에서 같은 문서 구조가 필요할 때
- 새로운 도구 조합이 표준 흐름에 들어올 때
- QA나 배포 사고를 통해 재발 방지 기준이 생겼을 때
- 프로젝트 완료 후 회고에서 다음 프로젝트로 이전할 교훈이 생겼을 때

업데이트할 때는 다음을 남긴다.

- 변경일
- 변경 이유
- 적용 범위
- 이전 프로젝트에서 얻은 근거
- 다음 프로젝트 적용 방법

## 12. 추천 실행 순서

현재 기준에서 추천하는 순서는 다음과 같다.

1. Pulda 프로젝트 안에 agent.md와 docs/agents/pl-*.md를 만든다.
2. workflow-md-agent-system.md와 skill-operating-model.md를 정리한다.
3. 이 구조를 template repository로 분리한다.
4. 반복 사용하면서 project-pipeline Skill 초안을 만든다.
5. 여러 프로젝트에서 검증된 뒤 Skill을 분리한다.
6. 개인용 ai-workflow-kit repository로 관리한다.
7. 새 PC와 새 AI 환경에 이 repository를 기준으로 세팅한다.

## 13. 결론

Skill은 AI에게 일을 맡기는 방식 자체를 자산화하는 방법이다. 개별 프로젝트의 문서는 결과와 맥락을 남기고, Skill은 그 프로젝트들을 거치며 정리된 반복 가능한 작업 방식을 남긴다.

따라서 앞으로의 기준은 다음과 같다.

- 프로젝트 고유 맥락은 AGENTS.md, agent.md, pm.md, qa.md에 둔다.
- 반복 가능한 작업 방식은 Skill로 승격한다.
- 시작 구조는 template repository로 관리한다.
- 오래된 판단과 로그는 archive로 넘긴다.
- 여러 PC와 여러 AI 도구에서는 같은 Skill/Template repository를 기준으로 세팅한다.
