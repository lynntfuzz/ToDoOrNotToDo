import React, { Component } from "react";
import API from "../utils/API";
import { Container, Col, Row } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import { Input, FormBtn } from "../components/Form";

class SignUp extends Component {
  state = {
    firstName: "",
    lastName: "",
    userName: "",
    password: "",
    emailAddress: ""
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
      this.state.emailAddress &&
      this.state.firstName &&
      this.state.lastName &&
      this.state.password
    ) {
      API.createUsers({
        first_name: this.state.firstName,
        last_name: this.state.lastName,
        username: this.state.userName,
        password: this.state.password,
        email: this.state.emailAddress
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
                value={this.state.firstName}
                onChange={this.handleInputChange}
                name="firstName"
                placeholder="First Name (required)"
              />
              <Input
                value={this.state.lastName}
                onChange={this.handleInputChange}
                name="lastName"
                placeholder="Last Name (required)"
              />
              <Input
                value={this.state.userName}
                onChange={this.handleInputChange}
                name="userName"
                placeholder="Username (required)"
              />
              <Input
                value={this.state.password}
                onChange={this.handleInputChange}
                name="password"
                placeholder="Password (required)"
              />
              <Input
                value={this.state.emailAddress}
                onChange={this.handleInputChange}
                name="emailAddress"
                placeholder="Email Adddress (required)"
              />

              <FormBtn
                disabled={
                  !(
                    this.state.firstName &&
                    this.state.lastName &&
                    this.state.userName &&
                    this.state.password &&
                    this.state.emailAddress
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
