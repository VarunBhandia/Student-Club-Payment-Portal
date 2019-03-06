import React, { Component } from 'react';

import Login from './AdminTimeslots';
import './App.css';

class LoginAdmin extends Component {
    constructor(props, context) {
        super(props, context);
    
        this.handleChange = this.handleChange.bind(this);
        
        this.state = {
          pass : ''
        };
      }
  
      handleChange = (e) => {
        let newState = {}
       
        newState[e.target.name] = e.target.value
       
        this.setState(newState)
       }

       onSubmit = (event) => {
        event.preventDefault();
        fetch('/admin', {
          method: 'POST',
          body: JSON.stringify(this.state),
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .then(res => {
          if (res.status === 200) {
            this.props.history.push('/finaladmin');
          } else {
            const error = new Error(res.error);
            throw error;
          }
        })
        .catch(err => {
          console.error(err);
          alert('Error logging in please try again');
        });
      }
    
    render() { 
        return (
            <div className ='container'>
            <form onSubmit={this.onSubmit}>
            <fieldset className='form-group'>
                <label htmlFor='formName' title='Enter Admin Pass' style={{color: 'white'}}> Admin Pass </label>    
                <input id='AdminCheck' className='form-input' name='pass' type='password' required onChange={this.handleChange} value={this.state.pass} />
            </fieldset>
            <div className='form-group'>
              <input id='formButton' className='btn' type='submit' placeholder='Submit'/>
            </div>
            </form>
            </div>
        )
    }
}

export default LoginAdmin;
