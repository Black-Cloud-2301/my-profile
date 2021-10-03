import Category from '@components/projects/menu/category';
import MenuItems from '@components/projects/menu/menuItems';
import { addApolloState, initializeApollo } from 'src/lib/apolloClient';
import { GetStaticProps } from 'next';
import { useState } from 'react';
import { MenuDocument, useMenuQuery } from 'src/generated/graphql';

const Menu = () => {
  const { data, loading } = useMenuQuery();
  const [menu, setMenu] = useState(data?.menu);

  const allCategory = [
    'all',
    ...Array.from(new Set(data!.menu!.map((item) => item.category))),
  ];

  const selectCategory = (category: string) => {
    if (category === 'all') setMenu(data!.menu);
    else {
      const newCategory = data!.menu!.filter(
        (item) => item.category === category
      );
      setMenu(newCategory);
    }
  };

  if (loading) return <div>...loading</div>;
  else if (menu !== undefined && menu !== null)
    return (
      <main className='bg-gray-200 w-full min-h-screen h-full p-8'>
        <header className='text-center mb-16'>
          <h2 className='font-bold text-4xl mb-2'>Our Menu</h2>
          <div className='h-1 w-28 bg-gold mx-auto mb-12' />
          <Category allCategory={allCategory} selectCategory={selectCategory} />
        </header>
        <MenuItems menu={menu} />
      </main>
    );
  else return <div>something wrong</div>;
};

export const getStaticProps: GetStaticProps = async () => {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: MenuDocument,
  });

  return addApolloState(apolloClient, {
    props: {},
  });
};

export default Menu;
