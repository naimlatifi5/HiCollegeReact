import React, { Component } from 'react'

// OUR CHILD COMPONENT
class ChildComponent extends Component {
  // constructor initalize state or bind any events handlers to the class instance
  constructor(props) {
    console.group("constructor")
    console.groupEnd();
    // the special function super is important to call because it allows us to call the constructor of the parent class and initialize itself
    super(props);
    this.state = {
      value: this.props.value,
      counter: 0
    }
  }

  // static getDerivedStateFromProps(nextProps, prevState) {
  //   console.group("getDerivedStateFromProps in chilren");
  //   console.group("Got called when:");
  //   console.log("The component is initialized");
  //   console.log("Receiving new props whether they are changed or not");
  //   console.log("Parent component is re-rendered");
  //   console.groupEnd();
  //   console.log("ComponentWillReceiveProps will not be called anymore!");
  //   console.log("Comment me to see how componentWillReceiveProps works");
  //   console.log("nextProps", nextProps);
  //   console.log("prevState", prevState);
  //   if (nextProps.value !== prevState.value) {
  //     console.log("props changed. Return an object to change state");
  //   console.groupEnd();
  //     return {
  //       value: nextProps.value
  //     };
  //   }
  //   console.groupEnd();
  // }

  componentWillReceiveProps(nextProps) {
    console.log("I get called when the parent is re-rendered");
    if (this.props.value !== nextProps.value) {
      console.log(
        "change when props value is changed. setState here is needed"
      );
    }
  }

  handleChildClick = () => {
    this.props.onClick();
    this.setState({
      counter: this.state.counter + 1,
    })
  }
  render() {
    if(this.state.counter === 2) {
      throw new Error ("Everything crached here");
    }
    return (
    <>
      <div className="alert alert-danger" onClick={this.handleChildClick}> {this.state.value} Counting inside child component {this.state.counter} and I will definately crashe when I reach at 2 </div>
    </>
    )}
}

export default ChildComponent
