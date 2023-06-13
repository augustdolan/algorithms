// function does no work, it needs to save where to zero and do it in one pass

function replaceColumn(matrix, col, number) {
  for (let i = 0; i < matrix.length; i++) {
    matrix[i][col] = number;
  }
}

function replaceRow(matrix, row, number) {
  for (let i = 0; i < matrix[row].length; i++) {
    matrix[row][i] = number;
  }
}

function zeroMatrixInPlace(matrix) {
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      if (matrix[row][col] === 0) {
        replaceColumn(matrix, col, 0);
        replaceRow(matrix, row, 0);
      }
    }
  }
}

const matrix = [
  [0,1,2,3,4,5],
  [6,7,8,9,0,1],
  [2,3,4,5,6,7],
  [8,9,0,1,2,3],
]

zeroMatrixInPlace(matrix);
console.log(JSON.stringify(matrix));