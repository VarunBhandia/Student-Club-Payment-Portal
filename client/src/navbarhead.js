import React, { Component } from 'react';
import {
  Navbar, NavItem,Nav,NavDropdown,MenuItem
} from 'react-bootstrap';
class NavbarHeader extends Component {
  render() {
    return (
    <Navbar inverse >
      <Navbar.Header>
        <Navbar.Brand>
        <a href="/">Student's Club</a>
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
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    );
  }
}

export default NavbarHeader;