import React, { Component } from "react";
import Challenge1 from "./challenge1/Challenge1";
import Challenge2 from "./challenge2/Challenge2";
import Challenge3 from "./challenge3/Challenge3";
import Challenge4 from "./challenge4/Challenge4";
import Challenge5 from "./challenge5/Challenge5";
import Challenge6 from "./challenge6/Challenge6";
import Challenge7 from "./challenge7/Challenge7";
import Challenge9 from "./challenge9/Challenge9";
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
        <hr />
        <Challenge6 />
        <hr />
        <Challenge7 />
        <hr />
        <Challenge9 />
      </div>
    );
  }
}

export default MainChallenge;
