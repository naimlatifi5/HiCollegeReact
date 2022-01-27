import React, { Component } from 'react'

class ClassComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      toggle: false,
      name: 'Superman',
    }
  }
  setToggle = () => {
    this.setState({ toggle: !this.state.toggle })
  }
  handleChange = (e) => {
    this.setState({
      name: e.target.value,
    })
  }
  componentDidMount() {
    document.title = this.state.name
  }
  componentDidUpdate() {
    document.title = this.state.name
  }
  render() {
    return (
      <div className="class-component">
        <button type="button" onClick={this.setToggle}>
          Toggle me
        </button>
        {this.state.toggle ? <div> This is a div to toggle </div> : null}
        <br />
        <br />
        <p>Changing input will updated page title in browser tab</p>
        <input
          type="text"
          value={this.state.name}
          onChange={this.handleChange}
        />
      </div>
    )
  }
}

export default ClassComponent
