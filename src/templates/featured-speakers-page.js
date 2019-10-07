import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import PageHelmet from "../components/PageHelmet";
import "../styles/featured-speakers-page.scss";
import StandardPageTemplate from "../components/StandardPageTemplate";
import FeaturedSpeakerListing from "../components/FeaturedSpeakerListing";

const FeaturedSpeakersPage = ({ data }) => {
  const { markdownRemark: page, footerData, navbarData, site } = data;
  const { title, speakers } = page.frontmatter;

  return (
    <Layout footerData={footerData} navbarData={navbarData} site={site}>
      <PageHelmet page={page} />
      <StandardPageTemplate page={{ ...page }}>
        <FeaturedSpeakerListing title={page.title} speakers={speakers}/>
      </StandardPageTemplate>
    </Layout>
  );
};

FeaturedSpeakersPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default FeaturedSpeakersPage;

export const featuredSpeakersPageQuery = graphql`
  query FeatureSpeakersPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        speakers {
          name
          bio
          affiliation
          photo
          title
          abstract
        }
        seo {
          browserTitle
          title
          description
        }
      }
    }
    ...LayoutFragment
  }
`;
