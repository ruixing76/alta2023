import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import HTMLContent from "../components/Content";
import PageHelmet from "../components/PageHelmet";
import "../styles/about-page.scss";
import StandardPageTemplate from "../components/StandardPageTemplate";


const ProgramCommitteeMember = (props) => {
  const { name, affiliation } = props.member;
  return (
    <li className="program-committee-member">
      {name} ({affiliation})
  </li>
  );
}

const ProgramCommitteeListing = (props) => (
  <ul className="program-committee-listing">
    {props.members.map((member, idx) => <ProgramCommitteeMember member={member} key={idx} />)}
  </ul>
)

const ProgramCommitteePage = ({ data }) => {
  const { markdownRemark: page, footerData, navbarData, site } = data;
  const { members } = page.frontmatter;

  return (
    <Layout footerData={footerData} navbarData={navbarData} site={site}>
      <PageHelmet page={page} />
      <StandardPageTemplate page={{ ...page }}>
        <HTMLContent className="about-description" content={page.html} />
        <ProgramCommitteeListing members={members}></ProgramCommitteeListing>
      </StandardPageTemplate>
    </Layout>
  );
};

ProgramCommitteePage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ProgramCommitteePage;

export const pcPageQuery = graphql`
  query PCPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        members {
          name
          affiliation
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
