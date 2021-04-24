
import React, { Component } from "react"

class ClassComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
          toggle: false
        }
    }
    setToggle = () => {
       this.setState({ toggle: !this.state.toggle })
    }
    render() {
        return (
          <div className="class-component">
            <button type="button" onClick={ this.setToggle }>
                Toggle me
            </button>
            { this.state.toggle ? <div> This is a div to toggle </div> : null }
          </div>
        ) 
    }
}

export default ClassComponent