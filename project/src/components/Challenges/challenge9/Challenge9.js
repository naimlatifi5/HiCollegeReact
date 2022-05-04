import React, { useState, useMemo, useReducer } from "react";

const App = () => {
  return (
    <div style={themeStyle}>
      <h4>Use useMemo Hook to prevent expensive value rendering in the app</h4>
      <input value={text} onChange={onChange} />
      <ChildComponent text={text} />
      <button onClick={handleTheme}>Change Theme</button>
    </div>
  );
};

const ChildComponent = ({ text }) => {
  const alterText = (words) => {
    console.log("this is triggered");
    return `I like ${words}`;
  };
  // write your magic below this line :) feel free to alter the code blow

  return <p>{alterText(text)}</p>;
};

export default App;
