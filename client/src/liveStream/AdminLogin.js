import React, { Component } from 'react';
import {FormGroup,FormControl} from 'react-bootstrap'; 
import './AdminLogin.css'
export class AdminLogin extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleName = this.handleName.bind(this);
    this.handlePass = this.handlePass.bind(this);

    this.state = {
      adminname: '',
      adminpass:''

    };
  }

  handleName(e) {
    this.setState({ adminname: e.target.username });
  }
  handlePass(e) {
    this.setState({ adminpass: e.target.password });
  }

  render() {
    return (
      <form>
        
        <FormGroup
          className="main_form"
          controlId="formBasicText"
        >
          <h1 className="loginheader">ADMIN LOGIN</h1>
          <FormControl
            className="formfields"
            type="text"
            value={this.state.username}
            placeholder="Enter Username"
            onChange={this.handleName}
          />
          <FormControl.Feedback />
        </FormGroup>

        <FormGroup
          className="main_form"
          controlId="formBasicText1"
        >
          <FormControl
            className="formfields"
            type="password" 
            value={this.state.password}
            placeholder="Enter Password"
            onChange={this.handlePass}
          />
          <FormControl.Feedback />
        </FormGroup>
      </form>
    );
  }
}

export default AdminLogin 
