var ProgressBar = require('ProgressBarAndroid');
import React, { Component } from 'react';
var TimerMixin = require('react-timer-mixin');
import View from 'react-native'
var MovingBar = React.createClass({
  mixins: [TimerMixin],

  getInitialState: function() {
    return {
      progress: 0
    };
  },

  componentDidMount: function() {
    this.setInterval(
      () => {
        var progress = (this.state.progress + 0.02) % 1;
        this.setState({progress: progress});
      }, 50
    );
  },

  render: function() {
    return <ProgressBar progress={this.state.progress} {...this.props} />;
  },
});

class ProgressBarAndroidExample extends Component {
  static title = '<ProgressBarAndroid>';
  static description = 'Horizontal bar to show the progress of some operation.';

  render() {
    return (
      <View>
        <MovingBar styleAttr="Horizontal" indeterminate={false} color="blue" />
      </View>
    );
  }
}

module.exports = ProgressBarAndroidExample;
