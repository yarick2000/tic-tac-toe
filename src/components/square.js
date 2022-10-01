import React from 'react';
import '../index.css';

const Square = ({ value }) => {
  return (
    <button className="square">
      {value}
    </button>
  );
};

export default Square;