import React, { Component } from "react";
import API from "../utils/API";
import { Container } from "../../../../../../UCLAWES201808FSF3/Class-Content/20-react/10-Stu_AJAXFormDelete/Solved/client/src/components/Grid";
import Jumbotron from "../../../../../../UCLAWES201808FSF3/Class-Content/20-react/10-Stu_AJAXFormDelete/Solved/client/src/components/Jumbotron";
import { Input, FormBtn } from "../../../../../../UCLAWES201808FSF3/Class-Content/20-react/10-Stu_AJAXFormDelete/Solved/client/src/components/Form";

class SignUp extends Component {
    
    state = {
        firstName: "",
        lastName: "",
        userName: "",
        password: "",
        emailAddress: ""
    };
    
  handleInputChange = event => {
      const {name, value} = event.target;
      this.setState({
          [name]: value
      });
  };

  handleFormSubmit = event => {
      event.preventDefault();
      if (this.state.emailAddress && this.state.firstName && this.state.lastName && this.state.password){
          API.createUsers({
              first_name: this.state.firstName,
              last_name: this.state.lastName,
              username: this.state.userName,
              password: this.state.password,
              email: this.state.emailAddress
          })
          .then(console.log ("we created a user"))
          .cath(err => console.log(err));
      }
  };

  render() {
      return(
        <Container fluid>
        <Row>
            <Col size="md-6">
                <Jumbotron>
                    <h1>Please complete the registration form</h1>
                    </Jumbotron>
                    <form>
                        <Input
                        value={this.state.firstName}
                        onChange={this.handleInputChange}
                        name="first_name"
                        placeholder= "Fist Name (required)"
                        />
                        <Input
                        value={this.state.lastName}
                        onChange={this.handleInputChange}
                        name="last_name"
                        placeholder= "Last Name (required)"
                        />
                        <Input
                        value={this.state.userName}
                        onChange={this.handleInputChange}
                        name="username"
                        placeholder= "Username (required)"
                        />
                        <Input
                        value={this.state.password}
                        onChange={this.handleInputChange}
                        name="password"
                        placeholder= "Password (required)"
                        />
                        <Input
                        value={this.state.emailAddress}
                        onChange={this.handleInputChange}
                        name="email_address"
                        placeholder= "Email Adddress (required)"
                        />

                        <FormBtn
                            disabled={!(this.state.firstName && this.state.lastName && this.state.userName && this.state.password && this.state.emailAddress)}
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