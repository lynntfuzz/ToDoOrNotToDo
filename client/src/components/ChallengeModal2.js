/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import ChallengeForm from '../components/NewChallengeForm';


class NewChallengeModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    return (
      <div>
        <Button color="primary" onClick={this.toggle}>Create New Challenge</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Create a New Challenge </ModalHeader>
          <ModalBody>
            You can invite people after you create a challenge.
            <ChallengeForm />
          </ModalBody>
          <ModalFooter>
            <Button color="success" onClick={this.toggle}>Save</Button>{' '}
            <Button color="warning" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default NewChallengeModal;