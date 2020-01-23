import React from 'react';
import Hello from './hello';
import Wrapper from './Wrapper';

function App() {
  return (   
    <>    
      <Wrapper>
        <Hello name="hansaem" color="red"/>
        <Hello color="green"/>
      </Wrapper>
    </>
  )
}

export default App;
