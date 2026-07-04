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
