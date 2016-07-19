import * as React from 'react';
const { Component } = React;

export default class Home extends Component<{}, {}> {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        Hello!
      </div>
    );
  }
};