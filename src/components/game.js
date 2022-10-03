import React, { useState, createRef } from 'react';
import { useRefDimensions } from '../utils/hooks';


import Board from './board';
import Status from './status';
import History from './history';
import Size from './size';

import '../index.css';
import { GAME_STATUS, getWinningLine } from '../utils/gameLogic';


const Game = () => {
  const [status, setStatus] = useState(GAME_STATUS.ONGOING);
  const [winner, setWinner] = useState(null);
  const [historySorting, setHistorySorting] = useState(true);
  const [winningSquares, setWinningSquares] = useState(null);
  const [size, setSize] = useState(3);
  const [history, setHistory] = useState([{
    nextPlayer: 'X',
    squares: Array(size * size).fill(null)
  }]);

  const [currentStage] = history.slice(-1);
  const boardRef = createRef();
  const boardDimensions = useRefDimensions(boardRef);


  const jumpTo = (move) => {
    const newHistory = history.slice(0, move + 1);
    setHistory(newHistory);
    if (history.length !== newHistory.length) {
      setWinningSquares(null);
      setWinner(null);
      setStatus(GAME_STATUS.ONGOING);
    }
  };

  const toggleHistorySorting = () => {
    setHistorySorting(!historySorting);
  };

  const handleBoardClick = (index) => {
    const updatedSquares = [...currentStage.squares];
    const currentPlayer = currentStage.nextPlayer;
    const nextPlayer = currentPlayer === 'X' ? 'O' : 'X';

    updatedSquares[index] = currentPlayer;

    setHistory([...history, {
      currentPlayer,
      nextPlayer,
      squares: updatedSquares,
      move: { col: index % size, row: Math.floor(index / size) },
      index
    }]);
  };

  const handleSizeChange = (size) => {
    setHistory([{
      nextPlayer: 'X',
      squares: Array(size * size).fill(null)
    }]);
    setSize(size);
    // reset other params
    setWinningSquares(null);
    setHistorySorting(false);
    setStatus(GAME_STATUS.ONGOING);
    setWinner(null);
  };

  const handleGameEnd = (winner) => {
    if (winner) {
      setWinningSquares(getWinningLine(currentStage.squares));
      setStatus(GAME_STATUS.ENDED);
    }
    else {
      setStatus(GAME_STATUS.DRAW);
    }
    setWinner(winner);
  };

  return (
    <div className="game">
      <div className="game-container">
        <Size onChange={handleSizeChange} width={boardDimensions.width} value={size} minValue={2} />
        <Board
          ref={boardRef}
          squares={currentStage.squares}
          winningSquares={winningSquares}
          onClick={handleBoardClick}
          onGameEnd={handleGameEnd}
        />
      </div>
      <div className="game-info">
        <Status 
          player={status === GAME_STATUS.ONGOING ? currentStage.nextPlayer : winner} 
          status={status}  />
        <History 
          history={history} 
          sorting={historySorting}
          onClick={jumpTo} 
          onSort={toggleHistorySorting}/>
      </div>
    </div>
  );
};

export default Game;