import React from 'react';

// 하나의 컴포넌트를 더 선언해준다 (props 로 user값을 받아온다)
function User({user}) {
    return (
        <div>
            <b>{user.username}</b> <span>({user.email})</span>
        </div> 
     );
}

function UserList ({users}) {


    // map 이용해 위에 객체배열 형태를 컴포넌트 엘리먼트 형태로 변환
    return (
        <div>
            {
             users.map (
                user => (<User user={user} key={user.id} />)
                )
            }
        </div>
    );
}

export default UserList;