import React, { useRef } from 'react'

const UseRef = () => {
  const inputElement = useRef()
  const buttonClick = useRef(0)

  const handleFocusInput = () => {
    console.log(inputElement)
    inputElement.current.focus()
  }

  const handleClick = () => {
    buttonClick.current++
    console.log('Button clicked', +buttonClick.current + 'times')
  }

  console.log(
    'useRef does not cause the component to re-render compare to use state',
  )
  return (
    <>
      <input type="text" ref={inputElement} />
      <br />
      <br />
      <button type="button" onClick={handleFocusInput}>
        Focus the input
      </button>
      <br></br>
      <br />
      <button type="button" onClick={handleClick}>
        Click me
      </button>
    </>
  )
}

export default UseRef
