import React, { Component } from 'react';
import {
  Nav,
  NavDropdown,
  MenuItem,
  Navbar,
  NavbarBrand,
  NavbarNav,
  NavbarToggler,
  Collapse,
  NavItem,
  Footer,
  NavLink,
} from 'react-bootstrap';
class NavbarHeader extends Component {
  render() {
    return (
      <div className="navbar">  
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#brand">Student's Club</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
        </Navbar>     
      </div>
    );
  }
}

export default NavbarHeader;