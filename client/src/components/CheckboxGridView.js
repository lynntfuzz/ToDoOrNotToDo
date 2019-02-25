import React, { Component, Table } from "react";
import Axios from 'axios'; 
import Moment from 'moment';
import Header from './Table/Header';
import Rows from './Table/Rows'; 
//import { ListGroup, ListGroupItem } from "reactstrap";

import ToDoListView from "./ToDoListView";

class CheckboxGridView extends Component {
   

    componentDidMount() {

    }
  
    render() {
        console.log(this.props.challenge);   

        return ( 
            <div>
             <table style={{width:'100%'}}>
                <Header challenge={this.props.challenge}/>
                <Rows challenge={this.props.challenge} setSelectedChallenge={this.props.setSelectedChallenge}/>
             </table>
             </div>
            
        )
    }
}


export default CheckboxGridView;
