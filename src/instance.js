

// Imports
import React from 'react';
import { hot } from 'react-hot-loader';
import { switch_view } from './actions/navigation';

// Views
import HomeView from './views/home';
import EmigrationView from './views/emigration';
import EnvironmentView from './views/environment';
import FinalView from './views/final';

// Instance Component
export default hot (module) (class AppInstance
  extends React.Component {

  // Constructor
  constructor (props) {
    super (props);
    this.state = { 
      active_n: 0,
      views_n: 0,
      canscroll: true,
      top: 0,
    };
  }

  // Render
  render () { return (
    
    <div id="app-instance">
      <div id="view-container" style={{top:`${this.state.top}px`}}>
        
        <HomeView store={this.props.store} index={0} />
        <EmigrationView store={this.props.store} index={1} />
        <EnvironmentView store={this.props.store} index={2} />
        <FinalView store={this.props.store} index={3} />

      </div>

      <div id="navigation">
        { [...Array(this.state.views_n).keys()].map ( e => 
          <div className={`nav-elem ${e==this.state.active_n?'active':''}`} key={`navelem#${e}`}>
          </div> 
        )}
      </div>
    </div>

  )}

  // On store change
  onStoreChange () {
    
    // Extracts data
    let state = this.props.store.getState ();
    let current = state.navigation.current_view;
    let views = state.navigation.views;

    // Fields n' aliases
    let views_d = document.querySelectorAll ('#view-container .view');
    setTimeout (() => { this.setState ({canscroll:true}) }, 1000);

    // Sets state
    this.setState ({
      top: -(views_d [current.index % views_d.length].offsetTop),
      canscroll: false,
      active_n: current.index,
      views_n: views.length
    });
  
  }

  // On scroll
  onScroll (e) {
    
    // Prevents default
    e.preventDefault ();

    // Does stuff,
    // reaaaal descriptive, i kno
    if (this.state.canscroll&&e.deltaY!=0) {

      // Fields n' aliases
      let views = document.querySelectorAll ('#view-container .view');
      let active_n = this.state.active_n;

      // Sets active n' dispatches
      active_n += (e.deltaY>0)*2-1;
      if (active_n<0) {active_n=views.length-1;}
      this.props.store.dispatch ( switch_view (active_n));

      // Sets state
      this.setState ({
        top: -(views [active_n % views.length].offsetTop),
        canscroll: false,
      });
      
      // Scroll timeout
      setTimeout (() => { this.setState ({canscroll:true}) }, 1000);

    }

  }

  // Component did mount
  componentDidMount () {
    
    // Listens to store
    this.unsub = this.props.store.subscribe (
      this.onStoreChange.bind (this)
    ); this.onStoreChange ();

    // Listens to scrolls
    window.onwheel = window.onmousewheel = 
      document.onmousewheel = window.ontouchmove =
        this.onScroll.bind (this);

  }

  // Component will unmount
  componentWillUnmount () {
    this.unsub ();
  }

});