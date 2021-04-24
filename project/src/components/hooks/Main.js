import React, { Component } from "react"
import ClassComponent from "./ClassComponent.js"
import HooksComponent from "./HooksCompnent.js"
class MainComponent extends Component {
  render() {
    return (
      <>
        {/* Avoid the uneccessary div wrapper */}
            <h1>Hooks</h1>
            <h4>Class component</h4>
            <ClassComponent></ClassComponent>
            <h4>Hooks</h4>
            <HooksComponent></HooksComponent>
      </>
    )
  }
}
export default MainComponent
