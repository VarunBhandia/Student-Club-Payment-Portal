import React, { Component } from 'react';
import {
  Grid,
  Row,
  Col,
  Alert,
  Button,
  OverlayTrigger,
  Popover,
} from 'react-bootstrap';
import './App.css';
import PsTsModal from'./PsTsModal';

// Time button style 
var btstyle = {
  padding: '12px',
  margin : '14px',
  fontSize :'16px',
}

// declaring variable for 
class PsTimeslots extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleButPush = this.handleButPush.bind(this);
    this.colhour = this.colhour.bind(this);
    this.handlePopoverList = this.handlePopoverList.bind(this);
    this.state = {
      show: false, 
      buttonPush: 'invalid',
      count : 0,
      result: [],  
      time : ['10:00-10:30', '10:30-11:00', '11:00-11:30', '11:30-12:00', '12:00-12:30', '12:30-13:00', '13:00-13:30', '13:30-14:00', '14:00-14:30', '14:30-15:00', '15:00-15:30', '15:30-16:00', '16:00-16:30', '16:30-17:00', '17:00-17:30', '17:30-18:00', '18:00-18:30', '19:00-19:30','19:30-20:00', '20:00-20:30', '20:30-21:00', '21:00-21:30', '22:00-22:30', '22:30-23:00', '23:00-23:30', '23:30-24:00'],
      popoverlist : [{'p1': "Available", 'p2': "Available"},
                     {'p1': "Available", 'p2': "Available"},
                     {'p1': "Available", 'p2': "Available"},
                     {'p1': "Available", 'p2': "Available"},
                     {'p1': "Available", 'p2': "Available"},
                     {'p1': "Available", 'p2': "Available"},
                     {'p1': "Available", 'p2': "Available"},
                     {'p1': "Available", 'p2': "Available"},
                     {'p1': "Available", 'p2': "Available"},
                     {'p1': "Available", 'p2': "Available"},
                     {'p1': "Available", 'p2': "Available"},
                     {'p1': "Available", 'p2': "Available"},
                     {'p1': "Available", 'p2': "Available"},
                     {'p1': "Available", 'p2': "Available"},
                     {'p1': "Available", 'p2': "Available"},
                     {'p1': "Available", 'p2': "Available"},
                     {'p1': "Available", 'p2': "Available"},
                     {'p1': "Available", 'p2': "Available"},
                     {'p1': "Available", 'p2': "Available"},
                     {'p1': "Available", 'p2': "Available"},
                     {'p1': "Available", 'p2': "Available"},
                     {'p1': "Available", 'p2': "Available"},
                     {'p1': "Available", 'p2': "Available"},
                     {'p1': "Available", 'p2': "Available"},
                     {'p1': "Available", 'p2': "Available"},
                     {'p1': "Available", 'p2': "Available"},
                     {'p1': "Available", 'p2': "Available"},
                     {'p1': "Available", 'p2': "Available"}                    
                    ],
    };
  }

  componentWillMount() {
    this.getList();
  }

  getList = () => {
    
    fetch("/testpayment")
    .then(res => res.json())
    .then(result => this.setState({ result }))
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }
  handleButPush(val,count) {
    this.setState({ buttonpush: val , count: count});
  }

  handlePopoverList(keeptime,butdisable, count) {
    const newList = this.state.popoverlist.slice();
    if(butdisable) {
      for (var i=0; i < butdisable.length; i++) {
        if(butdisable[i].TableTime === keeptime) {
          if(butdisable[i].TableType === 'Playstation 1') {
            newList[count].p1 = 'Booked';
          }
          if(butdisable[i].TableType === 'Playstation 2') {
            newList[count].p2 = 'Booked';
          }
        }
      }
      this.setState({popoverlist : newList});
    }

  }

  popoverHoverFocus(count) {
  return(
  <Popover id="popover-trigger-hover-focus" title="Playstation status">
    <strong >Console 1 -> {this.state.popoverlist[count].p1}</strong> <br />
    <strong >Console 2 -> {this.state.popoverlist[count].p2}</strong> <br />
  </Popover>
  );
  } 
  
  
  colhour(keeptime,butdisable,count) {
    return(  
        <Col className='halfhour' xs={4} md={1}>
          <PsTsModal modalid = {this.state.buttonpush} popoverlist = {this.state.popoverlist} count = {this.state.count} show={this.state.show} onhide={this.handleClose} onclick={this.handleClose}   />
            <OverlayTrigger overlay = {this.popoverHoverFocus(count)} delay={{ show: 250, hide: 400 }}>
              <Button  bsStyle="outline-info"  style={btstyle} onMouseEnter={() => {this.handlePopoverList(keeptime, butdisable, count);}} onClick={() => { this.handleShow(); this.handleButPush({keeptime},count); }}>
                {keeptime} 
              </Button>
            </OverlayTrigger>
        </Col>
    );
  }


  render() {

    const { result } = this.state;
    if(result === null) {
      return <div />
    }
    if(result) {
    var slot = result;
    } 
    var time = this.state.time;
    return (
    <div className='psbook' >
    <div className='container'>
    <Alert variant='danger'> 
                Please note that you cannot book more than 4 Playstation slots in a day. 
                In case of any discrepancy or amount deducted but table not being assigned, please report the incident to Student's Club. Refund will be initiated accordingly in about 14 days.
                
              </Alert>
    </div>

    <Grid>
   
              <br></br>
    <h1 style={{ color:' #0f1012',backgroundColor:' #c7995d',padding: '7px'}}><b>Playstation Booking</b></h1>
              
     <br></br>
      <Row className="timeslot">
        {this.colhour(time[0],slot,0)}
        {this.colhour(time[1],slot,1)}
        {this.colhour(time[2],slot,2)}
        {this.colhour(time[3],slot,3)}
        {this.colhour(time[4],slot,4)}
        {this.colhour(time[5],slot,5)}
        {this.colhour(time[6],slot,6)}
      
        {this.colhour(time[7],slot,7)}
        </Row>
      <Row className="timeslot">
        {this.colhour(time[8],slot,8)}
        {this.colhour(time[9],slot,9)}
        {this.colhour(time[10],slot,10)}
        {this.colhour(time[11],slot,11)}
        {this.colhour(time[12],slot,12)}
        {this.colhour(time[13],slot,13)}
      
        {this.colhour(time[14],slot,14)}
        {this.colhour(time[15],slot,15)}
        </Row>
      <Row className="timeslot">
        {this.colhour(time[16],slot,16)}
        {this.colhour(time[17],slot,17)}
        {this.colhour(time[18],slot,18)}
        {this.colhour(time[19],slot,19)}
        {this.colhour(time[20],slot,20)}
     
        {this.colhour(time[21],slot,21)}
        {this.colhour(time[22],slot,22)}
        {this.colhour(time[23],slot,23)}
        </Row>
      <Row className="timeslot">
        {this.colhour(time[24],slot,24)}
        {this.colhour(time[25],slot,25)}
      </Row>
      
     
    </Grid>
    </div> 
    );
  }
}
            
export default PsTimeslots; 