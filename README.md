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

### 04. props
    -  properties의 줄임말 어떤 값을 컴포넌트에게 전달 해 줘야할때 props 사용
    -  name
        1. 렌더링시 name 이라는 값을 전달 해 주고 싶다면 <hello name="hansaem">
        2. hello 컴포넌트에서 props로 받아온다 ex)function hello(props)
        3. {props.name}으로 조회
    - color
        1. App.js 에서 color 값을 설정 <hello name="hansgaem" color="red">
        2. hello 컴포넌트에서 color 값을 조회 <div style= {{color: props.color}}>
        3. {{객체}객체를 감싸는 중괄호}
    - 비구조화 할당(구조분해) - {color, name}을 먼저 추출하여 props.을 중복입력하지 않아도 된다.
    - 프롭스를 지정하지 않았을 때 기본적으로 사용 할 값 정하는 방법 : defaultProps = '...' 
    - props.children
        1. 컴포넌트 태그와 태그 사이에 넣은 값을 조회할때 사용
        2. Wrapper({ children }) 프롭스로 받아와서 조회

### 05. 조건부 렌더링
    - 특정 조건이 참인지 거짓인지에 따라 다른 결과물을 렌더링 하는 것
        1. 가장 기본적인 방법으로 삼항연산자 사용 ex)isSpecial = {true} 자바스크립트 값이기 때문에 중괄호로 감싸줘야 한다.
        2. null, false, undefined = 아무것도 안나타난다. 그러나 0은 그대로 나타난다. 
        3. 특정조건에 따라 보여줘야하는 내용이 다를때 보통 삼항연산자 사용
        4. true와 false만 구분해야 하는 경우는 && 등 논리 연산자 
        5. isSpecial = {true}의 경우 true 생략하면 기본값 true

### 06. useState를 통한 동적 상태관리
    - Hook은 React 16.8에 새로 추가된 기능으로 클래스를 작성하지 않고도 state와 다른 React의 기능을 사용할수 있게 해준다. (하위 호환성이 있음) 
    - 후크를 사용하여 구성요소 계층 구조를 변경하지 않고 상태 저장 논리를 재사용 할 수 있다.
    - 사용자 인터랙션(상호작용)에 따라 값이 바뀔때, 구현하는 방법 
  
    - useState
        1. 리액트 Hooks 중 하나
        2. 함수형 컴포넌트에서 상태관리 가능 바뀌는 값을 관리 할 수 있다. 
        3. 상단에서 {useState}불러오기
        4.  const [number, setNumber] = useState(0); 첫번째 원소:number,  두번째 원소:setNumber
        5.  setNumber : 현재상태를 업데이트 하는함수 setNumber(); 
        6.  setNumber(prevNumber => PrevNumber +1 ):값을 업데이트하는 함수를 넣어주어 최적화시킴
   
    - Counter.js
        1. 화면에 표시되는 UI 만들고 expor 후 App에서 렌더링
        2. Counter 컴포넌트에서 onIncrease, ondecrease 버튼 클릭 이벤트 연걸
        3. 버튼에 onClick이벤트 설정시 함수호출하는 것이 아니다 onClick={onIncrease()} X
   
### 07. input 상태 관리하기
    -  onChange 이벤트를 사용하여 input박스가 비워지도록 한다.
    -  ohChange = (e) 이벤트 객체 e를 파라미터로 받아와서 사용 (e.target.value)는 이벤트가 발생한 DOM 객체인 input에 입력된 내용이다.
    -  e.target.value를 를 조회하면 현재 input에 입력한 값이 무엇인지 알수 있다
    -   onReset 과 초기화 버튼 연결하여 빈칸으로 만들어 줄 수 있게 한다.
    
### 08. 여러개의 Input 관리하기
    - useState, onChange를 많이 사용해서 관리하는 것이 좋지않다.
    - input에 name 이라는 값 넣고 이벤트 발생시 값 참조
    - name/nickname 비구조할당
    - 리액트에서 객체 업데이트시 기존으 객체먼저 복사해야한다 불변성의 법칙
    - ...inputs 스프레드 문법  

### 09. useRef 로 특정 DOM 선택하기
    - DOM을 직접 선택해야 하는 경우 사용 
    - ex) 특정 엘리먼트 선택, 스크롤바 위치, 포커스 설정
    - useRef()를 사용하여 Ref 객채를 만들고 선택하고 싶은 DOM에 ref값 설정 
    - Ref 객체의 .current 값은 값은 우리가 원하는 DOM을 가르킨다.

### 10. 배열 렌더링 하기
    - 배열의 수만큼 복사해서 보여주기(비효율적방법)
    - 하나의 컴포넌트에 두개의 컴포넌트도 상관 없음 
    - 고정적이지 않은 배열을 염두해 배열의 내장함수 map사용
    - 배열을 렌더링 할 때에는 key (고유값)라는 props 를 설정
  
### 11. useRef로 컴포넌트 안의 변수 만들기 
    - useRef 특정DOM 선택 기능외 컴포넌트 안에서 조회 및 수정할수 있는 변수의 값을 관리할 수 있다.
    - useRef로 관리하는 변수는 값이 바뀐다고 해서 컴포넌트가 리렌더링 되지 않는다. 
    - setTimeout, 외부라이브러리에 의한 인스턴스, 스크롤 위치
    - 새 항목에서 추가할 고유 아이디값을 관리하기위한 용도

### 12. 