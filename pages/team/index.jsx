import React from 'react';
import GradientBanner from '../../components/gradientBanner';
import CoverBanner from '../../components/CoverBanner';
import Head from '../../components/head';
import TeamList from '../../components/team/teamList';
import Alumni from '../../components/team/alumni';
import fetchContent from '../../utils/fetchContent';

function TeamPage({ members, alumni }) {
  return (
    <>
      <Head title="Apply" />
      <CoverBanner
        style={{ marginTop: 'var(--nav-height)' }}
        // style={{
        //   backgroundImage:
        //     'url(' +
        //     'https://greatpeopleinside.com/wp-content/uploads/2019/11/team-building-1030x579.jpg' +
        //     ')',
        //   backgroundPosition: 'center',
        //   backgroundSize: 'cover',
        //   backgroundRepeat: 'no-repeat',
        // }}
        arrow
        title="Our Team"
        subHeadline="At Hack4Impact Cornell, we're fortunate to have a passionate and talented group of 
        software developers, designers, and organizers who help turn our vision into a reality."
        backgroundImage={'https://i.imgur.com/U46l1Xe.jpg'}
      />
      <p>&nbsp;</p>
      <TeamList members={members} />
      <Alumni alumni={alumni} />
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
    description { 
      json
    }
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
