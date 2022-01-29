import React, { useState } from 'react'

const CounterButton = () => {
  const [numberOfClicks, setNumberOfClicks] = useState(0)
  const [incrementBy, setIncrementBy] = useState(1)
  return (
    <>
      <p>You have clicked the button {numberOfClicks} times</p>
      <label htmlFor="number">Increment by:</label>
      <input
        name="number"
        value={incrementBy}
        type="number"
        onChange={(e) => setIncrementBy(parseInt(e.target.value))}
      />
      <button onClick={() => setNumberOfClicks(numberOfClicks + incrementBy)}>
        Click me
      </button>
    </>
  )
}

export default CounterButton
