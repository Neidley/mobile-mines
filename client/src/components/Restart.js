import React, { Component } from 'react';

class Restart extends Component {
  onClick(e) {
    e.preventDefault();

    window.location.reload();
    console.log('Mines reset.');
  }

  render() {
    return (
      <div className="container">
        <button onClick={this.onClick}>RESTART</button>
      </div>
    );
  }
}

export default Restart;
