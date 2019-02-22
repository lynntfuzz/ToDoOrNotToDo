import React, { Component } from "react";



class Rows extends Component { 
    // handleClick(e) {
    //     let id = e.target.getAttribute('data-value');
    //     let completed = e.target.checked;
    //     e.target.clicked = !e.target.clicked;
    //     let newCBR = {
    //         _id: id,
    //         completed: completed
    //     }
    //     Axios.put('/api/toDoItems/checkBoxRecord', newCBR)
    //     .then(results => {
    //         console.log(results);
    //     })
          
    // }

    render() {
    let data = [];
    let cbrs = [];
    let challenge = this.props.challenge;
    if (challenge) {
        let toDoItems = challenge.toDoItems;
        if(toDoItems)
        
            data = toDoItems.map((toDoItem, i) => {
                cbrs = toDoItem.checkBoxRecords.map((cbr) =>{
                    if (cbr._id == "5c6e05887d8f781cfd8542e2") {
                        console.log("\n\n============================");
                        console.log(cbr.completed);
                        console.log("============================\n\n");
                    }
                    let completed = cbr.completed ? true : false;
                    //return <td>{completed}</td>
                   return <td><input type="checkbox" key={cbr._id} data-value={cbr._id}  checked={completed} onClick={this.props.clickHandler}/></td>
                });

                return ( 
                    <tr scope="row">
                    <th key={toDoItem._id}>{toDoItem.name}</th>
                    {cbrs}
                    </tr>
                    
                )
            });
    }
 
     return ( 
         <tbody>
             {data}
         </tbody>
         
     );
 };

}

export default Rows;
