import React, { useState, useMemo, useDeferredValue } from 'react';

const UseDeferredValue = () => {
  const [name, setName] = useState('');
  const LIST_SIZE: number = 10000;
  // useDeferredValue is used to defer the value of name until the rendering is done similar to debouncing or throttling
  // useDeferredValue is a hook that allows you to defer the value of a state variable until the rendering is done
  // This is useful for deferring updates to the UI until after a transition has completed, allowing for smoother user experiences
  // It returns a deferred value that can be used in the component
  //const deferredName = useDeferredValue(name);

  const list = useMemo(() => {
    const newList: string[] = [];
    for (let i: number = 0; i < LIST_SIZE; i++) {
      newList.push(name); // replace name with deferredName to see the difference
    }
    return newList;
  }, [name]); // replace name with deferredName to see the difference

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  return (
    <>
      <input type='text' value={name} onChange={handleChange} />
      {list?.map((item, index) => {
        return <p key={index}>{item}</p>;
      })}
    </>
  );
};

export default UseDeferredValue;
