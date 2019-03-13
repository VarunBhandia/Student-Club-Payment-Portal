import React, { Component } from 'react';
import { Card, CardTitle, CardText,
    CardSubtitle, CardBody } from 'reactstrap';
    import { 
      Table,
      Col,
      
    } from 'react-bootstrap';
import './App.css';

// var sectionStyle = {
//   width: "100%",
//   height: '100%',
//   paddingBottom:'200px',
//   color:'white',
//   overflowX: 'hidden',
//   fontFamily: 'Average',
// };


class BookingHistory extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      result: [],
      }
  }

  componentWillMount() {
    this.getList();
  }

  getList = () => {
    fetch("/bookhist")
    .then(res => res.json())
    .then(result => this.setState({ result }))
  }

  render() {
    const { result } = this.state;
    var names = [];
    var tables = [];
    var contact = [];
    var paymentIDs = [];
       if(result[0]) {
       for(var i=0; i<result.length; i++) {
        names.push(result[i].BookingEmail);
        tables.push(result[i].TableId);
        contact.push(result[i].BookingContact);
        paymentIDs.push(result[i].PaymentId);
       }
    } 
    names = names.map(function(value){
        
      return <tr>
          <td>{value}</td>
          </tr>;
    });
    tables = tables.map(function(value){
        
      return <tr>
          <td>{value}</td>
          </tr>;
    });
    
    contact = tables.map(function(value){
        
        return <tr>
            <td>{value}</td>
            </tr>;
    });

    paymentIDs = tables.map(function(value){
        
        return <tr>
            <td>{value}</td>
            </tr>;
    });
    return(
      
        <Table striped bordered hover>
            <thead>
                <tr>
                <th>Email</th>
                <th>Contact Number</th>
                <th>Table</th> 
                <th>PaymentID</th>
                
                </tr>
            </thead>
            <tbody>
                {names}
                
            </tbody>
        </Table>
           
    );
  }
}

export default BookingHistory; 