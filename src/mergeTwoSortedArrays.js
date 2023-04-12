function mergeTwoSortedArrays(arr1, arr2) {

    // Combine the sorted arrays into one large sorted array
    let i = 0,
    j = 0;
    const combinedArr = [];
    
    while (i < arr1.length || j < arr2.length) {
      if (i >= arr1.length) {
        combinedArr.push(arr2[j]);
        j++;
      } else if (j >= arr2.length) {
        combinedArr.push(arr1[i]);
        i++
      } else if (arr1[i] < arr2[j]) {
        combinedArr.push(arr1[i]);
        i++;
      } else {
        combinedArr.push(arr2[j]);
        j++;
      }
    }
  
    return combinedArr;
  }