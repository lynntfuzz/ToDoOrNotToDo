import React, { Component } from 'react';

export default class leaderboardRow extends Component {
  render() {
    return (
      <tr className={this.props.className}>
        <td>{this.props.position}</td>
        <td>{this.props.username}</td>
        <td>{this.props.alltime}</td>
        <td>{this.props.recent}</td>
      </tr>
    )
  }
}