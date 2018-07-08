import React from "react";

import mines from "../data/mines";

const DEFAULT_STATE = {
  message: "Good Luck",
  minesRemaining: 4,
  gameEnded: false,
  randomMine: `mine_${Math.floor(Math.random() * 5) + 1}`,
  mines
};

export const GameContext = React.createContext();

export default class Provider extends React.Component {
  state = {
    ...DEFAULT_STATE,
    resetGame: () => {
      this.setState(DEFAULT_STATE);
    },
    endGame: () => {
      this.setState({ gameEnded: true });
    },
    stepOnMine: (id, src) => {
      const newMines = this.state.mines.map(mine => {
        if (mine.id === id) {
          return { ...mine, clicked: true, src: src };
        }
        return mine;
      });
      this.setState({
        minesRemaining: this.state.minesRemaining - 1,
        mines: newMines
      });
    },
    updateMessage: message => {
      this.setState({ message });
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
