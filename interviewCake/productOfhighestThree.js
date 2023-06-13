function highestProductOf3(arrayOfInts) {
  if (arrayOfInts.length < 3) {
    throw new Error();
  }
  let highestNumber = Math.max(arrayOfInts[0], arrayOfInts[1]);
  let lowestNumber = Math.min(arrayOfInts[0], arrayOfInts[1]);
  let highestProductOf2 = highestNumber * lowestNumber;
  let lowestProductOf2 = highestNumber * lowestNumber;
  let highestProductOf3 = arrayOfInts[0] * arrayOfInts[1] * arrayOfInts[2]

  for (let i = 2; i < arrayOfInts.length; i++) {
    const currentNumber = arrayOfInts[i];

    highestProductOf3 = Math.max(
      highestProductOf3,
      highestProductOf2 * currentNumber,
      lowestProductOf2 * currentNumber
    );

    highestProductOf2 = Math.max(
      highestProductOf2,
      currentNumber * highestNumber,
      currentNumber * lowestNumber
    );

    lowestProductOf2 = Math.min(
      lowestProductOf2,
      currentNumber * highestNumber,
      currentNumber * lowestNumber
    );

    highestNumber = Math.max(highestNumber, currentNumber);
    lowestNumber = Math.min(lowestNumber, currentNumber);
  }
  return highestProductOf3;
}
// Tests

let desc = "short array";
let actual = highestProductOf3([1, 2, 3, 4]);
let expected = 24;
assertEqual(actual, expected, desc);

desc = "longer array";
actual = highestProductOf3([6, 1, 3, 5, 7, 8, 2]);
expected = 336;
assertEqual(actual, expected, desc);

desc = "array has one negative";
actual = highestProductOf3([-5, 4, 8, 2, 3]);
expected = 96;
assertEqual(actual, expected, desc);

desc = "array has two negatives";
actual = highestProductOf3([-10, 1, 3, 2, -10]);
expected = 300;
assertEqual(actual, expected, desc);

desc = "array is all negatives";
actual = highestProductOf3([-5, -1, -3, -2]);
expected = -6;
assertEqual(actual, expected, desc);

desc = "error with empty array";
const emptyArray = () => highestProductOf3([]);
assertThrowsError(emptyArray, desc);

desc = "error with one number";
const oneNumber = () => highestProductOf3([1]);
assertThrowsError(oneNumber, desc);

desc = "error with two numbers";
const twoNumber = () => highestProductOf3([1, 1]);
assertThrowsError(twoNumber, desc);

function assertEqual(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
  }
}

function assertThrowsError(func, desc) {
  try {
    func();
    console.log(`${desc} ... FAIL`);
  } catch (e) {
    console.log(`${desc} ... PASS`);
  }
}
