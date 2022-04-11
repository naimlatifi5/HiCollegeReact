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
    </>
  )
}

export default UseImperativeHandle
