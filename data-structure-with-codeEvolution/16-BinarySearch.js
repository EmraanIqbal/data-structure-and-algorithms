// const search = (n, t) => {
//   if (n.length === 0) return -1;
//   n.sort((a, b) => a - b);
//   for (let i = 0; i <= n.length; i++) {
//     if (n[i] === t) return i;
//   }
//   return -1;
// };

// search([-5, 2, 10, 4, 6], 12);
// search([-5, 2, 10, 4, 6], 6);

// // Big-0 = O(n)

const search = (n, target) => {
  n.sort((a, b) => a - b);
  let left = 0;
  let right = n.length - 1;

  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    console.log(n[middle]);

    if (target == n[middle]) {
      return middle;
    }

    if (target < n[middle]) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }
  return -1;
};

search([-5, 2, 4, 6, 10], 10);
search([-5, 2, 4, 6, 10], 6);
search([-5, 2, 4, 6, 10], 20);
// search([-5, 2, 10, 4, 6], 6);

// Big-0 = O(n)
