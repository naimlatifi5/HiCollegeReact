import React, {Component} from 'react'
import ClassComponentProps from './ClassComponentProps'
import blockData from './Data'
import BlockComponent from './BlockComponentProps'
import Challenge from './Challenge';
class Props extends Component {
  render() {
    return (
    <React.Fragment> {/* Avoid the uneccessary div wrapper */}
    <h1>Hello Props</h1> 
    <ClassComponentProps name="Hello class component with props"/>
    <ClassComponentProps name="Hello class component with props and body props">Content inside body block</ClassComponentProps>
    {/* with the help of spread the properties of the object that we pass are copied onto the components's props */}
    <BlockComponent {...blockData}/> 
    <div>------------------ Your challenge result below -------------</div>
      {/* 
      <Challenge></Challenge>
      */}
   </React.Fragment>
  )
  }
}

export default Props
