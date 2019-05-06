

// Imports
import React from 'react';
import View from '../view';

// Home view
export default class FinalView
  extends React.Component {

  // Constructor
  constructor (props) {
    super (props);
    this.state = {
      label: 'final'
    };
  }

  // Render
  render () { return (
    <View label={this.state.label} index={this.props.index} store={this.props.store}>
    </View>
  )}

}