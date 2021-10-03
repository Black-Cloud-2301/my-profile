import type { ReactElement } from 'react';
import Layout from '@components/Layout';
import {
  AiOutlineGithub,
  AiOutlineHome,
  AiOutlineInstagram,
  AiOutlineMail,
  AiOutlineTwitter,
} from 'react-icons/ai';
import { IoIosPhonePortrait, IoLogoFacebook } from 'react-icons/io';

const Contact = () => {
  return (
    <div className='bg-image-home flex items-center justify-center'>
      <div className='w-60vw h-3/6 flex flex-col items-center justify-center text-white'>
        <h3 className='text-5xl 2xl:text-6xl mb-12'>Contact Me</h3>
        <address className='grid grid-cols-1 lg:grid-cols-2 xl:flex xl:justify-between xl:w-60vw lg:ml-40 xl:ml-0 gap-4 lg:gap-8 text-xl xl:text-2xl 2xl:text-3xl mb-8'>
          <article className=''>
            <div className='flex items-center '>
              <AiOutlineMail />
              Email
            </div>
            <a
              href='mailto:tuank2301@gmail.com'
              className='text-orange hover:text-red-500'
            >
              tuank2301@gmail.com
            </a>
          </article>
          <article className=''>
            <div className='flex items-center xl:w-52'>
              <IoIosPhonePortrait />
              Phone
            </div>
            <p className='text-orange'>0969 199 469</p>
          </article>
          <article className=''>
            <div className='flex items-center'>
              <AiOutlineHome />
              Address
            </div>
            <p className='text-orange break-normal 2xl:w-96'>
              Tô Ngọc Vân, Tây Hồ, Hà Nội
            </p>
          </article>
        </address>
        <section className='grid grid-cols-4 gap-3 text-4xl lg:text-5xl lg:mt-4'>
          <a href='#' className='hover:text-orange'>
            <AiOutlineTwitter />
          </a>
          <a
            href='https://www.facebook.com/tuprinceank/'
            target='_blank'
            rel='noopener noreferrer'
            className='hover:text-orange'
          >
            <IoLogoFacebook />
          </a>
          <a href='#' className='hover:text-orange'>
            <AiOutlineInstagram />
          </a>
          <a
            href='https://github.com/Black-Cloud-2301/my-profile'
            target='_blank'
            rel='noopener noreferrer'
            className='hover:text-orange'
          >
            <AiOutlineGithub />
          </a>
        </section>
      </div>
    </div>
  );
};

export default Contact;

Contact.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
