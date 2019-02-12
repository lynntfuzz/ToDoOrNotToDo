import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import ChallengePage from "./pages/ChallengePage";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/challenge" component={ChallengePage} />
        </Switch>
      </div>
    </Router>
    );
  }
}

export default App;
