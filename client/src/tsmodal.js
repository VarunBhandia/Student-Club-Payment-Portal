import React from 'react';
import {
  Modal,
  Button,
} from 'react-bootstrap';



class TsModal extends React.Component {
  constructor(props) {
    super(props);
    this.handlePostReq = this.handlePostReq.bind(this);
    this.handleTotalBooking = this.handleTotalBooking.bind(this);
    this.state = {
      finalbook : [],
      totalamount : 0,
      dis:[false,false,false,false]
    };
    
  }

  handlePostReq(item,str,amount) {
    // eslint-disable-next-line
    item.keeptime = item.keeptime + " " + str;
    fetch('/', {
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

  handleTotalBooking(item,str,amount,count) {
    // eslint-disable-next-line
    var newArr = this.state.finalbook;
    var totamo = this.state.totalamount
    var disabled = this.state.dis;
    item.keeptime = item.keeptime + " " + str;
    newArr.push(item.keeptime);
    totamo = totamo + amount;
    this.setState({finalbook:newArr, totalamount: totamo});
  }

  handleReset() {
    
  }
  render() {
    var item = this.props.modalid;
    var slot = this.props.popoverlist;
    var count = this.props.count;
    var disabled = [false,false,false,false];
    if(slot && item) {
      if(slot[count].p1 === 'Booked') {
        disabled[0] = true;
      }
      if(slot[count].p2 === 'Booked') {
        disabled[1] = true;
      }
      if(slot[count].s1 === 'Booked') {
        disabled[2] = true;
      }
      if(slot[count].s2 === 'Booked') {
        disabled[3] = true;
      }
      if(slot[count].s3 === 'Booked') {
        disabled[4] = true;
      }
    } 
    return (
      	<Modal show={this.props.show} onHide={this.props.onhide}>
          <Modal.Header closeButton>
          <Modal.Title>Book Tables</Modal.Title>
          </Modal.Header>
          <Modal.Body>            
            <hr />
            <Button disabled = {disabled[0]} bsStyle="primary" bsSize="small" onClick={() => { this.handleTotalBooking(item, 'Pool Table 1',5)}}  >Pool table 1 </Button>
            <Button disabled = {disabled[1]} bsStyle="primary" bsSize="small" onClick={() => { this.handlePostReq(item, 'Pool Table 2',5)}} href = "https://studclubbooking.herokuapp.com/handlebars">Pool table 2</Button>
            <Button disabled = {disabled[2]} bsStyle="primary" bsSize="small" onClick={() => { this.handlePostReq(item, 'Snooker Table 1',10)}} href = "https://studclubbooking.herokuapp.com/handlebars">Snooker table 1</Button>
            <Button disabled = {disabled[3]} bsStyle="primary" bsSize="small" onClick={() => { this.handlePostReq(item, 'Snooker Table 2',10)}} href = "https://studclubbooking.herokuapp.com/handlebars">Snooker table 2</Button>
            <Button disabled = {disabled[4]} bsStyle="primary" bsSize="small" onClick={() => { this.handlePostReq(item, 'Snooker Table 3',10)}} href = "https://studclubbooking.herokuapp.com/handlebars">Snooker table 3</Button>
          </Modal.Body>
          <Modal.Footer>
            Total Amount is : {this.state.totalamount}
            <br></br>
            Bookings made are : {this.state.finalbook}
            <br></br>
            <Button onClick={this.handleReset}>Reset Amount</Button>
            <Button onClick={this.props.onclick}>Close</Button>
          </Modal.Footer>
        </Modal>
    );
  }
}

export default TsModal;