const oneAway = (str1, str2) => {
  if (Math.abs(str1.length - str2.length) > 1) {
    return false;
  }
  const uniqCharSet = new Set();
  const shortestStringLength = Math.min(str1.length, str2.length)
  for (let i = 0; i < shortestStringLength; i++) {
    uniqCharSet.has(str1[i]) ? uniqCharSet.delete(str1[i]) : uniqCharSet.add(str1[i]);
    uniqCharSet.has(str2[i]) ? uniqCharSet.delete(str2[i]) : uniqCharSet.add(str2[i]);
  }

  return uniqCharSet.size <= 2 ? true: false; 
}


console.log(oneAway('council', 'coundil'));
console.log(oneAway('council', 'cuncil'));
console.log(oneAway('council', 'scouncil'));
console.log(oneAway('doghouse', 'detention'))
console.log(oneAway('doghouse', 'doghouses'))
console.log(oneAway('doghouse', 'doghousess'))

// My solution is a full 12 lines shorter than their shortest, and 30+ lines shorter than their most verbose. 
// Its main weakness would largely be its legibility I think. I'm not convinced this algorithm explains
// what it is doing well, but typical palindrome algorithms solve similarly, so not sure where I fall on this