import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";

import "../styles";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

const TemplateWrapper = ({ footerData = null, navbarData = null, site = null, children }) => (
  <div>
    <Helmet>
      <html lang="en" />
      <meta name="keywords" content="workshop nlp natural language processing australia australasian australian melbourne conference alta altw 2020" />
      <meta name="google-site-verification" content="oHsm8TfiBgX6DjW9BTIOFEfT80pknaoqfoAi0G7bmS4" />
    </Helmet>
    <Navbar data={navbarData} />
    <main>{children}</main>
    <Footer data={footerData} site={site} />
  </div>
);

export const query = graphql`
  fragment LayoutFragment on Query {
    footerData: allMarkdownRemark(filter: { frontmatter: { templateKey: { eq: "footer" } } }) {
      edges {
        node {
          id
          frontmatter {
            logoImage {
              image
              imageAlt
              taglines
              orgLink
            }
            socialLinks {
              image
              imageAlt
              label
              linkURL
            }
          }
        }
      }
    }
    navbarData: allMarkdownRemark(filter: { frontmatter: { templateKey: { eq: "navbar" } } }) {
      edges {
        node {
          id
          frontmatter {
            logoImage {
              image
              imageAlt
            }
            menuItems {
              label
              linkType
              linkURL
              longLabel
            }
          }
        }
      }
    }
    site {      
      siteMetadata {       
        sponsors {
          name
          longName
          level
          link
          image
        }
      }    
    }
  }
`;

export default TemplateWrapper;
