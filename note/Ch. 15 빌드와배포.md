# 빌드의 개념
빌드(build)는 작성한 코드와 애플리케이션이 사용하는 이미지, css파일 등의 정적인 파일들을 모두 모아서 패키징하는 과정

빌드 과정에서 다양한 작업이 발생
- 코드 `컴파일`, 식별 불가능을 위한 `난독화`
- 코드상에서 필요없는 공백/줄바꿈 제거하는 `축소`과정
- Webpack, Rollup 등의 번들링 도구를 사용하여 `번들링`

# Next.js 애플리케이션 빌드
Next.js에서 애플리케이션 빌드를 위해 `next build` 명령어 제공

`package.json` 파일의 scripts 항목에 build 명령어가 기본적으로 들어감
```
  "scripts": {
    "dev": "next dev --turbopack",
    "build": "next build --turbopack",
    "start": "next start",
    "lint": "eslint"
  }
```

빌드가 완료되면 최종적으로 `.next` 폴더에 빌드 파일들이 생성됨
배포 : 생성된 빌드 파일들을 실제 운영하려는 서버에 업로드하는 과정
