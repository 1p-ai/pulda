# Pulda Codex Working Rules

이 파일은 Codex가 이 프로젝트에서 작업을 이어갈 때 반드시 먼저 참고하는 기준이다. 세션이 재시작되거나 도구 상태가 초기화되어도 아래 규칙을 따른다.

## 실제 기준 프로젝트

- 실제 웹사이트 프로젝트는 `site/` 폴더의 Astro 사이트다.
- 메인 페이지 기준 소스는 `site/src/pages/index.astro`다.
- 콘텐츠 상세/목록 공통 레이아웃은 `site/src/layouts/ContentLayout.astro`다.
- 정적 자산 기준 경로는 `site/public/`이다.
- 빌드 결과물은 `site/dist/`이며, 원칙적으로 직접 수정하지 않는다. 단, 로컬 미리보기 긴급 확인을 위한 임시 조정은 가능하지만 반드시 소스에도 같은 변경을 반영한다.

## 참고용/아카이브 파일

다음 파일과 폴더는 현재 사이트 기준이 아니라 시안 또는 아카이브다. 사용자가 명시하지 않는 한 수정하지 않는다.

- `code.html`
- `home_ivory_*/code.html`
- `home_deep_navy_*/code.html`
- `portfolio_*/code.html`
- `shader_*/code.html`
- `contact/code.html`
- `story/code.html`
- 하위 시안 폴더의 `DESIGN.md`

현재 디자인 기준은 루트 `DESIGN.md`만 따른다.

## 작업 시작 절차

작업을 시작할 때는 먼저 아래 문서를 확인한다.

1. `README.md`: 실제 기준 경로와 운영 원칙
2. `WORKLOG.md`: 최근 작업 이력과 디자인 결정
3. `DESIGN.md`: 현재 디자인/컬러/철학 기준
4. `pm.md`: 프로젝트 운영 관점과 다음 프로젝트로 이전 가능한 교훈
5. `agent.md`: 역할형 MD 문서 디렉터리와 보고 체계
6. `dev.md`: 코드 수정 안전 기준과 기존 구현 보존 원칙
7. 필요한 경우 `site/README.md`, `site/CONTENT_GUIDE.md`, `qa.md`, `docs/agents/pl-*.md`

이 문서들과 충돌하는 변경은 사용자가 명시적으로 지시하지 않는 한 하지 않는다.

## 디자인 기준

- 라이트 버전은 진관사 태극기의 빛바랜 천, 한지, 오래된 홍색, 깊은 태극 청색을 기준으로 한다.
- 핵심 색상은 다음을 따른다.
  - 한지 배경: `#f4ead8`
  - 밝은 종이색: `#fbf4e7`
  - 태극 딥블루: `#13233a`
  - 딥블루 레이어: `#1d304b`
  - 오래된 태극 홍색: `#9f3a32`
  - 네이비 위 보정 홍색: `#cf6b5a`
- 라이트 버전에서 순백색과 차가운 회백색을 새 UI에 쓰지 않는다.
- 히어로의 붉은 흐름은 단순한 색 번짐이 아니라 매듭에서 명주실을 풀어내는 이미지로 유지한다.
- 우측 하단 노리개 스크롤 사인은 PC에서 보이고, 모바일에서는 숨긴다.

## 개발/빌드 원칙

- 실제 수정은 `site/src/`와 `site/public/`에 한다.
- 기존 파일을 전체 재생성하거나 긴 새 코드로 덮어쓰지 않는다. 먼저 현재 구현을 읽고 필요한 범위만 작게 수정한다.
- 의미 있는 구조 변경, CSS/JS 분기 변경, 라이트/다크 테마 영향이 있는 변경은 코드 근처에 변경일, 수정 사유, 이전 구현 의도를 짧게 주석으로 남긴다.
- 이전 코드가 이슈 추적에 필요하면 삭제하지 않고 실행되지 않는 주석으로 보존한다. 단, 실제 동작하는 중복 코드가 남아 사이드이펙트를 만들지 않게 한다.
- 대규모 교체가 불가피하면 PM에게 이유, 영향 범위, 검증 계획을 먼저 보고하고 `dev.md` 기준으로 진행한다.
- 변경 후 가능한 경우 `site/`에서 `npm run build`와 `npm run qa:check`를 모두 실행해 검증한다.
- 실제 기준 소스는 `site/src/`와 `site/public/`이며, `site/dist/`는 빌드 산출물, `code.html` 시안은 참고용이다.
- 빌드가 오래 걸리거나 타임아웃되어도 출력에 `Complete!`가 있으면 산출물을 확인한다.
- 로컬 미리보기는 현재 사용 가능한 정적 서버 또는 Astro 빌드 결과를 사용한다.
- 브라우저/포트 세션이 꼬이면 새 포트를 사용해도 되지만, 최종 안내에 실제 URL을 명확히 적는다.

## 기록 원칙

- 디자인 의사결정, 기준 변경, 큰 시각 조정은 반드시 `WORKLOG.md`에 남긴다.
- 사용자가 철학이나 의도를 설명한 내용은 가능한 한 `DESIGN.md` 또는 `WORKLOG.md`에 반영해 다음 세션에서도 이어지게 한다.
- 작업 완료 답변에는 수정한 주요 파일, 빌드 여부, 미리보기 URL을 간결히 포함한다.

## 경로/권한 안정화

- 경로는 가능하면 절대 경로로 확인하되, 실제 문서에는 저장소 기준 상대 경로를 쓴다.
- `apply_patch`가 경로를 잘못 판정하면 Node 기반 파일 작업으로 대체한다.
- 권한 문제가 반복되면 필요한 파일만 좁게 `request_permissions`로 요청한다.
- 사용자의 기존 변경을 되돌리지 않는다.


## 역할형 MD 에이전트 운영

이 프로젝트는 docs/00-project/workflow-md-agent-system.md와 agent.md를 기준으로 역할형 MD 문서를 운영한다. Codex는 작업 시작 시 기존 기본 문서와 함께 agent.md를 확인하고, 요청 성격에 맞는 역할 문서를 참조한다.

역할 구조:

- agent.md: 역할형 MD 문서의 디렉터리이자 인사관리자 문서
- dev.md: 코드 수정 안전 기준과 기존 구현 보존 원칙
- pm.md: 전체 우선순위, 업무범위, 이슈 조정, 배포 가능 여부를 판단하는 최종 PM 문서
- qa.md: 품질, 테스트, 고객여정, 배포 전 검수 담당 문서
- docs/agents/pl-01-research.md: 인터뷰, 레퍼런스, 기존 사이트, 시장 조사 담당
- docs/agents/pl-02-design.md: 브랜드, UI, 시안 해석, 시각 품질 담당
- docs/agents/pl-03-content.md: 콘텐츠, CMS, 프로젝트/스토리 운영 담당
- docs/agents/pl-04-devops.md: Git, Replit, 배포, 환경변수, 접근 제어 담당
- docs/agents/pl-05-marketing.md: SEO, 전환, 광고, 분석, 마케팅 채널 담당
- docs/agents/pl-06-development.md: Astro 구현, CSS/JS 수정, 컴포넌트 구조, 사이드이펙트 통제 담당
- docs/agents/pl-07-knowledge-ops.md: Notion, Google Drive, NotebookLM, Stitch, Google Workspace 기반 지식 운영 담당

운영 규칙:

- PM은 PL과 QA의 보고를 취합해 Task Queue와 우선순위를 조정할 권한을 가진다.
- QA가 High 이상 이슈를 보고하면 PM Task Queue보다 우선해 대응한다.
- 모든 코드 수정 담당은 dev.md와 PL-06 Development 기준을 먼저 확인하고, 기존 구현 삭제나 전체 재생성 없이 작은 패치로 작업한다.
- PL 문서는 전문 조력자로서 리스크와 제안을 보고하며, 최종 결정은 pm.md에 기록한다.
- 오래된 판단과 종료된 이슈는 docs/archive/로 이관해 pm.md와 qa.md를 현재판 대시보드로 유지한다.
- 반복적으로 유효한 운영 규칙은 docs/00-project/skill-operating-model.md와 docs/00-project/workflow-md-agent-system.md에 반영해 향후 Skill 고도화 자료로 사용한다.
- Notion은 프로젝트 사관과 다이어리, Google Drive는 대용량 원본/백업, NotebookLM은 프로젝트별 압축 요약, Stitch 2.0은 시안/HTML 초안 도구로 구분한다.


## 세션 전환과 인계 기준

Codex는 대화가 길어져 작업 효율이 떨어지거나, 이전 지시와 최신 지시가 충돌할 위험이 있거나, 할루시네이션/사이드이펙트가 의심될 때 pm.md의 세션 전환 판단 기준을 따른다.

- PM은 사용자에게 새 채팅 전환 필요성을 보고할 수 있다.
- 보고 시 현재 완료 작업, 열린 이슈, 다음 Task, 필수 참조 문서, 반복 금지사항을 함께 제시한다.
- 새 채팅으로 이어갈 경우 AGENTS.md, agent.md, pm.md, qa.md, WORKLOG.md, DESIGN.md를 먼저 확인한다.
- 새 채팅 전환은 작업 중단이 아니라 연속성 보존을 위한 관리 절차로 본다.
