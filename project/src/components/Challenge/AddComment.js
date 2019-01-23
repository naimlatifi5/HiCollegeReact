import React, {Component} from 'react'
import DisplayComments from './CommentList'
class Challenge extends Component {
 

  render() {
    return ( <div>
     <div className="container">
        <div className="row">
            <form className="comment-form col-12 col-lg-6">
            <div className="form-group">
                <input type="text" class="form-control" id="name" aria-describedby="name" placeholder="Enter your name"/>
                <br/>
                <textarea className="form-control" id="comment" rows="3" data-gramm="true" data-txt_gramm_id="63b74fb6-c7e4-7f0e-0c1f-438d47ac87a0" data-gramm_id="63b74fb6-c7e4-7f0e-0c1f-438d47ac87a0" spellcheck="false" data-gramm_editor="true" placeholder="Enter your comment...."></textarea>
            </div>
            <button type="button" className="btn btn-primary btn-lg btn-block">Submit</button>
            </form>
        </div>
        <DisplayComments></DisplayComments>
      </div> 
  </div>
  )}
}

export default Challenge
