import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import ReactMarkdown from "react-markdown";
import Helmet from "react-helmet";

import Layout from "../components/Layout";
import HTMLContent from "../components/Content";
import "../styles/about-page.scss";

export const BasePageTemplate = props => {
  const { page } = props;
  const { title, organizers } = page.frontmatter;

  return (
    <article className="base">
      <div className="base-container  container">
        <section className="base-header">
          <div className="base-titleWrapper">
            <h1 className="base-title">{title}</h1>
          </div>
        </section>
        <section className="section">
          {/* The page.html is actually markdown when viewing the page from the netlify CMS,
              so we must use the ReactMarkdown component to parse the mardown in that case  */}
          {page.bodyIsMarkdown ? (
            <ReactMarkdown className="base-description" source={page.html} />
          ) : (
            <HTMLContent className="base-description" content={page.html} />
          )}
        </section>
      </div>
    </article>
  );
};

const BasePage = ({ data }) => {
  const { markdownRemark: page, footerData, navbarData, site } = data;
  const {
    frontmatter: {
      seo: { title: seoTitle, description: seoDescription, browserTitle },
    },
  } = page;

  return (
    <Layout footerData={footerData} navbarData={navbarData} site={site}>
      <Helmet>
        <meta name="title" content={seoTitle} />
        <meta name="description" content={seoDescription} />
        <title>{browserTitle}</title>
      </Helmet>
      <BasePageTemplate page={{ ...page, bodyIsMarkdown: false }} />
    </Layout>
  );
};

BasePage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default BasePage;

export const basePageQuery = graphql`
  query BasePage($id: String!) {
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
