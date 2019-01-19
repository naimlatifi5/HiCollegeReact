import React, {Component} from 'react'

// state only can be used within class Component and cannot be used with function component
// state in React are immutable- do not change directly but change should be made to the copy of the state.
// state are kind of like props but state is private property of the component and is controlled only by that component.


class ComponentState extends Component {
    // to add a state create a constructor function that initalize the state
    // it is recommended even thought we do not send props to component to assign in the constructor function
    constructor (props) {
      super (props); // super is a must when using constructore - for more read about how works with Inheritance in OOP
      this.state = {
          name: 'Naim'
      }
    }
  render() {
    return <div>
    <h1>Component with state</h1>
    <p>What is my name : {this.state.name}</p>

  </div>
  }
}

export default ComponentState
