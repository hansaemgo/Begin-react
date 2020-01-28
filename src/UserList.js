import React from 'react';

// 하나의 컴포넌트를 더 선언해준다 (props 로 user값을 받아온다)
function User({ user, onRemove}) {
    const {username, email, id} = user;
    return (
        <div>
            <b>{username}</b> <span>({email})</span>
            <button onClick = {() => onRemove(id)}> 삭제</button>
        </div> 
     );
}

function UserList ({ users, onRemove }) {
    return (
        <div>
            {
            // map 이용해 위에 객체배열 형태를 컴포넌트 엘리먼트 형태로 변환
             users.map (
                user => (<User user={user} key={user.id} onRemove={onRemove}/>)
                )
            }
        </div>
    );
}

export default UserList;