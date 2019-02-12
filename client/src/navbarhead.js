import React, { Component } from 'react';
import {
  Navbar, Nav,NavDropdown,MenuItem
} from 'react-bootstrap';
import Background from './output-0.jpg';
var navstyle = {
  color:'white'
}
class NavbarHeader extends Component {
  render() {
    return (
    <Navbar inverse fixed='top' style = {{ width: '100%', background: 'none'}} >
      <Navbar.Header>
        <Navbar.Brand>
        <a href="/" style={navstyle}><img src={Background} alt='stuc logo' href='/' style={{width:80, marginTop: -7, height:50}} /></a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav pullRight>
          <NavDropdown eventKey={3} title="Livestream" id="basic-nav-dropdown">
            <MenuItem eventKey={3.1} href="/foosballstream">Foosball</MenuItem>
            <MenuItem eventKey={3.2} href="/chessstream">Chess</MenuItem>
            <MenuItem eventKey={3.3} href="/snookerstream">Snooker</MenuItem>
            <MenuItem eventKey={3.4} href="/poolstream">Pool</MenuItem>
            <MenuItem eventKey={3.5} href="/carromstream">Carrom</MenuItem>
          </NavDropdown>
          <NavDropdown eventKey={4} title="BookingPortal" id="basic-nav-dropdown">
            <MenuItem eventKey={4.2} href="/portal">Pool and Snooker Table Booking</MenuItem>
            <MenuItem eventKey={4.2} href="/psbooking">Playstation Booking</MenuItem>
          </NavDropdown>
          <NavDropdown eventKey={5} title="Booking Status" id="basic-nav-dropdown">
            <MenuItem eventKey={5.1} href="/tablestatus">Table Booking Status</MenuItem>
            <MenuItem eventKey={5.2} href="/psstatus">Playstation Booking Status</MenuItem>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    );
  }
}

export default NavbarHeader;