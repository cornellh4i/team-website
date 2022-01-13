import React from 'react';
import { Row, Col } from 'reactstrap';
import ActionButton from '../actionButton';
import Link from 'next/link';
import Faq from '../faq';

const InvolveSection = ({ faqsCollection }) => (
  <Row>
    <Col md="12" className="text-center">
      <h2 className="project-detail-title"> Applications are now open! </h2>
    </Col>
    <Col md="12" className="text-center">
      <p className="mission-body-text">
        Are you passionate about software and social impact? Are you looking to join a unique and
        close-knit community? Join Us! Our mission provides a distinct experience to develop
        technical skills and interact with nonprofit clients all while applying your skills to
        impact real lives.
      </p>
    </Col>

    <Col md="5">
      <div className="involved-container">
        <h3 className="text-title text-center">Developers</h3>
        <a>
          <img src="/images/CornellH4i2.jpg" className="img-fluid" alt="Hack4Impact Developers" />
        </a>
      </div>
      <Row>
        <p
          style={{
            padding: '38px 0 35px 0',
          }}>
          Interested in developing products for social good that benefit organizations in your
          community? Apply to Hack4Impact's development team!
        </p>

        <div className="text-center">
          <ActionButton white link="https://bit.ly/h4i-dev21">
            Apply
          </ActionButton>
        </div>
      </Row>
    </Col>
    <Col md="5" className="offset-md-2">
      <div className="involved-container">
        <h3 className="text-title text-center">Designers</h3>
        <a>
          <img src="/images/Designers.png" className="img-fluid" alt="Hack4Impact Designers" />
        </a>
        <Row>
          <p
            style={{
              padding: '38px 0 35px 0',
            }}>
            Interested in designing projects for a wide variety of applications and real partners?
            Apply to Hack4Impact's design team!
          </p>

          <div className="text-center ">
            <ActionButton white link="https://bit.ly/h4i-design21">
              Apply
            </ActionButton>
          </div>
        </Row>
      </div>
    </Col>

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
