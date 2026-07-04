# IA 정보구조

- 문서 상태: Draft
- 기준일: 2026-07-03

## 1. 사이트맵

~~~mermaid
flowchart TD
  Home["/ Home"] --> About["/about/ 소개"]
  Home --> ProjectList["/project/ 프로젝트 목록"]
  ProjectList --> ProjectDetail["/project/{slug}/ 프로젝트 상세"]
  Home --> StoryList["/story/ 스토리 목록"]
  StoryList --> StoryDetail["/story/{slug}/ 스토리 상세"]
  Home --> Contact["/contact/ 문의"]
  Home --> Sitemap["/sitemap.xml"]
  Home --> RSS["/rss.xml"]
  Home --> Robots["/robots.txt"]
~~~

## 2. 전역 내비게이션

| 라이트 라벨 | 다크 라벨 | 경로 | 역할 |
| --- | --- | --- | --- |
| 소개 | About | `/about/` | 브랜드와 일하는 방식 소개 |
| 과제 | Project | `/project/` | 프로젝트 사례 목록 |
| 이야기 | Story | `/story/` | 기업 블로그/저널 |
| 만남 | Contact | `/contact/` | 문의 유도 |

## 3. 페이지별 정보 우선순위

### 홈

1. 브랜드 핵심 메시지
2. CTA
3. 문제 해결 철학
4. 서비스 역량
5. 대표 프로젝트
6. 문의

### 소개

1. Pulda의 기준
2. 전략/디자인/기술의 연결 방식
3. 전통 상징을 문제 해결 태도로 번역하는 관점
4. 프로젝트 페이지 이동

### 프로젝트

1. 프로젝트의 맥락
2. 클라이언트/범위/결과
3. 기획 의도와 진행 과정
4. 산출물과 리뷰
5. 관련 태그

### 스토리

1. 글 제목과 요약
2. 카테고리/작성자/일자
3. 본문
4. 목록 복귀

## 4. 향후 IA 확장

- 프로젝트가 늘어나면 대표/전체 구분을 추가할 수 있다.
- 스토리가 12-20개 이상 쌓이면 태그 또는 카테고리 필터를 노출한다.
- 검색 기능은 콘텐츠 수가 충분히 쌓인 뒤 도입한다.
- `/admin/` 또는 별도 Sanity Studio URL은 운영자용으로 분리한다.
