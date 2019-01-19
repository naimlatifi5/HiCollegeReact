import React, {Component} from 'react'
import {WelcomToComponent,CustomFunctionComponent} from './FunctionComponent'
import MyClassComponent from './ClassComponents'
// Main Class component
class Components extends Component {
    render() {
      return (
          <div>
              <h1>Welcome to the class component syntaxt</h1>
               <div className="box1">Component1</div>
               <div className="box2">Component2</div>
                {/* Create above div to components */}
                <WelcomToComponent/>
                <WelcomToComponent/>
        
                <CustomFunctionComponent className="box1" textContent="First container" />
                <CustomFunctionComponent className="box2" textContent="Second container" />

                <MyClassComponent/>
          </div>
      )
    }
  }
   

  export default Components