import React, { Component } from 'react';

import './css/App.css';
import './css/navigation.css';
import Header from './page/Header'
import Main from './page/Main'

class App extends Component {
  render() {
    return (
      <div className="App">
       <Header/>
        <Main />
      </div>
    );
  }
}

export default App;
