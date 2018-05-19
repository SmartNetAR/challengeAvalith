import React, { Component } from 'react';
import './css/Content.css';
import jsonRecived from '../../data/cards.json'
import CardsContainer from './CardsContainer';


class Content extends Component {

  render() {
    return (
      <div className="Content">
        <CardsContainer cards={jsonRecived} />
      </div> 
    );
  }
}

export default Content;
