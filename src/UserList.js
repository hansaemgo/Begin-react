import React, { useEffect } from 'react';


// 하나의 컴포넌트를 더 선언해준다 (props 로 user값을 받아온다)
function User({ user, onRemove, onToggle}) {
    const {username, email, id, active } = user;
    // useEffect(() => {
    //     console.log('컴포넌트가 화면에 나타남');
    //     return () => {
    //         console.log('컴포넌트가 화면에서 사라짐');
    //     }
    // }, [deps]);

    useEffect (() => {
        console.log('user값이 설정됨');
        console.log(user);
        
        return () => {
        // 뒷정리 함수 (Cleanup 함수)
            console.log('user값이 바뀌기 전');
            console.log(user); 
        }
        // deps를 어떻게 설정하느냐에 따라 값이 바뀌기 전, 바뀐 후에도 호출이 된다.
    }, [user]); 

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