import { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

export interface QuestionsType {
  id: string;
  title: string;
  info: string;
}

const Questions = ({ title, info }: QuestionsType) => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <article className='shadow-md border p-4 mb-4 rounded'>
      <div className='flex justify-between items-center'>
        <h3 className='text-lg font-semibold tracking-wider'>{title}</h3>
        <button
          className='p-2 rounded-full bg-gray-200 text-red-500'
          onClick={() => setShowInfo(!showInfo)}
        >
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </div>
      {showInfo && <p className='text-gray-500 mt-2'>{info}</p>}
    </article>
  );
};

export default Questions;
