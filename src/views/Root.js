import React from 'react';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import TaskList from 'components/TaskList/TaskList';

const Root = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <TaskList />
  </ThemeProvider>
);

export default Root;
