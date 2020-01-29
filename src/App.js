import React, { useRef, useState, useMemo, useCallback } from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';


function countActiveUsers(users){
  console.log('활성사용자 수를 세는중...');
  return users.filter(user => user.active).length;
}

function App() {
  const [inputs, setInputs] = useState({    //사용할 상태 설정
    username : '',
    email :  '',
  }); 

  const { username, email } = inputs;
  
  const onChange = useCallback( e => {
    const { name, value } = e.target;
    setInputs (inputs => ({
      ...inputs,
      [name] : value
    }));
  }, []);

  // useState로 감싸서 컴포넌트의 성태로서 관리할수 있도록 한다
  const [ users, setUsers ] = useState([         
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
]);

const nextId = useRef(4); // 어떠한 변수를 계속 기억하고 싶을때

const onCreate = useCallback(() => {
  const user = {
    id : nextId.current,
    username , 
    email
  };

  // 불변성을 지키면서 배열에 새 항목을 추가하는 방법 
  // 1. spread연산자사용
  // 2. concat 사용
  setUsers(users => users.concat(user));
  setInputs({
    username : '',
    email: ''
  });
  // console.log(nextId.current);
  nextId.current += 1;
}, [username, email]);

  const onRemove = useCallback(id => {
    // user.id 가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듬
    // = user.id 가 id 인 것을 제거함
    setUsers(users => users.filter(user => user.id !== id));
  }, []);
  
  const onToggle = useCallback(id => {
    setUsers(users => users.map(
      user => user.id === id ? { ...user, active: !user.active } : user 
      )
    );
  }, []);

  const count = useMemo(() => countActiveUsers(users), [users] );

  return( 
    <>
    <CreateUser 
        username={username} 
        email={email}
        onChange={onChange}
        onCreate={onCreate}
    />
    <UserList users={users} onRemove={onRemove} onToggle={onToggle}/>
    <div>활성 사용자 수 : {count} </div>
    </>
  );
}

export default App;
