import React, { Component } from "react";
import API from "../utils/API";
import { Container, Col, Row } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import { Input, FormBtn } from "../components/Form";
import { Redirect } from 'react-router';

class SignUp extends Component {
  state = {
    first_name: "",
    last_name: "",
    username: "",
    password: "",
    email: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (
      this.state.email &&
      this.state.first_name &&
      this.state.last_name &&
      this.state.password &&
      this.state.username
    ) {
      API.createUsers({
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        username: this.state.username,
        password: this.state.password,
        email: this.state.email
      })
        .then(console.log("we created a user"))
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h3>Please complete the registration form</h3>
            </Jumbotron>
            <form>
              <Input
                value={this.state.first_name}
                onChange={this.handleInputChange}
                name="first_name"
                placeholder="First Name (required)"
              />
              <Input
                value={this.state.last_name}
                onChange={this.handleInputChange}
                name="last_name"
                placeholder="Last Name (required)"
              />
              <Input
                value={this.state.user_name}
                onChange={this.handleInputChange}
                name="username"
                placeholder="Username (required)"
              />
              <Input
                value={this.state.password}
                onChange={this.handleInputChange}
                name="password"
                placeholder="Password (required)"
              />
              <Input
                value={this.state.email}
                onChange={this.handleInputChange}
                name="email"
                placeholder="Email Adddress (required)"
              />

              <FormBtn
                disabled={
                  !(
                    this.state.first_name &&
                    this.state.last_name &&
                    this.state.username &&
                    this.state.password &&
                    this.state.email
                  )
                }
                onClick={this.handleFormSubmit}
              >
                Create Account
              </FormBtn>
            </form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default SignUp;
