module.exports = {
  siteMetadata: {
    title: "Move to Canada",
    phone: "1-800-321-MOVE",
    email: "info@movetocanada.com",
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
        icon: "src/images/icon.png",
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
