const towerOfHanaoi = (n, fromRod, toRod, usingRod) => {
  if (n === 1) {
    console.log(`Moving Disk 1 from ${fromRod} to ${toRod}`);
    return;
  }

  towerOfHanaoi(n - 1, fromRod, usingRod, toRod);
  console.log(`Moving Disk ${n} from ${fromRod} to ${toRod}`);
  towerOfHanaoi(n - 1, usingRod, toRod, fromRod);
};

console.log(towerOfHanaoi(2, "A", "B", "C"));

// Big-O = O(2^n)
