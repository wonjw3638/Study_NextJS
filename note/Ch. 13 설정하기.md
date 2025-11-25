# next.config.js 파일

Next.js에서는 `next.config.js` 파일을 통해서 여러가지 옵션을 간편하게 설정할 수 있음
`next.config.js`파일은 프로젝트 가장 최상위 경로에 위치

- ECMAScript 모듈 사용하는 경우
- 타입스크립트를 사용하는 경우

## redirects

redirects 옵션 : 특정 페이지 요청을 다른 경로로 보낼 수 있게 해주는 기능
**기본 속성**
`source` : 들어오는 요청 경로 패턴
`destination` : 리디렉션할 경로
`permanent` : true/false

- true : 308 HTTP statud code를 사용, 리디렉션을 영구적으로 캐시
- false : 307 HTTP statud code (임시상태코드) 사용, 캐시되지 않음

**추가 속성**
`basePath` : 값이 false인 경우 경로를 매칭할 때 basePath를 포함하지 않으며 외부 리디렉션만 사용 가능
`locale` : false일 경우 경로를 매칭할 때 locale을 포함시키지 않음 (로케일 값에 영향 받을지 여부)
`has`, `missing` : type, key, value 속성을 가진 객체들의 배열로 구성. 헤더, 쿠키, 쿼리 등을 매칭 할 때 사용 (조건부 리디렉션, 있을 때만 / 없을 때만)

## rewrites

rewrites 옵션 : 특정 경로에 대한 요청을 다른 경로로 매칭할 수 있게 하는 기능
URL proxy로 동작하여 내부적으로만 다른 경로로 매핑시키고 사용자의 주소창에 나타나는 주소는 바뀌지 않음

redirects : 실제로 다른 경로로 보냄
rewrites : 다른 경로로 매핑만 시킴
둘 다 비동기 함수

**기본 속성**
`source` : 들어오는 요청 경로 패턴
`destination` : 라우팅 시킬 경로

**추가 속성**
`basePath`, `locale`, `has`, `missing` - redirects와 동일

# 환경변수 설정

next.js에서 환경변수를 설정할 수 있는 기능을 자체적으로 제공

## .env 파일을 이용한 환경변수 설정

next.js 프로젝트의 최상위 경로에 환경변수 파일을 생성하고 키-값 쌍을 작성하여 설정
*여러 줄에 걸친 값도 줄바꿈이나 개행문자를 사용해서 환경변수로 설정해서 사용가능*

next.js에서 환경변수 파일을 불러오는 순서

- `process.env`
- `.env.$(NODE_ENV).local`
- `.env.local` (NODE_ENV의 값이 test일 경우 체크하지 않음 - 개발용으로 작성된 개인별 local 설정이 테스트를 방해할 수 있기 때문에 생략됨)
- `.env.$(NODE_ENV)`
- `.env`

## 브라우저에서 접근 가능한 환경변수 설정

환경변수에 프론트엔드에서 접근해야 할 필요가 있는 경우
환경변수의 키 값을 `NEXT_PUBLIC_` 으로 시작하도록 하면 됨

ex. `NEXT_PUBLIC_MY_NAME` = soaple

빌드 시에 `NEXT_PUBLIC_` 으로 시작하는 환경변수를 참조하는 모든 부분의 값을 **실제 값으로 치환**하여 인라인으로 넣어줌
**외부에 노출되어서 안되는 값은 절대 사용하면 안됨**

ex.
- GA 추적 ID
- 지도 API 키
- API 앤드포인트 URL (환경마다 다름) - e.g. CDN 값 .. 
- ...