const powerOfTwo = (n) => {
  if (n < 0) return false;

  while (n > 1) {
    if (n % 2 !== 0) {
      return false;
    }
    n = n / 2;
  }

  return true;
};

powerOfTwo(1);
powerOfTwo(2);
powerOfTwo(5);

//  Big-O = O(logn)

// ---------------------------------------Bitwise operation------------------------------------------------
function isPowerOfTwoBitwise(n) {
  if (n < 1) return false;
  return (n & (n - 1)) === 0;
}

isPowerOfTwoBitwise(1);
isPowerOfTwoBitwise(2);
isPowerOfTwoBitwise(5);

//  Big-O = O(1)
