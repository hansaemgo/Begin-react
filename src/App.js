import React, { useRef, useState } from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';


function App() {
  const [inputs, setInputs] = useState({    //사용할 상태 설정
    username : '',
    email :  '',
  }); 

  const { username, email } = inputs;
  
  const onChange = e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name] : value
    });
  };

  // useState로 감싸서 컴포넌트의 성태로서 관리할수 있도록 한다
  const [ users, setUsers ] = useState([         
    {
        id : 1,
        username : 'hansaemgo',
        email : 'hansaemgo@gmail.com'
    },
    {
        id : 2,
        username : 'daehyengo',
        email : 'daehyengo@naver.com'
    },
    {
        id : 3,
        username : 'hannago',
        email : 'hannago@gmail.com'
    }
]);

const nextId = useRef(4); // 어떠한 변수를 계속 기억하고 싶을때

const onCreate = () => {
  const user = {
    id : nextId.current,
    username , 
    email
  };

  // 불변성을 지키면서 배열에 새 항목을 추가하는 방법 
  // 1. spread연산자사용
  // 2. concat 사용
  setUsers([...users, user ]);
  setInputs({
    username : '',
    email: ''
  });
  console.log(nextId.current); //4
  nextId.current += 1;
};

  const onRemove = id => {
    // user.id 가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듬
    // = user.id 가 id 인 것을 제거함
    setUsers(users.filter(user=> user.id !== id));
  }



  return( 
    <>
    <CreateUser 
        username={username} 
        email={email}
        onChange={onChange}
        onCreate={onCreate}
    />
    <UserList users={users} onRemove={onRemove}/>
    </>
  );
}

export default App;
