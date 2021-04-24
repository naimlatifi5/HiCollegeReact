import React from 'react'
const Comment = (props) => {
    return ( 
        <li className="list-group-item d-flex justify-content-between align-items-center" key={props.id} id={props.id}>
            <strong className="heading-author">{props.name}</strong>
            <div className="comment">{props.commentMessage}</div>
            <button type="button" className="btn btn-danger" onClick={props.onClick}>Ta bort</button>
        </li>
    )
}
    
export default Comment
