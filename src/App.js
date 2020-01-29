import React, { useReducer, useCallback, useRef, useMemo } from 'react';
// 4. useReducer - {useState} 삭제 {useReducer} 추가
import UserList from './UserList';
import CreateUser from './CreateUser';

function countActiveUsers(users){
  console.log('활성사용자 수를 세는중...');
  return users.filter(user => user.active).length;
}

// 1. useReducer - 사용 할 초기상태를 컴포넌트 밖에 선언
const initialState = {
  inputs : {
    username : '',
    email :  '',
  },
  users : [         
    {
        id : 1,
        username : 'hansaemgo',
        email : 'hansaemgo@gmail.com',
        active: true
    },
    {
        id : 2,
        username : 'daehyengo',
        email : 'daehyengo@naver.com',
        active : false
    },
    {
        id : 3,
        username : 'hannago',
        email : 'hannago@gmail.com', 
        active : false
    }
  ]
}

// 5-1. useReducer - reducer 함수 만들기
function reducer(state, action) {

  // 8. useReducer - 현재 상태에 따라 input에 있는 특정 값으로 변경하도록 구현
  // 'CHANGE_INPUT 이라는 액션 객체를 사용하여 inputs 상태 업데이트 시켜주기 
  switch (action.type) {
    case 'CHANGE_INPUT':
      return {
        ...state,
        inputs : {
          ...state.inputs,
          [action.name] : action.value
        }
      };
      case 'CREATE_USER':
        return {
          inputs : initialState.inputs,
          users : state.users.concat(action.user)
        }
        // 11. useReducer - onToggle, onRemove 만들기
        case 'TOGGLE_USER':
          return {
            ...state,
            users : state.users.map( user => 
              user.id === action.id ? { ...user, active: !user.active} : user
              )
          };
          case 'REMOVE_USER' :
            return {
              ...state,
              users : state.users.filter( user => user.id !== action.id)
            }
      default : 
        // return state; or
        throw new Error ('Unhandled action');
  }
}

// 2. useReducer - App 컴포넌트 안에 모든 로직 지우기
function App() {

  // 5-2. userRducer - 함수만들기
  const [state, dispatch] = useReducer(reducer, initialState);

  // 10. nextId 값 관리(useRef) 기존에 3개 등록되어있으므로 기본값 4
  const nextId = useRef(4);

  // 6. userRducer - 비구조 할당을 통해 작성 후 Props로 전달
  const { users } = state;
  const { username, email} = state.inputs;

  // 7. useReducer - onChange 함수 구현 
  const onChange = useCallback (e => {
    const {name, value} = e.target;
    dispatch({
      type : 'CHANGE_INPUT',
      name,
      value
    })
  }, []);

  //9. useReducer - onCreate함수구현 기존상태의존하는 것이 있으므로 deps 넣어줘야함
  const onCreate = useCallback(() => {
    dispatch({ 
      type : 'CREATE_USER',
      user : {
        id : nextId.current,
        username,
        email,
      } 
    })
    nextId.current += 1;
  }, [username, email])


  // onToggle , onRemove 둘다 deps 필요 없다 한번만들어서 재사용 가능 
  const onToggle = useCallback ( id => {
    dispatch({
      type : 'TOGGLE_USER',
      id

    })
  }, [])

  const onRemove = useCallback (id => {
    dispatch({
      type : 'REMOVE_USER',
      id
    })
  }, [])



const count = useMemo(() => countActiveUsers(users), [users]);


  // 3. userReducer - 내부의 Props 설정해 준것도 지운다 users배열은 임시로
  return( 
    <>
    <CreateUser 
      username={username} 
      email={email} 
      onChange={onChange}
      onCreate={onCreate}
    />
    <UserList 
      users={users}
      onToggle={onToggle}
      onRemove={onRemove}
    />
    <div>활성 사용자 수 : {count} </div>
    </>
  );
}

export default App;
