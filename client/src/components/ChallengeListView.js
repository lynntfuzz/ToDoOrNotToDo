import React, { Component } from "react";
import axios from 'axios'; 

class ChallengeListView extends Component {
    constructor(props){
        super(props);
        this.state = {
            challenges: []
        }
    }
    componentDidMount() {
        console.log("ChallengeListView.componentDidMount()");
        axios.get('/api/challenges')
        .then(function (data) {
            console.log(data.data);
            this.setState({challenges: data.data});
        }.bind(this)).catch(function (err) {
            console.log(err);
      });
    }
    
    render() {
        
        let challengeListItems = this.state.challenges.map(function (challenge) {
            return <li key={challenge._id}>{challenge.name}</li>
        });
        return (
        <div>
            Challenges
            <ul className="challengesList">
                {challengeListItems}
            </ul>


        </div>
        )
    }
}

export default ChallengeListView;
