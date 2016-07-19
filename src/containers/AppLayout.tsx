import * as React from 'react';
import { AppBar, Drawer, MenuItem } from 'material-ui';
import { Link } from 'react-router';
const { Component } = React;

export default class AppLayout extends Component<{ children: any }, { open: boolean }> {
  constructor(props) {
    super(props);
    this.state = { open: false }; // set intial state
    this.toggleDrawer = this.toggleDrawer.bind(this); // bind this context
  }
  toggleDrawer() {
    this.setState({ open: !this.state.open });
  }
  render() {
    console.log('app layout render');
    return (
      <div>
        <div>
          <Drawer open={this.state.open} docked={false} onRequestChange={(open) => this.setState({ open }) }>
            <Link to='/'> Home</Link>
            <Link to='/timer'>Timer</Link>
          </Drawer>
          <AppBar
            title='My Closet'
            iconClassNameRight='muidocs-icon-navigation-expand-more'
            onLeftIconButtonTouchTap={this.toggleDrawer}
            />
            <div>{this.props.children}</div>
        </div>
      </div>
    );
  }
};