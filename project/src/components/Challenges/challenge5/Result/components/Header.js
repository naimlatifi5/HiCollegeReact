import React from 'react'
import { useAuth } from '../AuthContext/AuthProvider.js'
const Header = () => {
  const [auth, handleAuth] = useAuth(useAuth)
  return (
    <div>
      <h1>{auth === false ? 'You need to Login' : 'Welcome Naim'}</h1>
      <button type="button" onClick={handleAuth}>
        {auth === false ? 'Login' : 'Logout'}
      </button>
    </div>
  )
}

export default Header
