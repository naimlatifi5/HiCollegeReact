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
  }
  handleChange = (e) => {
    const targetValue = e.target.value;
    this.setState({
      input: targetValue
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
      <>
        <h1>Hello Events in React</h1>
        {/* Complared to vanilla javascript events named in React are camelCase written i.e. onclick becomes onClick */}
        <button onClick={this.alertMe}>Click me</button>
        <button onClick= {this.handleClick}>Handle Click</button>
        <hr/>
        <form onSubmit={this.handleReverseText}>
          <div>
            Text: {this.state.input}
          </div>
          <div>
            <input
            type="text"
            value= {this.state.input || ''}
            onChange= {this.handleChange}
            placeholder = "Enter a text"
            />
            <button>Reverse text</button>
          </div>
        </form>
         {this.state.reverseText.length > 0  && (
          <p>Reversed text is : {this.state.reverseText} </p>
         )}
         <hr/>
         <input
          type="text"
          value = {this.state.onKeyUpInputValue}
          onChange = {this.handleEvents}
          onKeyDown = {this.handleOnKeyPress}
          onCopy = {this.handleOnCopy}

          placeholder = "Enter a key"  />
          <p>Keyword pressed: {this.state.onKeyUpInputValue}</p>
         {/* TODO- check more events such as: onClick
          onContextMenu
          onDoubleClick
          onDrag
          onDragEnd
          onDragEnter
          onDragExit
          onDragLeave
          onDragOver
          onDragStart
          onDrop
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
          ...
          ....
          */}
      </>
   )
  }
}

export default EventHandling
