const slides = [
  {
    "chapter": "Cover",
    "title": "Java Backend Developer",
    "name": "송다원",
    "subtitle": "Java·Spring MVC 기반 웹 서비스에서 데이터 처리와 외부 API 연동을 담당한 개발자 송다원입니다.",
    "label": "Java Backend Portfolio",
    "variant": "cover",
    "content": {
      "type": "cover",
      "keywords": [
        "Java",
        "Spring MVC",
        "MyBatis",
        "MySQL",
        "JSP",
        "jQuery"
      ],
      "metrics": [
        {
          "value": "Java",
          "label": "Backend"
        },
        {
          "value": "Spring MVC",
          "label": "Framework"
        },
        {
          "value": "MySQL",
          "label": "Database"
        },
        {
          "value": "API",
          "label": "Integration"
        }
      ]
    }
  },
  {
    "chapter": "Profile Dashboard",
    "title": "Backend Capability Snapshot",
    "subtitle": "에듀인테크 개발팀 · 2023.08–2025.09 · 주요 기능 개발과 운영 대응을 담당했습니다.",
    "label": "Capability",
    "content": {
      "type": "dashboard",
      "metrics": [
        {
          "value": "Java",
          "label": "Primary Language"
        },
        {
          "value": "Spring MVC",
          "label": "Backend Framework"
        },
        {
          "value": "MyBatis",
          "label": "Persistence Layer"
        },
        {
          "value": "MySQL",
          "label": "Database / 실무"
        }
      ],
      "cards": [
        {
          "title": "Service Logic",
          "text": "심리검사 응답 처리, 회원별 결과 조회, 게시판 등 서비스 기능을 구현했습니다.",
          "tags": [
            "Controller",
            "Service",
            "Mapper"
          ]
        },
        {
          "title": "User Flow",
          "text": "백엔드와 필요한 화면을 함께 개발해 입력·전송·저장·조회 흐름을 연결했습니다.",
          "tags": [
            "JSP",
            "JavaScript",
            "jQuery"
          ]
        },
        {
          "title": "External Workflow",
          "text": "결제·소셜 인증·검사 API·리포트 출력에서 내부 데이터와 외부 시스템을 연결했습니다.",
          "tags": [
            "Payment",
            "OAuth",
            "Report"
          ]
        }
      ]
    }
  },
  {
    "chapter": "Core Skill Map",
    "title": "Core Skill Map",
    "subtitle": "실무에서 사용한 기술과 교육 과정에서 학습한 기술을 구분했습니다.",
    "label": "Skill Map",
    "content": {
      "type": "skillMap",
      "areas": [
        {
          "title": "Backend / 실무",
          "items": [
            "Java",
            "Spring MVC",
            "전자정부프레임워크",
            "MyBatis"
          ]
        },
        {
          "title": "View / 실무",
          "items": [
            "JSP",
            "JavaScript · jQuery",
            "HTML · CSS",
            "AJAX · localStorage"
          ]
        },
        {
          "title": "Data & API / 실무",
          "items": [
            "MySQL",
            "커리어넷 검사 API",
            "KG이니시스 · OAuth",
            "CLIP report 4"
          ]
        },
        {
          "title": "Education / 교육",
          "items": [
            "Java·Spring 웹 개발",
            "OracleDB · Tomcat",
            "2022.08–2023.02"
          ]
        }
      ]
    }
  },
  {
    "chapter": "Service Request Flow",
    "title": "Service Request Flow",
    "subtitle": "화면의 요청을 서버 처리와 결과 조회로 연결했습니다.",
    "label": "Implementation / API",
    "content": {
      "type": "paar",
      "items": [
        {
          "key": "P",
          "title": "Problem",
          "text": "사용자 입력을 서버에 전달하고, 기능별 데이터를 저장한 뒤 결과 화면에서 다시 조회할 수 있어야 했습니다."
        },
        {
          "key": "A",
          "title": "Analyze",
          "text": "기존 컨트롤러와 서비스·Mapper의 호출 흐름을 확인하고, 입력값과 외부 API 응답 중 저장할 데이터를 정리했습니다."
        },
        {
          "key": "A",
          "title": "Action",
          "text": "AJAX의 JSON 요청, Java 컨트롤러의 데이터 수신, 서비스·MyBatis 호출과 결과 화면 연결을 구현했습니다."
        },
        {
          "key": "R",
          "title": "Result",
          "text": "심리검사 결과와 게시글 등 실제 기능에서 화면 입력부터 데이터 저장·조회까지 이어지는 흐름을 구성했습니다."
        }
      ],
      "flow": [
        "화면 입력",
        "JSON 전송",
        "Controller",
        "Service / Mapper",
        "DB",
        "결과 조회"
      ]
    }
  },
  {
    "chapter": "Database & MyBatis",
    "title": "Database & MyBatis",
    "subtitle": "회원별 검사 결과와 게시글을 MyBatis Mapper로 조회·저장했습니다.",
    "label": "Implementation / DB",
    "content": {
      "type": "paar",
      "items": [
        {
          "key": "P",
          "title": "Problem",
          "text": "검사 결과와 게시글을 서비스의 회원 정보에 연결하고, 이후 화면에서 조회할 수 있도록 저장해야 했습니다."
        },
        {
          "key": "A",
          "title": "Analyze",
          "text": "검사별 저장 대상이 달랐습니다. 외부 검사는 결과 URL을, 별도 검사는 영역별 점수와 총점을 저장하는 흐름을 구분했습니다."
        },
        {
          "key": "A",
          "title": "Action",
          "text": "회원·검사명·응시일·결과 URL과 별도 검사 점수의 저장을 연결했습니다. 게시글은 등록·조회·수정·삭제 쿼리로 처리했습니다."
        },
        {
          "key": "R",
          "title": "Result",
          "text": "검사 이력과 게시판 데이터를 서비스 화면에 연결했습니다. 공지·문의 목록의 페이지 구분은 화면에서 처리했습니다."
        }
      ],
      "flow": [
        "회원 식별",
        "저장 데이터 구성",
        "MyBatis",
        "DB 저장",
        "결과 조회"
      ]
    }
  },
  {
    "chapter": "Payment Integration",
    "title": "KG Inicis Payment",
    "subtitle": "결제 요청 파라미터부터 승인 응답과 성공 건 저장까지 연결했습니다.",
    "label": "Case Study / Payment",
    "content": {
      "type": "paar",
      "items": [
        {
          "key": "P",
          "title": "Problem",
          "text": "상품 결제 요청을 PG 인증·승인 과정과 연결하고, 반환된 거래 정보를 내부 결제 이력으로 저장해야 했습니다."
        },
        {
          "key": "A",
          "title": "Analyze",
          "text": "공식 연동 가이드와 기존 코드에서 요청값·서명·인증 응답·승인 호출 순서를 확인했습니다."
        },
        {
          "key": "A",
          "title": "Action",
          "text": "주문번호·가격 기반 요청과 서명을 구성하고 승인 API 응답을 처리했습니다. 성공 건을 저장하고 특정 예외 구간에 망취소 호출을 연결했습니다."
        },
        {
          "key": "R",
          "title": "Result",
          "text": "결제 요청과 승인 결과를 회원·상품·거래 이력에 연결했습니다. 중복 요청 방지와 실패 복구 범위는 이후 보완할 과제로 보고 있습니다."
        }
      ],
      "flow": [
        "요청 구성",
        "PG 인증",
        "승인 요청",
        "응답 처리",
        "성공 건 저장"
      ]
    }
  },
  {
    "chapter": "Social Login",
    "title": "Kakao / Naver OAuth",
    "subtitle": "소셜 인증 결과를 기존 회원 로그인과 신규 가입 흐름에 연결했습니다.",
    "label": "Case Study / OAuth",
    "content": {
      "type": "paar",
      "items": [
        {
          "key": "P",
          "title": "Problem",
          "text": "소셜 제공자에서 받은 사용자 정보를 서비스 회원 처리에 연결하고, 가입 여부에 따라 화면을 분기해야 했습니다."
        },
        {
          "key": "A",
          "title": "Analyze",
          "text": "제공자별 토큰 발급과 사용자 정보 응답을 확인하고, 기존 회원 조회에 필요한 값을 정리했습니다."
        },
        {
          "key": "A",
          "title": "Action",
          "text": "카카오·네이버 인증을 연동하고 회원 조회 결과에 따라 세션 로그인 또는 가입 화면으로 분기했습니다. 가입에 필요한 정보도 전달했습니다."
        },
        {
          "key": "R",
          "title": "Result",
          "text": "소셜 인증부터 서비스 진입까지 연결했습니다. 동일 이메일의 복수 회원 등 계정 연결 규칙은 더 명확히 다듬을 부분입니다."
        }
      ],
      "flow": [
        "제공자 인증",
        "토큰 발급",
        "사용자 조회",
        "기존 회원 조회",
        "로그인 / 가입"
      ]
    }
  },
  {
    "chapter": "ClipSoft Report Output",
    "title": "ClipSoft Report Output",
    "subtitle": "CLIP report 4의 CRF 템플릿과 웹 뷰어를 연결해 포트폴리오 출력을 구현했습니다.",
    "label": "Case Study / Report",
    "content": {
      "type": "paar",
      "items": [
        {
          "key": "P",
          "title": "Problem",
          "text": "서비스의 포트폴리오 정보를 사용자별로 구분해 리포트 템플릿과 출력 화면에 연결해야 했습니다."
        },
        {
          "key": "A",
          "title": "Analyze",
          "text": "가이드와 기존 연동 코드에서 템플릿 지정·사용자 파라미터·리포트 키·뷰어의 연결 방식을 확인했습니다."
        },
        {
          "key": "A",
          "title": "Action",
          "text": "CRF 템플릿에 사용자 식별 파라미터를 전달하고 리포트 키를 생성해 뷰어에 연결했습니다. 불명확한 규격은 벤더 문의로 확인했습니다."
        },
        {
          "key": "R",
          "title": "Result",
          "text": "사용자별 포트폴리오를 조회·출력하는 흐름을 연동했습니다. 커리어넷 검사 결과의 외부 URL 조회와는 별도 기능입니다."
        }
      ],
      "flow": [
        "CRF 템플릿",
        "사용자 파라미터",
        "리포트 생성",
        "뷰어 연결",
        "출력"
      ]
    }
  },
  {
    "chapter": "Psychological Test Module",
    "title": "Psychological Test",
    "subtitle": "페이지를 이동해도 기존 응답을 확인하고 수정할 수 있도록 상태를 관리했습니다.",
    "label": "Case Study / Response State",
    "content": {
      "type": "paar",
      "items": [
        {
          "key": "P",
          "title": "Problem",
          "text": "많은 문항을 여러 페이지로 나누면서 화면을 다시 그려도 체크 상태를 유지해야 했습니다. 이전 응답을 확인·수정할 수 있도록 만드는 것이 어려웠습니다."
        },
        {
          "key": "A",
          "title": "Analyze",
          "text": "현재 화면의 입력 요소와 저장할 응답 데이터를 나눠 관리했습니다. 문항 번호를 기준으로 선택값을 다시 찾을 수 있도록 구성했습니다."
        },
        {
          "key": "A",
          "title": "Action",
          "text": "문항을 10개씩 표시하고 change 이벤트에서 선택값을 localStorage에 저장했습니다. 단일 선택 문항 표시 시 저장값과 선택지를 비교해 복원했습니다."
        },
        {
          "key": "R",
          "title": "Result",
          "text": "이전·다음 페이지 이동 중 단일 선택 응답을 이어가도록 구현했습니다. 동적 화면의 이벤트 처리와 응답 상태 관리를 경험했습니다."
        }
      ],
      "flow": [
        "문항 10개 표시",
        "선택값 저장",
        "페이지 이동",
        "문항 재표시",
        "상태 복원"
      ]
    }
  },
  {
    "chapter": "Test API & Result",
    "title": "Test API & Result",
    "subtitle": "검사 종류에 따라 응답 형식을 변환하고 결과 저장·조회까지 연결했습니다.",
    "label": "Case Study / Data Mapping",
    "content": {
      "type": "paar",
      "items": [
        {
          "key": "P",
          "title": "Problem",
          "text": "검사마다 요구하는 응답 문자열이 달라, 문항 번호·선택값을 API 규격에 맞게 바꿔 전달해야 했습니다."
        },
        {
          "key": "A",
          "title": "Analyze",
          "text": "검사 식별값에 따른 접두어·앞자리 0·구분자·복수 응답 차이를 정리해 변환 함수의 분기 조건으로 구성했습니다."
        },
        {
          "key": "A",
          "title": "Action",
          "text": "formatAnswers로 응답을 변환하고 JSON으로 서버에 전달했습니다. Java의 RestTemplate으로 커리어넷 API를 호출하고 결과 URL을 회원별로 저장했습니다."
        },
        {
          "key": "R",
          "title": "Result",
          "text": "응답 제출부터 외부 검사 결과 조회까지 연결했습니다. 별도 검사는 JavaScript에서 점수를 집계해 서버에 저장하는 방식으로 구현했습니다."
        }
      ],
      "flow": [
        "응답 수집",
        "규격 변환",
        "Java 서버",
        "외부 검사 API",
        "결과 URL 저장"
      ]
    }
  },
  {
    "chapter": "Board & Admin Features",
    "title": "Board & Admin Features",
    "subtitle": "공지·문의 CRUD와 화면 페이지네이션을 구현했습니다.",
    "label": "Case Study / Board",
    "content": {
      "type": "paar",
      "items": [
        {
          "key": "P",
          "title": "Problem",
          "text": "공지와 문의를 등록하고 조회하며, 내용을 수정하거나 삭제할 수 있는 화면과 데이터 처리가 필요했습니다."
        },
        {
          "key": "A",
          "title": "Analyze",
          "text": "게시글 데이터와 요청 흐름을 확인하고, 목록·상세·작성·수정 화면에서 필요한 항목을 정리했습니다."
        },
        {
          "key": "A",
          "title": "Action",
          "text": "Controller·Service·MyBatis로 CRUD를 연결했습니다. 조회한 목록은 JavaScript에서 20개씩 나누어 표시하고 페이지 이동을 구현했습니다."
        },
        {
          "key": "R",
          "title": "Result",
          "text": "게시글 관리와 목록 탐색을 연결했습니다. 이 사례는 전체 조회 후 화면에서 나누는 방식으로, DB 페이지네이션 최적화와 구분합니다."
        }
      ],
      "flow": [
        "등록",
        "목록 조회",
        "상세 조회",
        "수정 / 삭제",
        "화면 페이지 구분"
      ]
    }
  },
  {
    "chapter": "Retrospective",
    "title": "Next Improvements",
    "subtitle": "당시 구현을 돌아보고, 다시 개발한다면 보강할 방향을 정리했습니다.",
    "label": "Reflection / Planned",
    "content": {
      "type": "paar",
      "items": [
        {
          "key": "P",
          "title": "State",
          "text": "검사·응시 단위로 저장 범위를 분리하고, 복수 선택을 배열로 관리해 저장과 복원 형식을 일치시키겠습니다."
        },
        {
          "key": "A",
          "title": "Validation",
          "text": "전체 문항과 응답을 대조해 누락을 확인하고, 별도 검사의 최종 점수를 서버에서 계산·검증하도록 보강하겠습니다."
        },
        {
          "key": "A",
          "title": "Consistency",
          "text": "주문·거래 기준의 중복 처리 방지와 승인·저장 실패 상태 추적을 추가하고, 회원 계정 연결 규칙도 명확히 하겠습니다."
        },
        {
          "key": "R",
          "title": "Maintainability",
          "text": "데이터 규모에 맞는 서버 조회와 검사별 변환·외부 통신·저장 책임 분리를 검토하겠습니다. 이 항목은 향후 개선 방향입니다."
        }
      ],
      "flow": [
        "현재 구현 확인",
        "한계 정리",
        "개선 설계",
        "검증 계획"
      ]
    }
  },
  {
    "chapter": "AI Tooling",
    "title": "AI-Assisted Development",
    "subtitle": "공식 문서·기존 코드·벤더 소통을 바탕으로, AI를 구현과 오류 분석의 보조 수단으로 활용했습니다.",
    "label": "AI Workflow",
    "content": {
      "type": "aiTools",
      "cards": [
        {
          "title": "Guide Interpretation",
          "text": "기능의 목적과 외부 API 요청·응답 규격을 확인하고 기존 코드의 흐름을 파악했습니다.",
          "tags": [
            "Guide",
            "API Docs",
            "Existing Code"
          ]
        },
        {
          "title": "AI Assistance",
          "text": "구현 초안과 오류 분석에 AI를 활용하고, 기존 코드와 요구사항에 맞게 수정했습니다.",
          "tags": [
            "AI",
            "Implementation",
            "Review"
          ]
        },
        {
          "title": "External Check",
          "text": "CLIP report 연동처럼 문서만으로 불명확한 부분은 벤더 문의로 확인해 적용했습니다.",
          "tags": [
            "Vendor",
            "Specification",
            "Apply"
          ]
        }
      ],
      "workflow": [
        "요구사항 파악",
        "규격 확인",
        "구현 초안",
        "직접 수정",
        "문의 / 확인",
        "결과 점검"
      ]
    }
  },
  {
    "chapter": "Thank You",
    "title": "Thank You.",
    "subtitle": "Java Backend Developer 송다원",
    "label": "Thank You",
    "variant": "thanks",
    "content": {
      "type": "thanks",
      "message": [
        "사용자의 입력부터 결과 조회까지 연결하고,",
        "데이터 정합성과 실패 대응까지 고민하는 개발자로 성장하겠습니다."
      ],
      "keywords": [
        "Java",
        "Spring MVC",
        "MyBatis",
        "MySQL",
        "JSP",
        "jQuery"
      ]
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
  if (event.target.closest("input, textarea, select, [contenteditable]")) return;
  if (event.key === "ArrowRight") goToNextSlide();
  if (event.key === "ArrowLeft") goToPrevSlide();
});

window.addEventListener(
  "wheel",
  (event) => {
    const isVerticalIntent = Math.abs(event.deltaY) > Math.abs(event.deltaX);
    if (!isVerticalIntent || Math.abs(event.deltaY) < 24 || isWheelLocked) return;
    if (window.matchMedia("(max-width: 900px)").matches) return;
    if (document.documentElement.scrollHeight > window.innerHeight + 2) return;

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
