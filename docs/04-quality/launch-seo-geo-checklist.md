# Launch, SEO, and GEO Checklist

- 문서 상태: Active / Release Checklist
- 기준일: 2026-07-10
- 역할: Pulda 공식 사이트의 빠른 배포, 도메인 연결, 검색 등록, AI 검색 노출 준비를 한 번에 점검한다.

## Current Baseline

- Git 기준: `main`과 `origin/main`은 `0e4c724 07092017` 기준으로 동기화되어 있다.
- 로컬 작업트리: 2026-07-10 점검 시작 시점 기준 깨끗한 상태였다.
- 사이트 기준: 실제 소스는 `site/src/`와 `site/public/`이며, `site/dist/`는 빌드 산출물이다.
- SEO 기본 구현: canonical, robots meta, OG, Twitter Card, JSON-LD, sitemap, RSS, robots가 구현되어 있다.
- GEO 기본 구현: `site/public/llms.txt`를 추가해 AI 에이전트가 핵심 페이지와 사이트맵을 빠르게 찾을 수 있게 한다.

## P0 Release Path

1. 배포 플랫폼 연결
   - GitHub 저장소 `11p-prog/pulda`의 `main`을 기준 원본으로 연결한다.
   - 프로젝트 루트는 `site/`로 잡는다.
   - 빌드 명령은 `npm run build`, 출력 폴더는 `dist`로 설정한다.

2. 환경변수 확정
   - 최종 대표 도메인을 `PUBLIC_SITE_URL`에 넣는다.
   - 현재 권장값은 `https://puldaunion.com`이다.
   - 플랫폼 환경변수에만 넣고, `.env` 파일은 커밋하지 않는다.
   - 소스 기본값도 `https://puldaunion.com`으로 맞춰두었지만, 배포 플랫폼 환경변수에는 동일한 값을 명시해 두는 것을 원칙으로 한다.

3. 도메인 연결
   - 대표 도메인을 하나로 정한다: `puldaunion.com` 또는 `www.puldaunion.com`.
   - 보조 도메인은 대표 도메인으로 301 리다이렉트한다.
   - DNS 전파 후 `/sitemap.xml`, `/rss.xml`, `/robots.txt`, `/llms.txt`가 대표 도메인으로 응답하는지 확인한다.

4. /admin 보호
   - `/admin/`은 noindex와 robots disallow가 적용되어 있지만 접근 제어는 아니다.
   - 배포 플랫폼 보호 기능 또는 Cloudflare Access로 운영자 외 접근을 제한한다.

5. 배포 URL QA
   - `/`, `/about/`, `/project/`, 대표 프로젝트 3개, `/story/`, 대표 스토리 2개, `/contact/`, `/admin/`을 확인한다.
   - 데스크톱과 모바일에서 라이트/다크, 모바일 메뉴, 문의 링크, 이미지 로딩을 확인한다.

## P1 SEO Setup

1. Google Search Console
   - 도메인 속성으로 등록한다.
   - `https://puldaunion.com/sitemap.xml`을 제출한다.
   - 색인 생성, canonical, 모바일 사용성, 페이지 경험을 확인한다.

2. Naver Search Advisor
   - 사이트 소유 확인 후 sitemap과 RSS를 제출한다.
   - 네이버 검색 노출에 필요한 사이트명, 설명, 대표 링크 상태를 확인한다.

3. Bing Webmaster Tools
   - Google Search Console에서 가져오거나 직접 등록한다.
   - sitemap 제출 후 IndexNow 적용 여부를 검토한다.

4. Analytics
   - GA4와 네이버 애널리틱스를 연결한다.
   - 개인정보처리방침 또는 운영 고지에 분석 도구 사용 사실을 반영한다.
   - 현재 `_headers`의 CSP는 GA4, Google Tag Manager, 네이버 애널리틱스 도메인을 허용하도록 준비되어 있다.
   - 실제 추적 스크립트 삽입은 고지 문구 확정 후 진행한다.

## P1 GEO Setup

1. AI 검색 기본 원칙
   - Google은 생성형 AI 검색도 기본 SEO와 같은 색인, 품질, 기술 구조에 의존한다고 안내한다.
   - 따라서 GEO는 별도 꼼수가 아니라 명확한 정보 구조, 고유한 경험 기반 콘텐츠, 구조화 데이터, 크롤링 가능성의 확장으로 본다.

2. `llms.txt`
   - `/llms.txt`는 공개 정보만 담는다.
   - 비밀키, 내부 문서 경로, 고객 민감 정보는 절대 넣지 않는다.
   - 대표 페이지, 대표 사례, sitemap, RSS, contact 정도로 제한한다.

3. 콘텐츠 보강
   - 프로젝트 상세는 결과 이미지, 실제 문제, Pulda의 판단, 구현 과정, 운영 결과를 더 분명하게 적는다.
   - 스토리는 검색 키워드용 양산 글이 아니라 Pulda의 실제 경험과 관점을 축적한다.

4. 외부 신뢰 신호
   - 제작한 외부 사이트 푸터의 `made by 풀다` 링크를 대표 도메인으로 연결한다.
   - LinkedIn, GitHub, Notion 공개 자료, 고객 사례 링크 등 검증 가능한 외부 신호를 천천히 정리한다.

## References

- Google Search Central: creating helpful, reliable, people-first content
- Google Search Central: optimizing for generative AI features on Google Search
- Google Search Central: structured data documentation
- IndexNow documentation
