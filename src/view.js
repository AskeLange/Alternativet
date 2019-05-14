

// Imports
import React from 'react';
import { append_view } from './actions/navigation';

// View component
export default class View
  extends React.Component {
  
  // Constructor
  constructor (props) {
    super (props);
    this.state = {
      active: false,
    };
  }

  // Render
  render () { return (
    <div className={`view ${this.state.active?'active':''}`} id={this.props.label}>
      { this.props.children }
    </div>
  )}

  // On store change
  onStoreChange () {

    // Extracts data
    let state = this.props.store.getState ();
    let cur_label = state.navigation.current_view.label;

    // Sets state
    this.setState ({
      active: this.props.label==cur_label,
    });

  }

  // Component did mount
  componentDidMount () {


    // Appends self
    this.props.store.dispatch ( append_view (
      this.props.label, this.props.index
    ));

    // Listens to store
    this.unsub = this.props.store.subscribe (
      this.onStoreChange.bind (this)
    );

  }

  // Component will unmount
  componentWillUnmount () {
    this.unsub ();
  }

}