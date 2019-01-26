import React, {Component} from 'react'
import ComponentState from './ComponentState'
import BuyProduct from './BuyProduct'
class MainState extends Component {

  render() {
    return (
    <div>
      <ComponentState name="hello prop"></ComponentState>
      <hr/>
      <BuyProduct></BuyProduct>
      <hr/>
    </div>
  )
  }
}

export default MainState
