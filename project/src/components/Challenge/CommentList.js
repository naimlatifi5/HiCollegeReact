import React, {Component} from 'react'

class CommentList extends Component {
  render() {
    return (<div className="display-comments col-12 col-lg-8">
      <div>Display all comments, if there are no comments show the message not comments added yet, send data as props</div>
        <ul className="list-group">
            <li className="list-group-item d-flex justify-content-between align-items-center">
                <strong className="heading-author">Naim</strong>
                <div className="comment">Hello comment app with React</div>
                <button type="button" className="btn btn-danger">Ta bort</button>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
                <strong className="heading-author">Sara</strong>
                <div className="comment">Welcome to React course</div>
                <button type="button" className="btn btn-danger">Ta bort</button>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
                <strong className="heading-author">Superman</strong>
                <div className="comment">Love React!</div>
                <button type="button" className="btn btn-danger">Ta bort</button>
            </li>
        </ul>
  </div>
   )
  }
}

export default CommentList
