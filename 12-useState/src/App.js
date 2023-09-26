import React, { useState } from 'react';
import './App.css';

const App = () => {

  const [count , setCount] = useState(0);  
  const IncNum = () => {
    setCount(count+1);
    console.log('clicked');
  }
  return(
    <>
    <div className='container'>
     <h1> {count} </h1>
     <button className='btn' onClick={IncNum}> Click Me</button>
    </div>
    </>
  );
};
export default App;