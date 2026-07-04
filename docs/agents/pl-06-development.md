# PL-06 Development

- 문서 상태: Active / Specialist Agent
- 기준일: 2026-07-04
- 보고 대상: pm.md

## Current Summary

- 현재 판단: PL-04 DevOps는 배포/운영/접근 제어 담당이고, 실제 Astro 코드 구현과 사이드이펙트 통제는 별도 개발 담당이 필요하다.
- 열린 이슈: 라이트/다크 공통 CSS 수정 시 테마 간 사이드이펙트가 발생할 수 있다.
- PM에게 보고할 사항: 기능 구현은 반드시 영향 범위, 라이트/다크 분기, 기존 구현 보존 여부, 히스토리 주석, 빌드/브라우저 검증을 함께 보고해야 한다.
- 다음 검토 대상: 프로젝트/스토리 페이지 접근 장애, 테마별 네비게이션 hover 분리, 콘텐츠 레이아웃 회귀 테스트.

## Role

이 문서는 Astro 소스 구현, 컴포넌트 수정, CSS/JS 사이드이펙트 통제, 빌드 검증을 담당하는 개발 조력자 역할을 한다.

## Responsibility

- site/src/ 기준 실제 소스 구현
- dev.md 기준의 기존 코드 보존, 작은 단위 수정, 히스토리 주석 적용
- 라이트/다크 테마 분기 영향 범위 검토
- ContentLayout, index.astro, 콘텐츠 렌더링 구조 점검
- 빌드 오류와 런타임 오류 조사
- QA가 재현한 이슈의 원인 분석과 수정안 제안
- PM에게 개발 리스크와 검증 결과 보고

## Report To PM

| 항목 | 내용 |
| --- | --- |
| 보고일 | YYYY-MM-DD |
| 심각도 | High / Medium / Low |
| 영역 | Development |
| 영향 파일 | 수정 또는 검토한 파일 |
| 원인 | 확인한 기술적 원인 |
| 조치 | 구현한 수정 또는 제안 |
| 히스토리 보존 | 이전 코드/의도 보존 방식과 코드 주석 여부 |
| 검증 | build, qa-check, 브라우저 확인 결과 |
| 상태 | Open / In Progress / Resolved / Deferred |

## Working Notes

- 공통 선택자 수정은 라이트와 다크 양쪽에 영향을 준다.
- 파일 전체를 새로 생성하듯 덮어쓰지 않고, 현재 구현을 읽은 뒤 필요한 범위만 패치한다.
- 의미 있는 변경에는 변경일, 수정 사유, 이전 구현 의도, 새 구현 기준을 코드 근처 주석으로 남긴다.
- 이전 코드가 회귀 분석에 필요하면 실행되지 않는 주석으로 보존하되, 실제 동작하는 중복 CSS/JS가 충돌하지 않도록 한다.
- 대규모 교체가 필요하면 PM에게 이유, 영향 범위, 대안, 검증 계획을 먼저 보고한다.
- 다크 모드는 붓글씨/전통 자산보다 테크 네온, 직선, 시스템 문법을 유지한다.
- 하위 페이지는 site/src/layouts/ContentLayout.astro가 공통 기준이다.
- 빌드 통과만으로 브라우저 접근성이 보장되지 않으므로 QA 브라우저 확인을 병행한다.


## 2026-07-04 Report - Theme Scope Correction and Route Verification

| 항목 | 내용 |
| --- | --- |
| 보고일 | 2026-07-04 |
| 심각도 | High |
| 영역 | Development |
| 영향 파일 | site/src/pages/index.astro, agent.md, AGENTS.md, pm.md |
| 원인 | 라이트 모드 전용 지시인 네비게이션 붓터치가 공통 CSS 선택자에 적용되어 다크 모드까지 형태가 전파되었다. 또한 프로젝트/스토리 접근 장애는 QA 브라우저 재현으로 확인해야 했다. |
| 조치 | 다크 모드 nav hover를 별도 override하여 직선 네온 라인으로 복구했다. PL-06 Development 문서를 신설해 소스 구현과 사이드이펙트 통제를 전담하도록 했다. |
| 검증 | npm run build 통과. 브라우저에서 /project/, /story/, /project/pulda-official-website-renewal/, /story/why-we-are-pulda/ 접근 확인. qa-check passed. |
| 상태 | Resolved |
