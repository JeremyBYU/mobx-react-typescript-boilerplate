import * as React from 'react';
import {observer} from 'mobx-react';

import { TimerState } from '../store';
const { Component } = React;
import RaisedButton from 'material-ui/RaisedButton';
@observer
export class TimerView extends Component<{ timerState: TimerState }, {}> {
  render() {
    return (
      <div>
        <RaisedButton onClick={this.onReset}>
          Seconds passed: {this.props.timerState.timer}
        </RaisedButton>
      </div>
    );
  }

  onReset = () => {
    this.props.timerState.resetTimer();
  }
};