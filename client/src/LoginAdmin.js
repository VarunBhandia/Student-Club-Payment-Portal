import React, { Component } from 'react';

import Login from './AdminTimeslots';
import './App.css';

class LoginAdmin extends Component {
    constructor(props, context) {
        super(props, context);
    
        this.handleChange = this.handleChange.bind(this);
        
        this.state = {
          pass : '',
          result : ''
        };
      }
    
      componentDidMount() {
        this.getList();
      }
    
      getList = () => {
        
        fetch("/admin", {method : 'POST'})
        .then(res => res.json())
        .then(result => this.setState({ result }))
      }
    
    handleChange = (e) => {
        let newState = {}
       
        newState[e.target.name] = e.target.value
       
        this.setState(newState)
       }
    
    render() { 
        const {result} = this.state;
        var admin;
        if(this.state.pass === result){
            admin = <Login />
        }

        return (
            <div className ='container'>
            <form>
            <fieldset className='form-group'>
                <label htmlFor='formName' title='Enter Admin Pass' style={{color: 'white'}}> Admin Pass </label>    
                <input id='AdminCheck' className='form-input' name='pass' type='password' required onChange={this.handleChange} value={this.state.pass} />
            </fieldset>
            
            </form>

            {admin}
            </div>
        )
    }
}

export default LoginAdmin;
