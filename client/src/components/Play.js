import React, { Component } from 'react';
import { GameContext } from './Provider';
import {
  DIFFICULTY_EASY,
  DIFFICULTY_MEDIUM,
  DIFFICULTY_HARD
} from '../data/constants';

class Play extends Component {
  state = {
    difficulty: DIFFICULTY_EASY
  };
  onClick = e => {
    e.preventDefault();

    this.props.resetGame(this.state.difficulty);
    console.log('Play initiated');
  };

  handleChange = event => {
    this.setState({ difficulty: event.target.value });
    this.props.updateDifficulty(event.target.value);
    this.props.resetGame(event.target.value);
  };

  render() {
    return (
      <div className="container">
        <button className="play" onClick={this.onClick}>
          PLAY
        </button>
        <select value={this.state.difficulty} onChange={this.handleChange}>
          <option value={DIFFICULTY_EASY}>Easy</option>
          <option value={DIFFICULTY_MEDIUM}>Normal</option>
          <option value={DIFFICULTY_HARD}>Hard</option>
        </select>
      </div>
    );
  }
}

export default () => (
  <GameContext.Consumer>
    {context => (
      <Play
        resetGame={context.resetGame}
        updateDifficulty={context.updateDifficulty}
      />
    )}
  </GameContext.Consumer>
);
