import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import HTMLContent from "../components/Content";
import PageHelmet from "../components/PageHelmet";
import "../styles/about-page.scss";
import StandardPageTemplate from "../components/StandardPageTemplate";


const DefaultPage = ({ data }) => {
  const { markdownRemark: page, footerData, navbarData, site } = data;
  const { organizers } = page.frontmatter;

  return (
    <Layout footerData={footerData} navbarData={navbarData} site={site}>
      <PageHelmet page={page} />
      <StandardPageTemplate page={{ ...page }}>
        <HTMLContent className="default-content" content={page.html} />
      </StandardPageTemplate>
    </Layout>
  );
};

DefaultPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default DefaultPage;

export const defaultPageQuery = graphql`
  query DefaultPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
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
