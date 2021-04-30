import React, { Component } from 'react'
import ChildComponent from './ChildComponent'
class ParentComponent extends Component {
  constructor(props) {
    console.group("constructor")
    console.groupEnd()
    super(props)
    this.state = {
      count: 0,
      hasError: false,
      value: "Hello there from parent. Click me ",
      books: []
    }
   
  }

  componentDidMount() {
    // right place to load data from any endpoints
    console.group("COMPONENTDIDMOUNT --------- Parent Component MOUNTED")
    console.log("Setting setState here will trigger a re-render")
    console.log("Right place to load data from any endpoints i.e via axios")
    console.groupEnd()
    const apiUrl =
      "https://learn-co-curriculum.github.io/books-json-example-api/books.json"
     fetch(
       apiUrl
     )
      .then((response) => response.json())
      .then((bookData) => {
         console.log("Books data", bookData)
         this.setState({ books: bookData })
     })
  }
  shouldComponentUpdate() {
    console.group("======== SHOULD COMPONENT UPDATED ======")
    console.log(
      "This decides whether components needs to be re-rendered or not"
    )
    console.log("It helps for performance improvements")
    console.groupEnd()
    return true
  }

  componentWillUpdate(nextProps, nextState) {
    console.group("componentWillUpdate")
    console.log("get called on before every re-rendering")
    console.log(
      " This method is called just after shouldComponentUpdate has finished and just before the new component gets rendered"
    )
    console.log(
      "examples of uses for this method are if you have any calculations you need to perform before re-rendering and after props and/or state updates"
    )

    console.groupEnd()
  }
  componentDidUpdate(prevProps, prevState) {
    console.group("======= COMPONENT DID UPDATE =======")
    console.log("======= Get called after re-rendering =======")
    console.log("======= Previous props =======", prevProps)
    console.log("======= Previous state =======", prevState)
    console.log("======= Current state =======", this.state)
    // check of the state has changed
    if (this.state.count !== prevState.count) {
      console.log("STATE HAS CHANGED")
    }
    console.groupEnd()
  }

  componentDidCatch(error, info) {
    console.group("===========COMPONENTDIDCATCH  ==========")
    console.log("ERROR", error)
    console.log("INFO", info)
    console.groupEnd()
    this.setState({
      isError: true,
    })
  }

  handleParentClick = () => {
    this.setState({
      // changing state for count by increase 1
      count: this.state.count + 1,
    })
  }

  handleParentText = () => {
    this.setState({
      value: "You have clicked me!",
    })
  }

  render() {
    return (
      <div>
        <p>Please open the console to see what is happening</p>
        <button className="btn btn-info" onClick={this.handleParentClick}>
          Click me to count: {this.state.count}
        </button>
        <br />
        <br />
        {// ternary operator if we have an error in state then crashe otherwise continue counting within ChildComponent component
        // passing state value to child comoonent
        this.state.hasError ? (
          <h1>Crashed</h1>
        ) : (
          <ChildComponent
            value={this.state.value}
            onClick={this.handleParentText}
          />
        )}
      </div>
    )
  }
}

export default ParentComponent
