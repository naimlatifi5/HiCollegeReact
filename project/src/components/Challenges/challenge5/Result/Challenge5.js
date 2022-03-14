import React from 'react'
import Header from './components/Header'
import Page from './components/Page'
import { AuthProvider } from './AuthContext/AuthProvider.js'
const Challenge5 = () => {
  return (
    <div>
      <h1>
        Challenge5- Build a simple authentication app with use of Context API
      </h1>
      <br />
      <br></br>
      <AuthProvider>
        <Header></Header>
        <Page></Page>
      </AuthProvider>
    </div>
  )
}

export default Challenge5
