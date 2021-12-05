import React from 'react'
import ClassComponent from './ClassComponent.js'
import HooksComponent from './HooksCompnent.js'
import CounterButton from './CounterButton.js'
import CounterButtonWithContext from './CounterButtonWithContext.js'
import { CounterProvider } from './useContext/CounterProvider.js'
import CartUpdates from './CartUpdates.js'
import AsyncOperation from './asyncOperation/asyncComponent.js'
const MainComponent = () => {
  return (
    <>
      {/* Avoid the uneccessary div wrapper */}
      <h1>Hooks</h1>
      <h4>Class component</h4>
      <ClassComponent></ClassComponent>
      <h4>Hooks</h4>
      <HooksComponent></HooksComponent>
      <br />
      <CounterButton></CounterButton>

      <br />
      <CounterProvider>
        <h2>Counter Button with context</h2>
        <CartUpdates />
        <CounterButtonWithContext />
      </CounterProvider>
      <h2>Aync operation and useEffect hooks</h2>
      <AsyncOperation></AsyncOperation>
    </>
  )
}
export default MainComponent
