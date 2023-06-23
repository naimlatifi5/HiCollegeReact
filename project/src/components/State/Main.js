import React from 'react'
import ComponentState from './ComponentState'
import BuyProduct from './BuyProduct'
const MainState = () => {
    return (
      <div className="product-wrapper">
        <ComponentState></ComponentState>
        <hr />
        <BuyProduct></BuyProduct>
      </div>
    )
}

export default MainState
