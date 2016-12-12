function zeroMatrix(matrix) {
  const zeros = [];

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) zeros.push([i, j]);
    }
  }

  for (let i = 0; i < zeros.length; i++) {
    const row = zeros[i][0];
    const col = zeros[i][1];
    matrix[row].map((n, i) => matrix[row][i] = 0);
    matrix.forEach(r => r[col] = 0);
  }

  return matrix;
}

m = [
  [1, 2, 3],
  [0, 4, 5],
  [6, 7, 8]
];

console.log(zeroMatrix(m));
