import React, { Component } from 'react';
import NavbarHeader from './navbarhead';
import Timeslots from './Timeslots';
import LsFoosball from './LsFoosballAdmin';
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
              <p1 className='Note'>
             <br></br> Please note that you cannot book more than 3 tables in a day. If you do so, your amount will be deducted but you will not get that table. Refund will be processed in 14 days at Student's Club. 
              </p1>
            </React.Fragment>
          )}>
          </Route> 
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
