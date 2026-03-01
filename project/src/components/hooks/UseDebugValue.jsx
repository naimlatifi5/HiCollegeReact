import React from 'react';
import { useFetchData } from './customHooks/fetchData';
const UseDebugValue = () => {
  console.log(useFetchData('bla')[0]);
  return (
    <>
      <h1>UseDebugValue hook - see dev-tools for label</h1>
    </>
  );
};

export default UseDebugValue;
