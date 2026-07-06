---
title: "a4u.kr AI 커리어 매니지먼트 플랫폼"
description: "이력서 등록·관리·제출 흐름을 한 화면에 연결한 AI 기반 커리어 매니지먼트 웹 서비스입니다. Genspark·Gemini·Stitch·Replit으로 이어진 AI 협업 파이프라인으로 기획부터 배포까지 완성했습니다."
client: "Pulda Union"
year: 2026
publishedAt: 2025-03-10
updatedAt: 2026-07-06
cover: "/case/a4u-platform/a4u-main.png"
services: ["Product Planning", "Information Architecture", "UI/UX Design", "Full-Stack Development", "Deployment"]
tags: ["AI 플랫폼", "커리어 매니지먼트", "이력서 코칭", "Replit", "에이전트 워크플로"]
featured: true
outcome: "기획부터 배포까지 AI 협업 파이프라인으로 실서비스를 완성. a4u.kr에서 이력서 등록·관리·제출 흐름을 운영 중입니다."
seoTitle: "a4u.kr AI 커리어 매니지먼트 플랫폼 구축 사례 · Pulda"
seoDescription: "Pulda가 Replit으로 구축한 a4u.kr AI 커리어 매니지먼트 플랫폼. 이력서 등록부터 제출 관리까지, Genspark·Gemini·Stitch·Replit AI 파이프라인 전 과정을 소개합니다."
canonicalUrl: "https://a4u.kr"
---
<section class="case-visual-lead image-first">
  <figure class="hero-shot">
    <img src="/case/a4u-platform/a4u-main.png" alt="a4u.kr 메인 화면 — AI 기반 커리어 인텔리전스 플랫폼" loading="eager" />
    <figcaption>a4u.kr · AI 기반 커리어 인텔리전스 플랫폼 · 2026 live</figcaption>
  </figure>
  <div class="case-summary-grid" aria-label="프로젝트 핵심 요약">
    <div><span>Platform</span><strong>a4u.kr · 웹 SaaS</strong></div>
    <div><span>Stack</span><strong>Replit · Genspark · Gemini · Stitch 2.0</strong></div>
    <div><span>Core Flow</span><strong>이력서 등록 → 관리 → 제출</strong></div>
  </div>
</section>

## 무엇을 만들었나

a4u.kr은 AI 기반 커리어 매니지먼트 플랫폼입니다. 구직자가 이력서를 등록·관리하고, 지원 흐름을 추적하는 세 가지 핵심 흐름—**이력서 등록, 이력서 관리, 제출관리**—을 하나의 서비스 안에 연결합니다.

멈춰있던 커리어를 다시 세상과 연결한다는 방향 아래, AI가 이력서 점수를 분석하고 개선 방향을 제시하는 코칭 기능과, 지원 상태를 한눈에 파악할 수 있는 관리 구조를 갖췄습니다.

<section class="case-map" aria-label="a4u 핵심 화면 구조">
  <div><span>01</span><strong>이력서 등록</strong><p>이력서 파일 업로드·항목 입력, AI 기반 초기 분석과 점수 산출</p></div>
  <div><span>02</span><strong>이력서 관리</strong><p>등록된 이력서 버전 관리, AI 코칭 피드백 확인과 개선 사이클</p></div>
  <div><span>03</span><strong>제출관리</strong><p>지원한 공고별 상태 추적, 제출 이력과 결과 정리</p></div>
  <div><span>04</span><strong>인증 · 권한</strong><p>회원가입·로그인, Google·Naver·Kakao OAuth, 관리자/사용자 역할 분리</p></div>
</section>

## 어떻게 만들었나

이 프로젝트는 전통적인 개발 프로세스 대신, AI 도구를 단계마다 연결한 파이프라인으로 기획부터 배포까지 완주했습니다.

<section class="case-map" aria-label="a4u 빌드 파이프라인">
  <div><span>Plan</span><strong>Genspark</strong><p>서비스 방향, 핵심 기능 목록, 초기 IA를 AI와 함께 빠르게 결정</p></div>
  <div><span>Document</span><strong>Gemini · NotebookLM</strong><p>Markdown 기반 에이전트 역할 문서와 작업 기준서를 구성해 AI 협업 구조화</p></div>
  <div><span>Prototype</span><strong>Stitch 2.0</strong><p>주요 화면 시안과 사용자 흐름을 시각화해 방향 검증</p></div>
  <div><span>Build & Ship</span><strong>Replit</strong><p>실제 개발·테스트·배포까지 Replit 단일 환경에서 완성, a4u.kr 운영 중</p></div>
</section>

이 방식이 Pulda의 AI 활용 기준입니다. AI가 모든 것을 대신하는 게 아니라, PM이 문제를 정의하고 지시를 만들고 결과를 검수하는 흐름 자체를 AI가 빠르게 돌리게 합니다.

## Pulda가 맡은 일

- 서비스 개념 정의와 핵심 기능 우선순위 결정
- 이력서 등록→관리→제출 흐름의 정보 구조 설계
- 회원 인증(OAuth)·역할 분리(사용자/관리자) 구조 구현
- AI 코칭 피드백 표시와 이력서 점수 산출 UI 구현
- Replit 기반 전체 개발, 테스트, 배포

## 출발점 : apply4u

a4u.kr의 이름은 유니어플라이 재직 시절의 apply4u에서 왔습니다. 당시 apply4u는 대학 원서접수·내원서 꾸러미·입시 정보를 한 화면에 모으는 서비스였습니다. 그 경험이 쌓은 문제의식—지원 과정에서 사람들이 막히는 지점, 문서와 상태가 흩어지는 문제—이 10여 년 뒤 a4u.kr의 방향을 잡는 데 직접 사용됐습니다.

<figure class="case-origin-figure">
  <img src="/case/a4u-platform/apply4u-origin.jpg" alt="유니어플라이 재직 시절 apply4u 원서접수 서비스 아카이브" loading="lazy" />
  <figcaption>Origin archive · apply4u 원서접수 서비스 · 2010s Uniapply</figcaption>
</figure>

## 현재 상태

a4u.kr은 현재 실서비스로 운영 중입니다. 완성형 제품이라기보다, Pulda가 AI 시대의 웹 서비스를 어떻게 기획하고 실행하는지 보여주는 실증 사례입니다. 앞으로 실제 사용자 피드백을 반영해 이력서 코칭 기능과 매칭 흐름을 확장할 예정입니다.
