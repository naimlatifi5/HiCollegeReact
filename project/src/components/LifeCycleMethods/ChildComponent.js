import React, { Component } from 'react'

// OUR CHILD COMPONENT
class ChildComponent extends Component {
  // constructor initalize state or bind any events handlers to the class instance
  constructor(props) {
    console.group("constructor")
    console.groupEnd();
    // the special function super is important to call because it allows us to call the constructor of the parent class and initialize itself, and let us use this.props. Before super this.props is undefined.
    super(props);
    this.state = {
      value: this.props.value,
      counter: 0
    }
  }

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
      <div className="alert alert-danger" onClick={this.handleChildClick}>
        {this.state.value} Counting inside child component {this.state.counter} and I will definately crashe when I reach at 2
      </div>
    )}
}

export default ChildComponent
