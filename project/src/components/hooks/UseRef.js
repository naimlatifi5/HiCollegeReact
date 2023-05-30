import React, { useEffect, useRef, useState } from 'react'

const UseRef = () => {
  const inputElement = useRef()
  const buttonClick = useRef(0)
  //const [renderCount, setRenderCount] = useState(0)
  const [text, setText] = useState('')
  const renderCountWithRef = useRef(0)

  // we can get previous state without causing the component to render

  const [name, setName] = useState('')
  const previousName = useRef('hej')

  // using state to increment value
  // useEffect(() => {
  //   // setCount(count + 1) // it renders and renders and renders - infinity loop
  //   renderCountWithRef.current = renderCountWithRef.current + 1
  // })

  useEffect(() => {
    console.log('I have rendered because name has changed')
    previousName.current = name
  }, [name])

  const handleFocusInput = () => {
    console.log(inputElement)
    inputElement.current.focus()
  }

  const handleClick = () => {
    buttonClick.current++
    console.log('Button clicked', +buttonClick.current + 'times')
  }

  const handleInputChange = (e) => {
    setText(e.target.value)
  }
  console.log('hej')

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
      <br />
      <br />
      <h2>Refs persist the data and doesn't render the whole component</h2>
      <input type="text" onChange={handleInputChange} />
      <div>{text}</div>
      <div>I rendered {renderCountWithRef.current} times</div>
      <h2>Save previous state example with refs</h2>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <div>
        Name is {name} and previousName is {previousName.current}
      </div>
    </>
  )
}

export default UseRef
