import React from 'react'
import ClassComponent from './hooks/ClassComponent.js'
import HooksComponent from './hooks/HooksCompnent.js'

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
    </>
  )
}
export default MainComponent
