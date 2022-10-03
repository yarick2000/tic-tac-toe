import React from "react";
import { calculateWinner } from '../utils/gameLogic';

const Status = ({squares, nextPlayer}) => {
  const winner = calculateWinner(squares);

  const status = winner 
    ? `Winner: ${winner}` 
    : `Next player: ${nextPlayer}`;  
  return (<div>{ status }</div>);
};

export default Status;