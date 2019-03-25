import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
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
      loading: true,
      redirect: false,
      }
  }

  componentWillMount() {
    this.getList();
    this.getToken();
  }

  getList = () => {
    fetch("/bookhist")
    .then(res => res.json())
    .then(result => this.setState({ result }))
  }

  getToken = () => {
    fetch('/checkToken')
    .then(res => {
      if (res.status === 200) {
        this.setState({ loading: false });
      } else {
        const error = new Error(res.error);
        throw error;
      }
    })
    .catch(err => {
      console.error(err);
      this.setState({ loading: false, redirect: true });
    });
  }

  render() {
    const { result } = this.state;
    const { loading, redirect } = this.state;
    if (loading) {
      return null;
    }
    if (redirect) {
      return <Redirect to="/admin2019" />;
    }

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
      
        <Table responsive style={{color: 'white'}}>
            <thead >
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