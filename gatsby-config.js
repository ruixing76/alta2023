module.exports = {
  siteMetadata: {
    title: "ALTA 2019 Workshop",
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
        name: "DST",
        longName: "Defence Science and Technology",
        level: "Gold",
        link: "https://www.dst.defence.gov.au/"
      },
      { 
        name: "CSIRO",
        longName: "CSIRO | Data61",
        level: "Gold",
        link: "https://www.data61.csiro.au/"
      }
    ],
    sponsorLevels: ["Platinum", "Gold"]
  },
  plugins: [
    "gatsby-plugin-react-helmet",
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
