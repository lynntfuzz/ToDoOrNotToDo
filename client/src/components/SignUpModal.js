/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

<style type= "text/css" className="jumbotron" >
  { } 
</style>

class SignUpModal extends React.Component {
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
          <ModalHeader toggle={this.toggle}>Sign In </ModalHeader>
          <ModalBody>
            Please enter your registration info below.

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
 
export default SignUpModal;