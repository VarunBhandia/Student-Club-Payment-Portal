import React, { Component } from 'react';
import NavbarHeader from './navbarhead';
import Timeslots from './Timeslots';
import './App.css';
class App extends Component {
  
  

  render() { 
    return (
        <div className="App">
          <NavbarHeader />
          <Timeslots />
          <p1 className='Note'>
          Please note that you cannot book more than 3 tables in a day. If you do so, your amount will be deducted but you will not get that table. Refund will be processed only if reason is compelling enough.
          </p1>
        </div>
    )
  }
}

export default App;
