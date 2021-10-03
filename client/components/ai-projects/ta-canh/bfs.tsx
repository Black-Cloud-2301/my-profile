export const name = () => {};

// let arrLength = 3;

// const targetArray: number[][] = [
//   [1, 2, 3],
//   [8, 0, 4],
//   [7, 6, 5],
// ];

// function isEquals(array: number[][], array2: number[][]) {
//   for (let i = 0; i < arrLength; i++) {
//     for (let j = 0; j < arrLength; j++) {
//       if (array[i][j] !== array2[i][j]) return false;
//     }
//   }
//   return true;
// }

// function swapArray2d(
//   array: number[][],
//   x: number,
//   y: number,
//   i: number,
//   j: number
// ) {
//   let temp = array[x][y];
//   array[x][y] = array[i][j];
//   array[i][j] = temp;
// }

// export const runBFS = (newArray: number[][]) => {
//   let newTempArray: number[][] = [];
//   let fatherIndex = 0;
//   let father: number[][][] = [];
//   father.push([
//     [0, 0, 0],
//     [0, 0, 0],
//     [0, 0, 0],
//   ]);
//   let queue: number[][][] = [];

//   queue.push([[...newArray[0]], [...newArray[1]], [...newArray[2]]]);
//   while (true) {
//     let stack: number[][][] = [];

//     let tempArrQueue: number[][] | undefined = queue.shift();
//     // console.log(fatherIndex);

//     // console.log(queue);
//     const search: number = 0;
//     if (tempArrQueue !== undefined) {
//       if (isEquals(tempArrQueue, targetArray)) {
//         console.log('Founded');
//         break;
//       }
//       console.log(fatherIndex);

//       const row = tempArrQueue.findIndex((row) => row.includes(search));
//       if (tempArrQueue[row] !== undefined) {
//         const col = tempArrQueue[row].indexOf(search);

//         if (row === 0) {
//           for (let i = 0; i < arrLength; i++) {
//             newTempArray[i] = tempArrQueue[i].slice();
//           }
//           swapArray2d(newTempArray, row, col, row + 1, col);
//           if (!isEquals(newTempArray, father[fatherIndex])) {
//             stack.push([
//               [...newTempArray[0]],
//               [...newTempArray[1]],
//               [...newTempArray[2]],
//             ]);

//             father.push([
//               [...tempArrQueue[0]],
//               [...tempArrQueue[1]],
//               [...tempArrQueue[2]],
//             ]);
//           }
//           if (col === 0) {
//             for (let i = 0; i < arrLength; i++) {
//               newTempArray[i] = tempArrQueue[i].slice();
//             }
//             swapArray2d(newTempArray, row, col, row, col + 1);
//             if (!isEquals(newTempArray, father[fatherIndex])) {
//               stack.push([
//                 [...newTempArray[0]],
//                 [...newTempArray[1]],
//                 [...newTempArray[2]],
//               ]);
//               father.push([
//                 [...tempArrQueue[0]],
//                 [...tempArrQueue[1]],
//                 [...tempArrQueue[2]],
//               ]);
//             }
//           } else {
//             if (col === arrLength - 1) {
//               for (let i = 0; i < arrLength; i++) {
//                 newTempArray[i] = tempArrQueue[i].slice();
//               }
//               swapArray2d(newTempArray, row, col, row, col - 1);
//               if (!isEquals(newTempArray, father[fatherIndex])) {
//                 stack.push([
//                   [...newTempArray[0]],
//                   [...newTempArray[1]],
//                   [...newTempArray[2]],
//                 ]);
//                 father.push([
//                   [...tempArrQueue[0]],
//                   [...tempArrQueue[1]],
//                   [...tempArrQueue[2]],
//                 ]);
//               }
//             } else {
//               for (let i = 0; i < arrLength; i++) {
//                 newTempArray[i] = tempArrQueue[i].slice();
//               }
//               swapArray2d(newTempArray, row, col, row, col - 1);
//               if (!isEquals(newTempArray, father[fatherIndex])) {
//                 stack.push([
//                   [...newTempArray[0]],
//                   [...newTempArray[1]],
//                   [...newTempArray[2]],
//                 ]);
//                 father.push([
//                   [...tempArrQueue[0]],
//                   [...tempArrQueue[1]],
//                   [...tempArrQueue[2]],
//                 ]);
//               }
//               for (let i = 0; i < arrLength; i++) {
//                 newTempArray[i] = tempArrQueue[i].slice();
//               }
//               swapArray2d(newTempArray, row, col, row, col + 1);
//               if (!isEquals(newTempArray, father[fatherIndex])) {
//                 stack.push([
//                   [...newTempArray[0]],
//                   [...newTempArray[1]],
//                   [...newTempArray[2]],
//                 ]);
//                 father.push([
//                   [...tempArrQueue[0]],
//                   [...tempArrQueue[1]],
//                   [...tempArrQueue[2]],
//                 ]);
//               }
//             }
//           }
//         } else if (row === arrLength - 1) {
//           let newTempArray: number[][] = [];
//           for (let i = 0; i < arrLength; i++) {
//             newTempArray[i] = tempArrQueue[i].slice();
//           }
//           swapArray2d(newTempArray, row, col, row - 1, col);
//           if (!isEquals(newTempArray, father[fatherIndex])) {
//             stack.push([
//               [...newTempArray[0]],
//               [...newTempArray[1]],
//               [...newTempArray[2]],
//             ]);
//             father.push([
//               [...tempArrQueue[0]],
//               [...tempArrQueue[1]],
//               [...tempArrQueue[2]],
//             ]);
//           }
//           if (col === 0) {
//             for (let i = 0; i < arrLength; i++) {
//               newTempArray[i] = tempArrQueue[i].slice();
//             }
//             swapArray2d(newTempArray, row, col, row, col + 1);
//             if (!isEquals(newTempArray, father[fatherIndex])) {
//               stack.push([
//                 [...newTempArray[0]],
//                 [...newTempArray[1]],
//                 [...newTempArray[2]],
//               ]);
//               father.push([
//                 [...tempArrQueue[0]],
//                 [...tempArrQueue[1]],
//                 [...tempArrQueue[2]],
//               ]);
//             }
//           } else {
//             if (col === arrLength - 1) {
//               for (let i = 0; i < arrLength; i++) {
//                 newTempArray[i] = tempArrQueue[i].slice();
//               }
//               swapArray2d(newTempArray, row, col, row, col - 1);
//               if (!isEquals(newTempArray, father[fatherIndex])) {
//                 stack.push([
//                   [...newTempArray[0]],
//                   [...newTempArray[1]],
//                   [...newTempArray[2]],
//                 ]);
//                 father.push([
//                   [...tempArrQueue[0]],
//                   [...tempArrQueue[1]],
//                   [...tempArrQueue[2]],
//                 ]);
//               }
//             } else {
//               for (let i = 0; i < arrLength; i++) {
//                 newTempArray[i] = tempArrQueue[i].slice();
//               }
//               swapArray2d(newTempArray, row, col, row, col - 1);
//               if (!isEquals(newTempArray, father[fatherIndex])) {
//                 stack.push([
//                   [...newTempArray[0]],
//                   [...newTempArray[1]],
//                   [...newTempArray[2]],
//                 ]);
//                 father.push([
//                   [...tempArrQueue[0]],
//                   [...tempArrQueue[1]],
//                   [...tempArrQueue[2]],
//                 ]);
//               }
//               for (let i = 0; i < arrLength; i++) {
//                 newTempArray[i] = tempArrQueue[i].slice();
//               }
//               swapArray2d(newTempArray, row, col, row, col + 1);
//               if (!isEquals(newTempArray, father[fatherIndex])) {
//                 stack.push([
//                   [...newTempArray[0]],
//                   [...newTempArray[1]],
//                   [...newTempArray[2]],
//                 ]);
//                 father.push([
//                   [...tempArrQueue[0]],
//                   [...tempArrQueue[1]],
//                   [...tempArrQueue[2]],
//                 ]);
//               }
//             }
//           }
//         } else {
//           let newTempArray: number[][] = [];
//           for (let i = 0; i < arrLength; i++) {
//             newTempArray[i] = tempArrQueue[i].slice();
//           }
//           swapArray2d(newTempArray, row, col, row - 1, col);
//           if (!isEquals(newTempArray, father[fatherIndex])) {
//             stack.push([
//               [...newTempArray[0]],
//               [...newTempArray[1]],
//               [...newTempArray[2]],
//             ]);
//             father.push([
//               [...tempArrQueue[0]],
//               [...tempArrQueue[1]],
//               [...tempArrQueue[2]],
//             ]);
//           }
//           for (let i = 0; i < arrLength; i++) {
//             newTempArray[i] = tempArrQueue[i].slice();
//           }
//           swapArray2d(newTempArray, row, col, row + 1, col);
//           if (!isEquals(newTempArray, father[fatherIndex])) {
//             stack.push([
//               [...newTempArray[0]],
//               [...newTempArray[1]],
//               [...newTempArray[2]],
//             ]);
//             father.push([
//               [...tempArrQueue[0]],
//               [...tempArrQueue[1]],
//               [...tempArrQueue[2]],
//             ]);
//           }
//           if (col === 0) {
//             for (let i = 0; i < arrLength; i++) {
//               newTempArray[i] = tempArrQueue[i].slice();
//             }
//             swapArray2d(newTempArray, row, col, row, col + 1);
//             if (!isEquals(newTempArray, father[fatherIndex])) {
//               stack.push([
//                 [...newTempArray[0]],
//                 [...newTempArray[1]],
//                 [...newTempArray[2]],
//               ]);
//               father.push([
//                 [...tempArrQueue[0]],
//                 [...tempArrQueue[1]],
//                 [...tempArrQueue[2]],
//               ]);
//             }
//           } else {
//             if (col === arrLength - 1) {
//               for (let i = 0; i < arrLength; i++) {
//                 newTempArray[i] = tempArrQueue[i].slice();
//               }
//               swapArray2d(newTempArray, row, col, row, col - 1);
//               if (!isEquals(newTempArray, father[fatherIndex])) {
//                 stack.push([
//                   [...newTempArray[0]],
//                   [...newTempArray[1]],
//                   [...newTempArray[2]],
//                 ]);
//                 father.push([
//                   [...tempArrQueue[0]],
//                   [...tempArrQueue[1]],
//                   [...tempArrQueue[2]],
//                 ]);
//               }
//             } else {
//               for (let i = 0; i < arrLength; i++) {
//                 newTempArray[i] = tempArrQueue[i].slice();
//               }
//               swapArray2d(newTempArray, row, col, row, col - 1);
//               if (!isEquals(newTempArray, father[fatherIndex])) {
//                 stack.push([
//                   [...newTempArray[0]],
//                   [...newTempArray[1]],
//                   [...newTempArray[2]],
//                 ]);
//                 father.push([
//                   [...tempArrQueue[0]],
//                   [...tempArrQueue[1]],
//                   [...tempArrQueue[2]],
//                 ]);
//               }
//               for (let i = 0; i < arrLength; i++) {
//                 newTempArray[i] = tempArrQueue[i].slice();
//               }
//               swapArray2d(newTempArray, row, col, row, col + 1);
//               if (!isEquals(newTempArray, father[fatherIndex])) {
//                 stack.push([
//                   [...newTempArray[0]],
//                   [...newTempArray[1]],
//                   [...newTempArray[2]],
//                 ]);
//                 father.push([
//                   [...tempArrQueue[0]],
//                   [...tempArrQueue[1]],
//                   [...tempArrQueue[2]],
//                 ]);
//               }
//             }
//           }
//         }
//         let tempArr2 = stack.slice(0, stack.length).sort(function () {
//           return Math.random() - 0.5;
//         });
//         queue.push(...tempArr2);
//         fatherIndex++;
//       }
//     }
//   }
//   father.shift();
//   console.log(father);
//   let fatherStep: number[][][] = [];

//   while (father.length !== 0) {
//     let z = 0;
//     for (let j = 0; j < fatherStep.length; j++) {
//       if (isEquals(fatherStep[j], father[0])) z++;
//     }
//     if (z === 0) {
//       // fatherStep.push([[...father[0][0]], [...father[0][1]], [...father[0][2]]]);
//       fatherStep.push(father[0]);
//     }
//     father.shift();
//   }
//   console.log(fatherStep);
// };

// // for (let i = 0; i < 10; i++) {
// //   for (let x = 0; x < queue.length; x++) {
// //     console.log(queue[x].array);
// //   }
// //   let tempArrQueue: ArrayProps | undefined = queue.shift();
// //   console.log(tempArrQueue);
// //   const search: number = 0;
// //   if (tempArrQueue !== undefined) {
// //     if (isEquals(tempArrQueue.array, targetArray)) {
// //       console.log('Founded');
// //       // break;
// //     }
// //     const row = tempArrQueue.array.findIndex((row) => row.includes(search));
// //     if (tempArrQueue.array[row] !== undefined) {
// //       const col = tempArrQueue.array[row].indexOf(search);
// //       if (row === 0) {
// //         for (let i = 0; i < arrLength; i++) {
// //           newTempArray[i] = tempArrQueue.array[i].slice();
// //         }
// //         swapArray2d(newTempArray, row, col, row + 1, col);
// //         if (!isEquals(newTempArray, father[father.length-1])) {
// //           let newTempTemp: ArrayProps = {
// //             array: [
// //               [1, 0, 2],
// //               [3, 4, 5],
// //               [6, 7, 8],
// //             ],
// //             father: targetArray,
// //           };
// //           for (let i = 0; i < arrLength; i++) {
// //             newTempTemp.array[i] = newTempArray[i].slice();
// //             newTempTemp.father[i] = tempArrQueue.array[i].slice();
// //           }
// //           queue.push({ ...newTempTemp });
// //         }
// //         if (col === 0) {
// //           for (let i = 0; i < arrLength; i++) {
// //             newTempArray[i] = tempArrQueue.array[i].slice();
// //           }
// //           swapArray2d(newTempArray, row, col, row, col + 1);
// //           if (!isEquals(newTempArray, father[father.length-1])) {
// //             let newTempTemp: ArrayProps = {
// //               array: [
// //                 [1, 0, 2],
// //                 [3, 4, 5],
// //                 [6, 7, 8],
// //               ],
// //               father: targetArray,
// //             };
// //             for (let i = 0; i < arrLength; i++) {
// //               newTempTemp.array[i] = newTempArray[i].slice();
// //               newTempTemp.father[i] = tempArrQueue.array[i].slice();
// //             }
// //             queue.push({ ...newTempTemp });
// //           }
// //         } else {
// //           if (col === arrLength - 1) {
// //             for (let i = 0; i < arrLength; i++) {
// //               newTempArray[i] = tempArrQueue.array[i].slice();
// //             }
// //             swapArray2d(newTempArray, row, col, row, col - 1);
// //             if (!isEquals(newTempArray, tempArrQueue.father)) {
// //               let newTempTemp: ArrayProps = {
// //                 array: [
// //                   [1, 0, 2],
// //                   [3, 4, 5],
// //                   [6, 7, 8],
// //                 ],
// //                 father: targetArray,
// //               };
// //               for (let i = 0; i < arrLength; i++) {
// //                 newTempTemp.array[i] = newTempArray[i].slice();
// //                 newTempTemp.father[i] = tempArrQueue.array[i].slice();
// //               }
// //               queue.push({ ...newTempTemp });
// //             }
// //           } else {
// //             for (let i = 0; i < arrLength; i++) {
// //               newTempArray[i] = tempArrQueue.array[i].slice();
// //             }
// //             swapArray2d(newTempArray, row, col, row, col - 1);
// //             if (!isEquals(newTempArray, tempArrQueue.father)) {
// //               let newTempTemp: ArrayProps = {
// //                 array: [
// //                   [1, 0, 2],
// //                   [3, 4, 5],
// //                   [6, 7, 8],
// //                 ],
// //                 father: targetArray,
// //               };
// //               for (let i = 0; i < arrLength; i++) {
// //                 newTempTemp.array[i] = newTempArray[i].slice();
// //                 newTempTemp.father[i] = tempArrQueue.array[i].slice();
// //               }
// //               queue.push({ ...newTempTemp });
// //             }
// //             for (let i = 0; i < arrLength; i++) {
// //               newTempArray[i] = tempArrQueue.array[i].slice();
// //             }
// //             swapArray2d(newTempArray, row, col, row, col + 1);
// //             if (!isEquals(newTempArray, tempArrQueue.father)) {
// //               let newTempTemp: ArrayProps = {
// //                 array: [
// //                   [1, 0, 2],
// //                   [3, 4, 5],
// //                   [6, 7, 8],
// //                 ],
// //                 father: targetArray,
// //               };
// //               for (let i = 0; i < arrLength; i++) {
// //                 newTempTemp.array[i] = newTempArray[i].slice();
// //                 newTempTemp.father[i] = tempArrQueue.array[i].slice();
// //               }
// //               queue.push({ ...newTempTemp });
// //             }
// //           }
// //         }
// //       } else if (row === arrLength - 1) {
// //         let newTempArray: number[][] = [];
// //         for (let i = 0; i < arrLength; i++) {
// //           newTempArray[i] = tempArrQueue.array[i].slice();
// //         }
// //         swapArray2d(newTempArray, row, col, row - 1, col);
// //         if (!isEquals(newTempArray, tempArrQueue.father)) {
// //           let newTempTemp: ArrayProps = {
// //             array: [
// //               [1, 0, 2],
// //               [3, 4, 5],
// //               [6, 7, 8],
// //             ],
// //             father: targetArray,
// //           };
// //           for (let i = 0; i < arrLength; i++) {
// //             newTempTemp.array[i] = newTempArray[i].slice();
// //             newTempTemp.father[i] = tempArrQueue.array[i].slice();
// //           }
// //           queue.push({ ...newTempTemp });
// //         }
// //         if (col === 0) {
// //           for (let i = 0; i < arrLength; i++) {
// //             newTempArray[i] = tempArrQueue.array[i].slice();
// //           }
// //           swapArray2d(newTempArray, row, col, row, col + 1);
// //           if (!isEquals(newTempArray, tempArrQueue.father)) {
// //             let newTempTemp: ArrayProps = {
// //               array: [
// //                 [1, 0, 2],
// //                 [3, 4, 5],
// //                 [6, 7, 8],
// //               ],
// //               father: targetArray,
// //             };
// //             for (let i = 0; i < arrLength; i++) {
// //               newTempTemp.array[i] = newTempArray[i].slice();
// //               newTempTemp.father[i] = tempArrQueue.array[i].slice();
// //             }
// //             queue.push({ ...newTempTemp });
// //           }
// //         } else {
// //           if (col === arrLength - 1) {
// //             for (let i = 0; i < arrLength; i++) {
// //               newTempArray[i] = tempArrQueue.array[i].slice();
// //             }
// //             swapArray2d(newTempArray, row, col, row, col - 1);
// //             if (!isEquals(newTempArray, tempArrQueue.father)) {
// //               let newTempTemp: ArrayProps = {
// //                 array: [
// //                   [1, 0, 2],
// //                   [3, 4, 5],
// //                   [6, 7, 8],
// //                 ],
// //                 father: targetArray,
// //               };
// //               for (let i = 0; i < arrLength; i++) {
// //                 newTempTemp.array[i] = newTempArray[i].slice();
// //                 newTempTemp.father[i] = tempArrQueue.array[i].slice();
// //               }
// //               queue.push({ ...newTempTemp });
// //             }
// //           } else {
// //             for (let i = 0; i < arrLength; i++) {
// //               newTempArray[i] = tempArrQueue.array[i].slice();
// //             }
// //             swapArray2d(newTempArray, row, col, row, col - 1);
// //             if (!isEquals(newTempArray, tempArrQueue.father)) {
// //               let newTempTemp: ArrayProps = {
// //                 array: [
// //                   [1, 0, 2],
// //                   [3, 4, 5],
// //                   [6, 7, 8],
// //                 ],
// //                 father: targetArray,
// //               };
// //               for (let i = 0; i < arrLength; i++) {
// //                 newTempTemp.array[i] = newTempArray[i].slice();
// //                 newTempTemp.father[i] = tempArrQueue.array[i].slice();
// //               }
// //               queue.push({ ...newTempTemp });
// //             }
// //             for (let i = 0; i < arrLength; i++) {
// //               newTempArray[i] = tempArrQueue.array[i].slice();
// //             }
// //             swapArray2d(newTempArray, row, col, row, col + 1);
// //             if (!isEquals(newTempArray, tempArrQueue.father)) {
// //               let newTempTemp: ArrayProps = {
// //                 array: [
// //                   [1, 0, 2],
// //                   [3, 4, 5],
// //                   [6, 7, 8],
// //                 ],
// //                 father: targetArray,
// //               };
// //               for (let i = 0; i < arrLength; i++) {
// //                 newTempTemp.array[i] = newTempArray[i].slice();
// //                 newTempTemp.father[i] = tempArrQueue.array[i].slice();
// //               }
// //               queue.push({ ...newTempTemp });
// //             }
// //           }
// //         }
// //       } else {
// //         let newTempArray: number[][] = [];
// //         for (let i = 0; i < arrLength; i++) {
// //           newTempArray[i] = tempArrQueue.array[i].slice();
// //         }
// //         swapArray2d(newTempArray, row, col, row - 1, col);
// //         if (!isEquals(newTempArray, tempArrQueue.father)) {
// //           let newTempTemp: ArrayProps = {
// //             array: [
// //               [1, 0, 2],
// //               [3, 4, 5],
// //               [6, 7, 8],
// //             ],
// //             father: targetArray,
// //           };
// //           for (let i = 0; i < arrLength; i++) {
// //             newTempTemp.array[i] = newTempArray[i].slice();
// //             newTempTemp.father[i] = tempArrQueue.array[i].slice();
// //           }
// //           queue.push({ ...newTempTemp });
// //         }
// //         for (let i = 0; i < arrLength; i++) {
// //           newTempArray[i] = tempArrQueue.array[i].slice();
// //         }
// //         swapArray2d(newTempArray, row, col, row + 1, col);
// //         if (!isEquals(newTempArray, tempArrQueue.father)) {
// //           let newTempTemp: ArrayProps = {
// //             array: [
// //               [1, 0, 2],
// //               [3, 4, 5],
// //               [6, 7, 8],
// //             ],
// //             father: targetArray,
// //           };
// //           for (let i = 0; i < arrLength; i++) {
// //             newTempTemp.array[i] = newTempArray[i].slice();
// //             newTempTemp.father[i] = tempArrQueue.array[i].slice();
// //           }
// //           queue.push({ ...newTempTemp });
// //         }
// //         if (col === 0) {
// //           for (let i = 0; i < arrLength; i++) {
// //             newTempArray[i] = tempArrQueue.array[i].slice();
// //           }
// //           swapArray2d(newTempArray, row, col, row, col + 1);
// //           if (!isEquals(newTempArray, tempArrQueue.father)) {
// //             let newTempTemp: ArrayProps = {
// //               array: [
// //                 [1, 0, 2],
// //                 [3, 4, 5],
// //                 [6, 7, 8],
// //               ],
// //               father: targetArray,
// //             };
// //             for (let i = 0; i < arrLength; i++) {
// //               newTempTemp.array[i] = newTempArray[i].slice();
// //               newTempTemp.father[i] = tempArrQueue.array[i].slice();
// //             }
// //             queue.push({ ...newTempTemp });
// //           }
// //         } else {
// //           if (col === arrLength - 1) {
// //             for (let i = 0; i < arrLength; i++) {
// //               newTempArray[i] = tempArrQueue.array[i].slice();
// //             }
// //             swapArray2d(newTempArray, row, col, row, col - 1);
// //             if (!isEquals(newTempArray, tempArrQueue.father)) {
// //               let newTempTemp: ArrayProps = {
// //                 array: [
// //                   [1, 0, 2],
// //                   [3, 4, 5],
// //                   [6, 7, 8],
// //                 ],
// //                 father: targetArray,
// //               };
// //               for (let i = 0; i < arrLength; i++) {
// //                 newTempTemp.array[i] = newTempArray[i].slice();
// //                 newTempTemp.father[i] = tempArrQueue.array[i].slice();
// //               }
// //               queue.push({ ...newTempTemp });
// //             }
// //           } else {
// //             for (let i = 0; i < arrLength; i++) {
// //               newTempArray[i] = tempArrQueue.array[i].slice();
// //             }
// //             swapArray2d(newTempArray, row, col, row, col - 1);
// //             if (!isEquals(newTempArray, tempArrQueue.father)) {
// //               let newTempTemp: ArrayProps = {
// //                 array: [
// //                   [1, 0, 2],
// //                   [3, 4, 5],
// //                   [6, 7, 8],
// //                 ],
// //                 father: targetArray,
// //               };
// //               for (let i = 0; i < arrLength; i++) {
// //                 newTempTemp.array[i] = newTempArray[i].slice();
// //                 newTempTemp.father[i] = tempArrQueue.array[i].slice();
// //               }
// //               queue.push({ ...newTempTemp });
// //             }
// //             for (let i = 0; i < arrLength; i++) {
// //               newTempArray[i] = tempArrQueue.array[i].slice();
// //             }
// //             swapArray2d(newTempArray, row, col, row, col + 1);
// //             if (!isEquals(newTempArray, tempArrQueue.father)) {
// //               let newTempTemp: ArrayProps = {
// //                 array: [
// //                   [1, 0, 2],
// //                   [3, 4, 5],
// //                   [6, 7, 8],
// //                 ],
// //                 father: targetArray,
// //               };
// //               for (let i = 0; i < arrLength; i++) {
// //                 newTempTemp.array[i] = newTempArray[i].slice();
// //                 newTempTemp.father[i] = tempArrQueue.array[i].slice();
// //               }
// //               queue.push({ ...newTempTemp });
// //             }
// //           }
// //         }
// //       }
// //     }
// //   }
// // }
