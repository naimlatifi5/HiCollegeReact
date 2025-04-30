import React, { useState, useTransition } from 'react';

const UseTransition = () => {
  const [isPending, startTransition] = useTransition();
  const [data, setData] = useState(null);
  const [counter, setCounter] = useState(1);

  const fetchData = async () => {
    // Simulate an API call
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${counter}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error('Error fetching data:', error);
      return;
    }
  };

  const handleButtonClick = () => {
    startTransition(() => {
      fetchData(); // Mark this as a transition
    });
    setCounter((prev) => prev + 1);
  };

  return (
    <>
      <h1>UseTransition hook</h1>
      <button onClick={handleButtonClick} disabled={isPending}>
        Fetch Data
      </button>
      {isPending ? (
        <p>Loading...</p>
      ) : (
        <>
          <p>{data?.title}</p>
        </>
      )}
    </>
  );
};

export default UseTransition;
