import React, { Component } from "react";
import { Container, Col, Row, Label, FormGroup, Form, Input} from "reactstrap";
import Navbar from '../components/navbar';
import axios from 'axios'; 
import ToDoListView from '../components/ToDoListView';
import TeamListView from '../components/TeamListView';
import CheckboxGridView from '../components/CheckboxGridView';

class ChallengePage extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            challenges: [], 
            selectedChallenge: {name: "empty"}
        }    
    }
    
    componentDidMount() {
        console.log("ChallengePage.componentDidMount()");
        axios.get('/api/challenges')
        .then((data) => {
            this.setState({challenges: data.data});
            if (this.state.challenges.length > 0) {
                this.setState({selectedChallenge: this.state.challenges[0]})
            }
        })
        .then (() => {

            if (this.state.selectedChallenge.toDoItems && this.state.selectedChallenge.toDoItems.length > 0) {
                    
                let newCheckBoxRecord = {
                    toDoItem: this.state.selectedChallenge.toDoItems[0]._id,
                    user: "5c5d4a3b1ba9866b9dc4057a",
                    date: "2019-02-19",
                    completed: "false"
                }
                axios.post('/api/toDoItems/checkBoxRecord', newCheckBoxRecord);
                } else console.log("no to Do List items")
        })
    }

    setSelectedChallenge = newChallenge =>  {
        this.setState({selectedChallenge: newChallenge});
    }

    formatDate(d) {
        if (!d) return "";
        else{ 
            let date = new Date(d);
            return (date.getFullYear()  + "-" + date.getMonth()+1)  + "-" +  date.getDate() ;
        }
    }

    doAddNewToDoItem(challenge) {
       
        let toDoItem = {
            name : "Work 10 minutes on career assets",
            description : "Edit/update Linked In, CV, GitHub",
            challenge: challenge._id
        }
        
        axios.post('/api/toDoItems', toDoItem)
            .then(function (response) {
                // TODO I'm confused here and getting side-tracked
                // should I reload the challenge and reset it in
                // the state?
                // axios.get("/challenges/" + response._id)
                // .then( function (challenge){
                //     challenge.toDoItems.push(toDoItem)
                // });
                //console.log("Saving to do Item response:");
                //console.log(response);
            }
        
        )
    }

    // this doesn't work. It is a Promise chain and I can't pass the variables
    // down to the next chain. Hopefully I will understand this soon.
    testAddingMembersToTeam() {
        console.log("ChallengePage.testAddingMembersToTeam()");
        // get fresh challenge from db
        return axios.get('/api/challenges/' + this.state.selectedChallenge._id)
        .then ( function (response) {
            var challenge = response.data;
            console.log("challenge 1 = ");
            console.log(challenge);
            return axios.get('/api/users')
            // look up all users and add them as a team (for testing purposes only)
            .then( (users, challenge) => {
                console.log("challenge 2 = ");
                console.log(challenge);
                users.data.map((user, challenge) => {
                    return challenge.teamMembers.push(user);
                })
                // Now save the challenge to the db (with the teammembers added) 
                return axios.put("/api/challenges", this.state.selectedChallenge)    
                // then set the selected Challenge to the new, fresh, edited object from the database
                .then(function (updatedChallenge) {
                    this.setState({selectedChallenge: updatedChallenge});
                })
                })
            })
        }
        
    render() {

        return <div>
            <Navbar authenticated={this.props.authenticated}
                    authenticate={this.props.authenticate}
                    deAuthenticate={this.props.deAuthenticate}
                    logout={this.props.logout}
                    selectedChallenge={this.state.selectedChallenge}
                    challenges={this.state.challenges}
                    setSelectedChallenge={this.setSelectedChallenge}
                    />  
            <Container>
                
                <h1>{this.state.selectedChallenge.name}</h1>
                <Row>
                    <Col med="10">.
                    <Form>
                        <FormGroup row>
                            <Label for="name" sm={2}>Name</Label>
                            <Col sm={10}>
                                <Input type="name" name="name" id="name" placeholder="name" value={this.state.selectedChallenge.name}/>
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Label for="startdate" sm={2}>Start Date:</Label>
                            <Col sm={10}>
                                <Input type="date" name="startdate" id="startdate"  value={this.formatDate(this.state.selectedChallenge.startdate)}/>
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Label for="enddate" sm={2}>End Date:</Label>
                            <Col sm={10}>
                                <Input type="date" name="enddate" id="enddate"  value={this.formatDate(this.state.selectedChallenge.enddate)} />
                            </Col>
                        </FormGroup>

                        {/* <FormGroup row>
                            <Label for="isopencheck" sm={2}>Open to participants?</Label>
                            <Col sm={10}>
                                <Input type="checkbox" name="isopencheck" value={this.state.selectedChallenge.isOpen}/> 
                            </Col>      
                        </FormGroup> */}

                    </Form>

            <ToDoListView toDoItems={this.state.selectedChallenge.toDoItems}/>  
            <TeamListView teamMembers={this.state.selectedChallenge.teamMembers}/>
            <CheckboxGridView toDoItems={this.state.selectedChallenge.toDoItems}/>
            
           
            

                    </Col>
                </Row>
            </Container>
        </div>;
    }
}

export default ChallengePage;
