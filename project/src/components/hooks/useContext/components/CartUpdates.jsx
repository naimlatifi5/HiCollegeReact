import React, { useContext } from 'react';
import { CounterContext } from '../provider/CounterContext';
const CartUpdates = () => {
  const [numberOfClicks] = useContext(CounterContext);
  return <div>This is my card that will update based on input: {numberOfClicks}</div>;
};

export default CartUpdates;
