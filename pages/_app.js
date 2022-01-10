/* eslint-disable */
import * as React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { CacheProvider } from '@emotion/react';
import theme from '../src/theme';
import createEmotionCache from '../src/createEmotionCache';
import Header from '../components/header';
import AppFooter from '../components/footer';
import { createContext, useState, useEffect } from 'react';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();
export const authContext = createContext();
import { useRouter } from 'next/router';
import chat from '../components/Chat';
import Chat from '../components/Chat';
export default function MyApp(props) {
  const [userState, setuserState] = useState(null);

  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const router = useRouter();

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>HarOnline</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <authContext.Provider value={userState ?? null}>
          <Header />
          <body
            style={{
              width: "100%",
              height:"100%",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover"
            }}
          >
            <Component {...pageProps} />
            <Chat />
          </body>

          <AppFooter />
        </authContext.Provider>
      </ThemeProvider>
    </CacheProvider>
  );
}
MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};
