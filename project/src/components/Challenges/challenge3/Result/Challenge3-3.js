import React from 'react'

class Result extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
    }
    // if no arrow function used in method we need to bind
    //this.increment = this.increment.bind(this)
    //this.decrement = this.decrement.bind(this)
    //this.reset = this.reset.bind(this)
  }
  // if we have arrow function here no need to bind
  increment = () => {
    this.setState({
      count: this.state.count + 1,
    })
  }
  decrement = () => {
    if (this.state.count <= 0) {
      return
    }
    this.setState({
      count: this.state.count - 1,
    })
  }
  reset = () => {
    this.setState({
      count: 0,
    })
  }

  render() {
    return (
      <div>
        <h1>Build a simple quantity counter</h1>
        <button className="inc" onClick={this.increment}>
          +
        </button>
        <input type="number" value={this.state.count} />
        <button
          disabled={this.state.count === 0}
          className="dec"
          onClick={this.decrement}
        >
          -
        </button>
        <button className="reset" onClick={this.reset}>
          Reset
        </button>
      </div>
    )
  }
}

export default Result
