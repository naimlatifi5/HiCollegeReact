import React from 'react'
import { fetchData } from './customHooks/fetchData'
const UseDebugValue = () => {
  console.log(
    fetchData('https://jsonplaceholder.typicode.com/posts/1/comments')[0],
  )
  return <div>UseDebugValue</div>
}

export default UseDebugValue
