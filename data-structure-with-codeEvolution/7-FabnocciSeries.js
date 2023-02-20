const fabnocci = (n, arr = [0, 1]) => {
  if (n == 2) return arr;
  for (let i = 2; i < n; i++) {
    // arr.push(arr[i] + arr[i + 1]);
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  return arr;
};

fabnocci(7);
fabnocci(8);
fabnocci(7);
fabnocci(7);
