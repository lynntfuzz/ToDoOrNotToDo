import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

class TeamListView extends Component {

    render() {
        console.log(this.props);
      
        let team = [];
        if (this.props.teamMembers) 
        team = this.props.teamMembers.map((teamMember) =>  {
            return <div className="teamMember" key={teamMember._id}>
                <i className="large calendar check outline middle aligned icon"></i>
                <div className="content">
                    <h5 className="header"> {teamMember.first_name + teamMember.last_name}</h5>
                </div>
            </div>
        });

        return (
            <div>
                <h1>Team Members</h1>

                <ListGroup>
                    <ListGroupItem>{team}</ListGroupItem>      
                 </ListGroup>
            </div>
        )
    }
}

export default TeamListView;
