import React, { useState, useEffect } from "react"

const HooksComponent = () => {

  // Declare a new state variable, which we'll call "toggle"
    const [toggle, setToggle] = useState(false)
  // multipe hooks declarations
    const [fruit, setFruit] = useState('banana');
    //const [todos, setTodos] = useState([{ text: "Learn Hooks" }])
   const [name, setName] = useState("Superman")
    const toggleTrueFalse = () => setToggle(!toggle)
   
   const getFruit = () => {
      // no need for this but accessing variable directly
      setFruit('apple')
    }
   const handleChangeName = (e) => {
     setName(e.target.value)
   }

   // Similar to componentDidMount and componentDidUpdate:
   useEffect(() => {
     document.title = name
   })
   // re-trigger only once with empty []
  //  useEffect(() => {
  //     document.title = name
  //  }, [])
   
    return (
      <div className="hooks">
        <button type="button" onClick={toggleTrueFalse}>
          Toggle me
        </button>
        {toggle ? <div> This is a div to toggle via hooks </div> : null}
        <div>Fruit is: {fruit}</div>
        <button type="button" onClick={getFruit}>
          Click to change fruit
        </button>
        <br />
        <input type="text" value={name} onChange={ handleChangeName } />
      </div>
    )
}
export default HooksComponent;