import React from 'react';
import Faq from '../../components/faq';
import Timeline from '../../components/apply/timeline';
import CoverBanner from '../../components/CoverBanner';
import Head from '../../components/head';
import fetchContent from '../../utils/fetchContent';
import InvolveSection from '../../components/apply/involveSection';
import Section from '../../components/section';
import { Container } from 'reactstrap';

function ApplyPage({ faqsCollection, timelineCollection }) {
  return (
    <>
      <Head title="Apply" />
      <CoverBanner
        style={{ marginTop: 'var(--nav-height)' }}
        title="Apply"
        subHeadline="We're open to developers and designers of all backgrounds! Recruitment is closed now, but check in later!"
        backgroundImage={'https://i.imgur.com/wsEPhxh.png'}
        arrow
      />
      <Section>
        <Container>
          <InvolveSection />
        </Container>
      </Section>
      <Section>
        <Container>
          <div className="text-center">
            <h2 className="recruitment-process"> Recruitment Process </h2>
          </div>
          <div className="text-center ">
            {timelineCollection?.items?.length > 0 && <Timeline steps={timelineCollection.items} />}
          </div>
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
