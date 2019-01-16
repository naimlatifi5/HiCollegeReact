import React, { Component } from 'react'

const comments = [
  {
    id: 1,
    name: "Naim",
    email: "naim.latifi@hiq.se",
    comment: "I love React"
  },

  {
    id: 2,
    name: "Sara Holm",
    email: "sara.holm@hiq.se",
    comment: "She loves React, too"
  },
]
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


class FormListConditionalRendering extends Component {
  render() {
    return <div>
      <h1>Hello List rendering & conditional rendering</h1>
      <Comments data = {comments} ></Comments>
  </div>
  }
}



export default FormListConditionalRendering
