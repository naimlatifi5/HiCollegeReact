import React, { useState, useEffect } from 'react'

const Challenge4 = () => {
  const [increment, setIncrement] = useState(0)
  const counterIncrement = () => {
    setIncrement(increment + 1)
  }

  useEffect(() => {
    alert('Welcome to counter app')
  }, [])

  useEffect(() => {
    alert(`Increment is updated by: ${increment}`)
  }, [increment])

  return (
    <div>
      <h1>Challenge4- Click counter with hooks</h1>
      <p>Increment: {increment}</p>
      <button onClick={counterIncrement}>Click to increment</button>
    </div>
  )
}

export default Challenge4
