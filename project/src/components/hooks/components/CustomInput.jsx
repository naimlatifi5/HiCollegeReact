import React, { useRef, useImperativeHandle, forwardRef } from 'react';

const CustomInput = (props, ref) => {
  const customInput = useRef(null);
  // useImperativeHandle customizes the instance value that is exposed to parent components when using ref
  // It takes a ref, a function that returns an object containing the values you want to expose, and an array of dependencies
  // The function will be called when the parent component calls the ref
  // The dependencies array is optional, if you pass an empty array, the function will only be called once when the component mounts
  useImperativeHandle(
    ref,
    () => ({
      focus: () => {
        customInput.current.style.backgroundColor = 'rgb(193 192 192)';
        customInput.current.style.color = '#fff';
      },
    }),
    [],
  );
  return <input ref={customInput} {...props} placeholder='type here...' />;
};
export default forwardRef(CustomInput);
