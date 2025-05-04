import React from 'react';
import { useFetchData } from './customHooks/fetchData';
const UseDebugValue = () => {
  console.log(useFetchData('https://jsonplaceholder.typicode.com/posts/1/comments')[0]);
  return (
    <>
      <h1>UseDebugValue hook - see dev-tools for label</h1>
    </>
  );
};

export default UseDebugValue;
