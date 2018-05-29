import React, { Component } from 'react';
import './css/Controls.css';
import Content from './Content';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
// import WithTheme from './WithTheme';

// const styles = theme => ({
//   container: {
//     display: 'flex',
//     flexWrap: 'wrap',
//   },
//   cssLabel: {
//     '&$cssFocused': {
//       color: '#ffffff',
//     },
//   },
//   cssFocused: {},
//   cssUnderline: {
//     '&:after': {
//       borderBottomColor: '#ffffff',
//     },
//   },

// });

const theme = createMuiTheme({
  palette: {
    type: 'dark', // Switching the dark mode on is a single property value change.

  },
})



class Controls extends Component {
  constructor() {
    super(); 

    // this.handleChangeInput = this.handleChangeInput.bind(this);
    // this.handleChangeRadio = this.handleChangeRadio.bind(this);
  }
  state = {
    value: ''
  };
  // handleChangeInput(e) {
  //   this.props.controlFilter(e);
  // }
  handleChangeInput = event => {
    this.props.filterByText(event);
  };

  handleChangeRadio = event => {
    this.props.filterByRadio(event);
    this.setState({ value: event.target.value });
    
  };

  render() {
    return (
      <div className="controls" > {/*</div> style={{backgroundColor:"white"}}>*/}
        <MuiThemeProvider theme={theme}>
          <TextField
            // id="text"
            name="text"
            className="editSearch"
            // label="Search in Cards"
            placeholder="Search in Cards"
            onChange={this.handleChangeInput}/>
          <div className="radio">
            <p>Filter by:</p>
            {/* <FormLabel component="legend">Filter by</FormLabel> */}
            
            <RadioGroup
              aria-label="gender"
              // name="groupTech"
              // // className={classes.group}
              value={this.state.value}
              onChange={this.handleChangeRadio}
              
            >
              <FormControlLabel value='Frontend' control={<Radio color="white" />} label="Frontend" />
              <FormControlLabel value='Backend' control={<Radio  color="white" />} label="Backend" />

            </RadioGroup>
          </div>
      </MuiThemeProvider>
    </div>
    );
  }
}

export default Controls;
