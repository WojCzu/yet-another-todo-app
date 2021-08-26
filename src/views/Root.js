import React from 'react';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';

const Root = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <h1>Hello</h1>
  </ThemeProvider>
);

export default Root;
