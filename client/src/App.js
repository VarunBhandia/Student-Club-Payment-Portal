/* eslint-disable */
import React, { Component } from "react";
import NavbarHeader from "./navbarhead";
import AdminTimeslots from "./AdminTimeslots";
import Timeslots from "./Timeslots";
import LsFoosball from "./LsFoosballAdmin.js";
import LoginAdmin from "./LoginAdmin";
import Foosball from "./LsFoosballFront";
import LsCarrom from "./LsCarromAdmin";
import Carrom from "./LsCarromFront";
import LsChess from "./LsChessAdmin";
import Chess from "./LsChessFront";
import LsPool from "./LsPoolAdmin";
import Pool from "./LsPoolFront";
import LsSnooker from "./LsSnookerAdmin";
import Snooker from "./LsSnookerFront";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Background from "./snooker.jpg";
import TableBookingStatus from "./TableBookingStatus";
import BookingHistory from "./BookingHistory";
import TableBooking from "./NewBooking";
import PSBookingStatus from "./PsBookingStatus";
import PsTimeslots from "./PsTimeslots";
import { Alert, Button } from "react-bootstrap";

var sectionStyle = {
  width: "100%",
  height: "100%",
  backgroundColor: "#0f1012",
  backgroundRepeat: "repeat",
  backgroundSize: "cover",
  top: "0",
  left: "0",
  right: "0",
  bottom: "0",
  minWidth: "100%",
  minHeight: "100%",
  overflowX: "hidden"
};

class App extends Component {
  render() {
    var variant = "danger";
    return (
      <div style={sectionStyle} className="container">
        <Router>
          <div className="App">
            <NavbarHeader />
            <Route
              exact
              path="/portal"
              render={props => (
                <React.Fragment>
                  <br></br>
                  <br></br>
                  <div className="container">
                    <Timeslots />
                    {/* <Alert variant={variant}> 
                1. Please note that you cannot book more than 4 table slots in a day.<br></br> 
                In case of any discrepancy or amount deducted but table not being assigned, please report the incident to Student's Club. Refund will be initiated accordingly in about 14 days.<br></br>
                2. Please wait a few seconds before selecting so that the availability status can be updated.<br></br>
                3. On mobile devices, long press on the time for table availability status.
              </Alert> */}

                    {/* <Alert variant={variant}>
                      <h1>
                        {" "}
                        Will be activated soon after the successful working of
                        first phase of the website!! <br></br> For checking the
                        booking status:{" "}
                        <Button href="http://stuc.iitr.ac.in/tablestatus">
                          click here
                        </Button>{" "}
                      </h1>
                    </Alert> */}
                  </div>
                </React.Fragment>
              )}
            ></Route>
            {/* <Route path="/portal1" component={TableBooking}/> */}
            <Route path="/psstatus" component={PSBookingStatus} />
            <Route path="/psbooking" component={PsTimeslots} />
            <Route path="/tablestatus" component={TableBookingStatus} />
            <Route path="/bookinghistory" component={BookingHistory} />
            <Route path="/admin2019" component={LoginAdmin} />
            <Route path="/finaladmin" component={AdminTimeslots} />
            {/* <Route path="/lsfoosball" component={LsFoosball} />
            <Route path="/foosballstream" component={Foosball} />
            <Route path="/lscarrom" component={LsCarrom} />
            <Route path="/carromstream" component={Carrom} />
            <Route path="/lschess" component={LsChess} />
            <Route path="/chessstream" component={Chess} />
            <Route path="/lspool" component={LsPool} />
            <Route path="/poolstream" component={Pool} />
            <Route path="/lssnooker" component={LsSnooker} />
            <Route path="/snookerstream" component={Snooker} /> */}
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
