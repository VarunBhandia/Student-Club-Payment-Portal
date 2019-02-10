import React, { Component } from 'react';
import {
  Grid,
  Row,
  Col
} from 'react-bootstrap';
import './App.css';
import Select from 'react-select';



const PT1options = []

// declaring variable for 
class TableBooking extends Component {
  constructor(props, context) {
    super(props, context);
    this.handlePopoverList = this.handlePopoverList.bind(this);
    this.state = {
        popoverlist : [{'p1': "Available", 'p2': "Available", 's1' : "Available", 's2' : "Available" , 's3' : "Available"},
        {'p1': "Available", 'p2': "Available", 's1' : "Available", 's2' : "Available" , 's3' : "Available"},
        {'p1': "Available", 'p2': "Available", 's1' : "Available", 's2' : "Available" , 's3' : "Available"},
        {'p1': "Available", 'p2': "Available", 's1' : "Available", 's2' : "Available" , 's3' : "Available"},
        {'p1': "Available", 'p2': "Available", 's1' : "Available", 's2' : "Available" , 's3' : "Available"},
        {'p1': "Available", 'p2': "Available", 's1' : "Available", 's2' : "Available" , 's3' : "Available"},
        {'p1': "Available", 'p2': "Available", 's1' : "Available", 's2' : "Available" , 's3' : "Available"},
        {'p1': "Available", 'p2': "Available", 's1' : "Available", 's2' : "Available" , 's3' : "Available"},
        {'p1': "Available", 'p2': "Available", 's1' : "Available", 's2' : "Available" , 's3' : "Available"},
        {'p1': "Available", 'p2': "Available", 's1' : "Available", 's2' : "Available" , 's3' : "Available"},
        {'p1': "Available", 'p2': "Available", 's1' : "Available", 's2' : "Available" , 's3' : "Available"},
        {'p1': "Available", 'p2': "Available", 's1' : "Available", 's2' : "Available" , 's3' : "Available"},
        {'p1': "Available", 'p2': "Available", 's1' : "Available", 's2' : "Available" , 's3' : "Available"},
        {'p1': "Available", 'p2': "Available", 's1' : "Available", 's2' : "Available" , 's3' : "Available"},
        {'p1': "Available", 'p2': "Available", 's1' : "Available", 's2' : "Available" , 's3' : "Available"},
        {'p1': "Available", 'p2': "Available", 's1' : "Available", 's2' : "Available" , 's3' : "Available"},
        {'p1': "Available", 'p2': "Available", 's1' : "Available", 's2' : "Available" , 's3' : "Available"},
        {'p1': "Available", 'p2': "Available", 's1' : "Available", 's2' : "Available" , 's3' : "Available"},
        {'p1': "Available", 'p2': "Available", 's1' : "Available", 's2' : "Available" , 's3' : "Available"},
        {'p1': "Available", 'p2': "Available", 's1' : "Available", 's2' : "Available" , 's3' : "Available"},
        {'p1': "Available", 'p2': "Available", 's1' : "Available", 's2' : "Available" , 's3' : "Available"},
        {'p1': "Available", 'p2': "Available", 's1' : "Available", 's2' : "Available" , 's3' : "Available"},
        {'p1': "Available", 'p2': "Available", 's1' : "Available", 's2' : "Available" , 's3' : "Available"},
        {'p1': "Available", 'p2': "Available", 's1' : "Available", 's2' : "Available" , 's3' : "Available"},
        {'p1': "Available", 'p2': "Available", 's1' : "Available", 's2' : "Available" , 's3' : "Available"},
        {'p1': "Available", 'p2': "Available", 's1' : "Available", 's2' : "Available" , 's3' : "Available"},
        {'p1': "Available", 'p2': "Available", 's1' : "Available", 's2' : "Available" , 's3' : "Available"},
        {'p1': "Available", 'p2': "Available", 's1' : "Available", 's2' : "Available" , 's3' : "Available"}                    
       ],
       time : ['10:00-10:30', '10:30-11:00', '11:00-11:30', '11:30-12:00', '12:00-12:30', '12:30-13:00', '13:00-13:30', '13:30-14:00', '14:00-14:30', '14:30-15:00', '15:00-15:30', '15:30-16:00', '16:00-16:30', '16:30-17:00', '17:00-17:30', '17:30-18:00', '18:00-18:30', '19:00-19:30','19:30-20:00', '20:00-20:30', '20:30-21:00', '21:00-21:30', '22:00-22:30', '22:30-23:00', '23:00-23:30', '23:30-24:00'],
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

  handlePopoverList = () => {
    const newList = this.state.popoverlist.slice();
    const {result} = this.state;
    console.log(result);
    if(result[0]) {
      for (var i=0; i < result.length; i++) {
        if(result[i].TableType === 'Pool Table 1') {
          PT1options.push(result[i].TableTime);
        }
      }
      this.setState({popoverlist : newList});
    }
  }
  
  

  render() {
    const { result } = this.state;
    if(result === null) {
      return <div />
    }
    if(result) {
    } 
    return (
    <Grid>
    <Row>
    <Col sm={2}>
    <Select
        isMulti
        name="colors"
        options = {PT1options}
        className="basic-multi-select"
        classNamePrefix="select"
        
    />
    </Col>
    <Col sm={2}>2 of 2</Col> 
  </Row>
    </Grid>
      
    );
  }
}

export default TableBooking; 