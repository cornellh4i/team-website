import React from 'react';
import { Row, Col } from 'reactstrap';
import ActionButton from '../actionButton';
import Faq from '../faq';

const InvolveSection = ({ faqsCollection }) => (
  <Row>
    <Col md="12" className="text-center">
      <h2 className="project-detail-title"> Applications are open for Fall 2023 </h2>
    </Col>
    <Col md="12" className="text-center">
      <p className="mission-body-text">
        Are you passionate about software and social impact? Are you looking to join a unique and
        close-knit community? Join Us! Our mission provides a distinct experience to develop
        technical skills and interact with nonprofit clients all while applying your skills to
        impact real lives.
      </p>
    </Col>

    <Col md="4">
      <div className="involved-container">
        <h3 className="text-title text-center">Designers</h3>
        <a>
          <img src="/images/Designers.png" className="img-fluid" alt="Hack4Impact Designers" />
        </a>
        <Row>
          <p
            style={{
              padding: '32px 0 35px 0',
            }}>
            Interested in designing projects for a wide variety of applications and real partners?
            Apply to Hack4Impact's design team!
          </p>
        </Row>
      </div>
    </Col>
    <Col md="4">
      <div className="involved-container">
        <h3 className="text-title text-center">Developers</h3>
        <a>
          <img src="/images/Developers.png" className="img-fluid" alt="Hack4Impact Developers" />
        </a>
      </div>
      <Row>
        <p
          style={{
            padding: '42px 0 35px 0',
          }}>
          Interested in developing products for social good that benefit organizations in your
          community? Apply to Hack4Impact's development team!
        </p>
      </Row>
    </Col>
    <Col md="4">
      <div className="involved-container">
        <h3 className="text-title text-center">Business</h3>
        <a>
          <img src="/images/Business.png" className="img-fluid" alt="Hack4Impact Business Members" />
        </a>
        <Row>
          <p
            style={{
              padding: '28px 0 35px 0',
            }}>
            Interested in product research, marketing, finance, and innovation in the tech and
            social good space? Apply to Hack4Impact's business team!
          </p>
        </Row>
      </div>
    </Col>
    <Col md="12" className="text-center">
      <p className="mission-body-text">
        We are recruiting designers, developers, and business members during Fall 2023! All applicants must fill out the
        general project team application along with the Hack4Impact application below.
      </p>
    </Col>
    <Row>
      <p
        style={{
          padding: '38px 0 35px 0',
        }}></p>
    </Row>
    <div className="text-center ">
      <ActionButton teal link="https://bit.ly/h4i-application-fa23">
        H4I Application for All Positions! 
      </ActionButton>
    </div>
    <div className="text-center ">
      <ActionButton teal link="https://cornell.ca1.qualtrics.com/jfe/form/SV_8Cwqf6qrtGmT2wC">
        General Project Team Application
      </ActionButton>
    </div>

    {faqsCollection?.items?.length > 0 && <Faq questions={faqsCollection.items} />}
    <style jsx>{`
      img {
        display: block;
        margin: 7% auto;
        border-radius: 5px;
        box-shadow: 2px 2px 2px var(--gray);
        max-height: 260px; /* Temporary to preserve image heights */
      }
      .involved-container {
        margin-top: 30px;
      }
      .involved-container h3 {
        color: var(--gray);
      }
    `}</style>
  </Row>
);

export default InvolveSection;
