import React, {Component} from 'react'

// state only can be used within class Component and cannot be used with function component
// state in React are immutable- do not change directly but change should be made to the copy of the state.
// state are kind of like props but state is private property of the component and is controlled only by that component.


class BuyProduct extends Component {
    // to add a state create a constructor function that initalize the state
    // it is recommended even thought we do not send props to component to assign in the constructor function
    constructor (props) {
      super (props); // super is a must when using constructore - for more read about how works with Inheritance in OOP
      this.state = {
          name: 'Naim',
          quantity: 0
      }
      // we need to bind this for buy function - with use of arrow function from ES6 you do not need to bind this
      //this.buy = this.buy.bind(this)
   }
   //buy () {} is converted to ES6 and arrow funcition declaration
   buy = () => {
    console.log( "You bought an iphone 8+");
    // setState schedule and update a component state. When a state changes the component respons by re-rendering.
    this.setState({
        quantity: this.state.quantity + 1
    })
   } 
   
  render() {
    return <div>
    <p>Iphone 8+ - 8900kr</p>
    <strong>Quantity {this.state.quantity} item(s)</strong><br/>
    <button onClick={this.buy}>Buy</button>
  </div>
  }
}

export default BuyProduct
