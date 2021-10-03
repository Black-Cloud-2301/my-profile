let arrLength = 3;

function isEquals(array: number[][], array2: number[][]) {
  for (let i = 0; i < arrLength; i++) {
    for (let j = 0; j < arrLength; j++) {
      if (array[i][j] !== array2[i][j]) return false;
    }
  }
  return true;
}

function swapArray2d(
  array: number[][],
  x: number,
  y: number,
  i: number,
  j: number
) {
  let temp = array[x][y];
  array[x][y] = array[i][j];
  array[i][j] = temp;
}

const targetArray: number[][] = [
  [1, 2, 3],
  [8, 0, 4],
  [7, 6, 5],
];

export const runDFS = (father: number[][][], newArray: number[][]) => {
  let newTempArray: number[][] = [];
  let stack: number[][][] = [];

  stack.push([[...newArray[0]], [...newArray[1]], [...newArray[2]]]);
  father.push(newArray);
  while (father.length < 200000) {
    let stack2: number[][][] = [];

    father.push(stack[0]);
    let tempArrQueue: number[][] | undefined = stack.pop();
    // console.log('temp', tempArrQueue);
    console.log(father.length);
    const search: number = 0;
    if (tempArrQueue !== undefined) {
      if (isEquals(tempArrQueue, targetArray)) {
        console.log('Founded');
        break;
      }
      const row = tempArrQueue.findIndex((row) => row.includes(search));
      if (tempArrQueue[row] !== undefined) {
        const col = tempArrQueue[row].indexOf(search);
        if (row === 0) {
          for (let i = 0; i < arrLength; i++) {
            newTempArray[i] = tempArrQueue[i].slice();
          }
          swapArray2d(newTempArray, row, col, row + 1, col);
          if (!isEquals(newTempArray, father[father.length - 2])) {
            stack2.push([
              [...newTempArray[0]],
              [...newTempArray[1]],
              [...newTempArray[2]],
            ]);
          }
          if (col === 0) {
            for (let i = 0; i < arrLength; i++) {
              newTempArray[i] = tempArrQueue[i].slice();
            }
            swapArray2d(newTempArray, row, col, row, col + 1);
            if (!isEquals(newTempArray, father[father.length - 2])) {
              stack2.push([
                [...newTempArray[0]],
                [...newTempArray[1]],
                [...newTempArray[2]],
              ]);
            }
          } else {
            if (col === arrLength - 1) {
              for (let i = 0; i < arrLength; i++) {
                newTempArray[i] = tempArrQueue[i].slice();
              }
              swapArray2d(newTempArray, row, col, row, col - 1);
              if (!isEquals(newTempArray, father[father.length - 2])) {
                stack2.push([
                  [...newTempArray[0]],
                  [...newTempArray[1]],
                  [...newTempArray[2]],
                ]);
              }
            } else {
              for (let i = 0; i < arrLength; i++) {
                newTempArray[i] = tempArrQueue[i].slice();
              }
              swapArray2d(newTempArray, row, col, row, col - 1);
              if (!isEquals(newTempArray, father[father.length - 2])) {
                stack2.push([
                  [...newTempArray[0]],
                  [...newTempArray[1]],
                  [...newTempArray[2]],
                ]);
              }
              for (let i = 0; i < arrLength; i++) {
                newTempArray[i] = tempArrQueue[i].slice();
              }
              swapArray2d(newTempArray, row, col, row, col + 1);
              if (!isEquals(newTempArray, father[father.length - 2])) {
                stack2.push([
                  [...newTempArray[0]],
                  [...newTempArray[1]],
                  [...newTempArray[2]],
                ]);
              }
            }
          }
        } else if (row === arrLength - 1) {
          let newTempArray: number[][] = [];
          for (let i = 0; i < arrLength; i++) {
            newTempArray[i] = tempArrQueue[i].slice();
          }
          swapArray2d(newTempArray, row, col, row - 1, col);
          if (!isEquals(newTempArray, father[father.length - 2])) {
            stack2.push([
              [...newTempArray[0]],
              [...newTempArray[1]],
              [...newTempArray[2]],
            ]);
          }
          if (col === 0) {
            for (let i = 0; i < arrLength; i++) {
              newTempArray[i] = tempArrQueue[i].slice();
            }
            swapArray2d(newTempArray, row, col, row, col + 1);
            if (!isEquals(newTempArray, father[father.length - 2])) {
              stack2.push([
                [...newTempArray[0]],
                [...newTempArray[1]],
                [...newTempArray[2]],
              ]);
            }
          } else {
            if (col === arrLength - 1) {
              for (let i = 0; i < arrLength; i++) {
                newTempArray[i] = tempArrQueue[i].slice();
              }
              swapArray2d(newTempArray, row, col, row, col - 1);
              if (!isEquals(newTempArray, father[father.length - 2])) {
                stack2.push([
                  [...newTempArray[0]],
                  [...newTempArray[1]],
                  [...newTempArray[2]],
                ]);
              }
            } else {
              for (let i = 0; i < arrLength; i++) {
                newTempArray[i] = tempArrQueue[i].slice();
              }
              swapArray2d(newTempArray, row, col, row, col - 1);
              if (!isEquals(newTempArray, father[father.length - 2])) {
                stack2.push([
                  [...newTempArray[0]],
                  [...newTempArray[1]],
                  [...newTempArray[2]],
                ]);
              }
              for (let i = 0; i < arrLength; i++) {
                newTempArray[i] = tempArrQueue[i].slice();
              }
              swapArray2d(newTempArray, row, col, row, col + 1);
              if (!isEquals(newTempArray, father[father.length - 2])) {
                stack2.push([
                  [...newTempArray[0]],
                  [...newTempArray[1]],
                  [...newTempArray[2]],
                ]);
              }
            }
          }
        } else {
          let newTempArray: number[][] = [];
          for (let i = 0; i < arrLength; i++) {
            newTempArray[i] = tempArrQueue[i].slice();
          }
          swapArray2d(newTempArray, row, col, row - 1, col);
          if (!isEquals(newTempArray, father[father.length - 2])) {
            stack2.push([
              [...newTempArray[0]],
              [...newTempArray[1]],
              [...newTempArray[2]],
            ]);
          }
          for (let i = 0; i < arrLength; i++) {
            newTempArray[i] = tempArrQueue[i].slice();
          }
          swapArray2d(newTempArray, row, col, row + 1, col);
          if (!isEquals(newTempArray, father[father.length - 2])) {
            stack2.push([
              [...newTempArray[0]],
              [...newTempArray[1]],
              [...newTempArray[2]],
            ]);
          }
          if (col === 0) {
            for (let i = 0; i < arrLength; i++) {
              newTempArray[i] = tempArrQueue[i].slice();
            }
            swapArray2d(newTempArray, row, col, row, col + 1);
            if (!isEquals(newTempArray, father[father.length - 2])) {
              stack2.push([
                [...newTempArray[0]],
                [...newTempArray[1]],
                [...newTempArray[2]],
              ]);
            }
          } else {
            if (col === arrLength - 1) {
              for (let i = 0; i < arrLength; i++) {
                newTempArray[i] = tempArrQueue[i].slice();
              }
              swapArray2d(newTempArray, row, col, row, col - 1);
              if (!isEquals(newTempArray, father[father.length - 2])) {
                stack2.push([
                  [...newTempArray[0]],
                  [...newTempArray[1]],
                  [...newTempArray[2]],
                ]);
              }
            } else {
              for (let i = 0; i < arrLength; i++) {
                newTempArray[i] = tempArrQueue[i].slice();
              }
              swapArray2d(newTempArray, row, col, row, col - 1);
              if (!isEquals(newTempArray, father[father.length - 2])) {
                stack2.push([
                  [...newTempArray[0]],
                  [...newTempArray[1]],
                  [...newTempArray[2]],
                ]);
              }
              for (let i = 0; i < arrLength; i++) {
                newTempArray[i] = tempArrQueue[i].slice();
              }
              swapArray2d(newTempArray, row, col, row, col + 1);
              if (!isEquals(newTempArray, father[father.length - 2])) {
                stack2.push([
                  [...newTempArray[0]],
                  [...newTempArray[1]],
                  [...newTempArray[2]],
                ]);
              }
            }
          }
        }

        let tempArr = stack2.slice(0, stack2.length).sort(function () {
          return Math.random() - 0.5;
        });
        stack.push(tempArr[0]);
      }
    }
  }
};
