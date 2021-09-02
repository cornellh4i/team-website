import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const TeamIntroduction = () => (
  <Container>
    <Row>
      <Col md="12" className="text-center">
        <h2 className="page-title"> Meet Our Team </h2>
        <p>
          At Hack4Impact Cornell, we're fortunate to have a passionate and talented group of
          software developers, designers, and organizers who help turn our vision into a reality.
        </p>
      </Col>
    </Row>
    <hr size="3" width="60%" color="blue"></hr>
  </Container>
);
export default TeamIntroduction;
