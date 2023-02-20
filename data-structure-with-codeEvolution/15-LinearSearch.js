const search = (n, t) => {
  for (let i = 0; i <= n.length; i++) {
    if (n[i] === t) return i;
  }
  return -1;
};

search([-5, 2, 10, 4, 6], 12);
search([-5, 2, 10, 4, 6], 6);

// Big-0 = O(n)
