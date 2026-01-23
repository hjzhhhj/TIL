export const sections = [
  {
    id: "cs",
    title: "CS",
    items: [
      {
        q: "프로세스 vs 스레드",
        points: [
          "프로세스: 실행 중인 프로그램 하나\n(메모리 독립적)",
          "스레드: 프로세스 내부에서 실행되는 CPU 실행 단위\n(메모리 공유 -> 생성과 전환의 비용 적음)",
        ],
        note: "게임이나 크롬 같은 프로그램은 각각 프로세스로 실행되고, 그 내부에서 UI 처리나 네트워크 요청 같은 작업은 스레드 단위로 처리됨",
      },
      {
        q: "HTTP vs HTTPS",
        points: [
          "HTTP: 데이터가 암호화가 안된 상태로 전송되어 중간자 공격에 취약함",
          "HTTPS: TLS로 데이터 암호화\n(TLS는 안전한 통신을 위한 암호화 프로토콜)",
        ],
        note: "HTTPS는 TLS를 통해 서버를 인증하고 통신 내용을 암호화하여 중간자 공격으로부터 데이터의 기밀성과 무결성을 보장",
      },
      {
        q: "REST API vs RESTful API",
        points: [
          "REST API: REST 방식을 쓰는 API\n(URL과 HTTP 메서드 사용)",
          "RESTful API: REST 방식을 잘 지킨 API (자원중심설계, HTTP 메서드 의미 준수, 무상태성)",
        ],
        note: "POST /getUser 같은 경우도 REST API라고 부르긴 하지만, 자원 중심 설계와 HTTP 메서드 의미를 지키지 않아 RESTful하다고 보긴 어려움",
      },
      {
        q: "HTTP 메서드 정리",
        points: [
          "GET: 조회, 여러 번 요청해도 결과가 달라지지 않음, 서버 상태 변경 X, 안전한 메서드",
          "POST: 생성, 처리 요청, 요청할 때마다 새로운 결과가 생길 수 있음, 서버 상태 변경 O, 조회용으로 사용 X",
          "PUT: 자원 전체 교체, 같은 요청을 다시 보내도 결과가 동일하게 유지됨",
          "PATCH: 자원 일부 수정, 수정한 부분만 변경됨",
          "DELETE: 자원 삭제, 한 번 삭제해도, 다시 요청하면 삭제된 상태 그대로 유지됨",
        ],
      },
    ],
  },
  {
    id: "js, ts",
    title: "JavaScript & TypeScript",
    items: [
      {
        q: "var, let, const",
        points: [
          "var: 함수 스코프, 중복 선언 가능, 호이스팅 발생",
          "let: 블록 스코프, 중복 선언 불가, 호이스팅 발생하지만 선언 전 사용 불가",
          "const: 블록 스코프, 중복 선언 불가, 재할당 불가, 호이스팅 발생하지만 선언 전 사용 불가",
        ],
        note: "const로 선언된 객체나 배열은 내부 값 변경 가능하지만, 재할당은 불가능!",
      },
    ],
  },
  {
    id: "React",
    title: "React",
    items: [
      {
        q: "React를 사용하는 이유",
        points: [
          "React는 컴포넌트 기반 구조로 재사용성이 높음",
          "Virtual DOM을 사용해 변경된 부분만 렌더링하여 성능이\n좋음",
          "상태 변화에 따라 UI가 자동으로 업데이트되어 상태 관리가 쉬움",
        ],
        note: "Virtual DOM은 실제 DOM 수정 전에 변경점만 계산해서 최소한으로 업데이트",
      },
    ],
  },
];
