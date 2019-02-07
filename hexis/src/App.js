import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

           
          <Navbar />
         

          <p>
            Hexis can be translated as a healthy habit or healthy state.
          </p>
         
        </header>
      </div>
    );
  }
}

export default App;
