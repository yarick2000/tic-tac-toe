import React from "react";
import { GAME_STATUS } from '../utils/gameLogic';

const Status = ({nextPlayer, winner, status}) => {

  let desc = null;
  switch (status) {
    case GAME_STATUS.ONGOING: 
      desc = `Next player: ${nextPlayer}`;
      break;
    case GAME_STATUS.ENDED:
      desc = `Winner: ${winner}`;
      break;
    case GAME_STATUS.DRAW:
      desc = 'Draw';
      break;
    default: 
      throw new Error('Non supported game status');
  }

  return (<div>{ desc }</div>);
};

export default Status;