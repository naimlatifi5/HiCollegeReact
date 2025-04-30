import React, { useOptimistic, useState, useTransition } from 'react';
const UseOptimisticFunc = () => {
  const [todos, setTodos] = useState([]);
  const [isPending, startTransition] = useTransition();
  const [optimisticTodos, setOptimisticTodos] = useState([]);

  const handleAddTodo = async (newTodo) => {
    // Add the new todo optimistically
    setOptimisticTodos((prev) => [...prev, newTodo]);
    startTransition(() => {
      try {
        fakeApiCall(newTodo)
          .then(() => {
            // Persist the update if the API call succeeds
            setTodos((prevTodos) => [...prevTodos, newTodo]);
          })
          .catch((error) => {
            console.error('API failed', error);
            // Rollback the optimistic update if the API call fails
            setOptimisticTodos((prev) => prev.filter((todo) => todo !== newTodo));
          });
      } catch (error) {
        console.error('Unexpected error', error);
      }
    });
  };

  const fakeApiCall = (todo) =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        Math.random() > 0.3 ? resolve() : reject(new Error('Error'));
      }, 1000);
    });

  return (
    <>
      <ul>
        {optimisticTodos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
      <button onClick={() => handleAddTodo(`New Todo ${Date.now()}`)} disabled={isPending}>
        Add
      </button>
    </>
  );
};

export default UseOptimisticFunc;
