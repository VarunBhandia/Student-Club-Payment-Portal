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

  render() {
    const popoverHoverFocus = (
  <Popover id="popover-trigger-hover-focus" title="Popover bottom">
    <strong>Holy guacamole!</strong> Check this info.
  </Popover>
  );

    return (
    <Grid>
     <br></br>
      <Row className="timeslot">
        <Col className='halfhour' xs={4} md={1}>
         <TsModal show={this.state.show} onhide={this.handleClose} onclick={this.handleClose} />
          <OverlayTrigger overlay={popoverHoverFocus}>
            <Button bsStyle="primary" bsSize="small" onClick={this.handleShow}>
              {'10:30am - 11:00am'} 
            </Button>
          </OverlayTrigger>
        </Col>
        
        <Col className='halfhour' xs={4} md={1}>
         <TsModal show={this.state.show} onhide={this.handleClose} onclick={this.handleClose} />
          <OverlayTrigger overlay={popoverHoverFocus}>
            <Button bsStyle="primary" bsSize="small" onClick={this.handleShow}>
              {'10:30am - 11:00am'} 
            </Button>
          </OverlayTrigger>
        </Col>
        
        <Col className='halfhour' xs={4} md={1}>
         <TsModal show={this.state.show} onhide={this.handleClose} onclick={this.handleClose} />
        <OverlayTrigger overlay={popoverHoverFocus}>
          <Button bsStyle="primary" bsSize="small" onClick={this.handleShow}>
            {'10:30am - 11:00am'} 
          </Button>
        </OverlayTrigger>
       
        </Col>
        
        <Col className='halfhour' xs={4} md={1}>
         <TsModal show={this.state.show} onhide={this.handleClose} onclick={this.handleClose} />
        <OverlayTrigger overlay={popoverHoverFocus}>
          <Button bsStyle="primary" bsSize="small" onClick={this.handleShow}>
            {'10:30am - 11:00am'} 
          </Button>
        </OverlayTrigger>
       
        </Col>
        
        <Col className='halfhour' xs={4} md={1}>
         <TsModal show={this.state.show} onhide={this.handleClose} onclick={this.handleClose} />
        <OverlayTrigger overlay={popoverHoverFocus}>
          <Button bsStyle="primary" bsSize="small" onClick={this.handleShow}>
            {'10:30am - 11:00am'} 
          </Button>
        </OverlayTrigger>
       
        </Col>
        
        <Col className='halfhour' xs={4} md={1}>
         <TsModal show={this.state.show} onhide={this.handleClose} onclick={this.handleClose} />
        <OverlayTrigger overlay={popoverHoverFocus}>
          <Button bsStyle="primary" bsSize="small" onClick={this.handleShow}>
            {'10:30am - 11:00am'} 
          </Button>
        </OverlayTrigger>
       
        </Col>
        
        <Col className='halfhour' xs={4} md={1}>
         <TsModal show={this.state.show} onhide={this.handleClose} onclick={this.handleClose} />
        <OverlayTrigger overlay={popoverHoverFocus}>
          <Button bsStyle="primary" bsSize="small" onClick={this.handleShow}>
            {'10:30am - 11:00am'} 
          </Button>
        </OverlayTrigger>
       
        </Col>
      </Row>
       <br></br>
     <Row className="timeslot">
        
        <Col className='halfhour' xs={4} md={1}>
         <TsModal show={this.state.show} onhide={this.handleClose} onclick={this.handleClose} />
        <OverlayTrigger overlay={popoverHoverFocus}>
          <Button bsStyle="primary" bsSize="small" onClick={this.handleShow}>
            {'10:30am - 11:00am'} 
          </Button>
        </OverlayTrigger>
       
        </Col>
        
        <Col className='halfhour' xs={4} md={1}>
         <TsModal show={this.state.show} onhide={this.handleClose} onclick={this.handleClose} />
        <OverlayTrigger overlay={popoverHoverFocus}>
          <Button bsStyle="primary" bsSize="small" onClick={this.handleShow}>
            {'10:30am - 11:00am'} 
          </Button>
        </OverlayTrigger>
       
        </Col>
        
        <Col className='halfhour' xs={4} md={1}>
         <TsModal show={this.state.show} onhide={this.handleClose} onclick={this.handleClose} />
        <OverlayTrigger overlay={popoverHoverFocus}>
          <Button bsStyle="primary" bsSize="small" onClick={this.handleShow}>
            {'10:30am - 11:00am'} 
          </Button>
        </OverlayTrigger>
       
        </Col>
        
        <Col className='halfhour' xs={4} md={1}>
         <TsModal show={this.state.show} onhide={this.handleClose} onclick={this.handleClose} />
        <OverlayTrigger overlay={popoverHoverFocus}>
          <Button bsStyle="primary" bsSize="small" onClick={this.handleShow}>
            {'10:30am - 11:00am'} 
          </Button>
        </OverlayTrigger>
       
        </Col>
        
        <Col className='halfhour' xs={4} md={1}>
         <TsModal show={this.state.show} onhide={this.handleClose} onclick={this.handleClose} />
        <OverlayTrigger overlay={popoverHoverFocus}>
          <Button bsStyle="primary" bsSize="small" onClick={this.handleShow}>
            {'10:30am - 11:00am'} 
          </Button>
        </OverlayTrigger>
       
        </Col>
        
        <Col className='halfhour' xs={4} md={1}>
         <TsModal show={this.state.show} onhide={this.handleClose} onclick={this.handleClose} />
        <OverlayTrigger overlay={popoverHoverFocus}>
          <Button bsStyle="primary" bsSize="small" onClick={this.handleShow}>
            {'10:30am - 11:00am'} 
          </Button>
        </OverlayTrigger>
       
        </Col>
        
        <Col className='halfhour' xs={4} md={1}>
         <TsModal show={this.state.show} onhide={this.handleClose} onclick={this.handleClose} />
        <OverlayTrigger overlay={popoverHoverFocus}>
          <Button bsStyle="primary" bsSize="small" onClick={this.handleShow}>
            {'10:30am - 11:00am'} 
          </Button>
        </OverlayTrigger>
       
        </Col>
      </Row>
        <br></br>
      <Row className="timeslot">
        
        <Col className='halfhour' xs={4} md={1}>
         <TsModal show={this.state.show} onhide={this.handleClose} onclick={this.handleClose} />
        <OverlayTrigger overlay={popoverHoverFocus}>
          <Button bsStyle="primary" bsSize="small" onClick={this.handleShow}>
            {'10:30am - 11:00am'} 
          </Button>
        </OverlayTrigger>
       
        </Col>
        
        <Col className='halfhour' xs={4} md={1}>
         <TsModal show={this.state.show} onhide={this.handleClose} onclick={this.handleClose} />
        <OverlayTrigger overlay={popoverHoverFocus}>
          <Button bsStyle="primary" bsSize="small" onClick={this.handleShow}>
            {'10:30am - 11:00am'} 
          </Button>
        </OverlayTrigger>
       
        </Col>
        
        <Col className='halfhour' xs={4} md={1}>
         <TsModal show={this.state.show} onhide={this.handleClose} onclick={this.handleClose} />
        <OverlayTrigger overlay={popoverHoverFocus}>
          <Button bsStyle="primary" bsSize="small" onClick={this.handleShow}>
            {'10:30am - 11:00am'} 
          </Button>
        </OverlayTrigger>
       
        </Col>
        
        <Col className='halfhour' xs={4} md={1}>
         <TsModal show={this.state.show} onhide={this.handleClose} onclick={this.handleClose} />
        <OverlayTrigger overlay={popoverHoverFocus}>
          <Button bsStyle="primary" bsSize="small" onClick={this.handleShow}>
            {'10:30am - 11:00am'} 
          </Button>
        </OverlayTrigger>
       
        </Col>
        
        <Col className='halfhour' xs={4} md={1}>
         <TsModal show={this.state.show} onhide={this.handleClose} onclick={this.handleClose} />
        <OverlayTrigger overlay={popoverHoverFocus}>
          <Button bsStyle="primary" bsSize="small" onClick={this.handleShow}>
            {'10:30am - 11:00am'} 
          </Button>
        </OverlayTrigger>
       
        </Col>
        
        <Col className='halfhour' xs={4} md={1}>
         <TsModal show={this.state.show} onhide={this.handleClose} onclick={this.handleClose} />
        <OverlayTrigger overlay={popoverHoverFocus}>
          <Button bsStyle="primary" bsSize="small" onClick={this.handleShow}>
            {'10:30am - 11:00am'} 
          </Button>
        </OverlayTrigger>
       
        </Col>
        
        <Col className='halfhour' xs={4} md={1}>
         <TsModal show={this.state.show} onhide={this.handleClose} onclick={this.handleClose} />
        <OverlayTrigger overlay={popoverHoverFocus}>
          <Button bsStyle="primary" bsSize="small" onClick={this.handleShow}>
            {'10:30am - 11:00am'} 
          </Button>
        </OverlayTrigger>
       
        </Col>
      </Row>
           <br></br>
      <Row className="timeslot">
        
        <Col className='halfhour' xs={4} md={1}>
         <TsModal show={this.state.show} onhide={this.handleClose} onclick={this.handleClose} />
        <OverlayTrigger overlay={popoverHoverFocus}>
          <Button bsStyle="primary" bsSize="small" onClick={this.handleShow}>
            {'10:30am - 11:00am'} 
          </Button>
        </OverlayTrigger>
       
        </Col>
        
        <Col className='halfhour' xs={4} md={1}>
         <TsModal show={this.state.show} onhide={this.handleClose} onclick={this.handleClose} />
        <OverlayTrigger overlay={popoverHoverFocus}>
          <Button bsStyle="primary" bsSize="small" onClick={this.handleShow}>
            {'10:30am - 11:00am'} 
          </Button>
        </OverlayTrigger>
       
        </Col>
        
        <Col className='halfhour' xs={4} md={1}>
         <TsModal show={this.state.show} onhide={this.handleClose} onclick={this.handleClose} />
        <OverlayTrigger overlay={popoverHoverFocus}>
          <Button bsStyle="primary" bsSize="small" onClick={this.handleShow}>
            {'10:30am - 11:00am'} 
          </Button>
        </OverlayTrigger>
       
        </Col>
        
        <Col className='halfhour' xs={4} md={1}>
         <TsModal show={this.state.show} onhide={this.handleClose} onclick={this.handleClose} />
        <OverlayTrigger overlay={popoverHoverFocus}>
          <Button bsStyle="primary" bsSize="small" onClick={this.handleShow}>
            {'10:30am - 11:00am'} 
          </Button>
        </OverlayTrigger>
       
        </Col>
        
        <Col className='halfhour' xs={4} md={1}>
         <TsModal show={this.state.show} onhide={this.handleClose} onclick={this.handleClose} />
        <OverlayTrigger overlay={popoverHoverFocus}>
          <Button bsStyle="primary" bsSize="small" onClick={this.handleShow}>
            {'10:30am - 11:00am'} 
          </Button>
        </OverlayTrigger>
       
        </Col>
        
        <Col className='halfhour' xs={4} md={1}>
         <TsModal show={this.state.show} onhide={this.handleClose} onclick={this.handleClose} />
        <OverlayTrigger overlay={popoverHoverFocus}>
          <Button bsStyle="primary" bsSize="small" onClick={this.handleShow}>
            {'10:30am - 11:00am'} 
          </Button>
        </OverlayTrigger>
       
        </Col>
        
        <Col className='halfhour' xs={4} md={1}>
         <TsModal show={this.state.show} onhide={this.handleClose} onclick={this.handleClose} />
        <OverlayTrigger overlay={popoverHoverFocus}>
          <Button bsStyle="primary" bsSize="small" onClick={this.handleShow}>
            {'10:30am - 11:00am'} 
          </Button>
        </OverlayTrigger>
       
        </Col>
      </Row>
    </Grid>
    );
  }
}

export default Timeslots; 