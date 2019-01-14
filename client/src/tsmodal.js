import React from 'react';
import {
  Modal,
  Button,
} from 'react-bootstrap';

class TsModal extends React.Component {
  constructor(props) {
    super(props);
    this.handlePostReq = this.handlePostReq.bind(this);
  }

  handlePostReq(item,str) {
    // eslint-disable-next-line
    console.log(item);
    item.keeptime = item.keeptime + " " + str;
    fetch('/', {
      method: 'POST',
      body: JSON.stringify(item),
      headers:{
        'Content-Type': 'application/json'
      }
     }).then((res) => res.json())
     .then((data) =>  console.log(data))
     .catch((err)=>console.log(err));
  }

  render() {
    var item = this.props.modalid;
    return (
      	<Modal show={this.props.show} onHide={this.props.onhide}>
          <Modal.Header closeButton>
          <Modal.Title>Book Tables</Modal.Title>
          </Modal.Header>
          <Modal.Body>            
            <hr />
            <Button bsStyle="primary" bsSize="small" onClick={() => { this.handlePostReq(item, 'Pool Table 1')}} href = 'http://localhost:4000'>Pool table 1</Button>
            <Button bsStyle="primary" bsSize="small" onClick={() => { this.handlePostReq(item, 'Pool Table 2')}}href = 'http://localhost:4000'>Pool table 2</Button>
            <Button bsStyle="primary" bsSize="small" onClick={() => { this.handlePostReq(item, 'Snooker Table 1')}}href = 'http://localhost:4000'>Snooker table 1</Button>
            <Button bsStyle="primary" bsSize="small" onClick={() => { this.handlePostReq(item, 'Snooker Table 2')}}href = 'http://localhost:4000'>Snooker table 2</Button>
            <Button bsStyle="primary" bsSize="small" onClick={() => { this.handlePostReq(item, 'Snooker Table 3')}}href = 'http://localhost:4000'>Snooker table 3</Button>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.onclick}>Close</Button>
          </Modal.Footer>
        </Modal>
    );
  }
}

export default TsModal;