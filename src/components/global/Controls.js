import React, { Component } from 'react';
import './css/Controls.css';
import Content from './Content';
// import { Checkbox, ButtonGroup, Button } from 'react-bootstrap';


// import {orange500, blue500} from 'material-ui/styles/colors';

class Sidebar extends Component {
  constructor() {
    super(); //para que pueda acceder al obj
    
    // this.state = {
    //   tech: "Frontend",
    //   text: ""
    // };

    // this.handleFilterClick = this.handleFilterClick.bind(this);
    this.handleChangeInput = this.handleChangeInput.bind(this);
  }

  handleChangeInput(e) {
    // this.setState({
    //   text: e.target.value
    //   //CONTENT.STATE.FILTERTEXT = TEXT!!!
    // })
    // alert(e.target.value);
    this.props.controlFilter(e);
    // Content.state.text = this.state.text;
  }

  componentDidMount() {
    
  }

  render() {
    // const styles = {
    //   errorStyle: {
    //     color: 'white',
    //     backgroundColor: "red",
    //     // color: orange500,
    //   },
    // }
    return (
      <div className="controls">
         <div className="editSearch">
          <input id="txtSearch" placeholder='Search in cards'
          onChange={this.handleChangeInput}></input>
        </div>
        {/* <TextField 
        label='Search in Cards'
        /> */}
        {/* <TextField
          hintText="Hint Text"
        /> */}
        {/* 
        <TextField 
          // label="Search in Cards" 
          hintText="Hint Text"
          inputStyle={{ backgroundColor: 'white' }} 
          // color="white"
          onChange={this.handleChangeInput}/>
        <div > */}
        <p>Filter by:</p>
        {/* <p>{`filtrado por: ${this.state.tech} y ${this.state.text}`}</p> */}
        <form>
          <div className="radio">
            <label>
              <input id="front" type="radio" value='Frontend' name="technologie"
              onClick={this.handleChangeInput} />
              Frontend
            </label>
          </div>
          <div className="radio">
            <label>
              <br/>
              <input id="back" type="radio" value='Backend' name="technologie"
              onClick={this.handleChangeInput} />
              Backend
            </label>
          </div>
        </form>
        </div>
      // </div> 
    );
  }
}

export default Sidebar;
