import React from 'react'
import ClassComponent from './hooks/ClassComponent.js'
import HooksComponent from './hooks/HooksCompnent.js'
import CounterButton from './CounterButton.js'
import CounterButtonWithContext from './useContext/components/CounterButtonWithContext.js'
import { CounterProvider } from './useContext/provider/CounterProvider.js'
import CartUpdates from './useContext/components/CartUpdates.js'
import AsyncOperation from './asyncOperation/asyncComponent.js'
const MainComponent = () => {
  return (
    <>
      {/* Avoid the uneccessary div wrapper */}
      <h1>Hooks</h1>
      <h2>Example with class component</h2>
      <ClassComponent></ClassComponent>
      <hr />
      <h4>Example with Hooks</h4>
      <HooksComponent></HooksComponent>
      <hr />
      <br />
      <CounterButton></CounterButton>
      <hr />
      <h2>Aync operation and useEffect hooks</h2>
      <AsyncOperation></AsyncOperation>
      <br />
      <hr />
      <CounterProvider>
        <h2>Counter Button with context</h2>
        <CartUpdates />
        <CounterButtonWithContext />
      </CounterProvider>
    </>
  )
}
export default MainComponent
