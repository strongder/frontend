import React from 'react'
import ContactList from '../components/contactList/ContactList'
import { Col, Container, Row } from 'react-bootstrap'

const LiveChat = () => {
  return (
    <Container style={{textAlign
    : "center"}}>
      <Row>
        <Col><ContactList></ContactList></Col>
        <Col xs={6}>area chat</Col>
        <Col>infor</Col>
      </Row>
    </Container>
  )
}

export default LiveChat