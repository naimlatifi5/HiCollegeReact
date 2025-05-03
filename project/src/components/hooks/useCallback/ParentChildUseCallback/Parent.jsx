import React, { useState, useCallback } from 'react';
import ChildComponent from './Child';

const ParentComponent = () => {
  const [num, setNum] = useState(0);
  const [toggle, setToggle] = useState(false);
  // uncomment to see how addByFive is running every time we toggle

  // const addByFive = () => {
  //   console.log('I am running!');
  //   return num + 5;
  // };

  // useCallback will memoize the function and only re-create it when the dependencies change
  // in this case, it will only re-create when the num state changes
  // this is useful when you have a lot of data and you want to avoid re-creating the function every time
  const addByFive = useCallback(() => {
    console.log('I am running!');
    return num + 5;
  }, [num]);

  return (
    <>
      Count: {num}
      <br />
      <button
        onClick={() => {
          setNum(num + 5);
        }}>
        Update Number
      </button>
      <br />
      <br />
      <br />
      Toggle value: {JSON.stringify(toggle)}
      <br />
      <button
        onClick={() => {
          setToggle((toggle) => !toggle);
        }}>
        Toggle the light
      </button>
      <br />
      <br />
      <br />
      <ChildComponent someFunc={addByFive} />
    </>
  );
};

export default ParentComponent;
