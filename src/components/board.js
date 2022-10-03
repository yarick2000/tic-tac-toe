import React, { useEffect, useState } from 'react';
import '../index.css';
import { calculateWinner } from '../utils/gameLogic';

import Square from './square';

const BoardRow = ({squares, renderSquare}) => {
  const renderedSquares = [];
  squares.forEach((square) => {
    renderedSquares.push(renderSquare(square));
  }); 
  return (
    <div className='board-row'>
    {renderedSquares}
    </div>  
  );
}

const Board = React.forwardRef(({ 
  squares, 
  winningSquares,
  onClick, 
  onGameEnd 
},ref)=>  {
  const [gameFinished, setGameFinished] = useState(false);
  const winner = calculateWinner(squares);
  const size = Math.sqrt(squares.length);
  const rows = [];

  const handleClick = (i) => {
    // if square already filled do nothing
    if (squares[i]) return;
    if (onClick) onClick(i);
  };

  const renderSquare = (index) => {
    const opts = {
      value: squares[index]
    };
    if (!winner) {
      opts.onClick = (() => handleClick(index));
    }
    if (winningSquares && winningSquares.includes(index)) {
      opts.marked = true;
    }
    return (
      <Square key={index} {...opts} />
    );
  };

  useEffect(() => {
    if (winner || !squares.includes(null)) {
      // only run onGameEnd in case if game wasn't marked as finished yet
      if (!gameFinished && onGameEnd) {
        onGameEnd(winner);
      }
      setGameFinished(true);
    }
    else {
      // reset gameFinished state in case if game was previously finished
      // but then was rolled back to specific step or field size has been
      // changed
      if (gameFinished) {
        setGameFinished(false);
      }
  }
  },[squares, winner, gameFinished, onGameEnd ]);

  for (let i = 0; i < size; i++) {
    const rowSquares = [];
    for (let j = 0; j < size; j++) {
      rowSquares.push(i * size + j);
    }
    rows.push(<BoardRow key={i} 
      squares={rowSquares} 
      winningSquares={winningSquares} 
      renderSquare={renderSquare} 
    />);
  }

  return (<div ref={ref} className="game-board">{rows}</div>);
});

export default Board;