const sorting = (n) => {
  for (let i = 1; i < n.length; i++) {
    let numberToInsert = n[i];
    let j = i - 1;
    while (j >= 0 && n[j] > numberToInsert) {
      n[j + 1] = n[j];
      j = j - 1;
    }

    n[j + 1] = numberToInsert;
    // if (n[i] > n[i + 1]) {
    //   let temp = n[i + 1];
    //   n[i + 1] = n[i];
    //   n[i] = temp;
    //   swapped = true;
    // }
  }
  return n;
};
console.log(sorting([8, 20, -2, 4, -6]));
// console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 6));
// console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 20))

//  Big-O = O(n^2)
