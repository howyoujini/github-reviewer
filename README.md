<br>
<br>

<p align="center">
  <img src="/src/assets/vaco.svg"  width="400">
</p>

<br>
<br>

> 바닐라코딩의 모든 과제는 실제 기업에서 주어지는 과제에 기반하여 제작되었으며, 저작권법의 보호를 받습니다. 개인 블로그 등의 공개된 장소에 관련 내용을 공유하거나 개인적으로 지인들과 공유하는 등의 행위는 삼가해주시기 바랍니다.

<br>
<br>

<p align="center">
  <img src="/github.png"  width="300">
</p>

<br>
<br>

# Github Viewer

Github의 인기 저장소 목록을 확인할 수 있고, Github 사용자 간의 프로필을 대결 구도로 비교해 볼 수 있는 웹 어플리케이션입니다.

<br>
<br>

## 📌 작업 준비

과제를 시작하기 전, 아래 1-3 단계를 진행합니다. 과제를 시작하는 단계에서 최초 1회만 진행하시면 됩니다.

<br>

### 1. 과제 클론받기

터미널에서 아래의 Git 명령어를 이용하여 과제를 클론(다운로드) 받으세요.

```sh
git clone 과제_GIT_URI
```

> 과제\_GIT_URI는 Github 과제 저장소의 메인 페이지에서 초록색 `<> Code` 버튼을 클릭하시면 확인할 수 있습니다.

<br>

### 2. 과제 디렉토리로 이동하기

다음 명령어를 이용하여 과제 디렉토리로 이동하세요.

```sh
cd 과제_저장소_이름
```

<br>

### 3. 관련 의존성 패키지를 설치하세요.

터미널의 과제 디렉토리 내에서 아래 명령어를 실행하세요.

```sh
npm install
```

> `package.json`의 `engines` 필드에 명시된 Node.js와 npm 버전을 확인하신 후, 동일한 버전을 사용해주세요.

<br>
<br>

## 📌 작업 진행

<br>

### 1. VS Code 실행

터미널에서 과제 디렉토리로 이동하여 아래 명령어를 실행하면, VS Code에서 과제 파일이 열립니다.

```sh
code .
```

> [VS Code에서 `code` 명령어 설치하는 방법](https://code.visualstudio.com/docs/setup/mac#_launching-from-the-command-line)

<br>

### 2. 로컬 서버 실행

터미널에서 과제 디렉토리로 이동하여 아래 명령어를 실행합니다.

```sh
npm run dev # visit localhost:5173
```

> 실행 명령어는 과제에 따라 상이할 수 있으므로, 반드시 `README.md` 파일의 내용을 확인 후 진행해주세요.

<br>

### 4. 로컬 서버 중지

작업이 끝났을 경우, 터미널의 로컬 서버 실행창에서 `ctrl + c`를 입력하여 실행 중이던 로컬 서버를 중지합니다. 추후 작업 재개시, 로컬 서버를 다시 실행하고, 작업 종료시 로컬 서버를 중지시키는 행위를 매번 반복합니다.

> 로컬 서버를 장시간 동안 켜놓을 경우, 컴퓨터의 리소스가 낭비될 수 있습니다. 장시간 작업을 중단하는 경우에는 로컬 서버를 종료시키고 다시 재개하는 시점에 다시 로컬 서버를 시작하세요.

<br>
<br>

## React Reference

- https://react.dev/
- https://ko.react.dev/
- https://ko.react.dev/learn/thinking-in-react

<br>
<br>

## 📌 리서치 TODO

> 과제 제출 이후, 조사하고 실험한 퀴즈나 내용을 정리하여 공유해주세요.

<br>

### 과제 시작 전 (혹은 병행)

<br>

- [ ] 자바스크립트 객체 구조분해 할당 문법에 대해 다시 한번 간략히 살펴보세요.
- [ ] JSX 정의와 기능에 대해 조사해보세요.
- [ ] JSX 내부에는 자바스크립트 표현식만 사용 가능합니다. 자바스크립트 표현식이란 무엇이며, 주로 사용되는 예시에는 어떤 것들이 있을까요?
- [ ] 리액트에서 컴포넌트, State, Props 등에 대한 Naming Convention은 어떻게 될까요?
- [ ] 리액트에서 특정 엘레먼트에 이벤트를 추가하려면 어떻게 해야 할까요? 이벤트 핸들러에 대한 Naming Convention은 어떻게 될까요?
- [ ] State, Props의 정의에 대해 조사해보세요.
- [ ] `useState`, `useEffect` 훅에 대해 조사해보세요.

<br>

### 과제 제출 후

- [ ] 사용자의 입력값을 다루는 것과 관련하여 제어 컴포넌트와 비제어 컴포넌트 각각의 특징은 무엇이며, 주로 사용되는 것은 어떤 것일까요?
- [ ] `useEffect`가 말하는 사이드 이펙트란 정확히 무엇일까요?
- [ ] JSX 내부에서는 왜 자바스크립트 표현식만 사용 가능할까요?
- [ ] 리액트 컴포넌트는 하나의 리액트 엘레먼트로 감싸 표현되어야 합니다. 왜 그럴까요?
- [ ] State와 일반 변수의 차이점은 무엇일까요?

<br>
<br>

## 📌 과제 구현사항 TODO

> 반드시 [Thinking in React](https://ko.react.dev/learn/thinking-in-react)에서 권장하는 진행 순서에 따라 작업하세요.
>
> 아래에 명시된 조건 이외에는 최대한 상식 선에서 구현해주세요.

<br>

> 🚨 Github API 요청이 많아지면 제한될 수 있습니다. 그럴 경우, `/utils` 디렉토리 내의 Mock JSON 파일을 활용하여 사용하세요.

<br>

### End to End(E2E) 테스트 실행

E2E 테스트를 통해 구현해야 하는 기능을 확인할 수 있습니다. E2E 테스트에 작성된 내용이 통과하도록 구현해주세요.

<br>

#### 1. 로컬 서버 실행

```sh
npm run dev # visit localhost:5173
```

<br>

#### 2. 테스트 실행

로컬 서버를 켜놓은 상태에서 새로운 터미널 창(혹은 탭)을 열어 아래 명령어를 실행해주세요.

```sh
npm run cypress # 혹은 npm run cypress:open
```

<br>

### [화면 1] 인기 저장소

- [ ] 사용자가 선택할 수 있는 언어가 주어져야 합니다. (`src/constants/languages.js` 참고)
- [ ] 사용자가 한 가지 언어를 선택할 수 있어야 합니다.
- [ ] 저장소 데이터를 가져오는 동안에는 Loading 컴포넌트가 화면에 보여져야 합니다.
- [ ] 사용자가 선택한 언어에 대한 인기 저장소가 나열되어야 합니다. (`/src/utils/api.js` 참고)
- [ ] 나열된 인기 저장소 목록은 각 인기 저장소에 대한 저장소 이름, 소유자, 깃헙 저장소 링크, 팔로워 수, 포크 수를 반드시 보여주어야 합니다.
- [ ] Github 대결 화면으로 이동할 수 있는 버튼이 있어야 합니다.

<br>

### [화면 2] Github 대결

- [ ] 정확히 2개의 Github 사용자 이름을 입력할 수 있는 입력 칸이 주어져야 합니다.
- [ ] 2개의 사용자 이름을 모두 입력하지 않은 경우, 대결을 진행할 수 없어야 합니다.
- [ ] 대결을 진행할 경우, 입력받은 2명의 Github 사용자 데이터를 비교하여 승자를 표기해야 합니다. (`/src/utils/api.js` 참고)
- [ ] 사용자 데이터를 가져오는 동안에는 Loading 컴포넌트가 화면에 보여져야 합니다.
- [ ] 승자 판별에 대한 연산이 완료된 후에는 화면에 각 사용자에 대해 아래와 같은 정보를 보여주어야 합니다.
  - 승패 여부
  - 프로필 사진
  - 점수
  - Github Username
  - 이름
  - 지역
  - Followers Count
  - Following Count
  - Repository Count

<br>

### 공통사항

- [ ] "인기 저장소"에서 "Github 대결"로 이동하여 대결 진행 후, 다시 "인기 저장소"로 돌아왔다가 "Github 대결"로 돌아간다면, 바로 이전에 진행했던 Github 대결 결과가 보여져야 합니다. (리액트 상태 이용)
- [ ] 클래스 기반 컴포넌트로 작업되어 있는 `<Loading />` 컴포넌트를 함수형 컴포넌트로 수정하세요.
- [ ] `utils/api.js`에 있는 `getRepos`와 `getProfile` 함수의 내용을 `fetch API`를 활용하여 개선해보세요.
- [ ] `utils/api.js`에는 최적화가 가능한 로직이 있습니다. 찾아보도록 하세요.
- [ ] `<Loading />` 컴포넌트에 대한 Unit Test를 추가하여 보완하세요. (`/spec/Loading.spec.js`)
  - 참고: [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)

<br>

---
![screencapture-github-vanillacoding-frontend-bootcamp02-w06-pull-3-2024-10-23-21_49_39](https://github.com/user-attachments/assets/9c4acf47-f337-4608-9a89-73a5a35a35b6)
