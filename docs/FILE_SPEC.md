# 풀다 웹사이트 — 파일 명세서

> 최종 업데이트: 2026-07-31  
> 대상 디렉토리: 프로젝트 루트(`/`) 전체 (`node_modules`, `.git`, `dist`, `.cache` 제외)

---

## 목차

1. [프로젝트 구조 개요](#1-프로젝트-구조-개요)
2. [루트 디렉토리](#2-루트-디렉토리)
3. [site/ — Astro 프론트엔드](#3-site--astro-프론트엔드)
   - [설정 파일](#31-설정-파일)
   - [src/pages — 페이지](#32-srcpages--페이지)
   - [src/layouts — 레이아웃](#33-srclayouts--레이아웃)
   - [src/components — 컴포넌트](#34-srccomponents--컴포넌트)
   - [src/content — 콘텐츠 데이터](#35-srccontent--콘텐츠-데이터)
   - [src/utils — 유틸리티](#36-srcutils--유틸리티)
   - [public/ — 정적 에셋](#37-public--정적-에셋)
   - [scripts/ — 빌드 보조 스크립트](#38-scripts--빌드-보조-스크립트)
4. [Sanity CMS 스키마 (루트)](#4-sanity-cms-스키마-루트)
5. [docs/ — 프로젝트 문서](#5-docs--프로젝트-문서)
6. [디자인 시안 폴더](#6-디자인-시안-폴더)
7. [루트 문서 및 메모](#7-루트-문서-및-메모)
8. [설정 및 인프라](#8-설정-및-인프라)
9. [scripts/ (루트) — 배포 자동화](#9-scripts-루트--배포-자동화)

---

## 1. 프로젝트 구조 개요

```
/ (프로젝트 루트)
├── site/                  ← Astro 기반 실제 웹사이트 (빌드·배포 대상)
├── docs/                  ← 기획·설계·운영 문서 모음
├── scripts/               ← 태스크 머지 후 자동 실행 스크립트
├── *.ts / *.html          ← Sanity CMS 스키마, 디자인 시안, 메모
├── logo/                  ← 브랜드 로고 원본 에셋
├── fonts/                 ← 웹폰트 원본
├── attached_assets/       ← 대화 중 첨부된 참고 스크린샷
└── home_*/portfolio_*/    ← 초기 HTML 디자인 시안들
```

**핵심 원칙**  
- 실제 서비스 코드는 모두 `site/` 안에 있음  
- 루트의 `.ts` 파일들은 Sanity CMS 스키마 정의 (현재 직접 연결 없이 참고용)  
- CSS는 별도 파일 없이 `SiteHeader.astro`의 `<style is:global>`에 전부 집중

---

## 2. 루트 디렉토리

| 파일 | 종류 | 역할 |
|------|------|------|
| `package.json` | 설정 | 루트 레벨 의존성 (Sanity CLI, Playwright 등) 및 실행 스크립트 관리 |
| `package-lock.json` | 설정 | 루트 의존성 잠금 파일 |
| `sanity.config.ts` | CMS 설정 | Sanity Studio 프로젝트 ID, 데이터셋, 플러그인, 스키마 등록 진입점 |
| `sanity.cli.ts` | CMS 설정 | Sanity CLI 실행 시 프로젝트 연결 정보 (projectId, dataset) |
| `index.ts` | CMS 스키마 | 모든 스키마 타입(`project`, `story`, `siteSettings`, `blockContent`)을 통합 내보내기 |
| `project.ts` | CMS 스키마 | 과제(Project) 콘텐츠 필드 정의 — 제목, 슬러그, 커버, 요약, 본문, 클라이언트, 서비스 등 |
| `story.ts` | CMS 스키마 | 이야기(Story) 콘텐츠 필드 정의 — 제목, 슬러그, 카테고리, 본문 블록 등 |
| `siteSettings.ts` | CMS 스키마 | 사이트 전역 설정 싱글톤 필드 — SEO 기본값, 소셜 링크 등 |
| `blockContent.ts` | CMS 스키마 | 리치 텍스트(Portable Text) 블록 구조 정의 — 마크, 어노테이션, 임베드 등 |
| `deskStructure.ts` | CMS 설정 | Studio 좌측 메뉴 구성 — 싱글톤(사이트 설정) 및 컬렉션 배치 |
| `dashboard.ts` | CMS 설정 | Studio 대시보드 위젯 레이아웃 구성 |
| `customPublishAction.ts` | CMS 스크립트 | 발행 전 SEO 필드 누락 시 경고를 띄우는 커스텀 발행 액션 |
| `theme.ts` | CMS 스타일 | Sanity Studio UI 브랜드 테마 (풀다 레드 계열) 정의 |
| `sanityClient.ts` | 유틸리티 | Astro에서 Sanity 데이터를 조회하기 위한 클라이언트 인스턴스 설정 |
| `migrate-md-to-sanity.mjs` | 마이그레이션 | `site/src/content/` 마크다운 콘텐츠를 Sanity CMS로 일괄 이전하는 스크립트 |
| `journeys.spec.ts` | 테스트 | Playwright E2E 테스트 — 메인→목록→상세 주요 사용자 여정 자동화 |
| `Gallery.astro` | 아카이브 | 초기 갤러리 컴포넌트 시안 (현재 미사용) |
| `logo.tsx` | 아카이브 | 초기 React 로고 컴포넌트 시안 (현재 미사용) |
| `code.html` | 디자인 시안 | 루트 레벨 초기 전체 페이지 HTML 시안 |
| `screen.png` | 참고 이미지 | 루트 레벨 초기 스크린샷 |
| `.gitignore` | 설정 | Git 추적 제외 파일 목록 |
| `.gitattributes` | 설정 | Git 파일 속성 (줄 끝 처리 등) |
| `.replit` | 설정 | Replit 환경 워크플로 및 포스트머지 스크립트 경로 설정 |

---

## 3. site/ — Astro 프론트엔드

실제 빌드·배포되는 웹사이트 소스. `npm run dev`로 개발 서버 실행(포트 5000).

### 3.1 설정 파일

| 파일 | 종류 | 역할 |
|------|------|------|
| `site/astro.config.mjs` | 프레임워크 설정 | Astro 빌드 설정 — `output: 'static'`, 호스트 `0.0.0.0:5000`, `allowedHosts: true`, 사이트 URL |
| `site/tsconfig.json` | TypeScript 설정 | 타입 체크 규칙, 경로 별칭(`@/*` → `src/*`) 설정 |
| `site/playwright.config.ts` | 테스트 설정 | E2E 테스트 브라우저·포트·타임아웃 설정 |
| `site/package.json` | 패키지 설정 | 의존성 (`astro`, `@portabletext/to-html`, `astro-icon`), 빌드·테스트 스크립트 |
| `site/package-lock.json` | 패키지 잠금 | 의존성 정확한 버전 고정 (decompress 계열 optional 패치 포함) |
| `site/.env.example` | 환경변수 예시 | 필요한 환경변수 목록 안내 (`SANITY_PROJECT_ID` 등) |
| `site/.gitignore` | 설정 | site 내 Git 제외 목록 (`dist/`, `.env` 등) |
| `site/src/env.d.ts` | TypeScript | Astro 환경변수·모듈 타입 선언 |
| `site/src/content.config.ts` | 콘텐츠 설정 | Astro Content Collections 스키마 정의 — `projects`, `stories` 컬렉션 필드 타입 |

---

### 3.2 src/pages — 페이지

URL 경로와 1:1 대응. Astro의 파일 기반 라우팅.

| 파일 | URL | 역할 |
|------|-----|------|
| `pages/index.astro` | `/` | 메인 랜딩 — 히어로, 서비스 소개, 주요 과제 미리보기, 스토리 미리보기 섹션 |
| `pages/about.astro` | `/about/` | 소개 페이지 — page-head("작고 기민하게...") + 01지향~05함께할사람 5개 섹션 |
| `pages/contact.astro` | `/contact/` | 만남(문의) 페이지 — 채널 안내, 응답 가이드, 문의 유형 칩 |
| `pages/admin.astro` | `/admin/` | Sanity Studio 임베드 관리자 페이지 (접근 제어 안내 포함) |
| `pages/project/index.astro` | `/project/` | 과제 목록 — 전체 프로젝트 카드 그리드, 커버 이미지 또는 플레이스홀더 표시 |
| `pages/project/[...id].astro` | `/project/:id/` | 과제 상세 — 커버, 메타(클라이언트·서비스), 본문 렌더링 |
| `pages/story/index.astro` | `/story/` | 이야기 목록 — 카테고리 탭 UI, 스토리 카드 |
| `pages/story/[...id].astro` | `/story/:id/` | 이야기 상세 — 제목, 카테고리, 본문 렌더링 |
| `pages/robots.txt.ts` | `/robots.txt` | 검색 엔진 크롤 규칙 동적 생성 |
| `pages/rss.xml.ts` | `/rss.xml` | RSS 피드 동적 생성 (스토리 목록) |
| `pages/sitemap.xml.ts` | `/sitemap.xml` | 사이트맵 XML 동적 생성 |

---

### 3.3 src/layouts — 레이아웃

| 파일 | 역할 |
|------|------|
| `layouts/ContentLayout.astro` | **사이트 전체 공통 레이아웃.** `<head>` SEO 메타, 전역 CSS(`<style is:global>`), `<SiteHeader>`, `<SiteFooter>` 포함. 모든 페이지가 이 레이아웃을 상속. **전역 CSS 단일 집중 지점** — 색상 변수, 타이포, 다크모드, 섹션 그리드, 카드, `.page-head`, `.project-thumb-placeholder` 등 |

---

### 3.4 src/components — 컴포넌트

| 파일 | 역할 |
|------|------|
| `components/SiteHeader.astro` | **전역 네비게이션 헤더.** 로고, 메뉴 링크(active 표시), 낮/밤 테마 토글, CTA 버튼. 다크모드 전체 CSS(`::before` 격자 배경, 팬 메뉴 애니메이션, 해/달 아이콘 토글 등)도 이 파일에 집중 |
| `components/SiteFooter.astro` | 전역 푸터. 브랜드 정보, 내부 링크, 저작권 표기 |
| `components/PortableText.astro` | Sanity Portable Text(블록 콘텐츠)를 HTML로 변환 렌더링하는 컴포넌트 |

---

### 3.5 src/content — 콘텐츠 데이터

Astro Content Collections 기반 마크다운 콘텐츠. Sanity CMS 이전 전 임시 저장소이나 현재 실제 서비스 데이터로 사용 중.

#### projects/ (과제)

| 파일 | 내용 |
|------|------|
| `a4u-platform.md` | A4U 플랫폼 웹 기획 과제 |
| `eunjo-imweb-homepage.md` | 은조 Imweb 홈페이지 구축 과제 |
| `hannamdong-catholic-church.md` | 한남동성당 웹사이트 과제 |
| `hansalim-shopping-app-planning.md` | 한살림 쇼핑앱 기획 과제 |
| `incheon-disability-human-rights-film-festival.md` | 인천장애인인권영화제 과제 |
| `kg-seaside-marathon.md` | KG 해변마라톤 운영 시스템 과제 |
| `onstudio-pilates.md` | 온스튜디오 필라테스 과제 |
| `paweria-incheon-petfair.md` | 파웨리아 인천펫페어 과제 |
| `pulda-official-website-renewal.md` | 풀다 공식 웹사이트 리뉴얼 (현재 작업) 과제 |
| `pulda-os.md` | 풀다 OS 내부 운영 시스템 과제 |

#### stories/ (이야기)

| 파일 | 내용 |
|------|------|
| `clarity-before-decoration.md` | 이야기: 꾸밈보다 명확함 |
| `why-we-are-pulda.md` | 이야기: 우리가 풀다인 이유 |
| `why-we-call-it-projects.md` | 이야기: 왜 '과제'라고 부르는가 |

---

### 3.6 src/utils — 유틸리티

| 파일 | 역할 |
|------|------|
| `utils/contentRoutes.ts` | 콘텐츠 슬러그 → URL 경로 변환 헬퍼 함수. `getProjectUrl()`, `getStoryUrl()` 등 |

---

### 3.7 public/ — 정적 에셋

빌드 시 그대로 복사되어 루트에서 서비스됨.

#### 로고 및 UI 에셋

| 파일 | 용도 |
|------|------|
| `logo/pulda-logo-red.webp` | 라이트모드 헤더 로고 (마스크 방식으로 렌더링) |
| `logo/hanji-background-full.webp` | 라이트모드 전체 배경 한지 텍스처 |
| `logo/hanji-background.webp` | 축소 버전 한지 텍스처 |
| `logo/fan-menu-closed.png` | 모바일 메뉴 버튼 — 부채 닫힌 상태 |
| `logo/fan-menu-closed.webp` | 위 WebP 버전 |
| `logo/fan-menu-open.png` | 모바일 메뉴 버튼 — 부채 열린 상태 |
| `logo/scroll-norigae.png` | 히어로 섹션 노리개 장식 이미지 |
| `fonts/SolmoeKimDaegeon-Medium.woff` | 솔뫼 김대건 서체 (한글 손글씨체, 네비 링크·제목에 사용) |
| `favicon.ico` | 브라우저 탭 아이콘 |
| `favicon.svg` | SVG 파비콘 |
| `_headers` | Cloudflare/Netlify HTTP 응답 헤더 규칙 (캐시, 보안 헤더) |
| `llms.txt` | LLM 크롤러용 사이트 설명 텍스트 |

#### 과제별 이미지 (public/case/)

각 과제 슬러그 폴더 아래 `cover.png/svg`, 세부 스크린샷 이미지 보관.

| 폴더 | 내용 |
|------|------|
| `case/a4u-platform/` | A4U 로그인·메인 스크린샷 |
| `case/eunjo-imweb/` | 은조 홈·포트폴리오 스크린샷 |
| `case/hannamdong-catholic-church/` | 한남동성당 커버·공지·주보 |
| `case/hansalim-shopping-app/` | 한살림 커버 SVG |
| `case/incheon-disability-human-rights-film-festival/` | 영화제 커버 SVG |
| `case/kg-seaside-marathon/` | 마라톤 신청·코스·단체조회 스크린샷 |
| `case/onstudio-pilates/` | 필라테스 커버·예약·트레이너 |
| `case/paweria-incheon-petfair/` | 펫페어 신청·브랜드·커버 |
| `case/pulda-renewal/` | 풀다 리뉴얼 과정 스크린샷 (라이트/다크/어드민) |

#### 스토리 이미지 (public/story/)

| 파일 | 용도 |
|------|------|
| `story/pulda-origin/mary-undoer-of-knots.jpg` | '매듭을 푸는 마리아' 이야기 삽화 |

---

### 3.8 scripts/ — 빌드 보조 스크립트

| 파일 | 역할 |
|------|------|
| `site/scripts/qa-check.mjs` | 빌드 결과물 QA 자동 점검 스크립트. `npm run qa` 실행 시 동작 — 빌드된 HTML 파일 순회하며 누락 메타, 깨진 링크, 접근성 기본 항목 점검 |

---

## 4. Sanity CMS 스키마 (루트)

> 현재 `site/`는 Sanity를 직접 연결하지 않고 마크다운(`content/`)을 사용 중.  
> 아래 파일들은 향후 CMS 연동 또는 Studio 운영 시 사용.

| 파일 | 역할 |
|------|------|
| `sanity.config.ts` | Studio 전체 설정 진입점 |
| `sanity.cli.ts` | CLI 연결 정보 |
| `index.ts` | 스키마 통합 내보내기 |
| `project.ts` | Project 타입 스키마 |
| `story.ts` | Story 타입 스키마 |
| `siteSettings.ts` | 사이트 설정 싱글톤 스키마 |
| `blockContent.ts` | 리치 텍스트 블록 스키마 |
| `deskStructure.ts` | Studio 메뉴 구성 |
| `dashboard.ts` | Studio 대시보드 구성 |
| `customPublishAction.ts` | SEO 검증 커스텀 발행 액션 |
| `theme.ts` | Studio 브랜드 테마 |
| `sanityClient.ts` | 클라이언트 인스턴스 설정 |

---

## 5. docs/ — 프로젝트 문서

### 00-project/ (프로젝트 운영)

| 파일 | 내용 |
|------|------|
| `project-brief.md` | 프로젝트 목표, 배경, 범위, 성공 기준 정의 |
| `workflow-md-agent-system.md` | 마크다운 + 에이전트 기반 협업 워크플로 설명 |
| `skill-operating-model.md` | 에이전트 스킬 운영 모델 가이드 |
| `handoff-2026-07-04.md` | 2026-07-04 인계 보고서 |
| `handoff-2026-07-07.md` | 2026-07-07 인계 보고서 |

### 01-planning/ (기획)

| 파일 | 내용 |
|------|------|
| `ia.md` | 정보 구조(IA) — 사이트맵, 페이지 계층, URL 구조 |
| `requirements.md` | 기능·비기능 요구사항 정의서 |
| `functional-spec.md` | 기능 명세서 — 페이지별 상세 기능 설명 |
| `storyboard.md` | 사용자 여정 스토리보드 |

### 02-development/ (개발)

| 파일 | 내용 |
|------|------|
| `architecture.md` | 시스템 아키텍처 — Astro + Sanity + Vercel 구성 |
| `data-model-erd.md` | 데이터 모델 ERD — Project, Story, SiteSettings 관계 |
| `cms-plan.md` | Sanity CMS 연동 계획 및 마이그레이션 전략 |

### 03-design/ (디자인)

| 파일 | 내용 |
|------|------|
| `style-guide.md` | 디자인 시스템 — 색상 변수, 타이포, 간격, 컴포넌트 가이드 |

### 04-quality/ (품질)

| 파일 | 내용 |
|------|------|
| `qa-checklist.md` | 배포 전 QA 체크리스트 |
| `launch-seo-geo-checklist.md` | 런치 SEO·GEO(지역) 최적화 체크리스트 |

### 05-closing/ (마무리)

| 파일 | 내용 |
|------|------|
| `completion-report.md` | 프로젝트 완료 보고서 |

### agents/ (에이전트 지침)

| 파일 | 담당 역할 |
|------|-----------|
| `pl-01-research.md` | 리서치 에이전트 지침 |
| `pl-02-design.md` | 디자인 에이전트 지침 |
| `pl-03-content.md` | 콘텐츠 에이전트 지침 |
| `pl-04-devops.md` | DevOps 에이전트 지침 |
| `pl-05-marketing.md` | 마케팅 에이전트 지침 |
| `pl-06-development.md` | 개발 에이전트 지침 |
| `pl-07-knowledge-ops.md` | 지식 운영 에이전트 지침 |

---

## 6. 디자인 시안 폴더

개발 전 탐색한 HTML/CSS 시안들. 현재 서비스에는 반영되지 않으며 참고 아카이브.

| 폴더 | 내용 |
|------|------|
| `home_ivory_1/`, `home_ivory_2/` | 라이트(한지) 배경 홈 시안 1·2 |
| `home_deep_navy_1~3/` | 딥 네이비 다크 홈 시안 1·2·3 |
| `portfolio_1~3/` | 과제 목록 레이아웃 시안 1·2·3 |
| `story/` | 이야기 페이지 시안 |
| `contact/` | 만남(문의) 페이지 시안 |
| `shader_1~3/` | WebGL·셰이더 배경 실험 시안 |
| `kinetic_logic/`, `knot_solution/`, `pulda_core/` | 브랜드 컨셉별 DESIGN.md 탐색 노트 |

각 시안 폴더는 `code.html`(코드)과 `screen.png`(스크린샷)으로 구성.

---

## 7. 루트 문서 및 메모

| 파일 | 내용 |
|------|------|
| `README.md` | 프로젝트 전체 개요 및 시작 가이드 |
| `WORKLOG.md` | 작업 이력 로그 |
| `AGENTS.md` | 에이전트 협업 규칙 및 역할 정의 |
| `DESIGN.md` | 루트 레벨 디자인 방향성 메모 |
| `agent.md` | 에이전트 운영 메모 |
| `dev.md` | 개발 메모 및 기술 결정 사항 |
| `pm.md` | PM 관점 메모 및 운영 노트 |
| `qa.md` | QA 메모 |
| `a4u-platform.md` | A4U 플랫폼 프로젝트 메모 (루트 레벨 초안) |
| `site/README.md` | site/ 디렉토리 전용 README |
| `site/AGENTS.md` | site/ 작업 에이전트 지침 |
| `site/CONTENT_GUIDE.md` | 콘텐츠 작성 가이드 (마크다운 프론트매터 필드 설명) |
| `docs/README.md` | docs/ 폴더 구조 설명 |

---

## 8. 설정 및 인프라

| 파일 | 역할 |
|------|------|
| `.replit` | Replit 워크플로 정의 — `Start application` (`cd site && npm run dev`), 포스트머지 스크립트 경로(`scripts/post-merge.sh`) |
| `.gitignore` (루트) | Git 추적 제외 — `node_modules/`, `.env`, `dist/`, `.sanity/` 등 |
| `site/.env.example` | 환경변수 예시 — `PUBLIC_SITE_URL`, `SANITY_PROJECT_ID`, `SANITY_DATASET`, `SANITY_API_TOKEN` |

---

## 9. scripts/ (루트) — 배포 자동화

| 파일 | 역할 |
|------|------|
| `scripts/post-merge.sh` | **태스크 머지 후 자동 실행** 스크립트. `node_modules`가 없을 때만 `npm install --ignore-scripts` 실행. `decompress` CVE 보안 차단 우회를 위해 `--ignore-scripts` 옵션 적용 |

---

## 부록 — 자주 헷갈리는 파일 관계

| 궁금한 점 | 정답 |
|-----------|------|
| CSS는 어디에 있나? | `site/src/components/SiteHeader.astro` (전역) + `site/src/layouts/ContentLayout.astro` (페이지별). 별도 `.css` 파일 없음 |
| 콘텐츠 데이터는 어디에 있나? | `site/src/content/projects/*.md`, `site/src/content/stories/*.md` |
| 과제 이미지는 어디에 있나? | `site/public/case/{슬러그}/` |
| 다크모드 스타일은 어디에 있나? | `SiteHeader.astro` 19~20번 줄 `html[data-theme="dark"]` 셀렉터 |
| 테마 토글 JS 로직은 어디에 있나? | `SiteHeader.astro` `<script is:inline>` 내 `setTheme()` 함수 |
| 새 페이지 추가하려면? | `site/src/pages/` 에 `.astro` 파일 생성, `ContentLayout`으로 감싸기 |
| 새 과제 추가하려면? | `site/src/content/projects/` 에 마크다운, `site/public/case/{슬러그}/` 에 이미지 |
