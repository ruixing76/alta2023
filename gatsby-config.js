module.exports = {
  siteMetadata: {
    title: "ALTA 2019 Workshop",
    siteUrl: "https://alta2019.alta.asn.au",
    sponsors: [
      { 
        name: "Defence Science and Technology",
        level: "Platinum",
        link: "https://www.dst.defence.gov.au/",
        image: "dod.png"
      },
      { 
        name: "",
        level: "",
        link: "",
        image: ""
      },
      { 
        name: "",
        longName: "",
        level: "",
        image: "",
        link: ""
      },
      { 
        name: "",
        longName: "",
        level: "",
        image: "",
        link: ""
      },
      { 
        name: "",
        longName: "",
        level: "",
        image: "",
        link: ""
      },
      { 
        name: "",
        longName: "",
        level: "",
        image: "",
        link: ""
      }
    ],
    sponsorLevels: ["Platinum", "Gold"]
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sass",
    "gatsby-plugin-remove-trailing-slashes",
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
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/data`,
        name: "data",
      },
    },
    "gatsby-transformer-csv",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-141744087-1",
      }
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
