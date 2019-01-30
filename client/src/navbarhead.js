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
          <NavItem eventKey={1} href="#">
            Stream Live                      
          </NavItem>
          <NavDropdown eventKey={3} title="Livestream" id="basic-nav-dropdown">
            <MenuItem eventKey={3.1} href="/foosballstream">Foosball</MenuItem>
            <MenuItem eventKey={3.2} href="/lschess">Chess</MenuItem>
            <MenuItem eventKey={3.3} href="/lssnooker">Snooker</MenuItem>
            <MenuItem eventKey={3.4} href="/lspool">Pool</MenuItem>
            <MenuItem eventKey={3.2} href="/lscarrom">Carrom</MenuItem>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    );
  }
}

export default NavbarHeader;