import React, { Component } from 'react';
import './css/CardsContainer.css';
import Card from './Card';
import PropTypes from 'prop-types';


class CardsContainer extends Component {
  static propTypes ={cards: PropTypes.array.isRequired};

  render() {
    const {cards} = this.props;
    return (
      <div className="CardsContainer">
        <header className="Title">LANGUAGES & TECHNOLOGIES</header>
          {cards && cards.map( (item, key) => 
          <Card 
            key= {key}
            title= {item.cardTitle} 
            details={item.cardDescription}
            technology={item.cardTechnology}
            imageUrl={item.cardImageUrl}
          />)}
      </div>
    );
  }
}

export default CardsContainer;
