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
  linkedInLogo: file(relativePath: { eq: "community/linkedIn.png" }) {
    publicURL
  }
  dribbleLogo: file(relativePath: { eq: "community/dribble.svg" }) {
    publicURL
  }
  youtubeLogo: file(relativePath: { eq: "community/youtube.svg" }) {
    publicURL
  }
  githubLogo: file(relativePath: { eq: "community/github.svg" }) {
    publicURL
  }
  twitterLogo: file(relativePath: { eq: "community/twitter.svg" }) {
    publicURL
  }
  codepenLogo: file(relativePath: { eq: "community/codepen.png" }) {
    publicURL
  }
  facebookLogo: file(relativePath: { eq: "community/facebook.svg" }) {
    publicURL
  }
  mediumLogo: file(relativePath: { eq: "community/medium.png" }) {
    publicURL
  }
  websiteLogo: file(relativePath: { eq: "community/website.png" }) {
    publicURL
  }
}`
