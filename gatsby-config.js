module.exports = {
  siteMetadata: {
    title: "The Move to Canada Team",
    phone: "1-844-226-6683",
    email: "info@movetocanada.com",
    siteUrl: "https://movetocanada.com",
    copyright: 2021,
    language: "English",
    description:
      "Planning to move to Canada? The Move to Canada Team can help make it easy and stress free!",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    `gatsby-plugin-sass`,
    `gatsby-link`,
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/favicon.ico",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
