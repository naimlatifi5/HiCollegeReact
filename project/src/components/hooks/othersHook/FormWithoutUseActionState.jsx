import React, { useState } from 'react';
// has started but not completed
export const updateName = async (name) => {
  // Simulate a delay of 1 second (1000 milliseconds)
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Simulate an API call
  if (name === 'error') {
    return 'Error updating name';
  }
  return null;
};
const FormWithoutUseActionState = () => {
  // states
  const [name, setName] = useState(''); // to store name from input field
  const [error, setError] = useState(null); // To keep error in a state
  const [isPending, setIsPending] = useState(false); //To track when api call

  const handleSubmit = async () => {
    setIsPending(true);
    const error = await updateName(name);
    setIsPending(false);
    if (error) {
      setError(error);
      return;
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input value={name} onChange={(event) => setName(event.target.value)} />
      <button onClick={handleSubmit} disabled={isPending}>
        {isPending ? 'Updating...' : 'Update name'}
      </button>
      {error && <p>{error}</p>}
    </form>
  );
};

export default FormWithoutUseActionState;
