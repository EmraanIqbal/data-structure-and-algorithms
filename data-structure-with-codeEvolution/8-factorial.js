const factorial = (n) => {
  let sum = 1;
  // for (let i = n; i > 0; i--){
  //   sum = sum * i
  // }
  for (let i = 2; i <= n; i++) {
    sum = sum * i;
  }
  return sum;
};

factorial(5);
