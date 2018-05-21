import React, { Component } from 'react';
import './css/PostDetails.css';
// import Card from './Card';
import PropTypes from 'prop-types';


class PostDetails extends Component {
  constructor(){
    super();


    // this.handleShowCard = this.handleShowCard.bind(this);
  }
  static propTypes ={
      id: PropTypes.string.isRequired, 
      title: PropTypes.string.isRequired,
      details: PropTypes.string.isRequired,
      technology: PropTypes.array.isRequired, 
      imageUrl: PropTypes.string
  };


  render() {
    const { id, title, details, technology, imageUrl} = this.props;
    // var myCards = new Map(cards);
    // var filterCards = new Array;
    return (
      <div className="PostDetails">
        <img id={id} src={imageUrl} alt={title} onClick={this.handleShowCard} />
        <div className="Title">
          <p>{`${details}`}</p>
        </div>
      </div> 
      // <div className="PostDetails">
      //   <header className="Title">{`${title}`}</header>
      //   <p>{id}</p>
      // </div>
    );
  }
}

export default PostDetails;
