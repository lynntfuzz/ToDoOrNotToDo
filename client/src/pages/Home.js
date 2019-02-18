import React, { Component } from "react";
import Jumbotron from '../components/Jumbotron';
import Navbar from '../components/navbar'
import Leaderboard from "../components/Leaderboard/leaderboard";
import Ad from "../components/Ads";


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
    <Ad />
<<<<<<< HEAD
    <Jumbotron><h1>Hello Habitrons</h1></Jumbotron>
    <Leaderboard />
   
=======
    <Jumbotron>
      <h1>Hello Habitron...</h1>
    </Jumbotron>
    <Leaderboard />
    
>>>>>>> 4159692504259a01aab6f96b54334d4d65dae151
    </div>;
  }
}

export default Home;
