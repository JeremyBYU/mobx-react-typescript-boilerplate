import * as React from 'react';
import { TimerView } from '../components/TimerView';
import { TimerState } from '../store';

const { Component } = React;
const timerState = new TimerState();

export default class TimerContainer extends Component<{}, {}> {
  constructor(props) {
    super(props);
  }
  render() {
    console.log('Timer Container Rendered');
    return (
      <TimerView timerState={timerState} />
    );
  }
};