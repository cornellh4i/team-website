import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Spring } from 'react-spring/renderprops.cjs';
import ContentBlock from './ContentBlock';

const CoverBanner = ({ title, subHeadline, style, backgroundImage }) => (
  <div>
    <section className="banner-section" style={style}>
      <div
        className="image"
        style={{
          position: 'absolute',
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      <Container className="align-start">
        <Row style={{ marginTop: '184px', marginLeft: '-235px' }}>
          <Col md="12" className="text-start">
            <Spring
              config={{ delay: 700 }}
              from={{ opacity: 0, transform: 'translate3d(0px,0,0)' }}
              to={{ opacity: 100, transform: 'translate3d(-235px,0px,0)' }}>
              {(props) => (
                <div style={props} className="main-headline">
                  <h1>{title}</h1>
                </div>
              )}
            </Spring>
          </Col>
          {subHeadline && (
            <Row style={{ marginTop: '-10px', marginLeft: '-235px' }}>
              <Spring
                config={{ delay: 500 }}
                from={{ opacity: 0, transform: 'translate3d(0px,0,0)' }}
                to={{ opacity: 100, transform: 'translate3d(-235px,0px,0)' }}>
                {(props) => (
                  <div style={props} className="text-start sub-headline">
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
        </Row>
      </Container>
    </section>
    <style jsx>{`
      $tablet-width: 800px;

      section {
        background: linear-gradient(
          180deg,
          rgba(160, 185, 207, 0.24) 17.71%,
          rgba(215, 233, 255, 0.72) 40.63%,
          #c0f0ff 97.4%
        );
        padding: 80px 0;
        padding-top: calc(10px + var(--nav-height));
        height: calc(370px + 80px);

        @media (max-width: $tablet-width) {
          padding: 40px 0;
          padding-top: calc(40px + var(--nav-height));
        }
      }

      .image {
        z-index: -1;
        height: 370px;
        width: 100%;
      }

      .main-headline h1 {
        font-size: 60px;
        font-weight: bold;

        @media (max-width: $tablet-width) {
          font-size: 36px;
        }
      }
      .sub-headline {
        font-weight: bold;
        font-size: 22px;
        max-width: 100%;
        padding: 0 5%;
      }
      // .arrow {
      //   margin: auto;
      //   width: 0;
      //   height: 0;
      //   border-left: 100px solid transparent;
      //   border-right: 100px solid transparent;
      //   border-top: 60px solid var(--secondary-seafoam);
      // }
    `}</style>
  </div>
);

export default CoverBanner;
