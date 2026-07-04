# 과제와 이야기 운영 가이드

## 현재 구조

- `src/content/projects`: 과제 원고
- `src/content/stories`: 이야기 원고
- `/project/`, `/story/`: 목록
- 각 원고 파일명: 공개 URL 슬러그

현재는 개발과 SEO 검증을 위해 Markdown 파일을 사용합니다. Sanity를 연결할 때도 동일한 필드를 사용하므로 URL과 화면 템플릿은 바뀌지 않습니다.

## 검색최적화 필수 필드

- `title`: 화면 제목
- `description`: 목록과 기본 메타 설명
- `publishedAt`: 최초 공개일
- `updatedAt`: 내용이 의미 있게 바뀐 경우만 입력
- `seoTitle`: 검색 제목, 60자 이하
- `seoDescription`: 검색 설명, 160자 이하
- `tags`: 글 주제
- `cover`: 공유용 대표 이미지
- `canonicalUrl`: 같은 글이 다른 곳에도 있을 때만 원본 URL 입력
- `noindex`: 검색 제외가 필요할 때 `true`

## 자동 생성 항목

- canonical URL
- Open Graph 및 Twitter 메타데이터
- 과제 `CreativeWork` 구조화 데이터
- 이야기 `BlogPosting` 구조화 데이터
- `sitemap.xml`, `rss.xml`, `robots.txt`

## Sanity 연결 다음 단계

1. Sanity에서 새 프로젝트를 만듭니다.
2. 과제와 이야기 스키마를 현재 필드와 동일하게 등록합니다.
3. `.env`에 Project ID와 Dataset을 입력합니다.
4. Sanity 발행 Webhook을 Cloudflare Pages 배포 훅에 연결합니다.
5. 발행할 때마다 정적 페이지와 사이트맵이 자동 재생성됩니다.

## 도메인 연결 주의

Cloudflare Pages에 웹사이트용 CNAME만 추가합니다. Google Workspace의 MX, SPF, DKIM, DMARC 레코드는 삭제하거나 변경하지 않습니다.
## Sanity 무료 플랜 운영안

2026-07-03 기준 Sanity Free 플랜은 Pulda의 초기 콘텐츠 운영에 충분하다. 공개 데이터셋만 사용할 수 있으므로 비공개 제안서, 내부 리뷰, 계약 정보, 고객 민감 정보는 넣지 않는다. 공개 가능한 프로젝트 리뷰와 스토리 초안만 관리한다.

- Studio는 별도 어드민으로 운영한다. 우선 Sanity 호스팅 Studio 또는 `/admin` SPA로 분리하고, 공개 사이트는 Astro 정적 빌드로 유지한다.
- 문서 타입은 `project`, `story`, `siteSettings` 세 가지를 우선 둔다. `tag`는 처음부터 화면 탭으로 노출하지 않고 내부 분류 필드로만 사용한다.
- `project`는 기획 의도, 문제 정의, 진행 과정, 산출물, 결과, 회고를 다루는 케이스 스터디로 작성한다.
- `story`는 개인적인 이야기, 시장 동향, 공지, 작업 노트를 담는 기업 블로그로 작성한다.
- 글이 12-20개 이상 쌓이면 태그 빈도를 보고 카테고리 탭 또는 태그 필터를 화면에 노출한다.
- 발행 Webhook은 배포 훅에 연결해 정적 페이지, 사이트맵, RSS가 함께 갱신되도록 한다.

## 프로젝트 포트폴리오 이미지 운영

프로젝트 콘텐츠는 대표 이미지 하나가 아니라 전시 용도별 이미지 세트로 관리한다. 초기 Markdown 단계에서는 본문 HTML 섹션으로 관리하되, Sanity 전환 시에는 `project.gallery[]` 배열에 이미지, 대체문구, 캡션, 사용처를 함께 저장한다.

- `cover`: 목록, 공유, 대표 화면에 쓰는 넓은 이미지
- `desktopFrame`: 16:9 또는 16:10 비율의 데스크톱 전시 화면
- `tabletFrame`: 4:5 전후 비율의 카드형 화면
- `mobileFrame`: 9:16 세로 화면 또는 긴 상세 장면
- `galleryUsage`: slide, magazine, detail, beforeAfter 같은 화면 배치 용도

## 프로젝트 이미지 보존과 교체 기준

프로젝트 이미지는 운영 중인 웹사이트의 현재 상태와 별도로 보존한다. 특히 외부 빌더나 고객 운영 환경에서 이미지가 교체되거나 레이아웃이 흐트러진 경우, 현재 캡처를 무조건 대표 이미지로 쓰지 않는다. 초기 시안, 제안서, 검수 완료본, 납품 당시 캡처 중 제작 의도를 가장 잘 설명하는 이미지를 `displayAsset`으로 지정한다.

- `liveCapture`: 현재 운영 상태 확인용 이미지
- `approvedDraft`: 초기 시안, 제안서, 검수 완료 이미지
- `fullScrollImage`: 상세 흐름 설명이 필요한 스크롤 캡처
- `landscapeImage`: 구조 설명이 필요한 가로형 페이지 캡처
- `displayAsset`: 실제 프로젝트 상세에 노출할 최종 선택 이미지
- `replaceReason`: 운영 훼손, 이미지 유실, 레이아웃 변경 등 교체 사유

## 스토리 CRUD 운영 기준

스토리는 초기에는 단순 글 목록으로 시작하지만, 관리자에서는 생성, 수정, 발행, 보관, 삭제 흐름을 분리해 관리한다. 공개 화면에는 카테고리 필터를 처음부터 과하게 노출하지 않고, 관리자 내부에서만 category와 tags를 축적한다.

- `slug`: 공개 URL과 파일명 기준
- `title`: 공개 제목
- `description`: 목록과 메타 설명
- `cover`: 대표 이미지, 없으면 텍스트 중심 글로 표시
- `category`: Brand, Notice, Market, Work Note 등 내부 분류
- `status`: Draft, Published, Archived 운영 상태
- `sourceUrl`: 이전 사이트나 외부 원문을 참고한 경우 관리자 내부에만 기록
- `deletePolicy`: 공개 삭제 전 Archive 상태로 전환해 검색/공유 링크 영향을 점검

## 광고 배치 운영 기준

Pulda 공식 웹사이트의 광고는 기본 비활성화한다. 현재 아임웹 버전에 Google 광고가 있더라도, 새 공식 사이트에서는 브랜드 신뢰와 문의 전환을 우선한다. 광고를 실험할 경우에도 프로젝트와 스토리 영역에 한정하고, 본문 이해와 문의 동선을 방해하지 않는 후면 배치만 허용한다.

- `homeAds`: 항상 false. 홈 히어로, 서비스 소개, 문의 CTA에는 광고를 넣지 않는다.
- `aboutAds` / `contactAds`: 항상 false. 신뢰 형성 및 전환 페이지에는 광고를 넣지 않는다.
- `projectAds`: 기본 false. 실험 시 상세 본문 이후, 관련 프로젝트 이전 또는 하단 보조 영역만 허용한다.
- `storyAds`: 기본 false. 실험 시 글 본문이 끝난 뒤, 목록 복귀 또는 관련 글 이전 영역만 허용한다.
- `adLabel`: 광고는 반드시 Advertisement 또는 Sponsored Links 수준으로 명확히 표시한다.
- `blockedPlacement`: 메뉴, 이전/다음 버튼, 다운로드/문의 버튼, 이미지 캡션, 카드 목록 사이에 끼워 넣지 않는다.
- `experimentMetric`: 월 광고 수익, 문의 전환 저하, 체류 시간, 이탈률을 함께 보고 유지 여부를 판단한다.

## 스토리 화면 구성 기준

스토리 페이지는 기업블로그처럼 편하게 포스팅을 고르고 읽는 데 집중한다. 초기에는 카테고리 필터를 강하게 만들지 않고, 대표글과 최신글 중심으로 구성한다. 글이 쌓이면 Brand, Work Note, Market, Notice 같은 내부 category를 탭으로 노출한다.

- 대표글은 최신 글보다 브랜드 소개나 운영 철학처럼 처음 방문자가 읽기 좋은 글을 우선한다.
- 목록은 제목, 설명, 작성자, 날짜, 카테고리, 대표 이미지를 한 번에 스캔할 수 있게 구성한다.
- 상세는 본문 가독성을 우선하고, 글 하단에 이어 읽을 글을 배치해 탐색을 이어간다.
- 광고나 CTA는 본문 중간에 끼워 넣지 않고, 필요한 경우 글이 끝난 뒤 보조 영역에만 둔다.

## 운영 포털, 로그인, 접속통계 정책

실제 콘텐츠 관리는 Sanity Studio에서 처리한다. Sanity가 로그인, 권한, 초안, 발행, 이미지 업로드를 담당한다. /admin은 CMS가 아니라 운영 포털이며, 콘텐츠 목록 미리보기, 외부 도구 링크, 정책과 체크리스트를 모아두는 페이지다.

- /admin은 noindex와 robots.txt 차단만으로는 보안이 되지 않는다. URL을 아는 사용자는 접근할 수 있다.
- 배포 시 /admin은 Cloudflare Access 같은 호스팅 레벨 접근 제어를 적용하거나, 내부 도메인/비공개 빌드로 분리한다.
- 정적 페이지에서 구현한 클라이언트 비밀번호 입력은 보안으로 보지 않는다. API 키, 개인정보, 비공개 고객 자료, 매출 정보는 /admin에 표시하지 않는다.
- 접속통계는 Google Analytics, Google Search Console, 네이버 애널리틱스에서 확인한다. /admin은 해당 도구로 이동하는 운영 링크와 확인할 지표를 안내한다.
- 통계 스크립트를 붙일 경우 개인정보처리방침에 사용 도구와 수집 목적을 고지한다.
