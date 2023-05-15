function hasPalindromePermutation(theString) {
  // all even and one odd
  const letterCounts = {};

  for (let i = 0 ; i < theString.length; i++) {
    const currentLetter = theString[i]
    if (!letterCounts[currentLetter]) {
      letterCounts[currentLetter] = 1;
    } else {
      letterCounts[currentLetter]++;
    }

  }

  let oddLetterCounts = 0;

  for (const letter in letterCounts) {
    if (letterCounts[letter] % 2 === 1) oddLetterCounts++;
  }

  return oddLetterCounts > 1 ? false : true;
}

// Tests

let desc = "permutation with odd number of chars";
assertEqual(hasPalindromePermutation("aabcbcd"), true, desc);

desc = "permutation with even number of chars";
assertEqual(hasPalindromePermutation("aabccbdd"), true, desc);

desc = "no permutation with odd number of chars";
assertEqual(hasPalindromePermutation("aabcd"), false, desc);

desc = "no permutation with even number of chars";
assertEqual(hasPalindromePermutation("aabbcd"), false, desc);

desc = "empty string";
assertEqual(hasPalindromePermutation(""), true, desc);

desc = "one character string ";
assertEqual(hasPalindromePermutation("a"), true, desc);

function assertEqual(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
  }
}
