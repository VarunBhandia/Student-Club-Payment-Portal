import React, { Component } from "react";
import Iframe from 'react-iframe'
import './App.css';
class Pool extends Component {
    constructor(props, context) {
        super(props, context);
    
        this.state = {
          result: []
        };
    }
    
      componentDidMount() {
        this.getList();
      }
    
      getList = () => {  
        fetch("/poolstream", {method : 'POST'})
        .then(res => res.json())
        .then(result => this.setState({ result }))
      }
    
  render() {
    const { result } = this.state;
    if(result[0])
    {
        var p1 = result[0].Player1;
        var p2 = result[0].Player2;
        var p3 = result[0].Player3;
        var p4 = result[0].Player4;
        var link = result[0].Link;
    }
    return (
        <div className='container'>
          <h1 className='head'>Pool Live Stream</h1>
          <ul className="header">
            <li>Player 1 : {p1}</li>
            <li>Player 2 : {p2}</li>
            <li>Player 3 : {p3}</li>
            <li>Player 4 : {p4}</li>
          </ul>
          <Iframe url={link}
            width="560px"
            height="315px"
            id="myId"
            className="myClassname"
            display="initial"
            position="relative"
            allowFullScreen/>
        </div>
    );
  }
}
 
export default Pool;