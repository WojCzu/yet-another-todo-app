import React from 'react';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import { ThemeProvider } from 'styled-components';
import { TaskProvider } from 'hooks/useTask';
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
      <TaskProvider>
        <GlobalStyle />
        <Switch>
          <Route exact path={['/all', '/unfinished', '/finished']}>
            <App />
          </Route>
          <Route>
            <Redirect to="/all" />
          </Route>
        </Switch>
      </TaskProvider>
    </ThemeProvider>
  </Router>
);

export default Root;
