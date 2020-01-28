import React from 'react';

// onChange - input값 바뀔때 처리되는 함수
// onCreate - 버튼을 눌렀을때 새로운 항목 등록해주는 함수
function CreateUser ({ username, email, onChange, onCreate}) { // 총 4개프롭스
    return(
        <div>
            <input 
                name="username" 
                placeholder="계정명"
                onChange={onChange}
                value={username}    
            />
            <input
                name="email" 
                placeholder="이메일"
                onChange={onChange}
                value={email}   
            />
            <button onClick={onCreate}>등록</button>
        </div>
    );
}

export default CreateUser;