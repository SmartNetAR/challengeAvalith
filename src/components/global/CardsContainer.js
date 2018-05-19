import React, { Component } from 'react';
import './css/CardsContainer.css';
import Card from './Card';
import PropTypes from 'prop-types';


class CardsContainer extends Component {
  static propTypes ={cards: PropTypes.array.isRequired};

  render() {
    const {cards} = this.props;
    var myCards = new Map(cards);
    var filterCards = new Array;
    return (
      <div className="CardsContainer">
        <header className="Title">LANGUAGES & TECHNOLOGIES</header>
        {/* {filterCards = myCards.filter( (item, key) => 
          item.cardTechnology == "Frontend").map( (item, key) => (
          <Card 
            key= {key}
            title= {item.cardTitle} 
            details={item.cardDescription}
            technology={item.cardTechnology}
            imageUrl={item.cardImageUrl}/>
            // }
          )
          )        
        } */}

          {cards && cards.map( (item, key) => (
            // if (item.cardTechnology !== 'Frontend'){
          <Card 
            key= {key}
            title= {item.cardTitle} 
            details={item.cardDescription}
            technology={item.cardTechnology}
            imageUrl={item.cardImageUrl}/>
            // }
          )
        )}
      </div>
    );
  }
}

export default CardsContainer;
