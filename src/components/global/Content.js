import React, { Component } from 'react';
import './css/Content.css';
import PropTypes from 'prop-types';

import jsonRecived from '../../data/cards.json'
import CardsContainer from './CardsContainer';
import PostDetails from './PostDetails';
import Card from './Card';


class Content extends Component {
  static propTypes = {
    filtro: PropTypes.string,
    // cardSelected: PropTypes.string
  };

  constructor () {
    super();

    this.state = {
      mode: "Dashboard",
      cardSelected: 0
      // filterText: "CSS"
    };

    this.CardSelect = this.CardSelect.bind(this);
  }

  componentDidMount() {
    // this.setState.filterText = filtro;
  }

  FilterArray () {
    var tmpArray = new Array;
    if (this.props.filtro !== '') {
      for (var i = 0; i < jsonRecived.length; i++ ) {
        if (jsonRecived[i].cardTitle === this.props.filtro) {
          tmpArray.push(jsonRecived[i]);
          console.log(jsonRecived[i]);
        }
      }
    } else {
      tmpArray = jsonRecived;
    }
    return tmpArray;
  }

  CardSelect(e){
    alert("tarjeta seleccionada: " + e.target.id);
    this.setState({
      mode: "PostDetails",
      cardSelected: e.target.id
    });
    // this.props.cardSelected = e.target.id;
  }

  render() {
    const {filtro, cardSelected} = this.props;
    if ( this.state.mode === "Dashboard" ) {
      var arrayCards = this.FilterArray();

      return (
        <div className="Content">
          <CardsContainer cards={arrayCards} onClick={this.CardSelect}/>

        </div> 
      );
    }else {
      return (
        <div className="Content">

          <PostDetails id= {jsonRecived[this.state.cardSelected -1].cardId}
          title= {jsonRecived[this.state.cardSelected -1].cardTitle} 
          details={jsonRecived[this.state.cardSelected -1].cardDescription}
          technology={jsonRecived[this.state.cardSelected -1].cardTechnology}
          imageUrl={jsonRecived[this.state.cardSelected -1].cardImageUrl}/>
        </div>
      )
    }
  }
}

export default Content;
