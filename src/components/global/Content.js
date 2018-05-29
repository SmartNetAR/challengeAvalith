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
    filterText: PropTypes.string,
    filterTech: PropTypes.string,
    visibleBar: PropTypes.bool
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

  // FilterArray () {
  //   let aux = new Array;
  //   if (this.props.filtro === "Backend" || this.props.filtro === "Frontend") {
  //       jsonRecived.forEach((element) =>{
  //         if(element.cardTechnology.find((e) => e == this.props.filtro)){
  //               aux.push(element)
  //         }
  //       })
  //   } else {    
  //      aux = jsonRecived.filter((e) => 
  //     e.cardTitle.toLowerCase().indexOf(this.props.filtro.toLowerCase()) >= 0);
  //   }
   
  //   return aux;
  // }

  FilterArray () {
    let aux = new Array;
    if (this.props.filterTech === "Backend") {
        jsonRecived.forEach((element) =>{
          if(element.cardTechnology.find((e) => e == this.props.filterTech)){
                aux.push(element)
          }
        })
      //tambien filtro el texto
      aux = aux.filter((e) => 
      e.cardTitle.toLowerCase().indexOf(this.props.filterText.toLowerCase()) >= 0);
    } else if ( this.props.filterTech === "Frontend") {
      jsonRecived.forEach((element) =>{
        if(element.cardTechnology.find((e) => e == this.props.filterTech)){
              aux.push(element)
        }
      })
      //tambien filtro el texto
      aux = aux.filter((e) => 
      e.cardTitle.toLowerCase().indexOf(this.props.filterText.toLowerCase()) >= 0);
    } else {    
       aux = jsonRecived.filter((e) => 
      e.cardTitle.toLowerCase().indexOf(this.props.filterText.toLowerCase()) >= 0);
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
    this.setState({
      mode: "Dashboard"
    });
  }

  render() {
    const {filtro, filterText, filterTech, visibleBar} = this.props;


    if ( this.state.mode === "Dashboard" ) {
      const arrayCards = this.FilterArray();
      const showCardContainer = <CardsContainer cards={arrayCards} 
        onClick={this.CardSelect}/>

      const bar = visibleBar ? (        
        <div className="Content active">{showCardContainer}</div> 
      ) : 
        <div className="Content inactive">{showCardContainer}</div>

      return (  
        bar
      );
    }else {
      const arrayPos = this.state.cardSelected -1;
      const showPostDetails = <PostDetails id= {jsonRecived[arrayPos].cardId}
    title= {jsonRecived[arrayPos].cardTitle} 
    postDescription={jsonRecived[arrayPos].cardPost.postDescription}
    postTitle={jsonRecived[arrayPos].cardPost.postTitle}
    imageUrl={jsonRecived[arrayPos].cardPost.postImageUrl} 
    cardGraph = {jsonRecived[arrayPos].cardGraph.data}
    onClick={this.OpenDashboard}/>

      const bar = visibleBar ? (        
        <div className="Content active">{showPostDetails}</div> 
      ) : 
        <div className="Content inactive">{showPostDetails}</div> 

      return (
        bar

      )
    }
  }
}

export default Content;
