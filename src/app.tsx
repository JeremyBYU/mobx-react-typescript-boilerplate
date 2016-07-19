import * as React from 'react';
import DevTools from 'mobx-react-devtools';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { Router, hashHistory } from 'react-router';
import routes from './routes';
const { Component } = React;

export class App extends Component<{}, { open: boolean }> {
  constructor(props) {
    super(props);
  }
  render() {
    console.log('Main app render');
    return (
      <div>
        <DevTools />
        <MuiThemeProvider>
          <Router routes={routes} history={hashHistory} />
        </MuiThemeProvider>
      </div>
    );
  }
};