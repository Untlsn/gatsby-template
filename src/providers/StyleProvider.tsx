import React from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, GlobalStyle } from '@style/all';
import { Helmet } from 'react-helmet';

const StyleProvider = ({ children, fonts }: { children: any, fonts: string[] }) => {
  return (
    <>
      <Helmet>
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        {fonts.map(
          (font, key) => <link rel='stylesheet' href={font} key={key} />,
        )}
      </Helmet>
      <ThemeProvider theme={lightTheme}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </>
  );
};

export default StyleProvider;
