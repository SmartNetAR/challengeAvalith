import React, { Component } from 'react';
import './css/PostDetails.css';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import {Doughnut} from 'react-chartjs-2';

const data = {
  // labels: [
  //   'Pink',
  //   'Blue',
  //   'Yellow'
  // ],
  datasets: [{
    data: [],
    backgroundColor: [
    '#FF6384',
    '#36A2EB',
    '#FFCE56'
    ],
    // hoverBackgroundColor: [
    // '#FF6384',
    // '#36A2EB',
    // '#FFCE56'
    // ]
  }]
};

class PostDetails extends Component {
  constructor(){
    super();


    this.handleClickDetails = this.handleClickDetails.bind(this);
    this.setDataChart = this.setDataChart.bind(this);

  }
  static propTypes ={
      id: PropTypes.number.isRequired, 
      title: PropTypes.string.isRequired,
      postDescription: PropTypes.string.isRequired,
      postTitle: PropTypes.string.isRequired, 
      imageUrl: PropTypes.string,
      cardGraph: PropTypes.array
  };

  handleClickDetails(e) {
    this.props.onClick(e);
  }

  setDataChart(){
    alert(this.props.cardGraph[0]);
    let result = 
    <div>
      <p>{this.props.cardGraph[0]}, 
      {this.props.cardGraph[1]}, 
      {this.props.cardGraph[2]} </p>
    </div>
    
    // this.data.datasets[0].data = this.props.cardGraph;
    return(
      result
    )
  }


  render() {
    const { id, title, postDescription, postTitle, imageUrl, cardGraph} = this.props;
    {data.datasets[0].data = cardGraph}

    return (
      <div className="PostDetails">
        {this.setDataChart}
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
          <p>{`${postDescription}`}</p>
        </div>
        <h2>{postTitle}</h2>
        <Doughnut  data={data} />
      </div>
    );
  }
}

export default PostDetails;
