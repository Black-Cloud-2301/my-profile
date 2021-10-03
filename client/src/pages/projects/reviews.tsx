import Image from 'next/image';
import { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
import { PeopleDocument, usePeopleQuery } from 'src/generated/graphql';
import { addApolloState, initializeApollo } from 'src/lib/apolloClient';
import { GetStaticProps } from 'next';

const Reviews = () => {
  const { data } = usePeopleQuery();
  const [index, setIndex] = useState(0);
  if (data?.people !== null && data?.people !== undefined) {
    const person = data?.people[index];
    const { name, image, title, quote } = person;

    const checkIndex = (index: number) => {
      if (index === data?.people?.length) return 0;
      else if (index < 0) return data!.people!.length - 1;
      else return index;
    };

    const random = () => {
      let newIndex = Math.floor(Math.random() * data!.people!.length);
      if (newIndex === index) return checkIndex(index + 1);
      return newIndex;
    };

    return (
      <main className='bg-gray-200 w-full min-h-screen h-full p-8 flex flex-col justify-center'>
        <header className='text-center mb-16'>
          <h2 className='font-bold text-4xl mb-2'>Our Reviews</h2>
          <div className='h-1 w-28 bg-blue-400 mx-auto' />
        </header>
        <section className='w-136 h-104 p-5 bg-white mx-auto flex flex-col items-center justify-between rounded'>
          <div className='w-36 h-36 mx-auto mb-3 rounded-full relative before:w-full before:h-full before:rounded-full before:absolute before:left-2 before:bottom-1 before:bg-blue-400'>
            <Image
              onLoad={() => image}
              src={image}
              alt={name}
              layout='responsive'
              objectFit='cover'
              width={1}
              height={1}
              unoptimized
              className='rounded-full'
            />
            <span className='absolute top-3 -left-1 text-white bg-blue-400 p-3 rounded-full '>
              <FaQuoteRight />
            </span>
          </div>
          <h3 className='font-bold tracking-widest capitalize'>{name}</h3>
          <h4 className='uppercase text-blue-400'>{title}</h4>
          <p className='text-center text-sm text-gray-500'>{quote}</p>
          <div className='flex justify-between w-16 text-xl text-blue-400'>
            <button onClick={() => setIndex(checkIndex(index - 1))}>
              <FaChevronLeft />
            </button>
            <button onClick={() => setIndex(checkIndex(index + 1))}>
              <FaChevronRight />
            </button>
          </div>
          <button
            className='bg-blue-100 px-2 rounded text-blue-400 py-1px'
            onClick={() => setIndex(random)}
          >
            Surprise Me
          </button>
        </section>
      </main>
    );
  } else {
    return;
  }
};

export const getStaticProps: GetStaticProps = async () => {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: PeopleDocument,
  });

  return addApolloState(apolloClient, {
    props: {},
  });
};

export default Reviews;
