import React, { Component } from "react";
import API from "../utils/API";
import { Container, Col, Row } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import { Input, FormBtn } from "../components/Form";
import { Redirect } from 'react-router';
// import Nav from "../components/navbar";
import FooterPage from '../components/footer';

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
        this.props.history.push('/login');
    }
  };

  render() {
    return (
      <div>
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
                placeholder="John (required)"
              />
              <Input
                value={this.state.last_name}
                onChange={this.handleInputChange}
                name="last_name"
                placeholder="Wick (required)"
              />
              <Input
                value={this.state.user_name}
                onChange={this.handleInputChange}
                name="username"
                placeholder="johnwick (required)"
              />
              <Input
                value={this.state.password}
                onChange={this.handleInputChange}
                name="password"
                placeholder="Password (required)"
                type= "password"
              />
              <Input
                value={this.state.email}
                onChange={this.handleInputChange}
                name="email"
                placeholder="john.wick@gmail.com (required)"
                type = "email"
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
      <FooterPage />
    </div>
    );

  }
}

export default SignUp;
