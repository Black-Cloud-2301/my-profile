import Head from 'next/head';
import Navbar from './Navbar';

interface LayoutType {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutType) => {
  return (
    <>
      <Head>
        <title>Tú Ank</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>

      <header>
        <Navbar />
      </header>

      {children}
    </>
  );
};

export default Layout;
