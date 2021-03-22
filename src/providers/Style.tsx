import * as React from 'react';
import{ ThemeProvider } from "styled-components";
import * as AS from '@style/all'

const Style = ({ children }: { children: any }) => {
  return (
    <ThemeProvider theme={AS.Theme} >
      <AS.Global />
      {children}
    </ThemeProvider>
  );
};

export default Style;
