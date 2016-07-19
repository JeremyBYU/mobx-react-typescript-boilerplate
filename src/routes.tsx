import * as React from 'react';
import { Route, IndexRoute } from 'react-router';

// Components
import AppLayout from './containers/AppLayout';
// import NotFound from './containers/NotFound';
import TimerContainer from './containers/TimerContainer';
import Home from './containers/Home';

export default (
  <Route path='/' component={AppLayout}>
    <IndexRoute component={Home} />
    <Route path='timer' component={TimerContainer} />
  </Route>
);