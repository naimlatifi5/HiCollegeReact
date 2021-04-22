import React, { Component } from "react"
import ClassComponent from "./ClassComponent.js"
class Hooks extends Component {
  render() {
    return (
      <>
        {/* Avoid the uneccessary div wrapper */}
            <h1>Hooks</h1>
        <ClassComponent></ClassComponent>    
      </>
    )
  }
}
export default Hooks
