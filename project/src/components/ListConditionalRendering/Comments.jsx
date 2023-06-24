import React from 'react'

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
      <>
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
      </>
    )
  } else {
    return <h1>There are no data in object</h1>
  }
}

export default CommentList
