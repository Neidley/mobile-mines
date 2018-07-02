import React, { Component } from 'react';
import './App.css';
import Gameboard from './components/Gameboard';
import Play from './components/Play';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Mobile Mines</h1>
          <p className="App-intro">Good Luck.</p>
          <Play />
        </header>
        <div className="container">
          <Gameboard />
        </div>
      </div>
    );
  }
}

export default App;
