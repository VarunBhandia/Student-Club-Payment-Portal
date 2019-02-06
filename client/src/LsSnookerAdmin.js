import React, { Component } from 'react';

class LsSnooker extends React.Component {
    constructor(props, context) {
      super(props, context);
  
      this.handleChange = this.handleChange.bind(this);
      this.handlePostReq = this.handlePostReq.bind(this);
  
      this.state = {
        player1 : '',
        player2 : '',
        player3 : '',
        player4 : '',
        link : ''
      };
    }

    handlePostReq() {
      // eslint-disable-next-line
      var val = this.state;
      console.log(val); 
      fetch('/lssnooker', {
        method: 'POST',
        body: JSON.stringify({
          value: val
        }),
        headers: {
          "Content-Type": "application/json"
      },
       }).then((res) => res.json())
       .then((data) =>  console.log(data))
       .catch((err)=>console.log(err));
    }
  
  
    handleChange = (e) => {
      let newState = {}
     
      newState[e.target.name] = e.target.value
     
      this.setState(newState)
     }
  
    render() {
      return (
        <div className="container">
        <h2>Snooker Players</h2>
        <form onSubmit={this.handlePostReq}>     
            <fieldset className='form-group'>
            <label htmlFor='formName' title='Player 1 Name: '> Player 1 Name</label>    
            <input id='Player1Name' className='form-input' name='player1' type='text' required onChange={this.handleChange} value={this.state.player1} />
            </fieldset>
            
            <fieldset className='form-group'>
            <label htmlFor='formEmail' title='Player 2 Name: '>Player 2 Name</label> 
            <input id='Player2Name' className='form-input' name='player2' type='text' required onChange={this.handleChange} value={this.state.player2} />
            </fieldset>
            
            <fieldset className='form-group'>
            <label htmlFor='formEmail' title='Player 3 Name' >Player 3 Name</label>
            <input id='Player3Name' className='form-input' name='player3' type='text' required onChange={this.handleChange} value={this.state.player3} />
            </fieldset>
            
            <fieldset className='form-group'>
            <label htmlFor='formEmail' title='Player 4 Name' >Player 4 Name</label>
            <input id='Player4Name' className='form-input' name='player4' type='text' required onChange={this.handleChange} value={this.state.player4} />
            </fieldset>
            
            <fieldset className='form-group'>
            <label htmlFor='formEmail' title='link' >Link</label>
            <input id='link' className='form-input' name='link' type='text' required onChange={this.handleChange} value={this.state.link} />
            </fieldset>
            
            <div className='form-group'>
              <input id='formButton' className='btn' type='submit' placeholder='Submit' />
            </div>
        </form>
      </div>
      );
    }
  }
  
export default LsSnooker;
