module.exports = {
  siteMetadata: {
    title: "ALTA 2019 Workshop",
    siteUrl: "https://alta2019.alta.asn.au",
    sponsors: [
      { 
        name: "Sintelix",
        level: "Platinum",
        link: "https://sintelix.com/"
      },
      { 
        name: "Google",
        level: "Gold",
        link: "https://google.com"
      },
      { 
        name: "Defence Science and Technology",
        longName: "Defence Science and Technology",
        level: "Gold",
        link: "https://www.dst.defence.gov.au/"
      },
    ],
    sponsorLevels: ["Platinum", "Gold"]
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/img`,
        name: "images",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [],
      },
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-141744087-1",
      }
    },
    {
      resolve: "gatsby-plugin-netlify-cms",
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: "./src/img/favicon.png",
      },
    },
    "gatsby-plugin-netlify", // make sure to keep it last in the array
  ],
};
