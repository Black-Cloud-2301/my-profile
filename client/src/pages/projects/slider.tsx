import { addApolloState, initializeApollo } from 'src/lib/apolloClient';
import { GetStaticProps } from 'next';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { FaQuoteRight } from 'react-icons/fa';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { PeopleDocument, usePeopleQuery } from 'src/generated/graphql';

const Slider = () => {
  const { data, loading } = usePeopleQuery();

  const [index, setIndex] = useState(0);

  if (index < 0) setIndex(data!.people!.length - 1);
  else if (index >= data!.people!.length) setIndex(0);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  if (loading) return <div>...loading</div>;
  else
    return (
      <main className='bg-gray-200 w-full min-h-screen h-full p-8 flex justify-center items-center'>
        <div className='w-212 h-160 overflow-hidden'>
          <header className='text-center mb-16'>
            <h2 className='font-bold text-4xl mb-2'>
              <span className='text-orange'>/</span>Reviews
            </h2>
          </header>
          <section className='relative '>
            {data!.people!.map((person) => {
              const { id, image, name, title, quote } = person;
              const idToInt = parseInt(id);
              let position: string =
                'absolute text-center translate-x-full duration-700 opacity-0';
              if (idToInt - 1 === index)
                position = 'absolute text-center duration-700 opacity-1';
              else if (
                idToInt === index ||
                (index === 0 && idToInt === data!.people!.length)
              )
                position =
                  'absolute text-center -translate-x-full duration-700 opacity-0';
              return (
                <article key={id} className={position}>
                  <div className='w-40 h-40 rounded-full border-4 shadow-xl border-gray-400 mx-auto'>
                    <Image
                      loader={() => image}
                      src={image}
                      alt={name}
                      layout='responsive'
                      objectFit='cover'
                      width={1}
                      height={1}
                      unoptimized
                      className='rounded-full'
                    />
                  </div>
                  <h3 className='text-yellow-700 uppercase font-bold text-lg tracking-widest mt-4'>
                    {name}
                  </h3>
                  <h4 className='capitalize'>{title}</h4>
                  <h5 className='text-gray-500 my-8 w-10/12 mx-auto'>
                    {quote}
                  </h5>
                  <FaQuoteRight className='text-yellow-700 text-5xl mx-auto' />
                </article>
              );
            })}
            <button
              className='absolute p-2 rounded top-40 bg-gray-500 text-white text-2xl hover:bg-yellow-700 duration-500'
              onClick={() => setIndex(index + 1)}
            >
              <FiChevronLeft />
            </button>
            <button
              className='absolute p-2 rounded top-40 right-0 bg-gray-500 text-white text-2xl hover:bg-yellow-700 duration-500'
              onClick={() => setIndex(index - 1)}
            >
              <FiChevronRight />
            </button>
          </section>
        </div>
      </main>
    );
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

export default Slider;
