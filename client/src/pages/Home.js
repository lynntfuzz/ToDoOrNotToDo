import React, { Component } from "react";
import ChallengeListView from '../components/ChallengeListView';
import Jumbotron from '../components/Jumbotron';
import Navbar from '../components/navbar'
import Login from '../components/Login'
import Leaderboard from "../components/Leaderboard/leaderboard";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state =  {
      currentUser: null
    } 
  }

  render() {
    return <div>
    <Navbar />
    <Jumbotron><h1>Hello Habitrons</h1></Jumbotron>
    <Leaderboard />
    </div>;
  }
}

export default Home;
