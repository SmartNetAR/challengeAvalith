import React, { Component } from 'react';
import logo from './media/logo.png';
import './css/Header.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <header className="Logo">
          <img src={logo} alt="logo" />
        </header>
      </div> 
    );
  }
}

export default Header;
