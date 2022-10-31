# 원티드 프리온보딩 1-2 1팀

## 배포 링크

[**누르시면 이동합니다!**](http://wanted-pre-onboarding-fe-7-1wk-2.s3-website.ap-northeast-2.amazonaws.com/)

# 팀 소개

| 이름         | github                         |
| ------------ | ------------------------------ |
| 박승민(팀장) | https://github.com/pmb087      |
| 김정현       | https://github.com/task11      |
| 김준호       | https://github.com/kimjuno97   |
| 윤태성       | https://github.com/taesung1993 |
| 임형섭       | https://github.com/4hsnim      |
| 조서연       | https://github.com/sycho09     |

# 기술 스택

<img src="https://img.shields.io/badge/javascript_ES6-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
<img src="https://img.shields.io/badge/React.js-61DAFB?style=for-the-badge&logo=react&logoColor=white">
<img src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white">

# 실행 방법

1. root 경로에 .env 파일을 생성하고 아래와 같이 토큰을 추가합니다..

```bash
  REACT_APP_TOKEN={깃허브 설정 => Developer settings => Personal access tokens 발급}
```

2. CustomAxios.js 파일의 Athorization 부분을 수정합니다.

```bash
  // before
  Authorization : `Bearer ${{secrets.REACT_APP_TOKEN}}`

  /after
  Authorization : `Bearer ${REACT_APP_TOKEN}`
```

3. 프로젝트 관련 라이브러리를 설치합니다.

``` bash
npm install
```

4. 프로젝트를 실행합니다.

``` bash
npm start
```

# 디렉토리 구조

```
📦 src
┣ 📂 components /- 하위 컴포넌트
┣ 📂 contexts /- 컨텍스트 API 관리
┃ ┗ 📜 IssuesContext.js /- 이슈 관련 API 호출로직, Provider 반환
┣ 📂 pages /- 페이지 컴포넌트
┃ ┣ 📜 IssueDetailPage.js /- 이슈 상세 페이지
┃ ┣ 📜 IssuesPage.js /- 이슈 리스트 페이지
┃ ┗ 📜 NotFoundPage.js /- 에러 관련 예외 처리 페이지
┣ 📂 styles /- common 스타일 관련 코드
┃ ┗ 📜 GlobalStyle.js /- reset.css를 포함한 글로벌 스타일
┣ 📂 ui /- styled-components로만 구성된 컴포넌트
┣ 📂 utils /- 로직 분리
┃ ┣ 📂 type /- 데이터 타입 관리
┃ ┃ ┗ 📜 Issue.js /- API 호출 응답으로 받아올 이슈 객체 타입
┃ ┣ 📜 CustomAxios.js /- 커스텀 Axios 로직 분리
┃ ┣ 📜 Issue.Service.js /- 이슈 리스트, 이슈 상세 호출 API
┃ ┣ 📜 IssueList.service.js /- 이슈 타입으로만 구성된 리스트 관리
┃ ┗ 📜 date.js /- 이슈 타입 속성중 생성일자 관리를 위해 Date 객체를 포맷팅하는 로직
┣ 📜 Router.js /- 라우터 관리 컴포넌트
┣ 📜 App.js
┗ 📜 index.js
```

# 동료학습

## Projects

Github Projects와 Issue 기반의 협업 방식을 채택하였습니다.

1. Github Projects 를 이용하여 task 생성 및 담당자 할당
2. 해당 task 로 Issue 생성
3. 해당 Issue로부터 브랜치를 생성하여 작업
4. PR은 4명 이상으로부터 approved 되어야 merge 가능
   https://github.com/orgs/7th-wanted-pre-onboarding-frontend/projects/2

> ### 코드 및 커밋 컨벤션은 Git Hooks와 husky를 사용해 자동화했습니다.

## Code Convention

- [prettier](https://github.com/7th-wanted-pre-onboarding-frontend/assignment-week1-1/blob/main/.prettierrc.json)
- [eslint](https://github.com/7th-wanted-pre-onboarding-frontend/assignment-week1-1/blob/main/.eslintrc.js)

## Commit Convention

### commitlint

- 사용 이유: 팀의 생산성 향상과 커밋 메세지 히스토리의 관리를 위해 통일성이 필요하다고 판단하였기 때문에 사용하였습니다.
- [Commitlint 문서](https://commitlint.js.org/#/)를 참고하여 설정하였습니다.

  <img width="689" alt="2022-10-28_08 33 50" src="https://user-images.githubusercontent.com/56210700/198418936-4d3fc67a-7bf2-40b5-bf80-421d235c4621.png">

# best practice 토론 과정

- [Organization](https://github.com/7th-wanted-pre-onboarding-frontend)을 만들어 [Discussion](https://github.com/orgs/7th-wanted-pre-onboarding-frontend/discussions/categories/-b-1-2-assignments)을 이용하여 서로의 의견을 공유하여 best practice를 도출하였습니다.

# best practice 선정 이유

## 1. 이슈 타입 관리

응답받은 데이터 객체의 타입을 관리하여 잘못된 형식의 데이터로 페이지가 렌더링 되는것을 사전에 방지하였습니다.

- 이슈 객체 타입 관리
- API 응답시 map을 이용해 데이터를 이슈타입 클래스 객체화

https://github.com/7th-wanted-pre-onboarding-frontend/assignment-week1-2/blob/aa4acfeb028a6a2d61fec3b743e78e9047609172/src/utils/type/Issue.js#L1-L13

https://github.com/7th-wanted-pre-onboarding-frontend/assignment-week1-2/blob/aa4acfeb028a6a2d61fec3b743e78e9047609172/src/contexts/IssuesContext.js#L122-L141

## 2. Custom Aixos

- Axios 호출 로직을 분리
- Issue API 호출 관련 로직에서 해당 Custom Aixos를 import하여 사용

https://github.com/7th-wanted-pre-onboarding-frontend/assignment-week1-2/blob/aa4acfeb028a6a2d61fec3b743e78e9047609172/src/utils/CustomAxios.js#L1-L11

## 3. 무한스크롤

- 기존 `addEventListener()`의 `scroll`을 사용하면 단시간에 수백, 수천번 호출되어 메인 스레드 영향을 주기 때문에 다른 방법을 사용
- 따라서 비동기적으로 실행되며 메인스레드에 영향을 주지 않는 `Intersection Observer API`를 사용

https://github.com/7th-wanted-pre-onboarding-frontend/assignment-week1-2/blob/aa4acfeb028a6a2d61fec3b743e78e9047609172/src/pages/IssuesPage.js#L21-L36

## 4. Context API

- Context API 파일에서 전역에서 관리되는 이슈 데이터를 응답받기 때문에 해당 파일에서 데이터 호출 로직을 관리

https://github.com/7th-wanted-pre-onboarding-frontend/assignment-week1-2/blob/aa4acfeb028a6a2d61fec3b743e78e9047609172/src/contexts/IssuesContext.js#L1-L181

## 4. 스켈레톤 UI

- 데이터 로딩중 사용자 경험을 개선하기 위하여 스켈레톤 UI를 채택하여 적용

https://github.com/7th-wanted-pre-onboarding-frontend/assignment-week1-2/blob/aa4acfeb028a6a2d61fec3b743e78e9047609172/src/components/IssueListSkeleton.js#L5-L20

https://github.com/7th-wanted-pre-onboarding-frontend/assignment-week1-2/blob/aa4acfeb028a6a2d61fec3b743e78e9047609172/src/pages/IssuesPage.js#L41-L54

# 사용 라이브러리

### production

- axios
- styled-components
    - styled-reset
- react-markdown
    - remarkGfm
    - react-syntax-highlighter

### dev

- commitlint
- eslint
- prettier
- husky
