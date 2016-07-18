import * as React from 'react';
import DevTools from 'mobx-react-devtools';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { TimerView } from './components/TimerView';
import { TimerState } from './store';
import { AppBar, Drawer, MenuItem } from 'material-ui';

const { Component } = React;
const timerState = new TimerState();

export class App extends Component<{}, { open: boolean }> {
  constructor(props) {
    super(props);
    this.state = { open: false }; // set intial state
    this.toggleDrawer = this.toggleDrawer.bind(this); // bind this context
  }
  toggleDrawer() {
    this.setState({ open: !this.state.open});
  }
  render() {
    console.log('app render');
    return (
      <div>
        <DevTools />
        <MuiThemeProvider>
          <div>
            <Drawer open={this.state.open} docked={false} onRequestChange={(open) => this.setState({open})}>
              <MenuItem>Menu Item</MenuItem>
              <MenuItem>Menu Item 2</MenuItem>
            </Drawer>
            <AppBar
              title='My Closet'
              iconClassNameRight='muidocs-icon-navigation-expand-more'
              onLeftIconButtonTouchTap={this.toggleDrawer}
              />
            <TimerView timerState={timerState} />
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
};