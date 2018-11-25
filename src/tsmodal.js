import React, { Component } from 'react';
import {
  Modal,
  Popover,
  Tooltip,
  Button,
  OverlayTrigger,
} from 'react-bootstrap';
class TsModal extends React.Component {
  


  render() {
    return (
      	<Modal show={this.props.show} onHide={this.props.onhide}>
          <Modal.Header closeButton>
          <Modal.Title>Book Tables</Modal.Title>
          </Modal.Header>
          <Modal.Body>            
            <hr />
            <Button bsStyle="primary" bsSize="small">{'Pool table 1'} </Button>
            <Button bsStyle="primary" bsSize="small">{'Pool table 2'} </Button>
            <Button bsStyle="primary" bsSize="small">{'Snooker table 1'} </Button>
            <Button bsStyle="primary" bsSize="small">{'Snooker table 2'} </Button>
            <Button bsStyle="primary" bsSize="small">{'Snooker table 3'} </Button>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.onclick}>Close</Button>
          </Modal.Footer>
        </Modal>
    );
  }
}

export default TsModal;