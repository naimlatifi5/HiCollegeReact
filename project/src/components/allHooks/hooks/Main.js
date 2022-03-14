import React from 'react'
//import UseStateHook from './UseState'
import UseEffect from './UseEffect'
export default function Main() {
  return (
    <div>
      <br />
      <br />
      <br />
      <h2>Use effect</h2>

      <UseEffect />
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
