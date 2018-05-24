import React, { Component } from 'react';
import logo from './media/logo.png';
import PropTypes from 'prop-types';
import './css/Header.css';

class Header extends Component {
  constructor() {
    super();

    this.handleClickLogo = this.handleClickLogo.bind(this);
  }

  handleClickLogo(e) {
    this.props.clickHideBar(e);
  }

  render() {
    // const {logoHideBar} = this.props;
    return (
      <div className="Header">
        <img src={logo} alt="logo" onClick={this.handleClickLogo} />
      </div> 
    );
  }
}

export default Header;
