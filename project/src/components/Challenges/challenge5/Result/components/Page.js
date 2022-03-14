import React from 'react'
import { useAuth } from '../AuthContext/AuthProvider.js'
const Page = () => {
  const [auth] = useAuth(useAuth)
  return (
    <div>
      <h1>
        {auth === false ? 'Welcome to start page' : 'Welcome to Dashboard page'}
      </h1>
    </div>
  )
}

export default Page
