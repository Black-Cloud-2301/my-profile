import { useState } from 'react';
import Image from 'next/image';
import GraphImage from 'public/images/person/graph.png';

interface DataProps {
  city1: string;
  city2: string;
  range: number;
  father: { city1: string; city2: string; range: number }[];
}

let data: DataProps[] = [
  {
    city1: 'Urziceni',
    city2: 'Oradea',
    range: 81.6,
    father: [{ city1: 'Urziceni', city2: 'Oradea', range: 81.6 }],
  },
  {
    city1: 'Urziceni',
    city2: 'Neamt',
    range: 315,
    father: [{ city1: 'Urziceni', city2: 'Neamt', range: 315 }],
  },
  {
    city1: 'Urziceni',
    city2: 'Fagaras',
    range: 286.1,
    father: [{ city1: 'Urziceni', city2: 'Fagaras', range: 286.1 }],
  },
  {
    city1: 'Oradea',
    city2: 'Urziceni',
    range: 81.6,
    father: [{ city1: 'Oradea', city2: 'Urziceni', range: 81.6 }],
  },
  {
    city1: 'Oradea',
    city2: 'Zerind',
    range: 57.6,
    father: [{ city1: 'Oradea', city2: 'Zerind', range: 57.6 }],
  },
  {
    city1: 'Oradea',
    city2: 'Sibiu',
    range: 221.1,
    father: [{ city1: 'Oradea', city2: 'Sibiu', range: 221.1 }],
  },
  {
    city1: 'Zerind',
    city2: 'Oradea',
    range: 57.6,
    father: [{ city1: 'Zerind', city2: 'Oradea', range: 57.6 }],
  },
  {
    city1: 'Zerind',
    city2: 'Arad',
    range: 51.9,
    father: [{ city1: 'Zerind', city2: 'Arad', range: 51.9 }],
  },
  {
    city1: 'Zerind',
    city2: 'Lugoj',
    range: 108.6,
    father: [{ city1: 'Zerind', city2: 'Lugoj', range: 108.6 }],
  },
  {
    city1: 'Arad',
    city2: 'Zerind',
    range: 51.9,
    father: [{ city1: 'Arad', city2: 'Zerind', range: 51.9 }],
  },
  {
    city1: 'Arad',
    city2: 'Timisoara',
    range: 48.4,
    father: [{ city1: 'Arad', city2: 'Timisoara', range: 48.4 }],
  },
  {
    city1: 'Arad',
    city2: 'Sibiu',
    range: 223.2,
    father: [{ city1: 'Arad', city2: 'Sibiu', range: 223.2 }],
  },
  {
    city1: 'Timisoara',
    city2: 'Arad',
    range: 48.4,
    father: [{ city1: 'Timisoara', city2: 'Arad', range: 48.4 }],
  },
  {
    city1: 'Timisoara',
    city2: 'Lugoj',
    range: 54,
    father: [{ city1: 'Timisoara', city2: 'Lugoj', range: 54 }],
  },
  {
    city1: 'Timisoara',
    city2: 'Mehadia',
    range: 128.9,
    father: [{ city1: 'Timisoara', city2: 'Mehadia', range: 128.9 }],
  },
  {
    city1: 'Lugoj',
    city2: 'Zerind',
    range: 108.6,
    father: [{ city1: 'Lugoj', city2: 'Zerind', range: 108.6 }],
  },
  {
    city1: 'Lugoj',
    city2: 'Timisoara',
    range: 54,
    father: [{ city1: 'Lugoj', city2: 'Timisoara', range: 54 }],
  },
  {
    city1: 'Lugoj',
    city2: 'Sibiu',
    range: 173.7,
    father: [{ city1: 'Lugoj', city2: 'Sibiu', range: 173.7 }],
  },
  {
    city1: 'Lugoj',
    city2: 'Rimnicu Vilcea',
    range: 203,
    father: [{ city1: 'Lugoj', city2: 'Rimnicu Vilcea', range: 203 }],
  },
  {
    city1: 'Lugoj',
    city2: 'Mehadia',
    range: 93.5,
    father: [{ city1: 'Lugoj', city2: 'Mehadia', range: 93.5 }],
  },
  {
    city1: 'Mehadia',
    city2: 'Lugoj',
    range: 93.5,
    father: [{ city1: 'Mehadia', city2: 'Lugoj', range: 93.5 }],
  },
  {
    city1: 'Mehadia',
    city2: 'Timisoara',
    range: 128.9,
    father: [{ city1: 'Mehadia', city2: 'Timisoara', range: 128.9 }],
  },
  {
    city1: 'Mehadia',
    city2: 'Rimnicu Vilcea',
    range: 160.5,
    father: [{ city1: 'Mehadia', city2: 'Rimnicu Vilcea', range: 160 }],
  },
  {
    city1: 'Mehadia',
    city2: 'Dobreta',
    range: 38.3,
    father: [{ city1: 'Mehadia', city2: 'Dobreta', range: 38.3 }],
  },
  {
    city1: 'Dobreta',
    city2: 'Mehadia',
    range: 38.3,
    father: [{ city1: 'Dobreta', city2: 'Mehadia', range: 38.3 }],
  },
  {
    city1: 'Dobreta',
    city2: 'Craiova',
    range: 97.5,
    father: [{ city1: 'Dobreta', city2: 'Craiova', range: 97.5 }],
  },
  {
    city1: 'Sibiu',
    city2: 'Oradea',
    range: 221.1,
    father: [{ city1: 'Sibiu', city2: 'Oradea', range: 221.1 }],
  },
  {
    city1: 'Sibiu',
    city2: 'Arad',
    range: 223.2,
    father: [{ city1: 'Sibiu', city2: 'Arad', range: 223.2 }],
  },
  {
    city1: 'Sibiu',
    city2: 'Lugoj',
    range: 173.7,
    father: [{ city1: 'Sibiu', city2: 'Lugoj', range: 173.7 }],
  },
  {
    city1: 'Sibiu',
    city2: 'Rimnicu Vilcea',
    range: 78,
    father: [{ city1: 'Sibiu', city2: 'Rimnicu Vilcea', range: 78 }],
  },
  {
    city1: 'Sibiu',
    city2: 'Fagaras',
    range: 64.3,
    father: [{ city1: 'Sibiu', city2: 'Fagaras', range: 64.3 }],
  },
  {
    city1: 'Rimnicu Vilcea',
    city2: 'Sibiu',
    range: 78,
    father: [{ city1: 'Rimnicu Vilcea', city2: 'Sibiu', range: 78 }],
  },
  {
    city1: 'Rimnicu Vilcea',
    city2: 'Lugoj',
    range: 203,
    father: [{ city1: 'Rimnicu Vilcea', city2: 'Lugoj', range: 203 }],
  },
  {
    city1: 'Rimnicu Vilcea',
    city2: 'Mehadia',
    range: 160.5,
    father: [{ city1: 'Rimnicu Vilcea', city2: 'Mehadia', range: 160 }],
  },
  {
    city1: 'Rimnicu Vilcea',
    city2: 'Pitesti',
    range: 47.2,
    father: [{ city1: 'Rimnicu Vilcea', city2: 'Pitesti', range: 47 }],
  },
  {
    city1: 'Rimnicu Vilcea',
    city2: 'Craiova',
    range: 99.3,
    father: [{ city1: 'Rimnicu Vilcea', city2: 'Craiova', range: 99 }],
  },
  {
    city1: 'Craiova',
    city2: 'Rimnicu Vilcea',
    range: 99.3,
    father: [{ city1: 'Craiova', city2: 'Rimnicu Vilcea', range: 99 }],
  },
  {
    city1: 'Craiova',
    city2: 'Dobreta',
    range: 97.5,
    father: [{ city1: 'Craiova', city2: 'Dobreta', range: 97.5 }],
  },
  {
    city1: 'Craiova',
    city2: 'Pitesti',
    range: 103.5,
    father: [{ city1: 'Craiova', city2: 'Pitesti', range: 103.5 }],
  },
  {
    city1: 'Craiova',
    city2: 'Bucharest',
    range: 183,
    father: [{ city1: 'Craiova', city2: 'Bucharest', range: 183 }],
  },
  {
    city1: 'Craiova',
    city2: 'Giurgiu',
    range: 178.2,
    father: [{ city1: 'Craiova', city2: 'Giurgiu', range: 178.2 }],
  },
  {
    city1: 'Fagaras',
    city2: 'Urziceni',
    range: 286.1,
    father: [{ city1: 'Fagaras', city2: 'Urziceni', range: 286.1 }],
  },
  {
    city1: 'Fagaras',
    city2: 'Sibiu',
    range: 64.3,
    father: [{ city1: 'Fagaras', city2: 'Sibiu', range: 64.3 }],
  },
  {
    city1: 'Fagaras',
    city2: 'Pitesti',
    range: 109.8,
    father: [{ city1: 'Fagaras', city2: 'Pitesti', range: 109.8 }],
  },
  {
    city1: 'Fagaras',
    city2: 'Neamt',
    range: 174.9,
    father: [{ city1: 'Fagaras', city2: 'Neamt', range: 174.9 }],
  },
  {
    city1: 'Fagaras',
    city2: 'Vaslui',
    range: 229.4,
    father: [{ city1: 'Fagaras', city2: 'Vaslui', range: 229.4 }],
  },
  {
    city1: 'Fagaras',
    city2: 'Hirsova',
    range: 265.5,
    father: [{ city1: 'Fagaras', city2: 'Hirsova', range: 265.5 }],
  },
  {
    city1: 'Fagaras',
    city2: 'Bucharest',
    range: 178.3,
    father: [{ city1: 'Fagaras', city2: 'Bucharest', range: 178.3 }],
  },
  {
    city1: 'Pitesti',
    city2: 'Fagaras',
    range: 109.8,
    father: [{ city1: 'Pitesti', city2: 'Fagaras', range: 109.8 }],
  },
  {
    city1: 'Pitesti',
    city2: 'Rimnicu Vilcea',
    range: 47.2,
    father: [{ city1: 'Pitesti', city2: 'Rimnicu Vilcea', range: 47 }],
  },
  {
    city1: 'Pitesti',
    city2: 'Craiova',
    range: 103.5,
    father: [{ city1: 'Pitesti', city2: 'Craiova', range: 103.5 }],
  },
  {
    city1: 'Pitesti',
    city2: 'Bucharest',
    range: 107.5,
    father: [{ city1: 'Pitesti', city2: 'Bucharest', range: 107.5 }],
  },
  {
    city1: 'Neamt',
    city2: 'Urziceni',
    range: 315,
    father: [{ city1: 'Neamt', city2: 'Urziceni', range: 315 }],
  },
  {
    city1: 'Neamt',
    city2: 'Fagaras',
    range: 174.9,
    father: [{ city1: 'Neamt', city2: 'Fagaras', range: 174.9 }],
  },
  {
    city1: 'Neamt',
    city2: 'Lasi',
    range: 85.8,
    father: [{ city1: 'Neamt', city2: 'Lasi', range: 85.8 }],
  },
  {
    city1: 'Neamt',
    city2: 'Vaslui',
    range: 105.5,
    father: [{ city1: 'Neamt', city2: 'Vaslui', range: 105.5 }],
  },
  {
    city1: 'Neamt',
    city2: 'Bucharest',
    range: 289.1,
    father: [{ city1: 'Neamt', city2: 'Bucharest', range: 289.1 }],
  },
  {
    city1: 'Bucharest',
    city2: 'Neamt',
    range: 289.1,
    father: [{ city1: 'Bucharest', city2: 'Neamt', range: 289.1 }],
  },
  {
    city1: 'Bucharest',
    city2: 'Vaslui',
    range: 274.9,
    father: [{ city1: 'Bucharest', city2: 'Vaslui', range: 274.9 }],
  },
  {
    city1: 'Bucharest',
    city2: 'Fagaras',
    range: 178.3,
    father: [{ city1: 'Bucharest', city2: 'Fagaras', range: 178.3 }],
  },
  {
    city1: 'Bucharest',
    city2: 'Pitesti',
    range: 107.5,
    father: [{ city1: 'Bucharest', city2: 'Pitesti', range: 107.5 }],
  },
  {
    city1: 'Bucharest',
    city2: 'Craiova',
    range: 183,
    father: [{ city1: 'Bucharest', city2: 'Craiova', range: 183 }],
  },
  {
    city1: 'Bucharest',
    city2: 'Hirsova',
    range: 149.3,
    father: [{ city1: 'Bucharest', city2: 'Hirsova', range: 149.3 }],
  },
  {
    city1: 'Bucharest',
    city2: 'Giurgiu',
    range: 62.4,
    father: [{ city1: 'Bucharest', city2: 'Giurgiu', range: 62.4 }],
  },
  {
    city1: 'Bucharest',
    city2: 'Eforie',
    range: 208.2,
    father: [{ city1: 'Bucharest', city2: 'Eforie', range: 208.2 }],
  },
  {
    city1: 'Giurgiu',
    city2: 'Craiova',
    range: 178.2,
    father: [{ city1: 'Giurgiu', city2: 'Craiova', range: 178.2 }],
  },
  {
    city1: 'Giurgiu',
    city2: 'Bucharest',
    range: 62.4,
    father: [{ city1: 'Giurgiu', city2: 'Bucharest', range: 62.4 }],
  },
  {
    city1: 'Giurgiu',
    city2: 'Eforie',
    range: 216.5,
    father: [{ city1: 'Giurgiu', city2: 'Eforie', range: 216.5 }],
  },
  {
    city1: 'Lasi',
    city2: 'Neamt',
    range: 85.8,
    father: [{ city1: 'Lasi', city2: 'Neamt', range: 85.8 }],
  },
  {
    city1: 'Lasi',
    city2: 'Vaslui',
    range: 58.4,
    father: [{ city1: 'Lasi', city2: 'Vaslui', range: 58.4 }],
  },
  {
    city1: 'Vaslui',
    city2: 'Neamt',
    range: 105.5,
    father: [{ city1: 'Vaslui', city2: 'Neamt', range: 105.5 }],
  },
  {
    city1: 'Vaslui',
    city2: 'Lasi',
    range: 58.4,
    father: [{ city1: 'Vaslui', city2: 'Lasi', range: 58.4 }],
  },
  {
    city1: 'Vaslui',
    city2: 'Hirsova',
    range: 217.3,
    father: [{ city1: 'Vaslui', city2: 'Hirsova', range: 217.3 }],
  },
  {
    city1: 'Vaslui',
    city2: 'Fagaras',
    range: 229.4,
    father: [{ city1: 'Vaslui', city2: 'Fagaras', range: 229.4 }],
  },
  {
    city1: 'Vaslui',
    city2: 'Bucharest',
    range: 274.9,
    father: [{ city1: 'Vaslui', city2: 'Bucharest', range: 274.9 }],
  },
  {
    city1: 'Hirsova',
    city2: 'Fagaras',
    range: 265.5,
    father: [{ city1: 'Hirsova', city2: 'Fagaras', range: 265.5 }],
  },
  {
    city1: 'Hirsova',
    city2: 'Vaslui',
    range: 217.3,
    father: [{ city1: 'Hirsova', city2: 'Vaslui', range: 217.3 }],
  },
  {
    city1: 'Hirsova',
    city2: 'Bucharest',
    range: 149.3,
    father: [{ city1: 'Hirsova', city2: 'Bucharest', range: 149.3 }],
  },
  {
    city1: 'Hirsova',
    city2: 'Eforie',
    range: 90.6,
    father: [{ city1: 'Hirsova', city2: 'Eforie', range: 90.6 }],
  },
  {
    city1: 'Eforie',
    city2: 'Bucharest',
    range: 208.2,
    father: [{ city1: 'Eforie', city2: 'Bucharest', range: 208.2 }],
  },
  {
    city1: 'Eforie',
    city2: 'Giurgiu',
    range: 216.5,
    father: [{ city1: 'Eforie', city2: 'Giurgiu', range: 216.5 }],
  },
  {
    city1: 'Eforie',
    city2: 'Hirsova',
    range: 90.6,
    father: [{ city1: 'Eforie', city2: 'Hirsova', range: 90.6 }],
  },
];

let cityName: string[] = [];
for (let i = 0; i < data.length; i++) {
  cityName.push(data[i].city1);
}

cityName = [...Array.from(new Set(cityName))];

const Graph = () => {
  const [city1, setCity1] = useState('');
  const [city2, setCity2] = useState('');
  const [list, setList] = useState([{ city1: '', city2: '', range: 0 }]);
  const [range, setRange] = useState(0);

  const handleClick = () => {
    const queue = data.filter((item) => item.city1 === city1);
    while (true) {
      queue.sort(function (a, b) {
        return a.range - b.range;
      });

      const tempQueue = queue.shift();
      if (tempQueue?.city2 === city2) {
        setList(tempQueue.father);
        setRange(tempQueue.range);
        break;
      }
      const temp = data.filter((item) => tempQueue?.city2 === item.city1);
      const newQueue = [];
      for (let i = 0; i < temp.length; i++) {
        newQueue.push({
          city1: temp[i].city1,
          city2: temp[i].city2,
          range: temp[i].range,
          father: [temp[i].father[0]],
        });
      }
      if (tempQueue !== undefined) {
        for (let i = 0; i < newQueue.length; i++) {
          if (newQueue[i].city2 !== tempQueue?.city1) {
            newQueue[i].father.unshift(...tempQueue.father);
            newQueue[i].range += tempQueue.range;
            queue.push(newQueue[i]);
          }
        }
      }
    }
  };

  return (
    <>
      <section className='flex p-20'>
        <article className='w-8/12'>
          <div className='flex justify-around'>
            <div>
              <label
                className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
                htmlFor='grid-state'
              >
                Từ thành phố
              </label>
              <select
                className='h-12 bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                id='grid-state'
                onChange={(e) => {
                  setCity1(e.target.value);
                }}
              >
                {cityName.map((item, index) => (
                  <option key={index} value={item}>
                    {item}
                  </option>
                ))}
                {/* <option value='Urziceni'>Urziceni</option>
                <option value='Oradea'>Oradea</option>
                <option value='Zerind'>Zerind</option>
                <option value='Arad'>Arad</option>
                <option value='Timisoara'>Timisoara</option>
                <option value='Lugoj'>Lugoj</option>
                <option value='Mehadia'>Mehadia</option>
                <option value='Dobreta'>Dobreta</option>
                <option value='Sibiu'>Sibiu</option>
                <option value='Rimnicu Vilcea'>Rimnicu Vilcea</option>
                <option value='Craiova'>Craiova</option>
                <option value='Fagaras'>Fagaras</option>
                <option value='Pitesti'>Pitesti</option>
                <option value='Neamt'>Neamt</option>
                <option value='Bucharest'>Bucharest</option>
                <option value='Giurgiu'>Giurgiu</option>
                <option value='Lasi'>Lasi</option>
                <option value='Vaslui'>Vaslui</option>
                <option value='Hirsova'>Hirsova</option>
                <option value='Eforie'>Eforie</option> */}
              </select>
            </div>
            <div>
              <label
                className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
                htmlFor='grid-state'
              >
                Đến thành phố
              </label>
              <select
                className='h-12 bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                id='grid-state'
                onChange={(e) => {
                  setCity2(e.target.value);
                }}
              >
                {cityName.map((item, index) => (
                  <option key={index} value={item}>
                    {item}
                  </option>
                ))}
                {/* <option value='Urziceni'>Urziceni</option>
                <option value='Oradea'>Oradea</option>
                <option value='Zerind'>Zerind</option>
                <option value='Arad'>Arad</option>
                <option value='Timisoara'>Timisoara</option>
                <option value='Lugoj'>Lugoj</option>
                <option value='Mehadia'>Mehadia</option>
                <option value='Dobreta'>Dobreta</option>
                <option value='Sibiu'>Sibiu</option>
                <option value='Rimnicu Vilcea'>Rimnicu Vilcea</option>
                <option value='Craiova'>Craiova</option>
                <option value='Fagaras'>Fagaras</option>
                <option value='Pitesti'>Pitesti</option>
                <option value='Neamt'>Neamt</option>
                <option value='Bucharest'>Bucharest</option>
                <option value='Giurgiu'>Giurgiu</option>
                <option value='Lasi'>Lasi</option>
                <option value='Vaslui'>Vaslui</option>
                <option value='Hirsova'>Hirsova</option>
                <option value='Eforie'>Eforie</option> */}
              </select>
            </div>
            <div>
              <button
                className='h-12 bg-gray-200 text-gray-700 py-3 px-4 mt-6 rounded leading-tight focus:outline-none hover:bg-blue-500 hover:text-white'
                onClick={handleClick}
              >
                Run
              </button>
            </div>
          </div>
          <div className='w-10/12 mx-auto mt-16'>
            <Image
              src={GraphImage}
              alt='graph'
              width={1.6}
              height={1}
              layout='responsive'
              objectFit='cover'
            />
          </div>
        </article>
        <table className='w-4/12 table-column'>
          <thead>
            <tr className='border-2'>
              <th className='border-2 px-4 py-2'>Từ thành phố</th>
              <th className='border-2 px-4 py-2'>Đến thành phố</th>
              <th className='border-2 px-4 py-2'>Khoảng cách(KM)</th>
            </tr>
          </thead>
          <tbody>
            {list.map((item, index) => {
              return (
                <tr key={index}>
                  <td className='border-2 py-2'>{item.city1}</td>
                  <td className='border-2 py-2 text-center'>{item.city2}</td>
                  <td className='border-2 py-2 text-center'>{item.range}</td>
                </tr>
              );
            })}
            <tr>
              <td className='border-2 py-2 text-red-500'>Đi qua</td>
              <td className='border-2 py-2 text-red-500 text-center'>
                {list.length} thành phố
              </td>
              <td className='border-2 py-2 text-red-500 text-center'>
                {range}
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </>
  );
};

export default Graph;
