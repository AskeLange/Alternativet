

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
      label: 'final',
      rot: { x: 0, y: 0 },
    };
  }

  // Render
  render () { return (
    <View label={this.state.label} index={this.props.index} store={this.props.store}>
      <div className="content-container"
        style={{ transform: `translate(-50%,-50%) perspective(900px) rotateX(${-this.state.rot.y}deg) rotateY(${this.state.rot.x}deg)` }}>

        <div className="title">
          Stem på
        </div>

        <a href="https://alternativet.dk/" className="logo" 
          onMouseEnter={this.setCursorState.bind (this,Cursor.HOVER)}
          onMouseLeave={this.setCursorState.bind (this,Cursor.INITIAL)}>
          <div className="cross"></div>
          <div className="logo-inner">
            Alternativet
          </div>
        </a>

        <div className="subtitle">
          Det tager kun fem minutter.
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

  // On mouse move
  onMouseMove (e) {

    let dx = e.clientX - window.innerWidth / 2;
    let dy = e.clientY - window.innerHeight / 2;

    this.setState ({
      rot: Object.assign (this.state.rot, { x: dx * .011, y: dy * .018 }),
    });

  }
  
  // Component did mount
  componentDidMount () {
    window.addEventListener ('mousemove', this.onMouseMove.bind (this));
  }


}