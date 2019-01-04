import React, { Component } from 'react';
import NavbarHeader from './navbarhead';
import Timeslots from './Timeslots';
import './App.css';
class App extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      list: []
    }
  }

 /* componentDidMount() {
    this.getList();
  }

  getList = () => {
    fetch('/purchase')
    .then(res => res.json())
    .then(list => this.setState({ list }))
  }*/


  render() {
    const { list } = this.state; 
    return (
        <div className="App">
          <NavbarHeader />
          <Timeslots />
          <div>
            {JSON.stringify( list.id )}
          </div>
          
        </div>
    )
  }
}

export default App;
