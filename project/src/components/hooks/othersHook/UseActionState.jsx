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
  const [error, submitAction, isPending] = useActionState(submitHandler, null); // error, submitAction, isPending

  return (
    <div>
      <h1>useActionState</h1>
      <form action={submitAction}>
        <input name='name' />
        <button disabled={isPending}>{isPending ? 'Updating' : 'Update name'}</button>
        {error && <p>{error}</p>}
      </form>
      <h2>With useState only</h2>
      <FormWithoutUseActionState />
    </div>
  );
};

export default UseActionState;
