import React, { Component } from 'react';
import './css/Content.css';
import Card from './Card';
import jsonRecived from '../../data/cards.json'


class Content extends Component {

  render() {
    return (
      <div className="Content">
        <header className="Title">LANGUAGES & TECHNOLOGIES</header>
        {/* {console.log(jsonRecived)} */}

          {jsonRecived && jsonRecived.map( (item, key) => 
          <Card 
            key= {key}
            title= {item.cardTitle} 
            details={item.cardDescription}
            technology={item.cardTechnology}
            imageUrl={item.cardImageUrl}
          />)}


        {/* <Card title="React" details="biblioteca de Facebook"/>
        <Card title="Angular" details="framwork de Google"/>
        <Card title="View" details="biblioteca en crecimiento"/> */}
        {/* <ul>
          {jsonRecived && jsonRecived.map( (item, key) => <li key = {key}>{item.cardTitle}</li> )}
        </ul> */}
      </div> 
    );
  }
}

export default Content;
