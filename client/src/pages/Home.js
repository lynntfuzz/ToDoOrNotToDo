import React, { Component } from "react";
import ChallengeListView from '../components/ChallengeListView';
import Jumbotron from '../components/Jumbotron';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state =  {
      currentUser: null
  } 
}

render() {
    return <div>
    <Jumbotron><h1>Hello Habitrons</h1></Jumbotron>
    <ChallengeListView />
    </div>;
  }
}

export default Home;
