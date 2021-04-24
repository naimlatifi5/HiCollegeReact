import React from 'react'
// list rendering 
const numbers = [];
const items = numbers.map((item,i) => 
  <span key={i}>{item * 2}</span>
);

// function component in React are written with Capital letter in order for the React to distinguish between React component and html component
const Comments =  (props) => {
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
   
    if (props.data.length > 0 ) {
      return (
        <React.Fragment>
        <table className="table table-hover">
          {headertable}
          <tbody>
          {bodytable}
          </tbody>
        </table>
        
        {/*if check if numbers is true and in js if a something  true && expression results on expression and false && expression always evaluates to false */}
        {numbers.length > 0 &&

          <div>{items} </div>
        }
        </React.Fragment>
      )
       } else {
         return (<h1>There are no data in object</h1>)
       } 
  }
 
  export default Comments