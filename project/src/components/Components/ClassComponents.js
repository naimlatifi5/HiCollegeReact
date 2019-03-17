import React, { Component } from 'react'

class MyClassComponent extends Component {
    constructor() {
      super (); // super is a must when using constructore - for more read about how works with Inheritance in OOP
    }
    // With class components we can use state which is private to component
    render () {
      // in class components as in function component we can access props
      //const { name } = this.props;
      return <p> Creation of Class Component</p>
    }
 }

 export default MyClassComponent
