import React, { useState, useCallback } from 'react';
import ParentComponent from './ParentChildUseCallback/Parent';

const UseCallbackComponent = () => {
  // demo- to demostrate click the button Increment by 2 - cached to see how the set is increment only by one since numberWithCallback dependacy is updated
  return (
    <>
      <h1>UseCallback hook</h1>
      <hr />
      <ParentComponent />
    </>
  );
};
export default UseCallbackComponent;
