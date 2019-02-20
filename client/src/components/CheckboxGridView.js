import React, { Component } from "react";
import axios from 'axios'; 
//import { ListGroup, ListGroupItem } from "reactstrap";

import ToDoListView from "./ToDoListView";

class CheckboxGridView extends Component {

    componentDidMount() {
        console.log("CheckBoxGridView.componentDidMount()");
       
    }

    render() {
        return (
            <div>
                
                <ToDoListView toDoItems={this.props.toDoItems}/> 
            </div>
        )
    }
}

export default CheckboxGridView;
