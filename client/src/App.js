import React, { Component } from 'react';
import NavbarHeader from './navbarhead';
import Timeslots from './Timeslots';
import LsFoosball from './LsFoosballAdmin.js';
import LoginAdmin from './LoginAdmin';
import Foosball from './LsFoosballFront';
import LsCarrom from './LsCarromAdmin';
import Carrom from './LsCarromFront';
import LsChess from './LsChessAdmin';
import Chess from './LsChessFront';
import LsPool from './LsPoolAdmin';
import Pool from './LsPoolFront';
import LsSnooker from './LsSnookerAdmin';
import Snooker from './LsSnookerFront';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import './App.css';
class App extends Component {
  render() { 
    return (
        <Router>
          <div className="App">
          <NavbarHeader />
          <Route exact path="/" render={props => (
            <React.Fragment>
              <Timeslots />
              <div className="alert"> 
                Please note that you cannot book more than 3 tables in a day. 
                In case of any discrepancy or amount deducted but table not being assigned, please report the incident to Student's Club. Refund will be initiated accordingly in about 14 days.
              </div>
            </React.Fragment>
          )}>
          </Route> 
        <Route path="/admin" component={LoginAdmin}/>
        <Route path="/lsfoosball" component={LsFoosball}/>
        <Route path="/foosballstream" component={Foosball}/>  
        <Route path="/lscarrom" component={LsCarrom}/>  
        <Route path="/carromstream" component={Carrom}/> 
        <Route path="/lschess" component={LsChess}/>
        <Route path="/chessstream" component={Chess}/>   
        <Route path="/lspool" component={LsPool}/>  
        <Route path="/poolstream" component={Pool}/> 
        <Route path="/lssnooker" component={LsSnooker}/>
        <Route path="/snookerstream" component={Snooker}/>         
        </div>
        </Router>
    )
  }
}

export default App;
