import React, {Component} from 'react'
import EventHandling from './EventHandling'
import DivToggler from './TogleDiv'
class MainEvents extends Component {
  render() {
    return( 
      <div className="events">
        <EventHandling/>
        <hr/>
        <DivToggler/>
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
