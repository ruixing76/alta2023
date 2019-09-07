import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import HTMLContent from "../components/Content";
import PageHelmet from "../components/PageHelmet";
import "../styles/sponsors-page.scss";
import StandardPageTemplate from "../components/StandardPageTemplate";

const sponsorLevels = ["Platinum", "Gold", "Silver", "Bronze"];

const SponsorImageLink = (props) => (
  <img className="sponsor-image" src={`/sponsors/${props.sponsor.image}`} alt={props.sponsor.longName} />
)

const SponsorTextLink = (props) => (
  <div className="sponsor-name">{props.sponsor.longName}</div>
)

const Sponsor = (props) => {
  const { sponsor } = props;
  return (
    <a href={sponsor.link} title={sponsor.name}>
      <div className="sponsor-tile" key={sponsor.name}>
        <div className="sponsor-image-helper" />
        {sponsor.image === undefined ? <SponsorTextLink sponsor={sponsor} /> : <SponsorImageLink sponsor={sponsor} />}
      </div>
    </a>
  )
}

const SponsorLevelListing = (props) => {
  const { level, sponsors } = props;
  return (
    <div className="sponsor-block" key={level}>
      <h4 className="sponsor-level">{level} Sponsors</h4>
      <div className="sponsors-at-level">
        {sponsors.map(s => <Sponsor sponsor={s} />)}
      </div>
    </div>
  );
}

const SponsorListing = (props) => {
  const { sponsors } = props;
  return (
    <div className="sponsor-listing">
      {
        sponsorLevels.map(level => {
          const matching = sponsors.filter(s => s.level === level);
          return matching.length ? <SponsorLevelListing level={level} sponsors={matching} /> : null;
        })
      }
    </div>
  );
}

const SponsorsPage = ({ data }) => {
  const { markdownRemark: page, footerData, navbarData, site } = data;
  const { sponsors } = site.siteMetadata;

  return (
    <Layout footerData={footerData} navbarData={navbarData} site={site}>
      <PageHelmet page={page} />
      <StandardPageTemplate page={{ ...page }}>
        <SponsorListing sponsors={sponsors} />
        <HTMLContent className="sponsor-post-description" content={page.html} />
      </StandardPageTemplate>
    </Layout>
  );
};

SponsorsPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default SponsorsPage;

export const pcPageQuery = graphql`
  query SponsorPage($id: String!) {
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
