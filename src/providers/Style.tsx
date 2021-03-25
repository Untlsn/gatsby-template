import React from 'react';
import{ ThemeProvider } from "styled-components";
import { theme, GlobalStyle } from '@style/all'

const StyleProvider = ({ children }: { children: any }) => {
  return (
    <ThemeProvider theme={theme} >
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default StyleProvider;
