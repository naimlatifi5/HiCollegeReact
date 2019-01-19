import React from 'react'
// list rendering 
function Comments (props) {
    const headertable = (
      <thead>
      <tr>
        <th scope="col">Name</th>
        <th scope="col">Email</th>
        <th scope="col">Comment</th>
      </tr>
    </thead>
    )
  
    const bodytable = props.data.map((item, i) => 
     
      <tr id= {item.id} key={i}>
        <td>{item.name}</td>
        <td>{item.email}</td>
        <td>{item.comment}</td>
      </tr>
    )
  
    return (
        <table className="table table-hover">
          {headertable}
          <tbody>
          {bodytable}
          </tbody>
        </table>
    )
  }

  export default Comments