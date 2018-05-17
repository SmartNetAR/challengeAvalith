import React, { Component } from 'react';
import './css/Controls.css';
import { Checkbox, ButtonGroup, Button } from 'react-bootstrap';

class Sidebar extends Component {
  
  render() {
    return (
      <div className="controls">
        <input></input>
        <p>Filter by:</p>
        <form>
          <div className="radio">
            <label>
              <input type="radio" value="option1" checked={true} />
              Frontend
            </label>
          </div>
          <div className="radio">
            <label>
              <input type="radio" value="option2" />
              Backend
            </label>
          </div>
        </form>
      </div> 
    );
  }
}

export default Sidebar;
