import React, { Component } from 'react';
import Navbar from './components/common/Navbar';
import { Row, Col } from 'react-bootstrap';
import Table from './components/Table'
import LeftMenu from './components/LeftMenu';
import SelectedLib from './components/SelectedLib'
import LibHeader from './components/LibHeader';
class Home extends Component {


  render() {
    return (
      <>
        <div className="ml-5 mr-5">
          <Navbar />
          <div className="mt-5">

          
            <Row>
              <Col xs={2} className="mt-5">
                <LeftMenu />
              </Col>

              <Col>
                <LibHeader />
                <SelectedLib />
                <Table />
              </Col>
            </Row>

          </div>
        </div>
      </>
    )
  }
}



export default Home
