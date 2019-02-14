import React, { Component } from 'react';
import { Table } from 'reactstrap';
import LeaderboardHeader from './leaderboardHeader'
import LeaderboardRow from "./leaderboardRow"


export default class Leaderboard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data:[]
    }
    this.componentDidMount = this.componentDidMount.bind(this)
    this.handleSort = this.handleSort.bind(this)
  }
  componentDidMount() {
    fetch('https://todohabits.herokuapp.com/users')
      .then((response) => response.json())
      .then((json) =>this.setState({
        data: json
      }))
  }
  handleSort(attr) {
    this.setState({
      data: this.state.data.sort(
        (a,b) => parseInt(a[attr],10) > parseInt(b[attr], 10) ? -1:1
      )})
  }
  render() {
    const rows = this.state.data.map((row, index) =>
      <LeaderboardRow
        key={row.username}
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
    