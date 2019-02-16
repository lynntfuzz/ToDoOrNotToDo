import React, { Component } from "react";
import ChallengeListView from '../components/ChallengeListView';
import Jumbotron from '../components/Jumbotron';
import TextBox from '../components/TextBox/TextBox';
import Navbar from '../components/navbar'
import Login from '../components/Login'
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
    <Jumbotron><h1>Hello Habitrons</h1></Jumbotron>
    <TextBox><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque laoreet, dolor in faucibus tincidunt, risus nulla sodales ipsum, rhoncus luctus magna nibh quis magna. Donec in pulvinar diam. Cras quis molestie ligula. In pharetra blandit dictum. Donec interdum massa id lectus finibus dictum et et elit. Suspendisse quis nisl venenatis, aliquet justo vel, pharetra mi. Aliquam varius ligula vitae sapien consequat vehicula.</p></TextBox>
    <Leaderboard />
    <Ad />
    </div>;
  }
}

export default Home;
