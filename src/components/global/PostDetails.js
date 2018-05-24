import React, { Component } from 'react';
import './css/PostDetails.css';
// import Card from './Card';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

class PostDetails extends Component {
  constructor(){
    super();


    this.handleClickDetails = this.handleClickDetails.bind(this);
  }
  static propTypes ={
      id: PropTypes.number.isRequired, 
      title: PropTypes.string.isRequired,
      details: PropTypes.string.isRequired,
      technology: PropTypes.array.isRequired, 
      imageUrl: PropTypes.string
  };

  handleClickDetails(e) {
    this.props.onClick(e);
  }

  render() {
    const { id, title, details, technology, imageUrl} = this.props;
    // var myCards = new Map(cards);
    // var filterCards = new Array;

    
    return (
      <div className="PostDetails">

        <Button
        className="Button"
        id="goback"
        variant="raised"
        color="primary"        
        // onClick={() => this.handleClickDetails()}
        onClick= {this.handleClickDetails}
        >
        Go Back
        </Button>

        <img id="imagePost" src={imageUrl} alt={title}/>
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
