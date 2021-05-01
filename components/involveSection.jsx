import React from 'react';
import { Row, Col } from 'reactstrap';
import BlockQuote from './blockQuote';
import ActionButton from './actionButton';
import Link from 'next/link';

const InvolveSection = () => (
  <Row>

    <Col md="12" className="text-center">
          <h2 className="project-detail-title"> Applications will reopen at the start of Fall 2021. </h2>
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
        <Link href="/apply/students">
          <a>
            <img src="/images/h4i-funny.jpg" className="img-fluid" alt="Sp18 team" />
          </a>
        </Link>
      </div>
      <Row>
        <p
          style={{
            padding: '38px 0 35px 0',
          }}>
          PLACEHOLDER: Are you passionate about software and Social Impact? Are you looking to join a unique and
          close-knit community? Join Us! Our mission provides a distinct experience to develop
          technical skills and interact with nonprofit clients all while applying your skills to
          impact real lives.
        </p>

        <div className="text-center">
          <ActionButton white link="/apply/students">
            Apply
          </ActionButton>
        </div>
      </Row>
    </Col>
    <Col md="5" className="offset-md-2">
      <div className="involved-container">
        <h3 className="text-title text-center">Designers</h3>
        <Link href="/apply/nonprofits">
          <a>
            <img src="/images/team-cheer.jpg" className="img-fluid" alt="Fa19 team" />
          </a>
        </Link>
        <Row>
        <p
          style={{
            padding: '38px 0 35px 0',
          }}>
          PLACEHOLDER: Are you passionate about software and Social Impact? Are you looking to join a unique and
          close-knit community? Join Us! Our mission provides a distinct experience to develop
          technical skills and interact with nonprofit clients all while applying your skills to
          impact real lives.
        </p>

        <div className="text-center">
          <ActionButton white link="/apply/students">
            Apply
          </ActionButton>
        </div>
      </Row>
      </div>
    </Col>
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
