import React, { useState } from 'react';

import Board from './board';
import Status from './status';
import History from './history';

import '../index.css';


const Game = () => {
  const [history, setHistory] = useState([{
      nextPlayer: 'X',
      squares: Array(9).fill(null)
  }]);

  const [currentStage] = history.slice(-1);

  const jumpTo = (move) => {
    const newHistory = history.slice(0, move + 1);
    setHistory(newHistory);
  };

  const handleBoardClick = (index) => {
    const updatedSquares = [...currentStage.squares];
    const currentPlayer = currentStage.nextPlayer;
    const nextPlayer = currentPlayer === 'X' ? 'O' : 'X';

    updatedSquares[index] = currentPlayer;

    setHistory([...history, {
      nextPlayer,
      squares: updatedSquares
    }]);
  };

  return (
    <div className="game">
      <div className="game-board">
        <Board
          squares={currentStage.squares}
          onClick={(index) => handleBoardClick(index)}
        />
      </div>
      <div className="game-info">
        <Status squares={currentStage.squares} nextPlayer={currentStage.nextPlayer} />
        <History history={history} onClick={(move) => jumpTo(move)} />
      </div>
    </div>
  );
};

export default Game;