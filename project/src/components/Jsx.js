import React from 'react'

const users = {
  person1: "Sara Holm",
  person2: "Naim Latifi",
  employee: "HIQ"
}

//const emp = <h1>Emply is {users.employee}</h1>

function printUserNames(user) {
  return `${user.person1} ${user.person2}`
}
class Jsx extends React.Component {
  render() {
    // jsx a javascript extension that allow as to write js code that looks like html 
    console.log("React object properties ", React);
    return (
      // jsx syntax
      <div>
        <h1 className="heading">Hello Jsx</h1>
        <p>Users name are: {printUserNames(users)}</p>
      </div>
      //emp

      //Jsx will transplate to this javascript code on runtime, if we do not want to use jsx as above we can then write pure js syntax as below
      // React.createElement(
      //   'div',
      //   {className: 'container'},
      //    null,
      //    React.createElement(
      //   'h1',
      //   {className: 'heading'},
      //   'Hello World with Javascript'
      //   )
      // )
    ) 
  }
}

export default Jsx
