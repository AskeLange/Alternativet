

// Imports
import React from 'react';
import * as Cursor from '../actions/cursor';
import { switch_view } from '../actions/navigation';
import View from '../view';

// Home view
export default class HomeView
  extends React.Component {

  // Constructor
  constructor (props) {
    super (props);
    this.state = {
      label: 'home',
      rot: { x: 0, y: 0 },      
      bgpos: { x: 0, y: 0, ox: 0, oy: 0 },
      fgpos: { x: 0, y: 0, ox: 0, oy: 0 },
    };
  }

  // Render
  render () { return (
    <View label={this.state.label} index={this.props.index} store={this.props.store}>
      <div className="background" 
        style={{ transform: `perspective(900px) rotateX(${-this.state.rot.y}deg) rotateY(${this.state.rot.x}deg)` }}>        
        
        <div id="bg" style={{ top: `${this.state.bgpos.y}px`, left: `${this.state.bgpos.x}px` }}>
          <div className="image"
            style={{backgroundImage:'url(./images/xxxxx_nature.jpg)'}}>
          </div>
        </div>

        <div id="fg" style={{ top: `${this.state.fgpos.y}px`, left: `${this.state.fgpos.x}px` }}>
          <div className="navelem emi" 
            onClick={this.switch.bind(this,'emigration')}
            onMouseEnter={this.setCursorState.bind (this, Cursor.HOVER)}
            onMouseLeave={this.setCursorState.bind (this, Cursor.INITIAL)}>
            Flygtninge er medmennesker
            <div className="overlay"></div>
          </div>

          <div className="navelem env" 
            onClick={this.switch.bind(this,'environment')}
            onMouseEnter={this.setCursorState.bind (this, Cursor.HOVER)}
            onMouseLeave={this.setCursorState.bind (this, Cursor.INITIAL)}>
            Miljøet øverst på dagsordnen
            <div className="overlay"></div>
          </div>
        </div>

      </div>
    </View>
  )}

  // Switch
  switch (l) {
    this.props.store.dispatch (
      switch_view (l)
    );
  }

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
      bgpos: { x: dx * .02, y: dy * .02 },
      fgpos: { x: dx * .04, y: dy * .04 },
    });

  }
  
  // Component did mount
  componentDidMount () {
    window.addEventListener ('mousemove', this.onMouseMove.bind (this));
  }

}