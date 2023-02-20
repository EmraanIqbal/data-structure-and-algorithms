const factorial = (n) => {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
};

console.log(factorial(5));

//  Big-O = 0(n)
