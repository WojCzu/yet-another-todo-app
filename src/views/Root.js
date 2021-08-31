import React from 'react';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import App from './App';

const Root = () => (
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
);

export default Root;
