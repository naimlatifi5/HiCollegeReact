import React, { useState, useEffect, useCallback } from "react";

// Before you start this task, make sure to open the developer console on the browser to see the console log in formation.
// feel free to alter the code inside the components below to solve the challenge problem

const App = () => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  /* this getNumberList function is just to mimic the api request function
   that requires to use a state value as a parameter in the function */

  const getNumberList = (e) => {
    return [number, number + 1, number + 2];
  };

  const theme = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
  };

  return (
    <div style={theme}>
      <h1>
        Challenge 8 - use useCallback to avoid unnecessary component renderings
      </h1>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={() => setDark(!dark)}>Toggle Theme</button>
      <List getNumberList={getNumberList} />
    </div>
  );
};

const List = ({ getNumberList }) => {
  const [list, setList] = useState([]);

  useEffect(() => {
    setList(getNumberList());
    console.log("challenge8 - updating");
  }, [getNumberList]);

  return (
    <ul>
      {list.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

export default App;
