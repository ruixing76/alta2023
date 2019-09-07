import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import PageHelmet from "../components/PageHelmet";
import ReactMarkdown from "react-markdown";

import Layout from "../components/Layout";
import "../styles/home.scss";

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

export const HomePageTemplate = ({ home }) => {
  return (
    <>
      <section className="header">
        <div className="header-container  container">
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
    return (
      <Layout footerData={footerData} navbarData={navbarData} site={site}>
        <PageHelmet page={{frontmatter: home}} />
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
