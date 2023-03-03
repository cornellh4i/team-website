import React from 'react';
// import { Container, Row, Card, CardDeck, CardBody } from 'reactstrap';
import { Container, Row } from 'reactstrap';
import Section from '../section';
// import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

const OurValues = () => (
  // { content }
  <Section>
    <Container>
      <Row className="text-center">
        <div className="text-center project-detail-title">
          <h2>Our Values</h2>
        </div>
      </Row>

      <Row style={{ paddingBottom: '70px' }}>
        <div className="left-image">
          <img src="/images/figmaworkshopfa22.jpg" className="img-fluid" alt="Hack4Impact Team" />
        </div>

        <div className="right-text">
          <p className="mission-title">Go Beyond Technology</p>
          <p className="mission-text">
            Technology impacts people. We seek to educate ourselves about the implications of
            technology on various communities, while making mindful decisions about the potential
            impact of the projects that we develop.
          </p>
        </div>
      </Row>

      <Row style={{ paddingBottom: '70px' }}>
        <div className="left-text">
          <p className="mission-title">Community and Collaboration</p>
          <p className="mission-text">
            Through a tight-knit community, we strive to help each other learn and grow in the
            social impact and engineering space. Connect with local members, alums, and people from
            across the country with varied interests, skills, and passions.
          </p>
        </div>
        <div className="left-image">
          <img src="/images/winetoursp22.JPG" className="img-fluid" alt="Hack4Impact Team" />
        </div>
      </Row>

      <Row style={{ paddingBottom: '70px' }}>
        <div className="left-image">
          <img src="/images/eboardsocialfa22.JPG" className="img-fluid" alt="Hack4Impact Team" />
        </div>
        <div className="right-text">
          <p className="mission-title">High Accountability</p>
          <p className="mission-text">
            Technology impacts people. We seek to educate ourselves about the implications of
            technology on various communities, while making mindful decisions about the potential
            impact of the projects that we develop.
          </p>
        </div>
      </Row>

      {/* <CardDeck>
        {content.map(({ header, body, image }) => (
          <Card key={header}>
            <img className="card-img-top" src={image.url} alt={image.description} />
            <CardBody>
              <h4 className="text-title">{header}</h4>
              <div
                dangerouslySetInnerHTML={{
                  __html: documentToHtmlString(body.json),
                }}></div>
            </CardBody>
          </Card>
        ))}
      </CardDeck> */}
    </Container>
    <style jsx>{`
      .left-image {
        width: 30%;
        left: 0px;
        height: 100%;
        margin: auto;
      }
      .right-image {
        width: 30%;
        right: 0px;
        height: 100%;
        margin: auto;
      }
      .left-text {
        width: 37%;
        left: 0px;
        height: 100%;
        margin: auto;
      }
      .right-text {
        width: 37%;
        right: 0px;
        height: 100%;
        margin: auto;
      }
      .mission-title {
        font-weight: bold;
        font-size: 25px;
      }
      .mission-text {
        margin: auto;
      }
      .value-row {
        padding-bottom: 100px !important;
      }
      .mission-body-text {
        color: #323648;
        font-weight: 550;
        letter-spacing: 0.6px;
      }
    `}</style>
  </Section>
);

export default OurValues;
