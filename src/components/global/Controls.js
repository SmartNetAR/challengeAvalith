import React, { Component } from 'react';
import './css/Controls.css';
import Content from './Content';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

class Controls extends Component {
  constructor() {
    super(); 
    this.handleChangeInput = this.handleChangeInput.bind(this);
  }

  handleChangeInput(e) {
    this.props.controlFilter(e);
  }

  render() {
    return (
      <div className="controls"> {/*</div> style={{backgroundColor:"white"}}>*/}
         {/* <div className="editSearch">
          <input id="txtSearch" placeholder='Search in cards'
          onChange={this.handleChangeInput}></input>
        </div> */}
        {/* <div className="editSearch"> */}
          <TextField 
            className="editSearch"
            label="Search in Cards" 
            placeholder="Search in Cards"
            onChange={this.handleChangeInput}/>
        {/* </div> */}
        <div className="radio">
          <p>Filter by:</p>
          <form>
            <label>
              <input id="front" type="radio" value='Frontend' name="technologie"
              onClick={this.handleChangeInput} />
              Frontend
            </label>
            <label>
              <br/>
              <input id="back" type="radio" value='Backend' name="technologie"
              onClick={this.handleChangeInput} />
              Backend
            </label>
          </form>
        </div>



<RadioGroup
            aria-label="gender"
            name="gender1"
            // // className={classes.group}
            // value={this.state.value}
            // onChange={this.handleChange}
          >
            <FormControlLabel value='Frontend' name="technologie" control={<Radio />} label="Frontend" />
            <FormControlLabel value='Backend' name="technologie" control={<Radio />} label="Backend" />

          </RadioGroup>



        </div>
      //</div> 
    );
  }
}

export default Controls;
