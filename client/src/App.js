import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
<<<<<<< HEAD
import ChallengePage from "./pages/ChallengePage";
=======
import SignUp from "./pages/SignUp";
import logo from "./logo.svg";
>>>>>>> a45a806663dc2055c95ebf471ac697bc78dfde8c
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <Switch>
          <Route exact path="/" component={Home} />
<<<<<<< HEAD
          <Route exact path="/challenge" component={ChallengePage} />
=======
          <Route exact path='/signup' component={SignUp} />
>>>>>>> a45a806663dc2055c95ebf471ac697bc78dfde8c
        </Switch>
      </div>
    </Router>
    );
  }
}

export default App;
