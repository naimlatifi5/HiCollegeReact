import React, { useState, useEffect } from 'react';

const UseEffect = () => {
  const [name, setName] = useState('Superman');

  // Similar to componentDidMount and componentDidUpdate in class components
  // useEffect(() => {
  //   document.title = name;
  // }, []);
  // re-trigger only once with empty []

  // retrigger whenever property has changed
  // useEffect is called after every render and return undefined and you can call it at the top of the component
  useEffect(() => {
    document.title = name;
  }, [name]);

  useEffect(() => {
    const handleResize = () => {
      // Handle the event
    };
    window.addEventListener('resize', handleResize);
    // Cleanup function to remove the event listener
    // This function is called when the component unmounts or before the effect runs again
    // to avoid memory leaks
    // and to clean up the previous effect
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleChangeName = (e) => {
    setName(e.target.value);
  };
  return (
    <>
      Name is: {name}
      <br />
      <button type='button' onClick={() => setName('Superman!')}>
        Update name
      </button>
      <input type='text' value={name} onChange={handleChangeName} />
    </>
  );
};
export default UseEffect;
