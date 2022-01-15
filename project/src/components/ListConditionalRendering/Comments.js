import React from 'react'
// list rendering

// function component in React are written with Capital letter in order for the React to distinguish between React component and html component
const CommentList = (props) => {
  const body = props.data.map((item, i) => (
    <tr id={item.id} key={i}>
      <td>{item.name}</td>
      <td>{item.email}</td>
      <td>{item.comment}</td>
    </tr>
  ))

  if (props.data.length > 0) {
    return (
      <React.Fragment>
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Comment</th>
            </tr>
          </thead>
          <tbody>{body}</tbody>
        </table>
      </React.Fragment>
    )
  } else {
    return <h1>There are no data in object</h1>
  }
}

export default CommentList
