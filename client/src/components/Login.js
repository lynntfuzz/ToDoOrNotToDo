import React, { Component } from 'react';
import { Link, Redirect } from "react-router-dom";
import SignUp from '../pages/SignUp';
import axios from 'axios';
import Navbar from './navbar'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

// extend Login as a component so it can be exported as a stateful component.
export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            redirectToReferrer: false
        };
        
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.loginUser = this.loginUser.bind(this);
    }

    handleUsernameChange(event) {
        this.setState({
            username: event.target.value
        });
    }

    handlePasswordChange(event) {
        this.setState ({
            password: event.target.value
        });
    }
    // handle data submission from user. use axios to get info from the DB

    loginUser(submission) {
        axios.post('apis/users/login', submission)
            .then(function (data) {
                if(data.data.success) {
                    this.props.authenticate();
                    this.setState({
                        redirectToReferrer: true
                    });
                } else {
                    alert(data.data.message);
                }
                }.bind(this)).catch(function (err) {
                    console.log(err);
                    
                });
                this.setState({
                    username:"",
                    password: ""
            });
    }
    handleSubmit(event) {
        event.preventDefault();
        const usernameInput = this.state.username;
        const passwordInput = this.state.password;

        const objSubmit = {
            username: usernameInput,
            password: passwordInput
        }
        if (!objSubmit.username || objSubmit.password) {
            return;
        }
        this.loginUser(objSubmit);
    }
        render() {
            const { from } = this.props.location.state || { from: { pathname: '/'} };
            const { redirectToReferrer } = this.state;

            if (redirectToReferrer) {
                return (
                    <Redirect to={from} />
                )
            }

            return(
                <div>
                    <Navbar
                        authenticated={this.props.authenticated}
                        authenticate={this.props.authenticate}
                        deAuthenticate={this.props.deAuthenticate}
                        logout={this.props.logout}
                    />
                
                <div className="loginmodal-container">
                    <h1 className="">Log in, Habitron</h1><br />
                    <FormGroup className="login" onSubmit={this.handleSubmit.bind(this)}>
                        <Input id="username-input" ref="user" type="text" name="user" placeholder="Username" onChange={this.handleUsernameChange} value={this.state.username} />
                        <Input id="password-input" ref="password" type="password" name="pass" placeholder="Password" onChange={this.handlePasswordChange} value={this.state.password} />
                        <Button  className="login loginmodal-submit">Log In</Button>
                    </FormGroup>
                    <div className="login-help">
                        <Link to={"/SignUp"}> Register </Link>
                    </div>
                </div>
            </div>
            );
        }
    }

