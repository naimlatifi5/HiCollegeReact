import React from 'react';
import UseEffect from './UseEffect';
import AsyncUseEffect from './AsyncUseEffect.jsx';
import UseEffectWithObjectDependencies from './useEffectObjectDependencies';
import UseEffectEvent from './UseEffectEvent';

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
      <h2>Use effect hook with event</h2>
      <UseEffectEvent />
    </>
  );
};

export default Main;
