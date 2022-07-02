import type { ReactElement, ReactNode } from 'react';
import { useEffect } from 'react';
import type { AppProps } from 'next/app';
import type { NextPage } from 'next';
import AOS from 'aos';
import 'assets/styles/godatingfi.scss';
import 'aos/dist/aos.css';
import { reload } from 'utils/functions';
import ErrorBoundary from 'components/error-boundary';
import { Slide, ToastContainer } from 'react-toastify';
import Layout from 'layouts';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => <Layout>{page}</Layout>);

  useEffect(() => {
    AOS.init({
      easing: 'ease-out-cubic',
      once: true,
      offset: 50,
    });
  }, []);

  return (
    <ErrorBoundary onReset={reload}>
      <ToastContainer hideProgressBar={true} position={'top-right'} transition={Slide} limit={1} />
      {getLayout(<Component {...pageProps} />)}
    </ErrorBoundary>
  );
}

export default MyApp;
