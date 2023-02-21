const sorting = (n) => {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i <= n.length - 1; i++) {
      if (n[i] > n[i + 1]) {
        let temp = n[i + 1];
        n[i + 1] = n[i];
        n[i] = temp;
        swapped = true;
      }
    }
  } while (swapped);
  return n;
};
console.log(sorting([8, 20, -2, 4, -6]));
// console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 6));
// console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 20))

//  Big-O = O(n^2)
