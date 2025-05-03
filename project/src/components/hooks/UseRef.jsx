import React, { useEffect, useRef, useState } from 'react';

const UseRef = () => {
  // useRef returns a mutable ref object whose .current property is initialized to the passed argument (initialValue). The returned object will persist for the full lifetime of the component.
  // useRef is like a box that can hold a value and it doesn't cause the component to re-render when the value changes
  // useRef is used to access a DOM element directly
  const inputElement = useRef();
  const [text, setText] = useState('');
  // const [count, setCount] = useState(0);
  const renderCountWithRef = useRef(0);

  useEffect(() => {
    // using state to increment value
    // setCount(count + 1) // it renders and renders and renders - infinity loop common scenario with this is when you have a button and click on that to icrement state, this example is just for the porpose of showing how can you run in infinite loop with useState inside useEffect
    renderCountWithRef.current = renderCountWithRef.current + 1;
  });

  const handleFocusInput = () => {
    inputElement.current.focus();
    // console.dir(inputElement.current);
  };

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  return (
    <>
      <h1>UseRef hook</h1>
      <h2>UseRef to focus an input</h2>
      <input type='text' ref={inputElement} />
      <br />
      <br />
      <button type='button' onClick={handleFocusInput}>
        Focus the input
      </button>
      <br />
      <h2>Refs persist the data and doesn't render the whole component</h2>
      <div>{text}</div>
      <input type='text' onChange={handleInputChange} />

      {/* <p>I rendered {count} times - with state</p> */}
      <p>I rendered {renderCountWithRef.current} times - with ref</p>
    </>
  );
};

export default UseRef;
