import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import PageHelmet from "../components/PageHelmet";
import "../styles/featured-speakers-page.scss";
import StandardPageTemplate from "../components/StandardPageTemplate";
import HTMLContent from "../components/Content";
import FeaturedTalkListing from "../components/FeaturedSpeakerListing";

const FeaturedSpeakersPage = ({ data }) => {
  const { markdownRemark: page, footerData, navbarData, site } = data;
  const { talks } = page.frontmatter;

  return (
    <Layout footerData={footerData} navbarData={navbarData} site={site}>
      <PageHelmet page={page} />
      <StandardPageTemplate page={{ ...page }}>
        <HTMLContent className="about-description" content={page.html} />
        <FeaturedTalkListing title={page.title} talks={talks}/>
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
        talks {
          title
          abstract
          speakers {
            name
            bio
            affiliation
            photo
          }
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
