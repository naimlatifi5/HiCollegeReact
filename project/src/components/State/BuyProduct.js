import { Component } from 'react'

// state only can be used within class Component and cannot be used with function component
// state in React are immutable- do not change directly but change should be made to the copy of the state.
// state are kind of like props but state is private property of the component and is controlled only by that component.


class BuyProduct extends Component {
    constructor (props) {
      super (props); 
      this.state = {
          quantity: 0
      }
   }
   buy = () => {
    this.setState({
      quantity: this.state.quantity + 1
    })
   } 
}

export default BuyProduct
