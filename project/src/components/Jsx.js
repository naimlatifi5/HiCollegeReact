import React from 'react'

const users = {
  person1: "Sara Holm",
  person2: "Naim Latifi",
  employee: "HIQ"
}
const headingId = 'myHeading'
const paragraphStyle = {
  color: "red"
}
const emp = <h1>Employee at {users.employee}</h1>

function printUserNames(user) {
  return `${user.person1} ${user.person2}`
}
class Jsx extends React.Component {
  render() {
    // jsx a javascript extension that allow as to write js code that looks like html 
    console.log("React object properties ", React);
    return (
      // jsx syntax and where javascript transpiles the code under the hood
      // attributes in jsx are named as camelCase i.e className,  onClick, onSubmit etc...
      <div class="parent-tag">
        <h1 className="heading" id={headingId}>Hello Jsx</h1> 
        <p style={paragraphStyle}>Users name are: {printUserNames(users)}</p>
        <h2>{emp}</h2>
          
          {
           //Jsx will transplate to this javascript code on runtime, if we do not want to use jsx as above we can then write pure js syntax as below
            React.createElement('div', 
            {className: 'container'},
             React.createElement(
              'h1',
              {className: 'heading'},
              'Hello World with Javascript'
              )
            )
          }

      </div>
    ) 
  }
}

export default Jsx
