import React from 'react'
// list rendering 
const numbers = [1,2,3,4,5];
const items = numbers.map((item,i) => 
  <span key={i}>{item * 2}</span>
);

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
        <>
        <table className="table table-hover">
          {headertable}
          <tbody>
          {bodytable}
          </tbody>
        </table>
        <div>
          {items}
        </div>
       </> 
    )
  }

  export default Comments