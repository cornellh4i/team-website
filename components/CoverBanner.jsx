import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Spring } from 'react-spring/renderprops.cjs';
import ContentBlock from './ContentBlock';

const CoverBanner = ({ title, subHeadline, style, backgroundImage, children }) => (
  <div>
    <section className="banner-section" style={style}>
      <Container fluid className="align-middle">
        <Row>
          <Col md="12" className="text-left">
            <Spring
              config={{ delay: 700 }}
              from={{ opacity: 0, transform: 'translate3d(-100px,0,0)' }}
              to={{ opacity: 100, transform: 'translate3d(0,0px,0)' }}>
              {(props) => (
                <div style={props} className="main-headline">
                  <h1>{title}</h1>
                </div>
              )}
            </Spring>

            {subHeadline && (
              <Row>
                <Spring
                  config={{ delay: 500 }}
                  from={{ opacity: 0, transform: 'translate3d(-100px,0,0)' }}
                  to={{ opacity: 100, transform: 'translate3d(0,0px,0)' }}>
                  {(props) => (
                    <div style={props} className="sub-headline">
                      {/* if it has a json key, we'll assume it's Rich Text from Contentful */}
                      {subHeadline.json ? (
                        <ContentBlock content={subHeadline.json} />
                      ) : (
                        <p>{subHeadline}</p>
                      )}
                    </div>
                  )}
                </Spring>
              </Row>
            )}
          </Col>
          <Row className="w-100 pt-4">
            <Spring
              config={{ delay: 550 }}
              from={{ opacity: 0, transform: 'translate3d(-100px,0,0)' }}
              to={{ opacity: 100, transform: 'translate3d(0,0px,0)' }}>
              {(props) => (
                <Col className="d-flex justify-content-center" style={props}>
                  {children}
                </Col>
              )}
            </Spring>
          </Row>
        </Row>
      </Container>
    </section>
    <style jsx>{`
      $tablet-width: 800px;

      section {
        padding: 80px 70px 0 0;
        padding-top: calc(60px + var(--nav-height));
        background-image: linear-gradient(
            180deg,
            rgba(160, 185, 207, 0.24) 17.71%,
            rgba(215, 233, 255, 0.72) 40.63%,
            #c0f0ff 97.4%
          ),
          url(${backgroundImage});
        background-size: cover;
        @media (max-width: $tablet-width) {
          padding: 40px 0;
          padding-top: calc(40px + var(--nav-height));
        }
      }

      .main-headline h1 {
        font-size: 60px;
        font-weight: bold;
        margin-left: 7%;
        font-family: 'HK Grotesk';
        font-style: normal;
        font-weight: 700;
        font-size: 56px;
        line-height: 67px;

        color: #000000;

        @media (max-width: $tablet-width) {
          font-size: 36px;
        }
      }
      .sub-headline {
        color: #129edf;
        font-weight: bold;
        max-width: 100%;
        padding: 0;
        margin-top: 20px;
        margin-right: 20%;
        margin-left: 7%;
        font-family: 'HK Grotesk';
        font-style: normal;
        font-weight: 700;
        font-size: 22px;
        line-height: 27px;
        color: #000000;
        @media (max-width: $tablet-width) {
          margin-right: 0;
        }
      }
      p {
        font-size: 20px;
        margin-bottom: 28px auto;
      }
    `}</style>
  </div>
);

export default CoverBanner;
