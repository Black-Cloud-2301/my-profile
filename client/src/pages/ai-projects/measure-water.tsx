import Image from 'next/image';
import bottle from 'public/images/person/bottle.svg';
import { useState } from 'react';
import { bfs } from '@components/ai-projects/measure-water/bfs';
import { BfsProps } from '@components/ai-projects/measure-water/bfs';

const MeasureWater = () => {
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  const [value3, setValue3] = useState('');
  const [fatherShow, setFatherShow] = useState([
    {
      action: 'Begin',
      bottle1: 0,
      bottle2: 0,
    },
  ]);
  let father: BfsProps[] = [];

  return (
    <main className='bg-gradient-to-br h-screen from-yellow-100 to-orange opacity-70 flex justify-around items-center'>
      <div className='w-7/12 h-9/12 flex flex-col justify-between pr-8 py-8'>
        <section className='w-8/12 h-2/12 flex justify-between items-end mx-auto'>
          <div className='form__container '>
            <input
              type='text'
              value={value1}
              autoComplete='value1'
              required
              onChange={(e) => setValue1(e.target.value)}
            />
            <label htmlFor='value1' className='form__label'>
              <span className='form__span-name'>Chai 1</span>
            </label>
          </div>

          <div className='form__container'>
            <input
              type='text'
              value={value2}
              autoComplete='value2'
              required
              onChange={(e) => setValue2(e.target.value)}
            />
            <label htmlFor='value2' className='form__label'>
              <span className='form__span-name'>Chai 2</span>
            </label>
          </div>

          <div className='form__container'>
            <input
              type='text'
              value={value3}
              autoComplete='value3'
              required
              onChange={(e) => setValue3(e.target.value)}
            />
            <label htmlFor='value3' className='form__label'>
              <span className='form__span-name'>Lấy</span>
            </label>
          </div>
          <button
            className='px-2 h-8 bg-blue-500 text-white rounded duration-300 hover:text-blue-600 hover:bg-blue-300'
            onClick={() =>
              bfs(parseInt(value1), parseInt(value2), parseInt(value3), father)
            }
          >
            Submit
          </button>
        </section>
        <section className='w-8/12 h-full flex justify-around items-end mx-auto'>
          <article className='w-3/12 flex flex-col justify-center items-center relative'>
            <div className='w-full'>
              <Image
                src={bottle}
                alt='bottle'
                width={1}
                height={2.2}
                layout='responsive'
                objectFit='cover'
                className='z-10'
              />
              <div
                className={
                  value1
                    ? 'w-11/12 h-7/12 absolute overflow-hidden left-2 bottom-2 after:w-full after:h-full after:bg-blue-500 after:absolute after:duration-1000 after:bottom-0 after:translate-y-0'
                    : 'w-11/12 h-7/12 absolute overflow-hidden left-2 bottom-2 after:w-full after:h-full after:bg-blue-500 after:absolute after:duration-1000 after:bottom-0 after:translate-y-full'
                }
              />
            </div>
            {value1 && (
              <p className='absolute bottom-8 text-5xl font-semibold '>
                {value1}L
              </p>
            )}
          </article>
          <article className='w-2/12 flex flex-col justify-center items-center relative'>
            <div className='w-full '>
              <Image
                src={bottle}
                alt='bottle'
                width={1}
                height={2.2}
                layout='responsive'
                objectFit='cover'
                className='z-10'
              />
              <div
                className={
                  value2
                    ? 'w-11/12 h-7/12 absolute overflow-hidden left-1 bottom-1 after:w-full after:h-full after:bg-blue-500 after:absolute after:duration-1000 after:bottom-0 after:translate-y-0'
                    : 'w-11/12 h-7/12 absolute overflow-hidden left-1 bottom-1 after:w-full after:h-full after:bg-blue-500 after:absolute after:duration-1000 after:bottom-0 after:translate-y-full'
                }
              />
            </div>
            {value2 && (
              <p className='absolute bottom-8 text-4xl font-semibold '>
                {value2}L
              </p>
            )}
          </article>
        </section>
      </div>
      <div className='w-4/12 h-9/12 p-4 text-center bg-white rounded overflow-auto'>
        <h3 className='text-4xl font-semibold'>Measure</h3>
        <h4 className='text-blue-500 text-xl my-4'>Target {value3}L</h4>
        <button
          className='mb-4 text-white px-2 py-1 bg-blue-500 rounded tracking-widest hover:bg-red-600'
          onClick={() => setFatherShow(father)}
        >
          Show
        </button>
        <div>
          {fatherShow.map((step, index) => {
            return (
              <ul key={index} className='grid grid-cols-4 mb-4'>
                <li className='w-full col-span-2 text-left'>{step.action}</li>
                <li>{step.bottle1}L</li>
                <li>{step.bottle2}L</li>
              </ul>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default MeasureWater;
