import React, { Component } from 'react'
import Challenge1 from './challenge1/Challenge1'
import Challenge2 from './challenge2/Challenge2'
import Challenge3 from './challenge3/Challenge3'
class MainChallenge extends Component {
  render() {
    return (
      <div>
        <Challenge1 />
        <hr />
        <Challenge2 />
        <hr />
        <Challenge3 />
      </div>
    )
  }
}

export default MainChallenge
