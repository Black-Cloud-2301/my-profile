import { useState } from 'react';

interface QueueProps {
  array: number[][];
  evaluate: number;
}

let arrayStart = [
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 2, 0, 0, 0],
  [0, 0, 0, 2, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
];

const checkEat = (array: number[][]) => {
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (array[i][j] === 1) {
        if (i > 1 && i < 7 && j > 1 && j < 7) {
          if (array[i + 1][j] === 2 && array[i - 1][j] === 2) array[i][j] = 2;
          else if (array[i][j + 1] === 2 && array[i][j - 1] === 2)
            array[i][j] = 2;
          else if (array[i - 1][j - 1] === 2 && array[i + 1][j + 1] === 2)
            array[i][j] = 2;
          else if (array[i - 1][j + 1] === 2 && array[i + 1][j - 1] === 2)
            array[i][j] = 2;
        }
      } else if (array[i][j] === 2) {
        if (i > 1 && i < 7 && j > 1 && j < 7) {
          if (array[i + 1][j] === 1 && array[i - 1][j] === 1) array[i][j] = 1;
          else if (array[i][j + 1] === 1 && array[i][j - 1] === 1)
            array[i][j] = 1;
          else if (array[i - 1][j - 1] === 1 && array[i + 1][j + 1] === 1)
            array[i][j] = 1;
          else if (array[i - 1][j + 1] === 1 && array[i + 1][j - 1] === 1)
            array[i][j] = 1;
        }
      }
    }
  }
};

const evaluate = (array: number[][]) => {
  let evaluate = 0;
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (array[i][j] === 1) evaluate++;
      else if (array[i][j] === 2) evaluate--;
    }
  }
  return evaluate;
};

const checkCanChange = (array: number[][], i: number, j: number) => {
  if (i >= 0 && i < 8 && j >= 0 && j < 8) {
    if (array[i][j] === 0) return true;
  }
  return false;
};

const minimax = (array: number[][]) => {
  const depth = 1;
  const queue: QueueProps[] = [];
  queue.push({ array: array, evaluate: evaluate(array) });

  for (let i = 0; i < depth; i++) {
    let tempQueue = queue.pop();
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        if (tempQueue?.array[i][j] === 2) {
          if (checkCanChange(tempQueue.array, i - 1, j)) {
            let newTempQueue = [
              [...tempQueue.array[0]],
              [...tempQueue.array[1]],
              [...tempQueue.array[2]],
              [...tempQueue.array[3]],
              [...tempQueue.array[4]],
              [...tempQueue.array[5]],
              [...tempQueue.array[6]],
              [...tempQueue.array[7]],
            ];
            newTempQueue[i - 1][j] = 2;
            checkEat(newTempQueue);
            queue.push({
              array: newTempQueue,
              evaluate: evaluate(newTempQueue),
            });
          }
          if (checkCanChange(tempQueue.array, i + 1, j)) {
            let newTempQueue = [
              [...tempQueue.array[0]],
              [...tempQueue.array[1]],
              [...tempQueue.array[2]],
              [...tempQueue.array[3]],
              [...tempQueue.array[4]],
              [...tempQueue.array[5]],
              [...tempQueue.array[6]],
              [...tempQueue.array[7]],
            ];
            newTempQueue[i + 1][j] = 2;
            checkEat(newTempQueue);
            queue.push({
              array: newTempQueue,
              evaluate: evaluate(newTempQueue),
            });
          }
          if (checkCanChange(tempQueue.array, i, j - 1)) {
            let newTempQueue = [
              [...tempQueue.array[0]],
              [...tempQueue.array[1]],
              [...tempQueue.array[2]],
              [...tempQueue.array[3]],
              [...tempQueue.array[4]],
              [...tempQueue.array[5]],
              [...tempQueue.array[6]],
              [...tempQueue.array[7]],
            ];
            newTempQueue[i][j - 1] = 2;
            checkEat(newTempQueue);
            queue.push({
              array: newTempQueue,
              evaluate: evaluate(newTempQueue),
            });
          }
          if (checkCanChange(tempQueue.array, i, j + 1)) {
            let newTempQueue = [
              [...tempQueue.array[0]],
              [...tempQueue.array[1]],
              [...tempQueue.array[2]],
              [...tempQueue.array[3]],
              [...tempQueue.array[4]],
              [...tempQueue.array[5]],
              [...tempQueue.array[6]],
              [...tempQueue.array[7]],
            ];
            newTempQueue[i][j + 1] = 2;
            checkEat(newTempQueue);
            queue.push({
              array: newTempQueue,
              evaluate: evaluate(newTempQueue),
            });
          }
          if (checkCanChange(tempQueue.array, i - 1, j - 1)) {
            let newTempQueue = [
              [...tempQueue.array[0]],
              [...tempQueue.array[1]],
              [...tempQueue.array[2]],
              [...tempQueue.array[3]],
              [...tempQueue.array[4]],
              [...tempQueue.array[5]],
              [...tempQueue.array[6]],
              [...tempQueue.array[7]],
            ];
            newTempQueue[i - 1][j - 1] = 2;
            checkEat(newTempQueue);
            queue.push({
              array: newTempQueue,
              evaluate: evaluate(newTempQueue),
            });
          }
          if (checkCanChange(tempQueue.array, i + 1, j + 1)) {
            let newTempQueue = [
              [...tempQueue.array[0]],
              [...tempQueue.array[1]],
              [...tempQueue.array[2]],
              [...tempQueue.array[3]],
              [...tempQueue.array[4]],
              [...tempQueue.array[5]],
              [...tempQueue.array[6]],
              [...tempQueue.array[7]],
            ];
            newTempQueue[i + 1][j + 1] = 2;
            checkEat(newTempQueue);
            queue.push({
              array: newTempQueue,
              evaluate: evaluate(newTempQueue),
            });
          }
          if (checkCanChange(tempQueue.array, i - 1, j + 1)) {
            let newTempQueue = [
              [...tempQueue.array[0]],
              [...tempQueue.array[1]],
              [...tempQueue.array[2]],
              [...tempQueue.array[3]],
              [...tempQueue.array[4]],
              [...tempQueue.array[5]],
              [...tempQueue.array[6]],
              [...tempQueue.array[7]],
            ];
            newTempQueue[i - 1][j + 1] = 2;
            checkEat(newTempQueue);
            queue.push({
              array: newTempQueue,
              evaluate: evaluate(newTempQueue),
            });
          }
          if (checkCanChange(tempQueue.array, i + 1, j - 1)) {
            let newTempQueue = [
              [...tempQueue.array[0]],
              [...tempQueue.array[1]],
              [...tempQueue.array[2]],
              [...tempQueue.array[3]],
              [...tempQueue.array[4]],
              [...tempQueue.array[5]],
              [...tempQueue.array[6]],
              [...tempQueue.array[7]],
            ];
            newTempQueue[i + 1][j - 1] = 2;
            checkEat(newTempQueue);
            queue.push({
              array: newTempQueue,
              evaluate: evaluate(newTempQueue),
            });
          }
        }
      }
    }
  }
  queue.sort(function (a, b) {
    return a.evaluate - b.evaluate;
  });
  console.log(queue.length);
  return queue[0].array;
};

const Othello = () => {
  const [array, setArray] = useState(arrayStart);

  const handleClick = (indexI: number, indexJ: number) => {
    arrayStart[indexI][indexJ] = 1;
    checkEat(arrayStart);
    arrayStart = minimax(arrayStart);
    checkEat(arrayStart);
    console.log(arrayStart);
    setArray([...arrayStart]);
  };

  return (
    <main>
      <div className=' h-screen flex justify-center items-center'>
        <ul className='grid grid-cols-8 w-152 h-152'>
          {array.map((items, indexI) => {
            return items.map((subItem, indexJ) => {
              return (
                <button
                  key={indexI + indexJ}
                  className='border-2 w-20 h-20 text-4xl text-red-500 bg-green-300 flex justify-center items-center'
                  onClick={() => handleClick(indexI, indexJ)}
                >
                  {subItem === 0 ? (
                    ''
                  ) : subItem === 1 ? (
                    <div className='w-10 h-10 bg-white rounded-full' />
                  ) : (
                    <div className='w-10 h-10 bg-black-500 rounded-full' />
                  )}
                </button>
              );
            });
          })}
        </ul>
      </div>
    </main>
  );
};

export default Othello;
