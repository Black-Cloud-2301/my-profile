import Questions from '@components/projects/accordion/questions';
import { addApolloState, initializeApollo } from 'src/lib/apolloClient';
import { GetStaticProps } from 'next';
import { PeopleDocument, useQuestionsQuery } from 'src/generated/graphql';

const Accordion = () => {
  const { data, loading } = useQuestionsQuery();
  const questionsData = data?.questions;
  if (loading) return <div>...loading</div>;
  else
    return (
      <main className='min-h-screen h-full p-10 bg-pink-400 flex flex-col justify-center items-center'>
        <div className='bg-white max-w-232 flex flex-col md:flex-row px-8 pt-8 pb-4 rounded'>
          <header className='mb-8 md:w-4/12 text-center md:text-left'>
            <h3 className='text-3xl font-semibold'>
              Question And Answers About Login
            </h3>
          </header>
          <section className='flex-1'>
            {questionsData!.map((questions) => {
              return <Questions key={questions.id} {...questions} />;
            })}
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

export default Accordion;
