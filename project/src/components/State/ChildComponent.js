import React, {Component} from 'react'

 

class ChildState extends Component {
    constructor (props) {
      super (props);
      this.state = {
          childState: 'Hello Child state',
          mutateParentState: ''  // we are mutating the parent state inside child component
      }
    }
    handleParentStateChanges = () => {
      this.setState({mutateParentState: this.props.name + " Latifi"}) // mutate via setState the state that we get as props from parent
    }
  render() {
    return <div>
    <h1>Child component handling state</h1>
    <p>Child state : {this.state.childState}</p>
    <p>What is parent state : {this.props.name}</p>
    <button onClick={this.handleParentStateChanges}>Child mutated the state from parent</button>
    <p>state changes : {this.state.mutateParentState}</p>
  </div>
  }
}

export default ChildState
