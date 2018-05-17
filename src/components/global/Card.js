import React, { Component } from 'react';
import './css/Card.css';
import logo from './media/logo.png';


class Card extends Component {
  
  render() {
    return (
      <div className="card">
        <div className="image">
          <header className="Logo">
            <img src={logo} alt="logo" />
          </header>
        </div>
        <div className="text">
          <p>aqui el texto</p>
        </div>
      </div> 
    );
  }
}

export default Card;
