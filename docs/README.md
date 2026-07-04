# Pulda 프로젝트 표준 산출물

- 문서 상태: Draft / Living Document
- 기준일: 2026-07-03
- 기준 프로젝트: `site/` Astro 웹사이트
- 기준 소스: `site/src/`, `site/public/`

이 폴더는 Pulda 웹사이트 프로젝트를 일반 웹 프로젝트 관리 산출물 형식으로 정리한 문서 묶음이다. 아직 프로젝트가 완료되지 않았으므로 완료보고서, 최종 검수확인서, 운영 인수인계서, 장애 대응 이력 등은 제외하고, 현재 의사결정과 제작에 바로 쓰이는 기획/개발/디자인 문서를 우선 작성한다.

## 문서 구성

| 구분 | 파일 | 용도 |
| --- | --- | --- |
| 프로젝트 | `00-project/project-brief.md` | 목적, 범위, 이해관계, 진행 상태 정리 |
| 기획 | `01-planning/requirements.md` | 요구사항정의서 |
| 기획 | `01-planning/functional-spec.md` | 기능정의서 |
| 기획 | `01-planning/ia.md` | 정보구조 IA |
| 기획 | `01-planning/storyboard.md` | 주요 화면 스토리보드 |
| 개발 | `02-development/architecture.md` | 시스템/프론트엔드 아키텍처 |
| 개발 | `02-development/data-model-erd.md` | 콘텐츠 데이터 모델과 ERD |
| 개발 | `02-development/cms-plan.md` | Sanity CMS 도입 계획 |
| 디자인 | `03-design/style-guide.md` | 스타일 가이드 |
| 품질 | `04-quality/qa-checklist.md` | QA/검수 체크리스트 |
| 완료 | `05-closing/completion-report.md` | 완료보고서 초안, 최종 완료 후 업데이트 |

## 아직 만들지 않는 문서

- 완료보고서: 현재는 `05-closing/completion-report.md` 초안으로 두고, 배포와 최종 검수 이후 완료본으로 업데이트
- 운영 인수인계서: 관리자 권한, 배포 계정, CMS 계정, 도메인 정보가 확정된 뒤 작성
- 장애 대응 보고서: 실제 운영 이슈 발생 후 작성
- 개인정보 처리/법무 문서: 서비스 수집 항목과 외부 계약이 확정된 뒤 별도 검토 필요

## 유지 원칙

- 화면/구조 변경이 생기면 해당 문서를 함께 갱신한다.
- 실제 기준은 루트 문서와 `site/src/` 소스이며, `site/dist/`와 루트 시안 파일은 기준 문서로 삼지 않는다.
- Sanity, 배포, 도메인처럼 외부 상태를 바꾸는 작업은 문서화 후 별도 승인으로 진행한다.
