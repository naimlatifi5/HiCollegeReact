import React, { Component } from 'react'
import Challenge1 from './challenge1/Challenge1'
import Challenge2 from './challenge2/Challenge2'
import Challenge3 from './challenge3/Result/Challenge3-3'
import Challenge4 from './challenge4/Challenge4'
import Challenge5 from './challenge5/Challenge5'
class MainChallenge extends Component {
  render() {
    return (
      <div>
        <Challenge1 />
        <hr />
        <Challenge2 />
        <hr />
        <Challenge3 />
        <hr />
        <Challenge4 />
        <hr />
        <Challenge5 />
      </div>
    )
  }
}

export default MainChallenge
