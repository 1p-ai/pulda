# Pulda Website

이 저장소의 실제 웹사이트는 `site/` 폴더의 Astro 프로젝트입니다. 루트와 여러 하위 폴더에 있는 단일 `code.html` 파일들은 제작 과정에서 나온 참고 시안이며, 현재 배포 기준 파일이 아닙니다.

## 기준 파일

- 실제 메인 페이지 소스: `site/src/pages/index.astro`
- 실제 콘텐츠 원고: `site/src/content/projects/`, `site/src/content/stories/`
- 정적 자산 기준 경로: `site/public/`
- 빌드 결과물: `site/dist/`

## 라이트/다크 구성 원칙

라이트 버전과 다크 버전은 별도 HTML로 나누지 않습니다. `site/src/pages/index.astro` 하나에서 테마 스위치와 CSS 변수로 관리합니다. 히어로 타이틀, 모바일 메뉴, 내비게이션, 섹션 구성은 이 파일을 기준으로만 수정합니다.

## 참고용 파일

다음 파일과 폴더는 현재 사이트 기준이 아니라 시안/아카이브입니다. 필요한 경우 비교 참고만 하고, 실제 반영은 반드시 `site/src/pages/index.astro`에 옮긴 뒤 빌드합니다.

- `code.html`
- `home_ivory_*/code.html`
- `home_deep_navy_*/code.html`
- `portfolio_*/code.html`
- `shader_*/code.html`
- `contact/code.html`, `story/code.html`

## 문서 기준

- 현재 디자인 기준: `DESIGN.md`
- 현재 작업이력: `WORKLOG.md`
- 콘텐츠 운영 기준: `site/CONTENT_GUIDE.md`
- 하위 시안 폴더의 `DESIGN.md` 파일은 해당 시안 생성 당시의 아카이브로 보고, 현재 지침으로 사용하지 않습니다.

## 작업 흐름

1. 메인 페이지 변경은 `site/src/pages/index.astro`에서 한다.
2. 콘텐츠 변경은 `site/src/content/` 아래 Markdown에서 한다.
3. 디자인/운영 결정은 `WORKLOG.md`에 날짜별로 남긴다.
4. 변경 후 `site/`에서 `npm run build`와 `npm run qa:check`를 모두 실행해 검증한다.
5. 기능 확장은 작은 단위로 나눠 별도 검증 후 진행한다.
6. 실제 기준 소스는 `site/src/`와 `site/public/`이며, `site/dist/`와 `code.html` 시안은 참고용이다.
