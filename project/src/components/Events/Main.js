import React, {Component} from 'react'
import EventHandling from './EventHandling'
import DivToggler from './TogleDiv'
class Events extends Component {
  alertMe() {
    alert("Hello Click event");
  }
  render() {
    return( 
      <div className="events">
        <EventHandling/>
        <hr/>
        <DivToggler/>
      </div>
   )
  }
}

export default Events
