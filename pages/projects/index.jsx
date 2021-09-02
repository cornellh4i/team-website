import React from 'react';
import Head from '../../components/head';
import GradientBanner from '../../components/gradientBanner';
import ProjectList from '../../components/projects/projectList';
import ProjectExplore from '../../components/unused/projectExplore';
import fetchContent from '../../utils/fetchContent';
import ActionButton from '../../components/actionButton';

function Projects({ projects }) {
  return (
    <div>
      <Head title="Our Work" />
      <GradientBanner
        arrow
        title="Our Work"
        subHeadline="In today&#39;s world, we are capable of changing the lives of those
                halfway across the country. While tech has enabled us to have a
                larger reach, we also understand that we have a responsibility
                to build tools that are more than just pet projects. We strive
                to deliver incredible value to the nonprofits we are fortunate
                enough to work with and look forward to seeing our products
                continue to be used for years to come.">
        <ActionButton
          className="mr-3"
          link="https://github.coecis.cornell.edu/hack4impact-cornell/">
          See our GitHub
        </ActionButton>
        <ActionButton link="https://medium.com/cornellh4i">See our Blog</ActionButton>
      </GradientBanner>
      <ProjectList projects={projects} />
    </div>
  );
}

export default Projects;

export async function getStaticProps() {
  const {
    websiteLayout: { projectsCollection },
  } = await fetchContent(`
  {
    websiteLayout(id: "${process.env.LAYOUT_ENTRY_ID}") {
      projectsCollection {
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
          completedIn
        }
      }
    }
  }
  `);

  return {
    props: {
      projects: projectsCollection.items,
    },
  };
}
