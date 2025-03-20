import React, { useState, useEffect } from "react";

const UseEffectWithObjectDependencies = () => {
  const [count, setCount] = useState(0);
  const [countWithObj, setCountWithObj] = useState({
    first: {
      second: {
        third: {
          value: 0
        }
      }
    }
  });

  // retrigger whenever property has changed
  useEffect(() => {
    console.log("count", count);
  }, [count]);

  useEffect(() => {
    console.log("count", countWithObj);
  }, [countWithObj]);

  let prevCount = 0;
  let currentCount = 0;

  let prevCountWithObj = { value: 0 };
  let currentCountWithObj = { value: 0 };

  console.log(prevCount === currentCount);

  console.log(prevCountWithObj === currentCountWithObj);

  return (
    <>
      <button
        type="button"
        onClick={() => setCount(prevCount => prevCount + 1)}
      >
        Update Me {count}
      </button>

      <button
        type="button"
        onClick={() => setCountWithObj({ value: countWithObj.value + 1 })}
      >
        Update Me object {countWithObj.value}
      </button>
    </>
  );
};
export default UseEffectWithObjectDependencies;
