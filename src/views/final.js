

// Imports
import React from 'react';
import View from '../view';
import * as Cursor from '../actions/cursor';

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
      <div className="content-container">

        <div className="title">
          Stem
        </div>

        <a href="https://alternativet.dk/" className="logo" 
          onMouseEnter={this.setCursorState.bind (this,Cursor.HOVER)}
          onMouseLeave={this.setCursorState.bind (this,Cursor.INITIAL)}>
          <div className="logo-inner">
            Alternativet
          </div>
        </a>

        <div className="subtitle">
          Det tager kun fem minutter
        </div>


      </div>
    </View>
  )}

  // Set cursor state
  setCursorState (s) {
    this.props.store.dispatch (
      Cursor.set_state (s)
    );
  }

}