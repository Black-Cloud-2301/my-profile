import AlertAI1 from '@components/ai-projects/AlertAI-1';
import { wrap } from 'comlink';
import { useEffect, useState } from 'react';

let defaultArr = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
  22, 23, 24,
];

let arrLength = 3;
let array = [
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
];

if (arrLength === 4) {
  array = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ];
} else if (arrLength === 3) {
  array = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];
}

export const targetArray: number[][] = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
];

let tempArr = defaultArr.slice(0, arrLength * arrLength).sort(function () {
  return Math.random() - 0.5;
});

for (let i = 0; i < arrLength; i++) {
  for (let j = 0; j < arrLength; j++) {
    array[i][j] = tempArr[i * arrLength + j];
  }
}

let newArray: number[][] = [
  [7, 2, 4],
  [5, 0, 6],
  [8, 3, 1],
];

// for (let i = 0; i < array.length; i++) {
//   newArray[i] = array[i].slice();
// }
let tempFatherArray: number[][][] = [];
tempFatherArray.push(newArray);

const TaCanh = () => {
  const [index, setIndex] = useState(0);
  const [father, setFather] = useState([newArray]);
  const [arr, setArr] = useState(father[index]);
  const [alert, setAlert] = useState({ show: false, type: '', msg: '' });

  const showAlert = (show = false, type = '', msg = '') => {
    setAlert({ show, type, msg });
  };

  const swapItem = (indexI: number, indexJ: number) => {
    let newArray = new Array(...arr);
    let rowIndex = 0,
      colIndex = 0;
    for (let i = 0; i < arrLength; i++) {
      for (let j = 0; j < arrLength; j++) {
        if (arr[i][j] === 0) {
          rowIndex = i;
          colIndex = j;
        }
      }
    }

    if (indexI === rowIndex) {
      if (Math.abs(indexJ - colIndex) === 1) {
        newArray[rowIndex][colIndex] = newArray[indexI][indexJ];
        newArray[indexI][indexJ] = 0;
        setArr(newArray);
      } else showAlert(true, 'false', 'Không thể di chuyển ô này');
    } else if (Math.abs(indexI - rowIndex) === 1) {
      if (indexJ === colIndex) {
        newArray[rowIndex][colIndex] = newArray[indexI][indexJ];
        newArray[indexI][indexJ] = 0;
        setArr(newArray);
      } else showAlert(true, 'false', 'Không thể di chuyển ô này');
    } else {
      showAlert(true, 'false', 'Không thể di chuyển ô này');
    }
  };

  let className = 'grid h-full grid-cols-3 border border-black-900';
  if (arrLength === 4)
    className = 'grid h-full grid-cols-4 border border-black-900';
  else if (arrLength === 5)
    className = 'grid h-full grid-cols-5 border border-black-900';

  useEffect(() => {
    if (father.length > 10) {
      let slider = setInterval(() => {
        if (index < father.length - 1) setIndex(index + 1);
      }, 500);
      return () => {
        clearInterval(slider);
      };
    }
    return;
  }, [index, father]);

  return (
    <main className='flex flex-col justify-center items-center h-screen'>
      <header className='flex justify-between w-104 2xl:w-160 items-center mb-8'>
        <button
          className='bg-gray-300 text-white text-2xl font-semibold px-2 py-1 rounded hover:bg-red-500'
          onClick={async () => {
            const worker = new Worker(
              new URL('src/worker/best-first-search.worker.ts', import.meta.url)
            );
            const { BestFirstSearch } =
              wrap<
                import('src/worker/best-first-search.worker').BestFirstSearchWorker
              >(worker);
            setIndex(0);
            setFather(await BestFirstSearch(newArray));
          }}
        >
          BFS
        </button>
        <button
          className='bg-gray-300 text-white text-2xl font-semibold px-2 py-1 rounded hover:bg-blue-500'
          onClick={async () => {
            const worker = new Worker(
              new URL('src/worker/dfs-depthLS.worker.ts', import.meta.url)
            );
            const { DFSDepthLS } =
              wrap<import('src/worker/dfs-depthLS.worker').DFSDepthLSWorker>(
                worker
              );
            setIndex(0);
            setFather(await DFSDepthLS(newArray));
          }}
        >
          DFS
        </button>
        <button
          className='bg-gray-300 text-white text-2xl font-semibold px-2 py-1 rounded hover:bg-blue-500'
          onClick={async () => {
            const worker = new Worker(
              new URL('src/worker/beam-search.worker.ts', import.meta.url)
            );
            const { BeamSearch } =
              wrap<import('src/worker/beam-search.worker').BeamSearchWorker>(
                worker
              );
            setIndex(0);
            setFather(await BeamSearch(newArray));
          }}
        >
          Beam
        </button>
        <button
          className='bg-gray-300 text-white text-2xl font-semibold px-2 py-1 rounded hover:bg-blue-500'
          onClick={async () => {
            const worker = new Worker(
              new URL(
                'src/worker/artificial-intelligence.worker.ts',
                import.meta.url
              )
            );
            const { ArtificialIntelligence } =
              wrap<
                import('src/worker/artificial-intelligence.worker').ArtificialIntelligenceWorker
              >(worker);
            setIndex(0);
            setFather(await ArtificialIntelligence(newArray));
          }}
        >
          Climb
        </button>
      </header>
      <div className='relative bg-gray-300 w-104 2xl:w-160 h-104 2xl:h-160'>
        <AlertAI1 {...alert} showAlert={showAlert} />
        <ul className={className}>
          {father[index].map((items, indexI) => {
            return items.map((subItems, indexJ) => {
              return (
                <li
                  className='flex justify-center items-center border border-black-900'
                  key={indexJ}
                >
                  {subItems === 0 ? (
                    ''
                  ) : (
                    <button
                      className='border-2 border-black-900 bg-gray-400 text-white font-semibold w-10/12 h-10/12 text-6xl rounded hover:bg-orange'
                      onClick={() => swapItem(indexI, indexJ)}
                    >
                      {subItems}
                    </button>
                  )}
                </li>
              );
            });
          })}
        </ul>
      </div>
    </main>
  );
};

export default TaCanh;
