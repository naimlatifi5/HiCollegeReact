import React, { Component } from 'react'
import data from "./mock/data/comments";
import Comments from './Comments'
import ConditionalRendering from './ConditionalRendering'

class FormListConditionalRendering extends Component {
  render() {
    return (
      <div>
        <h1>Hello List rendering & conditional rendering</h1>
        <hr />
        <ConditionalRendering isLoggedIn={false}></ConditionalRendering>
        <Comments data={data}></Comments>
      </div>
    )
  }
}

export default FormListConditionalRendering
