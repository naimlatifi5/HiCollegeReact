import React from 'react';
import UseEffect from './UseEffect';
import AsyncUseEffect from './AsyncUseEffect.jsx';
import UseEffectWithObjectDependencies from './useEffectObjectDependencies';

const Main = () => {
  return (
    <>
      <h2>Use effect hook</h2>
      <UseEffect />
      <br />
      <br />
      <h2>Use effect hook with async </h2>
      <AsyncUseEffect />
      <br />
      <br />
      <h2>Use effect hook with object dependencies</h2>
      <UseEffectWithObjectDependencies />
    </>
  );
};

export default Main;
