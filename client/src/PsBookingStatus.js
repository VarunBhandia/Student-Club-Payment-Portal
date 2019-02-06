import React, { Component } from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardGroup,
    CardSubtitle, CardBody } from 'reactstrap';
    import { 
      Row,
      Col,
      Grid
    } from 'react-bootstrap';
import './App.css';
import Background from './playstation.jpg';
var sectionStyle = {
backgroundImage: `url(${Background})`,
  width: "100%",
  height: '100%',
  marginLeft: '-15px',
  marginTop: '-20px',
  marginLeft: '-20px',
  paddingTop: '100px',
  paddingLeft: '200px',
  paddingBottom: '408px',
  paddingRight:'1725px',
};

class PSBookingStatus extends Component {
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
       
       
       for (var i = 0; i < result.length; i++) {
            if(result[i].TableType === 'Playstation 1') {
                timesP1[i] = result[i].TableTime;
            }
            if(result[i].TableType === 'Playstation 2') {
                timesP2[i] = result[i].TableTime;
            }
            
       }
       timesP1 = timesP1.map(function(value){
        return <li> {value} </li>;
      });

      timesP2 = timesP2.map(function(value){
        return <li> {value} </li>;
      });
    } 
    
    return(
        <div  >
        <Grid style = {sectionStyle}>
         <Row>
          <Col md="auto">
         <Card body outline color="primary">
          <CardBody style={{color:'white', width: '200px', height:'40%', padding: '20px'}}>
          <CardTitle ><h2>Playstation 1</h2></CardTitle>
          <CardSubtitle style={{padding: '5px'}}><h4>Bookings made</h4></CardSubtitle>
          <CardText><ul>{timesP1}</ul></CardText>
          </CardBody>
        </Card>        
        </Col>

          <Col>
          <Card body outline color="primary">
        <CardBody style={{color:'white', width: '200px', height:'40%', padding: '20px'}}>
          <CardTitle><h2>Playstation 2</h2></CardTitle>
          <CardSubtitle style={{padding: '5px'}}><h4>Bookings made</h4></CardSubtitle>
          <CardText><ul>{timesP2}</ul></CardText>
          
        </CardBody>
      </Card>
          </Col>  
          </Row>
    </Grid>        
    </div>
    );
  }
}

export default PSBookingStatus; 