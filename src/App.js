import React, { useRef } from 'react';
import UserList from './UserList';



function App() {
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

    console.log(nextId.current); // 4 
    nextId.current += 1;

  }

  return (    
   <UserList users={users}/>
  )
}

export default App;
