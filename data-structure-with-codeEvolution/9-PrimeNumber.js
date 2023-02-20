const primeNumber = (n) => {
  if (n < 2) return false;

  for (let i = 2; i < n; i++) {
    let sum = n % i;
    if (sum == 0) {
      return false;
    }
  }
  return true;
};

primeNumber(1);

//  Big-O = O(n)
