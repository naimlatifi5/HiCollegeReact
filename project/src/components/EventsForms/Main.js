import React, {Component} from 'react'
import EventHandling from './EventHandling'

class MainEvents extends Component {
  render() {
    return( 
      <div className="events">
        <EventHandling/>
        <hr/>  
      </div>
   )
  }
}

export default MainEvents
