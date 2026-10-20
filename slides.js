const slides = [
  {
    "chapter": "Cover",
    "title": "Java Backend Developer",
    "name": "송다원",
    "subtitle": "Java·Spring MVC 기반 웹 서비스에서 입력·처리·결과 조회를 연결한 개발자 송다원입니다.",
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
          "value": "응답",
          "label": "상태 유지 · 검사 API"
        },
        {
          "value": "결제",
          "label": "PG 승인 · 이력 저장"
        },
        {
          "value": "인증",
          "label": "소셜 로그인 · 회원 연계"
        },
        {
          "value": "출력",
          "label": "사용자별 리포트"
        }
      ]
    },
    "id": "cover"
  },
  {
    "chapter": "Profile Dashboard",
    "title": "구현을 연결하는 개발자",
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
    },
    "id": "experience"
  },
  {
    "chapter": "Core Skill Map",
    "title": "기술을 사용한 맥락",
    "subtitle": "실무 기술과 교육 과정에서 학습한 기술을 구분했습니다.",
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
    },
    "id": "skills"
  },
  {
    "chapter": "Service Request Flow",
    "title": "요청에서 결과까지",
    "subtitle": "화면의 요청을 서버 처리와 결과 조회로 연결했습니다.",
    "label": "Implementation / API",
    "content": {
      "type": "architecture",
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
      ],
      "originalItems": [
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
      ]
    },
    "id": "request"
  },
  {
    "chapter": "Database & MyBatis",
    "title": "무엇을 저장하는가",
    "subtitle": "회원별 검사 결과와 게시글을 MyBatis Mapper로 조회·저장했습니다.",
    "label": "Implementation / DB",
    "content": {
      "type": "dataModel",
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
      ],
      "originalItems": [
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
      ]
    },
    "id": "data"
  },
  {
    "chapter": "Payment Integration",
    "title": "결제의 흐름을 연결하다",
    "subtitle": "KG이니시스 · 인증 응답, 승인 호출, 성공 건 저장을 구분해 처리했습니다.",
    "label": "Case Study / Payment",
    "content": {
      "type": "transaction",
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
      ],
      "originalItems": [
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
      ]
    },
    "id": "payment"
  },
  {
    "chapter": "Social Login",
    "title": "인증 이후의 회원 처리",
    "subtitle": "카카오·네이버 · 제공자 인증과 서비스 회원 처리를 연결했습니다.",
    "label": "Case Study / OAuth",
    "content": {
      "type": "branch",
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
      ],
      "originalItems": [
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
      ]
    },
    "id": "oauth"
  },
  {
    "chapter": "ClipSoft Report Output",
    "title": "데이터에서 리포트로",
    "subtitle": "CLIP report 4의 CRF 템플릿과 웹 뷰어를 연결해 포트폴리오 출력을 구현했습니다.",
    "label": "Case Study / Report",
    "content": {
      "type": "report",
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
      ],
      "originalItems": [
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
      ]
    },
    "id": "report"
  },
  {
    "chapter": "Psychological Test Module",
    "title": "응답을 이어가는 설계",
    "subtitle": "페이지를 넘겨도 선택한 응답이 유지되도록 화면과 상태를 분리했습니다.",
    "label": "Case Study / Response State",
    "content": {
      "type": "stateDemo",
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
      ],
      "originalItems": [
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
      ]
    },
    "id": "psychology"
  },
  {
    "chapter": "Test API & Result",
    "title": "응답을 API의 언어로",
    "subtitle": "검사별 접두어·선택값·구분자 차이를 변환하고, Java 서버를 통해 커리어넷 API와 연결했습니다.",
    "label": "Case Study / Data Mapping",
    "content": {
      "type": "transform",
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
      ],
      "originalItems": [
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
      ]
    },
    "id": "format"
  },
  {
    "chapter": "Board & Admin Features",
    "title": "게시글의 생애를 구현하다",
    "subtitle": "공지·문의 CRUD와 화면 페이지네이션을 구현했습니다.",
    "label": "Case Study / Board",
    "content": {
      "type": "board",
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
      ],
      "originalItems": [
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
      ]
    },
    "id": "board"
  },
  {
    "chapter": "Retrospective",
    "title": "다시 만든다면",
    "subtitle": "현재 구현에서 확인한 한계와 앞으로 적용할 개선 방향을 구분했습니다.",
    "label": "Reflection / Planned",
    "content": {
      "type": "reflection",
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
      ],
      "originalItems": [
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
      ]
    },
    "id": "reflection"
  },
  {
    "chapter": "AI Tooling",
    "title": "도구보다 중요한 판단",
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
    },
    "id": "workflow"
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
    },
    "id": "closing"
  }
];

const caseTitles={
 cover:['입력에서 결과까지','흐름을 연결합니다.'],
 experience:['기능을 넘어','서비스의 흐름'],
 skills:['실무에서','사용한 기술'],
 request:['화면 요청을','저장·조회로'],
 data:['회원별로 남기는','검사 결과'],
 payment:['결제의 핵심은','승인과 저장'],
 oauth:['인증 이후의','회원 처리'],
 report:['사용자 데이터가','리포트로'],
 psychology:['화면이 바뀌어도','응답은 그대로'],
 format:['저장된 응답을','API의 언어로'],
 board:['등록부터 수정까지','게시글의 흐름'],
 reflection:['현재의 구현,','다음의 개선'],
 workflow:['초안은 도구로,','판단은 직접'],
 closing:['다음 흐름을','함께 만들겠습니다']
};
function titleMarkup(slide){const words=caseTitles[slide.id];return `<span class="title-context">${safe(words[0])}</span> <strong class="title-focus">${safe(words[1])}</strong>`;}
function emphasize(text){
 let result=safe(text);
 const terms=['입력·전송·저장·조회','심리검사 응답 처리','내부 데이터와 외부 시스템','문항 번호별 선택값','요구사항에 맞게 수정','벤더 문의','망취소 API','결제 이력 저장'];
 for(const term of terms)result=result.replace(safe(term),`<mark class="meaning-emphasis">${safe(term)}</mark>`);
 return result;
}
function renderTransformation(){
 return `<div class="conversion-graph" role="group" aria-label="저장한 예시 응답을 검사별 전달 형식으로 바꾸는 구조"><section class="conversion-source"><h2>저장된 응답</h2><div class="answer-object"><span>문항 1</span><code>["01", "02"]</code><p>문항별 선택값</p></div><p class="conversion-caption">규칙 설명을 위한<br>예시 데이터</p></section><section class="conversion-engine"><h2>formatAnswers</h2><p>검사 식별값으로 분기</p><dl><div><dt>문항 번호</dt><dd>검사별 <strong>접두어</strong></dd></div><div><dt>선택값</dt><dd>앞자리 <strong>0 제거</strong></dd></div><div><dt>구분자</dt><dd>공백 또는 <strong>쉼표</strong></dd></div><div><dt>복수 응답</dt><dd>해당 문항의 <strong>선택값 결합</strong></dd></div></dl></section><section class="conversion-output"><h2>검사별 전달 형식</h2><div><span>검사 6</span><code><mark>B</mark>1=01 02</code></div><div><span>검사 20·21</span><code>1=<mark>1 2</mark></code></div><div><span>검사 8·9·10</span><code>1<mark>,</mark>2</code></div></section></div><div class="conversion-handoff"><span>변환된 응답</span>${arrowIcon}<span>Java 서버</span>${arrowIcon}<strong>커리어넷 API</strong>${arrowIcon}<span>결과 URL 저장</span></div><p class="conversion-scope">변환은 직접 구현하고, <strong>채점은 외부 API</strong>에 요청했습니다.</p>`;
}

const arrowIcon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M4 12h16m-6-6 6 6-6 6"/></svg>';
function renderEditorial(slide) {
 const c=slide.content;
 switch(c.type) {
 case 'cover': return `<div class="intro-summary"><p>Java·Spring MVC로 심리검사·결제·인증·리포트를 구현한 송다원입니다.</p><button class="primary-action" type="button" data-index="8">응답 유지 사례 보기 ${arrowIcon}</button></div>${renderLiveFlow()}`;
 case 'transform': return renderTransformation();
 case 'dashboard': return `<div class="experience-record"><div class="employment"><h2>에듀인테크</h2><p>개발팀</p><span>2023.08 — 2025.09</span></div><div class="experience-scope">${c.cards.map((card,i)=>`<section><h2>${['서비스 기능 구현','화면부터 서버까지','외부 시스템 연동'][i]}</h2><p>${emphasize(card.text)}</p><span>${card.tags.map(safe).join(' · ')}</span></section>`).join('')}</div></div><p class="experience-stack">주요 실무 환경 <strong>Java · Spring MVC · MyBatis · MySQL</strong></p>`;
 case 'skillMap': return `<div class="skill-ledger"><table><caption class="sr-only">실무 기술과 사용 맥락</caption><thead><tr><th scope="col">사용 영역</th><th scope="col">기술</th><th scope="col">구현에 사용한 맥락</th></tr></thead><tbody>${c.areas.slice(0,3).map((area,i)=>`<tr><th scope="row">${['서버 처리','화면과 상태','데이터와 외부 연동'][i]}</th><td>${area.items.map(item=>`<span class="skill-item">${safe(item)}</span>`).join('')}</td><td>${['요청 수신과 서비스·Mapper 연결','화면 입력과 문항별 응답 유지','결과 저장·결제·인증·출력 연동'][i]}</td></tr>`).join('')}</tbody></table></div><section class="education-note"><h2>교육 과정에서 학습한 기술</h2><p>Java·Spring 웹 개발, OracleDB, Tomcat</p><span>2022.08 — 2023.02</span></section>`;
 case 'architecture': return `<div class="request-system">${stages([['화면 요청','JSP · JavaScript · AJAX'],['서버 처리','Spring MVC Controller'],['데이터 접근','Service · MyBatis Mapper'],['저장·조회','MySQL → 결과 화면']])}</div><div class="story-pair">${story('기능을 끝까지 연결',c.originalItems[0].text)}${story('기존 구조를 이해하며 구현','컨트롤러·서비스·Mapper의 호출 흐름을 파악하고 데이터 수신, 외부 연동과 저장을 기능별로 연결했습니다.')}</div>${closing('JSP 요청부터 Spring MVC·MyBatis를 거쳐 MySQL 저장·조회까지 연결했습니다.')}`;
 case 'transaction': return `<div class="payment-sequence">${stages([['결제 요청','주문·가격 정보와 요청 서명'],['인증 확인','응답 코드·승인 URL 검증'],['승인 호출','PG 승인 API 응답 처리'],['이력 저장','회원·상품·거래 정보 연결']])}</div><div class="payment-detail">${story('구현한 범위','주문번호·가격 기반 파라미터와 서명을 구성하고, 인증 응답 확인부터 승인 요청과 결제 이력 저장까지 연결했습니다.')}<aside class="transaction-exception"><h2>예외 시 망취소 호출</h2><p>승인 응답을 처리하는 특정 예외 구간에서 망취소 API를 호출하도록 구성했습니다.</p></aside></div>${closing('중복 처리 방지와 승인·저장 실패 복구는 후속 개선 과제입니다.')}`;
 case 'stateDemo': return `<div class="demo-introduction"><p><strong>10문항</strong>씩 표시하고, 문항 번호별 선택값을 저장·복원했습니다.</p></div><section class="response-demo" data-ui aria-label="응답 유지 동작 원리 데모"><div class="demo-heading"><div><h2>선택하고 화면을 바꿔보세요.</h2><p class="demo-caption">예시 4문항 · 응답 전송·채점 없음</p></div><span id="demoPageLabel">${demoState.page+1} / 2</span></div><div id="demoQuestions">${demoQuestions()}</div><div class="demo-toolbar"><button type="button" data-demo-page="0" ${demoState.page===0?'disabled':''}>이전 묶음</button><span id="demoCount" role="status">${Object.keys(demoState.answers).length} / 4 응답</span><button type="button" data-demo-page="1" ${demoState.page===1?'disabled':''}>다음 묶음</button></div><p id="demoFeedback" class="demo-feedback" role="status">선택한 응답은 화면을 바꾸어도 유지됩니다.</p></section><div class="demo-footnote"><p>실무: localStorage · 데모: 메모리 저장, 새로고침 시 초기화</p></div>`;
 case 'board': return `<div class="board-intro"><h2>게시글의 전체 흐름을 연결했습니다.</h2><p>공지·문의의 목록과 상세 조회부터 작성·수정·삭제까지 화면 요청과 서버 처리를 연결했습니다.</p></div><dl class="board-actions"><div><dt>등록</dt><dd>제목·내용 등 요청값을 구성한 뒤 저장</dd></div><div><dt>조회</dt><dd>목록과 상세 데이터 연결</dd></div><div><dt>수정·삭제</dt><dd>선택한 게시글의 데이터 처리</dd></div><div><dt>페이지 구분</dt><dd>전체 조회 후 JavaScript로 <strong>20개씩</strong> 표시</dd></div></dl>${closing('전체 조회 후 화면에서 20개씩 구분했습니다. 서버 페이지네이션은 개선 과제입니다.')}`;
 case 'reflection':return `<div class="reflection-table"><table><caption class="sr-only">현재 구현과 향후 개선 방향 비교</caption><thead><tr><th scope="col">검토 영역</th><th scope="col">현재 구현</th><th scope="col">다음 개선 방향</th></tr></thead><tbody>${[['응답 상태','문항별 선택값 저장','응시 단위 분리·복수 선택 복원'],['점수 검증','브라우저 점수 집계','서버 검증·최종 점수 계산'],['결제 정합성','성공 이력·예외 망취소','중복 방지·실패 상태 추적'],['조회 구조','전체 조회·화면 구분','서버 페이지네이션 검토']].map(row=>`<tr><th scope="row">${row[0]}</th><td>${row[1]}</td><td>${row[2].replace('서버 검증','<strong>서버 검증</strong>').replace('중복 방지','<strong>중복 방지</strong>')}</td></tr>`).join('')}</tbody></table></div>${closing('향후 개선 계획이며 아직 완료한 성과는 아닙니다.')}`;
 case 'aiTools':return `<div class="tooling-notes">${c.cards.map((card,i)=>`<section><h2>${['먼저, 규격과 기존 코드 확인','초안은 도구로, 판단은 직접','불명확하면 문서 밖에서 확인'][i]}</h2><p>${emphasize(card.text)}</p></section>`).join('')}</div><ol class="tooling-process">${c.workflow.map(step=>`<li>${safe(step)}</li>`).join('')}</ol>`;
 case 'thanks':return `<div class="closing-statement"><p>${c.message.map(safe).join('<br>')}</p><div class="closing-actions"><a href="https://github.com/SleeveStar/Portfolio" target="_blank" rel="noopener noreferrer">포트폴리오 소스 보기 ${arrowIcon}</a><button type="button" data-index="8">구현 사례 다시 보기 ${arrowIcon}</button></div></div>`;
 }
 return null;
}

const flowStages = [
 {title:'입력',meta:'문항별 선택',heading:'화면에서 받은 선택을 문항과 연결합니다.',text:'문항 번호를 기준으로 선택값을 구분합니다. 화면의 체크 상태와 저장할 응답을 연결하는 시작점입니다.',link:'응답 유지 데모 열기',index:8},
 {title:'상태 유지',meta:'응답 저장·복원',heading:'화면을 다시 그려도 응답은 남아 있습니다.',text:'실무에서는 localStorage에 선택값을 저장하고 페이지를 다시 표시할 때 체크 상태를 복원했습니다.',link:'직접 선택하고 돌아와 보기',index:8},
 {title:'API 전달',meta:'검사별 규격 변환',heading:'같은 응답도, 검사 규격에 맞춰 전달합니다.',text:'검사별 접두어·선택값·구분자 차이를 변환하고 Java 서버를 통해 커리어넷 API에 전달했습니다.',link:'데이터 변환 사례 열기',index:9},
 {title:'결과 조회',meta:'결과 URL 저장',heading:'결과를 회원의 검사 기록으로 연결합니다.',text:'외부 API가 제공하는 결과 URL을 회원·검사명·응시일과 함께 저장해 이후 조회에 사용했습니다.',link:'저장 구조 살펴보기',index:4}
];
let flowTimer=null;
let flowPlaying=false;
let flowStep=0;
let revealObserver=null;
const reducedMotion=()=>window.matchMedia('(prefers-reduced-motion: reduce)').matches;
function renderLiveFlow(){
 return `<section class="live-flow" aria-labelledby="liveFlowTitle"><div class="live-flow-heading"><h2 id="liveFlowTitle">응답이 결과가 되는 과정</h2><button type="button" class="flow-play" data-flow-play aria-pressed="false" aria-label="자동 흐름 일시정지"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M8 5v14M16 5v14"/></svg><span>일시정지</span></button></div><div class="flow-track" role="group" aria-label="처리 단계를 선택해 설명 보기"><div class="flow-line" aria-hidden="true"><span id="flowProgress"></span></div>${flowStages.map((step,i)=>`<button type="button" data-flow-step="${i}" aria-pressed="${i===0}" aria-controls="flowDetail"><span class="flow-node" aria-hidden="true"></span><strong>${step.title}</strong><span>${step.meta}</span></button>`).join('')}</div><div class="flow-detail" id="flowDetail" aria-live="off"><h3>화면의 선택을 문항 번호와 연결합니다.</h3><button type="button" data-index="8">${flowStages[0].link}${arrowIcon}</button></div><p class="flow-disclosure">실무 흐름을 재구성한 도식 · 실제 API 호출 없음</p></section><div class="more-work"><button type="button" data-index="5">결제 연동 ${arrowIcon}</button><button type="button" data-index="7">리포트 출력 ${arrowIcon}</button></div>`;
}
function updateFlowPlayback(){
 const button=document.querySelector('[data-flow-play]');if(!button)return;
 button.setAttribute('aria-pressed',String(flowPlaying));
 button.setAttribute('aria-label',flowPlaying?'자동 흐름 일시정지':'자동 흐름 계속 보기');
 button.querySelector('span').textContent=flowPlaying?'일시정지':'계속 보기';
 button.querySelector('path').setAttribute('d',flowPlaying?'M8 5v14M16 5v14':'m9 5 10 7-10 7Z');
 document.querySelector('#flowDetail')?.setAttribute('aria-live',flowPlaying?'off':'polite');
}
function stopLiveFlow(){
 clearTimeout(flowTimer);flowTimer=null;flowPlaying=false;updateFlowPlayback();
}
function setFlowStep(index,{instant=false}={}){
 const detail=document.querySelector('#flowDetail');if(!detail)return;
 flowStep=index;const step=flowStages[index];
 const headlines=['화면의 선택을 문항 번호와 연결합니다.','화면이 바뀌어도 응답은 유지됩니다.','검사별 요청 규격에 맞춰 변환합니다.','결과 URL을 회원의 검사 기록에 저장합니다.'];
 document.querySelectorAll('[data-flow-step]').forEach((button,i)=>{button.setAttribute('aria-pressed',String(i===index));button.classList.toggle('is-complete',i<index);});
 detail.innerHTML=`<h3>${headlines[index]}</h3><button type="button" data-index="${step.index}">${safe(step.link)}${arrowIcon}</button>`;
 const progress=document.querySelector('#flowProgress');const from=getComputedStyle(progress).transform;
 progress.getAnimations().forEach(a=>a.cancel());progress.style.transform=`scaleX(${index/3})`;
 if(!instant&&!reducedMotion()){
  progress.animate([{transform:from},{transform:`scaleX(${index/3})`}],{duration:500,easing:'cubic-bezier(.23,1,.32,1)'});
  detail.animate([{opacity:.35,transform:'translateY(5px)'},{opacity:1,transform:'translateY(0)'}],{duration:220,easing:'cubic-bezier(.23,1,.32,1)'});
 }
}
function startLiveFlow(){
 if(flowPlaying||!document.querySelector('#flowDetail')||document.hidden)return;
 flowPlaying=true;updateFlowPlayback();
 const advance=()=>{
  if(!flowPlaying)return;
  const next=(flowStep+1)%flowStages.length;
  setFlowStep(next,{instant:next===0||reducedMotion()});
  flowTimer=setTimeout(advance,2400);
 };
 flowTimer=setTimeout(advance,2400);
}
function playLiveFlow(){if(flowPlaying)stopLiveFlow();else startLiveFlow();}

function animateView({instant,direction=1}){
 revealObserver?.disconnect();revealObserver=null;
 if(instant||reducedMotion())return;
 const easing='cubic-bezier(.23,1,.32,1)';
 slideEl.animate([{opacity:.45,transform:`translateX(${direction*18}px)`},{opacity:1,transform:'translateX(0)'}],{duration:280,easing});
 const parts=[slideEl.querySelector('.portfolio-slide-header'),...slideEl.querySelector('.portfolio-slide-body').children];
 revealObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{
  if(!entry.isIntersecting)return;
  entry.target.animate([{opacity:.35,transform:'translateY(14px)'},{opacity:1,transform:'translateY(0)'}],{duration:280,easing});
  revealObserver.unobserve(entry.target);
 }),{threshold:.12});
 parts.forEach((part,index)=>{
  if(part.getBoundingClientRect().top<window.innerHeight-40)part.animate([{opacity:.35,transform:'translateY(14px)'},{opacity:1,transform:'translateY(0)'}],{duration:280,delay:Math.min(index*60,180),easing,fill:'backwards'});
  else revealObserver.observe(part);
 });
}
document.addEventListener('click',event=>{
 const step=event.target.closest('[data-flow-step]');
 if(step){stopLiveFlow();setFlowStep(Number(step.dataset.flowStep),{instant:isKeyboardInteraction});}
 if(event.target.closest('[data-flow-play]'))playLiveFlow();
});
let flowResumeAfterVisibility=false;
document.addEventListener('visibilitychange',()=>{
 if(document.hidden){flowResumeAfterVisibility=flowPlaying;stopLiveFlow();}
 else if(flowResumeAfterVisibility&&slides[currentIndex].id==='cover'&&!reducedMotion()){flowResumeAfterVisibility=false;startLiveFlow();}
});
document.addEventListener('focusin',event=>{if(event.target.closest('#flowDetail'))stopLiveFlow();});
window.matchMedia('(prefers-reduced-motion: reduce)').addEventListener('change',event=>{
 if(event.matches){stopLiveFlow();revealObserver?.disconnect();slideEl.getAnimations({subtree:true}).forEach(animation=>animation.cancel());}
 else if(slides[currentIndex].id==='cover')startLiveFlow();
});

const craftedTypes=new Set(['architecture','dataModel','transaction','branch','report','stateDemo','transform','board','reflection']);
const demoState={page:0,answers:{}};
const safe=value=>String(value).replace(/[&<>"']/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
const story=(title,text)=>`<section class="craft-story"><h2>${safe(title)}</h2><p>${emphasize(text)}</p></section>`;
const closing=text=>`<p class="craft-takeaway">${safe(text)}</p>`;
const node=(name,detail,kind='')=>`<div class="craft-node ${kind}"><strong>${safe(name)}</strong><span>${safe(detail)}</span></div>`;
const stages=items=>`<ol class="craft-spine">${items.map(([title,text])=>`<li><strong>${safe(title)}</strong><p>${safe(text)}</p></li>`).join('')}</ol>`;

function demoQuestions(){
 return [demoState.page*2+1,demoState.page*2+2].map(q=>`<fieldset class="demo-question"><legend>예시 문항 ${q}</legend><div>${['A','B','C'].map(value=>`<label class="demo-choice"><input type="radio" name="demo-${q}" value="${value}" data-question="${q}" ${demoState.answers[q]===value?'checked':''}><span>${value}</span></label>`).join('')}</div></fieldset>`).join('');
}

function renderCrafted(slide){
 const c=slide.content;const old=c.originalItems;
 switch(c.type){
 case 'stateDemo':return `<div class="craft-demo-layout"><div class="craft-demo-story">${story('화면과 응답을 분리', '실제 검사는 10문항씩 표시했습니다. 페이지 이동으로 화면이 바뀌어도 문항 번호를 기준으로 선택값을 다시 찾도록 구성했습니다.')}<div class="state-loop"><span>선택 변경</span><b aria-hidden="true">↓</b><strong>localStorage</strong><b aria-hidden="true">↓</b><span>재표시 시 체크 복원</span></div><p class="craft-source">구현: displayQuestions · change 이벤트</p></div><section class="response-demo" data-ui aria-label="응답 유지 동작 원리 데모"><div class="demo-heading"><h2>선택하고, 돌아와 보세요.</h2><span id="demoPageLabel">${demoState.page+1} / 2</span></div><p class="demo-caption">동작 원리 데모 · 실제 검사항목 대신 화면당 2문항으로 축약</p><div id="demoQuestions">${demoQuestions()}</div><div class="demo-toolbar"><button type="button" data-demo-page="0" ${demoState.page===0?'disabled':''}>이전 묶음</button><span id="demoCount" role="status">${Object.keys(demoState.answers).length} / 4 응답</span><button type="button" data-demo-page="1" ${demoState.page===1?'disabled':''}>다음 묶음</button></div></section></div>${closing('입력 요소를 다시 그려도 응답은 별도로 유지합니다. 이 데모는 브라우저 메모리에서 원리를 재현하며 검사 결과를 생성하지 않습니다.')}`;
 case 'transform':return `<div class="craft-transform"><div class="transform-lead"><h2>변환의 기준은<br>검사별 요청 규격.</h2><p>저장된 문항별 응답을 모은 뒤 검사 식별값에 따라 전달 형식을 달리했습니다.</p></div><div class="transform-rules"><div><strong>문항 번호</strong><span>검사별 접두어 적용</span></div><div><strong>선택값</strong><span>앞자리 0 처리</span></div><div><strong>구분자</strong><span>공백·쉼표 형식 변환</span></div><div><strong>복수 응답</strong><span>해당 문항의 선택값 결합</span></div></div></div><ol class="transform-route"><li>응답 수집</li><li><strong>formatAnswers</strong></li><li>Java 서버</li><li>커리어넷 API</li><li>결과 URL 저장</li></ol>${closing('Java 서버가 RestTemplate으로 요청합니다. 채점은 커리어넷이 수행하고 결과 URL을 회원별로 저장합니다.')}`;
 case 'transaction':return `<div class="craft-transaction"><div>${story('요청과 승인을 나누어 처리',old[0].text)}${story('내가 구현한 범위','주문번호·가격 기반 파라미터와 서명 구성, 인증 응답 확인, 승인 호출과 결제 이력 저장을 연결했습니다.')}</div><div class="transaction-track">${stages([['결제 요청','주문·상품 정보와 요청 서명'],['인증 응답','응답 코드·승인 URL 확인'],['승인 API','승인 요청과 응답 처리'],['성공 건 저장','회원·상품·거래 이력 연결']])}<aside class="transaction-exception"><strong>예외 분기</strong><p>승인 응답 처리 중 특정 예외 구간에서 망취소 API 호출</p></aside></div></div>${closing('성공 경로와 예외 호출 구간을 구분했습니다. 중복 방지와 승인·저장 실패의 복구 범위는 회고에서 보완 과제로 다룹니다.')}`;
 case 'branch':return `<div class="craft-auth"><div class="auth-providers"><span>카카오</span><span>네이버</span><p>인증 · 토큰 · 사용자 정보</p></div><div class="auth-junction">${node('기존 회원 조회','이메일 정보 기반')}<div class="auth-paths"><section><span>회원 있음</span><h2>세션 로그인</h2><p>HTTP Session에 로그인 정보를 구성하고 서비스 화면으로 이동</p></section><section><span>회원 없음</span><h2>가입 화면</h2><p>확인한 사용자 정보를 전달해 신규 가입 흐름으로 연결</p></section></div></div></div>${closing('이메일로 기존 회원을 조회해 세션 로그인 또는 가입 화면으로 연결했습니다.')}`;
 case 'dataModel':return `<div class="craft-data"><section><h2>외부 검사 결과</h2><p>API가 반환한 결과를 다시 찾아볼 수 있도록</p><dl><div><dt>회원</dt><dd>USER_CODE</dd></div><div><dt>검사</dt><dd>TEST_NAME · REG_DATE</dd></div><div><dt>결과</dt><dd>RESULT_URL</dd></div></dl></section><section><h2>별도 점수 집계</h2><p>브라우저에서 집계한 검사 점수를 저장</p><dl><div><dt>회원</dt><dd>USER_CODE</dd></div><div><dt>검사</dt><dd>TEST_NAME · REG_DATE</dd></div><div><dt>점수</dt><dd>TOTAL_SCORE · 영역별 점수</dd></div></dl></section></div><p class="craft-source">MyBatis · insertPsytestResult / insertEntrtestResult</p>${closing('결과 URL과 브라우저 집계 점수는 별도로 저장합니다. 자체 검사의 서버 검증은 개선 과제입니다.')}`;
 case 'report':return `<div class="craft-report"><section class="report-steps">${stages([['CRF 템플릿','포트폴리오 리포트 양식 지정'],['사용자 파라미터','addField로 사용자 식별값 전달'],['리포트 키','ReportUtil.createReport 호출'],['웹 뷰어','생성한 키로 리포트 표시·출력']])}</section><div class="report-object" aria-label="리포트 연결 구조 도식"><div class="report-sheet"><span>CLIP report 4</span><h3>Portfolio</h3><p>CRF template</p><dl><div><dt>데이터 연결</dt><dd>사용자 식별 파라미터</dd></div><div><dt>생성 결과</dt><dd>리포트 키</dd></div><div><dt>표시</dt><dd>웹 뷰어</dd></div></dl><small>연동 구조 도식</small></div></div></div>${closing('문서·벤더 문의로 규격을 확인했습니다. CLIP report 출력은 검사 결과 URL 조회와 별도 기능입니다.')}`;
 case 'architecture':return `<div class="craft-architecture"><div>${story('입력부터 조회까지',old[0].text)}${story('기존 구조 안에서 구현','컨트롤러·서비스·Mapper의 호출 흐름을 파악하고 기능에 필요한 데이터 수신, 외부 연동과 저장을 연결했습니다.')}</div><div class="architecture-path">${stages([['화면 요청','JSP · JavaScript · AJAX'],['서버 처리','Spring MVC Controller'],['데이터 접근','Service · MyBatis Mapper'],['저장·조회','MySQL → 결과 화면']])}</div></div>${closing('심리검사·게시판 등에서 실제로 연결한 요청 흐름입니다. 새로운 아키텍처를 비교·도입했다는 성과와는 구분합니다.')}`;
 case 'board':return `<div class="craft-board"><section><h2>등록에서 수정까지,<br>하나의 게시글 흐름.</h2><p>공지·문의의 목록과 상세 조회, 작성·수정·삭제 화면을 서버 처리에 연결했습니다.</p><p class="board-page-size"><strong>20</strong><span>개씩 화면에 표시</span></p></section><dl class="board-actions"><div><dt>등록</dt><dd>제목·내용 등 요청값 구성 후 저장</dd></div><div><dt>조회</dt><dd>목록과 상세 데이터 연결</dd></div><div><dt>수정·삭제</dt><dd>선택한 게시글의 데이터 처리</dd></div><div><dt>페이지 구분</dt><dd>전체 조회 후 JavaScript로 표시 범위 변경</dd></div></dl></div>${closing('Controller·Service·MyBatis를 활용했습니다. 화면 페이지 구분과 DB 쿼리 단계의 페이지네이션은 구분해 설명합니다.')}`;
 case 'reflection':return `<div class="craft-reflection"><div class="reflection-labels"><span>현재 구현</span><span>다음 개선 방향</span></div>${[
 ['응답 상태','문항별 선택값 저장','응시 단위 분리·복수 선택 복원'],
 ['점수 검증','브라우저에서 집계 후 저장','서버에서 응답 검증·최종 점수 계산'],
 ['결제 정합성','성공 이력·예외 망취소','중복 방지·실패 상태 추적'],
 ['조회 구조','전체 조회·화면 구분','서버 페이지네이션 검토']
 ].map(([area,before,after])=>`<section><h2>${area}</h2><p>${before}</p><p>${after}</p></section>`).join('')}</div>${closing('이 항목은 완료한 개선 성과가 아닙니다. 현재 구현의 경계를 이해하고, 다음에 검증할 방향을 정리한 회고입니다.')}`;
 }
 return '';
}

document.addEventListener('change',event=>{
 const input=event.target.closest('input[data-question]');if(!input)return;
 demoState.answers[input.dataset.question]=input.value;
 const status=document.querySelector('#demoCount');if(status)status.textContent=Object.keys(demoState.answers).length+' / 4 응답';
 const feedback=document.querySelector('#demoFeedback');if(feedback)feedback.textContent='예시 문항 '+input.dataset.question+'의 선택 '+input.value+'를 유지합니다.';
 if(status&&!isKeyboardInteraction&&!reducedMotion())status.animate([{opacity:.3,transform:'translateY(3px)'},{opacity:1,transform:'translateY(0)'}],{duration:160,easing:'cubic-bezier(.23,1,.32,1)'});
});
document.addEventListener('click',event=>{
 const button=event.target.closest('button[data-demo-page]');if(!button)return;
 demoState.page=Number(button.dataset.demoPage);
 document.querySelector('#demoQuestions').innerHTML=demoQuestions();
 document.querySelector('#demoPageLabel').textContent=(demoState.page+1)+' / 2';
 document.querySelectorAll('[data-demo-page]').forEach(btn=>btn.disabled=Number(btn.dataset.demoPage)===demoState.page);
 const restored=[demoState.page*2+1,demoState.page*2+2].filter(q=>demoState.answers[q]).length;
 const feedback=document.querySelector('#demoFeedback');if(feedback)feedback.textContent=restored?restored+'개 응답을 다시 표시했습니다.':'이 화면의 응답을 선택해 주세요.';
 if(!isKeyboardInteraction&&!reducedMotion())document.querySelector('#demoQuestions').animate([{opacity:.35,transform:'translateY(6px)'},{opacity:1,transform:'translateY(0)'}],{duration:220,easing:'cubic-bezier(.23,1,.32,1)'});
 document.querySelector('#demoQuestions input')?.focus({preventScroll:true});
});


const initialSlide = slides.findIndex(slide => '#'+slide.id === window.location.hash);
let currentIndex = Math.max(0, initialSlide);
let isWheelLocked = false;
let displayedIndex=null;
let isKeyboardInteraction = false;
document.addEventListener('keydown',()=>{isKeyboardInteraction=true;},{capture:true});
document.addEventListener('pointerdown',()=>{isKeyboardInteraction=false;},{capture:true});

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
  const editorial=renderEditorial(slide);
  if(editorial!==null)return editorial;
  const { content } = slide;
  if (craftedTypes.has(content.type)) return renderCrafted(slide);

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
      (_, index) => `<button class="portfolio-slide-dot" type="button" aria-label="${index + 1}. ${slides[index].title}" title="${slides[index].title}" data-index="${index}">${chapterNames[index]}</button>`
    )
    .join("");

  dotsEl.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-index]");
    if (!button) return;
    currentIndex = Number(button.dataset.index);
    renderSlide();
    window.scrollTo({top:0,behavior:"instant"});
  });
}

function renderSlide({ instant = isKeyboardInteraction } = {}) {
  revealObserver?.disconnect();
  slideEl.getAnimations({subtree:true}).forEach(animation=>animation.cancel());
  const direction=displayedIndex===null||currentIndex>=displayedIndex?1:-1;
  stopLiveFlow();
  const slide = slides[currentIndex];
  const crafted = craftedTypes.has(slide.content.type);
  document.querySelector('.portfolio-slide-stage').classList.toggle('is-crafted', crafted);
  slideEl.className = `portfolio-slide-card case-${slide.id} portfolio-slide-${slide.variant || 'default'}${crafted ? ' portfolio-slide-crafted' : ''}${instant ? ' is-instant' : ''}`;
  try { window.history.replaceState(null,'','#'+slide.id); } catch {}
  document.title = slide.title + ' | 송다원';
  slideEl.innerHTML = `
    <header class="portfolio-slide-header">

      <div>
        ${slide.role ? `<span class="portfolio-slide-role">${slide.role}</span>` : ""}
        <h1>${titleMarkup(slide)}</h1>

        <p>${slide.subtitle}</p>
      </div>
    </header>
    <div class="portfolio-slide-body">${renderContent(slide)}</div>

  `;

  const picker = document.querySelector('#chapterSelect');
  if (picker) picker.value = String(currentIndex);
  currentSlideEl.textContent = pad(currentIndex + 1);
  totalSlidesEl.textContent = pad(slides.length);
  prevButton.disabled = currentIndex === 0;
  nextButton.disabled = currentIndex === slides.length - 1;

  document.querySelectorAll(".portfolio-slide-dot").forEach((dot, index) => {
    dot.classList.toggle("is-active", index === currentIndex);
    dot.setAttribute("aria-current", index === currentIndex ? "true" : "false");
  });
  window.scrollTo({top:0,behavior:'instant'});
  slideEl.scrollTop=0;

  animateView({instant,direction});
  displayedIndex=currentIndex;
  if(slide.id==='cover'){flowStep=0;if(!reducedMotion())startLiveFlow();else updateFlowPlayback();}
}

function goToNextSlide(options) {
  if (currentIndex < slides.length - 1) {
    currentIndex += 1;
    renderSlide(options);
  }
}

function goToPrevSlide(options) {
  if (currentIndex > 0) {
    currentIndex -= 1;
    renderSlide(options);
  }
}

prevButton.addEventListener("click", () => goToPrevSlide());
nextButton.addEventListener("click", () => goToNextSlide());

window.addEventListener("keydown", (event) => {
  if (event.target.closest("input, textarea, select, button, summary, [contenteditable]")) return;
  if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return;
  if (event.key === "ArrowRight") { event.preventDefault(); goToNextSlide({instant:true}); }
  if (event.key === "ArrowLeft") { event.preventDefault(); goToPrevSlide({instant:true}); }
});

window.addEventListener(
  "wheel",
  (event) => {
    const isVerticalIntent = Math.abs(event.deltaY) > Math.abs(event.deltaX);
    if (!isVerticalIntent || Math.abs(event.deltaY) < 24 || isWheelLocked) return;
    if (window.matchMedia("(max-width: 900px)").matches) return;
    if (slideEl.scrollHeight > slideEl.clientHeight + 2) return;
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

const chapterSelect = document.querySelector('#chapterSelect');
const chapterNames = ['소개','경력','기술 역량','요청 처리','데이터 저장','결제 연동','소셜 로그인','리포트 출력','응답 유지','데이터 변환','게시판','개선 방향','AI 활용','마무리'];
chapterSelect.innerHTML = slides.map((slide,index)=>`<option value="${index}">${chapterNames[index]}</option>`).join('');
chapterSelect.addEventListener('change',()=>{currentIndex=Number(chapterSelect.value);renderSlide();window.scrollTo({top:0,behavior:'instant'});});
window.addEventListener('hashchange',()=>{const next=slides.findIndex(slide=>'#'+slide.id===window.location.hash);if(next>=0&&next!==currentIndex){currentIndex=next;renderSlide();}});
document.addEventListener('click', event=>{
 const target=event.target.closest('[data-index]');
 if(!target || target.closest('#slideDots')) return;
 currentIndex=Number(target.dataset.index);renderSlide();window.scrollTo({top:0,behavior:'instant'});
});
renderDots();
renderSlide();
