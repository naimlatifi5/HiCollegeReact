import React, { useState } from "react";

const Result = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count <= 0) return;
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div>
      <h1>Build a simple quantity counter</h1>
      <button className="inc" onClick={increment}>
        +
      </button>
      <input type="number" value={count} />
      <button disabled={count === 0} className="dec" onClick={decrement}>
        -
      </button>
      <button className="reset" onClick={reset}>
        Reset
      </button>
    </div>
  );
};
export default Result;
