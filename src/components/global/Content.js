import React, { Component } from 'react';
import './css/Content.css';
import Card from './Card';
import jsonRecived from './data/cards.json'

class Content extends Component {
  render() {
    return (
      <div className="Content">
        
        <header className="Title">LANGUAGES & TECHNOLOGIES</header>

        <Card />
        <Card />
        <Card />
      </div> 
    );
  }
}

export default Content;
