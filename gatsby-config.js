module.exports = {
  siteMetadata: {
    title: "The Move to Canada Team",
    phone: "1-833-832-6682",
    phoneAlt: "1-833-TEAM-MTC",
    email: "info@movetocanada.com",
    siteUrl: "https://movetocanada.com",
    copyright: 2021,
    language: "English",
    description:
      "Planning to move to Canada? The Move to Canada Team can help make it easy and stress free!",
    keywords: [
      `how to move to canada`,
      `immigrate to Canada`,
      `immigration consultants Canada`,
      `moving to Canada`,
      `canada immigration`,
      `Canadian real estate`,
      `Corporate Law Canada`,
      `Immigration law Canada`,
      `moving business to Canada`,
      `moving my business to Canada`,
      `international taxation Canada`,
      `international banking Canada`,
      `owning property in Canada`,
      `relocating to Canada`,
      `relocating my business to Canada`,
      `personal and family immigration Canada`,
      `personal and family immigration`,
      `buying a home in Canada`,
      `real estate law canada`,
    ],
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
    "gatsby-transformer-remark",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/`,
      },
    },
  ],
};
