import React, {Component} from 'react'
import ComponentState from './ComponentState'
import BuyProduct from './BuyProduct'
class MainState extends Component {

  render() {
    return (
    <div class="product-wrapper">
      <ComponentState name="hello prop"></ComponentState>
      <hr/>
      <BuyProduct></BuyProduct>
    </div>
  )
  }
}

export default MainState
