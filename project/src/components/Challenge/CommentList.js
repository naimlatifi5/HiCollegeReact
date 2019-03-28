import React, {Component} from 'react'
import Comment from './Comment'

class CommentList extends Component {
  render() {

      if(!this.props.data){
          return null
      }
     let comments = this.props.data.map((item, index) => {      
        return (
         <Comment  key={index} name={item.name} commentMessage={item.comment} id={index} onClick={this.props.onClick}></Comment>
        )
     })
     if(this.props.data.length > 0) {
    return (
    <div className="display-comments col-12 col-lg-8">
        <ul className="list-group">
          {comments}
        </ul>
    </div>
   )}else {
       return (<li className="list-group-item col-12 d-flex justify-content-between align-items-center">There are no comments added</li>)
   }
  }
}

export default CommentList
