import React, { useRef, useState } from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';



function App() {

  const [inputs, setInputs] = useSteate({
    username : '',
    email: ''
  })

  const { username, email } = inputs;
  
  const onChange = e => {
    const {name, value} = e.target;
    setInputs({
      ...inputs,
      [name]:value
    });
  } ;

  const users = [
    {
        id : 1,
        username : 'hansaemgo',
        email : 'hansaemgo@gmail.com'
    },
    {
        id : 2,
        username : 'daehyungo',
        email : 'daehyungo@gmail.com'
    },
    {
        id : 3,
        username : 'hannago',
        email : 'hannago@gmail.com'
    }
];

  const nextId = useRef(4);

  const oncreate = () => {
    setinpus ({
        username : '',
        email: ''

    });

    console.log(nextId.current); // 4 
    nextId.current += 1;

  }

  return (    
    <>
    <CreateUser
      username={username}
      email={email}
      onChange={onChange}
      onCreate={onCreate}
    />
    <UserList users={users}/>
    </>
  )
}

export default App;
