import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Helmet from "react-helmet";
import isAfter from "date-fns/is_after";

import Layout from "../components/Layout";
import Map from "../components/Map";
import HeadshotPlaceholder from "../img/headshot-placeholder.svg";
import CustomLink from "../components/CustomLink";
import "../styles/home.scss";

export const HomePageTemplate = ({ home }) => {
  return (
    <>
      <section className="header">
        <div className="header-container  container">
          {home.headerImage && <img className="header-image" src={home.headerImage.image} alt={home.headerImage.imageAlt} />}
          <h3 className="header-tagline">
            <span className="header-taglinePart">{home.title}</span>
          </h3>
        </div>
      </section>
     </>
  );
};

class HomePage extends React.Component {
  render() {
    const { data } = this.props;
    const {
      data: { footerData, navbarData },
    } = this.props;
    const { frontmatter: home } = data.homePageData.edges[0].node;
    const {
      seo: { title: seoTitle, description: seoDescription, browserTitle },
    } = home;
    return (
      <Layout footerData={footerData} navbarData={navbarData}>
        <Helmet>
          <meta name="title" content={seoTitle} />
          <meta name="description" content={seoDescription} />
          <title>{browserTitle}</title>
        </Helmet>
        <HomePageTemplate home={home} />
      </Layout>
    );
  }
}

HomePage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default HomePage;

export const pageQuery = graphql`
  query HomePageQuery {
    ...LayoutFragment
    homePageData: allMarkdownRemark(filter: { frontmatter: { templateKey: { eq: "home-page" } } }) {
      edges {
        node {
          frontmatter {
            title
            headerImage {
              image
              imageAlt
            }
            seo {
              browserTitle
              title
              description
            }
          }
        }
      }
    }
  }
`;
