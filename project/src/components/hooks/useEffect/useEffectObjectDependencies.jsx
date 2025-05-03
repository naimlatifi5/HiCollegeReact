import React, { useState, useEffect, useMemo } from 'react';

const UseEffectWithObjectDependencies = () => {
  const [count, setCount] = useState(0);

  // retrigger whenever property has changed
  useEffect(() => {
    console.log('count', count);
    // setCount((prevCount) => prevCount + 1);
  }, [count]);

  // object array recreated on every render
  useEffect(() => {
    console.log('object', { count });
  }, [{ count }]);

  useEffect(() => {
    console.log('Runs every render!', { count });
  }, [{ count: '1' }]); // ❌ BAD: new object every time

  // we will come back to this and learn more about that but think of it as a way to memoize the object
  // and avoid creating a new object every time
  const memoizedObject = useMemo(() => ({ count: '1' }), []);

  useEffect(() => {
    console.log('Runs only once!'); //✅ Good practice
  }, [memoizedObject]);

  return (
    <>
      <button type='button' onClick={() => setCount((prevCount) => prevCount + 1)}>
        Update Me {count}
      </button>
    </>
  );
};
export default UseEffectWithObjectDependencies;
