import React, { Component } from 'react';
import { Card, CardTitle, CardText,
    CardSubtitle, CardBody } from 'reactstrap';
    import { 
      Row,
      Col,
      Grid
    } from 'react-bootstrap';
import './App.css';

var sectionStyle = {
  width: "100%",
  height: '100%',
  paddingBottom:'200px',
  color:'white',
  overflowX: 'hidden'
};


// function getIndex(arr,value) {
//   for(var i = 0; i < arr.length; i++) {
//       if(arr[i] === value) {
//           return i;
//       }
//   }
//   return -1; //to handle the case where the value doesn't exist
// }


class TableBookingStatus extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      result: [],
      } 
  }

  componentDidMount() {
    this.getList();
  }

  getList = () => {
    fetch("/mznFag7kV7")
    .then(res => res.json())
    .then(result => this.setState({ result }))
  }

  render() {
    const { result } = this.state;
    
       var timesP1 = ['10:00-10:30', '10:30-11:00', '11:00-11:30', '11:30-12:00', '12:00-12:30', '12:30-13:00', '13:00-13:30', '13:30-14:00', '14:00-14:30', '14:30-15:00', '15:00-15:30', '15:30-16:00', '16:00-16:30', '16:30-17:00', '17:00-17:30', '17:30-18:00', '18:00-18:30','18:30-19:00', '19:00-19:30','19:30-20:00', '20:00-20:30', '20:30-21:00', '21:00-21:30', '22:00-22:30', '22:30-23:00', '23:00-23:30', '23:30-24:00'];
       var timesP2 = ['10:00-10:30', '10:30-11:00', '11:00-11:30', '11:30-12:00', '12:00-12:30', '12:30-13:00', '13:00-13:30', '13:30-14:00', '14:00-14:30', '14:30-15:00', '15:00-15:30', '15:30-16:00', '16:00-16:30', '16:30-17:00', '17:00-17:30', '17:30-18:00', '18:00-18:30','18:30-19:00', '19:00-19:30','19:30-20:00', '20:00-20:30', '20:30-21:00', '21:00-21:30', '22:00-22:30', '22:30-23:00', '23:00-23:30', '23:30-24:00'];
       var timesS1 = ['10:00-10:30', '10:30-11:00', '11:00-11:30', '11:30-12:00', '12:00-12:30', '12:30-13:00', '13:00-13:30', '13:30-14:00', '14:00-14:30', '14:30-15:00', '15:00-15:30', '15:30-16:00', '16:00-16:30', '16:30-17:00', '17:00-17:30', '17:30-18:00', '18:00-18:30','18:30-19:00', '19:00-19:30','19:30-20:00', '20:00-20:30', '20:30-21:00', '21:00-21:30', '22:00-22:30', '22:30-23:00', '23:00-23:30', '23:30-24:00'];
       var timesS2 = ['10:00-10:30', '10:30-11:00', '11:00-11:30', '11:30-12:00', '12:00-12:30', '12:30-13:00', '13:00-13:30', '13:30-14:00', '14:00-14:30', '14:30-15:00', '15:00-15:30', '15:30-16:00', '16:00-16:30', '16:30-17:00', '17:00-17:30', '17:30-18:00', '18:00-18:30','18:30-19:00', '19:00-19:30','19:30-20:00', '20:00-20:30', '20:30-21:00', '21:00-21:30', '22:00-22:30', '22:30-23:00', '23:00-23:30', '23:30-24:00'];
       var timesS3 = ['10:00-10:30', '10:30-11:00', '11:00-11:30', '11:30-12:00', '12:00-12:30', '12:30-13:00', '13:00-13:30', '13:30-14:00', '14:00-14:30', '14:30-15:00', '15:00-15:30', '15:30-16:00', '16:00-16:30', '16:30-17:00', '17:00-17:30', '17:30-18:00', '18:00-18:30','18:30-19:00', '19:00-19:30','19:30-20:00', '20:00-20:30', '20:30-21:00', '21:00-21:30', '22:00-22:30', '22:30-23:00', '23:00-23:30', '23:30-24:00'];
       var timesS4 = ['10:00-10:30', '10:30-11:00', '11:00-11:30', '11:30-12:00', '12:00-12:30', '12:30-13:00', '13:00-13:30', '13:30-14:00', '14:00-14:30', '14:30-15:00', '15:00-15:30', '15:30-16:00', '16:00-16:30', '16:30-17:00', '17:00-17:30', '17:30-18:00', '18:00-18:30','18:30-19:00', '19:00-19:30','19:30-20:00', '20:00-20:30', '20:30-21:00', '21:00-21:30', '22:00-22:30', '22:30-23:00', '23:00-23:30', '23:30-24:00'];
       var timesS5 = ['10:00-10:30', '10:30-11:00', '11:00-11:30', '11:30-12:00', '12:00-12:30', '12:30-13:00', '13:00-13:30', '13:30-14:00', '14:00-14:30', '14:30-15:00', '15:00-15:30', '15:30-16:00', '16:00-16:30', '16:30-17:00', '17:00-17:30', '17:30-18:00', '18:00-18:30','18:30-19:00', '19:00-19:30','19:30-20:00', '20:00-20:30', '20:30-21:00', '21:00-21:30', '22:00-22:30', '22:30-23:00', '23:00-23:30', '23:30-24:00'];
       if(result[0]) {
       for(var i=0; i<result.length; i++) {
          if(result[i].TableType === 'Pool Table 1') {
            var index = timesP1.indexOf(result[i].TableTime);
            timesP1.splice(index, 1);
          }
          else if(result[i].TableType === 'Pool Table 2') {
            index = timesP2.indexOf(result[i].TableTime);
            timesP2.splice(index, 1);
          }
          else if(result[i].TableType === 'Snooker Table 1') {
            index = timesS1.indexOf(result[i].TableTime);
            timesS1.splice(index, 1);
          }
          else if(result[i].TableType === 'Snooker Table 2') {
            index = timesS2.indexOf(result[i].TableTime);
            timesS2.splice(index, 1);
          }
          else if(result[i].TableType === 'Snooker Table 3') {
            index = timesS3.indexOf(result[i].TableTime);
            timesS3.splice(index, 1);
          }
          else if(result[i].TableType === 'Snooker Table 4') {
            var index = timesS4.indexOf(result[i].TableTime);
            timesS4.splice(index, 1);
          }
          else if(result[i].TableType === 'Snooker Table 5') {
            var index = timesS5.indexOf(result[i].TableTime);
            timesS5.splice(index, 1);
          }
       }
    } 
    timesP1 = timesP1.map(function(value){
      return <li style={{backgroundColor:'white', color:'black', width:'80px', paddingBottom:'2px', marginBottom:'5px', borderRadius:'8px',paddingLeft:'3px'}}> {value} </li>;
    });

    timesP2 = timesP2.map(function(value){
      return <li style={{backgroundColor:'white', color:'black', width:'80px', paddingBottom:'2px', marginBottom:'5px', borderRadius:'8px',paddingLeft:'3px'}}> {value} </li>;
    });

    timesS1 = timesS1.map(function(value){
      return <li style={{backgroundColor:'white', color:'black', width:'80px', paddingBottom:'2px', marginBottom:'5px', borderRadius:'8px',paddingLeft:'3px'}}> {value} </li>;
    });

    timesS2 = timesS2.map(function(value){
      return <li style={{backgroundColor:'white', color:'black', width:'80px', paddingBottom:'2px', marginBottom:'5px', borderRadius:'8px',paddingLeft:'3px'}}> {value} </li>;
    });

    timesS3 = timesS3.map(function(value){
      return <li style={{backgroundColor:'white', color:'black', width:'80px', paddingBottom:'2px', marginBottom:'5px', borderRadius:'8px',paddingLeft:'3px'}}> {value} </li>;
    });
    timesS4 = timesS4.map(function(value){
      return <li style={{backgroundColor:'white', color:'black', width:'80px', paddingBottom:'2px', marginBottom:'5px', borderRadius:'8px',paddingLeft:'3px'}}> {value} </li>;
    });
    timesS5 = timesS5.map(function(value){
      return <li style={{backgroundColor:'white', color:'black', width:'80px', paddingBottom:'2px', marginBottom:'5px', borderRadius:'8px',paddingLeft:'3px'}}> {value} </li>;
    });
  
    return(
        
        <Grid style = {sectionStyle}>
        <Row style={{paddingLeft:'40px', paddingBottom:'40px'}}>
        <Col className='half' sm={2} xs={5}>
          <Card body outline color="primary">
        <CardBody >
          <CardTitle><h2>Pool Table 1</h2></CardTitle>
          <CardSubtitle style={{padding: '5px'}}><h4>Tables Vacant</h4></CardSubtitle>
          <CardText><ul>{timesP1}</ul></CardText>
        </CardBody>
        </Card>    
        </Col>
       
        <Col className='half' sm={2} xs={5}>
          <Card body outline color="primary">
        <CardBody >
          <CardTitle><h2>Pool Table 2</h2></CardTitle>
          <CardSubtitle style={{padding: '5px'}}><h4>Tables Vacant</h4></CardSubtitle>
          <CardText><ul>{timesP2}</ul></CardText>
          
        </CardBody>
      </Card>

          </Col>
        </Row>
        <Row style={{paddingLeft:'40px', paddingBottom:'40px'}}>
          <Col className='half' sm={2} xs={5} >
          <Card body outline color="primary">
        <CardBody >
          <CardTitle><h2>Snooker Table 1</h2></CardTitle>
          <CardSubtitle style={{padding: '5px'}}><h4>Tables Vacant</h4></CardSubtitle>
          <CardText><ul>{timesS1}</ul></CardText>
          
        </CardBody>
      </Card>
          </Col>
          
          <Col className='half' sm={2} xs={5} >
          <Card body outline color="primary">
        <CardBody >
          <CardTitle><h2>Snooker Table 2</h2></CardTitle>
          <CardSubtitle style={{padding: '5px'}}><h4>Tables Vacant</h4></CardSubtitle>
          <CardText><ul>{timesS2}</ul></CardText>
          
        </CardBody>
      </Card>
            
          </Col>
          
          <Col className='half' sm={2} xs={5}>
          <Card body outline color="primary">
        <CardBody >
          <CardTitle><h2>Snooker Table 3</h2></CardTitle>
          <CardSubtitle style={{padding: '5px'}}><h4>Tables Vacant</h4></CardSubtitle>
          <CardText><ul>{timesS3}</ul></CardText>
          
        </CardBody>
      </Card>
          </Col>

          <Col className='half' sm={2} xs={5}>
          <Card body outline color="primary">
        <CardBody >
          <CardTitle><h2>Snooker Table 4</h2></CardTitle>
          <CardSubtitle style={{padding: '5px'}}><h4>Tables Vacant</h4></CardSubtitle>
          <CardText><ul>{timesS4}</ul></CardText>
          
        </CardBody>
      </Card>
          </Col>

          <Col className='half' sm={2} xs={5}>
          <Card body outline color="primary">
        <CardBody >
          <CardTitle><h2>Snooker Table 5</h2></CardTitle>
          <CardSubtitle style={{padding: '5px'}}><h4>Tables Vacant</h4></CardSubtitle>
          <CardText><ul>{timesS5}</ul></CardText>
          
        </CardBody>
      </Card>
          </Col>
          </Row>  
    </Grid>        
    );
  }
}

export default TableBookingStatus; 