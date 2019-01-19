import React, { Component } from 'react'
import DataComment from './DataComments'
import Comments from './Comments'




class FormListConditionalRendering extends Component {
  render() {
    return <div>
      <h1>Hello List rendering & conditional rendering</h1>
      <Comments data = {DataComment} ></Comments>
  </div>
  }
}



export default FormListConditionalRendering
