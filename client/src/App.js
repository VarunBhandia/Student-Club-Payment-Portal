import React, { Component } from 'react';
import NavbarHeader from './navbarhead';
import Timeslots from './Timeslots';
import LsFoosball from './LsFoosballAdmin';
import Foosball from './LsFoosballFront';
import LsCarrom from './Lscarrom';
import LsChess from './Lschess';
import LsPool from './Lspool';
import LsSnooker from './Lssnooker';
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
        <Route path="/lschess" component={LsChess}/>  
        <Route path="/lspool" component={LsPool}/>  
        <Route path="/lssnooker" component={LsSnooker}/>        
        </div>
        </Router>
    )
  }
}

export default App;
