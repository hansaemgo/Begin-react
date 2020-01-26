import React from 'react';

// 하나의 컴포넌트를 더 선언해준다 (props 로 user값을 받아온다)
function User({ user }) {
    return (
        <div>
            <b>{user.username}</b>
            <span>({user.email})</span>
        </div>
    )
}

function UserList({users}) {
  
    return (
       <div>
           {users.map(
               user => (<User user={user} key={user.id} />)
           )}
       </div> 
    )
}


export default UserList;