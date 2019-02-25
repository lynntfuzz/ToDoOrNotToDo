import React, { Component } from 'react';
import {Input} from 'reactstrap';
import Axios from 'axios';


class Rows extends Component { 
    constructor(props) {
        super(props);
        this.state = {
            cbrs: []
        }
        let data = [];
    }

    componentDidMount() {
        
  
        // let challenge = this.props.challenge;
        // if (challenge) {
        //     let toDoItems = challenge.toDoItems;
        //     if(toDoItems)
        //         // for all toDoItems, create a row of checkboxes.        
        //         this.data = toDoItems.map((toDoItem, i) => {
        //             this.state.cbrs[i] = [];
        //             let cbrsJSX = toDoItem.checkBoxRecords.map((cbr, j) =>{
        //                 let completed = cbr.completed ? true : false;
        //                 this.state.cbrs[i][j] = completed;
                        
        //                return <td><Input type="checkbox"  data-value={cbr._id} row={i} col={j}  checked={this.state.cbrs[i][j]} onClick={(e) => this.handleClick(e)}/></td>
        //             });
                    
        //             return ( 
        //                 <tr scope="row">
        //                 <th key={toDoItem._id}>{toDoItem.name}</th>
        //                 {cbrsJSX}
        //                 </tr>
                        
        //             )
        //         });
        // }
    }

    handleClick(e) {
        console.log("CLICKY CLICK");
        let id = e.target.getAttribute('data-value');
        let row = e.target.getAttribute('row');
        let col = e.target.getAttribute('col');
        let completed = e.target.checked;
        console.log("row = " + row + " col= " + col +  " id: " + id + " checked? " + completed);
        let newState = this.state.cbrs.slice();
        newState[row][col] = completed;
        this.setState({cbrs: newState});
        //e.target.clicked = !e.target.clicked;
        let newCBR = {
            _id: id,
            completed: completed
        }
        Axios.put('/api/toDoItems/checkBoxRecord', newCBR)
        .then(results => {
            console.log(results);
            // refresh the challenge at the top of the component hierarchy
            // so it trickles down here.
            // Axios.get('/api/challenges/'+ this.props.challenge._id)
            // .then((dbChallenge) => {
            //     console.log(dbChallenge);
            //     this.props.setSelectedChallenge(dbChallenge);
            // })
        })
          
    }

    render() {
        console.log("RENDER RENDER RENDER RENDER RENDER RENDER ");
    let data = [];
  
    let challenge = this.props.challenge;
    if (challenge) {
        let toDoItems = challenge.toDoItems;
        if(toDoItems)
            // for all toDoItems, create a row of checkboxes.        
            data = toDoItems.map((toDoItem, i) => {
                this.state.cbrs[i] = [];
                let cbrsJSX = toDoItem.checkBoxRecords.map((cbr, j) =>{
                    let completed = cbr.completed ? true : false;
                    this.state.cbrs[i][j] = completed;
                    
                   return <td><Input type="checkbox"  data-value={cbr._id} row={i} col={j}  checked={completed} onClick={(e) => this.handleClick(e)}/></td>
                });
                
                return ( 
                    <tr scope="row">
                    <th key={toDoItem._id}>{toDoItem.name}</th>
                    {cbrsJSX}
                    </tr>
                    
                )
            });
    }
    console.log(this.state.cbrs);
     return ( 
         <tbody>
             {data}
         </tbody>
         
     );
 };

}

export default Rows;
