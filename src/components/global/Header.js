import React, { Component } from 'react';
import logo from './media/logo.png';
import './css/Header.css';

class Header extends Component {
  constructor() {
    super();

    this.handleClickLogo = this.handleClickLogo.bind(this);
  }

  handleClickLogo(e) {

  }
  render() {
    return (
      <div className="Header">
        <img src={logo} alt="logo" onClick={this.handleClickLogo} />
      </div> 
    );
  }
}

export default Header;
