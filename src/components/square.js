import React from 'react';
import '../index.css';

const Square = ({ value, marked, onClick }) => {
  const className = ["square"];
  if (marked) className.push("marked");
  return (
    <button 
      className={className.join(' ')}
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export default Square;