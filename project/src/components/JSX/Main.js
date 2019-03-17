import React, {Component} from 'react'
import JSX from './Jsx'
import Challenge from './Challenge';
class Main extends Component {
  render() {
    return (
    <React.Fragment>
     <JSX></JSX>
     <div>------------------ Your challenge result below -------------</div>
     {/* 
     <Challenge></Challenge>
     */}
    </React.Fragment>
   )
  }
}

export default Main
