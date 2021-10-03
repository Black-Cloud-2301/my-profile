// import data from 'data/projects/birthdayData';
import { GetStaticProps } from 'next';
import Image from 'next/image';
import { useState } from 'react';
import { PeopleDocument, usePeopleQuery } from 'src/generated/graphql';
import { addApolloState, initializeApollo } from 'src/lib/apolloClient';

const BirthdayReminder = () => {
  const { data, loading } = usePeopleQuery();
  const [people, setPeople] = useState(data?.people);
  if (loading) return <div>...loading</div>;
  else {
    return (
      <main className='w-screen min-h-screen h-full bg-pink-400 flex items-center justify-center'>
        <div className='w-128 bg-white rounded px-8 pb-2 pt-8'>
          <h3 className='text-3xl font-bold'>
            {people?.length} birthday today
          </h3>
          {people?.map((person) => {
            const { id, name, birthday, image } = person;
            const today = new Date();
            const age = today.getFullYear() - parseInt(birthday.slice(0, 4));
            return (
              <article key={id} className='flex my-4'>
                <div className='w-20 h-20'>
                  <Image
                    loader={() => image}
                    src={image}
                    alt={name}
                    layout='responsive'
                    width={100}
                    height={100}
                    objectFit='cover'
                    unoptimized
                    className='rounded-full'
                  />
                </div>
                <div className='flex flex-col justify-center ml-4'>
                  <h4 className='font-bold text-lg'>{name}</h4>
                  <p className='text-gray-600 font-medium'>{age}</p>
                </div>
              </article>
            );
          })}
          <button
            className='w-full rounded h-12 bg-pink-400 my-4 mx-auto text-white font-semibold text-xl tracking-wider'
            onClick={() => setPeople([])}
          >
            Clear All
          </button>
        </div>
      </main>
    );
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

export default BirthdayReminder;
