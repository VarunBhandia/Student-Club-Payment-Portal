import React, { Component } from 'react';
import {
  Navbar, NavItem,Nav,NavDropdown,MenuItem
} from 'react-bootstrap';

var navstyle = {
  color:'white'
}
class NavbarHeader extends Component {
  render() {
    return (
    <Navbar inverse fixed='top' style = {{background: 'transparent', width: '100%'}} >
      <Navbar.Header>
        <Navbar.Brand>
        <a href="/" style={navstyle}>Student's Club</a>
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
            <MenuItem eventKey={4.1} href="/admin">Admin Login</MenuItem>
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