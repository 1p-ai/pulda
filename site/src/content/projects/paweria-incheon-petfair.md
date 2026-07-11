---
title: "포에리아 인천 펫페어 웹사이트"
description: "반려동물 박람회 정보, 관람 안내, 부스 참가 신청과 운영 데이터를 연결한 아임웹 기반 행사 웹사이트 작업입니다."
client: "포에리아 인천 펫페어"
year: 2026
publishedAt: 2026-04-01
cover: "/case/paweria-incheon-petfair/cover.png"
services: ["Imweb Website", "Event IA", "Tally Form", "Apps Script", "Data Operations"]
tags: ["아임웹", "펫페어", "박람회", "자동견적", "운영 자동화"]
featured: false
outcome: "관람객 안내와 참가업체 부스 신청을 분리하고, Tally·Google Sheets·Apps Script 기반 자동견적/알림 흐름으로 운영 부담을 줄였습니다."
seoTitle: "포에리아 인천 펫페어 아임웹 웹사이트 작업"
seoDescription: "풀다가 아임웹, Tally, Google Sheets, Apps Script를 연결해 구축한 포에리아 인천 펫페어 웹사이트 작업 기록입니다."
---
<figure class="hero-shot">
  <img src="/case/paweria-incheon-petfair/cover.png" alt="포에리아 인천 펫페어 웹사이트 메인 화면" loading="eager" />
</figure>

<section class="case-summary-grid" aria-label="프로젝트 핵심 요약">
  <div><span>Platform</span><strong>Imweb</strong></div>
  <div><span>Project Type</span><strong>Exhibition Website</strong></div>
  <div><span>Public URL</span><strong><a href="https://paweria.co.kr/" target="_blank" rel="noopener">paweria.co.kr</a></strong></div>
</section>

## 박람회 정보를 방문 여정으로 정리하기

포에리아 인천 펫페어 웹사이트는 행사 정보와 관람 흐름을 안내하는 박람회형 웹사이트입니다. 이런 사이트는 브랜드 이미지와 함께 일정, 장소, 관람 안내, 참가 정보, 공지 같은 운영 정보가 명확해야 합니다.

방문자는 “언제 열리는가”, “어디서 열리는가”, “무엇을 볼 수 있는가”, “어떻게 참여하는가”를 빠르게 판단합니다. 풀다는 이 질문들이 메뉴와 화면 흐름 안에서 막히지 않도록 구조를 정리하는 데 초점을 둡니다.

## 풀다가 맡은 일

- 아임웹 기반 박람회 웹사이트 구조 구성
- 행사 소개와 관람 안내의 우선순위 정리
- 참가자와 방문자에게 필요한 정보 구분
- Tally를 활용한 부스 타입, 수량, 부대시설 조건별 자동견적 폼 구성
- Google Sheets와 Apps Script를 활용한 신청 데이터 확인, 신규 신청 알림, 운영 요약 흐름 구성
- B2B 참가업체 신청 페이지와 B2C 관람객 안내/입장권 흐름 분리
- 탭 메뉴와 아코디언 UI를 활용한 모바일 정보 접근성 보정
- 행사형 웹사이트에 맞는 전환 동선, SEO, SSL, 관리자 권한 설정 정리

## 운영을 줄이는 신청 구조

처음 열리는 박람회는 콘텐츠와 정책이 동시에 정리되는 경우가 많습니다. 포에리아도 행사 정보, 참가업체 안내, 관람객 안내, 입장권, 공지, FAQ가 함께 움직여야 했습니다.

특히 참가업체 부스 신청은 단순 문의 폼으로 처리하기 어려웠습니다. 부스 타입, 수량, 전기와 랜선 같은 부대시설 선택에 따라 금액이 달라지고, 응답 데이터는 운영팀이 바로 확인할 수 있어야 했습니다.

그래서 아임웹 기본 폼에만 기대지 않고 Tally의 조건형 로직을 연결했습니다. 신청 결과는 Google Sheets로 모으고, Apps Script로 신규 신청 알림과 확인 페이지를 구성해 운영 사무국이 수기 확인에 쓰는 시간을 줄이도록 설계했습니다.

<section class="screen-pair" aria-label="포에리아 인천 펫페어 운영 화면">
  <figure>
    <img src="/case/paweria-incheon-petfair/apply.png" alt="포에리아 인천 펫페어 참가신청 안내 화면" loading="lazy" />
    <figcaption><strong>Partner Application</strong><span>참가기업이 신청 전 확인해야 할 조건과 절차를 먼저 정리했습니다.</span></figcaption>
  </figure>
  <figure>
    <img src="/case/paweria-incheon-petfair/brand.png" alt="포에리아 인천 펫페어 브랜드 라인업 화면" loading="lazy" />
    <figcaption><strong>Brand Lineup</strong><span>참가 브랜드를 카테고리별로 탐색할 수 있는 전시 정보 화면입니다.</span></figcaption>
  </figure>
</section>

<section class="capture-slot-grid" aria-label="포에리아 인천 펫페어 추가 캡처 예정 화면">
  <article class="capture-slot">
    <span>Capture Slot</span>
    <strong>Tally 조건형 신청 폼</strong>
    <p>부스 타입과 부대시설 선택에 따라 금액과 안내가 달라지는 조건형 신청 화면이 있으면 운영 설계가 더 잘 드러납니다.</p>
    <small>권장 파일명: /case/paweria-incheon-petfair/tally-form.png</small>
  </article>
  <article class="capture-slot">
    <span>Capture Slot</span>
    <strong>운영 시트/알림 흐름</strong>
    <p>Google Sheets 또는 Apps Script 알림/확인 구조를 보여줄 수 있는 비식별 캡처가 있으면 자동화 과제의 근거가 됩니다.</p>
    <small>권장 파일명: /case/paweria-incheon-petfair/operation-flow.png</small>
  </article>
</section>

## 작업 기준

박람회 웹사이트는 시각적으로 풍성해야 하지만, 운영 정보가 흩어지면 사용자는 바로 이탈합니다. 그래서 화려한 이미지보다 먼저 일정, 장소, 참여 방식, 공지 흐름이 명확해야 합니다.

이 케이스는 풀다가 행사·박람회처럼 기간성과 운영성이 강한 프로젝트도 “정보 구조” 관점에서 정리한다는 근거로 남깁니다.
