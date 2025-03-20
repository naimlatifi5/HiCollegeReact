import React, { useTransition } from 'react';

const UseTransition = () => {
  const [startTransition, isPending] = useTransition();
  console.log('isPending', isPending);
  return <div>Use transition hook</div>;
};

export default useTransition;
