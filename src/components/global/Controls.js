import React, { Component } from 'react';
import './css/Controls.css';
// import { Checkbox, ButtonGroup, Button } from 'react-bootstrap';

class Sidebar extends Component {
  constructor() {
    super(); //para que pueda acceder al obj
    
    this.state = {
      tech: "Frontend",
      text: ""
    };

    this.handleFilterClick = this.handleFilterClick.bind(this);
    this.handleChangeInput = this.handleChangeInput.bind(this);
  }

  handleFilterClick(e) {
    if (e.target.id === "back") {
        this.setState({
          tech: "Backend"
          //CONTENT.STATE
        })
    }else {
      this.setState({
        tech: "Frontend"
      })
    }
  }

  handleChangeInput(e) {
    this.setState({
      text: e.target.value
      //CONTENT.STATE.FILTERTEXT = TEXT!!!
    })

    // if (e.keyCode === 13 ) {
      console.log(e.target.value)
    // }
    
  }

  componentDidMount() {
    
  }

  render() {
    return (
      <div className="controls">
        <div className="editSearch">
          <input id="txtSearch" placeholder='Search in cards'
          onChange={this.handleChangeInput}></input>
        </div>
        <p>Filter by:</p>
        <p>{`filtrado por: ${this.state.tech} y ${this.state.text}`}</p>
        <form>
          <div className="radio">
            <label>
              <input id="front" type="radio" value="option1" 
              onClick={this.handleFilterClick} />
              Frontend
            </label>
          </div>
          <div className="radio">
            <label>
              <br/>
              <input id="back" type="radio" value="option2"
              onClick={this.handleFilterClick} />
              Backend
            </label>
          </div>
        </form>
      </div> 
    );
  }
}

export default Sidebar;
