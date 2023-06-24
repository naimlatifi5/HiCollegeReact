import React, { Component } from 'react'
import ClassComponentProps from './ClassComponentProps'
import blockData from "./mock/data/Data.js";
import FunctionComponentProps from './FunctionComponentProps'
class Props extends Component {
  render() {
    return (
      <>
        <h1>Props in React</h1>
        <ClassComponentProps name="Class component with props" />
        <ClassComponentProps name="Class component with props and body props">
          Content inside body block
        </ClassComponentProps>
        {/* with the help of spread the properties of the object that we pass are copied onto the components's props */}
        <FunctionComponentProps {...blockData} />
      </>
    )
  }
}

export default Props
