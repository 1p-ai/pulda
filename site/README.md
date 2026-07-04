# Pulda Astro Site

이 폴더가 실제 Pulda 웹사이트의 기준 프로젝트입니다.

## 주요 경로

- `src/pages/index.astro`: 메인 페이지 단일 소스
- `src/pages/project/`, `src/pages/story/`: 목록 및 상세 페이지
- `src/content/projects/`, `src/content/stories/`: 콘텐츠 원고
- `public/`: 로고, 배경, 폰트 같은 정적 자산
- `dist/`: 빌드 결과물

## 운영 원칙

라이트/다크 메인 페이지는 분리하지 않고 `src/pages/index.astro`에서 함께 관리합니다. 루트의 독립 `code.html` 파일들은 참고 시안입니다. 변경 이력과 결정 사항은 루트 `WORKLOG.md`에 남깁니다.

## 명령

- `npm run dev`: 로컬 개발 서버
- `npm run build`: 정적 사이트 빌드
- `npm run preview`: 빌드 결과 미리보기
