import React, { Component } from 'react';
import axios from 'axios';
import LeaderboardHeader from './leaderboardHeader';
import LeaderboardRow from "./leaderboardRow";


export default class Leaderboard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data:[],
      id: 0,
      message: null,
      intervalIsSet:false,
      
    }
    this.componentDidMount = this.componentDidMount.bind(this)
    this.handleSort = this.handleSort.bind(this)
  }
  componentDidMount() {
    if (!this.state.intervalIsSet) {
      let interval = setInterval(this.getDataFromDb, 1000);
      this.setState({ intervalIsSet: interval });
    }
  }

  // never let a process live forever 
  // always kill a process everytime we are done using it
  componentWillUnmount() {
    if (this.state.intervalIsSet) {
      clearInterval(this.state.intervalIsSet);
      this.setState({ intervalIsSet: null });
    }
  }

  // just a note, here, in the front end, we use the id key of our data object 
  // in order to identify which we want to Update or delete.
  // for our back end, we use the object id assigned by MongoDB to modify 
  // data base entries

  // our first get method that uses our backend api to 
  // fetch data from our data base
getDataFromDB = () => {
  fetch('https://localhost:3001//api/getUsers')
  .then(data => data.json())
  .then(res => this.setState({ data: res.data }));
  };

  handleSort(attr) {
    this.setState({
      data: this.state.data.sort(
        (a,b) => parseInt(a[attr],10) > parseInt(b[attr], 10) ? -1:1
      )})
  }
  
  render() {
    const rows = this.state.data.map((row, index) =>
      <LeaderboardRow
        key={row.challenge}
        position={index + 1}
        username={row.username}
        alltime={row.alltime}
        recent={row.recent}
        className={index % 2 === 0 ? 'pure-table-odd' : ''}
      />)

    return (
      <table className="pure-table">
        <LeaderboardHeader onChange={this.handleSort} />
        <tbody>
          { rows }
        </tbody>
      </table>
    )
  }

}
    