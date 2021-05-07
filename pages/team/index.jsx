import React from 'react';
import GradientBanner from '../../components/gradientBanner';
import Head from '../../components/head';
import Team from '../../components/team/team';
import fetchContent from '../../utils/fetchContent';

function TeamPage({ members, alumni }) {
  return (
    <>
      <Head title="Apply" />
      <GradientBanner
        style={{
          backgroundImage:
            'url(' +
            'https://www.designscapescolorado.com/wp_uploads/2014/08/dog-in-landscape.jpg' +
            ')',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
        title="Our Team"
        subHeadline="At Hack4Impact Cornell, we're fortunate to have a passionate and talented group of 
        software developers, designers, and organizers who help turn our vision into a reality."
      />
      <Team members={members} alumni={alumni} />
    </>
  );
}

export default TeamPage;

export async function getStaticProps() {
  const {
    websiteLayout: { membersCollection, alumniCollection },
  } = await fetchContent(`
  fragment profile on MemberProfile {
    name
    title
    image {
      url
    }
    linkedIn
  } 
  
  {
    websiteLayout(id:"${process.env.LAYOUT_ENTRY_ID}") {
      membersCollection {
        items {
          ...profile
        }
      }
      alumniCollection {
        items {
          ...profile
        }
      }
    }
  }
  `);
  return {
    props: {
      members: membersCollection.items,
      alumni: alumniCollection.items,
    },
  };
}
