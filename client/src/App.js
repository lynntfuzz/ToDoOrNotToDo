import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import ChallengePage from "./pages/ChallengePage";
import SignUp from "./pages/SignUp";
import Login from "../src/components/Login"
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/challenge" component={ChallengePage} />
          <Route exact path='/signup' component={SignUp} />
          <Route exact path='/login' component={Login} />
        </Switch>
      </div>
    </Router>
    );
  }
}

export default App;
