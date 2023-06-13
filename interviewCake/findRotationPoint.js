function findRotationPoint(words) {
  let floor = -1;
  let ceiling = words.length;
  let previousCenterWord = words[0]; // technically not center

  if (words.length < 2) {
    throw new Error();
  }

  if (words.length === 2) {
    return 1;
  }

  while (floor + 1 < ceiling) {
    middleIndex = floor + Math.floor((ceiling - floor) / 2);
    if (words[middleIndex] < words[middleIndex - 1] && (words[middleIndex] < words[middleIndex + 1]) || middleIndex + 1 === words.length) { // pretty clunky check
      return middleIndex;
    } else if (words[middleIndex] > previousCenterWord) {
      floor = middleIndex;
    } else {
      ceiling = middleIndex;
    }
  }
  

  return false;
}


















// Tests

let desc = 'small array';
let actual = findRotationPoint(['cape', 'cake']);
let expected = 1;
assertEquals(actual, expected, desc);

desc = 'medium array';
actual = findRotationPoint(['grape', 'orange', 'plum', 'radish', 'apple']);
expected = 4;
assertEquals(actual, expected, desc);

desc = 'large array';
actual = findRotationPoint(['ptolemaic', 'retrograde', 'supplant',
  'undulate', 'xenoepist', 'asymptote',
  'babka', 'banoffee', 'engender',
  'karpatka', 'othellolagkage']);
expected = 5;
assertEquals(actual, expected, desc);

function assertEquals(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
  }
}