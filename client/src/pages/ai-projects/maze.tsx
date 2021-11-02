import { BranchAndBound } from '@components/ai-projects/maze/algorithm';
import SingleSquare from '@components/ai-projects/maze/SingleSquare';
import { useState } from 'react';

const mazeBackground = [
  [0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
  [0, 0, 0, 0, 0, 1, 0, 1, 1, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 1, 1, 0, 1, 0, 1, 0],
  [1, 0, 1, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 1, 1, 0, 0, 0, 1, 1, 0],
  [0, 0, 0, 0, 1, 0, 0, 0, 1, 0],
  [1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
  [0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
  [0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
];
// const mazeLength = 10;
// const mazeBackground: number[][] = [];
// for (let i = 0; i < mazeLength; i++) {
//   const tempArray: number[] = [];
//   for (let j = 0; j < mazeLength; j++) {
//     tempArray.push(Math.floor(Math.random() * 2));
//   }
//   mazeBackground.push(tempArray);
// }

const Maze = () => {
  const [count, setCount] = useState(0);
  const [start, setStart] = useState({ row: 0, col: 0 });
  const [end, setEnd] = useState({ row: 0, col: 0 });
  const [list, setList] = useState([{ row: -1, col: 0, evaluate: 0 }]);

  const handleCLick = () => {
    const answer = BranchAndBound(start, end);
    if (answer !== undefined) setList(answer);
  };

  return (
    <div className='text-center h-screen flex flex-col'>
      <div className='h-2/12 flex justify-center items-center'>
        <button
          className=' px-2 py-1 rounded bg-gray-200 hover:bg-red-400 hover:text-white'
          onClick={handleCLick}
        >
          Run
        </button>
      </div>
      <div className=' h-8/12 flex justify-center items-center'>
        <ul className='grid grid-cols-10 w-136 h-136 gap-1'>
          {mazeBackground.map((items, indexI) => {
            return items.map((subItem, indexJ) => {
              return (
                <>
                  <SingleSquare
                    key={indexJ}
                    item={{
                      subItem,
                      indexI,
                      indexJ,
                      setStart,
                      setEnd,
                      count,
                      setCount,
                      list,
                    }}
                  />
                </>
              );
            });
          })}
        </ul>
      </div>
    </div>
  );
};

export default Maze;
