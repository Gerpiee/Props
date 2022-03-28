import React, { Component } from 'react';
import Navbar from './components/Navbar.js';
import User from './components/User.js';

import './App.css';

class App extends Component {
  render(){
    return (
      <div className='container'>
       
       <Navbar title='User App'/> {/*Normalde navbarın yanına bir string değerinde bir title atıyorum... */}
       <hr />
       <User
        name = "Garip"
        lastName="Aksoy"
        age = "22"

       />
       <hr />
        <User
        name = "Ron"
        lastName="Doe"
        age = "36"

       />
          <User
       
       />
        
      </div>
    )
  }
}

export default App;
