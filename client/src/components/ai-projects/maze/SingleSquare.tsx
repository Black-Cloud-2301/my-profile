import { useState } from 'react';

interface SubItemProps {
  item: {
    subItem: number;
    indexI: number;
    indexJ: number;
    setStart: React.Dispatch<
      React.SetStateAction<{
        row: number;
        col: number;
      }>
    >;
    setEnd: React.Dispatch<
      React.SetStateAction<{
        row: number;
        col: number;
      }>
    >;
    count: number;
    setCount: React.Dispatch<React.SetStateAction<number>>;
    list: {
      row: number;
      col: number;
      evaluate: number;
    }[];
  };
}

const checkCount = (num: number) => {
  if (num > 3) return 0;
  else return num;
};

const SingleSquare = ({ item }: SubItemProps) => {
  const { subItem, indexI, indexJ, setStart, setEnd, count, setCount, list } =
    item;
  const [active, setActive] = useState(0);

  const handleClick = () => {
    setCount(checkCount(count + 1));
    setActive(count);
    if (count === 1) setStart({ row: indexI, col: indexJ });
    if (count === 2) setEnd({ row: indexI, col: indexJ });
    console.log(count);
  };

  const isExist = () => {
    for (let i = 0; i < list.length; i++) {
      if (indexI === list[i].row && indexJ === list[i].col) return true;
    }
    return false;
  };
  let changeColor = 'w-full h-full hover:bg-red-400';
  if (active === 1) changeColor = 'w-full h-full bg-red-500 rounded-full';
  else if (active === 2) changeColor = 'w-full h-full bg-blue-500 rounded-full';
  else changeColor = 'w-full h-full hover:bg-red-400';

  if (isExist()) changeColor = 'w-full h-full bg-green-400';

  return (
    <li className={subItem === 0 ? 'bg-gray-200' : 'bg-black-500'}>
      <button className={changeColor} onClick={handleClick} />
    </li>
  );
};

export default SingleSquare;
