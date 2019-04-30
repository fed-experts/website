import { graphql } from 'gatsby';
import React from 'react';
import FedList from '../components/fedPreview/FedList';
import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = (props) => {

  return (
    <Layout>
      <SEO title="Home" keywords={[`front-end`, `experts`]} />
      <FedList feds={props.data.allGoogleSheetSheet1Row.nodes} />
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
}`
