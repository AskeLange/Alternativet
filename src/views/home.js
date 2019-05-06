

// Imports
import React from 'react';
import View from '../view';
import { switch_view } from '../actions/navigation';

// Home view
export default class HomeView
  extends React.Component {

  // Constructor
  constructor (props) {
    super (props);
    this.state = {
      label: 'home',
      bgpos: { x: 0, y: 0, ox: 0, oy: 0 },      
      fgpos: { x: 0, y: 0, ox: 0, oy: 0 },

    };
  }

  // Render
  render () { return (
    <View label={this.state.label} index={this.props.index} store={this.props.store}>
      <div className="background" style={{ top: `${this.state.bgpos.y}px`, left: `${this.state.bgpos.x}px` }}>
        

        <div className="navelem emi" onClick={this.switch.bind(this,'emigration')}>
          Drop flygtninge sludren
          <div className="overlay"></div>
        </div>

        <div className="navelem env" onClick={this.switch.bind(this,'environment')}>
          Påbegynd miljø debatten
          <div className="overlay"></div>
        </div>
        
        <div className="texture" style={{backgroundImage:'url(./images/fabric_texture.jpg)'}}>
        </div>

        
        <img src="./images/logo.png" class="logo">
        </img>

      </div>
    </View>
  )}

  // Switch
  switch (l) {
    this.props.store.dispatch (
      switch_view (l)
    );
  }

  // On mouse move
  onMouseMove (e) {

    return;

    let dx = e.clientX - window.innerWidth / 2;
    let dy = e.clientY - window.innerHeight / 2;

    this.setState ({
      bgpos: Object.assign (this.state.bgpos, { x: dx * .02, y: dy * .02 }),
      fgpos: Object.assign (this.state.fgpos, { x: dx * .03, y: dy * .03 }),
    });

  }
  
  // Component did mount
  componentDidMount () {
    
    window.addEventListener ('mousemove', this.onMouseMove.bind (this));
    let bg = document.querySelectorAll (`#${this.state.label} .background`);
    let fg = document.querySelectorAll (`#${this.state.label} .foreground`);
    
    this.setState ({
      bgpos: Object.assign (this.state.bgpos, { ox: bg.offsetTop, oy: bg.offsetLeft }),
      fgpos: Object.assign (this.state.fgpos, { ox: fg.offsetTop, oy: fg.offsetLeft }),
    });

  }

}