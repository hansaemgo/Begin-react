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
    - ** map : const square = n => n * n;
    - ** map : const squared = array.map(square);s
  
### 11. useRef로 컴포넌트 안의 변수 만들기 
    - useRef 특정DOM 선택 기능외 컴포넌트 안에서 조회 및 수정할수 있는 변수의 값을 관리할 수 있다.
    - useRef로 관리하는 변수는 값이 바뀐다고 해서 컴포넌트가 리렌더링 되지 않는다. 
    - setTimeout, 외부라이브러리에 의한 인스턴스, 스크롤 위치
    - 새 항목에서 추가할 고유 아이디값을 관리하기위한 용도
    - 배열에 변화를 줄때도 불변성을 지켜주어야 한다. push splice sort X
 
### 12. 배열에 항목 추가하기
    - 불변성을 지키면서 배열에 새 항목을 추가하는 방법 
        1. spred 연산자사용  setUsers([...users, user ]);
        2. concat사용   setUsers(users.concat(user));
   
### 13. 배열에 항목 제거하기
    - 불변성을 지키면서 특정원소를 배열에서 제거하기 위해서 filter사용 
    ex)  setUsers(users.filter(user=> user.id !== id));

### 14. 배열에 항목 수정하기
    - 배열의 불변성을 지키면서 배열을 업데이트 할때도 map 함수 사용
    - id값을 비교해서 id가 다르다면 그대로 두고 같다면 active 반전
  
### 15. useEffect를 사용하여 마운트/언마운트/업데이트시 할 작업설정
    - {useEffect} : 컴포넌트가 나타날때 사라질때 , 특정Props가 바뀔때, 특정 작업을 처리
    -  useEffect 첫번째 파라미터는 함수, 두번째 파라미터는 의존값이 들어있는 배열 [deps]
    -  비어있는 deps라면 컴포넌트가 처음에 나타날때만 함수호출
    -  함수 반환 => cleanup 함수 deps 비어있는 겅우 컴포넌트가 사라질때 cleanup 함수 호출
      
    -  마운트시 주 작업
        1. Props -> State (props 로 받은 컴포넌트의 로컬상태로 설정)
        2. 외부 API요청 (REST API)
        3. 라이브러리 사용 (D3, Video.js)
        4. setInterval을 통한 반복작업 또는 setTimeout을 통한 작업예약
   
    - 언마운트시 주 작업 
        1. setInterval, setTimeout을 사용하여 등록한 작업들 Clear하기
        2. 라이브러리 인스턴스 제거 
   
### 16. useMemo 사용하여 연산한 값 재사용 하기
    - useMemo 라는 Hook 사용하여 연산 값 재사용 가능 (성능최적화)
    - 예제문제점 : users에 변화가 있을때만 수를 세는 것이 아니라  input에 입력있을 때마다 호출하여 자원낭비 
    - 해결방법 : useMemo (이전에 계산한 값을 재사용)
    - 첫번째 파라미터 어떻게 연산하는지 정의하는 함수, 두번째 파라미터는 deps배열, 만약 deps 배열에 내용이 바뀌지 않았다면 이전에 연산한 값을 재사용
   
### 17. useCallback(Hook) 사용하여 함수 재사용하기
    - useCallback 은 특정 함수를 새로 만들지 않고 재e사용
    - 컴포넌트 Props가 바뀌지 않았으면 Virtual DOM 조차 새로 렌더링하지 않는 것이 최적화
    - 함수안에 사용하는 상태, Props가 있다면 deps안에 꼭 포함 해줘야 한다.
    - 최적화 되는 것 확인 위해서 React DevTool 사용

### 18. React.memo를 사용한 컴포넌트 리렌더링 방지
    - 컴포넌트의 리렌더링 최적화
    - Props가 바뀔때 리렌더링 (eqps에 users가 들어있기때문에 배열이 바뀔때마다 새로 리렌더링된다)
    - useState의 함수형 : setUsers에 등록하는 콜백함수의 파라미터에서 최선users를 참조할 수 있기 때문에 deps에 users넣지 않아도 된다.

### 19. useReducer Hook 사용하여 상태 업데이트 로직 분리
    - 이전까지 useState이용해서 상태 업데이트 useReducer를 사용하여 외부로 분리도 가능하며 다른파일에 작성 후 불러와서 사용 할 수도 있다.
    - userReducer {state, action} 현재상태와 액션을 파라미터로 받아와서 새로운 상태 반환
    - 액션객체 : 참조할때 쓰는 객체 (업데이를 위한 정보를 가지고 있다. 주로 type값을 지닌 객체형태)
    - dispatch : 액션을 발생시키는 함수, 주로 이런형태로 사용 => dispatch({ type: 'INCREMENT' })

### 20. App에서 useReducer 사용하기
    1. 사용 할 초기상태를 컴포넌트 밖에 선언 (const initialState = {...})
    2. App 컴포넌트 안에 모든 로직 지우기
    3. 내부의 Props 설정해 준것도 지운다 users배열은 임시로
    4. {useState} 삭제 {useReducer} 추가
    5. reducer 함수 만들기
    6. 비구조 할당을 통해 분해한후 props로 전달
    7. onChange 함수 구현 (useCallback사용, name과 value는 e.target값 받아옴 )
    8. 현재 상태에 따라 input에 있는 특정 값으로 변경하도록 redecer구현 
    9. onCreate 함수구현 (username, email 기존상태에 의존 => deps 넣어줘야함)
    10. nextId 값 관리(useRef) 기존에 3개 등록되어있으므로 기본값 4
    11. onToggle, onRemove 만들기
    - 값이 단순할때 useState 가 편리


### 21. Custom Hook만들어서 사용하기    
    - 컴포넌트를 만들 때, 반복되는 로직이 발생하는 경우 커스텀 Hook만들어서 재사용
    - custom Hook을 만들때는 보통 use라는 키워드로 시작하고 그 안에 함수작성.

### 22. Context API를 사용한 전역 값 관리   
    - 특정 함수를 여러개의 컴포넌트를  거쳐서 전달하는 작업을 줄이기 위함
    - Context 만들때 createContext(provider설정 안했을때 기본 값)
    - Context 안에 Provider 컴포넌트 사용시 value값 설정 ex) value='GOOD'
  
### 23. UserDispatch 만들어서 App 컴포넌트에 적용
    - onToggle, onRemove를 User컴포넌트에게 주기위해 UserList를 거쳐간다. 이과정 줄이기
    - 디스패치만 따로 넣어준다
    - 렌더링 하는 곳에서 UserDispatch.provider 사용 
    - Context API 를 사용해서 dispatch 를 어디서든지 조회해서 사용가능
