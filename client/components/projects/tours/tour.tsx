import Image from 'next/image';
import { useState } from 'react';

export type TourType = {
  id: string;
  name: string;
  info: string;
  image: string;
  price: string;
  deleteTour: (id: string) => void;
};

const Tour = ({ id, name, info, image, price, deleteTour }: TourType) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <section className='mb-8'>
      <div className='w-full rounded-t'>
        <Image
          loader={() => image}
          src={image}
          alt={name}
          layout='responsive'
          width={620}
          height={320}
          objectFit='cover'
          unoptimized
          className='rounded-t'
        />
      </div>
      <article className='w-full p-5 bg-white rounded-b'>
        <header className='flex justify-between items-center mb-2 font-bold tracking-widest'>
          <h3>{name}</h3>
          <h4 className='bg-blue-100 rounded p-1 text-blue-500'>${price}</h4>
        </header>
        <p className='text-gray-500'>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button
            className='text-blue-500 ml-1'
            onClick={() => setReadMore(!readMore)}
          >
            {readMore ? 'Show Less' : 'Read More'}
          </button>
        </p>
        <div className='w-full flex justify-center'>
          <button
            className='text-red-500 w-40 px-4 mt-4 border border-red-500 rounded'
            onClick={() => deleteTour(id)}
          >
            Not Interested
          </button>
        </div>
      </article>
    </section>
  );
};

export default Tour;
