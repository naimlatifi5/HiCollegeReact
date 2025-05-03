import React, { useState } from 'react';
const UseState = () => {
  // it accepts an initial state and returns an array with two elements: the current state and a function to update it.
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>UseState hook</h1>
      <p>Counter {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  );
};
export default UseState;
