import React, { Component } from 'react';
import {
  Grid,
  Row,
  Col,
  Button,
  OverlayTrigger,
  Popover,
  Modal,
} from 'react-bootstrap';
import './App.css';
import TsModal from'./tsmodal';

class Timeslots extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  popoverHoverFocus() {
  return(
  <Popover id="popover-trigger-hover-focus" title="Table status">
    <strong>P1 -> </strong> <br />
    <strong>P2 -> </strong> <br />
    <strong>S1 -> </strong> <br />
    <strong>S2 -> </strong> <br />
    <strong>S3 -> </strong> <br />
  </Popover>
  )
}
  colhour(time) {
  return(
      <Col className='halfhour' xs={4} md={1}>
         <TsModal show={this.state.show} onhide={this.handleClose} onclick={this.handleClose} />
          <OverlayTrigger overlay={this.popoverHoverFocus()}>
            <Button bsStyle="primary" bsSize="small" onClick={this.handleShow}>
              {time} 
            </Button>
          </OverlayTrigger>
        </Col>
    )
  }
  render() {
    

    return (
    <Grid>
     <br></br>
      <Row className="timeslot">
        {this.colhour('10:00-10:30')}
        {this.colhour('10:30-11:00')}
        {this.colhour('11:00-11:30')}
        {this.colhour('11:30-12:00')}
        {this.colhour('12:00-12:30')}
        {this.colhour('12:30-13:00')}
        {this.colhour('13:00-13:30')}
      </Row>
      <Row className="timeslot">
        {this.colhour('13:30-14:00')}
        {this.colhour('14:00-14:30')}
        {this.colhour('14:30-15:00')}
        {this.colhour('15:00-15:30')}
        {this.colhour('15:30-16:00')}
        {this.colhour('16:00-16:30')}
        {this.colhour('16:30-17:00')}
      </Row>
      <Row className="timeslot">
        {this.colhour('17:00-17:30')}
        {this.colhour('17:30-18:00')}
        {this.colhour('18:00-18:30')}
        {this.colhour('18:30-19:00')}
        {this.colhour('19:00-19:30')}
        {this.colhour('19:30-20:00')}
        {this.colhour('20:00-20:30')}
      </Row>
      <Row className="timeslot">
        {this.colhour('20:30-21:00')}
        {this.colhour('21:00-21:30')}
        {this.colhour('21:30-22:00')}
        {this.colhour('22:00-22:30')}
        {this.colhour('22:30-23:00')}
        {this.colhour('23:00-23:30')}
        {this.colhour('23:30-24:00')}
      </Row>
    </Grid>
    );
  }
}

export default Timeslots; 