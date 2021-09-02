import React from 'react';
import Banner from '../components/homepage/banner';
import OurWorkSection from '../components/homepage/ourWork';
import { ToastContainer } from 'react-toastify';
import Head from '../components/head';
import fetchContent from '../utils/fetchContent';

function Home({ previewProjects }) {
  return (
    <>
      <Head title="Hack4Impact Cornell" />
      <ToastContainer />
      <Banner />
      <OurWorkSection projects={previewProjects} />
    </>
  );
}

export default Home;

export async function getStaticProps() {
  const {
    websiteLayout: { projectsCollection },
  } = await fetchContent(`
  {
    websiteLayout(id: "${process.env.LAYOUT_ENTRY_ID}") {
      projectsCollection(limit: 3) {
        items {
          title
          description {
            json
          }
          thumbnail {
            url
            description
          }
          urlSlug
        }
      }
    }
  }
  `);
  return {
    props: {
      previewProjects: projectsCollection.items,
    },
  };
}
