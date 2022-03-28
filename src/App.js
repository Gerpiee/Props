import React, { Component } from 'react';
import Navbar from './components/Navbar.js';
import User from './components/User.js';
import Tablo from './components/Tablo';
import Card from './components/Card';
import Drawer from './components/Drawer';
import './App.css';


class App extends Component {
  render(){
    return (
      <div className='container'>
       
       <Navbar title='User App'/> {/*Normalde navbarın yanına bir string değerinde bir title atıyorum... */}
       <hr />
       <Drawer/>
       
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
        name="Jhon"
        lastName="Doe"
        age="18" 

       />
        <Tablo/>
        <br />
        <Card/>
        <br />
        
        <br />
      </div>
    )
  }
}

export default App;
