import React from 'react';
import { Button, Container, Row, Col  } from 'reactstrap';

export default class ModalButton extends React.Component {
  render() {
    return (
      <div>
        <Row>
          <Col xs="3" sm="4"></Col>
          <Col xs="3" sm="4"><Button color="primary" size="lg"  >Create New Challenge</Button>{' '}</Col>
        </Row>
      </div>
    );
  }
}