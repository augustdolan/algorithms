// This is incomplete and incorrect. The probability for equal placement does not exist, because there are
// 6 possible permutation of the random array, but 27 combinations available from the for loop, 27 % 6 !== 0

function getRandom(floor, ceiling) {
  return Math.floor(Math.random() * (ceiling - floor + 1)) + floor;
}

function shuffle(array) {
  for (let i = 0; i < array.length; i++) {
    const randomIndex = getRandom(0, array.length - 1);
    const elementToSwap = array[randomIndex];
    array[randomIndex] = array[i];
    array[i] = elementToSwap;
  }
}


const sample = [1, 2, 3, 4, 5];
console.log('Initial array: ', sample);
shuffle(sample);
console.log('Shuffled array: ', sample);