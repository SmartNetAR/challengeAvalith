import React, { Component } from 'react';

//componentes
import Header from './global/Header';
import Content from './global/Content';
import { Grid, Row, Col } from 'react-bootstrap';
import Sidebar from './global/Sidebar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Grid>
          <Row>
            <Col xs={100} md={3}>
                <Sidebar />
            </Col>
            <Col xs={100} me={9}>
                <Content />
            </Col>
          </Row>
        </Grid>
      </div> 
    );
  }
}

export default App;
