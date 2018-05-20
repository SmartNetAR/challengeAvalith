import React, { Component } from 'react';
import './css/Sidebar.css';
import Controls from './Controls';

class Sidebar extends Component {
  constructor() {
    super(); //para que pueda acceder al obj
    
    this.state = {
    };
  }

  componentDidMount() {

  }
  
  render() {
    return (
      <div className="sidenav">
        <div className="devname">
          <div className="font-dev-name"><p>DEV NAME</p></div>
          <div className="font-dev-details">
            <p>DNI 30.195.728</p>
            <p>35 YEARS OLD</p>
          </div>
        </div>
        
        <Controls />


      </div> 
    );
  }
}

export default Sidebar;
