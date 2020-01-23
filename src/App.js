import React from 'react';
import Hello from './hello';
import './App.css';

function App() {
  const name = 'hansaemgo';
  const style = {
    backgroundColor : 'black',
    color: 'aqua',
    fontSize : 24,
    padding : '1rem'
  };
  return ( 
    <>                 
      <div className="App">
        <Hello/>
        {/*중괄호로 감싸서 변수의 값 보여주기 */}
        <div style={style} >{name}</div>   
        <div className="gray-box"></div> 
      </div>
    </>
  );
}

export default App;
