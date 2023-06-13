const rotate90 = (matrix) => {
  const midPoint = (matrix.length - 1) / 2;
  const newMatrix = new Array(matrix.length);
  for (let i = 0; i < newMatrix.length; i++) {
    newMatrix[i] = new Array(matrix.length);
  }
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      newMatrix[j][midPoint * 2 - i] = matrix[i][j];
    }
  }
  return newMatrix;
};

console.log(
  rotate90([
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25],
  ])
);
