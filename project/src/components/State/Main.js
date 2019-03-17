import React, {Component} from 'react'
import ComponentState from './ComponentState'
import BuyProduct from './BuyProduct'
import Challenge from './Challenge';
class MainState extends Component {

  render() {
    return (
    <div>
      <ComponentState name="hello prop"></ComponentState>
      <hr/>
      <BuyProduct></BuyProduct>
      <hr/>
      <div>------------------ Your challenge result below -------------</div>
      {/* 
        <Challenge></Challenge>
      */}
    </div>
  )
  }
}

export default MainState
