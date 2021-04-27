import React from 'react'
// list rendering 

function UserLogedIn(props) {
    return <h1>Welcome back {props.name} </h1>
}
function UserNotLogedIn() {
   return <button className="btn btn-secondary">Logga in</button>
}

function IsUserLogedIN (props) {
    const isLogedIn = props.isLoggedIn;
    return isLogedIn ? <UserLogedIn name="Naim" /> : <UserNotLogedIn /> 
  
}

export default IsUserLogedIN