import MemberIcon from '../memberIcon';
import { Container, Row, Col } from 'reactstrap';

function Alumni({ alumni }) {
  return (
    <Container>
      <Col md="12" className="text-center">
        <h2>Alumni</h2>
      </Col>
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

export default Alumni;
