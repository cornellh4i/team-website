import React from 'react';
import Head from '../components/head';
import Section from '../components/section';
import { Container } from 'reactstrap';

function Error404() {
  return (
    <>
      <Head title="Page Not Found" />
      <Section grey>
        <Container>
          <h1 className="text-center error-title"> 404 Page Not Found </h1>
          <p className="text-center error-description"> Sorry! This page does not exist! </p>
        </Container>
        <style jsx>{`
        .error-title {
          margin-top: 120px;
          margin-bottom: 10px;
        }
        
        .error-description {
          margin-top: 20px;
          margin-bottom: 15px;
        }
      `}</style>

      </Section>
    </>
  );
}

export default Error404;
