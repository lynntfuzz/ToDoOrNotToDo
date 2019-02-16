import React, { Component } from 'react';

export default class LeaderboardHeader extends Component {
    render() {
        return(
            <thead>
                <tr>
                    <th>Ranking</th>
                    <th>UserName</th>
                    <th>Challenge</th>
                    <th className='clikable' onClick={this.props.onChange.bind(this, 'alltime')}>Goals Completed</th>
          <th className="clickable" onClick={this.props.onChange.bind(this, 'recent')}>Last 30 days</th>
                </tr>
            </thead>
        )
    }
}