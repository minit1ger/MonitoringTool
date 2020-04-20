import React, { Component } from 'react';
import { Router } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';
import { createBrowserHistory } from "history"; 

import theme from './theme';
import Routes from './Routes';

const history = createBrowserHistory();

export default class App extends Component {

  render() {
    return (
      <ThemeProvider theme={theme}>
        <Router history={history}> 
          <Routes />
        </Router>
      </ThemeProvider>
    );
  }
}