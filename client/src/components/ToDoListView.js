import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

class ToDoListView extends Component {

    render() {
        console.log(this.props.toDoItems);
      
        let toDoListItems = [];
        if (this.props.toDoItems) 
            toDoListItems = this.props.toDoItems.map((item) =>  {
                return <div className="item" key={item._id}>
                    <i className="large calendar check outline middle aligned icon"></i>
                    <div className="content">
                        <h5 className="header"> {item.name}</h5>
                    </div>
                </div>
        });

        return (
            <div>
                <h1>To Do List</h1>

                <ListGroup>
                    <ListGroupItem>{toDoListItems}</ListGroupItem>      
                 </ListGroup>
            </div>
        )
    }
}

export default ToDoListView;
