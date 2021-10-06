import React, { useContext } from 'react'
import { CounterContext } from './useContext/CounterContext'
const CounterButtonWithContext = () => {
  const [numberOfClicks, increment, incrementBy, setIncrementBy] = useContext(
    CounterContext,
  )
  return (
    <>
      <p>You have clicked the button {numberOfClicks} times</p>

      <label>
        Incremebt by:
        <input
          value={incrementBy}
          type="number"
          onChange={(e) => setIncrementBy(parseInt(e.target.value))}
        />
      </label>

      <button onClick={() => increment()}>Click me</button>
    </>
  )
}

export default CounterButtonWithContext
