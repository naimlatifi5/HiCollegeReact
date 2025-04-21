import React, { useState, useTransition } from 'react';

const UseTransition = () => {
  const [name, setName] = useState('');
  const [nameTransition, setNameTransition] = useState('');
  const [lists, setLists] = useState([]);
  const [isPending, startTransition] = useTransition();
  const LIST_SIZE = 20000;

  const handleChange = e => {
    setName(e.target.value);
    const newList = [];
    // Simulate a heavy computation
    for (let i = 0; i < LIST_SIZE; i++) {
      newList.push(e.target.value);
    }
    setLists(newList);
  };

  const handleChangeWithTransition = e => {
    setNameTransition(e.target.value);
    const newList = [];
    for (let i = 0; i < LIST_SIZE; i++) {
      newList.push(e.target.value);
    }
    startTransition(() => {
      setLists(newList);
    });
  };

  return (
    <>
      <h1>UseTransition hook</h1>

      <input type='text' value={name} onChange={handleChange} />
      <h2>UseTransition to show loading state</h2>
      <input type='text' value={nameTransition} onChange={handleChangeWithTransition} />
      {isPending ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {lists.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </>
  );
};

export default UseTransition;
