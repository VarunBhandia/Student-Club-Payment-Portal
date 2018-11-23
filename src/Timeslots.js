import React, { Component } from 'react';
import {
  Grid,
  Row,
  Col,
} from 'react-bootstrap';
import TsModal from './tsmodal';
class Timeslots extends Component {
  render() {
    return (
    <Grid>
     <br></br>
      <Row className="timeslot">
        <Col xs={4} md={1}>
          {'10:00am - 10:30am'}
          <TsModal />
        </Col>
        <Col xs={4} md={1}>
         {'10:30am - 11:00am'}
        </Col>
        <Col xs={4} md={1}>
          {'11:00am - 11:30am'}
        </Col>
        <Col xs={4} md={1}>
          {'11:30am - 12:00pm'}
        </Col>
        <Col xs={4} md={1}>
         {'12:00pm - 12:30pm'}
        </Col>
        <Col xs={4} md={1}>
         {'12:30pm - 01:00pm'}
        </Col>
        <Col xs={4} md={1}>
         {'01:00pm - 01:30pm'}
        </Col>
      </Row>
       <br></br>
     <Row className="timeslot">
        <Col xs={4} md={1}>
         {'01:30pm - 02:00pm'}
        </Col>
        <Col xs={4} md={1}>
          {'02:00pm - 02:30pm'}
        </Col>
        <Col xs={4} md={1}>
         {'02:30pm - 03:00pm'}
        </Col>
        <Col xs={4} md={1}>
          {'03:00pm - 03:30pm'}
        </Col>
        <Col xs={4} md={1}>
          {'03:30pm - 04:00am'}
        </Col>
        <Col xs={4} md={1}>
         {'04:00pm - 04:30pm'}
        </Col>
        <Col xs={4} md={1}>
         {'04:30pm - 05:00pm'}
        </Col>
      </Row>
        <br></br>
      <Row className="timeslot">
        <Col xs={4} md={1}>
         {'05:00pm - 05:30pm'}
        </Col>
        <Col xs={4} md={1}>
          {'05:30pm - 06:00pm'}
        </Col>
        <Col xs={4} md={1}>
         {'06:00pm - 06:30pm'}
        </Col>
        <Col xs={4} md={1}>
          {'06:30pm - 07:00pm'}
        </Col>
        <Col xs={4} md={1}>
          {'07:00pm - 07:30am'}
        </Col>
        <Col xs={4} md={1}>
         {'07:30pm - 08:00pm'}
        </Col>
        <Col xs={4} md={1}>
         {'08:00pm - 08:30pm'}
        </Col>
      </Row>
           <br></br>
      <Row className="timeslot">
        <Col xs={4} md={1}>
         {'08:30pm - 09:00pm'}
        </Col>
        <Col xs={4} md={1}>
          {'09:00pm - 09:30pm'}
        </Col>
        <Col xs={4} md={1}>
         {'09:30pm - 10:00pm'}
        </Col>
        <Col xs={4} md={1}>
          {'10:00pm - 10:30pm'}
        </Col>
        <Col xs={4} md={1}>
          {'10:30pm - 11:00pm'}
        </Col>
        <Col xs={4} md={1}>
          {'11:00pm - 11:30am'}
        </Col>
        <Col xs={4} md={1}>
         {'11:30pm - 12:00pm'}
        </Col>
      </Row>
    </Grid>
    );
  }
}

export default Timeslots; 