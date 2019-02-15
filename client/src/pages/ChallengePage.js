import React, { Component } from "react";
import { Container, Col, Row, Label, FormGroup, Form, Input, Button, ListGroup, ListGroupItem } from "reactstrap";
import Jumbotron from '../components/Jumbotron';
import Navbar from '../components/navbar';
import axios from 'axios'; 
import ChallengeModal from '../components/ChallengeModal';
import ChallengeListView from '../components/ChallengeListView';
import ToDoListView from '../components/ToDoListView';
import Moment from 'react-moment';

class ChallengePage extends Component {
    constructor(props) {
        super(props);
        this.state = { challenges: [], selectedChallenge: {name: "empty"} }
        
    }
    
    componentDidMount() {
        console.log("ChallengePage.componentDidMount()");
        axios.get('/api/challenges')
        .then(function (data) {
            console.log(data.data);
            this.setState({challenges: data.data});
        }.bind(this)).catch(function (err) {
            console.log(err);
      });
    }

    selectChallenge(newChallenge) {
        console.log("ChallengePage.selectChallenge()"); console.log(newChallenge.name);
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
            name : "Sleep",
            description : "Sleep at least 7 hours each day.",
            challenge: challenge._id
        }
       console.log(toDoItem);
        
        axios.post('/api/toDoItems', toDoItem)
            .then(function (response) {
                console.log(response);
            }
        );
    }


    render() {

        return <div>
            <Navbar/>  
            <Container>
                <Row>
                    <Col med="2">.
                     <ChallengeListView challenges={this.state.challenges} selectChallenge={(selectedChallenge) => this.selectChallenge(selectedChallenge)}/>
                    </Col>
                    <Col med="10">.
                    <Form>
        <FormGroup row>
          <Label for="name" sm={2}>Name</Label>
          <Col sm={10}>
            <Input type="name" name="name" id="name" placeholder="name" value={this.state.selectedChallenge.name} />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="startdate" sm={2}>Start Date</Label>
          <Col sm={10}>
            <Input type="date" name="startdate" id="startdate"  value={this.formatDate(this.state.selectedChallenge.startdate)}/>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="enddate" sm={2}>End Date</Label>
          <Col sm={10}>
            <Input type="date" name="enddate" id="enddate"  value={this.formatDate(this.state.selectedChallenge.enddate)} />
          </Col>
        </FormGroup>
        <FormGroup tag="fieldset" row>
        <Col>
          <Label className="">Is challenge open to participants?</Label>
          </Col>
          <Col>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="radio1" />{' '}
                Yes
              </Label>
            </FormGroup>
            </Col>
            <Col>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="radio1" />{' '}
                No
                </Label>
            </FormGroup>
            </Col>
        </FormGroup>
      
    <ToDoListView toDoItems={this.state.selectedChallenge.toDoItems}/>  

       
        <FormGroup check row>
          <Col sm={{ size: 10, offset: 2 }}>
            <Button onClick={() => this.doAddNewToDoItem(this.state.selectedChallenge)}>Add New To Do Item</Button>
          </Col>
        </FormGroup>
      </Form>

                    </Col>
                </Row>
            </Container>
        </div>;
    }
}

export default ChallengePage;
