import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import MemberIcon from '../memberIcon';

function Team({ members, alumni }) {
  return (
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
      <Row>
        <Col md="12" className="text-center">
          <h2> Executive Board </h2>
        </Col>
        {members.map((member) => (
          <MemberIcon
            key={member.name}
            name={member.name}
            title={member.title}
            image={member.image}
            linkedIn={member.linkedIn}
          />
        ))}
      </Row>
      <Row>
        <Col md="12" className="text-center">
          <h2> Developers </h2>
          <p>
            As the Cornell chapter of Hack4Impact, a 501 (c)(3) nonprofit, we strive to create
            software that can deliver tangible social impact in our communities and make a real
            difference in people's lives. We're as an organization, are focused on community, both
            within our Cornell chapter and with chapters nationally. Join us and start learning more
            about how technology can be used for social impact!
          </p>
          <p>&nbsp;</p>
        </Col>
        {members.map((member) => (
          <MemberIcon
            key={member.name}
            name={member.name}
            title={member.title}
            image={member.image}
            linkedIn={member.linkedIn}
          />
        ))}
      </Row>
      <Row>
        <Col md="12" className="text-center">
          <h2> Designers </h2>
          <p>
            As the Cornell chapter of Hack4Impact, a 501 (c)(3) nonprofit, we strive to create
            software that can deliver tangible social impact in our communities and make a real
            difference in people's lives. We're as an organization, are focused on community, both
            within our Cornell chapter and with chapters nationally. Join us and start learning more
            about how technology can be used for social impact!
          </p>
          <p>&nbsp;</p>
        </Col>
        {members.map((member) => (
          <MemberIcon
            key={member.name}
            name={member.name}
            title={member.title}
            image={member.image}
            linkedIn={member.linkedIn}
          />
        ))}
      </Row>
      <Row>
        <Col md="12" className="text-center">
          <h2> Product Research </h2>
          <p>
            As the Cornell chapter of Hack4Impact, a 501 (c)(3) nonprofit, we strive to create
            software that can deliver tangible social impact in our communities and make a real
            difference in people's lives. We're as an organization, are focused on community, both
            within our Cornell chapter and with chapters nationally. Join us and start learning more
            about how technology can be used for social impact!
          </p>
          <p>&nbsp;</p>
        </Col>
        {members.map((member) => (
          <MemberIcon
            key={member.name}
            name={member.name}
            title={member.title}
            image={member.image}
            linkedIn={member.linkedIn}
          />
        ))}
      </Row>
      <h2 className="p-5 m-3 center"> Alumni </h2>
      <Row>
        {alumni.map((member) => (
          <MemberIcon
            key={member.name}
            name={member.name}
            title={member.title}
            image={member.image}
            linkedIn={member.linkedIn}
          />
        ))}
      </Row>
    </Container>
  );
}

export default Team;
