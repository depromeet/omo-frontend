import type { AppProps } from 'next/app';
import Head from 'next/head';
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
          content="viewport-fit=cover, width=device-width, height=device-height, initial-scale=1, maximum-scale=1.0, minimum-scale=1, target-densityDpi=device-dpi, user-scalable=0"
        />
      </Head>
      <RecoilRoot>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </RecoilRoot>
    </>
  );
}
export default App;
