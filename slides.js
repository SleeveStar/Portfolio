const slides = [
  {
    chapter: "Cover",
    title: "Java Backend Developer",
    name: "송다원",
    subtitle: "안녕하세요. 백엔드와 서버 개발을 중심으로 웹 서비스 기능을 구현하는 개발자 송다원입니다.",
    label: "Java Backend Portfolio",
    variant: "cover",
    content: {
      type: "cover",
      keywords: ["Java", "Spring Framework", "MyBatis", "Oracle", "MySQL", "Git"],
      metrics: [
        { value: "Java", label: "Backend" },
        { value: "Spring", label: "Framework" },
        { value: "SQL", label: "Oracle / MySQL" },
        { value: "Git", label: "Version Control" }
      ]
    }
  },
  {
    chapter: "Profile Dashboard",
    title: "Backend Capability Snapshot",
    subtitle: "운영 기능 구현, 데이터 처리, 외부 연동 경험을 백엔드 업무 흐름 기준으로 정리했습니다.",
    label: "Capability",
    content: {
      type: "dashboard",
      metrics: [
        { value: "Java", label: "Primary Language" },
        { value: "Spring", label: "Backend Framework" },
        { value: "MyBatis", label: "Persistence Layer" },
        { value: "Oracle / MySQL", label: "Database" }
      ],
      cards: [
        {
          title: "Service Logic",
          text: "요청 검증, 서비스 로직, 응답 흐름을 계층별로 분리해 구현합니다.",
          tags: ["Controller", "Service", "Validation"]
        },
        {
          title: "Operation Data",
          text: "CRUD, 검색, 페이징, 결과 산출처럼 운영자가 반복적으로 사용하는 데이터 흐름을 만듭니다.",
          tags: ["CRUD", "Search", "Pagination"]
        },
        {
          title: "External Workflow",
          text: "결제, OAuth, 리포트 출력 등 외부 시스템과 내부 데이터를 연결합니다.",
          tags: ["Payment", "OAuth", "Report"]
        }
      ]
    }
  },
  {
    chapter: "Core Skill Map",
    title: "Core Skill Map",
    subtitle: "백엔드 중심 역량을 데이터, 연동, 출력 기능까지 확장합니다.",
    label: "Skill Map",
    content: {
      type: "skillMap",
      areas: [
        { title: "Backend / Server", items: ["Java", "Spring Framework", "백엔드/서버개발"] },
        { title: "View / Frontend", items: ["JSP", "HTML5", "CSS3", "JavaScript", "Ajax"] },
        { title: "Database / Query", items: ["Oracle", "MySQL", "MyBatis"] },
        { title: "Collaboration / Tools", items: ["Git", "CRUD 구현", "검색/페이징"] }
      ]
    }
  },
  {
    chapter: "REST API Development",
    title: "REST API Development",
    subtitle: "운영자가 사용하는 요청 흐름을 기준으로 API 계층과 예외 흐름을 정리했습니다.",
    label: "PAAR / API",
    content: {
      type: "paar",
      items: [
        { key: "P", title: "Problem", text: "요청 처리 로직이 화면/기능별로 흩어지면 검증, 예외 처리, 데이터 저장 흐름을 추적하기 어렵습니다." },
        { key: "A", title: "Analyze", text: "컨트롤러에 로직을 집중하는 방식과 계층을 분리하는 방식을 비교했고, 유지보수와 테스트 흐름을 고려해 Controller-Service-Mapper 구조를 선택했습니다." },
        { key: "A", title: "Action", text: "입력값 검증, 서비스 로직, MyBatis Mapper 호출, 응답 반환 흐름을 분리하고 예외 상황을 함께 확인했습니다." },
        { key: "R", title: "Result", text: "요청부터 DB 처리와 응답까지 흐름을 단계별로 설명할 수 있게 되었고, 기능 수정 시 영향 범위를 더 빠르게 확인할 수 있었습니다." }
      ],
      flow: ["Client", "Controller", "Service", "Mapper", "DB", "Response"]
    }
  },
  {
    chapter: "Database & MyBatis",
    title: "Database & MyBatis",
    subtitle: "데이터 구조, 조회 조건, 페이징 요구사항을 기준으로 쿼리 흐름을 설계했습니다.",
    label: "PAAR / DB",
    content: {
      type: "paar",
      items: [
        { key: "P", title: "Problem", text: "관리 기능은 데이터가 늘어날수록 목록 조회, 조건 검색, 페이지 이동이 느려지거나 복잡해질 수 있습니다." },
        { key: "A", title: "Analyze", text: "단순 전체 조회와 조건 기반 쿼리 분리를 비교했고, 운영자가 필요한 데이터만 찾을 수 있도록 검색 조건과 페이징을 쿼리 단계에서 처리하는 방식을 선택했습니다." },
        { key: "A", title: "Action", text: "테이블 구조를 정리하고 MyBatis Mapper 기반 CRUD, 조건 검색, 페이징 쿼리와 입력값 검증 흐름을 구현했습니다." },
        { key: "R", title: "Result", text: "목록, 검색, 상세, 수정 흐름을 일관된 데이터 처리 방식으로 연결했고, 화면에서 케이스별 조회 결과를 직접 확인하며 검증했습니다." }
      ],
      evidence: ["Data Modeling", "CRUD", "Search", "Pagination"]
    }
  },
  {
    chapter: "External API Integration",
    title: "External API Integration",
    subtitle: "가이드 문서와 반복 테스트를 기반으로 결제·OAuth 연동 흐름을 내부 데이터와 연결했습니다.",
    label: "PAAR / Integration",
    content: {
      type: "paar",
      items: [
        { key: "P", title: "Problem", text: "결제와 OAuth는 제공자별 요청값, 콜백 파라미터, 토큰 처리 방식이 달라 문서 흐름을 정확히 따라가지 않으면 연동이 쉽게 끊겼습니다." },
        { key: "A", title: "Analyze", text: "공식 가이드의 샘플 흐름을 먼저 기준으로 잡고, 프론트에서 처리할 값과 서버에서 검증·저장할 값을 나눠 보며 어떤 지점에서 실패하는지 반복 테스트했습니다." },
        { key: "A", title: "Action", text: "KG이니시스 결제 요청·승인 결과 처리와 카카오/네이버 OAuth 인가 코드·토큰·사용자 정보 매핑을 구현하고, 케이스별 로그와 DB 저장 결과를 확인했습니다." },
        { key: "R", title: "Result", text: "가이드 기반으로 요청-콜백-검증-저장 흐름을 정리했고, 정상/실패 케이스를 여러 번 테스트해 화면 전환과 저장 결과가 일치하는지 검증했습니다." }
      ],
      flow: ["Guide Check", "Request", "Callback", "Token / Approval", "DB Save", "Test"]
    }
  },
  {
    chapter: "ClipSoft Report Output",
    title: "ClipSoft Report Output",
    subtitle: "ClipSoft 가이드와 유선 문의, AI 도움을 함께 활용해 결과표 출력 흐름을 구현했습니다.",
    label: "PAAR / Report",
    content: {
      type: "paar",
      items: [
        { key: "P", title: "Problem", text: "검사 결과 데이터를 화면에 표시하는 것과 리포트 템플릿에 정확히 매핑해 출력하는 것은 처리 방식이 달라, 출력값 누락과 형식 불일치가 발생할 수 있었습니다." },
        { key: "A", title: "Analyze", text: "ClipSoft 가이드를 중심으로 데이터셋 구성 방식과 템플릿 매핑 방식을 확인했고, 이해가 어려운 부분은 유선 컨택과 AI 도움으로 원인을 좁혔습니다." },
        { key: "A", title: "Action", text: "DB 결과와 채점 데이터를 리포트 양식에 맞게 가공하고, 미리보기·인쇄·내보내기 과정에서 실제 출력값이 템플릿 위치와 맞는지 반복 확인했습니다." },
        { key: "R", title: "Result", text: "화면 결과와 출력 결과를 대조하며 누락 데이터를 줄였고, 결과표를 운영자가 바로 확인·인쇄할 수 있는 흐름으로 연결했습니다." }
      ],
      flow: ["Guide Study", "Data Mapping", "Phone Check", "AI Support", "Preview", "Print / Export"]
    }
  },
  {
    chapter: "Psychological Test Module",
    title: "Psychological Test Module",
    subtitle: "뷰에서 체크한 응답을 종합해 묶어 보내고, 채점·결과 산출까지 연결하는 과정에서 문제를 해결했습니다.",
    label: "PAAR / Test",
    content: {
      type: "paar",
      items: [
        { key: "P", title: "Problem", text: "심리검사 문항에서 체크한 값들을 뷰에서 모두 종합해 한 번에 묶어 보내야 했는데, 응답 구조가 복잡해 누락되거나 원하는 형태로 전달되지 않는 문제가 있었습니다." },
        { key: "A", title: "Analyze", text: "개별 문항을 따로 전송하는 방식과 화면에서 응답을 모아 구조화한 뒤 보내는 방식을 비교했고, 채점 로직까지 이어지려면 후자가 더 적합하다고 판단했습니다." },
        { key: "A", title: "Action", text: "웹 검색과 AI 도움으로 체크값 수집 방식을 정리하고, JavaScript에서 응답을 묶어 서버로 전달한 뒤 저장·채점·결과 화면·결과표 출력까지 단계별로 연결했습니다." },
        { key: "R", title: "Result", text: "응답 데이터가 의도한 구조로 전달되는지 브라우저와 서버 로그, DB 저장값을 비교해 확인했고, 검사 진행부터 결과 출력까지 이어지는 흐름을 검증했습니다." }
      ],
      flow: ["체크값 수집", "응답 묶기", "서버 전송", "저장", "채점", "결과 출력"]
    }
  },
  {
    chapter: "Board & Admin Features",
    title: "Board & Admin Features",
    subtitle: "반복적인 운영 업무를 안정적으로 처리할 수 있도록 CRUD와 검색·페이징을 구성했습니다.",
    label: "PAAR / Admin",
    content: {
      type: "paar",
      items: [
        { key: "P", title: "Problem", text: "관리자가 반복적으로 사용하는 게시판 기능은 등록, 수정, 검색, 페이징이 분리되어 있으면 운영 효율이 떨어집니다." },
        { key: "A", title: "Analyze", text: "기본 CRUD만 제공하는 방식과 운영 조건을 함께 반영하는 방식을 비교했고, 실제 관리 화면에서는 검색과 페이징이 핵심이라고 판단했습니다." },
        { key: "A", title: "Action", text: "등록, 조회, 수정, 삭제 흐름에 조건 검색, 페이지 이동, 요구사항별 필드와 상태 처리를 함께 구현했습니다." },
        { key: "R", title: "Result", text: "운영자가 필요한 데이터를 빠르게 찾고 수정할 수 있는 관리 흐름을 만들었고, 케이스별 CRUD와 검색 결과를 화면에서 검증했습니다." }
      ],
      evidence: ["등록", "조회", "수정", "삭제", "검색", "페이징"]
    }
  },
  {
    chapter: "Strength & Closing",
    title: "Strength & Closing",
    subtitle: "구현 결과가 실제 운영 흐름으로 이어지는 백엔드 개발을 지향합니다.",
    label: "Closing",
    content: {
      type: "closing",
      cards: [
        "End-to-End 구현 경험",
        "운영 기능 중심 개발",
        "외부 시스템 연동 경험",
        "데이터 기반 기능 구현"
      ],
      message: ["Java와 Spring 기반의 서비스 개발 경험을 바탕으로 안정적인 백엔드 기능 구현에 기여하겠습니다.", "운영 요구사항을 이해하고 데이터와 API 흐름을 함께 개선하는 개발자로 합류하고 싶습니다."]
    }
  },
  {
    chapter: "AI Tooling",
    title: "AI-Assisted Development",
    subtitle: "가이드 문서, 웹 검색, 유선 문의로 확인한 내용을 AI와 함께 정리하며 문제를 해결했습니다.",
    label: "AI Workflow",
    content: {
      type: "aiTools",
      cards: [
        {
          title: "Guide Interpretation",
          text: "결제, OAuth, ClipSoft처럼 가이드가 중요한 기능은 문서 흐름을 먼저 읽고 필요한 요청값과 응답값을 정리했습니다.",
          tags: ["Guide", "API Docs", "Parameter"]
        },
        {
          title: "Issue Narrowing",
          text: "막히는 부분은 웹 검색과 AI를 활용해 가능한 원인을 좁히고, 로그와 테스트 케이스로 실제 원인을 확인했습니다.",
          tags: ["Search", "AI", "Debugging"]
        },
        {
          title: "External Check",
          text: "ClipSoft처럼 문서만으로 해결이 어려운 부분은 유선 문의로 확인한 뒤 구현 방향에 반영했습니다.",
          tags: ["Contact", "Validation", "Apply"]
        }
      ],
      workflow: ["가이드 확인", "선택지 비교", "구현", "오류 확인", "문의/검색", "반복 테스트"]
    }
  },
  {
    chapter: "Thank You",
    title: "Thank You.",
    subtitle: "Java Backend Developer 송다원",
    label: "Thank You",
    variant: "thanks",
    content: {
      type: "thanks",
      message: ["운영 가능한 기능을 안정적으로 구현하고,", "데이터와 API 흐름을 개선하는 백엔드 개발자로 성장하겠습니다."],
      keywords: ["Java", "Spring Framework", "MyBatis", "Oracle", "MySQL", "Git"]
    }
  }
];

let currentIndex = 0;
let isWheelLocked = false;

const slideEl = document.querySelector("#slide");
const prevButton = document.querySelector("#prevSlide");
const nextButton = document.querySelector("#nextSlide");
const currentSlideEl = document.querySelector("#currentSlide");
const totalSlidesEl = document.querySelector("#totalSlides");
const dotsEl = document.querySelector("#slideDots");

const pad = (number) => String(number).padStart(2, "0");

function renderCards(cards) {
  return `<div class="portfolio-slide-card-grid">
    ${cards
      .map(
        (card) => `<section class="portfolio-slide-info-card portfolio-slide-accent-${card.accent || "blue"}">
          <h3>${card.title}</h3>
          <p>${card.text}</p>
          <div class="portfolio-slide-tags">${(card.tags || []).map((tag) => `<span>${tag}</span>`).join("")}</div>
        </section>`
      )
      .join("")}
  </div>`;
}

function renderFlow(steps, highlight) {
  return `<div class="portfolio-slide-flow" style="--flow-count: ${steps.length}">
    ${steps.map((step, index) => `<div class="portfolio-slide-flow-step"><span class="portfolio-slide-flow-icon" aria-hidden="true" data-step="${pad(index + 1)}"></span><strong>${step}</strong></div>`).join("")}
  </div>
  ${highlight ? `<p class="portfolio-slide-highlight">${highlight}</p>` : ""}`;
}

function renderDashboard(content) {
  return `<div class="portfolio-slide-dashboard">
    <div class="portfolio-slide-dashboard-metrics">
      ${content.metrics.map((metric) => `<div class="portfolio-slide-dashboard-metric"><strong>${metric.value}</strong><span>${metric.label}</span></div>`).join("")}
    </div>
    <div class="portfolio-slide-dashboard-cards">
      ${content.cards
        .map(
          (card) => `<section class="portfolio-slide-dashboard-card">
            <h3>${card.title}</h3>
            <p>${card.text}</p>
            <div class="portfolio-slide-tags">${card.tags.map((tag) => `<span>${tag}</span>`).join("")}</div>
          </section>`
        )
        .join("")}
    </div>
  </div>`;
}

function renderPaar(content) {
  return `<div class="portfolio-slide-paar-layout">
    <div class="portfolio-slide-paar-grid">
      ${content.items
        .map(
          (item) => `<section class="portfolio-slide-paar-card portfolio-slide-paar-${item.key.toLowerCase()}">
            <span>${item.key}</span>
            <h3>${item.title}</h3>
            <p>${item.text}</p>
          </section>`
        )
        .join("")}
    </div>
    ${
      content.flow
        ? `<div class="portfolio-slide-paar-flow" style="--flow-count: ${content.flow.length}">${content.flow.map((step, index) => `<span data-step="${pad(index + 1)}">${step}</span>`).join("")}</div>`
        : ""
    }
    ${
      content.evidence
        ? `<div class="portfolio-slide-evidence-list">${content.evidence.map((item) => `<span>${item}</span>`).join("")}</div>`
        : ""
    }
  </div>`;
}

function renderTable(headers, rows) {
  return `<div class="portfolio-slide-table-wrap">
    <table class="portfolio-slide-table">
      <thead><tr>${headers.map((header) => `<th>${header}</th>`).join("")}</tr></thead>
      <tbody>${rows.map((row) => `<tr>${row.map((cell, index) => `<td data-label="${headers[index]}">${cell}</td>`).join("")}</tr>`).join("")}</tbody>
    </table>
  </div>`;
}

function renderContent(slide) {
  const { content } = slide;

  if (content.type === "cover") {
    return `<div class="portfolio-slide-cover-layout">
      <div>
        <div class="portfolio-slide-keywords">${content.keywords.map((keyword) => `<span>${keyword}</span>`).join("")}</div>
      </div>
      <div class="portfolio-slide-metric-grid">
        ${content.metrics.map((metric) => `<div class="portfolio-slide-metric"><strong>${metric.value}</strong><span>${metric.label}</span></div>`).join("")}
      </div>
    </div>`;
  }

  if (content.type === "cards") {
    return renderCards(content.cards);
  }

  if (content.type === "dashboard") {
    return renderDashboard(content);
  }

  if (content.type === "skillMap") {
    return `<div class="portfolio-slide-skill-map">
      ${content.areas
        .map(
          (area) => `<section class="portfolio-slide-skill-area">
            <h3>${area.title}</h3>
            <ul>${area.items.map((item) => `<li>${item}</li>`).join("")}</ul>
          </section>`
        )
        .join("")}
    </div>`;
  }

  if (content.type === "flow") {
    return renderFlow(content.steps, content.highlight);
  }

  if (content.type === "paar") {
    return renderPaar(content);
  }

  if (content.type === "kpiTable") {
    return `<div class="portfolio-slide-kpi-grid">
      ${content.kpis.map((kpi) => `<div class="portfolio-slide-kpi"><strong>${kpi.value}</strong><span>${kpi.label}</span></div>`).join("")}
    </div>
    ${renderTable(content.headers, content.rows)}`;
  }

  if (content.type === "integration") {
    return `${renderCards(content.cards)}
    <div class="portfolio-slide-compact-flow">${content.steps.map((step) => `<span>${step}</span>`).join("")}</div>`;
  }

  if (content.type === "process") {
    return `<ol class="portfolio-slide-process">
      ${content.steps.map((step, index) => `<li><span>${pad(index + 1)}</span><strong>${step}</strong></li>`).join("")}
    </ol>`;
  }

  if (content.type === "featureTable") {
    return `<div class="portfolio-slide-two-column">
      <div class="portfolio-slide-feature-panel">
        <h3>운영 기능 범위</h3>
        <div class="portfolio-slide-feature-list">${content.features.map((feature) => `<span>${feature}</span>`).join("")}</div>
      </div>
      ${renderTable(content.headers, content.rows)}
    </div>`;
  }

  if (content.type === "closing") {
    return `<div class="portfolio-slide-closing-grid">
      ${content.cards.map((card) => `<div class="portfolio-slide-strength-card">${card}</div>`).join("")}
    </div>
    <p class="portfolio-slide-closing-message">${(Array.isArray(content.message) ? content.message : [content.message]).map((line) => `<span>${line}</span>`).join("")}</p>`;
  }

  if (content.type === "aiTools") {
    return `<div class="portfolio-slide-ai-layout">
      <div class="portfolio-slide-ai-card-grid">
        ${content.cards
          .map(
            (card) => `<section class="portfolio-slide-ai-card">
              <h3>${card.title}</h3>
              <p>${card.text}</p>
              <div class="portfolio-slide-tags">${card.tags.map((tag) => `<span>${tag}</span>`).join("")}</div>
            </section>`
          )
          .join("")}
      </div>
      <div class="portfolio-slide-ai-workflow">
        ${content.workflow.map((step, index) => `<span data-step="${pad(index + 1)}">${step}</span>`).join("")}
      </div>
    </div>`;
  }

  if (content.type === "thanks") {
    return `<div class="portfolio-slide-thanks-layout">
      <p class="portfolio-slide-thanks-message">${content.message.map((line) => `<span>${line}</span>`).join("")}</p>
      <div class="portfolio-slide-keywords">${content.keywords.map((keyword) => `<span>${keyword}</span>`).join("")}</div>
    </div>`;
  }

  return "";
}

function renderDots() {
  dotsEl.innerHTML = slides
    .map(
      (_, index) => `<button class="portfolio-slide-dot" type="button" aria-label="${index + 1}번 슬라이드로 이동" data-index="${index}"></button>`
    )
    .join("");

  dotsEl.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-index]");
    if (!button) return;
    currentIndex = Number(button.dataset.index);
    renderSlide();
  });
}

function renderSlide() {
  const slide = slides[currentIndex];
  slideEl.className = `portfolio-slide-card portfolio-slide-${slide.variant || "default"}`;
  slideEl.innerHTML = `
    <header class="portfolio-slide-header">
      <div class="portfolio-slide-chapter">${slide.chapter}</div>
      <div>
        ${slide.role ? `<span class="portfolio-slide-role">${slide.role}</span>` : ""}
        <h1>${slide.title}</h1>
        ${slide.name ? `<span class="portfolio-slide-name">${slide.name}</span>` : ""}
        <p>${slide.subtitle}</p>
      </div>
    </header>
    <div class="portfolio-slide-body">${renderContent(slide)}</div>
    <footer class="portfolio-slide-footer">
      <span>${pad(currentIndex + 1)} / ${pad(slides.length)}</span>
      <span>${slide.label}</span>
    </footer>
  `;

  currentSlideEl.textContent = pad(currentIndex + 1);
  totalSlidesEl.textContent = pad(slides.length);
  prevButton.disabled = currentIndex === 0;
  nextButton.disabled = currentIndex === slides.length - 1;

  document.querySelectorAll(".portfolio-slide-dot").forEach((dot, index) => {
    dot.classList.toggle("is-active", index === currentIndex);
    dot.setAttribute("aria-current", index === currentIndex ? "true" : "false");
  });
}

function goToNextSlide() {
  if (currentIndex < slides.length - 1) {
    currentIndex += 1;
    renderSlide();
  }
}

function goToPrevSlide() {
  if (currentIndex > 0) {
    currentIndex -= 1;
    renderSlide();
  }
}

prevButton.addEventListener("click", goToPrevSlide);
nextButton.addEventListener("click", goToNextSlide);

window.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight") goToNextSlide();
  if (event.key === "ArrowLeft") goToPrevSlide();
});

window.addEventListener(
  "wheel",
  (event) => {
    const isVerticalIntent = Math.abs(event.deltaY) > Math.abs(event.deltaX);
    if (!isVerticalIntent || Math.abs(event.deltaY) < 24 || isWheelLocked) return;

    event.preventDefault();
    isWheelLocked = true;

    if (event.deltaY > 0) {
      goToNextSlide();
    } else {
      goToPrevSlide();
    }

    window.setTimeout(() => {
      isWheelLocked = false;
    }, 760);
  },
  { passive: false }
);

renderDots();
renderSlide();
