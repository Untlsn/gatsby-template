import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme, GlobalStyle } from '@style/all';
import { Helmet } from 'react-helmet';

const StyleProvider = ({ children }: { children: any }) => {
  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="stylesheet"
              href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" />
      </Helmet>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </>
  );
};

export default StyleProvider;
