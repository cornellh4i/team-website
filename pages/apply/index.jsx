import React from 'react';
import GradientBanner from '../../components/gradientBanner';
import Head from '../../components/head';
import { Container } from 'reactstrap';
import InvolveSection from '../../components/involveSection';
import Section from '../../components/section';

function ApplyPage() {
  return (
    <>
      <Head title="Apply" />
      <GradientBanner
        title="Apply"
        subHeadline="We're open to developers and designers of all backgrounds! Recruitment occurs at the start of the Fall and Spring Semester."
        arrow
      />
      <Section>
        <Container>
          <InvolveSection />
        </Container>
      </Section>
    </>
  );
}

export default ApplyPage;
