import type { ReactElement } from 'react';
import Layout from '@components/Layout';

const About = () => {
  return (
    <div className='bg-image-home'>
      <div className='flex items-end '>
        <div className='bg-black-800 min-h-60vh mt-40vh w-full relative flex flex-wrap justify-center '>
          <h3 className='text-orange text-5xl font-medium gap-8 absolute -top-16 w-full text-center '>
            About Me
          </h3>
          <div className='grid gap-10 w-full max-w-5xl p-8'>
            <section className='bg-black-500 text-white px-4 border-b-6 border-orange'>
              <h3 className='text-orange my-2 text-2xl'>2020 - Current</h3>
              <h4 className='text-2xl tracking-wide font-medium'>
                Thăng Long University
              </h4>
              <h5 className='font-bold'>Study Information Technology</h5>
              <p>Học cho vui chứ quan trọng gì.</p>
            </section>
            <section className='bg-black-500 text-white px-4 border-b-6 border-orange'>
              <h3 className='text-orange my-2 text-2xl'>2017 - 2020</h3>
              <h4 className='text-2xl tracking-wide font-medium'>
                Mopi Studio
              </h4>
              <h5 className='font-bold'>Product Manager</h5>
              <p>Work hard học được nhiều thứ.</p>
            </section>
            <section className='bg-black-500 text-white px-4 border-b-6 border-orange'>
              <h3 className='text-orange my-2 text-2xl'>2012 - 2015</h3>
              <h4 className='text-2xl tracking-wide font-medium'>
                Thăng Long University
              </h4>
              <h5 className='font-bold'>Study Accountant</h5>
              <p>
                Đóng tiền học nhưng không đi học. Nhưng lớp 5 nam 25 nữ. Trải
                nghiệm tuyệt vời.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

About.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
