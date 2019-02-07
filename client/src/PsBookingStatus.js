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
  paddingTop:'50px',
  paddingLeft:'300px',
  margin:'-20px',
  paddingBottom:'423px',
  position: 'fixed', top: '70px', left: '20px',right: '100px', bottom: '0', minWidth: '100%', minHeight: '100%'
};

class PSBookingStatus extends Component {
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
    const { result} = this.state;
    if(result[0]) {
      var timesP1 = ['10:00-10:30', '10:30-11:00', '11:00-11:30', '11:30-12:00', '12:00-12:30', '12:30-13:00', '13:00-13:30', '13:30-14:00', '14:00-14:30', '14:30-15:00', '15:00-15:30', '15:30-16:00', '16:00-16:30', '16:30-17:00', '17:00-17:30', '17:30-18:00', '18:00-18:30', '19:00-19:30','19:30-20:00', '20:00-20:30', '20:30-21:00', '21:00-21:30', '22:00-22:30', '22:30-23:00', '23:00-23:30', '23:30-24:00'];
      var timesP2 = ['10:00-10:30', '10:30-11:00', '11:00-11:30', '11:30-12:00', '12:00-12:30', '12:30-13:00', '13:00-13:30', '13:30-14:00', '14:00-14:30', '14:30-15:00', '15:00-15:30', '15:30-16:00', '16:00-16:30', '16:30-17:00', '17:00-17:30', '17:30-18:00', '18:00-18:30', '19:00-19:30','19:30-20:00', '20:00-20:30', '20:30-21:00', '21:00-21:30', '22:00-22:30', '22:30-23:00', '23:00-23:30', '23:30-24:00'];

       
       
      for(var i=0; i<result.length; i++) {
        if(result[i].TableType === 'Playstation 1') {
          var index = timesP1.indexOf(result[i].TableTime);
          timesP1.splice(index, 1);
        }
        if(result[i].TableType === 'Playstation 2') {
          var index = timesP2.indexOf(result[i].TableTime);
          timesP2.splice(index, 1);
        }
        
     }
       timesP1 = timesP1.map(function(value){
        return <li style={{backgroundColor:'white', color:'black', width:'80px', paddingBottom:'2px', marginBottom:'5px', borderRadius:'8px',paddingLeft:'3px'}}> {value} </li>;
      });

      timesP2 = timesP2.map(function(value){
        return <li style={{backgroundColor:'white', color:'black', width:'80px', paddingBottom:'2px', marginBottom:'5px', borderRadius:'8px',paddingLeft:'3px'}}> {value} </li>;
      });
    } 
    
    return(
       
        <Grid style = {sectionStyle}>
         <Row >
          <Col className='portal' xs={4} md={1}>
          <Card body outline color="primary">
            <CardBody style={{color:'white', marginRight:'300px', marginLeft:'330px',width:'200px'}}>
            <CardTitle><h2>Playstation 1</h2></CardTitle>
            <CardSubtitle style={{padding: '5px'}}><h4>Vacancies</h4></CardSubtitle>
            <CardText><ul>{timesP1}</ul></CardText>
            </CardBody>
          </Card>
          </Col>

          <Col className='portal' xs={4} md={1} style={{color:'white'}}>
          <Card body outline color="primary">
            <CardBody style={{color:'white', marginLeft:'700px', width:'200px'}}>
            <CardTitle><h2>Playstation 2</h2></CardTitle>
            <CardSubtitle style={{padding: '5px'}}><h4>Vacancies</h4></CardSubtitle>
            <CardText><ul>{timesP1}</ul></CardText>
            </CardBody>
          </Card>
          </Col>
        </Row>
    </Grid>        
    
    );
  }
}

export default PSBookingStatus; 