import React, { useState, useEffect } from 'react'

const HooksComponent = () => {
  // Declare a new state variable, which we'll call "toggle"
  const [toggle, setToggle] = useState(false)
  const [name, setName] = useState('Superman')

  const toggleTrueFalse = () => {
    setToggle(!toggle)
  }

  const handleChangeName = (e) => {
    setName(e.target.value)
  }

  // Similar to componentDidMount and componentDidUpdate:
  // useEffect(() => {
  //   document.title = name
  // })
  // re-trigger only once with empty []
  useEffect(() => {
    document.title = name
  }, [])
  // retrigger whenever property has changed
  //   useEffect(() => {
  //   document.title = name
  // }, [name])

  return (
    <div className="hooks">
      <button type="button" onClick={toggleTrueFalse}>
        Toggle me
      </button>
      <br />
      {toggle ? <div> This is a div to toggle via hooks </div> : null}
      <br />
      <input type="text" value={name} onChange={handleChangeName} />
    </div>
  )
}
export default HooksComponent
