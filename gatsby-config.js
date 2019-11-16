module.exports = {
  siteMetadata: {
    title: "ALTA 2019 Workshop",
    siteUrl: "https://alta2019.alta.asn.au",
    sponsors: [
      { 
        name: "Sintelix",
        level: "Platinum",
        link: "https://sintelix.com/",
        image: "sintelix.png"
      },
      { 
        name: "Google",
        level: "Gold",
        link: "https://google.com",
        image: "google.png"
      },
      { 
        name: "Defence Science and Technology",
        longName: "Defence Science and Technology",
        level: "Gold",
        image: "dod.png",
        link: "https://www.dst.defence.gov.au/"
      },
      { 
        name: "UTS Engineering and IT",
        longName: "UTS Faculty of Engineering and IT",
        level: "Gold",
        image: "uts.png",
        link: "https://feit.uts.edu.au"
      },
      { 
        name: "IBM Research Australia",
        longName: "IBM Research Australia",
        level: "Bronze",
        image: "ibm.svg",
        link: "https://www.research.ibm.com/labs/australia/index.shtml"
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
