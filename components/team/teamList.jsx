import { Container, Row, Col } from 'reactstrap';
import MemberIcon from '../memberIcon';
import groupBy from '../../utils/groupBy';

export default function TeamList({ members }) {
  const teamByPosition = groupBy(members, 'title');

  // console.log(teamByPosition);
  return (
    <Container>
      {Object.entries(teamByPosition).map(([title, members]) => (
        <div key={title}>
          <Col>
            <h2 className="section-title center">{title}</h2>
            <p className="center">
              {' '}
              <RoleDescription title={title} />{' '}
            </p>
            <p>&nbsp;</p>
          </Col>
          <Row>
            {members.map((member) => (
              <MemberIcon
                key={member.name}
                name={member.name}
                title={JSON.parse(
                  JSON.stringify(member.description.json.content[0].content[0].value),
                )}
                image={member.image}
                linkedIn={member.linkedIn}
              />
            ))}
          </Row>
          <hr size="3" width="60%" color="blue"></hr>
        </div>
      ))}
    </Container>
  );
}

function RoleDescription({ title }) {
  if (title === 'Developers') {
    return '';
  } else if (title === 'Designers') {
    return '';
  }
  return '';
}
