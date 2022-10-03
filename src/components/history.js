import React from "react";

const History = ({history, onClick}) => {
  const moves = history.map((step, move) => {
    const desc = move ?
      'Go to move #' + move :
      'Go to game start';
    return (
      <li key={move}>
        <button onClick={() => onClick(move)}>{desc}</button>
      </li>
    );
  });


  return (<ol>{ moves }</ol>);
};

export default History;