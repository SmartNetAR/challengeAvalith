import React, { Component } from 'react';
import './css/Content.css';
import PropTypes from 'prop-types';

import jsonRecived from '../../data/cards.json'
import CardsContainer from './CardsContainer';
import PostDetails from './PostDetails';
import Card from './Card';

//logoHideBar

class Content extends Component {
  static propTypes = {
    filtro: PropTypes.string,
    visibleBar: PropTypes.bool
    // cardSelected: PropTypes.string
  };

  constructor () {
    super();

    this.state = {
      mode: "Dashboard",
      cardSelected: 0
    };

    this.CardSelect = this.CardSelect.bind(this);
    this.OpenDashboard = this.OpenDashboard.bind(this);
  }

  FilterArray () {
    /*var tmpArray = new Array;
    if (this.props.filtro !== '') {
      for (var i = 0; i < jsonRecived.length; i++ ) {
        if (jsonRecived[i].cardTitle === this.props.filtro) {
          tmpArray.push(jsonRecived[i]);
        }
      }
    } else {
      tmpArray = jsonRecived;
    }*/ 
    let aux = new Array;
    if (this.props.filtro === "Backend" || this.props.filtro === "Frontend") {
      // aux = jsonRecived[cardTechnology]
        jsonRecived.forEach((element) =>{
          // recorrer el cardtechnologies
          
          if(element.cardTechnology.find((e) => e == this.props.filtro)){
    
            aux.push(element)
          }
            //console.log('aaa '+aux)
        })
    } else {    
       aux = jsonRecived.filter((e) => 
      e.cardTitle.toLowerCase().indexOf(this.props.filtro.toLowerCase()) >= 0);
    }
   
    return aux;
  }

  CardSelect(e){
    if (e.target.id > 0) {
      this.setState({
        mode: "PostDetails",
        cardSelected: e.target.id
      });
    }
  }

  OpenDashboard(e){
    // if (e === "goback") { // "DetailReturn") {
      this.setState({
        mode: "Dashboard"
      });
    // }
  }

  render() {
    const {filtro, visibleBar} = this.props;

    if ( this.state.mode === "Dashboard" ) {
      var arrayCards = this.FilterArray();

      const bar = visibleBar ? (        
        <div className="Content active">
          <CardsContainer cards={arrayCards} onClick={this.CardSelect}/> </div> 
      ) : 
        <div className="Content inactive">
          <CardsContainer cards={arrayCards} onClick={this.CardSelect}/> </div> 

      return (  
        bar
      );
    }else {

      const bar = visibleBar ? (        
        <div className="Content active">
          <PostDetails id= {jsonRecived[this.state.cardSelected -1].cardId}
          title= {jsonRecived[this.state.cardSelected -1].cardTitle} 
          details={jsonRecived[this.state.cardSelected -1].cardDescription}
          technology={jsonRecived[this.state.cardSelected -1].cardTechnology}
          imageUrl={jsonRecived[this.state.cardSelected -1].cardImageUrl} 
          onClick={this.OpenDashboard}/>
        </div> 
      ) : 
        <div className="Content inactive">
          <PostDetails id= {jsonRecived[this.state.cardSelected -1].cardId}
          title= {jsonRecived[this.state.cardSelected -1].cardTitle} 
          details={jsonRecived[this.state.cardSelected -1].cardDescription}
          technology={jsonRecived[this.state.cardSelected -1].cardTechnology}
          imageUrl={jsonRecived[this.state.cardSelected -1].cardImageUrl} 
          onClick={this.CardSelect}/>
        </div> 

      return (
        bar

      )
    }
  }
}

export default Content;
