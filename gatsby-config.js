module.exports = {
  siteMetadata: {
    title: "ALTA 2021 Workshop",
    siteUrl: "https://alta2021.alta.asn.au",
    sponsors: [
      { 
        name: "Defence Science and Technology Group",
        level: "Platinum",
        link: "https://www.dst.defence.gov.au/",
        image: "dod.png"
      },
      // { 
      //   name: "CSIRO",
      //   level: "Silver",
      //   link: "https://www.csiro.au/",
      //   image: "csiro-logo.png"
      // },
      { 
        name: "Google",
        level: "Gold",
        image: "Google Logo.png",
        link: "https://careers.google.com/"
      },
      //  { 
      //    name: "GO1",
      //    level: "Bronze",
      //    image: "GO1_Logo_Petrol_Green_RGB.png",
      //    link: "https://www.go1.com/"
      //  },
      { 
        name: "University of Melbourne",
        level: "Event",
        image: "MDAP.png",
        link: "https://mdap.unimelb.edu.au/"
      },
      { 
        name: "Flinders University",
        level: "Event",
        image: "flinders.png",
        link: "https://www.flinders.edu.au/"
      },
      { 
        name: "CNRS International Research Lab CROSSING ",
        level: "Event",
        image: "crossing.png",
        link: "https://crossing.cnrs.fr/"
      },
      { 
        name: "",
        longName: "",
        level: "",
        image: "",
        link: ""
      }
    ],
    sponsorLevels: ["Platinum", "Gold", "Silver", "Bronze"]
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
