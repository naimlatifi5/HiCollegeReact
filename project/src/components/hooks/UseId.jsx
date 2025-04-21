import React, { useId } from 'react';

function PasswordField() {
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
