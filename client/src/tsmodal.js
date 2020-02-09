import React from 'react';
import {
  Modal,
  Button,
  Checkbox,
  Alert
} from '../node_modules/react-bootstrap';

var OPTIONS = [];


class TsModal extends React.Component {
  constructor(props) {
    super(props);
    this.handlePostReq = this.handlePostReq.bind(this);
    this.handleTotalBooking = this.handleTotalBooking.bind(this);
    this.handleCheckbox = this.handleCheckbox.bind(this);
    //this.handleShowCheckbox = this.handleShowCheckbox.bind(this);
    this.state = {
      finalbook : [],
      result: [],
      totalamount : 0,
      currentTable: '',
      currentAmount: 0,
      dis:true,
      checkboxDis:true,
      times:[]
    };
    
  }
 
  componentWillMount() {
    this.getList();
  }

  getList = () => {
    
    fetch("/mznFag7kV7")
    .then(res => res.json())
    .then(result => this.setState({ result }))
  }

  handlePostReq(item,amount) {
    // eslint-disable-next-line
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

  handleCheckbox(e) {
    
    if(e.target.name === 'unchecked') {
      e.target.name = 'checked';
      var newArr = this.state.finalbook;
      var totamo = this.state.totalamount;
      var newEle = e.target.value;
      if(newArr.includes(newEle) || newArr.length === 4) {
        alert('Cannot book more');
      }
      else {
      newArr.push(newEle);
      totamo = totamo + 5;
      }
    }
    else if(e.target.name === 'checked') {
      e.target.name = 'unchecked';
      var newArr = this.state.finalbook;
      var totamo = this.state.totalamount
      var newEle = e.target.value;
      if(newArr.includes(newEle) || newArr.length < 4) {
        var index = newArr.indexOf(newEle);
        newArr.splice(index, 1);
        totamo = totamo - 5;
      }
    }
    this.setState({finalbook:newArr, totalamount: totamo});
  }

  createCheckboxes(currentT) {
    const {result} = this.state;
    this.setState({checkboxDis:false});
    OPTIONS = ['10:00-10:30', '10:30-11:00', '11:00-11:30', '11:30-12:00', '12:00-12:30', '12:30-13:00', '13:00-13:30', '13:30-14:00', '14:00-14:30', '14:30-15:00', '15:00-15:30', '15:30-16:00', '16:00-16:30', '16:30-17:00', '17:00-17:30', '17:30-18:00', '18:00-18:30', '18:30-19:00','19:00-19:30','19:30-20:00', '20:00-20:30', '20:30-21:00', '21:00-21:30', '21:30-22:00', '22:00-22:30', '22:30-23:00', '23:00-23:30', '23:30-24:00'];
    if(result) {
      for(var i=0; i<result.length; i++) {
        if(result[i].TableType === currentT.currentTable) {
          var index = OPTIONS.indexOf(result[i].TableTime);
          OPTIONS.splice(index, 1);
        }
      }
      OPTIONS = OPTIONS.map(value => {
        return  ( <label style={{marginRight:'10px'}} for="mybox">{value}<li><br></br><input  onChange={this.handleCheckbox} type="checkbox" id="mybox"  name = 'unchecked' value={value + " " + currentT.currentTable}  /></li></label> 
        );
      });
    }
  }
  
  handleTotalBooking(item,str,amount) {
    
    // eslint-disable-next-line
    this.setState({currentTable:str, currentAmount:amount, dis:false})
    var newArr = this.state.finalbook;
    var totamo = this.state.totalamount;
    item.keeptimeNew = item.keeptime + " " + str;
    // if(newArr.includes(item.keeptimeNew) || newArr.length === 4) {
    //   alert('Cannot book more');
    // }
    if(newArr.includes(item.keeptimeNew)){
      var filtered = newArr.filter(function (value) {
        return (value !== item.keeptimeNew);
      });
      totamo = totamo - amount;
      newArr = filtered;
      this.setState({finalbook: newArr, totalamount: totamo});
    }else if(newArr.length === 4){
      alert('Cannot Book More');
    }else {
    newArr.push(item.keeptimeNew);
    totamo = totamo + amount;
    console.log(newArr + totamo);
    this.setState({finalbook:newArr, totalamount: totamo});
    }
  }

  
  render() {
    
    var  { finalbook, totalamount, currentTable, currentAmount} = this.state;
    var final = this.state.finalbook;
    final = final.map(function(value){
      return <li> {value} </li>;
    });
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
      if(slot[count].s4 === 'Booked') {
        disabled[5] = true;
      }
      if(slot[count].s5 === 'Booked') {
        disabled[6] = true;
      }
    }

    return (
      	<Modal show={this.props.show} onHide={this.props.onhide}>
          <Modal.Header closeButton>
          <Modal.Title>Book Tables</Modal.Title>
          
              <Alert> 
                Please make sure that you are not booking more than 4 tables for today, otherwise your money will be
                deducted but tables will not be assigned. 
                to you.
              </Alert>
          
          </Modal.Header>
          <Modal.Body>            
            <hr />
            <Button disabled = {disabled[0]} bsStyle="primary" bsSize="small" style={{ margin: '4px'}} onClick={() => { this.handleTotalBooking(item, 'Pool Table 1',5)}} >Pool table 1 </Button>
            <Button disabled = {disabled[1]} bsStyle="primary" bsSize="small" style={{ margin: '4px'}} onClick={() => { this.handleTotalBooking(item, 'Pool Table 2',5)}}> Pool table 2 </Button><br></br>
            <Button disabled = {disabled[2]} bsStyle="primary" bsSize="small" style={{ margin: '4px'}} onClick={() => { this.handleTotalBooking(item, 'Snooker Table 1',5)}}>Snooker table 1</Button>
            <Button disabled = {disabled[3]} bsStyle="primary" bsSize="small" style={{ margin: '4px'}} onClick={() => { this.handleTotalBooking(item, 'Snooker Table 2',5)}}>Snooker table 2</Button>
            <Button disabled = {disabled[4]} bsStyle="primary" bsSize="small" style={{ margin: '4px'}} onClick={() => { this.handleTotalBooking(item, 'Snooker Table 3',5)}}>Snooker table 3</Button>
            <Button disabled = {disabled[5]} bsStyle="primary" bsSize="small" style={{ margin: '4px'}} onClick={() => { this.handleTotalBooking(item, 'Snooker Table 4',5)}}>Snooker table 4</Button>
            <Button disabled = {disabled[6]} bsStyle="primary" bsSize="small" style={{ margin: '4px'}} onClick={() => { this.handleTotalBooking(item, 'Snooker Table 5',5)}}>Snooker table 5</Button>
          </Modal.Body>
          <Modal.Footer style={{position:'relative', textAlign:'left'}}>
            Total Amount is : {this.state.totalamount}
            <br></br>
            Bookings made are : {final}
            <br></br>
            <form action="/payment" method="post" id="myForm">
            <Button onClick={() => { this.handlePostReq({finalbook},{totalamount})}} type="submit">Confirm Booking</Button>
            </form>
            <Button disabled ={this.state.dis}  onClick={() => {this.createCheckboxes({currentTable}, {currentAmount})}}>Book more slots of {currentTable}</Button>
            <Button onClick={this.props.onclick}>Close</Button>
          </Modal.Footer>
          <h4 hidden = {this.state.checkboxDis}>{currentTable} free slots</h4>
          <ul hidden = {this.state.checkboxDis}>{OPTIONS}</ul>
        </Modal>
    );
  }
}

export default TsModal;
