import React, { Component } from 'react'
import PropTypes from 'prop-types';


// import TextField from 'material-ui/TextField';
import TextField from '@material-ui/core/TextField'
import { COLOR } from '../../../common/COLORS'

export const styles = {
  container: {padding: '25px 20px 10px 25px'},
  inputStyle: {color: COLOR.primaryColorStrong},
  hintStyle: {color: COLOR.primaryFontColor},
  underlineStyle: {fill: COLOR.primaryColor},
  floatingLabelFocusStyle: {fill: COLOR.primaryColor}
};

class TextFieldSearch extends Component {


  render() {


    const { hintText, filterFn } = this.props

    return (
      <div style={styles.container}>
        <TextField
          hintText={hintText}
          fullWidth={true}
          //onChange={this.debounceEventHandler(filterFn)}
          {...styles}
        />
      </div>
    )
  }

}

TextFieldSearch.propTypes = {
  hintText: PropTypes.string,
  filterFn: PropTypes.func
};

export default TextFieldSearch;