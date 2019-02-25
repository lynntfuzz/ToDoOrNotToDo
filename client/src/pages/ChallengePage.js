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
    // constructor(props) {
    //     super(props);
    //     this.state = { 
    //         challenges: [], 
    //         selectedChallenge: {}
    //     } 
        
    // }

    // componentDidMount() {
    //     axios.get('/api/challenges')
    //     .then((data) => {
    //         this.setState({challenges: data.data});
    //         if (this.state.challenges.length > 0) {
    //             this.setState({selectedChallenge: this.state.challenges[0]});
    //         }
            
    //     })
                 
    // }

    // setSelectedChallenge = newChallenge =>  {
    //     console.log(newChallenge);
    //     this.setState({selectedChallenge: newChallenge});
    // }

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
        console.log("in Challenge page, is authenticated? " + this.props.authenticated);
        console.log("in ChallengePage user ="  );
        console.log(this.props.currentUser);
        return <div>
            <Jumbotron>
            <h1 className="display-4">Hello Habitron{this.props.authenticated ? (" " + this.props.currentUser.first_name + " " + this.props.currentUser.last_name) : ("s")}</h1>
            <p className="lead">Challenge your friends to see who can improve their habits.</p>
            <hr className="my-2" />
            </Jumbotron>
            
            <Container>
                {/* <p>Make sure your habits database is empty by typing db.todoitems.drop(); db.challenges.drop(), db.checkboxrecords.drop() in your mongo shell. Don't worry about user collection. Only press this button once or you will get duplicates.</p>
                <Button onClick={this.seedDatabase}>Seed Database</Button> */}
                <h1>{this.props.selectedChallenge.name}</h1> 
                <CheckboxGridView challenge={this.props.selectedChallenge} setSelectedChallenge={this.props.setSelectedChallenge}/>
            </Container>
            
            <NewChallengeModal/>
            <FooterPage />
        </div>;
    }
}

export default ChallengePage;
