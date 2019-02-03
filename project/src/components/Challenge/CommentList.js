import React, {Component} from 'react'
import Comment from './Comment'



class DisplayComments extends Component {
  render() {

      if(!this.props.data){
          return null
      }
     let comments = this.props.data.map((item, index) => {      
        return (
        <React.Fragment key={index}>  
         <Comment name={item.name} commentMessage={item.comment}></Comment>
        </React.Fragment>
        )
     })
     if(this.props.data.length > 0) {
    return (
    <div className="display-comments col-12 col-lg-8">
      <div>Display all comments, if there are no comments show the message not comments added yet, send data as props</div>
        <ul className="list-group">
          {comments}
        </ul>
    </div>
   )}else {
       return (<li>There are no comments added</li>)
   }
  }
}

export default DisplayComments
