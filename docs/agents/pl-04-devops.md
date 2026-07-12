# PL-04 DevOps

- 문서 상태: Active / Specialist Agent
- 기준일: 2026-07-04
- 보고 대상: pm.md

## Current Summary

- 현재 판단: GitHub를 기준 원본으로 둔다.
- Codex와 Replit은 GitHub 원본을 받아 작업을 이어가는 실행 환경으로 둔다.
- 열린 이슈: PM Task Queue와 QA 이슈 로그를 기준으로 관련 항목을 추적한다.
- PM에게 보고할 사항: /admin은 noindex만으로 보호되지 않으며 호스팅 레벨 접근 제어가 필요하다.
- 다음 검토 대상: GitHub Desktop 첫 push 후 원격 저장소 상태, 제외 파일 누락 여부, Replit 연동 방식, 배포 플랫폼 연결 기준을 점검한다.

## Role

GitHub, Replit, Codex, 배포, 환경변수, 접근 제어를 관리하는 운영/개발 조력자다.

## Responsibility

- GitHub 기준 원본 관리
- Replit 빠른 테스트와 Codex 고도화 흐름 정리
- 배포 플랫폼 설정 기준 수립
- 환경변수와 비밀정보 관리
- /admin 접근 제어와 롤백 기준 검토

## Report To PM

PL 문서는 최종 결정을 확정하지 않는다. 아래 형식으로 pm.md에 보고한다.

| 항목 | 내용 |
| --- | --- |
| 보고일 | YYYY-MM-DD |
| 심각도 | High / Medium / Low |
| 영역 | DevOps |
| 관찰 | 확인한 사실 |
| 리스크 | PM이 판단해야 할 문제 |
| 제안 | 다음 작업 또는 보류 기준 |
| 상태 | Open / In Progress / Resolved / Deferred |

## Working Notes

- GitHub를 기준 원본으로 둔다.
- 루트 `.gitignore` 기준으로 `site/node_modules/`, `site/dist/`, `site/.astro/`, 환경변수 파일은 Git에 올리지 않는다.
- Replit으로 이어갈 때는 GitHub 저장소를 import하고, 작업 전후 pull/push 흐름을 유지한다.
- Codex 세션이 중단되면 AGENTS.md, agent.md, pm.md, qa.md, WORKLOG.md, DESIGN.md, handoff 문서를 기준으로 복구한다.
- /admin은 noindex만으로 보호되지 않으며 호스팅 레벨 접근 제어가 필요하다.

## 2026-07-11 QA Broadcast Intake

| 항목 | 내용 |
| --- | --- |
| 보고일 | 2026-07-11 |
| 심각도 | High |
| 영역 | DevOps |
| 관찰 | 현재 빌드와 QA는 통과했지만, 도메인 연결 전 최종 환경변수와 산출물 도메인 일치 검수가 남아 있다. |
| 리스크 | `PUBLIC_SITE_URL`, canonical, sitemap, robots, RSS, llms.txt 중 하나라도 다른 도메인을 가리키면 SEO/GEO 초기 신호가 꼬일 수 있다. |
| 제안 | 도메인 연결 직전 배포 환경변수, 빌드 산출물, 미리보기 URL, production URL을 한 번에 검수한다. 로컬 미리보기 포트는 최종 안내마다 실제 포트를 명시한다. |
| 상태 | Open |

## 2026-07-12 Contact Form DevOps Note

| 항목 | 내용 |
| --- | --- |
| 보고일 | 2026-07-12 |
| 심각도 | Medium |
| 영역 | Contact / Deployment |
| 관찰 | `/contact/` 문의폼은 정적 Astro 배포에서도 동작하도록 FormSubmit 외부 폼 액션을 사용한다. |
| 리스크 | 첫 전송 시 `1p@puldaunion.com` 수신함에서 활성화 확인이 필요할 수 있으며, 장기 운영에서는 스팸/개인정보 보관/서비스 의존성 검토가 필요하다. |
| 제안 | 배포 후 실제 테스트 문의를 1회 발송해 활성화와 수신을 확인한다. 이후 서버리스 메일러 또는 전용 폼 서비스 전환 여부를 PM과 결정한다. |
| 상태 | Open |
