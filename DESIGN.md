---
name: Pulda Core
colors:
  surface: '#f4ead8'
  surface-dim: '#e6d5b9'
  surface-bright: '#fbf4e7'
  surface-container-lowest: '#fbf4e7'
  surface-container-low: '#f4ead8'
  surface-container: '#eadcc5'
  surface-container-high: '#e6d5b9'
  surface-container-highest: '#d8c5a8'
  on-surface: '#13233a'
  on-surface-variant: '#5d4c3d'
  inverse-surface: '#13233a'
  inverse-on-surface: '#fbf4e7'
  outline: '#8f7462'
  outline-variant: '#d8c5a8'
  surface-tint: '#9f3a32'
  primary: '#9f3a32'
  on-primary: '#ffffff'
  primary-container: '#cf6b5a'
  on-primary-container: '#fff7f6'
  inverse-primary: '#ffb4aa'
  secondary: '#13233a'
  on-secondary: '#ffffff'
  secondary-container: '#1d304b'
  on-secondary-container: '#fbf4e7'
  tertiary: '#5a5a55'
  on-tertiary: '#ffffff'
  tertiary-container: '#73736d'
  on-tertiary-container: '#fbf9f1'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdad5'
  primary-fixed-dim: '#ffb4aa'
  on-primary-fixed: '#410001'
  on-primary-fixed-variant: '#930007'
  secondary-fixed: '#d9e2fd'
  secondary-fixed-dim: '#bdc6e0'
  on-secondary-fixed: '#111b2e'
  on-secondary-fixed-variant: '#3d475c'
  tertiary-fixed: '#e4e3db'
  tertiary-fixed-dim: '#c8c7bf'
  on-tertiary-fixed: '#1b1c17'
  on-tertiary-fixed-variant: '#474742'
  background: '#f4ead8'
  on-background: '#13233a'
  surface-variant: '#eadcc5'
typography:
  display-lg:
    fontFamily: Hanken Grotesk
    fontSize: 72px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Hanken Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-sm:
    fontFamily: Hanken Grotesk
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.1em
spacing:
  base: 8px
  container-max: 1440px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
  section-gap: 128px
---

## Brand & Style

Pulda의 라이트 버전은 첨부한 진관사 태극기의 색감에서 출발한다. 목표는 태극기의 붉음과 푸름을 그대로 크게 외치는 것이 아니라, 빛바랜 천과 한지 위에 스며든 색처럼 조용하게 웹사이트 전반에 배치하는 것이다.

브랜드 철학은 어려움을 헤쳐나가고 바른 길을 걷고자 했던 선조들의 마음을 오늘의 문제 해결 태도로 이어받는 데 있다. 그래서 화면은 현대적인 에이전시 구조를 유지하되, 제목의 붓글씨 느낌, 한지 배경, 절제된 홍색과 깊은 청색을 통해 동양적인 결을 남긴다.

## Color System

### Core Palette

- **Aged Hanji / 배경:** #f4ead8. 라이트 버전의 기본 바탕이다. 순백색 대신 빛바랜 한지와 오래된 태극기 천의 온도를 만든다.
- **Quiet Paper / 밝은 면:** #fbf4e7. 버튼 위 텍스트, 어두운 면 위 텍스트, 헤더의 반투명 배경처럼 흰색이 필요했던 곳을 대체한다.
- **Deep Taegeuk Blue / 먹빛 청색:** #13233a. 본문 텍스트, 주요 버튼, 다크 모드 바탕에 사용한다. 검정 대신 태극 문양의 푸른 축을 깊게 해석한 색이다.
- **Deep Blue Layer:** #1d304b. 다크 섹션 hover, 카드성 배경, 깊이 표현에 사용한다.
- **Old Taegeuk Red / 오래된 홍색:** #9f3a32. 라이트 버전의 주요 레드다. 로고, 강조어, 태그, 링크 hover, CTA, 시각적 포인트에 전반적으로 스며들게 사용한다.
- **Readable Red on Navy:** #cf6b5a. 네이비 위 작은 글자나 아이콘에서 #9f3a32가 어두워 보일 때만 쓰는 접근성 보정 색이다. 별도 브랜드 레드가 아니라 같은 계열의 조명값으로 본다.
- **Aged Paper Line:** rgba(19, 35, 58, .18). 라이트 버전 구분선은 검정이나 회색이 아니라 딥블루를 옅게 풀어 쓴다.

### Light Mode

라이트 모드는 흰 배경을 쓰지 않는다. 모든 화면의 바탕, 헤더, 히어로 오버레이, 카드성 표면은 #f4ead8 또는 #fbf4e7 계열을 사용해 한지의 차분함을 유지한다. 한지 배경 이미지는 장식이 아니라 색 체계의 일부로 취급한다.

레드는 페이지 전체에서 작고 반복적으로 등장한다. 큰 면을 빨갛게 채우기보다 로고, 제목 강조, 태그 테두리, hover, 문의 섹션처럼 의미가 필요한 곳에 절제해서 둔다. 다만 문의 섹션처럼 결심을 요구하는 구간에서는 #9f3a32를 면으로 사용할 수 있으며, 이때 텍스트는 #fbf4e7을 사용한다.

딥블루는 본문과 구조를 잡는다. 라이트 버전의 가독성은 #13233a가 책임지고, 버튼과 푸터, 서비스 섹션에서 태극의 푸른 축을 더 강하게 드러낸다.

### Dark Mode

다크 모드는 라이트 모드의 단순 반전이 아니다. 라이트가 사람 중심의 가치, 전통, 여백, 연결을 말한다면 다크는 전문 테크기업, 솔루션, 시스템, 전기전자, AI, 인더스트리얼 감각을 전면에 둔다. “낮에는 사람을 만나고 밤에는 기술과 씨름하는 회사”라는 대비가 느껴져야 한다.

다크 모드의 바탕은 거의 블랙에 가까운 테크 네이비 `#050914`와 금속성 패널 네이비를 사용한다. 붉은 계열은 라이트의 오래된 홍색이 아니라 쨍한 네온 레드 `#ff2d2d`로 전환한다. 단, 시각적 피로도를 낮추기 위해 레드는 큰 면적보다 라인, 글로우, 액션, 데이터 포인트에 집중해서 사용한다.

다크 모드에서는 Solmoe Kim Daegeon 계열의 붓글씨 타이포를 사용하지 않는다. 타이틀과 내비게이션은 견고하고 깨끗한 고딕/그로테스크 계열로 구성하고, 히어로 타이틀은 영문 기반으로 둔다. 풀다 로고 역시 한글 붓글씨 로고 대신 영문 `PULDA` 워드마크를 사용해 전혀 다른 회사의 밤 얼굴처럼 보이게 한다.

시각 언어는 싸이파이, 공상과학, 금속, 기계, 전기전자, AI의 이미지를 갖되 과도한 게임 UI처럼 보이지 않도록 한다. 강한 대비는 유지하지만 배경은 낮은 채도의 레이어와 얇은 그리드, 제한된 네온 포인트로 균형을 잡는다.

다크 모드의 카피라이팅은 거의 영문 페이지처럼 보이는 것을 목표로 한다. 꼭 필요한 설명을 제외하면 타이틀, 섹션 라벨, 버튼, 지표, 푸터 내비게이션은 영문을 우선 사용한다. 한국어는 라이트 모드의 사람 중심 정서에 남기고, 다크 모드에서는 솔루션/시스템/엔지니어링 중심의 짧고 견고한 영어 표현을 사용한다.

다크 모드의 모바일 메뉴와 스크롤 사인은 라이트 모드의 전통 자산을 재사용하지 않는다. 부채꼴 메뉴와 노리개 스크롤 사인은 라이트 전용으로 두고, 다크 모드에서는 기본적인 햄버거/X 메뉴와 마우스형 스크롤 사인을 사용해 테크 제품의 일반적인 인터랙션 문법을 따른다. 히어로 셰이더 역시 한지 위에 스며드는 은은한 실 흐름이 아니라 네온 광원이 선명하게 뿜어져 나오는 방향으로 분기한다.

## Typography

히어로 타이틀과 주요 섹션 제목은 "Solmoe Kim Daegeon" 계열을 우선 사용한다. 붓글씨의 감각은 장식이 아니라 철학의 전달 장치다. 어려움을 풀고 바른 방향으로 간다는 메시지가 지나치게 고전적으로 보이지 않도록, 본문과 정보 구조는 Hanken Grotesk와 Noto Sans KR의 현대적인 산세리프로 받친다.

*   **Display & Headlines:** 한글 중심의 철학 문구는 붓글씨 계열을 사용하고, 영문 보조 문구는 산세리프로 정돈한다.
*   **Body Copy:** 본문은 안정적인 산세리프와 넉넉한 행간으로 읽기 쉽게 유지한다.
*   **Labels:** 작은 라벨은 과하게 장식하지 않고, 레드 또는 딥블루와 함께 절제된 표식으로 사용한다.
*   **Mobile Scaling:** 모바일에서는 제목이 겹치지 않도록 줄바꿈과 고정 폭을 우선 검토한다.

## Layout & Spacing

레이아웃은 12컬럼 구조와 큰 여백을 유지한다. 동양적 색감이 들어가더라도 화면은 현대적인 에이전시 사이트답게 단정해야 한다. 한지 질감과 붓글씨가 충분히 개성을 만들기 때문에, 레이아웃 자체는 과도한 장식보다 명확한 정보 흐름을 따른다.

## Elevation & Depth

전통적인 그림자보다 톤 차이와 얇은 선을 사용한다. 라이트 모드에서는 #f4ead8, #fbf4e7, #e6d5b9 사이의 미묘한 차이로 깊이를 만들고, 다크 모드에서는 #13233a와 #1d304b의 차이로 층을 만든다.

## Shapes

구조적 UI 요소는 각진 형태를 유지한다. 붓글씨, 로고, 부채꼴 모바일 메뉴처럼 브랜드의 유기적 형태가 이미 존재하므로 버튼과 섹션 구조는 단정한 직선으로 받친다.

## Components

### Content Pages

메뉴 하위 페이지(`/about/`, `/project/`, `/story/`, `/contact/`)는 `ContentLayout.astro`를 공통 기준으로 사용한다. 라이트 모드에서는 메인 페이지와 같은 한지 배경, 붓글씨 제목, 오래된 홍색, 깊은 청색, 풀다 로고 워터마크를 유지한다. 다크 모드에서는 한글 붓글씨와 전통 자산을 줄이고, PULDA 영문 워드마크, 테크 네이비, 네온 레드, 영문 라벨, 각진 시스템형 레이어로 전환한다.

하위 메뉴 페이지의 내비게이션은 실제 경로 `/about/`, `/project/`, `/story/`, `/contact/`를 기준으로 한다. 홈 섹션 앵커는 페이지 내부 CTA에만 제한적으로 사용하고, 전역 메뉴는 실제 페이지 이동으로 통일한다.


### Home / About Content Boundary

메인 페이지는 Pulda를 처음 만나는 사람을 위한 판단 속도에 집중한다. 히어로의 약속, 문제를 푸는 방식의 짧은 요약, 대표 작업, 신뢰 신호, 문의 전환을 빠르게 보여주고 긴 설명은 피한다.

소개 페이지는 메인에서 압축한 철학을 풀어 설명하는 곳이다. Pulda의 판단 방식, 협업 방식, 프로젝트를 대하는 원칙, 연혁, 팀의 태도, 함께 일할 때의 기준처럼 깊이 읽는 내용을 맡긴다. 메인 intro가 소개 페이지의 축약판처럼 길어지면 소개로 옮기고, 메인에는 한두 문단의 방향성만 남긴다.

### Partner Logos

파트너/클라이언트 로고 영역은 "회사 소개"가 아니라 "검증 신호"다. intro 바로 뒤에 두면 상단 소개와 배경/정서가 이어져 섹션 전환이 약해질 수 있으므로, 프로젝트 목록 근처 또는 대표 작업 이후의 보조 신뢰 영역으로 두는 안을 우선 검토한다.

실제 로고 자산이 확정되기 전에는 텍스트 기반 임시 표현임을 유지한다. 실제 로고를 사용할 때는 사용 권한, 라이트/다크 대비, 모바일 가독성을 QA 기준으로 다시 확인한다.

### Buttons
*   **Primary:** 라이트 모드에서는 Deep Taegeuk Blue 바탕에 Quiet Paper 텍스트를 사용한다.
*   **Secondary:** 라이트 모드에서는 투명 배경과 Deep Taegeuk Blue 테두리를 사용한다.
*   **Hover State:** Old Taegeuk Red 바탕과 Quiet Paper 텍스트를 사용한다.

### Tags / Labels
*   Old Taegeuk Red의 테두리와 텍스트를 사용한다. 밝은 배경 위에서 충분한 대비를 유지하되, 면을 채우지 않아 조용하게 보이도록 한다.

### Dark Sections
*   바탕은 Deep Taegeuk Blue, 텍스트는 Quiet Paper를 사용한다. 작은 레드 텍스트와 아이콘은 Readable Red on Navy를 사용한다.

### Backgrounds
*   라이트 버전의 배경은 항상 한지 계열이다. 흰색(#ffffff)과 차가운 회백색(#f8fafc)은 신규 UI에 사용하지 않는다.
