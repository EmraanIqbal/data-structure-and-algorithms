const cartesianProducts = (arr1, arr2) => {
  let emptyArray = [];
  for (let i = 0; i <= arr1.length - 1; i++) {
    for (let j = 0; j <= arr2.length - 1; j++) {
      emptyArray.push([arr1[i], arr2[j]]);
    }
  }
  return emptyArray;
};

console.log(cartesianProducts([1, 2], [3, 4, 5]));

// Big-O = O(mn)
