import React from 'react';

// 하나의 컴포넌트를 더 선언해준다 (props 로 user값을 받아온다)
function User({ user, onRemove, onToggle}) {
    const {username, email, id, active } = user;
    return (
        <div>
            <b 
                style={{
                    color: active ? 'green' : 'black',
                    cursor : 'pointer'
                }}
                onClick={() => onToggle(id)}
            >
                {username}
            </b> 
            <span>({email})</span> &nbsp;
            <button onClick = {() => onRemove(id)}>삭제</button>
        </div> 
     );
}

function UserList ({ users, onRemove, onToggle }) {
    return (
        <div>
            { users.map (user => (
                <User 
                    user={user} 
                    key={user.id} 
                    onRemove={onRemove} 
                    onToggle={onToggle}
                />
            ))}
        </div>
    );
}

export default UserList;