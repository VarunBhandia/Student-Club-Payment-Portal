import React, { Component } from 'react';
import {
  Navbar
} from 'react-bootstrap';
class NavbarHeader extends Component {
  render() {
    return (
      <Navbar inverse>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#home">Student's Club</a>
          </Navbar.Brand>
        </Navbar.Header>
      </Navbar>
    );
  }
}

export default NavbarHeader;