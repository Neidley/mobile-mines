import React, { Component } from 'react';
import mine from '../img/mine.png';
//import explosion from '../img/explosion.png';
//import whew from '../img/whew.png';

class Gameboard extends Component {
  onClick(e) {
    e.preventDefault();

    let mine = e;

    let coinflip = Math.floor(Math.random() * 2);

    if (coinflip === 1) {
      console.log('WHEW!');
    } else if (coinflip === 0) {
      console.log('BOOM!');
    } else {
      console.log("Somebody's poisoned the water hole!");
    }

    console.log(Math.floor(Math.random() * 2));
    console.log(mine);
  }

  render() {
    return (
      <div className="container" style={{ background: './img/ocean.png' }}>
        <ul>
          {
            <img
              className="mine"
              onClick={this.onClick}
              src={mine}
              alt={'mine'}
            />
          }
        </ul>
      </div>
    );
  }
}

export default Gameboard;
