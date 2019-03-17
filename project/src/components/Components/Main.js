import React from 'react'
import {WelcomToComponent} from './FunctionComponent'
import {CustomFunctionComponent} from './FunctionComponent'
import MyClassComponent from './ClassComponents'
import Challenge from './Challenge';

const Components = () => {
  return (
    <React.Fragment>
      <h1>Welcome to the class component syntax.</h1>
      <div className="box1">Component1</div>
      <div className="box2">Component2</div>

      <WelcomToComponent />

      <CustomFunctionComponent className="box1" textContent="First container" />
      <CustomFunctionComponent className="box2" textContent="Second container" />

      <MyClassComponent/>
      <div>------------------ Your challenge result below -------------</div>
       {/* 
        <Challenge></Challenge>
     */}
    </React.Fragment>
  )
}

export default Components
