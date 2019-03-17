import React, { Component } from 'react'
import DataComment from './DataComments'
import Comments from './Comments'
import ConditionalRendering from './ConditionalRendering'
import Challenge from './Challenge';


class FormListConditionalRendering extends Component {
  render() {
    return <div>
      <h1>Hello List rendering & conditional rendering</h1>
      <hr/>
      <ConditionalRendering isLoggedIn={false}></ConditionalRendering>
      <Comments data = {DataComment} ></Comments>
      <div>------------------ Your challenge result below -------------</div>
      {/* 
      <Challenge></Challenge>
      */}
  </div>
  }
}



export default FormListConditionalRendering
