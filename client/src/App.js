import React, { Component, Link } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./pages/ChallengePage";
import SignUp from "./pages/SignUp";
import Login from "../src/components/Login";
import Navbar from './components/navbar';
import axios from 'axios';
import "./App.css";
import history from './history';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      authenticated: false,
      challenges: [],
      selectedChallenge: {},
      currentUser: {}
    };

    this.logout = this.logout.bind(this);
    this.authenticate = this.authenticate.bind(this);
    this.deAuthenticate = this.deAuthenticate.bind(this);
    this.setCurrentUser = this.setCurrentUser.bind(this);

    const unlisten = history.listen((location, action) => {
      // location is an object like window.location
      console.log(action, location.pathname, location.state)
    })
  }

  componentDidMount() {
    axios.get('/api/challenges')
    .then((data) => {
        this.setState({challenges: data.data});
        if (this.state.challenges.length > 0) {
            this.setState({selectedChallenge: this.state.challenges[0]});
        }
        
    })
             
}

setSelectedChallenge = newChallenge =>  {
    console.log(newChallenge);
    this.setState({selectedChallenge: newChallenge});
    // console.log("pushing history");
    // history.push("/");
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

  setCurrentUser(user) {
    this.setState({currentUser: user});
    console.log("Current User = ");
    console.log(user);
    // this is where we need to load the challenges just for that user
  }

  logout() {
    axios.put('/api/logout')
      .then(function (data) {
        this.deAuthenticate();
        window.location.reload();
      }.bind(this)).catch(function (err) {
        console.log(err);
      });
  }


  render() {
    return (
      <>
      <Navbar
          authenticated={this.state.authenticated}
          authenticate={this.authenticate}
          deAuthenticate={this.props.deAuthenticate}
          logout={this.logout}
          challenges={this.state.challenges}
          selectedChallenge={this.state.selectedChallenge}
          setSelectedChallenge={this.setSelectedChallenge}
          currentUser={this.state.currentUser}
          setCurrentUser={this.setCurrentUser}
        />
      <Router history={history}>
      	<Switch>
          <Route exact path="/" render={props => 
            <Main
              {...props}
              authenticate={this.authenticate}
              deAuthenticate={this.deAuthenticate}
              authenticated={this.state.authenticated}
              logout={this.logout}
              challenges={this.state.challenges}
              currentUser={this.state.currentUser}
              selectedChallenge={this.state.selectedChallenge}
            />} 
          />
          <Route exact path="/login" render={props => 
            <Login
              {...props}
              authenticate={this.authenticate}
              deAuthenticate={this.deAuthenticate}
              authenticated={this.state.authenticated}
              setCurrentUser={this.setCurrentUser}
              logout={this.logout}
            />}
          />
          <Route exact path="/signup" render={props => 
            <SignUp
              {...props}
              authenticate={this.authenticate}
              deAuthenticate={this.deAuthenticate}
              authenticated={this.state.authenticated}
              setCurrentUser={this.setCurrentUser}
              logout={this.logout}
            />} 
          />
      	</Switch>
      </Router>
      </>
    );
  }
}

export default App;
