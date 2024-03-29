/* eslint  no-unused-vars: 0 */
import React from 'react';
import Faq from '../../components/faq';
import Timeline from '../../components/apply/timeline';
import CoverBanner from '../../components/CoverBanner';
import Head from '../../components/head';
import fetchContent from '../../utils/fetchContent';
import InvolveSection from '../../components/apply/involveSection';
import Section from '../../components/section';
import { Container } from 'reactstrap';

function ApplyPage({ faqsCollection, timelineCollection, importantEventsCollection }) {
  return (
    <>
      <Head title="Apply" />
      <CoverBanner
        style={{ marginTop: 'var(--nav-height)' }}
        title="Apply"
        subHeadline="We're open to developers and designers of all backgrounds! Applications are open now, take a look at our timeline and feel free to reach out!"
        backgroundImage={'https://i.imgur.com/wsEPhxh.png'}
        arrow
      />
      {/* Application Timeline
      <Section>
        <Container>
          <div className="text-center">
            <div className="section-title">Fall 2023 Recruitment Timeline</div>
            {timelineCollection?.items?.length > 0 && (
              <Timeline steps={timelineCollection.items} activeIndex={1} />
            )}
          </div>
        </Container>
      </Section> */}
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
