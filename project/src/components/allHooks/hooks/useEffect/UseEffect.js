import React, { useState, useEffect } from "react";

const UseEffect = () => {
  const [name, setName] = useState("Superman");
  const [strongestVersions, setStrongestVersions] = useState("Supermen prime");

  useEffect(() => {
    console.log(`Name: ${name}`);
  }, [name]);

  useEffect(() => {
    console.log(`Strongest versions: ${strongestVersions}`);
  }, [strongestVersions]);

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
    </>
  );
};
export default UseEffect;
