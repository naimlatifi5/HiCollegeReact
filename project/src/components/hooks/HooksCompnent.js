import React, { useState } from "react"

 const HooksComponent = () => {
   
   const [toggle, setToggle] = useState(false)
   const toggleTrueFalse = () => setToggle(!toggle)

    return (
      <div className="hooks">
        <button type="button" onClick={toggleTrueFalse}>
          Click me
        </button>
        {toggle ? <div> This is a div to toggle via hooks </div> : null}
      </div>
    )
}
export default HooksComponent;