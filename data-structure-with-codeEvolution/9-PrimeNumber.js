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

// ------------------------------------------------- Primality Algorithm ---------------------------------------------------------

const primeNumberPrimalarity = (n) => {
  if (n < 2) return false;

  for (let i = 2; i <= Math.sqrt(n); i++) {
    let sum = n % i;
    if (sum == 0) {
      return false;
    }
  }
  return true;
};

primeNumber(1);

//  Big-O = O(sqrrt(n))
