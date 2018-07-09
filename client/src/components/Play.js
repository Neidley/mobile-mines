import React, { Component } from 'react';
import { GameContext } from './Provider';
//import Gameboard from './Gameboard';

class Play extends Component {
  onClick = (e) => {
    e.preventDefault();

    this.props.resetGame()
    console.log('Play initiated');
  }

  render() {
    return (
      <div className="container">
        <button className="play" onClick={this.onClick}>
          PLAY
        </button>
      </div>
    );
  }
}

export default () => (
  <GameContext.Consumer>
    {context => <Play resetGame={context.resetGame} />}
  </GameContext.Consumer>
);

