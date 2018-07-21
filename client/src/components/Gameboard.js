import React, { Component } from "react";

import { GameContext } from "./Provider";
import Mine from "./Mine";
import explosion from "../img/explosion.png";
import whew from "../img/whew.png";
import lookout from "../img/lookout.png";

class Gameboard extends Component {
  onClick = ({ row, id, clicked }) => {
    const {
      endGame,
      gameEnded,
      minesRemaining,
      randomMines,
      stepOnMine,
      updateMessage,
    } = this.props;

    const randomMine = randomMines[row];
    if (gameEnded) {
      return;
    }

    // Checks if mine has already been clicked, if so updates message
    if (clicked || gameEnded) {
      updateMessage('Defuse another mine.');
      return;
    }

    // Determines if mine clicked is dud or explosive, referencing random_mine
    if (id === randomMine) {
      console.log("BOOM!");
      stepOnMine(row, id, explosion);
      updateMessage('You Lose.');
      endGame();
    } else if (
      parseInt(id.slice(-1), 10) + 1 === parseInt(randomMine.slice(-1), 10) ||
      parseInt(id.slice(-1), 10) - 1 === parseInt(randomMine.slice(-1), 10)
    ) {
      console.log("LOOK OUT!");
      stepOnMine(row, id, lookout);
    } else {
      console.log("WHEW!");
      stepOnMine(row, id, whew);
    }

    if (minesRemaining === 1) {
      endGame();
      updateMessage('Victory');
      console.log("you win");
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
  };

  render() {
    const renderMines = this.props.mines.map((row, idx) => {
      const rowOfMines = row.map(mine => {
        return (  
          <Mine
            key={mine.id}
            id={mine.id}
            row={idx}
            clicked={mine.clicked}
            src={mine.src}
            onClick={this.onClick}
          />
        );
      })
      return (
        <div key={idx} className="row">
          <div className="col-md-2">{rowOfMines}</div>
        </div>
      );
    });

    return (
      <div className="container">
      {renderMines}
      </div>
    );
  }
}

export default () => (
  <GameContext.Consumer>
    {context => (
      <Gameboard
        minesRemaining={context.minesRemaining}
        endGame={context.endGame}
        gameEnded={context.gameEnded}
        stepOnMine={context.stepOnMine}
        randomMines={context.randomMines}
        mines={context.mines}
        updateMessage={context.updateMessage}
      />
    )}
  </GameContext.Consumer>
);
