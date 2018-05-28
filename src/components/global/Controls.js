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

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  cssLabel: {
    '&$cssFocused': {
      color: '#ffffff',
    },
  },
  cssFocused: {},
  cssUnderline: {
    '&:after': {
      borderBottomColor: '#ffffff',
    },
  },

});

const theme = createMuiTheme({
  palette: {
    type: 'dark', // Switching the dark mode on is a single property value change.

  },
})



class Controls extends Component {
  constructor() {
    super(); 

    this.handleChangeInput = this.handleChangeInput.bind(this);
  }
  state = {
    value: '',
    color: 'primary'
  };
  handleChangeInput(e) {
    this.props.controlFilter(e);
  }

  handleChange = event => {
    this.setState({ value: event.target.value });
    this.props.controlFilter(event);
  };

  render() {
    return (
      <div className="controls" > {/*</div> style={{backgroundColor:"white"}}>*/}
        <MuiThemeProvider theme={theme}>
          <TextField
            className="editSearch"
            // label="Search in Cards"
            placeholder="Search in Cards"
            onChange={this.handleChangeInput}/>
        <div className="radio">
          <p>Filter by:</p>
          {/* <FormLabel component="legend">Filter by</FormLabel> */}
          
          <RadioGroup
            aria-label="gender"
            name="gender1"
            // // className={classes.group}
            value={this.state.value}
            onChange={this.handleChange}
          >
            <FormControlLabel id="front" value='Frontend' name="technologie" control={<Radio color="white" />} label="Frontend" />
            <FormControlLabel id="back" value='Backend' name="technologie" control={<Radio  color="white" />} label="Backend" />

          </RadioGroup>
          


      </div>
      </MuiThemeProvider>
        </div>
    );
  }
}

export default Controls;
