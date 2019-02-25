import React, { Component } from "react";

import Moment from 'moment';

class Header extends Component {

    render() {
        
        let challenge = this.props.challenge;
        let days = [];
        if (challenge && challenge.startdate && challenge.enddate) {
            let startdate = Moment(challenge.startdate);
            let enddate = Moment(challenge.enddate);
            let currentDate = startdate;
            days.push(<th key="header">Task</th>);
            while (currentDate.isBefore(enddate)) {
                days.push(<th key={"header-"+currentDate.format("M/D")}  className="text-left">{currentDate.format("M/D")}</th>);
                currentDate.add(1, 'days');
            }
        } 
    
        return ( 
            <thead>
                <tr>
                {days}
                </tr>
            </thead>  
          );
        }
}

export default Header;