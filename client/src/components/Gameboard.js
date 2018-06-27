import React, { Component } from 'react';

import mine from '../img/mine.png';
import explosion from '../img/explosion.png';
import whew from '../img/whew.png';
import lookout from '../img/lookout.png';

const random_mine = `mine_${Math.floor(Math.random() * 5) + 1}`;
let mines_remaining = 4;

class Gameboard extends Component {
  onClick(e) {
    e.preventDefault();

    let mine = e.target;
    let url = e.target.src;

    // Checks if mine has already been clicked, if so return nil
    if (
      url === `http://localhost:3000${explosion}` ||
      url === `http://localhost:3000${whew}` ||
      document.getElementsByClassName('App-intro')[0].innerText === 'You Lose.'
    ) {
      return;
    }

    // Determines if mine clicked is dud or explosive, referencing random_mine
    if (mine.id === random_mine) {
      console.log('BOOM!');
      mine.src = explosion;
      document.getElementsByClassName('App-intro')[0].innerText = 'You Lose.';
    } else if (
      parseInt(mine.id.slice(-1), 10) + 1 ===
        parseInt(random_mine.slice(-1), 10) ||
      parseInt(mine.id.slice(-1), 10) - 1 ===
        parseInt(random_mine.slice(-1), 10)
    ) {
      console.log('LOOK OUT!');
      mine.src = lookout;
      mines_remaining -= 1;
    } else {
      console.log('WHEW!');
      mine.src = whew;
      mines_remaining -= 1;
    }

    if (mines_remaining === 0) {
      document.getElementsByClassName('App-intro')[0].innerText = 'Victory!';
    }

    /*
    console.log(mine);
    console.log(mine.id);
    console.log(random_mine);
    console.log(parseInt(mine.id.slice(-1), 10) + 1);
    console.log(parseInt(mine.id.slice(-1), 10) - 1);
    console.log(random_mine.slice(-1));
    console.log(mines_remaining);
    */
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-2">
            <img
              className="mine"
              id="mine_1"
              onClick={this.onClick}
              src={mine}
              alt={'mine'}
            />
            <img
              className="mine"
              id="mine_2"
              onClick={this.onClick}
              src={mine}
              alt={'mine'}
            />
            <img
              className="mine"
              id="mine_3"
              onClick={this.onClick}
              src={mine}
              alt={'mine'}
            />
            <img
              className="mine"
              id="mine_4"
              onClick={this.onClick}
              src={mine}
              alt={'mine'}
            />
            <img
              className="mine"
              id="mine_5"
              onClick={this.onClick}
              src={mine}
              alt={'mine'}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Gameboard;
