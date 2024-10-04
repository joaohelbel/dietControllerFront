import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Nav from '../../components/nav';

export default function Home() {
  return (
    <Container fluid>
      <Row>
        <Col>
          <Nav />
        </Col>
      </Row>
    </Container>
  );
}
