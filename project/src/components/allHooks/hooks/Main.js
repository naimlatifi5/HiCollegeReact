import React from 'react'
import UseStateHook from './UseState'
import UseEffect from './useEffect/UseEffect'
import AsyncUseEffect from './useEffect/AsyncUseEffect'
import UseRefHook from './UseRef'
import UseLayoutEffect from './UseLayoutEffect'
import UseImperativeHandle from './UseImperativeHandle'
import UseMemo from './UseMemo'
import UseReducer from './UseReducer'
import UseDebugValue from './UseDebugValue'
import CounterButtonWithContext from './useContext/components/CounterButtonWithContext.js'
import { CounterProvider } from './useContext/provider/CounterProvider.js'
import CartUpdates from './useContext/components/CartUpdates.js'
import UseCallBack from './useCallback/UseCallback'
export default function Main() {
  return (
    <div>
      <br />
      <h2>Use state hook</h2>
      <br />
      <UseStateHook />
      <br />
      <br />
      <hr />
      <h2>Use effect hook</h2>
      <UseEffect />
      <br />
      <br />
      <h2>Use effect hook with async </h2>
      <AsyncUseEffect></AsyncUseEffect>
      <br />
      <br />
      <hr />
      <h2>Use ref hook</h2>
      <UseRefHook />
      <br />
      <br />
      <hr />
      <h2>Use Layout effect hook</h2>
      <UseLayoutEffect />
      <br />
      <br />
      <hr />
      <h2>Use Imperative Handle hook</h2>
      <UseImperativeHandle />
      <br />
      <br />
      <hr />
      <h2>Use Memo hook</h2>
      <UseMemo />
      <br />
      <br />
      <hr />
      <h2>Use reducer hook</h2>
      <UseReducer />
      <br />
      <br />
      <hr />
      <h2>Use debug value hook</h2>
      <br />
      <br />
      <hr />
      <h2>Use callback hook</h2>
      <UseCallBack></UseCallBack>
      <br />
      <br />
      <hr />
      <UseDebugValue />
      <br />
      <br />
      <hr />
      <h2>Use context hook</h2>
      <CounterProvider>
        <CartUpdates />
        <CounterButtonWithContext />
      </CounterProvider>
    </div>
  )
}

// Similar to componentDidMount and componentDidUpdate:
// useEffect(() => {
//   document.title = name
// })
// re-trigger only once with empty []

// retrigger whenever property has changed
//   useEffect(() => {
//   document.title = name
// }, [name])
