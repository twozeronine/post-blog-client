# post-blog-client

> [post-blog-server](https://github.com/twozeronine/post-blog-server) 바로가기

간단한 포스트를 작성, 읽기, 수정, 삭제 등 할 수 있는 CRUD 블로그 웹 앱의 client입니다.

## 스타일

styled-components를 사용하여 스타일을 적용하였고

## 라우터

react-router-dom를 사용하여  
LoginPage, RegisterPage, WritePage, PostPage, PostListPage 총 5개의 페이지를 구현하였습니다.

서버에서 제공하는 HTTP 헤더에 'last-page'를 받아와서 PostListPage에서 페이지네이션 기능을 구현하였습니다.

## 상태관리

React-redux를 사용하여 상태관리를 합니다  
Ducks 패턴으로 redux관련 파일은 모두 modules에 작성했습니다.

Container-Presenter 디자인 패턴으로 데이터 처리와 데이터 출력을 하는 파일들을 나눠서 작성하였습니다.

Container Components는 containers  
Presentational Components는 components  
폴더에서 확인할 수 있습니다.

## API 서버와 연동

axios를 사용하여 API를 호출합니다.

Redux-saga 미들웨어를 사용하여 API 요청과 같은 비동기적 작업을 관리합니다.

## 보안

글쓰기를 할 때 악성코드 삽입 방지를 위하여
sanitize-html 라이브러리를 사용하여 HTML을 필터링하였습니다.

> [Young-blog](https://blog-axhvl5dnbq-an.a.run.app/) 배포된 사이트입니다.

---

## page

### 회원가입

"/register"

### 로그인

"/login"

### 포스트 작성

"/write"

### 포스트 목록 조회

"/" ,"/?tag" , "/@:username"

### 포스트 조회

"/@:username/:postId"

---

## Environments

- axios@0.21.1
- immer@9.0.1
- qs@6.10.1
- quill@1.3.7
- react@17.0.1
- react-dom@17.0.1
- react-helmet-async@1.0.9
- react-redux@7.2.2
- react-router-dom@5.2.0
- react-scripts@4.0.3
- redux@4.0.5
- redux-actions@2.6.5
- redux-devtools-extension@2.13.9
- redux-saga@1.1.3
- styled-components@5.2.1
