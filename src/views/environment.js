

// Imports
import React from 'react';
import View from '../view';

// Environment view
export default class EnvironmentView
  extends React.Component {

  // Constructor
  constructor (props) {
    super (props);
    this.state = {
      label: 'environment'
    };
  }

  // Render
  render () { return (
    <View label={this.state.label} index={this.props.index} store={this.props.store}>
    </View>
  )}

}