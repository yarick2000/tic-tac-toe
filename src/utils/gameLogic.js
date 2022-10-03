const GAME_STATUS = {
  'ONGOING' : 1,
  'ENDED' : 2,
  'DRAW' : 3
};

const getLineWinner = (line, squares) => {
  const values = line.map(l => squares[l]);

  if (values.every( v => v && v === values[0])) {
    return values[0];
  }
  return null;
};

const getWinningLine = (squares) => {
  const lines = createLines(squares);  
  let winner = null;
  for (let i = 0; i < lines.length; i++) {
    winner = getLineWinner(lines[i], squares);
    if (winner) return lines[i];
  }
  return null;      
};

const createLines = (squares) => {
  const size = Math.sqrt(squares.length);
  const matrix = [];
  const lines = [];
  // filling matrix
  for(let i = 0; i < size; i++){
    matrix[i] = [];
    for(let j = 0; j < size; j++) {
      matrix[i][j] = size * i + j;
    }
  }
  // building horizontal lines
  for(const line of matrix) {
    lines.push([...line]);
  }
  // building vertical lines
  for(let i = 0; i < size; i++) {
    const line = [];
    for(let j = 0; j < size; j++) { 
      line.push(matrix[j][i]);
    }
    lines.push(line);
  }
  // building diagonal lines
  const diagonal1 = [];
  const diagonal2 = [];
  for(let i = 0; i < size; i++) {
    diagonal1.push(matrix[i][i]);
    diagonal2.push(matrix[size - i - 1][i]);
  }
  lines.push(diagonal1,diagonal2);
  return lines;
};

const calculateWinner = (squares) => {
  const lines = createLines(squares);  
  let winner = null;
  for (let i = 0; i < lines.length; i++) {
    winner = getLineWinner(lines[i], squares);
    if (winner) break;
  }
  return winner;      
};

export { calculateWinner, getWinningLine, GAME_STATUS };