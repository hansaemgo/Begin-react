## React 연습 

### 01. 작업환경 설정 
    1. Node.js / Yarn / Editor 설치
    2. 터미널 ( node --version , yarn --version ) 확인
    3. 폴더 경로 찾아가서 ( yarn global add create-react-app )
    4. npx create-react-app (폴더이름 ) 현재는 begin-react
    5. 열어서 src/hello.js 만들기
    6. imr 눌러서 React import;


### 02. 컴포넌트 만들기 (함수로 자성)
    - 방법은 두가지 ( 클래스 형태, 함수형태)
    - 컴포넌트 이름은 대문자, 카멜표기법
    - App.js 에서 불러올때 hello import 시켜야 한다.
  
### 03. JSX
    - 액트에서 생김새를 정의할 때, 사용하는 문법
    - 규칙
        1. 태그는 꼭 닫혀있어야 한다.
        2. selfclosing Tag (ex) <input/>
        3. 두개이상의 태그는 하나의 태그로 감싸져있어야 한다. (프래그먼트) <></>
        4. 괄호는 가독성을 위한 부가적인 것이다. 
    - JSX 내부에서 javascript 값을 사용할때는 { } 로 감싸서 보여준다
    - style
        1. 객체 형태로 작성 ex) const style = { ... }
        2. camelCase 사용 ex) backgroundColor
        3. 기본단위 PX, 다른단위 사용시 문자열로 사용, 값뒤에 콤마
    - class  
        1. className 으로 설정을 해야한다
        2. App.js 에서 import 하여 사용한다
    - 주석은 중괄호로 감싸서 표시한다.
   

