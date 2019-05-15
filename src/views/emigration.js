

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
      label: 'emigration',
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
            <img className="image p1" style={{backgroundImage:'url(./images/people/p1.jpg)'}} />
            <img className="image p2" style={{backgroundImage:'url(./images/people/p2.jpg)'}} />
            <img className="image p3" style={{backgroundImage:'url(./images/people/p3.jpg)'}} />
            <img className="image p4" style={{backgroundImage:'url(./images/people/p4.jpg)'}} />
          </div>
        </div>
        
        <div className="fg" style={{ top: `${this.state.fgpos.y}px`, left: `${this.state.fgpos.x}px` }}>
          <div className="title">
            Flygtninge er medmennesker
          </div>

          <div className="text">
            Alternativet ønsker et samfund bygget på solidaritet, med respekt for de enkelte mennesker og for deres kulturelle ophav. Alternativets asylpolitik skal ses i den sammenhæng og som et svar på den empatikrise, vi oplever i verden.<br /><br />
            Flygtninge er først og sidst vores medmennesker. Ikke en belastning, der skal lukkes ude eller begrænses, men mennesker i en dybt ulykkelig situation, som vi har en pligt til at hjælpe.
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