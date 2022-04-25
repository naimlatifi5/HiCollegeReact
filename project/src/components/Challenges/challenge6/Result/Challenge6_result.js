import React, { useRef, useState, useEffect } from "react";

const Challenge6 = () => {
  const inputRef = useRef();
  const [isFocused, setIsFocused] = useState(false);
  const previousInputValue = useRef("");

  const focus = () => {
    inputRef.current.focus();
    setIsFocused(true);
  };
  const blur = () => {
    inputRef.current.blur();
    setIsFocused(false);
  };

  useEffect(() => {
    previousInputValue.current = isFocused;
  }, [isFocused]);

  return (
    <div>
      <h1>
        Challenge6 - First Create 2 buttons, one triggers focus effect on the
        input, the other triggers unfocus/blur effect the input. Then, while
        clicking on the button, it will show messages about the current and
        previous values of "isFocused" state.
      </h1>
      <input ref={inputRef} value="" />
      <button onClick={focus}> Focus Me</button>
      <button onClick={blur}> Blur Me </button>
      <p>Current Value:{isFocused ? "true" : "false"}</p>
      <p>Previous Value:{previousInputValue.current ? "true" : "false"}</p>
    </div>
  );
};

export default Challenge6;
