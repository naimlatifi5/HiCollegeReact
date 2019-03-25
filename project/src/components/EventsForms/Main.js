import React, {Component} from 'react'
import EventHandling from './EventHandling'
import Challenge from './Challenge';
import ChallengeForm from './ChallengeForm';


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
          {/* 
          <ChallengeForm></ChallengeForm>
          */}
        
      </div>
   )
  }
}

export default MainEvents
