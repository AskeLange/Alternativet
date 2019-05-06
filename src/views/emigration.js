

// Imports
import React from 'react';
import View from '../view';

// Home view
export default class EmigrationView
  extends React.Component {

  // Constructor
  constructor (props) {
    super (props);
    this.state = {
      label: 'emigration'
    };
  }

  // Render
  render () { return (
    <View label={this.state.label} index={this.props.index} store={this.props.store}>
    </View>
  )}

}