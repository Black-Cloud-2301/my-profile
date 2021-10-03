import { GetStaticProps } from 'next';
import axios from 'axios';
import { useState } from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';

interface TabsProps {
  data: {
    id: string;
    order: number;
    title: string;
    dates: string;
    duties: string[];
    company: string;
  }[];
}

const Tabs = ({ data }: TabsProps) => {
  const [value, setValue] = useState(0);
  const tabsData = data[value];
  const { title, dates, duties, company } = tabsData;

  return (
    <main className='bg-gray-200 w-full min-h-screen h-full p-8 flex items-center justify-center'>
      <div className='w-80vw'>
        <header className='text-center mb-16 flex-1'>
          <h2 className='font-bold text-4xl mb-2'>Experience</h2>
          <div className='h-1 w-28 bg-cyan mx-auto mb-12' />
        </header>
        <div className='lg:flex'>
          <div className='flex justify-between w-6/12 lg:w-3/12 lg:h-24 lg:flex-col  mx-auto text-2xl mb-16'>
            {data.map((item, index) => {
              return (
                <button
                  key={item.id}
                  onClick={() => setValue(index)}
                  className={
                    index === value
                      ? 'text-cyan border-b-2 lg:border-b-0 pb-4 lg:mb-4 lg:pb-0 lg:border-l-2 border-cyan'
                      : 'hover:text-cyan border-b-2 lg:border-b-0 pb-4 lg:mb-4 lg:pb-0 lg:border-l-2 hover:border-cyan duration-500'
                  }
                >
                  {item.company}
                </button>
              );
            })}
          </div>
          <div className='flex flex-col flex-1'>
            <h3 className='text-xl tracking-wider mb-3'>{title}</h3>
            <h4 className='px-2 py-1 bg-gray-300 text-gray-600 text-xl font-semibold w-24 text-center rounded'>
              {company}
            </h4>
            <h5 className='mt-3 tracking-widest text-gray-500 text-sm mb-6'>
              {dates}
            </h5>
            {duties.map((item, index) => {
              return (
                <div key={index} className='flex items-center text-sm mb-6'>
                  <FaAngleDoubleRight className='text-cyan mr-8 text-md' />
                  <p className='w-full'>{item}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className='w-full flex justify-center'>
          <button className='bg-cyan text-white font-semibold tracking-widest w-40 rounded py-1 px-2 mt-4 hover:bg-green-700 duration-500'>
            MORE INFO
          </button>
        </div>
      </div>
    </main>
  );
};

export default Tabs;

export const getStaticProps: GetStaticProps = async () => {
  const response = await axios.get('https://course-api.com/react-tabs-project');
  const data = response.data;
  return {
    props: {
      data,
    },
  };
};
