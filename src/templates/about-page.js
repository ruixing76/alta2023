import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import ReactMarkdown from "react-markdown";

import Layout from "../components/Layout";
import HTMLContent from "../components/Content";
import OrganizerSection from "../components/OrganizerSection";
import PageHelmet from "../components/PageHelmet";
import "../styles/about-page.scss";

export const AboutPageTemplate = props => {
  const { page } = props;
  const { title, organizers } = page.frontmatter;

  return (
    <article className="about">
      <div className="about-container  container">
        <section className="about-header">
          <div className="about-titleWrapper">
            <h1 className="about-title">{title}</h1>
          </div>
        </section>
        <section className="section">
          {props.children}
        </section>
      </div>
      {organizers !== null ? (<OrganizerSection organizers={organizers} />) : null}
    </article>
  );
};

const AboutPage = ({ data }) => {
  const { markdownRemark: page, footerData, navbarData, site } = data;

  return (
    <Layout footerData={footerData} navbarData={navbarData} site={site}>
      <PageHelmet page={page} />
      <AboutPageTemplate page={{ ...page }}>
        <HTMLContent className="about-description" content={page.html} />
      </AboutPageTemplate>
    </Layout>
  );
};

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AboutPage;

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        organizers {
          title
          gallery {
            image
            imageAlt
            name
            role
            organization
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
