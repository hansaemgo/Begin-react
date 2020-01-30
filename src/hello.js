// import React from 'react';


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
// function Hello({color, name, isSpecial}) {

//     return (
//         <div style = {{
//             color
//             }}>
//             {/* {isSpecial ? <b>*</b> : null} */}
//             {isSpecial ? <b>스페셜하다 </b> : <b>낫스페셜하다 </b>}
//             {isSpecial && <b>**</b>}
//             안녕하세요 {name}
//         </div>
//         );
//     }
    
//     Hello.defaultProps = {
//         name : '이름없음'
//     };

//     export default Hello;


// Class형 컴포넌트 만드는 방법

import React, { Component } from 'react';

class Hello extends Component {
    // class형 컴포넌트 defaulprops 지정해주는 방식
    static defaultProps = {
        name : '이름없음',
    };
    
    render () {
        const { color, isSpecial, name } = this.props;
        return (
            <div style = {{ color }}>
                {isSpecial && <b>*</b>}
                안녕하세요 {name}
            </div>
        )
    }

}


// Hello.defaultProps = {
//     name: '이름없음'
//   };

  
  export default Hello;

    
