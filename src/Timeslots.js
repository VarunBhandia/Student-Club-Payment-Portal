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
        <OverlayTrigger overlay={popoverHoverFocus}>
          <Button bsStyle="primary" bsSize="small" onClick={this.handleShow}>
            {'10:30am - 11:00am'} 
          </Button>
        </OverlayTrigger>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>            
            <hr />
            <p>
              Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
              cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
              dui. Donec ullamcorper nulla non metus auctor fringilla.
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
        </Col>
        <Col className='halfhour' xs={4} md={1}>
        <OverlayTrigger overlay={popoverHoverFocus}>
          <Button bsStyle="primary" bsSize="small" onClick={this.handleShow}>
            {'10:30am - 11:00am'} 
          </Button>
        </OverlayTrigger>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>            
            <hr />
            <p>
              Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
              cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
              dui. Donec ullamcorper nulla non metus auctor fringilla.
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
        </Col>
        <Col className='halfhour' xs={4} md={1}>
        <OverlayTrigger overlay={popoverHoverFocus}>
          <Button bsStyle="primary" bsSize="small" onClick={this.handleShow}>
            {'10:30am - 11:00am'} 
          </Button>
        </OverlayTrigger>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>            
            <hr />
            <p>
              Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
              cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
              dui. Donec ullamcorper nulla non metus auctor fringilla.
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
        </Col>
        <Col className='halfhour' xs={4} md={1}>
        <OverlayTrigger overlay={popoverHoverFocus}>
          <Button bsStyle="primary" bsSize="small" onClick={this.handleShow}>
            {'10:30am - 11:00am'} 
          </Button>
        </OverlayTrigger>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>            
            <hr />
            <p>
              Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
              cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
              dui. Donec ullamcorper nulla non metus auctor fringilla.
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
        </Col>
        <Col className='halfhour' xs={4} md={1}>
        <OverlayTrigger overlay={popoverHoverFocus}>
          <Button bsStyle="primary" bsSize="small" onClick={this.handleShow}>
            {'10:30am - 11:00am'} 
          </Button>
        </OverlayTrigger>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>            
            <hr />
            <p>
              Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
              cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
              dui. Donec ullamcorper nulla non metus auctor fringilla.
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
        </Col>
        <Col className='halfhour' xs={4} md={1}>
        <OverlayTrigger overlay={popoverHoverFocus}>
          <Button bsStyle="primary" bsSize="small" onClick={this.handleShow}>
            {'10:30am - 11:00am'} 
          </Button>
        </OverlayTrigger>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>            
            <hr />
            <p>
              Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
              cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
              dui. Donec ullamcorper nulla non metus auctor fringilla.
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
        </Col>
        <Col className='halfhour' xs={4} md={1}>
        <OverlayTrigger overlay={popoverHoverFocus}>
          <Button bsStyle="primary" bsSize="small" onClick={this.handleShow}>
            {'10:30am - 11:00am'} 
          </Button>
        </OverlayTrigger>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>            
            <hr />
            <p>
              Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
              cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
              dui. Donec ullamcorper nulla non metus auctor fringilla.
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
        </Col>
      </Row>
       <br></br>
     <Row className="timeslot">
        <Col className='halfhour' xs={4} md={1}>
        <OverlayTrigger overlay={popoverHoverFocus}>
          <Button bsStyle="primary" bsSize="small" onClick={this.handleShow}>
            {'10:30am - 11:00am'} 
          </Button>
        </OverlayTrigger>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>            
            <hr />
            <p>
              Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
              cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
              dui. Donec ullamcorper nulla non metus auctor fringilla.
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
        </Col>
        <Col className='halfhour' xs={4} md={1}>
        <OverlayTrigger overlay={popoverHoverFocus}>
          <Button bsStyle="primary" bsSize="small" onClick={this.handleShow}>
            {'10:30am - 11:00am'} 
          </Button>
        </OverlayTrigger>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>            
            <hr />
            <p>
              Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
              cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
              dui. Donec ullamcorper nulla non metus auctor fringilla.
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
        </Col>
        <Col className='halfhour' xs={4} md={1}>
        <OverlayTrigger overlay={popoverHoverFocus}>
          <Button bsStyle="primary" bsSize="small" onClick={this.handleShow}>
            {'10:30am - 11:00am'} 
          </Button>
        </OverlayTrigger>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>            
            <hr />
            <p>
              Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
              cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
              dui. Donec ullamcorper nulla non metus auctor fringilla.
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
        </Col>
        <Col className='halfhour' xs={4} md={1}>
        <OverlayTrigger overlay={popoverHoverFocus}>
          <Button bsStyle="primary" bsSize="small" onClick={this.handleShow}>
            {'10:30am - 11:00am'} 
          </Button>
        </OverlayTrigger>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>            
            <hr />
            <p>
              Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
              cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
              dui. Donec ullamcorper nulla non metus auctor fringilla.
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
        </Col>
        <Col className='halfhour' xs={4} md={1}>
        <OverlayTrigger overlay={popoverHoverFocus}>
          <Button bsStyle="primary" bsSize="small" onClick={this.handleShow}>
            {'10:30am - 11:00am'} 
          </Button>
        </OverlayTrigger>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>            
            <hr />
            <p>
              Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
              cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
              dui. Donec ullamcorper nulla non metus auctor fringilla.
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
        </Col>
        <Col className='halfhour' xs={4} md={1}>
        <OverlayTrigger overlay={popoverHoverFocus}>
          <Button bsStyle="primary" bsSize="small" onClick={this.handleShow}>
            {'10:30am - 11:00am'} 
          </Button>
        </OverlayTrigger>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>            
            <hr />
            <p>
              Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
              cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
              dui. Donec ullamcorper nulla non metus auctor fringilla.
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
        </Col>
        <Col className='halfhour' xs={4} md={1}>
        <OverlayTrigger overlay={popoverHoverFocus}>
          <Button bsStyle="primary" bsSize="small" onClick={this.handleShow}>
            {'10:30am - 11:00am'} 
          </Button>
        </OverlayTrigger>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>            
            <hr />
            <p>
              Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
              cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
              dui. Donec ullamcorper nulla non metus auctor fringilla.
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
        </Col>
      </Row>
        <br></br>
      <Row className="timeslot">
        <Col className='halfhour' xs={4} md={1}>
        <OverlayTrigger overlay={popoverHoverFocus}>
          <Button bsStyle="primary" bsSize="small" onClick={this.handleShow}>
            {'10:30am - 11:00am'} 
          </Button>
        </OverlayTrigger>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>            
            <hr />
            <p>
              Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
              cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
              dui. Donec ullamcorper nulla non metus auctor fringilla.
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
        </Col>
        <Col className='halfhour' xs={4} md={1}>
        <OverlayTrigger overlay={popoverHoverFocus}>
          <Button bsStyle="primary" bsSize="small" onClick={this.handleShow}>
            {'10:30am - 11:00am'} 
          </Button>
        </OverlayTrigger>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>            
            <hr />
            <p>
              Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
              cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
              dui. Donec ullamcorper nulla non metus auctor fringilla.
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
        </Col>
        <Col className='halfhour' xs={4} md={1}>
        <OverlayTrigger overlay={popoverHoverFocus}>
          <Button bsStyle="primary" bsSize="small" onClick={this.handleShow}>
            {'10:30am - 11:00am'} 
          </Button>
        </OverlayTrigger>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>            
            <hr />
            <p>
              Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
              cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
              dui. Donec ullamcorper nulla non metus auctor fringilla.
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
        </Col>
        <Col className='halfhour' xs={4} md={1}>
        <OverlayTrigger overlay={popoverHoverFocus}>
          <Button bsStyle="primary" bsSize="small" onClick={this.handleShow}>
            {'10:30am - 11:00am'} 
          </Button>
        </OverlayTrigger>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>            
            <hr />
            <p>
              Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
              cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
              dui. Donec ullamcorper nulla non metus auctor fringilla.
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
        </Col>
        <Col className='halfhour' xs={4} md={1}>
        <OverlayTrigger overlay={popoverHoverFocus}>
          <Button bsStyle="primary" bsSize="small" onClick={this.handleShow}>
            {'10:30am - 11:00am'} 
          </Button>
        </OverlayTrigger>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>            
            <hr />
            <p>
              Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
              cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
              dui. Donec ullamcorper nulla non metus auctor fringilla.
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
        </Col>
        <Col className='halfhour' xs={4} md={1}>
        <OverlayTrigger overlay={popoverHoverFocus}>
          <Button bsStyle="primary" bsSize="small" onClick={this.handleShow}>
            {'10:30am - 11:00am'} 
          </Button>
        </OverlayTrigger>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>            
            <hr />
            <p>
              Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
              cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
              dui. Donec ullamcorper nulla non metus auctor fringilla.
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
        </Col>
        <Col className='halfhour' xs={4} md={1}>
        <OverlayTrigger overlay={popoverHoverFocus}>
          <Button bsStyle="primary" bsSize="small" onClick={this.handleShow}>
            {'10:30am - 11:00am'} 
          </Button>
        </OverlayTrigger>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>            
            <hr />
            <p>
              Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
              cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
              dui. Donec ullamcorper nulla non metus auctor fringilla.
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
        </Col>
      </Row>
           <br></br>
      <Row className="timeslot">
        <Col className='halfhour' xs={4} md={1}>
        <OverlayTrigger overlay={popoverHoverFocus}>
          <Button bsStyle="primary" bsSize="small" onClick={this.handleShow}>
            {'10:30am - 11:00am'} 
          </Button>
        </OverlayTrigger>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>            
            <hr />
            <p>
              Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
              cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
              dui. Donec ullamcorper nulla non metus auctor fringilla.
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
        </Col>
        <Col className='halfhour' xs={4} md={1}>
        <OverlayTrigger overlay={popoverHoverFocus}>
          <Button bsStyle="primary" bsSize="small" onClick={this.handleShow}>
            {'10:30am - 11:00am'} 
          </Button>
        </OverlayTrigger>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>            
            <hr />
            <p>
              Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
              cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
              dui. Donec ullamcorper nulla non metus auctor fringilla.
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
        </Col>
        <Col className='halfhour' xs={4} md={1}>
        <OverlayTrigger overlay={popoverHoverFocus}>
          <Button bsStyle="primary" bsSize="small" onClick={this.handleShow}>
            {'10:30am - 11:00am'} 
          </Button>
        </OverlayTrigger>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>            
            <hr />
            <p>
              Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
              cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
              dui. Donec ullamcorper nulla non metus auctor fringilla.
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
        </Col>
        <Col className='halfhour' xs={4} md={1}>
        <OverlayTrigger overlay={popoverHoverFocus}>
          <Button bsStyle="primary" bsSize="small" onClick={this.handleShow}>
            {'10:30am - 11:00am'} 
          </Button>
        </OverlayTrigger>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>            
            <hr />
            <p>
              Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
              cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
              dui. Donec ullamcorper nulla non metus auctor fringilla.
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
        </Col>
        <Col className='halfhour' xs={4} md={1}>
        <OverlayTrigger overlay={popoverHoverFocus}>
          <Button bsStyle="primary" bsSize="small" onClick={this.handleShow}>
            {'10:30am - 11:00am'} 
          </Button>
        </OverlayTrigger>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>            
            <hr />
            <p>
              Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
              cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
              dui. Donec ullamcorper nulla non metus auctor fringilla.
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
        </Col>
        <Col className='halfhour' xs={4} md={1}>
        <OverlayTrigger overlay={popoverHoverFocus}>
          <Button bsStyle="primary" bsSize="small" onClick={this.handleShow}>
            {'10:30am - 11:00am'} 
          </Button>
        </OverlayTrigger>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>            
            <hr />
            <p>
              Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
              cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
              dui. Donec ullamcorper nulla non metus auctor fringilla.
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
        </Col>
        <Col className='halfhour' xs={4} md={1}>
        <OverlayTrigger overlay={popoverHoverFocus}>
          <Button bsStyle="primary" bsSize="small" onClick={this.handleShow}>
            {'10:30am - 11:00am'} 
          </Button>
        </OverlayTrigger>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>            
            <hr />
            <p>
              Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
              cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
              dui. Donec ullamcorper nulla non metus auctor fringilla.
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
        </Col>
      </Row>
    </Grid>
    );
  }
}

export default Timeslots; 