import React, { useEffect, useRef, useState } from 'react';

const UseRef = () => {
  const inputElement = useRef();
  // const [count, setCount] = useState(0);
  const [text, setText] = useState('');
  const renderCountWithRef = useRef(0);

  // we can get previous state without causing the component to render
  const [name, setName] = useState('');
  const previousName = useRef('hej');

  useEffect(() => {
    // using state to increment value
    // setCount(count + 1) // it renders and renders and renders - infinity loop common scenario with this is when you have a button and click on that to icrement state, this example is just for the porpose of showing how can you run in infinite loop with useState inside useEffect
    renderCountWithRef.current = renderCountWithRef.current + 1;
  });

  useEffect(() => {
    console.log('I have rendered because name has changed');
    previousName.current = name;
  }, [name]);

  const handleFocusInput = () => {
    inputElement.current.focus();
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

      <h2>Save previous state example with refs</h2>
      <input type='text' onChange={(e) => setName(e.target.value)} />
      <div>
        Name is {name} and previousName is {previousName.current}
      </div>
    </>
  );
};

export default UseRef;
