const sorting = (n) => {
  let piviot = n[n.length - 1];
  let left = [];
  let right = [];
  for (let i = 0; i < n.length - 1; i++) {
    if (n[i] < piviot) {
      left.push(n[i]);
    } else {
      right.push(n[i]);
    }
  }

  return [...left, piviot, ...right];
};
console.log(sorting([-6, 20, 8, -2, 4]));

// Worst case - O(n^2)
// Average case - O(nlogn)
