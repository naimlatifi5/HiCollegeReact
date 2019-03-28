import React, {Component} from 'react'
import CommentList from './CommentList'
class CommentForm extends Component {
 
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            comment: "",
            comments: []
        }
    }
    // handle changes on input name
    handleNameChange = (e) => {
        console.log(e.target.value);
        this.setState(
            {
                name: e.target.value
            }
        )
        //console.log(e.target.value);
    }
    // handle changes on comment 
    handleCommentChange = (e) => {
        console.log(e.target.value);
        this.setState(
            {
                comment: e.target.value
            }
        )
    }
// handle the form submit
    handleSubmit  = (e) => {
        e.preventDefault();
        let userName = this.state.name.trim();
        let comment = this.state.comment.trim();
        if( !userName || !comment) {
            return;
        }
        
        this.state.comments.unshift({name: userName, comment:comment})

        // reset the state for input element after we have added to array
        this.setState({
            name: '',
            comment: ''
        })
    }
    onChildClicked  = (e) => {
        // we cannot mutate state directly so that's why we create a new array
        let removeCommentArray = [...this.state.comments];
        // get the index of li id
        let indexLI = parseInt(e.target.parentNode.id);
         
        if( indexLI !== -1) {
        
            removeCommentArray.splice(indexLI,1);
            // change state by applying the setState of commented array to our removedCommentArray
            this.setState({comments: removeCommentArray});
        }
    }

  render() {
    return ( <div>
     <div className="container">
        <div className="row">
        <form className="comment-form col-12 col-lg-6" onSubmit={this.handleSubmit}>
            <div className="form-group">
            <input 
                    type="text" 
                    className="form-control" 
                    id="name" 
                    aria-describedby="name" 
                    placeholder="Enter your name"
                    value = {this.state.name}
                    onChange= {this.handleNameChange}
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
                value = {this.state.comment}
                onChange = {this.handleCommentChange}
                />
            </div>
            <button type="submit" className="btn btn-primary btn-lg btn-block">Submit</button>
            </form>
        </div>
        <CommentList data={this.state.comments} onClick={this.onChildClicked}></CommentList>
      </div> 
  </div>
  )}
}

export default CommentForm
