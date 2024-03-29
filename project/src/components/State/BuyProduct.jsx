import React, { Component } from 'react'

// state in React are immutable- do not change directly but change should be made to the copy of the state.
// state are kind of like props but state is private property of the component and is controlled only by that component.

class BuyProduct extends Component {
  constructor(props) {
    super(props)
    this.state = {
      quantity: 0,
    }
  }
  buy = () => {
    this.setState({
      quantity: this.state.quantity + 1,
    })
  }
  render() {
    return (
      <div>
        <strong>Quantity {this.state.quantity} item(s)</strong>
        <br />
        <button className="btn btn-primary" onClick={this.buy}>
          Buy
        </button>
      </div>
    )
  }
}

export default BuyProduct
