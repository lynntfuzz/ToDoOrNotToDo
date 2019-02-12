import React from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'

const ChallengeModal = () => (
  <Modal trigger={<Button>Show Modal</Button>}>
    <Modal.Header>Select a Photo</Modal.Header>
    <Modal.Content image>
      <Image wrapped size='medium' src='/images/avatar/large/rachel.png' />
      <Modal.Description>
        <Header>Challenge</Header>
        <p>Name</p>
        <p>Description</p>
        <p>Start Date</p>
        <p>End Date</p>
        <p>Cap</p>
        <p>Is Open?</p>
      </Modal.Description>
    </Modal.Content>
  </Modal>
)

export default ChallengeModal