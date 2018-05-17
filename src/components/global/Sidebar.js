import React, { Component } from 'react';
import './css/Sidebar.css';
import { Checkbox, ButtonGroup, Button } from 'react-bootstrap';

class Sidebar extends Component {
  
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
        <input></input>
        <button>Find</button>
        <form>
          <div className="radio">
            <label>
              <input type="radio" value="option1" checked={true} />
              Front
            </label>
          </div>
          <div className="radio">
            <label>
              <input type="radio" value="option2" />
              Back
            </label>
          </div>
        </form>


      </div> 
    );
  }
}

export default Sidebar;
