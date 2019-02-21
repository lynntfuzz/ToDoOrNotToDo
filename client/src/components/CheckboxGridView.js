import React, { Component, Table } from "react";
import axios from 'axios'; 
import Moment from 'moment';
//import { ListGroup, ListGroupItem } from "reactstrap";

import ToDoListView from "./ToDoListView";

const Header = (challenge) => {
    return ( 
        <thead>
            <th></th>
        </thead>
        
    );
};
class CheckboxGridView extends Component {

  
    render() {
        //let items = [];
        //if (this.props.challenge && this.props.challenge._id) {
            // if (this.props.challenge.toDoItems != null) {
            //     console.log("Got to do items for " + this.props.challenge.toDoItems == null ? "" :this.props.challenge.name)
            //     this.props.challenge.toDoItems.map( (toDoItem) => {
            //         console.log("item: " + toDoItem.name);
            //         console.log(toDoItem.checkBoxRecords.completed);
            //     } );  
            // } else (console.log("toDoItems is null"));
        //     axios.get("/api/toDoItems/checkBoxRecords/5c6e05877d8f781cfd8542db/" + this.props.challenge._id)
        //     .then( results => {
        //         items = results.data;
        //         console.log(results.data);
        //     })
        // } else console.log ("challenge is null");
        console.log("Startdate from challenge: " +this.props.challenge.startdate);
        console.log("Enddate from challenge: " + this.props.challenge.enddate);
        let days = [];
        if (this.props.challenge.startdate && this.props.challenge.enddate) {
            let startdate = Moment(this.props.challenge.startdate);
            let enddate = Moment(this.props.challenge.enddate);
            console.log(startdate);
            console.log(enddate);
            let days = [];
            let currentDate = startdate;
            console.log("start: " + startdate.format("MM-DD-YYYY") + " end: " + enddate.format("MM-DD-YYYY"));
            while (currentDate.isBefore(enddate)) {
                console.log(currentDate.format("MM-DD-YYYY"));
                days.push(<th> {currentDate.format("MM-DD")}</th>);
                currentDate.add(1, 'days');
            }
        } else {
            days[0] = "1";
            days[1] = "2";
        }
        console.log("+++++++++++++++++++++++++");
        console.log(days);
        console.log("+++++++++++++++++++++++++");

        return (
             <Table>
                 <thead>
                     {days}
                 </thead>
             </Table>
        )
    }
}


export default CheckboxGridView;
