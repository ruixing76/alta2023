import { graphql } from 'gatsby'
import StandardPageTemplate from "../components/StandardPageTemplate";
import React from "react";
import Layout from "../components/Layout";
import PageHelmet from "../components/PageHelmet";
import "../styles/about-page.scss";

const SinglePaperListing = ({paper}) => (
  <tr>
    <td>{paper.title}</td>
    <td>{paper.authors}</td>
  </tr>
);

const PaperListing = ({papers}) => (
  <table>
    { papers.map(p => <SinglePaperListing paper={p}/>) }
  </table>
);

const PapersPage = ({ data }) => {
  const { footerData, navbarData, site, markdownRemark: page } = data;
  const { edges: paperNodes } = data.allSubmissionCsv;
  const papers = paperNodes.map(pn => pn.node)

  return (
    <Layout footerData={footerData} navbarData={navbarData} site={site}>
      <PageHelmet page={page} />
      <StandardPageTemplate page={{ ...page }}>
        <PaperListing papers={papers}/>
      </StandardPageTemplate>
    </Layout>
  );
};

export default PapersPage;

export const submissionsQuery = graphql`
  query Submissions($id: String!) {
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
    allSubmissionCsv {
      edges {
        node {
          number
          trackName
          title
          authors
          abstract
        }
      }
    }
    ...LayoutFragment
  }
`
