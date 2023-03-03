import React from 'react';
// import { Container, Row, Card, CardDeck, CardBody } from 'reactstrap';
import { Container, Row } from 'reactstrap';
import Section from '../section';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

const OurValues = ({ content }) => (
  <Section>
    <Container>
      <Row className="text-center">
        <div className="text-center project-detail-title">
          <h2>Our Values</h2>
        </div>
      </Row>

      <Row style={{ paddingBottom: '70px' }}>
        <div className="left-image">
          <img src={content[0].image.url} className="img-fluid" alt="Hack4Impact Team" />
        </div>

        <div className="right-text">
          <p className="mission-title">{content[0].header}</p>
          <p className="mission-text">
            <div
              dangerouslySetInnerHTML={{
                __html: documentToHtmlString(content[0].body.json),
              }}></div>
          </p>
        </div>
      </Row>

      <Row style={{ paddingBottom: '70px' }}>
        <div className="left-text">
          <p className="mission-title">{content[1].header}</p>
          <p className="mission-text">
            <div
              dangerouslySetInnerHTML={{
                __html: documentToHtmlString(content[1].body.json),
              }}></div>
          </p>
        </div>
        <div className="left-image">
          <img src={content[1].image.url} className="img-fluid" alt="Hack4Impact Team" />
        </div>
      </Row>

      <Row style={{ paddingBottom: '70px' }}>
        <div className="left-image">
          <img src={content[2].image.url} className="img-fluid" alt="Hack4Impact Team" />
        </div>
        <div className="right-text">
          <p className="mission-title">{content[2].header}</p>
          <p className="mission-text">
            <div
              dangerouslySetInnerHTML={{
                __html: documentToHtmlString(content[2].body.json),
              }}></div>
          </p>
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
