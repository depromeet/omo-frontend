import 'react-toastify/dist/ReactToastify.min.css';

import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ToastContainer } from 'react-toastify';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from '@styles/globalStyles';
import theme from '@styles/theme';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="viewport-fit=cover, width=device-width, height=device-height, initial-scale=1, maximum-scale=1.0, minimum-scale=1, user-scalable=0"
        />
      </Head>
      <RecoilRoot>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
          <ToastContainer limit={1} />
        </ThemeProvider>
      </RecoilRoot>
    </>
  );
}
export default App;
