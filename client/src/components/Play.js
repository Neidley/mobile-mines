import React, { Component } from 'react';

class Play extends Component {
  onClick(e) {
    e.preventDefault();

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
