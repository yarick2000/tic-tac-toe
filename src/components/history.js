import React from "react";

const History = ({history, sorting, onClick, onSort}) => {
  let moves = history.map((step, move) => {
    const desc = move ?
      'Go to move #' + move :
      'Go to game start';
    const opts = {};
    if (move === history.length - 1) {
      opts.className = "active";
    }
    return (
      <li {...opts} key={move}>
        <button onClick={() => onClick(move)}>{desc}</button>
        {step.move && (
          <span className="move">P:{step.currentPlayer} C:{step.move.col + 1} R: {step.move.row + 1}</span>
        )}
      </li>
    );
  });

  if (sorting) {
    moves.reverse();
  }

  return (
  <div>
    <ol reversed={sorting}>{ moves }</ol>
    <button className="sort" onClick={onSort}>{`Sort ${(sorting ? 'ASC' : 'DESC')}`}</button>
  </div>
  );
};

export default History;