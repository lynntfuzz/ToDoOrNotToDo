import React from 'react';
import { Container, Button, Col, Row, Label, FormGroup, Form, Input, FormText} from "reactstrap";

export default class ChallengeForm extends React.Component {
  render() {
    return (
      <Form>
        <FormGroup>
          <Label for="challengeName">Challenge Name</Label>
          <Input type="challenge" name="challenge" id="challengeName" placeholder="Enter New Challenge Name" />
        </FormGroup>

        <FormGroup>
          <Label for="challengeDescription">Challenge Description</Label>
          <Input type="description" name="description" id="challengeDescription" placeholder="Enter a short description" />
        </FormGroup>

        <FormGroup>
          <Label for="startDate">Start Date</Label>
          <Input type="start" name="start" id="startDate" placeholder="Enter start date" />
        </FormGroup>

        <FormGroup>
          <Label for="endDate">End Date</Label>
          <Input type="end" name="end" id="endDate" placeholder="Enter end date" />
        </FormGroup>
         
        <FormGroup row>
          <Label for="openChallenge" sm={2}>Open to others</Label>
          <Col sm={{ size: 10 }}>
            <FormGroup check>
              <Label check>
                <Input type="checkbox" id="openChallenge" />{' '}
                Open
              </Label>
            </FormGroup>
          </Col>
        </FormGroup>

       

        <Button>Submit</Button>
      </Form>
    );
  }
}