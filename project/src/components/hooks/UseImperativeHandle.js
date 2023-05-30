import React, { useRef } from 'react'
import CustomInput from './components/CustomInput.js'
const UseImperativeHandle = () => {
  const inputRef = useRef(null)

  const handleFocusFromParent = () => {
    inputRef.current.focus()
  }

  return (
    <>
      <CustomInput onFocus={handleFocusFromParent} ref={inputRef} />
      <br />
      <br />
      {/* TODO - create a toggle with two buttons, the child component should hold the logic for toggling and parent component on click should toggle */}
    </>
  )
}

export default UseImperativeHandle
