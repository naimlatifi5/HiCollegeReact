import React, { useState, useTransition } from 'react';

const UseTransition = () => {
  // useTransition is a hook that allows you to mark updates as transitions
  // This is useful for deferring updates to the UI until after a transition has completed, allowing for smoother user experiences
  // It returns an array with two elements: isPending and startTransition
  // isPending is a boolean that indicates whether the transition is in progress
  // startTransition is a function that you can call to mark an update as a transition
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

  console.log('isPending:', isPending);
  return (
    <>
      <h1>UseTransition hook</h1>
      <p>Counter: {counter}</p>
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
