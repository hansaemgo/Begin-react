import React, { useState, useRef } from 'react';

function InputSample () {
    const [inputs, setInputs] = useState({
        name : '',
        nickname : ''
    });

    const nameInput = useRef(); // 함수 호출

    const {name, nickname} = inputs; //비구조화 할당을 통해 값 추출
 
    const onChange = (e) => {
        const  { name , value } = e.target;
         // 1. e.target에서 name과 value를 추출
         // 2. console.log(e.target.name);  네임값
         // 3. console.log(e.target.value);  닉네임값 
        setInputs ({
           ...inputs,
           [name] : value,
        });
    };
    const onReset = () => {
        setInputs({
            name : '',
            nickname : '',
        });
        nameInput.current.focus();
    };
    return (
        <div>
            <input 
                name="name" 
                placeholder="이름" 
                onChange={onChange}
                value={name}
                ref={nameInput}
            />
            <input 
                name="nickname" 
                placeholder="닉네임" 
                onChange={onChange} 
                value={nickname}
            />
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값 : </b>
                {name} {nickname}
            </div>
        </div>
    );
}


export default InputSample;