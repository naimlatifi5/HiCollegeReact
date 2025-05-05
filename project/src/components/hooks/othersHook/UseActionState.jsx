import React, { useActionState } from 'react';
import FormWithoutUseActionState, { updateName } from './FormWithoutUseActionState';

const UseActionState = () => {
  const submitHandler = async (previousState, formData) => {
    const name = formData.get('name');
    const error = await updateName(name);

    if (error) {
      return error; // Returning error will set it in the error state
    }
  };
  // useActionState is a hook that allows you to manage the state of an action
  // It takes two arguments: the action handler and the initial state
  // It returns an array with three elements: error, action, and isPending
  // error is the error state of the action
  // action is a function that you can call to trigger the action
  // isPending is a boolean that indicates whether the action is in progress
  const [error, submitAction, isPending] = useActionState(submitHandler, null); // error, submitAction, isPending

  return (
    <>
      <h1>useActionState</h1>
      <form action={submitAction}>
        <input name='name' />
        <button disabled={isPending}>{isPending ? 'Updating' : 'Update name'}</button>
        {error && <p>{error}</p>}
      </form>
      <h2>With useState only</h2>
      <FormWithoutUseActionState />
    </>
  );
};

export default UseActionState;
