"use strict";

// Descriptions reflect the reviewed implementation and the developer's stated role.
// Reflection items describe future work, not completed improvements.
const slides = [
  {
    id: "cover", title: "사용자의 입력을\n서비스의 결과로 연결합니다.", variant: "cover",
    subtitle: "Java 백엔드 개발자 송다원입니다. 웹 서비스의 데이터 처리와 외부 API 연동을 담당하고, 필요한 화면까지 구현했습니다.",
    content: {
      type: "cover",
      introduction: "에듀인테크 개발팀 · 2023.08 – 2025.09",
      description: "심리검사의 응답 유지와 데이터 변환부터 결제 승인, 회원 로그인, 결과 조회와 리포트 출력까지. 실제 담당한 기능을 구현 흐름 중심으로 소개합니다.",
      tags: ["Java", "Spring MVC", "MyBatis", "MySQL", "JSP · jQuery"],
      links: [{ id: "psychology", text: "대표 사례 읽기" }, { id: "experience", text: "담당 업무 보기" }]
    }
  },
  {
    id: "experience", title: "주요 기능 개발과\n운영 대응을 맡았습니다.",
    subtitle: "에듀인테크 개발팀 사원 | 교육·진로 관련 웹 서비스 개발 및 유지보수",
    content: {
      type: "overview",
      facts: [
        { title: "업무 범위", text: "백엔드 중심의 기능 개발. JSP·JavaScript·jQuery 화면 구현 병행." },
        { title: "담당 환경", text: "선임 퇴사 이후 주요 기능 개발과 운영 대응. 기존 코드와 DB 구조를 파악해 요구사항 반영." },
        { title: "문제 해결 방식", text: "기존 구현과 공식 문서를 확인하고, 불명확한 연동 규격은 벤더 문의로 확인." }
      ],
      rows: [
        ["심리검사", "응답 상태 관리, 검사별 데이터 변환, 외부 API와 결과 이력 연결"],
        ["결제·로그인", "KG이니시스 승인 응답 처리, 카카오·네이버 인증과 회원 분기"],
        ["운영·출력", "공지·문의 CRUD, 화면 페이지네이션, 포트폴리오 리포트 연동"]
      ]
    }
  },
  {
    id: "skills", title: "기술을 사용한 맥락", subtitle: "실무에서 사용한 기술과 교육에서 학습한 기술을 구분했습니다.",
    content: {
      type: "skills",
      groups: [
        { title: "서버 · 실무", items: ["Java · Spring MVC", "전자정부프레임워크", "RestTemplate을 통한 외부 API 호출"] },
        { title: "데이터 · 실무", items: ["MyBatis Mapper", "MySQL 데이터 조회·저장", "회원·검사 결과·결제 이력 연결"] },
        { title: "화면 · 실무", items: ["JSP · HTML/CSS", "JavaScript · jQuery · AJAX", "localStorage 응답 상태 관리"] },
        { title: "교육 · 학습", items: ["Java·Spring 웹 개발 교육", "OracleDB · Tomcat", "2022.08 – 2023.02"] }
      ],
      note: "실무 서비스는 Spring MVC·MyBatis·MySQL 기반이며, OracleDB와 Tomcat은 웹 개발 교육 과정에서 학습했습니다."
    }
  },
  {
    id: "psychology", title: "페이지가 바뀌어도\n선택한 응답을 유지하기", subtitle: "심리검사 대표 사례 · JavaScript / jQuery / localStorage",
    content: {
      type: "case", task: "문항이 많은 검사를 여러 페이지로 나누면서, 사용자가 이전 페이지로 돌아가 답변을 확인·수정할 수 있어야 했습니다.",
      sections: [
        { title: "문항 표시", text: "문항 데이터를 10개씩 나누고 현재 페이지의 시작·끝 인덱스로 표시 범위를 계산했습니다. 이전·다음 이동 시 해당 구간을 다시 렌더링합니다." },
        { title: "응답 저장·복원", text: "동적으로 생성한 문항의 change 이벤트를 상위 요소에서 처리했습니다. 문항 번호별로 선택값을 localStorage에 저장하고, 단일 선택 문항 표시 시 저장값과 선택지를 비교해 체크 상태를 복원했습니다." }
      ],
      flow: ["문항 10개 표시", "선택값 저장", "다른 페이지 이동", "저장 응답 복원"],
      outcome: "현재 화면에 보이는 입력 요소와 응답 데이터를 분리해, 페이지 이동 중에도 단일 선택 응답을 이어갈 수 있도록 구현했습니다.",
      evidence: ["psychologicalTestOpenwindow.jsp · displayQuestions / change 이벤트"]
    }
  },
  {
    id: "answer-format", title: "검사마다 다른 응답을\nAPI 규격에 맞게 변환하기", subtitle: "심리검사 대표 사례 · JSON / Spring MVC / RestTemplate / MyBatis",
    content: {
      type: "case", task: "검사 종류에 따라 문항 번호와 응답 문자열의 형식이 달랐습니다. 화면에서 선택한 값을 모아 각 검사 API가 받는 구조로 변환해야 했습니다.",
      sections: [
        { title: "응답 형식 변환", text: "저장한 문항별 응답을 수집하고 검사 식별값에 따라 접두어, 응답값의 앞자리 0, 구분자와 복수 응답 형식을 변환하는 formatAnswers 함수를 구현했습니다." },
        { title: "서버 연동·결과 저장", text: "AJAX로 JSON을 컨트롤러에 전송하고 RestTemplate으로 커리어넷 검사 API에 전달했습니다. 반환된 결과 URL을 회원·검사명·응시일과 함께 저장해 결과 조회 화면으로 연결했습니다." }
      ],
      flow: ["응답 수집", "검사별 형식 변환", "Java 서버", "커리어넷 API", "결과 URL 저장"],
      outcome: "사용자 응답부터 검사 결과 조회까지 흐름을 연결했습니다. 이 경로의 채점과 결과 제공은 커리어넷 API가 수행합니다.",
      evidence: ["psychologicalTestOpenwindow.jsp · formatAnswers / submitForm", "JinroCommonController.java · getPsychologicalTestResult", "user.xml · insertPsytestResult"]
    }
  },
  {
    id: "scoring", title: "외부 검사와\n자체 점수 집계의 구분", subtitle: "검사 기능 · JavaScript / Spring MVC / MyBatis",
    content: {
      type: "comparison",
      columns: [
        { title: "커리어넷 연동 검사", items: ["문항별 응답을 검사 API 규격으로 변환", "Java 서버에서 외부 API 호출", "API가 제공한 결과 URL을 저장·조회"] },
        { title: "별도 점수 집계 검사", items: ["JavaScript에서 응답값을 영역별로 합산", "미응답 안내 후 영역 점수와 총점 전송", "서버에서 결과를 저장하고 조회 화면 연결"] }
      ],
      note: "두 검사 흐름은 계산 주체와 저장 데이터가 다릅니다. 별도 검사의 최종 점수를 서버에서 재계산하는 방식은 이후 보완할 과제로 보고 있습니다.",
      evidence: ["entrtest.js · 영역별 점수 집계", "psychologicalTestOpenwindow2.jsp · handleSubmit", "JinroCommonController.java · getPsychologicalTestResult2"]
    }
  },
  {
    id: "payment", title: "결제 요청에서\n승인 결과와 이력 저장까지", subtitle: "KG이니시스 결제 · Java / Spring MVC / JSP / MyBatis",
    content: {
      type: "case", task: "상품 결제 요청을 PG 인증·승인 과정과 연결하고, 승인 응답에 따라 서비스의 결제 이력을 처리해야 했습니다.",
      sections: [
        { title: "요청·승인 연동", text: "상품 가격과 주문번호를 바탕으로 요청 파라미터와 서명을 구성했습니다. 인증 응답 코드와 승인 요청 URL을 확인한 뒤 승인 API를 호출했습니다." },
        { title: "응답·예외 처리", text: "결제 성공 응답을 조건으로 회원·상품·거래 정보를 결제 이력에 저장했습니다. 승인 응답 처리 중 예외가 발생하는 구간에는 망취소 API 호출을 연결했습니다." }
      ],
      flow: ["주문·요청 구성", "인증 응답 확인", "승인 API 호출", "결과 처리", "성공 건 저장"],
      outcome: "PG 인증·승인 응답과 내부 결제 이력을 연결하고, 승인 응답 처리 구간의 예외에 대응하는 흐름을 구현했습니다.",
      evidence: ["StudyCommonController.java · /pay/view.ui · /pay/response.ui", "PaymentServiceImpl.java · insertPayHistory"]
    }
  },
  {
    id: "oauth", title: "소셜 인증을\n기존 회원 흐름에 연결하기", subtitle: "카카오·네이버 로그인 · OAuth / HTTP Session / MyBatis",
    content: {
      type: "case", task: "소셜 제공자에서 받은 사용자 정보를 서비스의 기존 회원 조회와 연결하고, 가입 여부에 맞는 화면으로 이동시켜야 했습니다.",
      sections: [
        { title: "제공자 인증 연동", text: "카카오·네이버 인증 과정의 토큰 발급과 사용자 정보 조회를 구현했습니다. 제공자 응답을 서비스 회원 처리에 사용할 정보로 구성했습니다." },
        { title: "로그인·가입 분기", text: "이메일 정보를 통한 기존 회원 조회 결과에 따라 HTTP Session에 로그인 정보를 구성하거나 신규 가입 화면으로 이동했습니다. 가입에 필요한 정보도 다음 화면으로 전달했습니다." }
      ],
      flow: ["제공자 인증", "토큰·사용자 조회", "기존 회원 조회", "로그인 또는 가입"],
      outcome: "제공자의 인증 결과를 내부 회원 처리에 연결해, 기존 회원의 서비스 진입과 신규 회원의 가입 흐름을 구성했습니다.",
      evidence: ["SocialController.java · kakaoLogin / naverLogin", "SocialServiceImpl.java · loginProc"]
    }
  },
  {
    id: "report", title: "사용자 데이터를\n출력 가능한 리포트로", subtitle: "포트폴리오 출력 · CLIP report 4 / CRF / JSP",
    content: {
      type: "case", task: "서비스의 포트폴리오 정보를 사용자별로 구분해 리포트 템플릿과 웹 뷰어에 연결해야 했습니다.",
      sections: [
        { title: "템플릿·파라미터 연결", text: "CRF 템플릿을 지정하고 사용자 식별 파라미터를 전달했습니다. ReportUtil.createReport로 생성한 리포트 키를 웹 뷰어에 연결했습니다." },
        { title: "문서·벤더 확인", text: "기존 코드와 공식 가이드를 확인하고, 문서만으로 이해하기 어려운 연동 규격은 벤더 문의로 확인해 구현에 반영했습니다." }
      ],
      flow: ["사용자 파라미터", "CRF 템플릿", "리포트 키 생성", "웹 뷰어·출력"],
      outcome: "사용자별 포트폴리오 출력 흐름을 연동했습니다. 커리어넷 검사 결과의 외부 URL 조회와 별개의 출력 기능입니다.",
      evidence: ["reportPortfolio.jsp · OOFDocument / addField", "reportPortfolio.jsp · ReportUtil.createReport / createImportJSPReport"]
    }
  },
  {
    id: "board", title: "공지·문의의\n등록부터 목록 조회까지", subtitle: "게시판 기능 · Controller / Service / MyBatis / JSP",
    content: {
      type: "case", task: "운영 공지와 사용자 문의를 등록·조회하고 수정·삭제할 수 있는 게시판 흐름을 구현했습니다.",
      sections: [
        { title: "데이터 처리", text: "Controller에서 요청을 받아 Service와 MyBatis Mapper로 게시글을 조회·저장했습니다. 목록·상세·등록·수정·삭제 화면을 연결했습니다." },
        { title: "목록 표시", text: "조회한 게시글을 JavaScript로 20개씩 나누어 표시했습니다. 현재 사례는 전체 조회 후 화면에서 나누는 방식이며, DB 쿼리 단계의 페이지네이션과 구분합니다." }
      ],
      flow: ["작성·수정 화면", "Controller", "Service · Mapper", "DB", "목록·상세"],
      outcome: "공지·문의의 작성·수정·삭제와 목록·상세 조회를 서비스 화면에서 처리할 수 있도록 연결했습니다.",
      evidence: ["StudyCommonController.java · noticeBoard / qnaBoard", "board.xml · getNoticeBoardList / getQnaBoardList", "noticeBoardSelectView.jsp · showPage"]
    }
  },
  {
    id: "reflection", title: "다시 구현한다면\n이 부분부터 보완하겠습니다.", subtitle: "회고 · 아래 항목은 완료한 성과가 아닌 향후 개선 방향입니다.",
    content: {
      type: "reflection",
      rows: [
        { area: "응답 상태", current: "문항 번호를 키로 저장, 단일 선택값 비교로 복원", next: "검사·응시 단위 저장 범위 분리, 복수 선택을 배열로 일관되게 관리" },
        { area: "응답·점수 검증", current: "현재 화면 입력 확인, 별도 검사는 브라우저에서 점수 집계", next: "전체 문항과 응답 대조, 서버의 응답 검증과 최종 점수 계산" },
        { area: "결제 정합성", current: "성공 건 저장과 특정 예외 구간의 망취소 호출", next: "주문·거래 식별 기준의 중복 처리 방지, 승인·저장 실패 상태 추적" },
        { area: "조회·유지보수", current: "화면 페이지네이션, 컨트롤러에 함께 있는 API 처리", next: "규모에 맞는 서버 조회, 검사별 변환·외부 통신·저장 책임 분리" }
      ]
    }
  },
  {
    id: "workflow", title: "도구를 활용하되\n구현의 판단은 직접", subtitle: "공식 문서·기존 코드·벤더 소통·AI 보조를 함께 활용했습니다.",
    content: {
      type: "overview",
      facts: [
        { title: "구현 범위 정리", text: "요구사항과 기존 코드 흐름을 확인하고 입력·출력과 외부 연동 규격을 정리했습니다." },
        { title: "AI 활용", text: "구현 초안과 오류 분석의 보조 수단으로 사용하고, 기존 코드와 요구사항에 맞게 수정했습니다." },
        { title: "불명확한 규격 확인", text: "문서와 레퍼런스를 먼저 확인하고, 해결하기 어려운 연동 사항은 벤더에 문의했습니다." }
      ],
      rows: [
        ["설명할 수 있는 구현", "응답 저장·복원, 검사별 변환, 승인 응답 처리처럼 실제 처리 흐름을 중심으로 기술"],
        ["학습과 회고", "현재 구현의 한계를 돌아보고 다음에 적용할 검증·구조 개선 방향을 구분해 기록"]
      ]
    }
  },
  {
    id: "closing", title: "함께 만들고 싶은\n다음 서비스", variant: "closing",
    subtitle: "기존 서비스를 이해하고, 필요한 기능을 연결하며, 운영에서 확인할 수 있는 결과를 만드는 개발자가 되겠습니다.",
    content: {
      type: "closing",
      paragraphs: ["약 2년의 웹 서비스 개발 경험에서 쌓은 Java·Spring MVC 기반 구현 역량과 외부 시스템 연동 경험을 바탕으로 기여하고 싶습니다.", "앞으로는 입력 검증과 데이터 정합성, 실패 상황의 복구까지 더 체계적으로 설계하고 검증하는 방향으로 성장하겠습니다."],
      links: [{ id: "experience", text: "담당 경험 다시 보기" }, { id: "psychology", text: "심리검사 사례 보기" }]
    }
  }
];

const slideEl = document.querySelector("#slide");
const prevButton = document.querySelector("#prevSlide");
const nextButton = document.querySelector("#nextSlide");
const currentSlideEl = document.querySelector("#currentSlide");
const totalSlidesEl = document.querySelector("#totalSlides");
const dotsEl = document.querySelector("#slideDots");
const sectionSelect = document.querySelector("#sectionSelect");
const pad = (number) => String(number).padStart(2, "0");
const escapeHTML = (value) => String(value).replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);
const paragraphs = (items) => items.map((item) => `<p>${escapeHTML(item)}</p>`).join("");
const links = (items) => `<div class="case-links">${items.map((item) => `<a href="#${escapeHTML(item.id)}">${escapeHTML(item.text)}</a>`).join("")}</div>`;
const flow = (steps) => `<ol class="case-flow" aria-label="처리 순서">${steps.map((step) => `<li>${escapeHTML(step)}</li>`).join("")}</ol>`;
const evidence = (items) => items ? `<details class="case-evidence"><summary>구현 근거 파일</summary><ul>${items.map((item) => `<li>${escapeHTML(item)}</li>`).join("")}</ul></details>` : "";

function renderContent({ content }) {
  switch (content.type) {
    case "cover":
      return `<div class="cover-content"><p class="experience-line">${escapeHTML(content.introduction)}</p><p class="cover-description">${escapeHTML(content.description)}</p><ul class="skill-tags" aria-label="주요 기술">${content.tags.map((tag) => `<li>${escapeHTML(tag)}</li>`).join("")}</ul>${links(content.links)}</div>`;
    case "overview":
      return `<div class="overview-facts">${content.facts.map((fact) => `<section><h2>${escapeHTML(fact.title)}</h2><p>${escapeHTML(fact.text)}</p></section>`).join("")}</div><dl class="experience-list">${content.rows.map(([title, text]) => `<div><dt>${escapeHTML(title)}</dt><dd>${escapeHTML(text)}</dd></div>`).join("")}</dl>`;
    case "skills":
      return `<div class="skills-grid">${content.groups.map((group) => `<section><h2>${escapeHTML(group.title)}</h2><ul>${group.items.map((item) => `<li>${escapeHTML(item)}</li>`).join("")}</ul></section>`).join("")}</div><p class="case-note">${escapeHTML(content.note)}</p>`;
    case "case":
      return `<p class="case-task">${escapeHTML(content.task)}</p><div class="case-sections">${content.sections.map((section) => `<section><h2>${escapeHTML(section.title)}</h2><p>${escapeHTML(section.text)}</p></section>`).join("")}</div>${flow(content.flow)}<p class="case-outcome">${escapeHTML(content.outcome)}</p>${evidence(content.evidence)}`;
    case "comparison":
      return `<div class="comparison-grid">${content.columns.map((column) => `<section><h2>${escapeHTML(column.title)}</h2><ol>${column.items.map((item) => `<li>${escapeHTML(item)}</li>`).join("")}</ol></section>`).join("")}</div><p class="case-note">${escapeHTML(content.note)}</p>${evidence(content.evidence)}`;
    case "reflection":
      return `<div class="reflection-table"><table><caption class="sr-only">현재 구현과 향후 개선 방향</caption><thead><tr><th scope="col">영역</th><th scope="col">현재 구현</th><th scope="col">다음 개선 방향</th></tr></thead><tbody>${content.rows.map((row) => `<tr><th scope="row">${escapeHTML(row.area)}</th><td data-label="현재 구현">${escapeHTML(row.current)}</td><td data-label="다음 개선 방향">${escapeHTML(row.next)}</td></tr>`).join("")}</tbody></table></div>`;
    case "closing":
      return `<div class="closing-content">${paragraphs(content.paragraphs)}${links(content.links)}</div>`;
    default:
      return "";
  }
}

function slideMarkup(slide, index, print = false) {
  const tag = print ? "h2" : "h1";
  return `<header class="portfolio-slide-header"><${tag}>${escapeHTML(slide.title).replace(/\n/g, "<br>")}</${tag}><p>${escapeHTML(slide.subtitle)}</p></header><div class="portfolio-slide-body">${renderContent(slide)}</div><footer class="portfolio-slide-footer"><span>송다원 · Java Backend</span><span>${pad(index + 1)} / ${pad(slides.length)}</span></footer>`;
}

function getHashIndex() {
  return slides.findIndex((slide) => `#${slide.id}` === window.location.hash);
}

let currentIndex = Math.max(0, getHashIndex());

function renderSlide({ focus = false } = {}) {
  const slide = slides[currentIndex];
  slideEl.className = `portfolio-slide-card portfolio-slide-${slide.variant || "default"}`;
  slideEl.innerHTML = slideMarkup(slide, currentIndex);
  currentSlideEl.textContent = pad(currentIndex + 1);
  totalSlidesEl.textContent = pad(slides.length);
  prevButton.disabled = currentIndex === 0;
  nextButton.disabled = currentIndex === slides.length - 1;
  sectionSelect.value = slide.id;
  document.title = `${slide.title.replace(/\n/g, " ")} | 송다원`;
  dotsEl.querySelectorAll("button").forEach((dot, index) => {
    dot.classList.toggle("is-active", index === currentIndex);
    if (index === currentIndex) dot.setAttribute("aria-current", "step");
    else dot.removeAttribute("aria-current");
  });
  if (focus) {
    slideEl.focus({ preventScroll: true });
    window.scrollTo({ top: 0, behavior: "instant" });
  }
}

function navigate(index, focus = true) {
  if (index < 0 || index >= slides.length || index === currentIndex) return;
  currentIndex = index;
  // replaceState preserves a single browser history entry while supporting shareable sections.
  window.history.replaceState(null, "", `#${slides[index].id}`);
  renderSlide({ focus });
}

sectionSelect.innerHTML = slides.map((slide, index) => `<option value="${slide.id}">${pad(index + 1)} · ${escapeHTML(slide.title.replace(/\n/g, " "))}</option>`).join("");
dotsEl.innerHTML = slides.map((slide, index) => `<button class="portfolio-slide-dot" type="button" aria-label="${index + 1}. ${escapeHTML(slide.title.replace(/\n/g, " "))}" data-index="${index}"><span aria-hidden="true"></span></button>`).join("");
prevButton.addEventListener("click", () => navigate(currentIndex - 1));
nextButton.addEventListener("click", () => navigate(currentIndex + 1));
sectionSelect.addEventListener("change", () => navigate(slides.findIndex((slide) => slide.id === sectionSelect.value), false));
dotsEl.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-index]");
  if (button) navigate(Number(button.dataset.index));
});
document.addEventListener("click", (event) => {
  const link = event.target.closest('a[href^="#"]');
  if (!link) return;
  const index = slides.findIndex((slide) => `#${slide.id}` === link.getAttribute("href"));
  if (index >= 0) { event.preventDefault(); navigate(index); }
});
window.addEventListener("hashchange", () => {
  const index = getHashIndex();
  if (index >= 0 && index !== currentIndex) { currentIndex = index; renderSlide({ focus: true }); }
});
window.addEventListener("keydown", (event) => {
  if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey || event.defaultPrevented) return;
  if (event.target.closest("input, textarea, select, button, a, summary, [contenteditable]")) return;
  if (window.getSelection()?.toString()) return;
  if (event.key === "ArrowRight") { event.preventDefault(); navigate(currentIndex + 1); }
  if (event.key === "ArrowLeft") { event.preventDefault(); navigate(currentIndex - 1); }
});

function preparePrint() {
  document.querySelector("#printContent").innerHTML = slides.map((slide, index) => `<article class="print-slide">${slideMarkup(slide, index, true)}</article>`).join("");
}
window.addEventListener("beforeprint", preparePrint);
document.querySelector("#printPortfolio").addEventListener("click", () => { preparePrint(); window.print(); });
renderSlide();
