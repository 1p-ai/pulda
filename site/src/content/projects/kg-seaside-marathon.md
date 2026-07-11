---
title: "경기신문 씨사이드 마라톤대회 웹사이트"
description: "대회 소개, 코스 안내, 대규모 참가 신청과 결제, 단체 신청 데이터 관리를 연결한 아임웹 기반 마라톤대회 공식 웹사이트입니다."
client: "경기신문 씨사이드 마라톤대회"
year: 2026
publishedAt: 2026-02-23
cover: "/case/kg-seaside-marathon/cover.png"
services: ["Imweb Website", "Event IA", "Application Flow", "Payment Operations", "Apps Script"]
tags: ["아임웹", "행사 웹사이트", "마라톤", "대규모 신청", "결제 운영"]
featured: false
outcome: "약 5,000명 규모 참가 신청과 결제 운영을 고려해 개인/단체 신청, 옵션 수집, 입금 확인, 데이터 관리 흐름을 정리했습니다."
seoTitle: "경기신문 씨사이드 마라톤대회 웹사이트 작업"
seoDescription: "풀다가 아임웹으로 구축한 경기신문 씨사이드 마라톤대회 공식 웹사이트와 대규모 신청·결제 운영 구조를 소개합니다."
---
<figure class="hero-shot">
  <img src="/case/kg-seaside-marathon/cover.png" alt="경기신문 씨사이드 마라톤대회 공식 웹사이트 메인 화면" loading="eager" />
</figure>

<section class="case-summary-grid" aria-label="프로젝트 핵심 요약">
  <div><span>Platform</span><strong>Imweb</strong></div>
  <div><span>Project Type</span><strong>Event Website</strong></div>
  <div><span>Public URL</span><strong><a href="https://kgseasiderun.co.kr/" target="_blank" rel="noopener">kgseasiderun.co.kr</a></strong></div>
</section>

## 행사 정보를 신청 행동으로 연결하는 일

경기신문 씨사이드 마라톤대회 웹사이트는 참가자가 대회 정보를 빠르게 이해하고 신청 행동으로 넘어갈 수 있어야 하는 행사형 웹사이트입니다. 소개, 코스, 신청, 공지, FAQ, 문의게시판처럼 행사 운영에 필요한 메뉴를 한 흐름으로 정리했습니다.

공개 사이트 기준으로 대회일시, 참가부문, 접수기간, 신청 조회와 공지 확인 흐름이 함께 제공됩니다. 행사 사이트는 보기 좋은 첫 화면보다 “언제, 어디서, 어떤 종목으로, 어떻게 신청하는가”가 분명해야 합니다.

<section class="screen-pair" aria-label="씨사이드 마라톤대회 정보 화면">
  <figure>
    <img src="/case/kg-seaside-marathon/course.png" alt="경기신문 씨사이드 마라톤대회 코스 안내 화면" loading="lazy" />
    <figcaption><strong>Course</strong><span>대회 코스와 운영 안내를 시각 자료 중심으로 정리했습니다.</span></figcaption>
  </figure>
  <figure>
    <img src="/case/kg-seaside-marathon/cover.png" alt="경기신문 씨사이드 마라톤대회 메인 신청 화면" loading="lazy" />
    <figcaption><strong>Entry Flow</strong><span>대회 정보 확인에서 참가 신청 CTA까지 이어지는 첫 화면입니다.</span></figcaption>
  </figure>
</section>

<section class="capture-slot-grid" aria-label="씨사이드 마라톤대회 추가 캡처 예정 화면">
  <article class="capture-slot">
    <span>Capture Slot</span>
    <strong>참가 신청 상세</strong>
    <p>개인 신청에서 종목, 옵션, 결제 전 확인으로 이어지는 실제 입력 흐름이 보이면 좋습니다.</p>
    <small>권장 파일명: /case/kg-seaside-marathon/entry-form.png</small>
  </article>
  <article class="capture-slot">
    <span>Capture Slot</span>
    <strong>단체 신청/조회 운영</strong>
    <p>단체 신청 명단, 신청 조회, 운영 확인 페이지처럼 대규모 접수의 뒷단 구조를 설명할 수 있는 화면입니다.</p>
    <small>권장 파일명: /case/kg-seaside-marathon/group-operation.png</small>
  </article>
</section>

## 풀다가 맡은 일

- 아임웹 기반 공식 웹사이트 구조 정리
- 대회 소개, 코스, 신청, 공지 메뉴의 정보 흐름 구성
- 참가 신청 행동으로 이어지는 CTA 배치
- 개인/단체 신청, 코스, 기념품 사이즈 같은 옵션 수집 흐름 구성
- KCP 결제 환경과 아임웹 상품 옵션 구조 검토 및 운영 트러블슈팅
- 단체 신청 명단을 운영자 메일과 별도 시트로 관리하는 보조 흐름 구성
- Apps Script를 활용해 신청 데이터 확인 페이지와 운영 확인 흐름 보완
- 입금 확인, 참가 조회, 단체/14세 미만 신청 같은 예외 동선 분리

## 대규모 신청에서 중요한 것

마라톤대회 사이트는 단순 홍보 페이지가 아니라 접수 기간에 트래픽과 결제가 몰리는 운영 시스템입니다. 아임웹 같은 노코드 빌더는 빠르게 구축할 수 있지만, 수천 명 규모의 접수와 복잡한 옵션, 단체 신청까지 한 번에 처리하려면 사전에 한계를 파악해야 합니다.

이 프로젝트에서는 완전 자동화만을 목표로 삼지 않았습니다. 아임웹 상품 옵션과 결제 구조가 감당할 수 있는 범위를 먼저 확인하고, 단체 명단과 예외 상황은 별도 시트와 운영 정책으로 분리했습니다. 중요한 것은 모든 것을 화면 안에서 억지로 해결하는 것이 아니라, 데이터가 유실되지 않고 운영자가 확인할 수 있는 구조를 만드는 일이었습니다.

## 작업 기준

행사 웹사이트는 짧은 기간에 많은 사용자가 같은 질문을 반복합니다. 그래서 첫 화면에는 핵심 일정과 참가 부문을 압축하고, 상세 정보는 코스와 공지 메뉴로 분리하는 것이 중요합니다.

이 프로젝트는 풀다가 단순 브랜드 사이트뿐 아니라 일정, 신청, 조회, 공지처럼 운영 흐름이 있는 웹사이트도 정리할 수 있다는 근거로 남깁니다.
