import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import PageHelmet from "../components/PageHelmet";
import ReactMarkdown from "react-markdown";
import "../styles/sponsors-page.scss";

import Layout from "../components/Layout";
import "../styles/home.scss";

const sponsorLevels = ["Platinum", "Gold", "Silver", "Bronze"];

const NewsItem = ({item}) => (
  <li className="news-item">
    <span className="news-date">{item.date}</span>
    <ReactMarkdown className="news-text" source={item.text}/>
  </li>
)

const NewsSection = ({items}) => (
  <div className="news-section-wrapper">
    <div className="news-section">
      <h4>Latest News</h4>
      <ul className="news-section-list">
        {items.map(i => <NewsItem item={i}></NewsItem>)}
      </ul>
    </div>
  </div>
)


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
    <div className={`sponsor-block level-${level.toLowerCase()}`} key={level}>
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

export const HomePageTemplate = ({ home, sponsors }) => {

  return (
    <>
      <section className="header">
        <div className="header-container container">
          {home.headerImage && 
            <img className="header-image" src={home.headerImage.image} alt={home.headerImage.imageAlt} />
          }
          <div className="header-text">
            <h3 className="header-name">{home.title}</h3>
            <h4 className="header-tagline">
              <span className="header-taglinePart">{home.description}</span>
            </h4>
            <div className="header-extra-info">
              {home.extraInfo.map((ei, idx) => <p key={idx}>{ei}</p>)}
            </div>
          </div>
        </div>
      </section>
      <NewsSection items={home.newsItems}/>
      <section className="sponsors">
        <SponsorListing sponsors={sponsors} />
      </section>
     </>
  );
};

class HomePage extends React.Component {
  render() {
    const { data } = this.props;
    const {
      data: { footerData, navbarData, site },
    } = this.props;
    const { frontmatter: home } = data.homePageData.edges[0].node;
    const { sponsors } = site.siteMetadata;
    return (
      <Layout footerData={footerData} navbarData={navbarData} site={site}>
        <PageHelmet page={{frontmatter: home}} />
        <HomePageTemplate home={home} sponsors={sponsors} />
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
            description
            extraInfo
            headerImage {
              image
              imageAlt
            }
            seo {
              browserTitle
              title
              description
            }
            newsItems {
              date(formatString: "YYYY-MM-DD")
              text
            }
          }
        }
      }
    }
  }
`;
