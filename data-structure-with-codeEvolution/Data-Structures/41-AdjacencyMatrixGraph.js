const adjacencyMatrix = [
  [0, 1, 0],
  [1, 0, 1],
  [0, 1, 0],
];

const adjacencyList = {
  A: ["B"],
  B: ["A", "C"],
  C: ["B"],
};

// console.log(adjacencyMatrix[2][1]);
console.log(adjacencyList["B"]);
