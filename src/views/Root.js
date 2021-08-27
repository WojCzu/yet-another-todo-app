import React from 'react';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import TaskList from 'components/TaskList/TaskList';

const Root = () => (
  <Wrapper>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <TaskList />
    </ThemeProvider>
  </Wrapper>
);

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: grid;
  place-items: center;

  background-image: ${() =>
    `linear-gradient(135deg, ${theme.color.coralLight}, ${theme.color.violet})`};
`;
export default Root;
