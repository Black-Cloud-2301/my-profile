import type { ReactElement } from 'react';
import Layout from '@components/Layout';

const Home = () => {
  return (
    <div className='bg-image-home'>
      <div className='flex justify-center items-center h-full text-white text-2xl 2xl:text-4xl'>
        <section className='text-center'>
          <h4>Hi! My Name is</h4>
          <h3 className='text-7xl 2xl:text-9xl font-bold mb-4 mt-2'>
            Tú <span className='text-orange'>Ank</span>
          </h3>
          <div className='h-1 bg-white w-screen' />
          <h5 className='font-bold mt-2'>Web Developer</h5>
        </section>
      </div>
    </div>
  );
};

export default Home;

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
