import React, {Component} from 'react'

class EventHandling extends Component {
  alertMe() {
    alert("Hello Click event");
  }
  render() {
    return( 
      <div className="event-handling">
      
        <h1>Hello Events in React</h1>
        <button onClick={this.alertMe}>Click me</button>
      </div>
   )
  }
}

export default EventHandling
