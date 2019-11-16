import { graphql } from 'gatsby'
import StandardPageTemplate from "../components/StandardPageTemplate";
import React from "react";
import Layout from "../components/Layout";
import PageHelmet from "../components/PageHelmet";
import "../styles/papers-page.scss";

const trackNames = {
  1: "Long Papers",
  2: "Short Papers",
  3: "Unpublished Abstracts (Presentation Only)"
}

const SinglePaperListing = ({ paper }) => (
  <article className="single-paper-listing" title={paper.abstract}>
    <span className="paper-authors">{paper.authors}</span>
    <span className="paper-title">{paper.title}</span>
  </article>
);

const TrackPaperListing = ({ track, papers }) => (
  <section className="track-paper-listing">
    <h3 className="track-name">{track}</h3>
    <section className="papers-in-track">
      { papers.map(p => <SinglePaperListing paper={p} key={p.number} />) }
    </section>
  </section>
);

const PapersPage = ({ data }) => {
  const { footerData, navbarData, site, markdownRemark: page } = data;
  const { group: tracksFromGql } = data.allSubmissionCsv;
  const tracks = tracksFromGql.map ( tfg => {
    const { edges: paperNodes, fieldValue: trackNumber } = tfg;
    const papers = paperNodes.map(pn => pn.node);
    const track = trackNames[trackNumber];
    return { papers, track };
  })

  return (
    <Layout footerData={footerData} navbarData={navbarData} site={site}>
      <PageHelmet page={page} />
      <StandardPageTemplate page={{ ...page }}>
        {tracks.map(({ track, papers }) => <TrackPaperListing track={track} papers={papers}/>)}
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
    allSubmissionCsv(sort: {fields: number}) {
      group(field: trackNumber) {
        edges {
          node {
            number
            abstract
            authors
            title
          }
        }
        fieldValue
      }
    }
    ...LayoutFragment
  }
`
