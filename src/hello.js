import React from 'react';


// function Hello(props) {

// return <div style = {{
//     color: props.color
// }}>안녕하세요 {props.name}</div>;
// }

// export default Hello;


// 비구조화 할당
    // function Hello({color, name}) {

    //     return <div style = {{
    //         color
    //     }}>안녕하세요 {name}</div>;
    //     }
        
    //     Hello.defaultProps = {
    //         name : '이름없음'
    //     };

    //     export default Hello;
        



// 조건부 렌더링 (삼항연산자 사용)
function Hello({color, name, isSpecial}) {

    return (
        <div style = {{
            color
            }}>
            {/* {isSpecial ? <b>*</b> : null} */}
            {isSpecial ? <b>스페셜하다 </b> : <b>낫스페셜하다 </b>}
            {isSpecial && <b>**</b>}
            안녕하세요 {name}
        </div>
        );
    }
    
    Hello.defaultProps = {
        name : '이름없음'
    };

    export default Hello;
    
