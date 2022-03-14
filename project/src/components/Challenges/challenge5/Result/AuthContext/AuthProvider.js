import React, { useState, useContext } from 'react'
// write your code below this line
import { AuthContext } from './AuthContext'

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(false)

  const handleAuth = () => {
    setAuth(!auth)
  }

  return (
    <AuthContext.Provider value={[auth, handleAuth]}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('UseSAuth can only be used inside AuthProvider')
  }
  return context
}
