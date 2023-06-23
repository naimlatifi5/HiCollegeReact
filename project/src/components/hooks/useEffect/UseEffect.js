import React, { useState, useEffect } from "react";

const UseEffect = () => {
  const [name, setName] = useState("Superman");
  const [strongestVersions, setStrongestVersions] = useState("Supermen prime");

  // Similar to componentDidMount and componentDidUpdate in class components
  // useEffect(() => {
  //   document.title = name;
  // }, []);
  // re-trigger only once with empty []

  // retrigger whenever property has changed
  useEffect(() => {
    document.title = name;
  }, [name]);

  useEffect(() => {
    console.log(`Strongest versions: ${strongestVersions}`);
  }, [strongestVersions]);

  const handleChangeName = (e) => {
    setName(e.target.value);
  };
  return (
    <>
      Name is: {name} and strongest versions:- {strongestVersions}
      <br />
      <button type="button" onClick={() => setName("Superman!")}>
        Update name
      </button>
      <button type="button" onClick={() => setStrongestVersions("All start!")}>
        Update versions
      </button>
      <input type="text" value={name} onChange={handleChangeName} />
    </>
  );
};
export default UseEffect;
