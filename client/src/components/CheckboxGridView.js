import React, { Component, Table } from "react";
import Axios from 'axios'; 
import Moment from 'moment';
import Header from './Table/Header';
import Rows from './Table/Rows'
//import { ListGroup, ListGroupItem } from "reactstrap";

import ToDoListView from "./ToDoListView";

// const Header = (children) => {
//    let challenge = children.children;
//    let days = [];
//     if (challenge && challenge.startdate && challenge.enddate) {
//         let startdate = Moment(challenge.startdate);
//         let enddate = Moment(challenge.enddate);
//         let currentDate = startdate;
//         days.push(<th key="header">Task</th>);
//         while (currentDate.isBefore(enddate)) {
//             days.push(<th key={"header-"+currentDate.format("M/D")}>{currentDate.format("M/D")}</th>);
//             currentDate.add(1, 'days');
//         }
//     } 

//     return ( 
//         <thead>
//             <tr>
//             {days}
//             </tr>
//         </thead>
        
//     );
// };



// const Rows = (children) => {
//     let data = [];
//     let cbrs = [];
//     let challenge = children.children;
//     if (challenge) {
//         let toDoItems = challenge.toDoItems;
//         if(toDoItems)
        
//             data = toDoItems.map((toDoItem, i) => {
//                 cbrs = toDoItem.checkBoxRecords.map((cbr) =>{
//                     let completed = cbr.completed ? 1 : 0;
//                     //return <td>{completed}</td>
//                    return <td><input type="checkbox" key={cbr._id} value={completed} onClick={(e) => this.props.clickHandler}/></td>
//                 });

//                 return ( 
//                     <tr scope="row">
//                     <th key={toDoItem._id}>{toDoItem.name}</th>
//                     {cbrs}
//                     </tr>
                    
//                 )
//             });
//     }
 
//      return ( 
//          <tbody>
//              {data}
//          </tbody>
         
//      );
//  };

//  const RowData = (children) => {
//     let checkBoxRecords = children.children;
//     let rowdata = [];
//     if(checkBoxRecords) {
//         rowdata = checkBoxRecords.map((cbr) => {
            
//             return (  
//                 <tr>  
//                     <td>{cbr}</td>
//                 </tr>
//             )
//         }
//     )}

 
//      return ( 
             
//              {rowdata}
             
//      );
//  };


class CheckboxGridView extends Component {
    
    handleClick(e) {
        console.log("clicky click")
        console.log(e.target);
        let id = e.target.getAttribute('data-value');
        let completed = e.target.checked;
        //e.target.checked = !e.target.checked;
        let newCBR = {
            _id: id,
            completed: completed
        }
        Axios.put('/api/toDoItems/checkBoxRecord', newCBR)
        .then(results => {
            console.log(results);
        })
        this.forceUpdate();
    }
  
    render() {
        console.log(this.props.challenge);   

        return ( 
            <div>
             <table style={{width:'100%'}}>
                <Header challenge={this.props.challenge}/>
                <Rows clickHandler={this.handleClick} challenge={this.props.challenge}/>
             </table>
             </div>
            
        )
    }
}


export default CheckboxGridView;
