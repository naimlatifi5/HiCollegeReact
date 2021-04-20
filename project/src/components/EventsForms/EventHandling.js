import React, {Component} from 'react'

class EventHandling extends Component {
  constructor(props) {
    super (props)
    // we initalize the state in the eventHandling component for input to be empty
    this.state = {
       input: '',
       reverseText: '',
       onKeyUpInputValue: ''
    }
    // this.handleChange = this.handleChange.bind(this) // if not using arrow function then we need to bind our handleChange due to this context
  }
  handleChange = (e) => {
    this.setState({
      input: e.target.value
    })
  }
  handleEvents = (e) => {
    this.setState({
      onKeyUpInputValue: e.target.value
    })
  }
  handleOnKeyPress = (e) => {
    if (e.keyCode === 13) {
      alert("You pressed Enter");
    }
  }
  handleOnCopy = (e) => {
    alert("Text is copied")
  }

  handleReverseText = (e) => {
    e.preventDefault();
    const textValue = this.state.input;
    console.log(textValue);
    this.setState ({
      reverseText: textValue.split("").reverse("").join("")
    })

  }
  alertMe() {
    alert("Hello Click event");
  }
  render() {

    return(
      // if we do not want to use an extra duv as wraooer then we can use <React.fragment></React.fragment> eller <> </>
      <div>
        <h1>Hello Events & Forms in React</h1>
        {/* Compared to vanilla javascript events named in React are camelCase written i.e. onclick becomes onClick */}
        <button onClick={this.alertMe} className="btn btn-success">Click me</button> <br/> <br/>
        <button onClick= {this.handleClick} className="btn btn-success">Handle Click</button>
        <hr/>
        <form onSubmit={this.handleReverseText}>
          <div className="form-group mx-sm-3 mb-2">
          <label>
            Text: {this.state.input}
          </label>
            <input
            type="text"
            value= {this.state.input || ''}
            onChange= {this.handleChange}
            placeholder = "Enter a text"
            className="form-control custom-input"
            />
            <button className="btn btn-primary">Reverse text</button>
          </div>
        </form>
         {this.state.reverseText.length > 0  && (
          <p>Reversed text is : {this.state.reverseText} </p>
         )}
         <hr/>
         <div className="form-group mx-sm-3 mb-2">
            <input
              type="text"
              value = {this.state.onKeyUpInputValue}
              onChange = {this.handleEvents}
              onKeyDown = {this.handleOnKeyPress}
              onCopy = {this.handleOnCopy}
              className="form-control custom-input"
              placeholder = "Enter a key"  />
          </div>
          <p>Keyword pressed: {this.state.onKeyUpInputValue}</p>
         {
          /* TODO- check and play with more events such as:
          onClick
          onFocus
          onBlur
          onDoubleClick
          onDrag
          onCopy
          onCut
          onPaste
          onMouseDown
          onMouseEnter
          onMouseLeave
          onMouseMove
          onMouseOut
          onMouseOver
          onMouseUp
          onChange
          onInput
          onSubmit
          onKeyDown
          onKeyPress
          onKeyUp
          ...
          ....
          */}
      </div>
   )
  }
}

export default EventHandling
