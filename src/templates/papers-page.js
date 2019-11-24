import { graphql } from 'gatsby'
import StandardPageTemplate from "../components/StandardPageTemplate";
import React from "react";
import Layout from "../components/Layout";
import PageHelmet from "../components/PageHelmet";
import HTMLContent from "../components/Content";
import "../styles/papers-page.scss";

const trackNames = {
  1: "Long Papers",
  2: "Short Papers",
  3: "Unpublished Abstracts"
}

const formats = {
  oral: "Oral Presentation",
  poster: "Poster",
  abstract: "Poster or Presentation"
}

const SinglePaperListing = ({ paper }) => (
  <article className="single-paper-listing" title={paper.abstract}>
    <span className="paper-authors">{paper.authors}</span>
    <span className="paper-title">{paper.title}</span>
  </article>
);

const TrackPaperListing = ({ track, papers, format }) => (
  <section className="track-paper-listing">
    <h3 className="track-name">{track}: {format}</h3>
    <section className="papers-in-track">
      { papers.map(p => <SinglePaperListing paper={p} key={p.number} />) }
    </section>
  </section>
);

const PapersPage = ({ data }) => {
  const { footerData, navbarData, site, markdownRemark: page } = data;
  const { group: tracksFromGql } = data.allSubmissionCsv;
  const tracks = tracksFromGql.map ( tfg => {
    const { edges: paperNodes, fieldValue: trackAndFormat } = tfg;
    const papers = paperNodes.map(pn => pn.node);
    const [trackNumber, formatName] = trackAndFormat.split(' ')
    const track = trackNames[trackNumber];
    const format = formats[formatName];
    return { papers, track, format };
  })

  return (
    <Layout footerData={footerData} navbarData={navbarData} site={site}>
      <PageHelmet page={page} />
      <StandardPageTemplate page={{ ...page }}>
        <HTMLContent className="default-content" content={page.html} />
        {tracks.map(({ track, papers, format }) => <TrackPaperListing track={track} papers={papers} format={format}/>)}
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
      group(field: trackFormat) {
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
