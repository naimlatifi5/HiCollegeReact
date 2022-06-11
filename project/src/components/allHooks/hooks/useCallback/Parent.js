import React, { useState, useCallback } from 'react'
import CustomButton from './CustomButton.js'
const Parent = () => {
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)

  console.log('Parent component rendered')

  //   const Increment1 = () => {
  //     setCount1(count1 + 1)
  //   }
  //   const Increment2 = () => {
  //     setCount2(count2 + 1)
  //   }

  //   const IncrementCallback1 = useCallback(() => {
  //     setCount1(count1 + 1)
  //   }, [count1])

  //   const IncrementCallback2 = useCallback(() => {
  //     setCount2(count2 + 1)
  //   }, [count2])
  const memoizedSetCount1 = useCallback(() => setCount1(count1 + 1), [count1])
  const memoizedSetCount2 = useCallback(() => setCount2(count2 + 1), [count2])

  return (
    <div>
      Count1 {count1} - Count2 {count2}
      {/* <CustomButton buttonName="button1" handleClick={Increment1} />
      <CustomButton buttonName="button2" handleClick={Increment2} /> */}
      <CustomButton buttonName="button1" handleClick={memoizedSetCount1} />
      <CustomButton buttonName="button2" handleClick={memoizedSetCount2} />
    </div>
  )
}

export default Parent
