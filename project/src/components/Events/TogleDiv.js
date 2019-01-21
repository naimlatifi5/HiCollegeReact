import React, {Component} from 'react'
class DivToggler extends Component {
  constructor(props) {
      super(props);
      this.state = {divToggler: true}
  }
  handleClick = () => {
    this.setState( state => ({
        divToggler: !state.divToggler
    }))
  }
  render() {
    return( 
      <div className="div-toggle">
        <div className="divToggler" onClick={this.handleClick}>{this.state.divToggler ? "On" : "Off"}</div>
      </div>
   )
  }
}

export default DivToggler
