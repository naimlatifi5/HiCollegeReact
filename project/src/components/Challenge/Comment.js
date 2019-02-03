import React, {Component} from 'react'
class Comment extends Component {
 

  render() {
    return ( 
        <li className="list-group-item d-flex justify-content-between align-items-center" key={this.props.key}>
            <strong className="heading-author">{this.props.name}</strong>
            <div className="comment">{this.props.commentMessage}</div>
            <button type="button" className="btn btn-danger">Ta bort</button>
        </li>

  )}
}

export default Comment
