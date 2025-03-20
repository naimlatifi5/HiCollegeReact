import React, { useId } from 'react';

const UseId = () => {
  const uid = useId();
  console.log('what is userId', uid);
  return (
    <div>
      <label htmlFor={`${uid}-name`}>Name</label>
      <input id={`${uid}-name`} />
      <div>Generated unique user input id: {`${uid}-name`}</div>

      <label htmlFor={`${uid}-age`}>Age</label>
      <input id={`${uid}-age`} />

      <div>Generated unique age input id: {`${uid}-age`}</div>
    </div>
  );
};

export default UseId;
