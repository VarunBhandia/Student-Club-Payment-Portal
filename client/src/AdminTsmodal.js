import React from 'react';
import {
  Modal,
  Button,
} from 'react-bootstrap';



class TsModal extends React.Component {
  constructor(props) {
    super(props);
    this.handlePostReq = this.handlePostReq.bind(this);
    this.state = {
      
    };
    
  }

  handlePostReq(item,str,amount) {
    // eslint-disable-next-line
    item.keeptime = item.keeptime + " " + str;
    fetch('/adminbook', {
      method: 'POST',
      body: JSON.stringify({
        item : item,
        amount : amount
      }),
      headers:{
        'Content-Type': 'application/json'
      }
     }).then((res) => res.json())
     .then((data) =>  console.log(data))
     .catch((err)=>console.log(err));
  }

  render() {
    var item = this.props.modalid;
    var slot = this.props.popoverlist;
    var count = this.props.count;
    var dis = [false,false,false,false,false];
    if(slot && item) {
      
      if(slot[count].p1 === 'Booked') {
        dis[0] = true;
      }
      if(slot[count].p2 === 'Booked') {
        dis[1] = true;
      }
      if(slot[count].s1 === 'Booked') {
        dis[2] = true;
      }
      if(slot[count].s2 === 'Booked') {
        dis[3] = true;
      }
      if(slot[count].s3 === 'Booked') {
        dis[4] = true;
      }
      if(slot[count].s4 === 'Booked') {
        dis[5] = true;
      }
      if(slot[count].s5 === 'Booked') {
        dis[6] = true;
      }
    } 
    
    return (
      	<Modal show={this.props.show} onHide={this.props.onhide}>
          <Modal.Header closeButton>
          <Modal.Title>Book Tables</Modal.Title>
          </Modal.Header>
          <Modal.Body>            
            <hr />
            <Button disabled = {dis[0]} bsStyle="primary" bsSize="small" onClick={() => { this.handlePostReq(item, 'Pool Table 1',5)}}  >Pool table 1 </Button>
            <Button disabled = {dis[1]} bsStyle="primary" bsSize="small" onClick={() => { this.handlePostReq(item, 'Pool Table 2',5)}} >Pool table 2</Button>
            <Button disabled = {dis[2]} bsStyle="primary" bsSize="small" onClick={() => { this.handlePostReq(item, 'Snooker Table 1',10)}} >Snooker table 1</Button>
            <Button disabled = {dis[3]} bsStyle="primary" bsSize="small" onClick={() => { this.handlePostReq(item, 'Snooker Table 2',10)}} >Snooker table 2</Button>
            <Button disabled = {dis[4]} bsStyle="primary" bsSize="small" onClick={() => { this.handlePostReq(item, 'Snooker Table 3',10)}} >Snooker table 3</Button>
            <Button disabled = {dis[5]} bsStyle="primary" bsSize="small" onClick={() => { this.handlePostReq(item, 'Snooker Table 4',10)}} >Snooker table 4</Button>
            <Button disabled = {dis[6]} bsStyle="primary" bsSize="small" onClick={() => { this.handlePostReq(item, 'Snooker Table 5',10)}} >Snooker table 5</Button>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.onclick}>Close</Button>
          </Modal.Footer>
        </Modal>
    );
  }
}

export default TsModal;