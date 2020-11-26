// React import can be skipped in the future react versions.
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import theme from './theme';
import {ThemeProvider} from '@material-ui/styles';
// Application imports
import Layout from './components/Layout';
import Home from './scenes/Home';
import Jokes from './scenes/Jokes';
import ScrollIntoView from './scenes/Home/components/ScrollIntoView';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout>
          <ScrollIntoView/>
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/jokes">
              <Jokes/>
            </Route>
            <Route>
              <Redirect to="/"/>
            </Route>
          </Switch>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}
