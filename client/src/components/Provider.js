import React from "react";

import mines, { randomMines } from "../data/mines";
import { DIFFICULTY_EASY } from '../data/constants';

const DEFAULT_STATE = {
  message: "Good Luck",
  minesRemaining: DIFFICULTY_EASY * mines[0].length - DIFFICULTY_EASY,
  gameEnded: false,
  randomMines: randomMines(DIFFICULTY_EASY, mines[0].length),
  mines: mines.slice(0,DIFFICULTY_EASY),
  difficulty: DIFFICULTY_EASY,
};

export const GameContext = React.createContext();

export default class Provider extends React.Component {
  state = {
    ...DEFAULT_STATE,
    resetGame: difficulty => {
      this.setState({
        ...DEFAULT_STATE,
        mines: mines.slice(0, difficulty),
        minesRemaining: difficulty * mines[0].length - difficulty,
        randomMines: randomMines(difficulty, mines[0].length),
        difficulty: difficulty
      });
    },
    endGame: () => {
      this.setState({ gameEnded: true });
    },
    stepOnMine: (rowNumber, id, src) => {
      const newMines = this.state.mines.map((row, idx) => {
        if(idx === rowNumber){
          return row.map(mine =>  {
            if (mine.id === id) {
              return { ...mine, clicked: true, src: src };
            }
            return mine;
          });
        }

        return row;
      })
  
      this.setState({
        minesRemaining: this.state.minesRemaining - 1,
        mines: newMines
      });
    },
    updateMessage: message => {
      this.setState({ message });
    },
    updateDifficulty: difficulty => {
      this.setState({ difficulty: parseInt(difficulty, 10) });
    }
  };

  render() {
    return (
      <GameContext.Provider
        value={{
          ...this.state
        }}
      >
        {this.props.children}
      </GameContext.Provider>
    );
  }
}
