import React, { useContext } from 'react';
import { UserDispatch } from './App'; 


// 하나의 컴포넌트를 더 선언해준다 (props 로 user값을 받아온다)
// React.memo로 리렌더링 최적화 
const User = React.memo(function User({ user}) {
    const {username, email, id, active } = user;
    const dispatch = useContext(UserDispatch)

    return (
        <div>
            <b 
                style={{
                    color: active ? 'green' : 'black',
                    cursor : 'pointer'
                }}
                onClick={() => dispatch({
                    type : 'TOGGLE_USER',
                    id
                })}
            >
                {username}
            </b> 
            <span>({email})</span> &nbsp;
            <button onClick = {() => dispatch({
                type : 'REMOVE_USER',
                id
            })}>삭제</button>
        </div> 
     );
});

function UserList ({ users}) {
    return (
        <div>
            { users.map (user => (
                <User 
                    user={user} 
                    key={user.id} 
                />
            ))}
        </div>
    );
}

export default React.memo(UserList, (prevProps,nextProps) => prevProps.users === nextProps.users);