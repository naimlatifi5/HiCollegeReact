import React, {Component} from 'react'
import EventHandling from './EventHandling'
class MainEvents extends Component {
  render() {
    return( 
      <div className="events">
        <EventHandling/>
        <hr/>
        <div>------------------ Your challenge result below -------------</div>
         {/* 
          <Challenge></Challenge>
         */}
      </div>
   )
  }
}

export default MainEvents
