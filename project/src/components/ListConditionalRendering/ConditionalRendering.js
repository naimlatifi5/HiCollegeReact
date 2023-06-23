import React from 'react'

const UserLoggedIn = ({ name }) => {
  return <h1>Welcome back {name} </h1>
}
const UserNotLoggedIn = () => {
  return <button className="btn btn-secondary">Login</button>
}

const IsUserLoggedIN = ({ isLoggedIn }) => {
  return isLoggedIn ? <UserLoggedIn name="Naim" /> : <UserNotLoggedIn />
}

export default IsUserLoggedIN
