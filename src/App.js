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
        </div>
    )
  }
}

export default App;
