# 데이터 모델 및 ERD

- 문서 상태: Draft
- 기준일: 2026-07-03

## 1. 현재 데이터 소스

현재 데이터는 Astro Content Collections와 Markdown 파일을 기준으로 관리한다.

- 프로젝트: `site/src/content/projects/*.md`
- 스토리: `site/src/content/stories/*.md`
- 스키마: `site/src/content.config.ts`

## 2. 개념 ERD

~~~mermaid
erDiagram
  PROJECT {
    string slug
    string title
    string description
    string client
    number year
    date publishedAt
    date updatedAt
    string cover
    string_array services
    string_array tags
    boolean featured
    boolean draft
    string outcome
    string seoTitle
    string seoDescription
    string canonicalUrl
    boolean noindex
  }
  STORY {
    string slug
    string title
    string description
    date publishedAt
    date updatedAt
    string author
    string cover
    string category
    string_array tags
    boolean featured
    boolean draft
    string seoTitle
    string seoDescription
    string canonicalUrl
    boolean noindex
  }
  SITE_SETTINGS {
    string siteTitle
    string siteDescription
    string email
    string phone
    string location
    string_array featuredProjects
    string_array featuredStories
  }
  TAG {
    string title
    string slug
    string description
  }
  PROJECT }o--o{ TAG : uses
  STORY }o--o{ TAG : uses
  SITE_SETTINGS ||--o{ PROJECT : features
  SITE_SETTINGS ||--o{ STORY : features
~~~

## 3. 프로젝트 필드

| 필드 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| title | string | Y | 화면 제목 |
| description | string | Y | 목록/메타 설명 |
| client | string | Y | 클라이언트 또는 작업 주체 |
| year | number | Y | 프로젝트 연도 |
| publishedAt | date | Y | 공개일 |
| updatedAt | date | N | 수정일 |
| cover | string | N | 대표 이미지 |
| services | string[] | N | 작업 범위 |
| tags | string[] | N | 내부 분류 및 향후 필터 |
| featured | boolean | N | 대표 노출 여부 |
| draft | boolean | N | 공개 제외 여부 |
| outcome | string | N | 결과 요약 |
| seoTitle | string | N | 검색 제목 |
| seoDescription | string | N | 검색 설명 |
| canonicalUrl | url | N | 원본 URL |
| noindex | boolean | N | 검색 제외 |

## 4. 스토리 필드

| 필드 | 타입 | 필수 | 설명 |
| --- | --- | --- | --- |
| title | string | Y | 화면 제목 |
| description | string | Y | 목록/메타 설명 |
| publishedAt | date | Y | 공개일 |
| updatedAt | date | N | 수정일 |
| author | string | N | 작성자, 기본값 풀다 |
| cover | string | N | 대표 이미지 |
| category | string | N | 내부 분류, 기본값 이야기 |
| tags | string[] | N | 내부 분류 및 향후 필터 |
| featured | boolean | N | 대표 노출 여부 |
| draft | boolean | N | 공개 제외 여부 |
| seoTitle | string | N | 검색 제목 |
| seoDescription | string | N | 검색 설명 |
| canonicalUrl | url | N | 원본 URL |
| noindex | boolean | N | 검색 제외 |

## 5. Sanity 이전 원칙

- 현재 Markdown 필드를 그대로 Sanity schema로 이전한다.
- `slug`는 파일명에서 Sanity slug 필드로 전환한다.
- `tags`는 초기에는 문자열 배열로 유지하고, 필요해지면 별도 `tag` 문서로 정규화한다.
- 공개 데이터셋 전제이므로 민감 정보는 저장하지 않는다.
