import React, { Component } from "react";
import axios from 'axios'; 
import ChallengeModal from './ChallengeModal';


class ChallengeListView extends Component {
    constructor(props){
        super(props);
        this.state = {
            challenges: [],
            show: false
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

    addChallenge() {
    
    }
    
    render() {
        
        let challengeListItems = this.state.challenges.map(function (challenge) {
            return <div className="item" key={challenge._id}>
                <i className="large calendar check outline middle aligned icon"></i>
                <div className="content">
                    <a className="header" href="/challenge">{challenge.name}</a>
                   
                    {/* <Link to={{ pathname: '/challenge', state: { _id: challenge._id} }}>{challenge.name}</Link> */}
                </div>
            </div>
        });

        return (
            <div>
                <h1>Challenges</h1>

                <ul className="ui relaxed list">
                    {challengeListItems}
                    {/* <button className="ui button primary" onClick={this.showModal}>Add Challenge</button> */}
                </ul>
                <ChallengeModal/>

            </div>
        )
    }
}

export default ChallengeListView;
