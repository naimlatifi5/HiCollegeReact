import React, { useState, useCallback } from 'react'
// we save unique function values here
const functionsSet = new Set()
const functionsSetWithCallback = new Set()
const UseCallback = () => {
  const [count, setCount] = useState(0)
  const [number, setNumber] = useState(0)
  const [countWithCallback, setCountWithCallback] = useState(0)
  const [numberWithCallback, setNumberWithCallback] = useState(0)

  const incrementCounter = () => {
    setCount(count + 1)
  }
  const decrementCounter = () => {
    setCount(count - 1)
  }

  const incrementByTwo = () => {
    setNumber(number + 2)
  }

  const incrementCounterCached = useCallback(() => {
    setCountWithCallback(countWithCallback + 1)
  }, [countWithCallback])

  const decrementCounterCached = useCallback(() => {
    setCountWithCallback(countWithCallback - 1)
  }, [countWithCallback])

  const incrementByTwoCached = useCallback(() => {
    setNumberWithCallback(numberWithCallback + 2)
  }, [numberWithCallback])
  // Saving the functions counter
  // Now, every time we click a button we will console.log and increased by 3 as number of functions.
  // So the component is re - rendered and this is how Javascript determines functions equality.
  // JavaScript equality- even though they come from same source they are not the same. A function is equal only to itself

  //   function multiple() {
  //   return (a, b) => a * b;
  // }

  // const func1 = multiple();
  // const func2 = multiple();

  // func1(1, 2); // => 2
  // func2(1, 2); // => 2

  // func1 === func2; // => false
  // func1 === func1; // => true

  functionsSet.add(incrementCounter) // this functions are re-recreated since the component is re-rendered
  functionsSet.add(decrementCounter) // this functions are re-recreated since the component is re-rendered
  functionsSet.add(incrementByTwo) // this functions are re-recreated since the component is re-rendered

  console.log('Functions set:', functionsSet)
  console.log('Function re-renders', functionsSet.size + ' times')
  console.log('**** Functions with callback now will be cached *******')
  functionsSetWithCallback.add(incrementCounterCached)
  functionsSetWithCallback.add(decrementCounterCached)
  functionsSetWithCallback.add(incrementByTwoCached) // clicking on this button only the number dependancy for numberWithCallback is updated and not other dependancy
  console.log(
    'Functions set with callback are cached',
    functionsSetWithCallback,
  )
  console.log(
    'Function re-renders with callback only ',
    functionsSetWithCallback.size + ' times',
  )
  // demo- to demostrate click the button Increment by 2 - cached to see how the set is increment only by one since numberWithCallback dependacy is updated
  return (
    <>
      Count: {count}
      <button onClick={incrementCounter}>Increase counter</button>
      <button onClick={decrementCounter}>Decrease Counter</button>
      <button onClick={incrementByTwo}>Increment by 2</button>
      <br />
      <hr />
      <h2>I have cached the functions with useCallback</h2>
      Count: {countWithCallback}
      <button onClick={incrementCounterCached}>
        Increase counter with -cached
      </button>
      <button onClick={decrementCounterCached}>
        Decrease Counter - cached{' '}
      </button>
      Count by 2: {numberWithCallback}
      <button onClick={incrementByTwoCached}>Increment by 2 - cached</button>
    </>
  )
}
export default UseCallback