import { graphql } from 'gatsby';
import React from 'react';
import FedList from '../components/fedPreview/FedList';
import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = (props) => {
  const {linkedInLogo, dribbleLogo, youtubeLogo, githubLogo, twitterLogo,codepenLogo, facebookLogo, mediumLogo, websiteLogo} = props.data;
  const logos = {linkedInLogo, dribbleLogo, youtubeLogo, githubLogo, twitterLogo,codepenLogo, facebookLogo, mediumLogo, websiteLogo};

  return (
    <Layout>
      <SEO title="Home" keywords={[`front-end`, `experts`]} />
      <FedList feds={props.data.allGoogleSheetSheet1Row.nodes} logos={logos} />
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`query {
	allGoogleSheetSheet1Row {
    nodes {
      id
      name
      expertise
      email
      twitter
      facebook
      medium
      websiteblog
      linkedin
      youtube
      github
      codepen
    }
  }
  linkedInLogo: file(relativePath: { eq: "community/v2/linkedin.svg" }) {
    publicURL
  }
  dribbleLogo: file(relativePath: { eq: "community/v2/dribble.svg" }) {
    publicURL
  }
  youtubeLogo: file(relativePath: { eq: "community/v2/youtube.svg" }) {
    publicURL
  }
  githubLogo: file(relativePath: { eq: "community/v2/github.svg" }) {
    publicURL
  }
  twitterLogo: file(relativePath: { eq: "community/v2/twitter.svg" }) {
    publicURL
  }
  codepenLogo: file(relativePath: { eq: "community/v2/codepen.svg" }) {
    publicURL
  }
  facebookLogo: file(relativePath: { eq: "community/v2/facebook.svg" }) {
    publicURL
  }
  mediumLogo: file(relativePath: { eq: "community/v2/medium.svg" }) {
    publicURL
  }
  websiteLogo: file(relativePath: { eq: "community/v2/website.svg" }) {
    publicURL
  }
}`
