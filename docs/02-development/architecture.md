# 개발 아키텍처 문서

- 문서 상태: Draft
- 기준일: 2026-07-03

## 1. 기술 스택

| 영역 | 기술 | 설명 |
| --- | --- | --- |
| 프레임워크 | Astro | 정적 사이트 생성 |
| 콘텐츠 | Astro Content Collections | Markdown 기반 프로젝트/스토리 관리 |
| 스타일 | Astro 파일 내 CSS | 현재는 단일/공통 레이아웃 중심 스타일 |
| 인터랙션 | Vanilla JavaScript | 테마, 메뉴, WebGL, reveal 처리 |
| 그래픽 | WebGL shader | 홈 히어로 실 흐름 렌더링 |
| 빌드 | npm run build | `site/dist/` 산출 |
| CMS 예정 | Sanity | 별도 Studio + 정적 빌드 Webhook |

## 2. 기준 경로

| 경로 | 역할 |
| --- | --- |
| `site/src/pages/index.astro` | 홈 페이지 |
| `site/src/layouts/ContentLayout.astro` | 소개/프로젝트/스토리/문의 공통 레이아웃 |
| `site/src/pages/about.astro` | 소개 페이지 |
| `site/src/pages/contact.astro` | 문의 페이지 |
| `site/src/pages/project/index.astro` | 프로젝트 목록 |
| `site/src/pages/project/[...id].astro` | 프로젝트 상세 |
| `site/src/pages/story/index.astro` | 스토리 목록 |
| `site/src/pages/story/[...id].astro` | 스토리 상세 |
| `site/src/content/projects/` | 프로젝트 Markdown |
| `site/src/content/stories/` | 스토리 Markdown |
| `site/public/` | 이미지, 폰트, 정적 파일 |
| `site/dist/` | 빌드 결과물 |

## 3. 요청 흐름

~~~mermaid
flowchart LR
  User["사용자"] --> CDN["정적 호스팅/CDN"]
  CDN --> HTML["Astro 빌드 HTML"]
  HTML --> Assets["public assets"]
  HTML --> Theme["초기 테마 스크립트"]
  Theme --> CSS["라이트/다크 CSS 분기"]
~~~

## 4. 빌드 흐름

~~~mermaid
flowchart TD
  Markdown["Markdown content"] --> Astro["Astro build"]
  Pages["Astro pages/layouts"] --> Astro
  Public["site/public assets"] --> Dist["site/dist"]
  Astro --> Dist
  Dist --> Deploy["정적 호스팅 배포"]
~~~

## 5. 테마 처리

- `pulda-theme` 값을 `localStorage`에 저장한다.
- CSS 로드 전에 head 초반에서 저장된 테마 또는 시스템 선호도를 읽는다.
- `document.documentElement.dataset.theme`에 `light` 또는 `dark`를 설정한다.
- 하단 스크립트는 aria 상태와 저장값을 동기화한다.
- 이 구조는 페이지 이동 시 라이트 모드가 먼저 보이는 현상을 차단하기 위한 것이다.

## 6. SEO/피드 생성

- `sitemap.xml.ts`: 주요 정적 페이지와 콘텐츠 상세 경로 제공
- `rss.xml.ts`: 스토리 기반 RSS 제공
- `robots.txt.ts`: 검색 엔진 접근 정책 제공
- 상세 페이지는 CreativeWork 또는 BlogPosting 구조화 데이터를 생성한다.

## 7. 배포 고려사항

- 정적 호스팅을 기본 전제로 한다.
- CMS 발행 Webhook은 배포 훅에 연결한다.
- `site/dist/`는 빌드 산출물이므로 직접 수정하지 않는다.
- 배포 전 `npm run build`를 실행한다.
