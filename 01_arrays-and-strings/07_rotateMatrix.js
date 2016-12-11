function rotate(matrix) {
  for (let layer = 0; layer < matrix[0].length / 2; layer++) {
    const first = layer;
    const last = matrix[0].length - 1 - layer;

    for (let i = first; i < last; i++) {
      const offset = i - first;

      // top
      const top = matrix[first][i];

      // left -> top
      matrix[first][i] = matrix[last-offset][first];

      // bottom -> left
      matrix[last - offset][first] = matrix[last][last - offset];

      // right -> bottom
      matrix[last][last - offset] = matrix[i][last];

      // top -> right
      matrix[i][last] = top;
    }
  }
}

const m = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16]
];

const mRotated = [
  [13, 9, 5, 1],
  [14, 10, 6, 2],
  [15, 11, 7, 3],
  [16, 12, 8, 4]
];

