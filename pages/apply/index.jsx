import React from 'react';
import Faq from '../../components/faq';
import GradientBanner from '../../components/gradientBanner';
import Head from '../../components/head';
import fetchContent from '../../utils/fetchContent';
import InvolveSection from '../../components/involveSection';
import Section from '../../components/section';
import { Container } from 'reactstrap';

function ApplyPage({
  applicationLink,
  openRolesLink,
  description,
  timelineCollection,
  testimonialsCollection,
  faqsCollection,
}) {
  return (
    <>
     <Head title="Apply" />
      <GradientBanner
        title="Apply"
        subHeadline="We're open to developers and designers of all backgrounds! Recruitment occurs in the beginning of the Fall and Spring Semester."
        arrow
      />
      <Section>
        <Container>
          <InvolveSection />
        </Container>
      </Section>
      {faqsCollection?.items?.length > 0 && <Faq questions={faqsCollection.items} />}
    </>
  );
}

export default ApplyPage;

export async function getStaticProps() {
  const {
    websiteLayout: { studentApplication },
  } = await fetchContent(`
  {
    websiteLayout(id: "${process.env.LAYOUT_ENTRY_ID}") {
      studentApplication {
        applicationLink
        openRolesLink
        description {
          json
        }
        timelineCollection {
          items {
            header
            body {
              json
            }
            image {
              url
              description
            }
          }
        }
        testimonialsCollection {
          items {
            author
            quote {
              json
            }
          }
        }
        faqsCollection {
          items {
            question
            answer {
              json
            }
          }
        }
      }
    }
  }
  `);

  return {
    props: studentApplication,
  };
}
