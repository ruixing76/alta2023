import React from "react";
import Helmet from 'react-helmet';

const PageHelmet = ({ page }) => {
  const {
    frontmatter: {
      seo: { title: seoTitle, description: seoDescription, browserTitle },
    },
  } = page;
  return (
    <Helmet>
      <meta name="title" content={seoTitle} />
      <meta name="description" content={seoDescription} />
      <title>{browserTitle}</title>
    </Helmet>
  )
}

export default PageHelmet