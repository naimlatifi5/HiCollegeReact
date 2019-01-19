import React, {Component} from 'react'
import ClassComponentProps from './ClassComponentProps'
import blockData from './Data'
import BlockComponent from './BlockComponentProps'








class Props extends Component {
  render() {
    return <div>
    <h1>Hello Props</h1> 
    <ClassComponentProps name="Hello class component with props"/>
    <ClassComponentProps name="Hello class component with props and body props">Content inside body block</ClassComponentProps>
    <BlockComponent {...blockData}/> 
  </div>
  }
}

export default Props
