import React from 'react';
import '../index.css';
import { calculateWinner } from '../utils/gameLogic';

import Square from './square';

const Board = ({ squares, onClick }) => {
  const winner = calculateWinner(squares);

  const handleClick = (i) => {
    // if square already filled do nothing
    if (squares[i]) return;
    if (onClick) onClick(i);
  };

  const renderSquare = (i) => {
    const opts = {
      value: squares[i]
    };
    if (!winner) {
      opts.onClick = (() => handleClick(i));
    }
    return (
      <Square {...opts} />
    );
  };

  return (
    <div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

export default Board;