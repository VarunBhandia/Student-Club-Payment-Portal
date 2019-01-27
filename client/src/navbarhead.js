import React, { Component } from 'react';
import {
  Navbar, NavItem,Nav
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
          <NavItem eventKey={2} href="/adminlogin">
            Login As Admin             
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    );
  }
}

export default NavbarHeader;