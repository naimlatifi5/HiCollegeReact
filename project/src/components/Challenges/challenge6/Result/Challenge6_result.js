import React, { useRef } from "react";

const Challenge6 = () => {
  const inputRef = useRef();

  const focus = () => {
    inputRef.current.focus();
  };
  const blur = () => {
    inputRef.current.blur();
  };
  return (
    <div>
      <h1>
        Challenge6 - Create 2 buttons, one triggers focus effect on the input;
        the other triggers unfocus/blur effect the input
      </h1>
      <input ref={inputRef} value="" />
      <button onClick={focus}> Focus Me</button>
      <button onClick={blur}> Blur Me </button>
    </div>
  );
};

export default Challenge6;
