import React, { Component } from 'react';
//import Gameboard from './Gameboard';

class Play extends Component {
  onClick(e) {
    e.preventDefault();

    window.location.reload();
    console.log('Play initiated');
  }

  render() {
    return (
      <div className="container">
        <button onClick={this.onClick}>PLAY</button>
      </div>
    );
  }
}

export default Play;
