import React, { Component } from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardGroup,
    CardSubtitle, CardBody } from 'reactstrap';
    import { 
      Row,
      Col,
      Grid
    } from 'react-bootstrap';
import './App.css';

class TableBookingStatus extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      result: [] 
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
    if(result[0]) {
       var timesP1 = [];
       var timesP2 = [];
       var timesS1 = [];
       var timesS2 = [];
       var timesS3 = [];
       
       for (var i = 0; i < result.length; i++) {
            if(result[i].TableType === 'Pool Table 1') {
                timesP1[i] = result[i].TableTime;
            }
            if(result[i].TableType === 'Pool Table 2') {
                timesP2[i] = result[i].TableTime;
            }
            if(result[i].TableType === 'Snooker Table 1') {
                timesS1[i] = result[i].TableTime;
            }
            if(result[i].TableType === 'Snooker Table 2') {
                timesS2[i] = result[i].TableTime;
            }
            if(result[i].TableType === 'Snooker Table 3') {
                timesS3[i] = result[i].TableTime;
            }
       }
       timesP1 = timesP1.map(function(value){
        return <li> {value} </li>;
      });

      timesP2 = timesP2.map(function(value){
        return <li> {value} </li>;
      });

      timesS1 = timesS1.map(function(value){
        return <li> {value} </li>;
      });

      timesS2 = timesS2.map(function(value){
        return <li> {value} </li>;
      });

      timesS3 = timesS3.map(function(value){
        return <li> {value} </li>;
      });
    } 
    
    return(
        
        <Grid>
         <Row>
          <Col md="auto">
         <Card body outline color="primary">
          <CardBody style={{color:'white', width: '20%', height:'40%', padding: '20px'}}>
          <CardTitle><h2>Pool Table 1</h2></CardTitle>
          <CardSubtitle style={{padding: '5px'}}><h4>Bookings made</h4></CardSubtitle>
          <CardText><ul>{timesP1}</ul></CardText>
          </CardBody>
        </Card>        
        </Col>

          <Col>
          <Card body outline color="primary">
        <CardBody style={{color:'white', width: '20%', height:'40%', padding: '20px'}}>
          <CardTitle><h2>Pool Table 2</h2></CardTitle>
          <CardSubtitle style={{padding: '5px'}}><h4>Bookings made</h4></CardSubtitle>
          <CardText><ul>{timesP2}</ul></CardText>
          
        </CardBody>
      </Card>

          </Col>

          <Col>
          <Card body outline color="primary">
        <CardBody style={{color:'white', width: '20%', height:'40%', padding: '20px'}}>
          <CardTitle><h2>Snooker Table 1</h2></CardTitle>
          <CardSubtitle style={{padding: '5px'}}><h4>Bookings made</h4></CardSubtitle>
          <CardText><ul>{timesS1}</ul></CardText>
          
        </CardBody>
      </Card>

          </Col>

          <Col>
          <Card body outline color="primary">
        <CardBody style={{color:'white', width: '20%', height:'40%', padding: '20px'}}>
          <CardTitle><h2>Snooker Table 2</h2></CardTitle>
          <CardSubtitle style={{padding: '5px'}}><h4>Bookings made</h4></CardSubtitle>
          <CardText><ul>{timesS2}</ul></CardText>
          
        </CardBody>
      </Card>
            
          </Col>

          <Col>
          <Card body outline color="primary">
        <CardBody style={{color:'white', width: '20%', height:'40%', padding: '20px'}}>
          <CardTitle><h2>Snooker Table 3</h2></CardTitle>
          <CardSubtitle style={{padding: '5px'}}><h4>Bookings made</h4></CardSubtitle>
          <CardText><ul>{timesS3}</ul></CardText>
          
        </CardBody>
      </Card>
          </Col>  
          </Row>
        
    
    </Grid>        
    );
  }
}

export default TableBookingStatus; 