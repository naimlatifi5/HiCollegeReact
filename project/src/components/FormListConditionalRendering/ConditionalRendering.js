import React from 'react'
// list rendering 

function UserLogedIn(props) {
    return <h1>Welcome back {props.name} </h1>

}
function UserNotLogedIn(props) {
    return <button className="btn btn-secondary">Logga in</button>
}
function IsUserLogedIN (props) {
 const isLogedIn = props.isLoggedIn;
 if(isLogedIn) {
     return <UserLogedIn name="Naim"/>
 }
 return <UserNotLogedIn/>
}

  export default IsUserLogedIN