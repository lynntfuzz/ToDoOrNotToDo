import React, { Component } from "react";

class ChallengeListView extends Component {
   

    componentDidMount() {
        console.log("ChallengeListView.componentDidMount()");   
    }
    
    render() {
        console.log("ChallengeListView.render()");
        console.log(this.props.challenges);
        
        let challengeListItems = this.props.challenges.map((challenge) =>  {
            return <div className="item" key={challenge._id}>
                <i className="large calendar check outline middle aligned icon"></i>
                <div className="content">
                    <h5 className="header" onClick={() => this.props.selectChallenge(challenge)}> {challenge.name}</h5>
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

            </div>
        )
    }
}

export default ChallengeListView;
