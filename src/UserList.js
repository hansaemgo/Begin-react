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

function UserList() {
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
    return (
       <div>
           {users.map(
               user => (<User user={user} key={user.id} />)
           )}
       </div> 
    )
}


export default UserList;