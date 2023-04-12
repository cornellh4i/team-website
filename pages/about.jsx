import React from 'react';
import GradientBanner from '../components/gradientBanner';
import MissionSection from '../components/about/missionSection';
import CoverBanner from '../components/CoverBanner';
import OurValues from '../components/about/ourValues';
import Head from '../components/head';
import fetchContent from '../utils/fetchContent';

function AboutPage({ values }) {
  return (
    <div>
      <Head title="About Us" />
      <CoverBanner
        style={{ marginTop: 'var(--nav-height)' }}
        title="We believe in using tech for good."
        subHeadline="Hack4Impact believes in technology’s huge potential to empower activists and humanitarians to create lasting and impactful social change. We work to foster the wider adoption of software as a tool for social good."
        arrow
        backgroundImage={'https://i.imgur.com/ETjaNxN.jpeg'}
      />
      <MissionSection />
      <OurValues content={values} />
    </div>
  );
}

export default AboutPage;

export async function getStaticProps() {
  const {
    websiteLayout: { chapterValuesCollection },
  } = await fetchContent(`
  {
    websiteLayout(id:"${process.env.LAYOUT_ENTRY_ID}") {
      chapterValuesCollection {
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
    }
  }
  `);
  return {
    props: {
      values: chapterValuesCollection.items,
    },
  };
}
