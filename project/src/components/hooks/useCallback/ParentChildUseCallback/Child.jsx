import React, { useState, useEffect } from 'react';

const ChildComponent = (props) => {
  const { someFunc } = props;
  const [calcNum, setCalcNum] = useState(0);

  useEffect(() => {
    setCalcNum(someFunc());
  }, [someFunc]);

  return <span> Plus five: {calcNum}</span>;
};

export default ChildComponent;
