const recursiveBinarySearch = (arr, target) => {
  return searchFunc(arr, target, 0, arr.length - 1);
};

const searchFunc = (arr, target, left, right) => {
  if (left > right) return -1;
  let middle = Math.floor((left + right) / 2);
  if (target === arr[middle]) {
    return middle;
  }
  if (target < arr[middle]) {
    return searchFunc(arr, target, left, middle - 1);
  } else {
    return searchFunc(arr, target, middle + 1, right);
  }
};

console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 10));
console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 6));
console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 20));

//  Big-O = O(logn)
