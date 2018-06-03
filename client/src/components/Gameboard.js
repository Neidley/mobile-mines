import React, { Component } from 'react';

import mine from '../img/mine.png';

import explosion from '../img/explosion.png';
import whew from '../img/whew.png';

//import Explosion from './Explosion';
//import Whew from './Whew';

class Gameboard extends Component {
  onClick(e) {
    e.preventDefault();

    let mine = e.target;

    let coinflip = Math.floor(Math.random() * 2);

    switch (coinflip) {
      case 1:
        console.log('WHEW!');
        mine.src = whew;
        break;
      case 0:
        console.log('BOOM!');
        mine.src = explosion;
        break;
      default:
        console.log("Somebody's poisoned the water hole!");
    }

    console.log(coinflip);
    console.log(mine);
  }

  render() {
    return (
      <div className="container" style={{ background: './img/ocean.png' }}>
        <div className="row">
          <div className="col-md-2">
            <img id="mine" onClick={this.onClick} src={mine} alt={'mine'} />
          </div>
        </div>
      </div>
    );
  }
}

export default Gameboard;
