export const sections = [
  {
    id: "cs",
    title: "CS",
    items: [
      {
        q: "프로세스 vs 스레드",
        points: [
          "프로세스: 실행 중인 프로그램 하나 (메모리 독립적)",
          "스레드: 프로세스 내부에서 실행되는 CPU 실행 단위 (메모리 공유 -> 생성과 전환의 비용 적음)",
        ],
        note: "게임이나 크롬 같은 프로그램은 각각 프로세스로 실행되고, 그 내부에서 UI 처리나 네트워크 요청 같은 작업은 스레드 단위로 처리됨",
      },
      {
        q: "HTTP vs HTTPS",
        points: [
          "HTTP: 데이터가 암호화가 안된 상태로 전송되어 중간자 공격에 취약함",
          "HTTPS: TLS로 데이터 암호화",
        ],
        note: "HTTPS는 TLS를 통해 서버를 인증하고 통신 내용을 암호화하여 중간자 공격으로부터 데이터의 기밀성과 무결성을 보장",
      },
      {
        q: "REST API vs RESTful API",
        points: [
          "REST API: REST 방식을 쓰는 API (URL과 HTTP 메서드 사용)",
          "RESTful API: REST 방식을 잘 지킨 API (자원중심설계, HTTP 메서드 의미 준수, 무상태성)",
        ],
        note: "POST /getUser 같은 경우도 REST API라고 부르긴 하지만, 자원 중심 설계와 HTTP 메서드 의미를 지키지 않아 RESTful하다고 보긴 어려움",
      },
    ],
  },
];
