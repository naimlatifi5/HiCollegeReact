import React, { useState, useEffect } from 'react'
import { Promise } from 'bluebird'
Promise.config({ cancellation: true })

function fetchUser() {
  return new Promise((resolve) => {
    console.count('Fetching user....')
    setTimeout(() => {
      let response = { id: 1, name: 'Naim', lastName: 'Latifi' }
      resolve(response)
    }, 2000)
  })
}

const asyncComponent = () => {
  let [id, setId] = useState('loading...')
  let [name, setName] = useState('loading...')
  let [lastName, setLastName] = useState('loading...')

  // useEffect hook
  useEffect(() => {
    let promise = fetchUser().then((user) => {
      let { id, name, lastName } = user
      setId(id)
      setName(name)
      setLastName(lastName)
    })
    // clean up function
    return () => {
      promise.cancel()
    }
  }, [])
  return (
    <div className="wrapper-user">
      <p>ID: {id}</p>
      <p>Name: {name}</p>
      <p>Last name: {lastName}</p>
    </div>
  )
}

export default asyncComponent
