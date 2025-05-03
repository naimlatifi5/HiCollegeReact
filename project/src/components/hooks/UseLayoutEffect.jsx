import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';

const UseLayoutEffectHook = () => {
  const [width, setWidth] = useState(0);
  const boxRef = useRef();

  // order of useEffect matters but now we will take example with useLayoutEffect and se how this is rendered before components is rendered
  useEffect(() => {
    console.log('==== USE FIRST EFFECT RENDERED ==== ');
  });
  useEffect(() => {
    console.log('==== USE SECOND EFFECT RENDERED ==== ');
  });

  useEffect(() => {
    console.log('==== USE EFFECT RENDERED === ');
  });

  // IT IS TRIGGERED SYNCHRONOUSLY BEFORE DOM IS ON PLACE COMPARED TO USEFFECT IT IS CALLED AFTER DOM IS ON PLACE
  useLayoutEffect(() => {
    console.log('=== USE LAYOUT EFFECT RENDERED === ');
  });

  // LayoutEffect: runs *before* the browser paints
  useLayoutEffect(() => {
    const box = boxRef.current;
    if (box) {
      const boxWidth = box.getBoundingClientRect().width;
      console.log('✅ useLayoutEffect: Box width =', boxWidth);
      setWidth(boxWidth);
    }
  }, []);

  //  useEffect(() => {
  //    const box = boxRef.current;
  //    if (box) {
  //      const boxWidth = box.getBoundingClientRect().width;
  //      console.log('useEffect: Box width =', boxWidth);
  //      setWidth(boxWidth);
  //    }
  //  }, []);

  // Effect: runs *after* the browser paints
  useEffect(() => {
    console.log('🎨 useEffect: DOM painted');
  }, []);

  return (
    <>
      <h1>UseLayoutEffect hook</h1>
      <div
        ref={boxRef}
        style={{
          width: '50%',
          height: '100px',
          backgroundColor: 'lightblue',
          marginBottom: '10px',
        }}
      />
      <p>Width measured by useLayoutEffect: {width}px</p>
    </>
  );
};

export default UseLayoutEffectHook;
