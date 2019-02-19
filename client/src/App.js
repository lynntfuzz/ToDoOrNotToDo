import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./pages/ChallengePage";
import SignUp from "./pages/SignUp";
import Login from "../src/components/Login";
import axios from 'axios';
import "./App.css";

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      authenticated: false
    };

    this.logout = this.logout.bind(this);
    this.authenticate = this.authenticate.bind(this);
    this.deAuthenticate = this.deAuthenticate.bind(this);
  }

  authenticate() {
    this.setState({
      authenticated: true
    })
  }

  deAuthenticate() {
    this.setState({
      authenticated: false
    })
  }

  logout() {
    axios.get('/api/logout')
      .then(function (data) {
        this.deAuthenticate();
        window.location.reload();
      }.bind(this)).catch(function (err) {
        console.log(err);
      });
  }


  render() {
    return (
      <Router>
      	<Switch>
          <Route exact path="/" render={props => 
            <Main
              {...props}
              authenticate={this.authenticate}
              deAuthenticate={this.deAuthenticate}
              authenticated={this.state.authenticated}
              logout={this.logout}
            />} 
          />
          <Route exact path="/login" render={props => 
            <Login
              {...props}
              authenticate={this.authenticate}
              deAuthenticate={this.deAuthenticate}
              authenticated={this.state.authenticated}
              logout={this.logout}
            />}
          />
          <Route exact path="/signup" render={props => 
            <SignUp
              {...props}
              authenticate={this.authenticate}
              deAuthenticate={this.deAuthenticate}
              authenticated={this.state.authenticated}
              logout={this.logout}
            />} 
          />
      	</Switch>
      </Router>
    );
  }
}

export default App;
