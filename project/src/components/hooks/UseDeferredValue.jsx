import React, { useState, useMemo, useDeferredValue } from 'react';

const UseDeferredValue = () => {
  const [name, setName] = useState('');
  const LIST_SIZE: number = 10000;
  // useDeferredValue is used to defer the value of name until the rendering is done similar to debouncing or throttling
  //const deferredName = useDeferredValue(name);

  const list = useMemo(() => {
    const newList: string[] = [];
    for (let i: number = 0; i < LIST_SIZE; i++) {
      newList.push(name);
    }
    return newList;
  }, [name]);

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
