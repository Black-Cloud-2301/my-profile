let arrLength = 3;

const startArray: number[][] = [
  [1, 4, 3],
  [7, 0, 6],
  [5, 8, 2],
];

const targetArray: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 0],
];

let h1 = 0;
for (let i = 0; i < arrLength; i++) {
  for (let j = 0; j < arrLength; j++) {
    if (startArray[i][j] !== targetArray[i][j]) h1++;
  }
}

console.log(h1);

export function BestFirstSearch() {}
