import React from "react";
import { useState, useEffect } from "react";

function App(){
  const [count, setCount] = useState(0);
  const [multiple, setMultiple] = useState(1);

  function handleCount(){
    setCount(count+1);
  }

  function handleMultiple(){
    setMultiple(multiple*2);
  }

  useEffect(() => {
    alert("Count has been incremented!");
  }, [count]);

  useEffect(() => {
    alert("Multiple has been doubled!");
  }, [multiple]);
  
  return (
    <div>
      <p>Multiple: {multiple}</p>
      <p>Count: {count}</p>
      <button onClick={handleCount}>Increment Count</button>
      <button onClick={handleMultiple}>Double Multiple</button>
    </div>
  );
}

export default App;