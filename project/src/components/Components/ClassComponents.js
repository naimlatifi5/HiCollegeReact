import React, { Component } from 'react'

class MyClassComponent extends Component {
  // With class components we can use state which is private to component
  constructor(props) {
    super(props)
    this.state = {
      myState: [],
    }
  }
  render() {
    // in class components as in function component we can access props
    //const { name } = this.props;
    return <p> This is a class component</p>
  }
}

export default MyClassComponent
