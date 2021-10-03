interface ArrayProps {
  array: number[][];
  father: number[][][];
}

let arrLength = 3;

function isEquals(array: number[][], array2: number[][]) {
  for (let i = 0; i < arrLength; i++) {
    for (let j = 0; j < arrLength; j++) {
      if (array[i][j] !== array2[i][j]) return false;
    }
  }
  return true;
}

const targetArray: number[][] = [
  [1, 2, 3],
  [8, 0, 4],
  [7, 6, 5],
];

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

export const DFSDepthLS = (father: number[][][], newArray: number[][]) => {
  let depth = 3;
  while (depth <= 33) {
    console.log('depth', depth);
    depth++;
    let stack: ArrayProps[] = [];
    stack.push({
      array: [[...newArray[0]], [...newArray[1]], [...newArray[2]]],
      father: [
        [
          [0, 0, 0],
          [0, 0, 0],
          [0, 0, 0],
        ],
        [[...newArray[0]], [...newArray[1]], [...newArray[2]]],
      ],
    });

    let x = 0;
    while (stack.length !== 0) {
      x++;
      let stack2: ArrayProps[] = [];
      let newTempArray: number[][] = [];
      let tempArrQueue2: ArrayProps | undefined = stack.pop();
      let tempArrQueue: number[][] | undefined = tempArrQueue2?.array;
      let tempFather: number[][] | undefined =
        tempArrQueue2?.father[tempArrQueue2.father.length - 2];
      const search: number = 0;
      if (
        tempArrQueue !== undefined &&
        tempFather !== undefined &&
        tempArrQueue2 !== undefined
      ) {
        if (isEquals(tempArrQueue, targetArray)) {
          for (let m = 0; m < tempArrQueue2.father.length - 1; m++) {
            father[m] = tempArrQueue2.father[m + 1].slice();
          }
          console.log(father);
          console.log('Founded');
          return;
        }
        if (tempArrQueue2?.father.length >= depth) continue;
        // console.log(tempArrQueue2?.father.length);
        const row = tempArrQueue.findIndex((row) => row.includes(search));
        if (tempArrQueue[row] !== undefined) {
          const col = tempArrQueue[row].indexOf(search);
          if (row === 0) {
            for (let i = 0; i < arrLength; i++) {
              newTempArray[i] = tempArrQueue[i].slice();
            }
            swapArray2d(newTempArray, row, col, row + 1, col);
            if (!isEquals(newTempArray, tempFather)) {
              stack2.push({
                array: [
                  [...newTempArray[0]],
                  [...newTempArray[1]],
                  [...newTempArray[2]],
                ],
                father: [
                  ...tempArrQueue2?.father,
                  [
                    [...newTempArray[0]],
                    [...newTempArray[1]],
                    [...newTempArray[2]],
                  ],
                ],
              });
            }
            if (col === 0) {
              for (let i = 0; i < arrLength; i++) {
                newTempArray[i] = tempArrQueue[i].slice();
              }
              swapArray2d(newTempArray, row, col, row, col + 1);
              if (!isEquals(newTempArray, tempFather)) {
                stack2.push({
                  array: [
                    [...newTempArray[0]],
                    [...newTempArray[1]],
                    [...newTempArray[2]],
                  ],
                  father: [
                    ...tempArrQueue2?.father,
                    [
                      [...newTempArray[0]],
                      [...newTempArray[1]],
                      [...newTempArray[2]],
                    ],
                  ],
                });
              }
            } else {
              if (col === arrLength - 1) {
                for (let i = 0; i < arrLength; i++) {
                  newTempArray[i] = tempArrQueue[i].slice();
                }
                swapArray2d(newTempArray, row, col, row, col - 1);
                if (!isEquals(newTempArray, tempFather)) {
                  stack2.push({
                    array: [
                      [...newTempArray[0]],
                      [...newTempArray[1]],
                      [...newTempArray[2]],
                    ],
                    father: [
                      ...tempArrQueue2?.father,
                      [
                        [...newTempArray[0]],
                        [...newTempArray[1]],
                        [...newTempArray[2]],
                      ],
                    ],
                  });
                }
              } else {
                for (let i = 0; i < arrLength; i++) {
                  newTempArray[i] = tempArrQueue[i].slice();
                }
                swapArray2d(newTempArray, row, col, row, col - 1);
                if (!isEquals(newTempArray, tempFather)) {
                  stack2.push({
                    array: [
                      [...newTempArray[0]],
                      [...newTempArray[1]],
                      [...newTempArray[2]],
                    ],
                    father: [
                      ...tempArrQueue2?.father,
                      [
                        [...newTempArray[0]],
                        [...newTempArray[1]],
                        [...newTempArray[2]],
                      ],
                    ],
                  });
                }
                for (let i = 0; i < arrLength; i++) {
                  newTempArray[i] = tempArrQueue[i].slice();
                }
                swapArray2d(newTempArray, row, col, row, col + 1);
                if (!isEquals(newTempArray, tempFather)) {
                  stack2.push({
                    array: [
                      [...newTempArray[0]],
                      [...newTempArray[1]],
                      [...newTempArray[2]],
                    ],
                    father: [
                      ...tempArrQueue2?.father,
                      [
                        [...newTempArray[0]],
                        [...newTempArray[1]],
                        [...newTempArray[2]],
                      ],
                    ],
                  });
                }
              }
            }
          } else if (row === arrLength - 1) {
            let newTempArray: number[][] = [];
            for (let i = 0; i < arrLength; i++) {
              newTempArray[i] = tempArrQueue[i].slice();
            }
            swapArray2d(newTempArray, row, col, row - 1, col);
            if (!isEquals(newTempArray, tempFather)) {
              stack2.push({
                array: [
                  [...newTempArray[0]],
                  [...newTempArray[1]],
                  [...newTempArray[2]],
                ],
                father: [
                  ...tempArrQueue2?.father,
                  [
                    [...newTempArray[0]],
                    [...newTempArray[1]],
                    [...newTempArray[2]],
                  ],
                ],
              });
            }
            if (col === 0) {
              for (let i = 0; i < arrLength; i++) {
                newTempArray[i] = tempArrQueue[i].slice();
              }
              swapArray2d(newTempArray, row, col, row, col + 1);
              if (!isEquals(newTempArray, tempFather)) {
                stack2.push({
                  array: [
                    [...newTempArray[0]],
                    [...newTempArray[1]],
                    [...newTempArray[2]],
                  ],
                  father: [
                    ...tempArrQueue2?.father,
                    [
                      [...newTempArray[0]],
                      [...newTempArray[1]],
                      [...newTempArray[2]],
                    ],
                  ],
                });
              }
            } else {
              if (col === arrLength - 1) {
                for (let i = 0; i < arrLength; i++) {
                  newTempArray[i] = tempArrQueue[i].slice();
                }
                swapArray2d(newTempArray, row, col, row, col - 1);
                if (!isEquals(newTempArray, tempFather)) {
                  stack2.push({
                    array: [
                      [...newTempArray[0]],
                      [...newTempArray[1]],
                      [...newTempArray[2]],
                    ],
                    father: [
                      ...tempArrQueue2?.father,
                      [
                        [...newTempArray[0]],
                        [...newTempArray[1]],
                        [...newTempArray[2]],
                      ],
                    ],
                  });
                }
              } else {
                for (let i = 0; i < arrLength; i++) {
                  newTempArray[i] = tempArrQueue[i].slice();
                }
                swapArray2d(newTempArray, row, col, row, col - 1);
                if (!isEquals(newTempArray, tempFather)) {
                  stack2.push({
                    array: [
                      [...newTempArray[0]],
                      [...newTempArray[1]],
                      [...newTempArray[2]],
                    ],
                    father: [
                      ...tempArrQueue2?.father,
                      [
                        [...newTempArray[0]],
                        [...newTempArray[1]],
                        [...newTempArray[2]],
                      ],
                    ],
                  });
                }
                for (let i = 0; i < arrLength; i++) {
                  newTempArray[i] = tempArrQueue[i].slice();
                }
                swapArray2d(newTempArray, row, col, row, col + 1);
                if (!isEquals(newTempArray, tempFather)) {
                  stack2.push({
                    array: [
                      [...newTempArray[0]],
                      [...newTempArray[1]],
                      [...newTempArray[2]],
                    ],
                    father: [
                      ...tempArrQueue2?.father,
                      [
                        [...newTempArray[0]],
                        [...newTempArray[1]],
                        [...newTempArray[2]],
                      ],
                    ],
                  });
                }
              }
            }
          } else {
            let newTempArray: number[][] = [];
            for (let i = 0; i < arrLength; i++) {
              newTempArray[i] = tempArrQueue[i].slice();
            }
            swapArray2d(newTempArray, row, col, row - 1, col);
            if (!isEquals(newTempArray, tempFather)) {
              stack2.push({
                array: [
                  [...newTempArray[0]],
                  [...newTempArray[1]],
                  [...newTempArray[2]],
                ],
                father: [
                  ...tempArrQueue2?.father,
                  [
                    [...newTempArray[0]],
                    [...newTempArray[1]],
                    [...newTempArray[2]],
                  ],
                ],
              });
            }
            for (let i = 0; i < arrLength; i++) {
              newTempArray[i] = tempArrQueue[i].slice();
            }
            swapArray2d(newTempArray, row, col, row + 1, col);
            if (!isEquals(newTempArray, tempFather)) {
              stack2.push({
                array: [
                  [...newTempArray[0]],
                  [...newTempArray[1]],
                  [...newTempArray[2]],
                ],
                father: [
                  ...tempArrQueue2?.father,
                  [
                    [...newTempArray[0]],
                    [...newTempArray[1]],
                    [...newTempArray[2]],
                  ],
                ],
              });
            }
            if (col === 0) {
              for (let i = 0; i < arrLength; i++) {
                newTempArray[i] = tempArrQueue[i].slice();
              }
              swapArray2d(newTempArray, row, col, row, col + 1);
              if (!isEquals(newTempArray, tempFather)) {
                stack2.push({
                  array: [
                    [...newTempArray[0]],
                    [...newTempArray[1]],
                    [...newTempArray[2]],
                  ],
                  father: [
                    ...tempArrQueue2?.father,
                    [
                      [...newTempArray[0]],
                      [...newTempArray[1]],
                      [...newTempArray[2]],
                    ],
                  ],
                });
              }
            } else {
              if (col === arrLength - 1) {
                for (let i = 0; i < arrLength; i++) {
                  newTempArray[i] = tempArrQueue[i].slice();
                }
                swapArray2d(newTempArray, row, col, row, col - 1);
                if (!isEquals(newTempArray, tempFather)) {
                  stack2.push({
                    array: [
                      [...newTempArray[0]],
                      [...newTempArray[1]],
                      [...newTempArray[2]],
                    ],
                    father: [
                      ...tempArrQueue2?.father,
                      [
                        [...newTempArray[0]],
                        [...newTempArray[1]],
                        [...newTempArray[2]],
                      ],
                    ],
                  });
                }
              } else {
                for (let i = 0; i < arrLength; i++) {
                  newTempArray[i] = tempArrQueue[i].slice();
                }
                swapArray2d(newTempArray, row, col, row, col - 1);
                if (!isEquals(newTempArray, tempFather)) {
                  stack2.push({
                    array: [
                      [...newTempArray[0]],
                      [...newTempArray[1]],
                      [...newTempArray[2]],
                    ],
                    father: [
                      ...tempArrQueue2?.father,
                      [
                        [...newTempArray[0]],
                        [...newTempArray[1]],
                        [...newTempArray[2]],
                      ],
                    ],
                  });
                }
                for (let i = 0; i < arrLength; i++) {
                  newTempArray[i] = tempArrQueue[i].slice();
                }
                swapArray2d(newTempArray, row, col, row, col + 1);
                if (!isEquals(newTempArray, tempFather)) {
                  stack2.push({
                    array: [
                      [...newTempArray[0]],
                      [...newTempArray[1]],
                      [...newTempArray[2]],
                    ],
                    father: [
                      ...tempArrQueue2?.father,
                      [
                        [...newTempArray[0]],
                        [...newTempArray[1]],
                        [...newTempArray[2]],
                      ],
                    ],
                  });
                }
              }
            }
          }

          let tempArr = stack2.slice(0, stack2.length).sort(function () {
            return Math.random() - 0.5;
          });
          for (let i = 0; i < tempArr.length; i++) {
            stack.push(tempArr[i]);
          }
          // console.log(stack);
        }
      }
    }
  }
};
