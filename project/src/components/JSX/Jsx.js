import React from 'react'

const users = {
  person1: 'Naim Latifi',
  employee: 'HIQ',
}

const headingId = 'myHeading'

const paragraphStyle = {
  color: 'red',
}

const objectResponse = {
  succes: true,
}

const emp = <h1>Employee at {users.employee}</h1>

const printUserNames = (user) => {
  return `${user.person1}`
}

// example - if statement with jsx syntax
let message = ''
if (objectResponse.succes) {
  message = <h1>Success</h1>
} else {
  message = <h1>Error</h1>
}

const Jsx = () =>  {
    // jsx a javascript extension that allow as to write js code that looks like html
    return (
      // jsx syntax and where javascript transpiles the code under the hood
      // attributes in jsx are named as camelCase i.e className,  onClick, onSubmit etc...
      <div className="parent-tag">
        <h1 className="heading" id={headingId}>
          Hello Jsx
        </h1>
        <p style={paragraphStyle}>User name: {printUserNames(users)}</p>
        {
          //Jsx will transplate to this javascript code on runtime, if we do not want to use jsx as above we can then write pure js syntax as below
          React.createElement(
            'div',
            { className: 'container' },
            React.createElement(
              'h1',
              { className: 'heading' },
              'Hello World with Javascript',
            ),
          )
        }
        What is response: {message}
        {emp}
      </div>
    )
}

export default Jsx
