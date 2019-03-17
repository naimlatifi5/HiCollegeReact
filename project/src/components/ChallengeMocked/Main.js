import React, {Component} from 'react'
class MainChallenge extends Component {
  render() {
    return <div>
    <h1>Mocked - Challenge</h1>
    <div className="container">
        <div className="row">
        <form className="comment-form col-12 col-lg-6">
            <div className="form-group">
            <input 
                    type="text" 
                    className="form-control" 
                    id="name" 
                    aria-describedby="name" 
                    placeholder="Enter your name"
                    />

                <br/>
                <textarea 
                className="form-control" 
                id="comment" 
                rows="3" 
                data-gramm="true" 
                data-txt_gramm_id="63b74fb6-c7e4-7f0e-0c1f-438d47ac87a0" 
                data-gramm_id="63b74fb6-c7e4-7f0e-0c1f-438d47ac87a0" 
                data-gramm_editor="true" 
                placeholder="Enter your comment...."
                />
            </div>
            <button type="submit" className="btn btn-primary btn-lg btn-block">Submit</button>
            </form>
        </div>
        <div className="display-comments col-12 col-lg-8">
        <ul className="list-group">
        <li className="list-group-item d-flex justify-content-between align-items-center">
            <strong className="heading-author">Sara & Naim</strong>
            <div className="comment">Hello React world!</div>
            <button type="button" className="btn btn-danger">Ta bort</button>
        </li>
        </ul>
    </div>
      </div> 
  </div>
  }
}

export default MainChallenge
