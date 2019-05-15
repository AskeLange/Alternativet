

// Imports
import React from 'react';
import View from '../view';

// Home view
export default class EnvironmentView
  extends React.Component {

  // Constructor
  constructor (props) {
    super (props);
    this.state = {
      label: 'environment',
      rot: { x: 0, y: 0 },      
      bgpos: { x: 0, y: 0, ox: 0, oy: 0 },
      fgpos: { x: 0, y: 0, ox: 0, oy: 0 },
    };
  }

  // Render
  render () { return (
    <View label={this.state.label} index={this.props.index} store={this.props.store}>
      <div className="content-container"
        style={{ transform: `translate(-50%,-50%) perspective(900px) rotateX(${-this.state.rot.y}deg) rotateY(${this.state.rot.x}deg)` }}>

        <div className="bg" style={{ top: `${this.state.bgpos.y}px`, left: `${this.state.bgpos.x}px` }}>
          <div className="images">
            <img className="image p1" style={{backgroundImage:'url(./images/nature.jpg)'}} />
            <img className="image p2" style={{backgroundImage:'url(./images/x_nature.jpg)'}} />
            <img className="image p3" style={{backgroundImage:'url(./images/xx_nature.jpg)'}} />
            <img className="image p4" style={{backgroundImage:'url(./images/xxxxx_nature.jpg)'}} />
          </div>
        </div>
        
        <div className="fg" style={{ top: `${this.state.fgpos.y}px`, left: `${this.state.fgpos.x}px` }}>
          <div className="title">
            Miljøet øverst på dagsordnen
          </div>

          <div className="text">
            Alternativet ønsker at sætte miljømæssig bæredygtighed øverst på dagsordenen. Vi vil arbejde for en effektiv og kontrolleret bæredygtig omstilling. En omstilling, der så vidt muligt sker på menneskehedens præmisser – for den kommer under alle omstændigheder.<br /><br />
            Vi vil arbejde hårdt og vedholdende for at udfase det nuværende forbrug af fossile brændstoffer ved i stedet at benytte vedvarende energikilder.
          </div>
        </div>

      </div>
    </View>
  )}

  // On mouse move
  onMouseMove (e) {

    let dx = e.clientX - window.innerWidth / 2;
    let dy = e.clientY - window.innerHeight / 2;

    this.setState ({
      rot: Object.assign (this.state.rot, { x: dx * .008, y: dy * .014 }),
      bgpos: { x: dx * .02, y: dy * .02 },
      fgpos: { x: dx * .04, y: dy * .04 },
    });

  }
  
  // Component did mount
  componentDidMount () {
    window.addEventListener ('mousemove', this.onMouseMove.bind (this));
  }


}