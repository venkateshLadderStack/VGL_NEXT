import "../styles/globals.scss";
import "../styles/css/newsletter.css";
import "../styles/css/slideout.css";
import "../styles/css/newnewsletter.css";
import "../styles/article.scss";
import "../styles/popup.scss";
import "bootstrap/dist/css/bootstrap.css";

import { ApolloProvider } from "@apollo/client";
import client from "../apollo/client";

import * as React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider } from "@emotion/react";
import theme from "../theme";
import createEmotionCache from "../createEmotionCache";
import { ContextProvider } from "../context";
// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <ApolloProvider client={client}>
          <ContextProvider>
            <Component {...pageProps} />
          </ContextProvider>
        </ApolloProvider>
      </ThemeProvider>
    </CacheProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};
