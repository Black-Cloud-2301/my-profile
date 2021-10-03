import type { ReactElement } from 'react';
import Layout from '@components/Layout';
import { AiOutlineGithub } from 'react-icons/ai';
import { FaEye } from 'react-icons/fa';
import Image from 'next/image';
import { GetStaticProps } from 'next';
import { addApolloState, initializeApollo } from 'src/lib/apolloClient';
import { ProjectsDocument, useProjectsQuery } from 'src/generated/graphql';

const Projects = () => {
  const { data, loading } = useProjectsQuery();
  const normalProjects = data!.projects!.filter(
    (item) => item.category === 'normal project'
  );
  const aIProjects = data!.projects!.filter(
    (item) => item.category === 'ai project'
  );
  const gameProjects = data!.projects!.filter(
    (item) => item.category === 'game'
  );
  if (loading || data === undefined || data === null)
    return <div>...loading</div>;
  else
    return (
      <div className='bg-image-home'>
        <div className='flex items-end justify-center'>
          <div className='bg-black-800 pb-8 min-h-60vh mt-40vh w-full relative'>
            <h3 className='text-orange text-5xl font-medium absolute -top-16 w-full text-center '>
              My Projects
            </h3>
            <section className='w-90vw sm:w-70vw mt-8 mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-12'>
              {normalProjects.map((project) => {
                const { id, name, image, link, github } = project;
                return (
                  <article
                    key={id}
                    className='relative overflow-hidden border-b-6 border-orange after:transition after:duration-500 after:ease-in-out after:absolute after:translate-y-full after:left-0 after:bottom-0 after:bg-orange after:opacity-90
            after:w-full after:h-full hover:after:transform hover:after:translate-y-0'
                  >
                    <div className='w-full'>
                      <Image
                        loader={() => image}
                        layout='responsive'
                        width={16}
                        height={9}
                        objectFit='cover'
                        src={image}
                        alt={name}
                        unoptimized
                      />
                    </div>
                    <div className='absolute z-10 flex justify-around w-full items-center mx-auto top-0 bottom-0 text-xl transition duration-500 ease-in-out opacity-0 hover:opacity-95'>
                      <a
                        href={link}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-black-500 flex items-center hover:text-white'
                      >
                        <FaEye className='cursor-pointer mr-3' />
                        <p>Preview</p>
                      </a>

                      <a
                        href={github}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-black-500 flex items-center hover:text-white'
                      >
                        <AiOutlineGithub className='cursor-pointer mr-3' />{' '}
                        Github
                      </a>
                    </div>
                  </article>
                );
              })}
            </section>
            <h3 className='text-orange text-5xl font-medium w-full my-20 text-center '>
              AI Projects
            </h3>
            <section className='w-90vw sm:w-70vw mt-8 mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-12'>
              {aIProjects.map((project) => {
                const { id, name, image, link, github } = project;
                return (
                  <article
                    key={id}
                    className='relative overflow-hidden border-b-6 border-orange after:transition after:duration-500 after:ease-in-out after:absolute after:translate-y-full after:left-0 after:bottom-0 after:bg-orange after:opacity-90
            after:w-full after:h-full hover:after:transform hover:after:translate-y-0'
                  >
                    <div className='w-full'>
                      <Image
                        loader={() => image}
                        layout='responsive'
                        width={16}
                        height={9}
                        objectFit='cover'
                        src={image}
                        alt={name}
                        unoptimized
                      />
                    </div>
                    <div className='absolute z-10 flex justify-around w-full items-center mx-auto top-0 bottom-0 text-xl transition duration-500 ease-in-out opacity-0 hover:opacity-95'>
                      <a
                        href={link}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-black-500 flex items-center hover:text-white'
                      >
                        <FaEye className='cursor-pointer mr-3' />
                        <p>Preview</p>
                      </a>

                      <a
                        href={github}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-black-500 flex items-center hover:text-white'
                      >
                        <AiOutlineGithub className='cursor-pointer mr-3' />{' '}
                        Github
                      </a>
                    </div>
                  </article>
                );
              })}
            </section>
            <h3 className='text-orange text-5xl font-medium w-full my-20 text-center '>
              Games
            </h3>
            <section className='w-90vw sm:w-70vw mt-8 mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-12'>
              {gameProjects.map((project) => {
                const { id, name, image, link, github } = project;
                return (
                  <article
                    key={id}
                    className='relative overflow-hidden border-b-6 border-orange after:transition after:duration-500 after:ease-in-out after:absolute after:translate-y-full after:left-0 after:bottom-0 after:bg-orange after:opacity-90
            after:w-full after:h-full hover:after:transform hover:after:translate-y-0'
                  >
                    <div className='w-full'>
                      <Image
                        loader={() => image}
                        layout='responsive'
                        width={16}
                        height={9}
                        objectFit='cover'
                        src={image}
                        alt={name}
                        unoptimized
                      />
                    </div>
                    <div className='absolute z-10 flex justify-around w-full items-center mx-auto top-0 bottom-0 text-xl transition duration-500 ease-in-out opacity-0 hover:opacity-95'>
                      <a
                        href={link}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-black-500 flex items-center hover:text-white'
                      >
                        <FaEye className='cursor-pointer mr-3' />
                        <p>Preview</p>
                      </a>

                      <a
                        href={github}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-black-500 flex items-center hover:text-white'
                      >
                        <AiOutlineGithub className='cursor-pointer mr-3' />{' '}
                        Github
                      </a>
                    </div>
                  </article>
                );
              })}
            </section>
          </div>
        </div>
      </div>
    );
};

export default Projects;

export const getStaticProps: GetStaticProps = async () => {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: ProjectsDocument,
  });

  return addApolloState(apolloClient, {
    props: {},
  });
};

Projects.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
