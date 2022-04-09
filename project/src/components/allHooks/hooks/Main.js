import React from 'react'
import UseStateHook from './UseState'
import UseEffect from './UseEffect'
import UseRefHook from './UseRef'
import UseLayoutEffect from './UseLayoutEffect'
export default function Main() {
  return (
    <div>
      <br />
      <h2>Use state hook</h2>
      <br />
      <UseStateHook />
      <br />
      <h2>Use effect hook</h2>
      <UseEffect />
      <h2>Use ref hook</h2>
      <UseRefHook />
      <h2>Use Layout effect hook</h2>
      <UseLayoutEffect />
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
