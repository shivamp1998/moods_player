import React, { useState, useEffect } from 'react';

const Component = () => {
  const [count, setCount] = useState(0);
  const [name, manas] = useState("manas")
  let cnt = 0;
  console.log('trigger')
  const handleCount = () => {
    setCount(count + 1);
    console.log(cnt) 
    cnt++;
    console.log(cnt)
  }
  useEffect(() => {
    // name="shivam"
  },[])
  
  return (
    <div>
    <h1> Hello {name}</h1>
    <button onClick={handleCount}> increment </button>
    <p>{count}</p>
    <p>{cnt}</p>
    </div>
  )  
}

export default Component;