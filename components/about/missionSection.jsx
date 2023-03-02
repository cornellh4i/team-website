/*
  Mission Section holding the photo and our mission in the /about page
*/
import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const MissionSection = () => (
  <section className="mission-section">
    <Container>
      <Row>
        <Col md="12" className="text-center">
          <h2 className="project-detail-title">Our Mission</h2>
        </Col>
      </Row>

      <Row>
        <Col md="12" className="text-center">
          <p className="mission-body-text">
            Hack4Impact exists for both nonprofits and students. 
            We connect student software developers with nonprofits 
            and socially responsible organizations to develop powerful 
            new tools for social change to help further their mission. 
            We are committed to increasing awareness of technology's potential 
            for good through talks and workshops.
          </p>
        </Col>
      </Row>
      <Row>
        <div className="left-image">
          <img src="/images/socialsp22.jpg" className="img-fluid" alt="Hack4Impact Team" />
        </div>
        <div className="middle-image">
          <img src="/images/picnicsp22.JPG" className="img-fluid" alt="Hack4Impact Team" />
        </div>
        <div className="right-image">
          <img src="/images/awardsp22.JPG" className="img-fluid" alt="Hack4Impact Team" />
        </div>
      </Row>
    </Container>
    <style jsx>{`
      .left-image {
        width: 30%;
        left: 0px;
        height: 100%;
        margin: auto;
      }
      .middle-image {
        width: 30%;
        margin: auto;
        height: 100%;
      }
      .right-image {
        width: 30%;
        margin: auto;
        right: 0px;
        height: 100%;
      }
      .mission-body-text {
        color: #323648;

        font-weight: 550;
        letter-spacing: 0.6px;
      }
    `}</style>
  </section>
);

export default MissionSection;
