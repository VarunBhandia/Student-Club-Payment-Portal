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
    var entries = [];
       if(result[0]) {
       for(var i=0; i<result.length; i++) {
           var arr = [result[i].BookingEmail,result[i].BookingContact, result[i].TableId, result[i].PaymentId];
        entries.push(arr);
       }
    } 

    entries = entries.map(function(rows){
        var row =  rows.map(cell => <td>{cell}</td>
        );
        return <tr>{row}</tr>;
      });
    return(
      
        <Table responsive variant="dark">
            <thead>
                <tr>
                <th>Email</th>
                <th>Contact Number</th>
                <th>Table</th> 
                <th>PaymentID</th>
                </tr>
            </thead>
            <tbody>
                {entries}
            </tbody>
        </Table>
           
    );
  }
}

export default BookingHistory; 