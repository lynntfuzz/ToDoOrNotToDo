import React, { Component } from "react";
import { Container, Button, Col, Row, Label, FormGroup, Form, Input} from "reactstrap";
import Navbar from '../components/navbar';
import axios from 'axios'; 
import ToDoListView from '../components/ToDoListView';
import TeamListView from '../components/TeamListView';
import ModalButton from '../components/Buttons/Button';
import FooterPage from '../components/footer';
import { Jumbotron } from "mdbreact";
import CheckboxGridView from '../components/CheckboxGridView';
import Moment from 'moment';
import CheckBoxApp from '../components/CheckBoxes/CheckBoxApp';
import NewChallengeModal from '../components/ChallengeModal2.js';


class ChallengePage extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            challenges: [], 
            selectedChallenge: {}
            //checkBoxRecords: []
        } 
        
    }

    componentDidMount() {
        axios.get('/api/challenges')
        .then((data) => {
            this.setState({challenges: data.data});
            if (this.state.challenges.length > 0) {
                this.setState({selectedChallenge: this.state.challenges[0]});
                // // hard coded to user John Snow, must be reset with each new database, eventually to be
                // // replaced with current user when current user is signed in.
                // axios.get('/api/toDoItems/checkBoxRecord/'+ "5c6e05877d8f781cfd8542db" + "/" + this.state.selectedChallenge._id )
                // .then(cbrs => this.setState({checkBoxRecords: cbrs.data}));
            }
            
        })
        
          
    }

    setSelectedChallenge = newChallenge =>  {
        console.log(newChallenge);
        this.setState({selectedChallenge: newChallenge});
    }

    formatDate(d) {
        if (!d) return "";
        else{ 
            let date = new Date(d);
            return (date.getFullYear()  + "-" + date.getMonth()+1)  + "-" +  date.getDate() ;
        }
    }

    seedDatabase() {
        let user = {
            username: "username",
            email: "xxx@yyy.com",
            password: "password",
            first_name: "John",
            last_name: "Snow",
        }
        axios.post("/api/users", user).then( (dbUser) => {
            console.log("================================")
            console.log(dbUser);
            console.log("================================")

            let challenge = {
                name: "Maximum Health and Sanity Challenge",
                startdate: "2019-02-20",
                enddate: "2019-03-05",
                isOpen: "true",
                maxParticipants: 5,
                teamMembers: [dbUser.data._id],
            }
            axios.post("/api/challenges", challenge).then( (dbChallenge) => {
                let toDoItem1 = {
                    index: 0,
                    name: "Meditate",
                    description: "At least 5 minutes per day",
                    challenge: dbChallenge.data._id
                }
                axios.post("/api/toDoItems", toDoItem1).then((dbTDI1)  => {
                    let toDoItem2 = {
                        index: 1,
                        name: "Exercise",
                        description: "At least 15 minutes per day",
                        challenge: dbChallenge.data._id
                    }
                    axios.post("/api/toDoItems", toDoItem2).then((dbTDI2)  => {
                        let toDoItem3 = {
                            index: 2,
                            name: "Eat whole foods",
                            description: "At least 5 veggie servings per day, no fast food",
                            challenge: dbChallenge.data._id
                        }
                        axios.post("/api/toDoItems", toDoItem3).then((dbTDI4)  => {
                            let toDoItem4 = {
                                index: 3,
                                name: "Talk to friends",
                                description: "Contact at least one friend per day",
                                challenge: dbChallenge.data._id
                            }
                            axios.post("/api/toDoItems", toDoItem4).then((dbTDI4)  => {
                                let toDoItem5 = {
                                    index: 4,
                                    name: "Sleep > 7 hours",
                                    description: "At least 7 hours a night",
                                    challenge: dbChallenge.data._id
                                }
                                axios.post("/api/toDoItems", toDoItem5).then((dbTDI5)  => {
                                    console.log("do I still have the dbUser?");
                                    console.log(dbUser);
                                    console.log("trying to add cbr's now");
                                    console.log(dbChallenge);
                                    console.log(dbChallenge.data);
                                    axios.get("/api/challenges/" + dbChallenge.data._id).then((freshChallenge) => {
                                    console.log(freshChallenge.data);
                                    
                                    freshChallenge.data.toDoItems.map( (toDoItem) => {
                                        console.log("Working on to do item " + toDoItem.name);
                                        console.log("Is start date (" + freshChallenge.startdate + ") before end (" + freshChallenge.enddate+ ") date? ");
                                        console.log(Moment(freshChallenge.data.startdate).isBefore(Moment(freshChallenge.data.enddate)));
                                        let date = Moment(freshChallenge.data.startdate);
                                        while (date.isBefore(Moment(freshChallenge.data.enddate))) { 
                                            let checkBoxRecord = {
                                                challengeId: freshChallenge.data._id,
                                                toDoItem: toDoItem._id,
                                                user: dbUser.data._id,
                                                date: date,
                                                completed: false
                                            }
                                            console.log("adding cbr: ");
                                            console.log(checkBoxRecord);

                                            axios.post("/api/toDoItems/checkBoxRecord", checkBoxRecord)
                                            date = date.add(1, 'days');
                                            console.log(date);
                                        }
                                    })
                                    });
                                    
                                } )
            
                                
                            } )
        
                            
                        } )
    
                        
                    } )


                } )
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
            <Jumbotron>
           <h1 className="display-4">Hello Habitrons</h1>
            <p className="lead">Challenge your friends to see who can improve their habits.</p>
            <hr className="my-2" />
            </Jumbotron>
            
            <Container>
                {/* <p>Make sure your habits database is empty by typing db.todoitems.drop(); db.challenges.drop(), db.checkboxrecords.drop() in your mongo shell. Don't worry about user collection. Only press this button once or you will get duplicates.</p>
                <Button onClick={this.seedDatabase}>Seed Database</Button> */}
                <h1>{this.state.selectedChallenge.name}</h1>
                {/* <Row>
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

                        <FormGroup row>
                            <Label for="isopencheck" sm={2}>Open to participants?</Label>
                            <Col sm={10}>
                                <Input type="checkbox" name="isopencheck" value={this.state.selectedChallenge.isOpen}/> 
                            </Col>      
                        </FormGroup>

                    </Form> 

            <ToDoListView toDoItems={this.state.selectedChallenge.toDoItems}/>  
            <TeamListView teamMembers={this.state.selectedChallenge.teamMembers}/>
            {/* <CheckboxGridView challenge={this.state.selectedChallenge}/> */}
                    
               
                <CheckboxGridView challenge={this.state.selectedChallenge}/>
            </Container>
            
            <NewChallengeModal/>
            <FooterPage />
        </div>;
    }
}

export default ChallengePage;
