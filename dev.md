# Pulda Development Guardrails

- 문서 상태: Active / Development Guardrail
- 기준일: 2026-07-05
- 역할: Codex, Replit AI, Gemini 등 코드 수정 도구가 Pulda 소스를 다룰 때 따라야 할 개발 안전 기준

## Purpose

이 문서는 코드 수정 과정에서 기존 구현이 통째로 지워지거나, 긴 소스가 새로 생성되며 작업 맥락이 뒤섞이는 문제를 막기 위한 기준이다. GitHub와 MD 문서가 원본 기억을 담당하더라도, 소스코드 안에서도 중요한 변경 이유와 이전 구현 의도를 추적할 수 있어야 한다.

## Core Rule

- 기존 파일을 전체 재작성하지 않는다. 먼저 현재 코드를 읽고, 필요한 범위만 작게 수정한다.
- 대규모 교체가 필요하면 PM에게 이유, 영향 범위, 대안, 검증 계획을 보고한 뒤 진행한다.
- 수정 전후로 기존 동작 의도가 사라지지 않게 한다.
- 짧은 오탈자, 단순 스타일 값 변경, 명백한 중복 제거처럼 히스토리 주석이 더 혼란스러운 경우를 제외하고, 의미 있는 코드 변경에는 변경 사유를 남긴다.
- 이전 구현을 완전히 삭제하기보다, 이슈 추적이 필요한 구간에서는 주석으로 이전 코드 또는 이전 의도를 보존한다.

## Code History Comment Rule

의미 있는 구조 변경, CSS/JS 분기 변경, 라이트/다크 테마 영향이 있는 변경, 사용자 경험이 바뀌는 변경에는 아래 정보를 가능한 한 가까운 위치에 남긴다.

- 변경일
- 변경 사유
- 이전 구현의 의도
- 새 구현의 기준
- 관련 MD 또는 QA 이슈

예시:

```css
/* 2026-07-05: dark mode nav hover should keep a straight neon line.
   Previous light brush underline affected dark mode as a side effect. */
```

이전 코드를 보존할 때는 실행되지 않는 주석 안에 남기고, 실제 동작하는 중복 CSS/JS가 충돌하지 않게 한다.

## Editing Workflow

1. `AGENTS.md`, `agent.md`, `pm.md`, `qa.md`, `WORKLOG.md`, `DESIGN.md`, `dev.md`, 필요한 PL 문서를 확인한다.
2. 실제 기준 소스가 `site/src/`와 `site/public/`인지 확인한다.
3. 수정할 파일의 현재 구현을 먼저 읽는다.
4. 전체 재생성 대신 작은 패치로 바꾼다.
5. 의미 있는 변경에는 코드 근처에 짧은 히스토리 주석을 남긴다.
6. 변경 후 빌드, QA, 브라우저 확인 중 가능한 검증을 수행한다.
7. WORKLOG와 PM/QA/PL 문서에 변경 사유와 검증 결과를 기록한다.

## Prohibited Patterns

- 기존 파일 내용을 읽지 않고 새 코드로 통째로 덮어쓰기
- 비슷해 보인다는 이유로 기존 CSS/JS 구조를 삭제하고 재생성하기
- 라이트/다크 공통 선택자를 수정하면서 반대 테마 영향 범위를 확인하지 않기
- 빌드 결과물 `site/dist/`를 기준 소스로 삼기
- 주석 없이 큰 블록을 제거해 다음 작업자가 의도를 알 수 없게 만들기

## Relation

- `docs/agents/pl-06-development.md`: 개발 담당 역할 문서
- `qa.md`: 변경 후 검증과 회귀 리스크 기록
- `pm.md`: 대규모 교체 승인과 우선순위 판단
- `WORKLOG.md`: 실제 변경 이력 기록
