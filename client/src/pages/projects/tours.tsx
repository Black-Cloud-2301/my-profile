import Tour from '@components/projects/tours/tour';
import { addApolloState, initializeApollo } from 'src/lib/apolloClient';
import { GetStaticProps } from 'next';
import { useState } from 'react';
import { ToursDocument, useToursQuery } from 'src/generated/graphql';

const Tours = () => {
  const { data, loading } = useToursQuery();
  const [tours, setTours] = useState(data?.tours);
  const deleteTour = (id: string) => {
    const newTours = tours?.filter((tour) => tour.id !== id);
    setTours(newTours);
  };
  if (loading) return <div>...loading</div>;
  else {
    return (
      <main className='bg-gray-200 w-full min-h-screen h-full p-8'>
        <div className='w-160 mx-auto'>
          <header className='text-center pt-12 mb-20'>
            <h2 className='font-bold text-4xl mb-2'>Our Tours</h2>
            <div className='h-1 w-28 bg-blue-500 mx-auto' />
          </header>

          {tours?.length === 0 && (
            <button
              className='text-red-500 w-full text-2xl'
              onClick={() => setTours(data?.tours)}
            >
              Refresh
            </button>
          )}

          {tours?.map((tour) => {
            return <Tour key={tour.id} {...tour} deleteTour={deleteTour} />;
          })}
        </div>
      </main>
    );
  }
};

export default Tours;

export const getStaticProps: GetStaticProps = async () => {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: ToursDocument,
  });

  return addApolloState(apolloClient, {
    props: {},
  });
};
