import React from 'react';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import App from './App';

const Root = () => (
  <Wrapper>
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Switch>
          <Route exact path={['/all', '/unfinished', '/finished']}>
            <App />
          </Route>
          <Route>
            <Redirect to="/all" />
          </Route>
        </Switch>
      </ThemeProvider>
    </Router>
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
