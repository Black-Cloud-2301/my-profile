import Image from 'next/image';

interface MenuProps {
  menu: {
    id: number;
    title: string;
    category: string;
    price: number;
    image: string;
    desc: string;
  }[];
}

const MenuItems = ({ menu }: MenuProps) => {
  return (
    <section className='grid grid-cols-1 mx-auto md:grid-cols-1 2xl:w-340 2xl:grid-cols-2 gap-12 '>
      {menu.map((item) => {
        const { id, title, category, price, image, desc } = item;
        return (
          <article
            key={id}
            className='w-100 md:w-160  mx-auto md:grid md:grid-cols-2'
          >
            <div className='w-100 md:w-72 border-4 border-gold rounded'>
              <Image
                loader={() => image}
                src={image}
                alt={title}
                layout='responsive'
                width={2}
                height={1}
                objectFit='cover'
                unoptimized
              />
            </div>
            <div className=''>
              <div className='flex justify-between items-center my-4 md:mt-0 border-b border-dotted border-gray-500'>
                <h3 className='capitalize font-bold tracking-wider mb-2'>
                  {title}
                </h3>
                <h4 className='mb-2 text-gold font-bold'>${price}</h4>
              </div>
              <p className='text-gray-500 text-sm'>{desc}</p>
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default MenuItems;
