import React, { Component } from "react";
//import axios from 'axios'; 
//import { ListGroup, ListGroupItem } from "reactstrap";

import ToDoListView from "./ToDoListView";

class CheckboxGridView extends Component {

    componentDidMount() {
        console.log("CheckBoxGridView.componentDidMount()");
       
    }

    render() {
        if (this.props.challenge) {
            if (this.props.challenge.toDoItems != null) {
                console.log("Got to do items for " + this.props.challenge.toDoItems == null ? "" :this.props.challenge.name)
                this.props.challenge.toDoItems.map( (toDoItem) => {
                    console.log("item: " + toDoItem.name);
                    console.log(toDoItem.checkBoxRecords);
                } );  
            } else (console.log("toDoItems is null"));
        } else console.log ("challenge is null");

        return (
            <div>
                
                <ToDoListView toDoItems={this.props.challenge.toDoItems}/> 
            </div>
        )
    }
}

export default CheckboxGridView;
