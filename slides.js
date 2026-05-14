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
    chapter: "Profile Summary",
    title: "Profile Summary",
    subtitle: "서비스 구현, 데이터 처리, 외부 연동을 운영 관점으로 연결합니다.",
    label: "Summary",
    content: {
      type: "cards",
      cards: [
        {
          title: "Backend Development",
          accent: "blue",
          text: "Java 기반 REST API와 서비스 로직을 구현하고 예외 흐름까지 고려합니다.",
          tags: ["Controller", "Service", "Validation"]
        },
        {
          title: "Database & Query",
          accent: "mint",
          text: "MySQL/MyBatis 기반 CRUD, 검색, 페이징 쿼리를 요구사항에 맞게 작성합니다.",
          tags: ["MySQL", "MyBatis", "CRUD"]
        },
        {
          title: "Integration & Operation",
          accent: "pink",
          text: "결제, OAuth, 리포트 출력 등 외부 시스템과 운영 기능을 연결합니다.",
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
    subtitle: "요청부터 응답까지 운영자가 실제로 사용하는 흐름을 기준으로 구현합니다.",
    label: "API Flow",
    content: {
      type: "flow",
      highlight: "요청 처리 흐름을 계층별로 분리하고, 입력 검증과 예외 상황을 함께 고려했습니다. 단순 구현보다 운영자가 안정적으로 사용할 수 있는 API 흐름을 만드는 데 집중했습니다.",
      steps: ["Client", "Controller", "Service", "MyBatis Mapper", "MySQL", "Response"]
    }
  },
  {
    chapter: "Database & MyBatis",
    title: "Database & MyBatis",
    subtitle: "데이터 구조와 조회 성능을 고려해 운영 기능의 기반을 설계합니다.",
    label: "DB & Query",
    content: {
      type: "kpiTable",
      kpis: [
        { value: "Model", label: "Data Modeling" },
        { value: "CRUD", label: "CRUD Logic" },
        { value: "Search", label: "Search & Pagination" }
      ],
      headers: ["구분", "구현 내용", "목적"],
      rows: [
        ["데이터 모델링", "업무 데이터 구조 정리 및 테이블 설계", "확장 가능한 저장 구조 확보"],
        ["MyBatis 쿼리", "Mapper 기반 CRUD, 조건 검색, 페이징 처리", "운영자가 필요한 조회 흐름 제공"],
        ["데이터 검증", "입력값과 처리 결과의 일관성 확인", "오류 데이터와 예외 상황 감소"]
      ]
    }
  },
  {
    chapter: "External API Integration",
    title: "External API Integration",
    subtitle: "결제와 소셜 로그인 연동으로 서비스 진입과 거래 흐름을 구현합니다.",
    label: "Integration",
    content: {
      type: "integration",
      cards: [
        { title: "KG이니시스 결제 연동", text: "결제 요청, 승인 결과 처리, 저장 흐름 구현" },
        { title: "카카오 OAuth 로그인", text: "인가 코드, 토큰 처리, 사용자 정보 매핑" },
        { title: "네이버 OAuth 로그인", text: "Callback 검증과 회원 데이터 연동 처리" }
      ],
      steps: ["Request", "Provider", "Callback", "Validation", "DB Save", "Response"]
    }
  },
  {
    chapter: "ClipSoft Report Output",
    title: "ClipSoft Report Output",
    subtitle: "ClipSoft 인쇄/리포트 API를 연동해 결과 데이터를 미리보기, 인쇄, 내보내기 흐름으로 연결했습니다.",
    label: "Report Output",
    content: {
      type: "flow",
      steps: ["DB Data", "Result Calculation", "Report Data Mapping", "ClipSoft Template", "Preview / Print / Export"]
    }
  },
  {
    chapter: "Psychological Test Module",
    title: "Psychological Test Module",
    subtitle: "검사 응답 수집부터 채점, 결과 산출, 결과표 출력까지 end-to-end로 구현합니다.",
    label: "Test Module",
    content: {
      type: "process",
      steps: ["검사 페이지 구성", "응답 데이터 저장", "채점 로직 처리", "결과 화면 제공", "결과표 출력"]
    }
  },
  {
    chapter: "Board & Admin Features",
    title: "Board & Admin Features",
    subtitle: "운영자가 반복적으로 사용하는 게시판과 관리 기능을 안정적으로 구현합니다.",
    label: "Admin CRUD",
    content: {
      type: "featureTable",
      features: ["등록", "조회", "수정", "삭제", "검색", "페이징", "요구사항 반영"],
      headers: ["기능", "구현 포인트", "운영 효과"],
      rows: [
        ["CRUD", "게시글 등록/조회/수정/삭제 흐름 구성", "콘텐츠 운영 업무 처리"],
        ["검색", "조건 기반 검색 쿼리와 입력값 처리", "필요 데이터 빠른 탐색"],
        ["페이징", "목록 데이터 분할 조회 및 페이지 이동", "대량 데이터 화면 안정성 확보"],
        ["관리 기능", "운영 요구사항에 맞춘 필드와 상태 처리", "관리자 업무 효율 개선"]
      ]
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
    subtitle: "AI 도구를 적극적으로 활용해 구현 속도와 문제 해결 품질을 함께 높입니다.",
    label: "AI Workflow",
    content: {
      type: "aiTools",
      cards: [
        {
          title: "Code Review & Refactoring",
          text: "구현 후 코드 흐름을 점검하고, 중복 제거와 가독성 개선 포인트를 빠르게 찾습니다.",
          tags: ["Review", "Refactoring", "Readability"]
        },
        {
          title: "Debugging Support",
          text: "오류 로그와 예외 상황을 기반으로 원인을 좁히고, 검증할 가설을 정리합니다.",
          tags: ["Error Log", "Trace", "Hypothesis"]
        },
        {
          title: "Documentation & Learning",
          text: "API 문서, 라이브러리 사용법, 구현 대안을 비교하며 필요한 내용을 빠르게 학습합니다.",
          tags: ["Docs", "Research", "Compare"]
        }
      ],
      workflow: ["요구사항 정리", "구현 방향 검토", "코드 작성", "오류 분석", "리팩토링", "검증"]
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
