import '@styles/tailwind.scss';
import type { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import { useApollo } from 'src/lib/apolloClient';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page);
  const apolloClient = useApollo(pageProps);
  return (
    <ApolloProvider client={apolloClient}>
      {getLayout(<Component {...pageProps} />)}
    </ApolloProvider>
  );
}
