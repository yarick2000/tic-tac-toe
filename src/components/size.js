import React from 'react';
import '../index.css';

const Size = ({ onChange, width, value, minValue }) => {
  const handleInput = (e) => {
    if (onChange) {
      const value = parseInt(e.target.value, 10);
      onChange(value);
    }
  };

  return (
    <div className="game-size">
      <input
        type="number"
        onChange={handleInput}
        value={value}
        min={minValue}
        style={{
          // have to use this '- 7' since arrow block for input with type=number takes additional space
          width: `${width - 7}px`
        }}
      />
    </div>
  );
};

export default Size;