import React, { useId } from 'react';

function PasswordField() {
  // useId is used to generate unique IDs for accessibility purposes
  // It is useful when you have multiple components that need to be identified
  // It is used to generate unique IDs for elements in the component
  const uniqueId = useId();
  return (
    <>
      <label>
        Password:
        <input type='password' aria-describedby={uniqueId} />
      </label>
      <p id={uniqueId}>The password should contain at least 18 characters</p>
    </>
  );
}

const UseId = () => {
  return (
    <div>
      <h1>UseId</h1>
      <h2>Component 1</h2>
      <PasswordField />
      <h2>Component 2</h2>
      <PasswordField />
    </div>
  );
};

export default UseId;
