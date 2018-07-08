import React, { Component } from "react";
import "./App.css";
import Gameboard from "./components/Gameboard";
import Play from "./components/Play";
import { GameContext } from './components/Provider';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
          <Gameboard />
        </div>
      </div>
    );
  }
}

const Header = () => (
  <GameContext.Consumer>
    {context => (
      <header className="App-header">
        <div className="container">
          <h1 className="App-title">Welcome to Mobile Mines</h1>
          <p className="App-intro">{context.message}</p>
          <Play />
        </div>
      </header>
    )}
  </GameContext.Consumer>
);

export default App;
