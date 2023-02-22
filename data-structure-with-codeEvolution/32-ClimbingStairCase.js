function cliimbingStaircase(n) {
  let noOfWays = [1, 2];

  for (let i = 2; i <= n; i++) {
    noOfWays.push(noOfWays[i - 1] + noOfWays[i - 2]);
  }

  return noOfWays[n - 1];
}

console.log(cliimbingStaircase(1));
console.log(cliimbingStaircase(2));
console.log(cliimbingStaircase(3));
console.log(cliimbingStaircase(4));
console.log(cliimbingStaircase(5));
console.log(cliimbingStaircase(6));

// Big-O = O(n)
