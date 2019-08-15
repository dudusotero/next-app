import App from "next/app";
import Head from "next/head";
import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    primary: "#0070f3"
  }
};

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    const { PAGE_TITLE } = process.env;
    return (
      <>
        <Head>
          <title>{PAGE_TITLE}</title>
          <meta name="Description" content="Put your description here." />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </>
    );
  }
}
