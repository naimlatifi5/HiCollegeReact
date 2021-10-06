import React from 'react'
import { CounterProvider } from './components/hooks/useContext/CounterProvider'
import './css/App.css'
import './css/navigation.css'
import Header from './page/Header'
import Main from './page/Main'

const App = () => {
  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  )
}

export default App
