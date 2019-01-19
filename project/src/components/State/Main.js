import React, {Component} from 'react'
import ComponentState from './ComponentState'
import BuyProduct from './BuyProduct'
class MainState extends Component {

  render() {
    return <div>
    <h1>Hello State- I am in a need for state</h1>
    <ComponentState name="hello prop"></ComponentState>
    <BuyProduct></BuyProduct>
  </div>
  }
}

export default MainState
