import { targetArray } from '@pages/ai-projects/ta-canh';
import { evaluate, isEquals, isExist, swapArray2d } from './functions';

let arrLength = 3;

// let h1 = 0;
// for (let i = 0; i < arrLength; i++) {
//   for (let j = 0; j < arrLength; j++) {
//     if (startArray[i][j] !== targetArray[i][j]) h1++;
//   }
// }

interface ArrayProps {
  array: number[][];
  father: number[][][];
}

export function BestFirstSearch(newArray: number[][]) {
  let t0 = performance.now();
  const arrStatePass: number[][][] = [];
  const queue: ArrayProps[] = [];
  arrStatePass.push(newArray);
  queue.push({
    array: [[...newArray[0]], [...newArray[1]], [...newArray[2]]],
    father: [],
  });

  while (true) {
    // for (let x = 0; x < 1000; x++) {
    const tempArray: ArrayProps | undefined = queue.shift();
    const search: number = 0;

    if (tempArray) {
      if (isEquals(tempArray.array, targetArray)) {
        console.log(tempArray.father);
        console.log('Founded');
        let t1 = performance.now();
        console.log(t1 - t0);
        return tempArray.father;
      }

      const row = tempArray.array.findIndex((row) => row.includes(search));
      const col = tempArray.array[row].indexOf(search);
      if (row === 0) {
        let newTempArray1: number[][] = [];
        for (let i = 0; i < arrLength; i++) {
          newTempArray1[i] = tempArray.array[i].slice();
        }
        swapArray2d(newTempArray1, row, col, row + 1, col);
        if (!isExist(newTempArray1, arrStatePass)) {
          queue.push({
            array: [
              [...newTempArray1[0]],
              [...newTempArray1[1]],
              [...newTempArray1[2]],
            ],
            father: [
              ...tempArray.father,
              [
                [...newTempArray1[0]],
                [...newTempArray1[1]],
                [...newTempArray1[2]],
              ],
            ],
          });
          arrStatePass.push(newTempArray1);
        }

        if (col === 0) {
          let newTempArray2: number[][] = [];
          for (let i = 0; i < arrLength; i++) {
            newTempArray2[i] = tempArray.array[i].slice();
          }
          swapArray2d(newTempArray2, row, col, row, col + 1);
          if (!isExist(newTempArray2, arrStatePass)) {
            queue.push({
              array: [
                [...newTempArray2[0]],
                [...newTempArray2[1]],
                [...newTempArray2[2]],
              ],
              father: [
                ...tempArray.father,
                [
                  [...newTempArray2[0]],
                  [...newTempArray2[1]],
                  [...newTempArray2[2]],
                ],
              ],
            });
            arrStatePass.push(newTempArray2);
          }
        } else {
          if (col === arrLength - 1) {
            let newTempArray3: number[][] = [];
            for (let i = 0; i < arrLength; i++) {
              newTempArray3[i] = tempArray.array[i].slice();
            }
            swapArray2d(newTempArray3, row, col, row, col - 1);
            if (!isExist(newTempArray3, arrStatePass)) {
              queue.push({
                array: [
                  [...newTempArray3[0]],
                  [...newTempArray3[1]],
                  [...newTempArray3[2]],
                ],
                father: [
                  ...tempArray.father,
                  [
                    [...newTempArray3[0]],
                    [...newTempArray3[1]],
                    [...newTempArray3[2]],
                  ],
                ],
              });
              arrStatePass.push(newTempArray3);
            }
          } else {
            let newTempArray4: number[][] = [];
            for (let i = 0; i < arrLength; i++) {
              newTempArray4[i] = tempArray.array[i].slice();
            }
            swapArray2d(newTempArray4, row, col, row, col - 1);
            if (!isExist(newTempArray4, arrStatePass)) {
              queue.push({
                array: [
                  [...newTempArray4[0]],
                  [...newTempArray4[1]],
                  [...newTempArray4[2]],
                ],
                father: [
                  ...tempArray.father,
                  [
                    [...newTempArray4[0]],
                    [...newTempArray4[1]],
                    [...newTempArray4[2]],
                  ],
                ],
              });
              arrStatePass.push(newTempArray4);
            }
            let newTempArray5: number[][] = [];
            for (let i = 0; i < arrLength; i++) {
              newTempArray5[i] = tempArray.array[i].slice();
            }
            swapArray2d(newTempArray5, row, col, row, col + 1);
            if (!isExist(newTempArray5, arrStatePass)) {
              queue.push({
                array: [
                  [...newTempArray5[0]],
                  [...newTempArray5[1]],
                  [...newTempArray5[2]],
                ],
                father: [
                  ...tempArray.father,
                  [
                    [...newTempArray5[0]],
                    [...newTempArray5[1]],
                    [...newTempArray5[2]],
                  ],
                ],
              });
              arrStatePass.push(newTempArray5);
            }
          }
        }
      } else if (row === arrLength - 1) {
        let newTempArray6: number[][] = [];
        for (let i = 0; i < arrLength; i++) {
          newTempArray6[i] = tempArray.array[i].slice();
        }
        swapArray2d(newTempArray6, row, col, row - 1, col);
        if (!isExist(newTempArray6, arrStatePass)) {
          queue.push({
            array: [
              [...newTempArray6[0]],
              [...newTempArray6[1]],
              [...newTempArray6[2]],
            ],
            father: [
              ...tempArray.father,
              [
                [...newTempArray6[0]],
                [...newTempArray6[1]],
                [...newTempArray6[2]],
              ],
            ],
          });
          arrStatePass.push(newTempArray6);
        }
        if (col === 0) {
          let newTempArray7: number[][] = [];
          for (let i = 0; i < arrLength; i++) {
            newTempArray7[i] = tempArray.array[i].slice();
          }
          swapArray2d(newTempArray7, row, col, row, col + 1);
          if (!isExist(newTempArray7, arrStatePass)) {
            queue.push({
              array: [
                [...newTempArray7[0]],
                [...newTempArray7[1]],
                [...newTempArray7[2]],
              ],
              father: [
                ...tempArray.father,
                [
                  [...newTempArray7[0]],
                  [...newTempArray7[1]],
                  [...newTempArray7[2]],
                ],
              ],
            });
            arrStatePass.push(newTempArray7);
          }
        } else {
          if (col === arrLength - 1) {
            let newTempArray8: number[][] = [];

            for (let i = 0; i < arrLength; i++) {
              newTempArray8[i] = tempArray.array[i].slice();
            }
            swapArray2d(newTempArray8, row, col, row, col - 1);
            if (!isExist(newTempArray8, arrStatePass)) {
              queue.push({
                array: [
                  [...newTempArray8[0]],
                  [...newTempArray8[1]],
                  [...newTempArray8[2]],
                ],
                father: [
                  ...tempArray.father,
                  [
                    [...newTempArray8[0]],
                    [...newTempArray8[1]],
                    [...newTempArray8[2]],
                  ],
                ],
              });
              arrStatePass.push(newTempArray8);
            }
          } else {
            let newTempArray9: number[][] = [];
            for (let i = 0; i < arrLength; i++) {
              newTempArray9[i] = tempArray.array[i].slice();
            }
            swapArray2d(newTempArray9, row, col, row, col - 1);
            if (!isExist(newTempArray9, arrStatePass)) {
              queue.push({
                array: [
                  [...newTempArray9[0]],
                  [...newTempArray9[1]],
                  [...newTempArray9[2]],
                ],
                father: [
                  ...tempArray.father,
                  [
                    [...newTempArray9[0]],
                    [...newTempArray9[1]],
                    [...newTempArray9[2]],
                  ],
                ],
              });
              arrStatePass.push(newTempArray9);
            }
            let newTempArray10: number[][] = [];

            for (let i = 0; i < arrLength; i++) {
              newTempArray10[i] = tempArray.array[i].slice();
            }
            swapArray2d(newTempArray10, row, col, row, col + 1);
            if (!isExist(newTempArray10, arrStatePass)) {
              queue.push({
                array: [
                  [...newTempArray10[0]],
                  [...newTempArray10[1]],
                  [...newTempArray10[2]],
                ],
                father: [
                  ...tempArray.father,
                  [
                    [...newTempArray10[0]],
                    [...newTempArray10[1]],
                    [...newTempArray10[2]],
                  ],
                ],
              });
              arrStatePass.push(newTempArray10);
            }
          }
        }
      } else {
        let newTempArray11: number[][] = [];
        for (let i = 0; i < arrLength; i++) {
          newTempArray11[i] = tempArray.array[i].slice();
        }
        swapArray2d(newTempArray11, row, col, row - 1, col);
        if (!isExist(newTempArray11, arrStatePass)) {
          queue.push({
            array: [
              [...newTempArray11[0]],
              [...newTempArray11[1]],
              [...newTempArray11[2]],
            ],
            father: [
              ...tempArray.father,
              [
                [...newTempArray11[0]],
                [...newTempArray11[1]],
                [...newTempArray11[2]],
              ],
            ],
          });
          arrStatePass.push(newTempArray11);
        }
        let newTempArray12: number[][] = [];
        for (let i = 0; i < arrLength; i++) {
          newTempArray12[i] = tempArray.array[i].slice();
        }
        swapArray2d(newTempArray12, row, col, row + 1, col);
        if (!isExist(newTempArray12, arrStatePass)) {
          queue.push({
            array: [
              [...newTempArray12[0]],
              [...newTempArray12[1]],
              [...newTempArray12[2]],
            ],
            father: [
              ...tempArray.father,
              [
                [...newTempArray12[0]],
                [...newTempArray12[1]],
                [...newTempArray12[2]],
              ],
            ],
          });
          arrStatePass.push(newTempArray12);
        }
        if (col === 0) {
          let newTempArray13: number[][] = [];

          for (let i = 0; i < arrLength; i++) {
            newTempArray13[i] = tempArray.array[i].slice();
          }
          swapArray2d(newTempArray13, row, col, row, col + 1);
          if (!isExist(newTempArray13, arrStatePass)) {
            queue.push({
              array: [
                [...newTempArray13[0]],
                [...newTempArray13[1]],
                [...newTempArray13[2]],
              ],
              father: [
                ...tempArray.father,
                [
                  [...newTempArray13[0]],
                  [...newTempArray13[1]],
                  [...newTempArray13[2]],
                ],
              ],
            });
            arrStatePass.push(newTempArray13);
          }
        } else {
          if (col === arrLength - 1) {
            let newTempArray14: number[][] = [];

            for (let i = 0; i < arrLength; i++) {
              newTempArray14[i] = tempArray.array[i].slice();
            }
            swapArray2d(newTempArray14, row, col, row, col - 1);
            if (!isExist(newTempArray14, arrStatePass)) {
              queue.push({
                array: [
                  [...newTempArray14[0]],
                  [...newTempArray14[1]],
                  [...newTempArray14[2]],
                ],
                father: [
                  ...tempArray.father,
                  [
                    [...newTempArray14[0]],
                    [...newTempArray14[1]],
                    [...newTempArray14[2]],
                  ],
                ],
              });
              arrStatePass.push(newTempArray14);
            }
          } else {
            let newTempArray15: number[][] = [];

            for (let i = 0; i < arrLength; i++) {
              newTempArray15[i] = tempArray.array[i].slice();
            }
            swapArray2d(newTempArray15, row, col, row, col - 1);

            if (!isExist(newTempArray15, arrStatePass)) {
              queue.push({
                array: [
                  [...newTempArray15[0]],
                  [...newTempArray15[1]],
                  [...newTempArray15[2]],
                ],
                father: [
                  ...tempArray.father,
                  [
                    [...newTempArray15[0]],
                    [...newTempArray15[1]],
                    [...newTempArray15[2]],
                  ],
                ],
              });
              arrStatePass.push(newTempArray15);
            }
            let newTempArray16: number[][] = [];

            for (let i = 0; i < arrLength; i++) {
              newTempArray16[i] = tempArray.array[i].slice();
            }
            swapArray2d(newTempArray16, row, col, row, col + 1);
            if (!isExist(newTempArray16, arrStatePass)) {
              queue.push({
                array: [
                  [...newTempArray16[0]],
                  [...newTempArray16[1]],
                  [...newTempArray16[2]],
                ],
                father: [
                  ...tempArray.father,
                  [
                    [...newTempArray16[0]],
                    [...newTempArray16[1]],
                    [...newTempArray16[2]],
                  ],
                ],
              });
              arrStatePass.push(newTempArray16);
            }
          }
        }
      }
      queue.sort(function (a, b) {
        return evaluate(a.array, targetArray) - evaluate(b.array, targetArray);
      });

      // for (let z = 0; z < queue.length; z++) {
      // console.log(queue);
      // console.log('evaluate', evaluate(queue[0].array, targetArray));
      // }
      if (queue.length % 1000 === 0) console.log(queue.length);
    }
  }
  return [newArray];
}
