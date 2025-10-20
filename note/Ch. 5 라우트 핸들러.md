## 페이지스 라우터의 API 라우트

- API 라우트 :  기존 페이지스 라우터에서 Public API를 만들 수 있도록 해주는 기능
- API 라우트 사용 방법
: pages 폴더 내에 api라는 폴더를 생성, 그 안에 각 경로에 따른 API 코드 구현
pages/api 폴더의 모든 파일은 /api/* 경로에 매핑, 페이지가 아닌 API 앤드포인트로 처리 됨
`api 라우트로 작성한 코드는 서버 측 전용 번들이기 때문에 클라이언트 측 번들 크기를 늘리지 않음`

## 앱 라우터의 라우트 핸들러

- 라우트 핸들러 : 웹의 Request와 Response API를 활용하여 백엔드 API를 만들 수 있게 해주는 앱 라우터의 기능
- 라우트 핸들러 사용 방법 : app 폴더 내에 만들고자 하는 api경로대로 폴더를 만들고, 그 안에 route.js 또는 route.ts 라는 이름의 파일을 만들어 api 코드를 작성
- 라우트 핸들러는 page.js와 동일한 라우트 세그먼트 레벨에 route.js 파일이 존재해서는 안됨
- 라우트 핸들러는 HTTP 메서드 중, GET, POST, PUT, PATCH, DELETE, HEAD, OPTIONS에 대한 요청을 처리할 수 있음.
- 익스포트 하는 함수의 이름을 HTTP 메서드 이름으로 작성


## 라우트 핸들러 사용 예시
### 쿠키 다루기
next/headers 패키지의 cookies() 함수를 사용해서 쿠키를 읽거나 쓸 수 있음
```
Set-Cookie 헤더 : 서버가 클라이언트에게 쿠키를 설정하도록 지시하는 헤더
```

### 헤더 다루기
next/headers 패키지의 headers() 함수를 사용하여 요청헤더의 값을 읽어올 수 있음

### 동적 라우트 세그먼트
라우트 핸들러에서 동적 세그먼트를 사용할 수 있음
동적으로 받을 값을 동적 라우트를 사용해서 받아야함

### URL 쿼리 파라미터
NextRequest를 사용해 특정 파람으로 부터 쿼리 파라미터 값을 읽어올 수 있음

### Request Body 데이터 읽기
request body의 데이터를 읽어올 수 있음
`request.json()` `request.formData()`
